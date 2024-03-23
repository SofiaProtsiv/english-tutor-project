import axios from "axios";
const buttonClick = document.querySelector(".btn-connect");
const modalWindow = document.querySelector(".mdl-box");
const contentForm = document.querySelector(".mdl-content")
const butClose = document.querySelector(".close");
const inputUserName = document.querySelector(".username");
const butSubmit = document.querySelector(".but-submit");
const inputUserPhone = document.querySelector(".phone");
const formUser = document.querySelector(".forma-for-connect");
const labelText = document.querySelector("label-inpt");
const token = "6077606622:AAG6g12itzLvnsQfazmk9-oBfkHb1kflQYk";
let idCzat = -1002080915692;


formUser.addEventListener("submit", async (e) => {
    e.preventDefault();

    checkName();
    checkPhone();

    async function sendMessage(message) {
        await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                chat_id: idCzat,
                text: message
            })
        .then(response => { 
            succes();
            response.status;
        })
        .catch(error => {
            errorr();
            console.error("Error in sending sms:", error)
        });
    }
        
        const formData = new FormData(document.querySelector('.forma-for-connect'));
        const userName = formData.get("username");
        const userPhone = formData.get("phone");
        const education = formData.get("education");
        const comment = formData.get("comment");
        
        const message = `
            Нова заявка:
    1) Им'я: ${userName};
    2) Телефон: ${userPhone};
    3) Формат навчання: ${education};
    4) Коментар: ${comment.split("").length > 0 ? comment : "Without comments"};
        `;
        sendMessage(message);
});


//check input name//

async function checkName() {

    if(inputUserName.value.trim() === "") {
        inputUserName.classList.add("red");
    }
    else {
        inputUserName.classList.remove("red");
    }
}

// //check input phone//

async function checkPhone() {

    if(inputUserPhone.value.trim() === "" || !(inputUserPhone.value.trim().includes("+")) || inputUserPhone.value.trim().split('').length < 12) {
        inputUserPhone.classList.add("red");
    }
    else {
        inputUserPhone.classList.remove("red");
    }
}

//succes feedback//

async function succes() {
        let str = `
                <h2 class="title-feedback">See you soon!</h2>
                <p class="text-feedback">Ваші дані були успішно відправлені. Будь ласка, очікуйте: я зв'яжуся з Вами якнайшвидше для обговорення деталей.</p>`;

        contentForm.innerHTML = str;
        contentForm.style.flexDirection = "column";
        contentForm.style.gap = "24px";
}

//succes error//

async function errorr() {
        let str = `
                <h2 class="title-feedback">Error</h2>
                <p class="text-feedback">На жаль, на сайті сталася помилка і Ваші дані не<br>були відправлені. Спробуйте, будь ласка, пізніше.</p>`;

        contentForm.innerHTML = str;
        contentForm.style.flexDirection = "column";
        contentForm.style.gap = "24px";
}

buttonClick.addEventListener("click", function () {
    modalWindow.style.display = "block";
});

butClose.addEventListener("click", function () {
    modalWindow.style.display = "none";
});

inputUserName.addEventListener("input", (e) => {
    checkName();
});

inputUserPhone.addEventListener("input", (e) => {
    checkPhone();
});

butSubmit.addEventListener("click", (e) => {
    checkName();
    checkPhone();
})
