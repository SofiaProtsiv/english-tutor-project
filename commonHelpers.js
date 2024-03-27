(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const x={ua:{header:{menu:{about_me:"ПРО МЕНЕ",formats:"ВАРТІСТЬ",reviews:"ВІДГУКИ",contacts:"КОНТАКТИ"}},hero:{"main-title":"давай вивчати англійську разом","about-me":"Я - вчитель, із яким ви будете активно спілкуватися, ділитися посмішками, вивчати захоплюючі теми та підвищувати рівень англійської.","btn-connect":"записатися"},"about-me":{title:"Я альона — твій вчитель англійської",paragraph:{bold:"Сама того не розуміючи, я стала поліглотом.",textOne:"Я сама постійно вивчаю мови і можу спілкуватися на шістьох з них. Саморозвиток – це те, що рухає мене вперед і допомагає віднаходити сенси. Я реалізовую потенціал свого розвитку, подорожуючи світом мови, і вчу робити це своїх студентів. Кожне слово, яке ви вивчаєте, відкриває двері до нових можливостей та перспектив.",textTwo:"Саморозвиток через вивчення мови - це подорож у світ розширення горизонтів, розуміння власних можливостей і амбіцій, збільшення спроможності взаємодіяти з різними культурами. Відкрийте для себе нові світи через вивчення мови і перетворіть свій саморозвиток на незабутню подорож."}},advice:{title:"Щоб вивчення мови було цікавим та захоплюючим",list:{list_item_1:"<b>Використовую різноманітну кількість ресурсів:</b> книги, відео, аудіоподкасти, мобільні додатки та інтерактивні вправи, щоб уникнути монотонності",list_item_2:"<b>Навчаю різноманітними методами і роблю це інтерактивно:</b> на заняттях ми практикуємо рольові ігри, діалоги, віртуальні екскурсії, дебати та імпровізації, щоб зробити навчання більш захоплюючим",list_item_3:"<b>Готую до подорожей та побутових тем:</b> розумію наскільки важливо вміти використовувати мову у реальних ситуаціях та спілкуватися з носіями мови",list_item_4:"<b>Спілкуюся та надаю менторську підтримку:</b> розуміючи запит та потенціал студента, я скеровую його для отримання оптимального результату. А інколи робота перетворюється паралельно в терапевтичну сесію. Наприклад, коли день жахливий, а поспілкуєшся з викладачем англійської і стає легше :)"}},quote:{},opportunities:{title:{global:"Глобальна комунікація",career:"Кар’єрні можливості",edu:"Можливості освіти",culture:"Культурний обмін",tech:"Технологічні досягнення",travel:"Подорожі та туризм"},text:{global:"Англійська — глобальна мова спілкування, яка допомагає у комунікації між людьми з різних лінгвістичних груп.",career:"Більшість міжнародних компаній використовують англійську як основну мову для спілкування. Тому її знання може відкрити для вас нові кар’єрні перспективи.",edu:"Вивчення англійської дозволяє отримати доступ до більшої кількості інформації, досліджень та освітніх ресурсів, які часто доступні саме цією мовою.Можливості освіти",culture:"Володіння англійською сприяє культурному обміну та взаєморозумінню між людьми з різних куточків нашої планети.",tech:"Англійська також є домінуючою в галузі технологій та Інтернету. Її знання важливе у відслідковуванні технологічних інновацій та активній участі в них.",travel:"Зі знанням англійської подорожі стануть приємнішими, а спілкування з місцевими жителями та орієнтування в невідомих місцях стане легшим."}},requirements:{title:"Вивчення мови неможливе без",firstSubtitle:"Мотивації",firstArticle:"Зацікавленість і бажання вивчати нову мову є ключовими для досягнення успіху.",secondSubtitle:"Дисципліни",secondArticle:"Вивчення мови, що перетворюється на звичку і систематичний підхід допомагають у закріпленні навичок і досягненні успіху.",thirdSubtitle:"Практики",thirdArticle:"Регулярна практика — ключ до історії успіху. І це не лише англійської стосується.",fourthSubtitle:"Терпіння",fourthArticle:"Розуміння того, що вивчення мови — це процес, що вимагає часу та наполегливості."},workflow:{},assessment:{},reviews:{},footer:{},modal:{},"pop-up":{},formats:{title:"Формати навчання",types:{format1:{title:"Індивідуальне навчання",text:"Формат навчання для тих, хто шукає персоналізований підхід та максимальну увагу вчителя. Заняття в індивідуальному форматі дозволяють адаптувати матеріали та теми до конкретних потреб та темпу вивчення кожного учня.",duration:{duration1:"30хв",duration2:"45хв",duration3:"60хв"},prices:{price1:"від $10",price2:"від $15",price3:"від $18"}},format2:{title:"Парні заняття",text:"Парне навчання — ідеальний спосіб сприяти взаємодопомозі та взаємному навчанню. Учасники можуть практикуватися та взаємно мотивувати один одного. Цей формат сприяє підтримці та створенню дружби на шляху вивчення мови.",duration:{duration1:"30хв",duration2:"45хв",duration3:"60хв"},prices:{price1:"від $15",price2:"від $18",price3:"від $20"}},format3:{title:"Групові заняття",text:"Групове навчання — це відмінний спосіб занурення в англійську мову. Заняття в групі дозволяють взаємодіяти з різними персонами, обмінюватися ідеями та розвивати навички спілкування в різних ситуаціях.",duration:"60хв",price:"від 400 грн"}},button:{text:"Записатися"}}},en:{header:{menu:{about_me:"ABOUT ME",formats:"PRICE",reviews:"REVIEWS",contacts:"CONTACTS"}},hero:{"main-title":"let's study English together","about-me":"I am a teacher with whom you will actively communicate, share smiles, learn exciting topics and improve your English.","btn-connect":"sign up"},"about-me":{title:"I am Alyona - yours English teacher",paragraph:{bold:"Without even thinking of it, I became a polyglot",textOne:"I constantly study languages and can communicate in six of them. Self-development is what moves me forward and helps me find meaning. I realized the potential of my development by traveling the world of language, and I teach my students to do the same. Every word you learn opens the door to new possibilities and perspectives.",textTwo:"Self-development through language learning is a journey into the world of expanding horizons, understanding one's own capabilities and ambitions, and increasing the ability to interact with different cultures. Discover new worlds through language learning and turn your self-development into an unforgettable journey."}},advice:{title:"Language learning should be an interesting and exciting",list:{list_item_1:"<b>Use a variety of resources:</b> books, videos, audio podcasts, mobile applications and interactive exercises to avoid monotony",list_item_2:"<b>Teach in a variety of ways and do it interactively:</b> in classes we practice role-playing, dialogues, virtual tours, debates and improvisations to make learning more exciting",list_item_3:"<b>Preparing for travel and everyday topics:</b> I understand how important it is to be able to use the language in real situations and communicate with native speakers",list_item_4:"<b>I communicate and provide mentoring support:</b> understanding the student's request and potential, I guide him to obtain an optimal result. And sometimes the work turns into a therapy session in parallel. For example, when the day is terrible, but you talk to the English teacher and it becomes easier. This is proved by my students :)"}},quote:{},opportunities:{title:{global:"",career:"",edu:"",culture:"",tech:"",travel:""},text:{global:"",career:"",edu:"",culture:"",tech:"",travel:""}},requirements:{title:"Language learning is impossible without",firstSubtitle:"Motivation",firstArticle:"Interest and desire to learn a new language are key to success.",secondSubtitle:"Discipline",secondArticle:"Learning a language that becomes a habit and a systematic approach helps in consolidating skills and achieving success.",thirdSubtitle:"Practice",thirdArticle:"Regular practice is the key to a success story. And this applies not only to English.",fourthSubtitle:"Patience",fourthArticle:"Understanding that learning a language is a process that requires time and perseverance."},workflow:{},assessment:{},reviews:{},footer:{},modal:{},"pop-up":{},formats:{title:"Studying formats",types:{format1:{title:"Individual lessons",text:"Study format for those looking for a personalized approach and maximum teacher attention. Lessons in an individual format allow you to adapt materials and topics to the specific needs and learning pace of each student.",duration:{duration1:"30min",duration2:"45min",duration3:"60min"},prices:{price1:"from $10",price2:"from $15",price3:"from $18"}},format2:{title:"Pair lessons",text:"Peer learning is an ideal way to promote mutual support and mutual learning. Participants can practice and mutually motivate each other. This format helps to maintain and build friendships on the language learning journey.",duration:{duration1:"30min",duration2:"45min",duration3:"60min"},prices:{price1:"from $15",price2:"from $18",price3:"from $20"}},format3:{title:"Group lessons",text:"Group study is a great way to immerse yourself in the English language. Group classes allow you to interact with different people, exchange ideas and develop communication skills in different situations.",duration:"60min",price:"from 400 grn"}},button:{text:"Sign up"}}}};function I(e,t){return t.split(".").reduce((a,n)=>a?a[n]:void 0,e)}function g(e){document.querySelectorAll("[data-lang]").forEach(r=>{const a=r.getAttribute("data-lang"),n=I(x[e],a);n&&(r.innerHTML=n)})}const h=document.querySelector("#HEADER_JS"),s=document.querySelector("#CUSTOM_SELECT_JS"),c=document.querySelector("#CUSTOM_SELECT_SMALL_JS"),f=Object.keys(x),o={current:""},d=document.querySelector("#HEADER_MENU_JS");function v(){h.classList.toggle("ih-header-menu-open")}d&&(d.removeEventListener("click",v),d.addEventListener("click",v));const m=document.querySelector("#MENU_NAV_JS");function y(e){e.target.tagName==="A"&&h.classList.remove("ih-header-menu-open")}m&&(m.removeEventListener("click",y),m.addEventListener("click",y));const u=document.querySelector("#MENU_NAV_JS"),C=()=>` <li class="ih-menu-item" data-section="about-me" data-lang="header.menu.about_me" type="button">
            ПРО МЕНЕ
          </li>
          <li class="ih-menu-item" data-section="formats" data-lang="header.menu.formats" type="button">
            ВАРТІСТЬ
          </li>
          <li class="ih-menu-item" data-section="reviews"
          data-lang="header.menu.reviews" type="button">
            ВІДГУКИ
          </li>
          <li class="ih-menu-item" data-section="contacts" data-lang="header.menu.contacts" type="button">
            КОНТАКТИ
          </li>`,$=()=>{u&&(u.innerHTML=C())};$();function b(e){if(e.target.dataset.section){const t=e.target.dataset.section,r=document.getElementById(t);r&&(r.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),h.classList.remove("ih-header-menu-open"))}}u&&(u.removeEventListener("click",b),u.addEventListener("click",b));function P(e,t){return`
    <div data-value="${e}" class="ih-custom-select-option" style="
    ${o.current===e?"background:transparent; ":""}order:${o.current===e?0:t}">${e}</div>
`}function L(){return`
   <svg class="ih-custom-select-icon">
            <use href="/images/ih-icons-sprite.svg#icon-switch-arrow"></use>
          </svg>
    ${f.map((e,t)=>P(e,t+1)).join("")}

`}function _(){return`
        ${f.map(e=>`<div data-value="${e}" class="ih-select-lang-btn${o.current===e?" select-lang-btn-active":""}">${e}</div>`).join(`<svg class="ih-vertical-line">
           <use href="/images/ih-icons-sprite.svg#icon-vertical-line"></use>
         </svg>`)}
`}function w(e){if(s){s.classList.toggle("ih-custom-select-open");const t=e.target.dataset.value;t&&t!==o.current&&(o.current=t,localStorage.setItem("lang",t),g(t),s.innerHTML=L())}}function k(){s&&(s.innerHTML=L(),s.removeEventListener("click",w),s.addEventListener("click",w))}function S(e){if(c){const t=e.target.dataset.value;t&&t!==o.current&&(o.current=t,localStorage.setItem("lang",t),g(t),c.innerHTML=_())}}function M(){c&&(c.innerHTML=_(),c.removeEventListener("click",S),c.addEventListener("click",S))}M();k();const E=document.querySelector("#MENU_SOCIAL_JS"),q=()=>`  <a
         class="ih-menu-social-item"
         target="_blank"
         rel="noopener"
         href="https://t.me/@alyona_alyona"
       >
         TELEGRAM
       </a>
       <a
         class="ih-menu-social-item"
         target="_blank"
         rel="noopener"
         href="https://www.instagram.com/lolaserenity?igsh=MWxpdGRwM2R2M3Rxcg=="
       >
         INSTAGRAM
       </a>
       <a
         class="ih-menu-social-item"
         target="_blank"
         rel="noopener"
         href="https://www.facebook.com/alyona.stulina"
       >
         FACEBOOK
       </a>`,N=()=>{E&&E.insertAdjacentHTML("beforeend",q())};N();function p(e){localStorage.setItem("lang",e),o.current=e,g(e),k(),M()}const O=()=>{const e=localStorage.getItem("lang");if(e){p(e);return}!e&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){var r=t.coords.latitude,a=t.coords.longitude,n="https://nominatim.openstreetmap.org/reverse?format=json&lat="+r+"&lon="+a;fetch(n).then(i=>i.json()).then(i=>{if(i.address){const l=i.address.country_code;if(f.includes(l)){p(l);return}p("en")}}).catch(i=>{console.error("Error fetching geolocation data:",i)})})};O();const B=new Swiper(".opp-text-swiper",{allowTouchMove:!1,loop:!0,speed:1800,slidesPerView:2,centeredSlides:!0,spaceBetween:20,effect:"creative",creativeEffect:{prev:{translate:[0,"260px",0],opacity:0},next:{translate:["384px",0,0],opacity:0}},breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:3,spaceBetween:32}}});new Swiper(".opp-img-swiper",{navigation:{prevEl:".opp-button-prev",nextEl:".opp-button-next"},loop:!0,speed:1800,slidesPerView:1,centeredSlides:!0,spaceBetween:20,breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:3,spaceBetween:0}},on:{slideChangeTransitionStart:function(){document.querySelectorAll(".opp-img-wrapper").forEach(e=>e.classList.add("img-swiper-transition"))},slideChange:function(){B.slideToLoop(this.realIndex,1800)}}});const V=document.querySelector(".reviews-img-swiper"),R=document.querySelector(".reviews-text-swiper"),A=new Swiper(V,{loop:!0,speed:1500,spaceBetween:10,effect:"creative",creativeEffect:{prev:{translate:[0,"260px",0],opacity:0},next:{translate:["384px",0,0],opacity:0}}}),T=new Swiper(R,{loop:!0,speed:1500,effect:"creative",creativeEffect:{prev:{translate:[0,"260px",0],opacity:0},next:{translate:["384px",0,0],opacity:0}},navigation:{nextEl:".reviews-button-next",prevEl:".reviews-button-prev"}});A.controller.control=T;T.controller.control=A;
//# sourceMappingURL=commonHelpers.js.map