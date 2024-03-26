(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const _={ua:{header:{menu:{about_me:"ПРО МЕНЕ",quote:"ВАРТІСТЬ",reviews:"ВІДГУКИ",contacts:"КОНТАКТИ"}},hero:{"main-title":"давай вивчати англійську разом","about-me":"Я - вчитель, із яким ви будете активно спілкуватися, ділитися посмішками, вивчати захоплюючі теми та підвищувати рівень англійської.","btn-connect":"записатися"},"about-me":{},advice:{title:"Щоб вивчення мови було цікавим та захоплюючим",list:{list_item_1:"<b>Використовую різноманітну кількість ресурсів:</b> книги, відео, аудіоподкасти, мобільні додатки та інтерактивні вправи, щоб уникнути монотонності",list_item_2:"<b>Навчаю різноманітними методами і роблю це інтерактивно:</b> на заняттях ми практикуємо рольові ігри, діалоги, віртуальні екскурсії, дебати та імпровізації, щоб зробити навчання більш захоплюючим",list_item_3:"<b>Готую до подорожей та побутових тем:</b> розумію наскільки важливо вміти використовувати мову у реальних ситуаціях та спілкуватися з носіями мови",list_item_4:"<b>Спілкуюся та надаю менторську підтримку:</b> розуміючи запит та потенціал студента, я скеровую його для отримання оптимального результату. А інколи робота перетворюється паралельно в терапевтичну сесію. Наприклад, коли день жахливий, а поспілкуєшся з викладачем англійської і стає легше :)"}},quote:{},opportunities:{},requirements:{},workflow:{},assessment:{},reviews:{},footer:{},modal:{},"pop-up":{},formats:{title:"German title",button:{test:"Зписатися"}}},en:{header:{menu:{about_me:"ABOUT ME",quote:"QUOTE",reviews:"REVIEWS",contacts:"CONTACTS"}},hero:{"main-title":"let's study English together","about-me":"I am a teacher with whom you will actively communicate, share smiles, learn exciting topics and improve your English.","btn-connect":"sign up"},"about-me":{},advice:{title:"Language learning should be an interesting and exciting",list:{list_item_1:"<b>Use a variety of resources:</b> books, videos, audio podcasts, mobile applications and interactive exercises to avoid monotony",list_item_2:"<b>Teach in a variety of ways and do it interactively:</b> in classes we practice role-playing, dialogues, virtual tours, debates and improvisations to make learning more exciting",list_item_3:"<b>Preparing for travel and everyday topics:</b> I understand how important it is to be able to use the language in real situations and communicate with native speakers",list_item_4:"<b>I communicate and provide mentoring support:</b> understanding the student's request and potential, I guide him to obtain an optimal result. And sometimes the work turns into a therapy session in parallel. For example, when the day is terrible, but you talk to the English teacher and it becomes easier. This is proved by my students :)"}},quote:{},opportunities:{},requirements:{},workflow:{},assessment:{},reviews:{},footer:{},modal:{},"pop-up":{},formats:{title:"Formats studing",button:{test:"Lessons!!!"}}}};function E(e,o){return o.split(".").reduce((s,t)=>s?s[t]:void 0,e)}function l(e){document.querySelectorAll("[data-lang]").forEach(n=>{const s=n.getAttribute("data-lang"),t=E(_[e],s);t&&(n.innerHTML=t)})}const h=document.querySelector("#HEADER_JS"),L=()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){var o=e.coords.latitude,n=e.coords.longitude,s="https://nominatim.openstreetmap.org/reverse?format=json&lat="+o+"&lon="+n;fetch(s).then(t=>t.json()).then(t=>{if(t.address){var a=t.address.country;a==="Ukraine"?(localStorage.setItem("lang","ua"),g(),d()):(localStorage.setItem("lang","en"),g(),d())}}).catch(t=>{console.error("Error fetching geolocation data:",t)})})};L();const f=document.querySelector("#HEADER_MENU_JS");f&&f.addEventListener("click",()=>{h.classList.toggle("ih-header-menu-open")});const v=document.querySelector("#MENU_NAV_JS");v&&v.addEventListener("click",e=>{e.target.tagName==="A"&&h.classList.remove("ih-header-menu-open")});const u=document.querySelector("#MENU_NAV_JS"),w=()=>` <li class="ih-menu-item" data-section="about-me" data-lang="header.menu.about_me" type="button">
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
          </li>`,M=()=>{u&&(u.innerHTML=w())};M();u&&u.addEventListener("click",e=>{if(e.target.dataset.section){const o=e.target.dataset.section,n=document.getElementById(o);console.log(e.target.dataset.section),n&&(n.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),h.classList.remove("ih-header-menu-open"))}});const i=document.querySelector("#CUSTOM_SELECT_JS"),c=document.querySelector("#CUSTOM_SELECT_SMALL_JS"),p=Object.keys(_),r={current:p[0]},k=(e,o)=>`
    <div data-value="${e}" class="ih-custom-select-option" style="
    ${r.current===e?"background:transparent; ":""}order:${r.current===e?0:o}">${e}</div>
`,b=()=>`
   <svg class="ih-custom-select-icon">
            <use href="/images/ih-icons-sprite.svg#icon-switch-arrow"></use>
          </svg>
    ${p.map((e,o)=>k(e,o+1)).join("")}

`,y=()=>`
        ${p.map(e=>`<div data-value="${e}" class="ih-select-lang-btn${r.current===e?" select-lang-btn-active":""}">${e}</div>`).join(`<svg class="ih-vertical-line">
           <use href="/images/ih-icons-sprite.svg#icon-vertical-line"></use>
         </svg>`)}
`,d=()=>{if(i){const e=localStorage.getItem("lang");e&&e!==r.current&&(r.current=e,l(e)),i.innerHTML=b(),i.addEventListener("click",o=>{i.classList.toggle("ih-custom-select-open");const n=o.target.dataset.value;n&&n!==r.current&&(r.current=n,localStorage.setItem("lang",n),l(n),i.innerHTML=b())})}},g=()=>{if(c){const e=localStorage.getItem("lang");e&&e!==r.current&&(r.current=e,l(e)),c.innerHTML=y(),c.addEventListener("click",o=>{const n=o.target.dataset.value;n&&n!==r.current&&(r.current=n,localStorage.setItem("lang",n),l(n),c.innerHTML=y())})}};g();d();const S=document.querySelector("#MENU_SOCIAL_JS"),T=()=>`  <a
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
       </a>`,q=()=>{S&&S.insertAdjacentHTML("beforeend",T())};q();
//# sourceMappingURL=commonHelpers.js.map
