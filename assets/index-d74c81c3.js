(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const I=document.querySelector(".darkLightBtn"),C=document.querySelector(".continue"),j=document.querySelector(".onboarding"),M=document.querySelector("#darkbtnSrc"),d=document.querySelector("body"),y=document.querySelector(".mainwrapper"),A=document.querySelector(".loaderwrapper");I.addEventListener("click",()=>{d.classList.toggle("dark"),M.classList.toggle("fa-moon"),M.classList.toggle("fa-sun")});C.addEventListener("click",()=>{d.classList.remove("overflow-hidden"),j.classList.add("hidden"),y.classList.remove("pointer-events-none")});function V(){localStorage.getItem("visited")?(d.classList.remove("overflow-hidden"),y.classList.remove("pointer-events-none")):(d.classList.add("overflow-hidden"),j.classList.remove("hidden"),y.classList.add("pointer-events-none"),localStorage.setItem("visited",!0))}const S=["January","February","March","April","May","June","July","August","September","October","November","December"],$=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],k=document.querySelectorAll(".searchbtn"),m=document.querySelectorAll(".search");document.querySelectorAll(".searchbox");const a=document.querySelector(".suggestions_sm"),c=document.querySelector(".suggestions_lg"),O=document.querySelector(".sidebarimg"),G=document.querySelector(".temp"),_=document.querySelector(".city"),F=document.querySelector(".time"),W=document.querySelectorAll(".month"),N=document.querySelectorAll(".fullDate"),J=document.querySelector(".weather"),K=document.querySelector(".weatherIcon"),X=document.querySelector(".riseTime"),R=document.querySelector(".setTime"),U=document.querySelector(".risetimeToGo"),Z=document.querySelector(".settimeToGo"),w=[...document.querySelectorAll(".windSpeedValue")],H=document.querySelector(".forecast"),q=document.querySelector(".forecastMobile"),B=[...document.querySelectorAll(".precipValue")],Y=[...document.querySelectorAll(".pressureValue")],z=[...document.querySelectorAll(".uvIndexValue")],h=[...document.querySelectorAll(".percentData")],v=[...document.querySelectorAll(".rainvisualpercent")],L=[...document.querySelectorAll(".timeline")];let Q=document.querySelector(".country"),u=0;function ee(){d.classList.remove("overflow-hidden"),y.classList.remove("opacity-0"),A.classList.add("hidden"),V()}function p(){d.classList.add("overflow-hidden"),y.classList.add("opacity-0"),A.classList.remove("hidden")}p();function x(){let e=new Date;u=e.getHours();let o=e.getDate(),t=e.getMonth(),r=e.getFullYear(),n=e.getDay(),s=u>=12?"pm":"am",i=u%12||12,l=e.getMinutes();i<10&&(i="0"+i),l<10&&(l="0"+l),F.innerHTML=i+":"+l+" "+s,W.forEach(g=>{g.innerHTML=S[t]+", "+r}),N.forEach(g=>{g.innerHTML=$[n]+", "+S[t].substring(0,3)+" "+o+", "+r})}x();setInterval(x,1e3);function te(){navigator.geolocation.getCurrentPosition(e=>{const o=e.coords.latitude,t=e.coords.longitude;fetch(`https://api.opencagedata.com/geocode/v1/json?q=${o}+${t}&key=0c18febae33248b1b9bec38f8a50c468`).then(r=>r.json()).then(r=>{f(r.results[0].components.county)})},e=>{console.log(e)})}te();function f(e){let o=0,t="";const r={method:"GET"};fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?unitGroup=uk&key=PFZ4CD8Z8TVXTT6WK47LU6TU9&contentType=json`,r).then(n=>n.json()).then(n=>{console.log(n);let s=n.currentConditions;G.innerHTML=s.temp+"°C",_.innerHTML=n.address,t=n.resolvedAddress,console.log(t),o=t.indexOf(","),Q.innerHTML=t.substring(o+1),J.innerHTML=s.conditions,O.src=ne(s.icon),K.src=b(s.icon),X.innerHTML=E(s.sunrise),R.innerHTML=E(s.sunset),U.innerHTML=D(s.sunrise),Z.innerHTML=D(s.sunset);for(let i=0;i<2;i++)w[i].innerHTML=s.windspeed+" km/hr",B[i].innerHTML=n.days[0].hours[u].precipprob+"%",Y[i].innerHTML=s.pressure+" hpa",z[i].innerHTML=s.uvindex;console.log(w.innerHTML),re(n.days[0].hours,n.days[1].hours),oe(n.days),ie(n.days),setTimeout(ee,500)}).catch(n=>console.error(n))}function E(e){let o=e.split(":")[0]>=12?"PM":"AM",t=e.split(":")[0]%12||12,r=e.split(":")[1];return`${t}:${r} ${o}`}function D(e){let o=e.split(":")[0],t;return u>o?(t=u-o,`${t} hours ago`):(t=o-u,`in ${t} hours`)}function ne(e){return e==="partly-cloudy-day"?"./assests/images/day_cloudy.jpg":e==="partly-cloudy-night"?"./assests/images/night_cloudy.jpg":e==="rain"?"./assests/images/rain.jpg":e==="clear-night"?"./assests/images/night_clear.jpg":e==="clear-day"?"./assests/images/day_clear.jpg":e==="wind"?"./assests/images/wind.jpg":e==="fog"?"./assests/images/fog.jpg":e==="snow"?"./assests/images/snow.jpg":"./assests/images/cloudy.jpg"}function b(e){return e==="partly-cloudy-day"?"./assests/icons/day-cloudy.png":e==="partly-cloudy-night"?"./assests/icons/night-cloudy.png":e==="rain"?"./assests/icons/rain.png":e==="clear-night"?"./assests/icons/night-clear.png":e==="clear-day"?"./assests/icons/day-clear.png":e==="wind"?"./assests/icons/wind.png":e==="fog"?"./assests/icons/fog.png":e==="snow"?"./assests/icons/snow.png":"./assests/icons/cloudy.png"}function se(e){return e==="rain"?"rainy":e==="clear-day"?"sunny":e==="wind"?"windy":e==="fog"?"foggy":e==="snow"?"snowy":"cloudy"}function re(e,o){let t,r,n,s;for(t=0;t<24;t++)if(e[t].datetime.split(":")[0]==u){r=t;break}if(r>20){for(t=r,n=0;n<24-r;t++,n++)h[n].innerHTML=e[t].precipprob+"%",L[n].innerHTML=(t%12||12)+" PM",v[n].style.width=`${e[t].precipprob}%`;for(t=0,n=n;n<4;t++,n++)h[n].innerHTML=o[t].precipprob+"%",L[n].innerHTML=(t%12||12)+" AM",v[n].style.width=`${o[t].precipprob}%`}else for(t=0,n=r;n<r+4;t++,n++)h[t].innerHTML=e[n].precipprob+"%",s=n>=12?"PM":"AM",L[t].innerHTML=(n%12||12)+" "+s,v[t].style.width=`${e[n].precipprob}%`}function P(e){let t=new Date(e).getDay();return $[t].substring(0,3)}function oe(e){H.innerHTML="",new Date().getDay();for(let t=0;t<8;t++){let r=document.createElement("div");r.innerHTML=`<div class="flex flex-col bg-neutral-200 dark:bg-[#081d33] justify-center items-center  transition-colors duration-500 p-7 rounded-lg mb-5">
            <div class="forecastIcon"><img src=${b(e[t].icon)} alt=""></div>
            <div class="day dark:text-neutral-200 text-3xl font-semibold transition-colors duration-500 ">${P(e[t].datetime)}</div>
            <div class="dayTemp dark:text-neutral-200 text-xl  transition-colors duration-500 ">${e[t].temp}°C</div>
        </div>`,H.appendChild(r)}}function ie(e){q.innerHTML="",new Date().getDay();for(let t=0;t<8;t++){let r=document.createElement("div");r.innerHTML=`<div class="flex justify-between items-center py-2">
                <div>
                        ${P(e[t].datetime)}
                </div>
                <div class="flex justify-center items-center gap-3">
                <div class="w-8" >
                        <img src="${b(e[t].icon)}" alt=""></div>
                        <div>${se(e[t].icon)}</div>
                </div>
                <div>${e[t].temp}°C</div>
        </div>`,q.appendChild(r)}}function le(e){const o={method:"GET",headers:{"X-RapidAPI-Key":"18cf09eba4msh8bc750c785aa624p154b4ejsn9c81c83b48c3","X-RapidAPI-Host":"wft-geo-db.p.rapidapi.com"}};fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${e}`,o).then(t=>t.json()).then(t=>{console.log(t),t.data.length==0||!e?(a.style.display="none",c.style.display="none"):(a.style.display="block",c.style.display="block"),a.innerHTML="",c.innerHTML="";for(let r=0;r<t.data.length;r++){let n=document.createElement("li"),s=document.createElement("li");n.innerHTML=`<li
                class="px-4 py-1 text-[#62b3ff] cursor-pointer hover:bg-[#051220] transition-colors duration-100">
                ${t.data[r].city}</li>`,s.innerHTML=`<li
                class="px-4 py-1 text-[#62b3ff] cursor-pointer hover:bg-[#051220] transition-colors duration-100">
                ${t.data[r].city}</li>`,a.insertAdjacentElement("afterbegin",s),c.insertAdjacentElement("afterbegin",n),n.addEventListener("click",i=>{m.forEach(l=>{l.value=i.target.innerHTML.trim(),f(l.value)}),c.style.display="none",p()}),s.addEventListener("click",i=>{m.forEach(l=>{l.value=i.target.innerHTML.trim(),f(l.value)}),a.style.display="none",p()})}}).catch(t=>{console.error(t),a.style.display="none",c.style.display="none"})}let T=!0;m.forEach(e=>{e.addEventListener("input",()=>{if(!e.value)return a.innerHTML="",a.style.display="none",c.innerHTML="",c.style.display="none",!1;e.value&&(console.log(e.value),T===!0&&(le(e.value),T=!1,setTimeout(()=>{T=!0},1500)))})});m.forEach(e=>{e.addEventListener("keypress",o=>{o.key==="Enter"&&k.forEach(t=>{t.click()})})});k.forEach(e=>{e.addEventListener("click",()=>{m.forEach(o=>{let t=o.value;t&&(c.style.display="none",a.style.display="none",f(t),p())})})});
