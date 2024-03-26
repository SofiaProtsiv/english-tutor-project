(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const f={ua:{header:{menu:{about_me:"ПРО МЕНЕ",quote:"ВАРТІСТЬ",reviews:"ВІДГУКИ",contacts:"КОНТАКТИ"}},hero:{"main-title":"давай вивчати англійську разом","about-me":"Я - вчитель, із яким ви будете активно спілкуватися, ділитися посмішками, вивчати захоплюючі теми та підвищувати рівень англійської.","btn-connect":"записатися"},"about-me":{},advice:{title:"Щоб вивчення мови було цікавим та захоплюючим",list:{list_item_1:"<b>Використовую різноманітну кількість ресурсів:</b> книги, відео, аудіоподкасти, мобільні додатки та інтерактивні вправи, щоб уникнути монотонності",list_item_2:"<b>Навчаю різноманітними методами і роблю це інтерактивно:</b> на заняттях ми практикуємо рольові ігри, діалоги, віртуальні екскурсії, дебати та імпровізації, щоб зробити навчання більш захоплюючим",list_item_3:"<b>Готую до подорожей та побутових тем:</b> розумію наскільки важливо вміти використовувати мову у реальних ситуаціях та спілкуватися з носіями мови",list_item_4:"<b>Спілкуюся та надаю менторську підтримку:</b> розуміючи запит та потенціал студента, я скеровую його для отримання оптимального результату. А інколи робота перетворюється паралельно в терапевтичну сесію. Наприклад, коли день жахливий, а поспілкуєшся з викладачем англійської і стає легше :)"}},quote:{},opportunities:{},requirements:{},workflow:{},assessment:{},reviews:{},footer:{},modal:{},"pop-up":{},formats:{title:"German title",button:{test:"Зписатися"}}},en:{header:{menu:{about_me:"ABOUT ME",quote:"QUOTE",reviews:"REVIEWS",contacts:"CONTACTS"}},hero:{"main-title":"let's study English together","about-me":"I am a teacher with whom you will actively communicate, share smiles, learn exciting topics and improve your English.","btn-connect":"sign up"},"about-me":{},advice:{title:"Language learning should be an interesting and exciting",list:{list_item_1:"<b>Use a variety of resources:</b> books, videos, audio podcasts, mobile applications and interactive exercises to avoid monotony",list_item_2:"<b>Teach in a variety of ways and do it interactively:</b> in classes we practice role-playing, dialogues, virtual tours, debates and improvisations to make learning more exciting",list_item_3:"<b>Preparing for travel and everyday topics:</b> I understand how important it is to be able to use the language in real situations and communicate with native speakers",list_item_4:"<b>I communicate and provide mentoring support:</b> understanding the student's request and potential, I guide him to obtain an optimal result. And sometimes the work turns into a therapy session in parallel. For example, when the day is terrible, but you talk to the English teacher and it becomes easier. This is proved by my students :)"}},quote:{},opportunities:{},requirements:{},workflow:{},assessment:{},reviews:{},footer:{},modal:{},"pop-up":{},formats:{title:"Formats studing",button:{test:"Lessons!!!"}}}};function S(e,t){return t.split(".").reduce((s,n)=>s?s[n]:void 0,e)}function y(e){document.querySelectorAll("[data-lang]").forEach(o=>{const s=o.getAttribute("data-lang"),n=S(f[e],s);n&&(o.innerHTML=n)})}const v=document.querySelector("#HEADER_JS"),d=document.querySelector("#HEADER_MENU_JS");d&&(d.onclick=()=>{v.classList.toggle("ih-header-menu-open")});const g=document.querySelector("#MENU_NAV_JS");g&&(g.onclick=e=>{e.target.tagName==="A"&&v.classList.remove("ih-header-menu-open")});const l=document.querySelector("#MENU_NAV_JS"),_=()=>` <li class="ih-menu-item" data-section="about-me" data-lang="header.menu.about_me" type="button">
            ПРО МЕНЕ
          </li>
          <li class="ih-menu-item" data-section="quote" data-lang="header.menu.quote" type="button">
            ВАРТІСТЬ
          </li>
          <li class="ih-menu-item" data-section="reviews"
          data-lang="header.menu.reviews" type="button">
            ВІДГУКИ
          </li>
          <li class="ih-menu-item" data-section="contacts" data-lang="header.menu.contacts" type="button">
            КОНТАКТИ
          </li>`;l&&(l.onclick=e=>{if(e.target.dataset.section){const t=e.target.dataset.section,o=document.getElementById(t);console.log(e.target.dataset.section),o&&o.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}});const w=()=>{l&&(l.innerHTML=_())};w();const r=document.querySelector("#CUSTOM_SELECT_JS"),c=document.querySelector("#CUSTOM_SELECT_SMALL_JS"),m=Object.keys(f),a={current:m[0]},E=(e,t)=>`
    <div data-value="${e}" class="ih-custom-select-option" style="
    ${a.current===e?"background:transparent; ":""}order:${a.current===e?0:t}">${e}</div>
`,p=()=>`
   <svg class="ih-custom-select-icon">
            <use href="/images/ih-icons-sprite.svg#icon-switch-arrow"></use>
          </svg>
    ${m.map((e,t)=>E(e,t+1)).join("")}

`,h=()=>`
        ${m.map(e=>`<div data-value="${e}" class="ih-select-lang-btn${a.current===e?" select-lang-btn-active":""}">${e}</div>`).join(`<svg class="ih-vertical-line">
           <use href="/images/ih-icons-sprite.svg#icon-vertical-line"></use>
         </svg>`)}
`,M=()=>{r&&(r.innerHTML=p(),r.onclick=e=>{r.classList.toggle("ih-custom-select-open");const t=e.target.dataset.value;t&&t!==a.current&&(a.current=t,y(t),r.innerHTML=p())})},L=()=>{c&&(c.innerHTML=h(),c.onclick=e=>{const t=e.target.dataset.value;t&&t!==a.current&&(a.current=t,y(t),c.innerHTML=h())})};L();M();const b=document.querySelector("#MENU_SOCIAL_JS"),k=()=>`  <a
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
       </a>`,T=()=>{b&&b.insertAdjacentHTML("beforeend",k())};T();
//# sourceMappingURL=commonHelpers.js.map
