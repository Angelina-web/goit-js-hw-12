import{a as B,S as $,i as c}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function y(s,r=1){const o="50799853-cb389a837cb73f28ab1cf5f3e",a="https://pixabay.com/api/",e=new URLSearchParams({key:o,q:s.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15});return(await B.get(a,{params:e})).data}const h=document.querySelector(".gallery"),E=new $(".gallery a"),d=document.querySelector(".loader"),g=document.querySelector(".load-button");function p(s){const r=s.map(({largeImageURL:o,webformatURL:a,tags:e,likes:t,views:n,comments:q,downloads:P})=>`
      <li class="gallery-item">
      <a href="${o}">
          <img src="${a}" alt="${e}" />
        </a>
        <div class="info">
        <ul>
          <li>Likes: ${t}</li>
          <li>Views: ${n}</li>
          <li>Comments: ${q}</li>
          <li>Downloads: ${P}</li>
          </ul>
        </div>
      </li>
    `).join("");h.insertAdjacentHTML("beforeend",r),E.refresh()}function L(){h.innerHTML=""}function b(){d&&d.classList.remove("hidden")}function v(){d&&d.classList.add("hidden")}function w(){g.classList.remove("hidden")}function u(){g.classList.add("hidden")}const f=document.querySelector(".form"),M=f.elements["search-text"],O=document.querySelector(".load-button");let i=1,l="";const S=15;let m=0;u();L();f.addEventListener("submit",async s=>{if(s.preventDefault(),l=M.value.trim(),i=1,!l){c.error({message:"Please enter a search term!"});return}u(),L(),b();try{const r=await y(l,i),{hits:o,totalHits:a}=r;if(m=a,o.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}p(o),i+=1,m>S&&w()}catch{c.error({message:"Error fetching data. Try again later."})}finally{v()}f.reset()});O.addEventListener("click",async()=>{b(),u();try{const s=await y(l,i),{hits:r}=s;p(r),i+=1,i*S>=m?(u(),c.info({message:"We're sorry, but you've reached the end of search results."})):w(),setTimeout(()=>{const{height:o}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o*3,behavior:"smooth"})},100)}catch{c.error({message:"Error fetching data. Try again later."})}finally{v()}});
//# sourceMappingURL=index.js.map
