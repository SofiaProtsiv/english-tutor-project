(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const S={ua:{header:{menu:{about_me:"ПРО МЕНЕ",quote:"ВАРТІСТЬ",reviews:"ВІДГУКИ",contacts:"КОНТАКТИ"}},hero:{},"about-me":{},advice:{},quote:{},opportunities:{},requirements:{},workflow:{},assessment:{},reviews:{},footer:{},modal:{},"pop-up":{},formats:{title:"German title",button:{test:"Зписатися"}}},en:{header:{menu:{about_me:"ABOUT ME",quote:"QUOTE",reviews:"REVIEWS",contacts:"CONTACTS"}},hero:{},"about-me":{},advice:{},quote:{},opportunities:{},requirements:{},workflow:{},assessment:{},reviews:{},footer:{},modal:{},"pop-up":{},formats:{title:"Formats studing",button:{test:"Lessons!!!"}}}};function b(e,t){return t.split(".").reduce((s,n)=>s?s[n]:void 0,e)}function y(e){document.querySelectorAll("[data-lang]").forEach(r=>{const s=r.getAttribute("data-lang"),n=b(S[e],s);n&&(r.textContent=n)})}const v=document.querySelector("#HEADER_JS"),d=document.querySelector("#HEADER_MENU_JS");d&&(d.onclick=()=>{v.classList.toggle("ih-header-menu-open")});const f=document.querySelector("#MENU_NAV_JS");f&&(f.onclick=e=>{e.target.tagName==="A"&&v.classList.remove("ih-header-menu-open")});const l=document.querySelector("#MENU_NAV_JS"),M=()=>` <li class="ih-menu-item" data-section="about-me" data-lang="header.menu.about_me" type="button">
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
          </li>`;l&&(l.onclick=e=>{if(e.target.dataset.section){const t=e.target.dataset.section,r=document.getElementById(t);console.log(e.target.dataset.section),r&&r.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}});const E=()=>{l&&(l.innerHTML=M())};E();const i=document.querySelector("#CUSTOM_SELECT_JS"),c=document.querySelector("#CUSTOM_SELECT_SMALL_JS"),m=Object.keys(S),a={current:m[0]},w=(e,t)=>`
    <div data-value="${e}" class="ih-custom-select-option" style="
    ${a.current===e?"background:transparent; ":""}order:${a.current===e?0:t}">${e}</div>
`,g=()=>`
   <svg class="ih-custom-select-icon">
            <use href="/images/ih-icons-sprite.svg#icon-switch-arrow"></use>
          </svg>
    ${m.map((e,t)=>w(e,t+1)).join("")}

`,p=()=>`
        ${m.map(e=>`<div data-value="${e}" class="ih-select-lang-btn${a.current===e?" select-lang-btn-active":""}">${e}</div>`).join(`<svg class="ih-vertical-line">
           <use href="/images/ih-icons-sprite.svg#icon-vertical-line"></use>
         </svg>`)}
`,L=()=>{i&&(i.innerHTML=g(),i.onclick=e=>{i.classList.toggle("ih-custom-select-open");const t=e.target.dataset.value;t&&t!==a.current&&(a.current=t,y(t),i.innerHTML=g())})},_=()=>{c&&(c.innerHTML=p(),c.onclick=e=>{const t=e.target.dataset.value;t&&t!==a.current&&(a.current=t,y(t),c.innerHTML=p())})};_();L();const h=document.querySelector("#MENU_SOCIAL_JS"),q=()=>`  <a
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
       </a>`,A=()=>{h&&h.insertAdjacentHTML("beforeend",q())};A();
//# sourceMappingURL=commonHelpers.js.map
