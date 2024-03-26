import axios from "axios";
const buttonClick = document.querySelector(".btn-connect");
const modalWindow = document.querySelector(".mdl-box");
const modalBackground = document.querySelector(".mdl-flex");
const contentForm = document.querySelector(".mdl-content");
const form = document.querySelector(".mdl-forma");
const butClose = document.querySelector(".close");
const formUser = document.querySelector(".forma-for-connect");
const firstBut = document.querySelector(".first-item-list");
const selectList = document.querySelector(".list-item-select");
const selectOpt = document.querySelectorAll(".list-item-select-opt");
const inputs = document.querySelectorAll(".user-inpt");
const TOKEN = "6077606622:AAG6g12itzLvnsQfazmk9-oBfkHb1kflQYk";
let IDCZAT = -1002080915692;
const NAME_PATTERN = /^[a-zA-Zа-яА-ЯёЁґҐіІїЇєЄ]+$/;
const PHONE_PATTERN = /^\+[0-9]{11,12}$/;


// show modal window
buttonClick.addEventListener("click", showModalWindow);

function showModalWindow() {
    modalWindow.style.display = "block";
    document.body.style.overflow = "hidden";
}
// close modal window
document.addEventListener("keydown", closeModal);
modalBackground.addEventListener("click", closeModal);
butClose.addEventListener("click", closeModal);

function closeModal(e) {
    if (!e || e.target === modalBackground || e.key === "Escape" || e.target === butClose || e.target.classList.contains("use-close")) {
        modalWindow.style.display = "none";
        document.body.style.overflowY = "scroll";
    }
}
// send message
formUser.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {

   e.preventDefault();

   let isValid = true;

   inputs.forEach(input => {
    if (input.classList.contains("username")) {
        if (!NAME_PATTERN.test(input.value)) {
            isValid = false;
            checkInputs(input);
        }
    } else if (!PHONE_PATTERN.test(input.value)) {
        isValid = false;
        checkInputs(input);
    }
    });

    if (!isValid) {
        return;
    }

    const formData = new FormData(e.target);
    const userName = formData.get("username");
    const userPhone = formData.get("phone");
    const comment = formData.get("comment");
    const education = `${firstBut.textContent === "Оберіть варіант навчання"? "Формат не вибраний" : `${firstBut.textContent}`}`;
        
    const message = `
    Нова заявка:
    1) Ім'я: ${userName};
    2) Телефон: ${userPhone};
    3) Формат навчання: ${education};
    4) Коментар: ${comment ? comment : "Без коментарів"};
    `;

    sendMessage(message);
}
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

//check input
inputs.forEach(input => {
    input.addEventListener("blur", () => checkInputs(input));
});

function checkInputs(input) {
    if (!input.checkValidity()) {
        input.classList.add("red");
        errorParagraf(input.classList.value, true);
    } else {
        input.classList.remove("red");
        errorParagraf(input.classList.value, false);
    }
}

// add error paragraf
function errorParagraf(classList, addOrRemove) {
    const classes = classList.split(' ');
    let selector = '';
    classes.forEach(className => {
        selector += `.${className}`;
    
    });

    const errorParagraph = document.querySelector(selector + ' + .error-input');
    errorParagraph.classList.toggle("check", addOrRemove);
}

// settings for my select
firstBut.addEventListener("click", () => {
    selectList.classList.toggle("list-item-select-visible");
});

selectOpt.forEach(option => option.addEventListener("click", (e) => {
    firstBut.textContent = e.target.textContent;
    firstBut.classList.add("first-item-list-active");
    selectList.classList.remove(".list-item-select-visible");
}));

//succes feedback//
async function feedbackMessage(success) {
    let str = `
        <h2 class="title-feedback">${success ? `See you soon!` : `Error`}</h2>
        <p class="text-feedback">${success ? `Ваші дані були успішно відправлені.</br> Будь ласка, очікуйте: я зв'яжуся з Вами якнайшвидше для обговорення деталей.` : `На жаль, на сайті сталася помилка і Ваші дані не були відправлені. Спробуйте, будь ласка, пізніше.`}</p>`;

    contentForm.innerHTML = str;
    contentForm.classList.add("box-feedback");
    form.classList.add("form-feedback");
}
