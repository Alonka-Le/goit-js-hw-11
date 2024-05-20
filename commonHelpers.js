import{S as c,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="43978098-d09fb7acba53d53ccd7df38b1",m="https://pixabay.com/api/",d=(s="dog")=>{const r=new URLSearchParams({key:u,q:s,orientation:"horizontal",image_type:"photo",safesearch:!0});return fetch(`${m}?${r}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})},f=s=>s.map(({webformatURL:r,tags:o,likes:n,views:e,comments:t,downloads:i})=>`<div>
        <img
          src="${r}"
          alt="${o}"
          class="gallery-img"
        />
       <ul class="content">
        <li class="text-content">Likes: ${n}</li>
        <li class="text-content">Views: ${e}</li>
        <li class="text-content">Comments: ${t}</li>
        <li class="text-content">Downloads: ${i}</li>
    </ul>
      </div>`).join("");new c(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const h=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery");document.querySelector(".js-loader");function g(s){s.preventDefault();const r=s.target.elements.searchKeyword.value.trim();if(r===""){a.innerHTML="",s.target.reset(),l.show({title:"✖",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight",titleColor:"white",titleSize:"16px",titleLineHeight:"1.5",messageColor:"white",messageSize:"16px",messageLineHeight:"1.5"});return}a.innerHTML="",d(r).then(o=>{a.innerHTML=f(o.results)})}h.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
