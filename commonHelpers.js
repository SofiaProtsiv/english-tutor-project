(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const h={ua:{header:{},hero:{},"about-me":{},advice:{},quote:{},opportunities:{},requirements:{},workflow:{},assessment:{},reviews:{},footer:{},modal:{},"pop-up":{},formats:{title:"German title",button:{test:"Зписатися"}}},en:{header:{},hero:{},"about-me":{},advice:{},quote:{},opportunities:{},requirements:{},workflow:{},assessment:{},reviews:{},footer:{},modal:{},"pop-up":{},formats:{title:"Formats studing",button:{test:"Lessons!!!"}}}},y="en";function M(e,t){return t.split(".").reduce((o,n)=>o?o[n]:void 0,e)}function E(){document.querySelectorAll("[data-lang]").forEach(t=>{const r=t.getAttribute("data-lang"),o=M(h[y],r);o&&(t.textContent=o)})}E();const u=document.querySelector("#HEADER_JS"),L=()=>{u.innerHTML=`
 <div class="header-container container">
   <a
     href="./index.html"
     target="_self"
     class="logo"
     aria-label="link on main page"
   >
     <svg class="icon-logo">
       <use href="../images/icons-sprite.svg#icon-logo"></use>
     </svg>
   </a>
   <button
     id="HEADER_MENU_JS"
     class="menu-button"
     title="open menu"
     type="button"
   >
     <svg class="icon-menu">
       <use href="../images/icons-sprite.svg#icon-menu"></use>
     </svg>
     <svg class="icon-menu-close">
       <use href="../images/icons-sprite.svg#icon-menu-close"></use>
     </svg>
   </button>
   <section class="menu-container">
     <div class="menu-content">
       <ul id="MENU_NAV_JS" class="menu-nav">
       </ul>
        <div class="custom-select-small" id="CUSTOM_SELECT_SMALL_JS"></div>
       <div class="custom-select" id="CUSTOM_SELECT_JS">
       </div>
     </div>
     <nav class="menu-social" id="MENU_SOCIAL_JS">
       <svg class="icon-horisontal-line">
         <use href="../images/icons-sprite.svg#icon-horisontal-line"></use>
       </svg>
     </nav>
   </section>
 </div>
  `};u&&L();const g=document.querySelector("#HEADER_MENU_JS");g&&(g.onclick=()=>{u.classList.toggle("header-menu-open")});const f=document.querySelector("#MENU_NAV_JS");f&&(f.onclick=e=>{e.target.tagName==="A"&&u.classList.remove("header-menu-open")});const l=document.querySelector("#MENU_NAV_JS"),_=()=>` <li class="menu-item" data-section="about-me"  type="button">
            ПРО МЕНЕ
          </li>
          <li class="menu-item" data-section="quote" type="button">
            ВАРТІСТЬ
          </li>
          <li class="menu-item" data-section="rewiews" type="button">
            ВІДГУКИ
          </li>
          <li class="menu-item" data-section="contacts" type="button">
            КОНТАКТИ
          </li>`;l&&(l.onclick=e=>{if(e.target.dataset.section){const t=e.target.dataset.section,r=document.getElementById(t);console.log(e.target.dataset.section),r&&r.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}});const b=()=>{l&&(l.innerHTML=_())};b();const c=document.querySelector("#CUSTOM_SELECT_JS"),i=document.querySelector("#CUSTOM_SELECT_SMALL_JS"),d=["UA","EN"],a={current:d[0]},w=(e,t)=>`
    <div data-value="${e}" class="custom-select-option" style="
    ${a.current===e?"background:transparent; ":""}order:${a.current===e?0:t}">${e}</div>
`,p=()=>`
   <svg class="custom-select-icon">
            <use href="../images/icons-sprite.svg#icon-switch-arrow"></use>
          </svg>
    ${d.map((e,t)=>w(e,t+1)).join("")}

`,v=()=>`
        ${d.map(e=>`<div data-value="${e}" class="select-lang-btn${a.current===e?" select-lang-btn-active":""}">${e}</div>`).join(`<svg class="vertical-line">
           <use href="../images/icons-sprite.svg#icon-vertical-line"></use>
         </svg>`)}
`,A=()=>{c&&(c.innerHTML=p(),c.onclick=e=>{c.classList.toggle("custom-select-open");const t=e.target.dataset.value;t&&t!==a.current&&(a.current=t,c.innerHTML=p())})},N=()=>{i&&(i.innerHTML=v(),i.onclick=e=>{const t=e.target.dataset.value;t&&t!==a.current&&(a.current=t,i.innerHTML=v())})};N();A();const S=document.querySelector("#MENU_SOCIAL_JS"),C=()=>`  <a
         class="menu-social-item"
         target="_blank"
         rel="noopener"
         href="https://t.me/@alyona_alyona"
       >
         TELEGRAM
       </a>
       <a
         class="menu-social-item"
         target="_blank"
         rel="noopener"
         href="https://www.instagram.com/lolaserenity?igsh=MWxpdGRwM2R2M3Rxcg=="
       >
         INSTAGRAM
       </a>
       <a
         class="menu-social-item"
         target="_blank"
         rel="noopener"
         href="https://www.facebook.com/alyona.stulina"
       >
         FACEBOOK
       </a>`,T=()=>{S&&S.insertAdjacentHTML("beforeend",C())};T();
//# sourceMappingURL=commonHelpers.js.map
