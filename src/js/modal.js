import axios from "axios";
const buttonClick = document.querySelector(".btn-connect");
const modalWindow = document.querySelector(".mdl-box");
const contentForm = document.querySelector(".mdl-content")
const butClose = document.querySelector(".close");
const formUser = document.querySelector(".forma-for-connect");
const formElements = Array.from(formUser.elements);
const TOKEN = "6077606622:AAG6g12itzLvnsQfazmk9-oBfkHb1kflQYk";
let IDCZAT = -1002080915692;

buttonClick.addEventListener("click", function () { 
    modalWindow.style.display = "block";
});

butClose.addEventListener("click", function () {
    modalWindow.style.display = "none";
});

formUser.addEventListener("submit", async (e) => {
    e.preventDefault();
    checkInput();

    const formData = new FormData(e.target);
    const userName = formData.get("username");
    const userPhone = formData.get("phone");
    const education = formData.get("education");
    const comment = formData.get("comment");
        
    const message = `
    Нова заявка:
    1) Ім'я: ${userName};
    2) Телефон: ${userPhone};
    3) Формат навчання: ${education};
    4) Коментар: ${comment ? comment : "Без коментарів"};
    `;

    sendMessage(message);
});

async function sendMessage(message) {
    try {
        await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            chat_id: IDCZAT,
            text: message
        });
        feedbackMessage(true);
    } 
    catch (error) {
        feedbackMessage(false);
        console.error("Error in sending sms:", error);
    }
}

//check input//

async function checkInput() {
    for (let i = 0; i < formElements.length; i++) {
        const isPhoneField = formElements[i].classList.contains("phone");
        const isTextComField = formElements[i].classList.contains("text-com");

        if (!isTextComField) {
        formElements[i].classList.toggle("red", formElements[i].value.trim() === "" || (isPhoneField && (!formElements[i].value.includes("+") || formElements[i].value.length < 12)));
        }
    }
}

//succes feedback//

async function feedbackMessage(success) {
        let str = `
                <h2 class="title-feedback">${success ? `See you soon!` : `Error`}</h2>
                <p class="text-feedback">${success ? `Ваші дані були успішно відправлені. Будь ласка, очікуйте: я зв'яжуся з Вами якнайшвидше для обговорення деталей.` : `На жаль, на сайті сталася помилка і Ваші дані не були відправлені. Спробуйте, будь ласка, пізніше.`}</p>`;

        contentForm.innerHTML = str;
        contentForm.style.flexDirection = "column";
        contentForm.style.gap = "24px";
}

formElements.forEach(field => {
    field.addEventListener("input", checkInput);
});
