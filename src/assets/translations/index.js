const translations = {
  ua: {
    header: {
      menu: {
        about_me: "ПРО МЕНЕ",
        quote: "ВАРТІСТЬ",
        reviews: "ВІДГУКИ",
        contacts: "КОНТАКТИ",
      },
    },
    hero: {
      "main-title": "давай вивчати англійську разом",
      "about-me":
        "Я - вчитель, із яким ви будете активно спілкуватися, ділитися посмішками, вивчати захоплюючі теми та підвищувати рівень англійської.",
      "btn-connect": "записатися",
    },
    "about-me": {},
    advice: {
      title: "Щоб вивчення мови було цікавим та захоплюючим",
      list: {
        list_item_1:
          "<b>Використовую різноманітну кількість ресурсів:</b> книги, відео, аудіоподкасти, мобільні додатки та інтерактивні вправи, щоб уникнути монотонності",
        list_item_2:
          "<b>Навчаю різноманітними методами і роблю це інтерактивно:</b> на заняттях ми практикуємо рольові ігри, діалоги, віртуальні екскурсії, дебати та імпровізації, щоб зробити навчання більш захоплюючим",
        list_item_3:
          "<b>Готую до подорожей та побутових тем:</b> розумію наскільки важливо вміти використовувати мову у реальних ситуаціях та спілкуватися з носіями мови",
        list_item_4:
          "<b>Спілкуюся та надаю менторську підтримку:</b> розуміючи запит та потенціал студента, я скеровую його для отримання оптимального результату. А інколи робота перетворюється паралельно в терапевтичну сесію. Наприклад, коли день жахливий, а поспілкуєшся з викладачем англійської і стає легше :)",
      },
    },
    quote: {},
    opportunities: {},
    requirements: {
      title: "Вивчення мови неможливе без",
      firstSubtitle: "Мотивації",
      firstArticle:
        "Зацікавленість і бажання вивчати нову мову є ключовими для досягнення успіху.",
      secondSubtitle: "Дисципліни",
      secondArticle:
        "Вивчення мови, що перетворюється на звичку і систематичний підхід допомагають у закріпленні навичок і досягненні успіху.",
      thirdSubtitle: "Практики",
      thirdArticle:
        "Регулярна практика — ключ до історії успіху. І це не лише англійської стосується.",
      fourthSubtitle: "Терпіння",
      fourthArticle:
        "Розуміння того, що вивчення мови — це процес, що вимагає часу та наполегливості.",
    },
    workflow: {},
    assessment: {},
    reviews: {},
    footer: {},
    modal: {
      title : "Зв’язатися зі мною",
      text : "Будь ласка, заповніть форму і я зв’яжуся з Вами якнайшвидше для обговорення деталей.",
      label : {
        label1 : 
        `<span>Ваше ім’я
          <span class="star">*</span></span>
          <input type="text" class="user-inpt username" name="username" placeholder="Анастасія" pattern="[a-zA-Zа-яА-ЯёЁґҐіІїЇєЄ]+" required/>
          <span class="error-input" style="color: var(--accent-color);">Будь ласка, введіть коректне ім’я</span>`,
        label2 : 
        `<span>Номер телефону
         <span class="star">*</span></span>
         <input type="tel" class="user-inpt phone" name="phone" placeholder="+38 000 000 00 00" pattern="\\+[0-9]{11,12}" required/>
         <span class="error-input" style="color: var(--accent-color);">Будь ласка, введіть коректний номер(+)11/12 символів</span>`,
        label3 : 
        `Формат навчання<div class="new-select">
        <button type="button" class="user-btn first-item-list">Оберіть варіант навчання</button>

        <ul class="list-item-select" name="education">
            <li class="list-item-select-opt" data-value="Individual study">Індивідуальне навчання</li>
            <li class="list-item-select-opt" data-value="Study with a friend">Парне навчання</li>
            <li class="list-item-select-opt" data-value="Groupe study">Групове навчання</li>
        </ul>
        </div>`,
        label4 : `Коментар<textarea class="user-textarea text-com" name="comment" placeholder="Ваш коментар"></textarea>`,
      },
      textspan : {
        text1 : "Будь ласка, введіть коректне ім’я",
        text2 : "Будь ласка, введіть коректний номер(+)11/12 символів",
      },
      button : "ВІДПРАВИТИ",
      placeholder : {
        placeholder1 : "Анастасія",
        placeholder2 : "Оберіть варіант навчання",
        placeholder3 : "Ваш коментар",
      },
      textfdb : {
        success : "Ваші дані були успішно відправлені.<br> Будь ласка, очікуйте: я зв'яжуся з Вами якнайшвидше для обговорення деталей.",
        error : "На жаль, на сайті сталася помилка і Ваші дані не були відправлені. Спробуйте, будь ласка, пізніше." 
      },
      formats : {
        format1 : "Індивідуальне навчання",
        format2 : "Парне навчання",
        format3 : "Групове навчання",
      }
    },
    formats: {
      title: "Формати навчання",
      types: {
        format1: {
          title: "Індивідуальне навчання",
          text: "Формат навчання для тих, хто шукає персоналізований підхід та максимальну увагу вчителя. Заняття в індивідуальному форматі дозволяють адаптувати матеріали та теми до конкретних потреб та темпу вивчення кожного учня.",
          duration: {
            duration1: "30хв",
            duration2: "45хв",
            duration3: "60хв",
          },
          prices: {
            price1: "від $10",
            price2: "від $15",
            price3: "від $18",
          },
        },
        format2: {
          title: "Парні заняття",
          text: "Парне навчання — ідеальний спосіб сприяти взаємодопомозі та взаємному навчанню. Учасники можуть практикуватися та взаємно мотивувати один одного. Цей формат сприяє підтримці та створенню дружби на шляху вивчення мови.",
          duration: {
            duration1: "30хв",
            duration2: "45хв",
            duration3: "60хв",
          },
          prices: {
            price1: "від $15",
            price2: "від $18",
            price3: "від $20",
          },
        },
        format3: {
          title: "Групові заняття",
          text: "Групове навчання — це відмінний спосіб занурення в англійську мову. Заняття в групі дозволяють взаємодіяти з різними персонами, обмінюватися ідеями та розвивати навички спілкування в різних ситуаціях.",
          duration: "60хв",
          price: "від 400 грн",
        },
      },
      button: {
        text: "Записатися",
      },
    },
  },
  en: {
    header: {
      menu: {
        about_me: "ABOUT ME",
        quote: "QUOTE",
        reviews: "REVIEWS",
        contacts: "CONTACTS",
      },
    },
    hero: {
      "main-title": "let's study English together",
      "about-me":
        "I am a teacher with whom you will actively communicate, share smiles, learn exciting topics and improve your English.",
      "btn-connect": "sign up",
    },
    "about-me": {},
    advice: {
      title: "Language learning should be an interesting and exciting",
      list: {
        list_item_1:
          "<b>Use a variety of resources:</b> books, videos, audio podcasts, mobile applications and interactive exercises to avoid monotony",
        list_item_2:
          "<b>Teach in a variety of ways and do it interactively:</b> in classes we practice role-playing, dialogues, virtual tours, debates and improvisations to make learning more exciting",
        list_item_3:
          "<b>Preparing for travel and everyday topics:</b> I understand how important it is to be able to use the language in real situations and communicate with native speakers",
        list_item_4:
          "<b>I communicate and provide mentoring support:</b> understanding the student's request and potential, I guide him to obtain an optimal result. And sometimes the work turns into a therapy session in parallel. For example, when the day is terrible, but you talk to the English teacher and it becomes easier. This is proved by my students :)",
      },
    },
    quote: {},
    opportunities: {},
    requirements: {
      title: "Language learning is impossible without",
      firstSubtitle: "Motivation",
      firstArticle:
        "Interest and desire to learn a new language are key to success.",
      secondSubtitle: "Discipline",
      secondArticle:
        "Learning a language that becomes a habit and a systematic approach helps in consolidating skills and achieving success.",
      thirdSubtitle: "Practice",
      thirdArticle:
        "Regular practice is the key to a success story. And this applies not only to English.",
      fourthSubtitle: "Patience",
      fourthArticle:
        "Understanding that learning a language is a process that requires time and perseverance.",
    },
    workflow: {},
    assessment: {},
    reviews: {},
    footer: {},
    modal: {
      title : "Contact with me",
      text : "Please fill out the form and I will contact you as soon as possible to discuss the details.",
      label : {
        label1 : 
        `<span>Your name
        <span class="star">*</span></span>
        <input type="text" class="user-inpt username" name="username" placeholder="Anastasia" pattern="[a-zA-Zа-яА-ЯёЁґҐіІїЇєЄ]+" required/>
        <span class="error-input" style="color: var(--accent-color);">Please enter a valid name</span>`,
        label2 : 
        `<span>Phone number
        <span class="star">*</span></span>
        <input type="tel" class="user-inpt phone" name="phone" placeholder="+38 000 000 00 00" pattern="\\+[0-9]{11,12}" required/>
        <span class="error-input" style="color: var(--accent-color);">Please enter the correct number(+)11/12 characters</span>`,
        label3 : 
        `Format study
        <div class="new-select">
        <button type="button" class="user-btn first-item-list">Choose a format study</button>

        <ul class="list-item-select" name="education">
            <li class="list-item-select-opt" data-value="Individual study">Individual study</li>
            <li class="list-item-select-opt" data-value="Study with a friend">Study with a friend</li>
            <li class="list-item-select-opt" data-value="Groupe study">Groupe study</li>
        </ul>
        </div>`,
        label4 : `Comment<textarea class="user-textarea text-com" name="comment" placeholder="Your comment"></textarea>`,
      },
      button : "Send",
      textfdb : {
        success : "Your details have been sent successfully.<br> Please expect me to contact you as soon as possible to discuss the details.",
        error : "Unfortunately, there was an error on the site and your data was not sent. Please try again later." 
      },
    },
    formats: {
      title: "Studying formats",
      types: {
        format1: {
          title: "Individual lessons",
          text: "Study format for those looking for a personalized approach and maximum teacher attention. Lessons in an individual format allow you to adapt materials and topics to the specific needs and learning pace of each student.",
          duration: {
            duration1: "30min",
            duration2: "45min",
            duration3: "60min",
          },
          prices: {
            price1: "from $10",
            price2: "from $15",
            price3: "from $18",
          },
        },
        format2: {
          title: "Pair lessons",
          text: "Peer learning is an ideal way to promote mutual support and mutual learning. Participants can practice and mutually motivate each other. This format helps to maintain and build friendships on the language learning journey.",
          duration: {
            duration1: "30min",
            duration2: "45min",
            duration3: "60min",
          },
          prices: {
            price1: "from $15",
            price2: "from $18",
            price3: "from $20",
          },
        },
        format3: {
          title: "Group lessons",
          text: "Group study is a great way to immerse yourself in the English language. Group classes allow you to interact with different people, exchange ideas and develop communication skills in different situations.",
          duration: "60min",
          price: "from 400 grn",
        },
      },
      button: {
        text: "Sign up",
      },
    },
  },
};

export default translations;
