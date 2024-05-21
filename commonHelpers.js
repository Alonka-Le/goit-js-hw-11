import{S as d,i as a}from"./assets/vendor-0fc460d7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="43978098-d09fb7acba53d53ccd7df38b1",u="https://pixabay.com/api/",g=(s="dog")=>{const i=new URLSearchParams({key:m,q:s,orientation:"horizontal",image_type:"photo",safesearch:!0});return fetch(`${u}?${i}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})},f=s=>s.map(({largeImageURL:i,webformatURL:t,tags:n,likes:e,views:r,comments:o,downloads:h})=>`<div>
          <a href="${i}" class="gallery-img">
          <img
          src="${t}"
          alt="${n}"
          class="gallery-img"
        />
        <div class='content'>
            <div class="item-list-info-text">
                <h3 clasc"text-content-title">Likes</h3>
                <p class="text-content">${e}</p>
            </div>
            <div class="item-list-info-text">
                <h3 clasc"text-content-title">Views</h3>
                <p class="text-content">${r}</p>
            </div>
            <div class="item-list-info-text">
                <h3 clasc"text-content-title">Comments</h3>
                <p class="text-content">${o}</p>
            </div>
            <div class="item-list-info-text">
                <h3 clasc"text-content-title">Downloads</h3>
                <p class="text-content">${h}</p>
            </div>
        </div>
      </div>`).join(""),p=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader"),y=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function x(s){s.preventDefault();const i=s.target.elements.searchKeyword.value.trim();if(i===""){c.innerHTML="",s.target.reset(),a.show({title:"✖",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight",titleColor:"white",titleSize:"16px",titleLineHeight:"1.5",messageColor:"white",messageSize:"16px",messageLineHeight:"1.5"});return}c.innerHTML="",l.classList.remove("is-hidden"),g(i).then(t=>{c.innerHTML=f(t.hits),y.refresh(),(!t.hits||t.hits.length===0)&&a.show({title:"✖",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight",titleColor:"white",titleSize:"16px",titleLineHeight:"1.5",messageColor:"white",messageSize:"16px",messageLineHeight:"1.5"})}).catch(t=>console.log(t)).finally(()=>{s.target.reset(),l.classList.add("is-hidden")})}p.addEventListener("submit",x);
//# sourceMappingURL=commonHelpers.js.map
