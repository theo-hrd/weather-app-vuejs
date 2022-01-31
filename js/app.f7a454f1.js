(function(e){function t(t){for(var c,l,i=t[0],d=t[1],o=t[2],b=0,u=[];b<i.length;b++)l=i[b],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&u.push(n[l][0]),n[l]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);s&&s(t);while(u.length)u.shift()();return a.push.apply(a,o||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],c=!0,i=1;i<r.length;i++){var d=r[i];0!==n[d]&&(c=!1)}c&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var c={},n={app:0},a=[];function l(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=c,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(r,c,function(t){return e[t]}.bind(null,c));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/weather-app-vuejs/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var s=d;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var c=r("7a23"),n=(r("b0c0"),r("fb6a"),{class:"h-screen pt-10 bg-gradient-to-b from-cyan-500 to-violet-500 text-center"}),a={class:"flex justify-center mb-6 font-semibold text-xl"},l={class:"flex items-center max-w-md mx-auto bg-white rounded-lg"},i={class:"w-full"},d={key:0,class:"flex flex-col items-center px-20"},o={class:"flex flex-col items-center mt-5"},s={class:"text-2xl mb-4"},b={class:"h-full bg-white p-4 bg-gradient-to-b from-cyan-500 to-violet-500 rounded-full"},u={class:"px-6 py-2 bg-slate-200 rounded-full font-bold"},h=Object(c["d"])("br",null,null,-1),f={key:0},j={class:"mt-2 font-semibold flex"},O=Object(c["d"])("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--fxemoji",width:"32",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},[Object(c["d"])("path",{fill:"#C4F0F2",d:"M322 301.232V71.413C322 34.182 292.232 4 255 4s-67 30.182-67 67.414v229.82c-28 20.659-46.207 53.812-46.207 91.193c0 62.631 50.664 113.403 113.294 113.403S368.24 455.056 368.24 392.426c0-37.382-18.24-70.535-46.24-91.194z"}),Object(c["d"])("path",{fill:"#FF473E",d:"M303 332.538V172h-96v160.538c-18 14.088-28.794 35.674-28.794 59.887c0 42.448 34.367 76.859 76.815 76.859s76.772-34.411 76.772-76.859c.001-24.213-10.793-45.799-28.793-59.887z"}),Object(c["d"])("ellipse",{fill:"#FF6E83",cx:"255.107",cy:"172.222",rx:"48.152",ry:"11.106"}),Object(c["d"])("path",{fill:"#597B91",d:"M239.514 91c0 2.659-2.156 5-4.815 5H188V86h46.7c2.659 0 4.814 2.341 4.814 5zm-4.814 55H188v10h46.7c2.659 0 4.815-2.341 4.815-5c-.001-2.659-2.156-5-4.815-5zm0 60H188v10h46.7c2.659 0 4.815-2.341 4.815-5c-.001-2.659-2.156-5-4.815-5zm.3 60.496V266h-47v10h47v.125c2 0 4.815-2.156 4.815-4.815S237 266.496 235 266.496z"})],-1),p={class:"text-2xl"},y={class:"text-[12px] align-super"},x={class:"mb-4"},g=Object(c["d"])("span",{class:"font-semibold"},"Feels like:",-1),w={class:"text-xl"},m=Object(c["f"])(" Condition: "),v={class:"font-semibold"},_={class:"text-xl mt-16"},q=Object(c["d"])("h2",{class:"font-bold mb-1 underline"},"Additional data:",-1),k={class:"ml-1"},M=Object(c["f"])(" - Humidity: "),S={class:"font-thin"},A=Object(c["f"])(),P=Object(c["d"])("br",null,null,-1),F=Object(c["f"])(" - Wind: "),V={class:"font-thin"},z=Object(c["f"])(),H=Object(c["d"])("br",null,null,-1),C=Object(c["f"])(" - Gusts: "),E={class:"font-thin"},D=Object(c["f"])(),N=Object(c["d"])("br",null,null,-1),W=Object(c["f"])(" - Precipitations: "),J={class:"font-thin"},L=Object(c["f"])(),R=Object(c["d"])("br",null,null,-1),B={class:"mb-4"},T=Object(c["d"])("h2",{class:"font-bold mb-1 underline mt-4"}," Air quality:",-1),U=Object(c["f"])(" - Carbon monoxyde: "),G={class:"font-thin"},K=Object(c["f"])(),Y=Object(c["d"])("br",null,null,-1),I=Object(c["f"])(" - Nitrogen oxide : "),Q={class:"font-thin"},X=Object(c["f"])(),Z=Object(c["d"])("br",null,null,-1),$={key:0},ee=Object(c["f"])(" - Air quality index: "),te={class:"text-green-500 text-2xl"},re={key:1},ce=Object(c["f"])(" - Air quality index: "),ne={class:"text-orange-400 text-2xl"},ae={key:2},le=Object(c["f"])(" - Air quality index: "),ie={class:"text-red-500 text-2xl"},de={key:3},oe=Object(c["f"])(" - Air quality index: "),se={class:"text-rose-900 text-2xl"},be=Object(c["e"])('<table class="w-56 border-collapse border border-slate-500"><thead><tr><th class="border border-slate-600">Air Pollution</th><th class="border border-slate-600">Value</th></tr></thead><tbody><tr><td class="border border-slate-600 text-green-500">Low</td><td class="border border-slate-600 text-green-500">1-3</td></tr><tr><td class="border border-slate-600 text-orange-400">Moderate</td><td class="border border-slate-600 text-orange-400">4-6</td></tr><tr><td class="border border-slate-600 text-red-500">High</td><td class="border border-slate-600 text-red-500">7-9</td></tr><tr><td class="border border-slate-600 text-rose-900">Very High</td><td class="border border-slate-600 text-rose-900">10</td></tr></tbody></table><a href="https://uk-air.defra.gov.uk/air-pollution/daqi" class="after:content-[&#39;_↗&#39;] underline">source</a>',2);function ue(e,t,r,ue,he,fe){return Object(c["g"])(),Object(c["c"])("main",null,[Object(c["d"])("div",n,[Object(c["d"])("div",a,Object(c["h"])(he.today),1),Object(c["d"])("section",l,[Object(c["d"])("div",i,[Object(c["j"])(Object(c["d"])("input",{type:"search",class:"w-full text-center px-4 py-1 text-gray-800 rounded-full focus:outline-none",placeholder:"Search a city","onUpdate:modelValue":t[0]||(t[0]=function(e){return he.query=e}),onKeypress:t[1]||(t[1]=function(){return fe.fetchWeather&&fe.fetchWeather.apply(fe,arguments)})},null,544),[[c["i"],he.query]])])]),"undefined"!=typeof he.weather.location?(Object(c["g"])(),Object(c["c"])("section",d,[Object(c["d"])("div",o,[Object(c["d"])("div",s,[Object(c["d"])("div",b,[Object(c["d"])("div",u,[Object(c["f"])(Object(c["h"])(he.weather.location.name)+" ",1),h,Object(c["f"])(" "+Object(c["h"])(he.weather.location.region)+" ",1),he.weather.location.name!==he.weather.location.country?(Object(c["g"])(),Object(c["c"])("div",f,Object(c["h"])(he.weather.location.country),1)):Object(c["b"])("",!0)])])]),Object(c["d"])("div",j,[O,Object(c["d"])("p",p,[Object(c["f"])(Object(c["h"])(Math.round(he.weather.current.temp_c))+"°c ",1),Object(c["d"])("span",y,"(last update: "+Object(c["h"])(he.weather.current.last_updated.slice(10))+")",1)])]),Object(c["d"])("p",x,[g,Object(c["f"])(" "+Object(c["h"])(he.weather.current.feelslike_c)+"°c ",1)]),Object(c["d"])("div",w,[m,Object(c["d"])("span",v,Object(c["h"])(he.weather.current.condition.text)+". ",1)]),Object(c["d"])("div",_,[q,Object(c["d"])("div",k,[Object(c["d"])("p",null,[M,Object(c["d"])("span",S,Object(c["h"])(he.weather.current.humidity)+"%",1),A,P,F,Object(c["d"])("span",V,Object(c["h"])(he.weather.current.wind_kph)+"km/h",1),z,H,C,Object(c["d"])("span",E,Object(c["h"])(he.weather.current.gust_kph)+"km/h",1),D,N,W,Object(c["d"])("span",J,Object(c["h"])(he.weather.current.precip_mm)+"mm",1),L,R])]),Object(c["d"])("div",B,[T,Object(c["d"])("p",null,[U,Object(c["d"])("span",G,Object(c["h"])(Math.round(he.weather.current.air_quality.co))+"μg/m3",1),K,Y,I,Object(c["d"])("span",Q,Object(c["h"])(Math.round(he.weather.current.air_quality.o3))+"μg/m3",1),X,Z]),1==he.weather.current.air_quality["gb-defra-index"]&&he.weather.current.air_quality["gb-defra-index"]<=3?(Object(c["g"])(),Object(c["c"])("div",$,[ee,Object(c["d"])("span",te,Object(c["h"])(he.weather.current.air_quality["gb-defra-index"]),1)])):4==he.weather.current.air_quality["gb-defra-index"]&&he.weather.current.air_quality["gb-defra-index"]<=6?(Object(c["g"])(),Object(c["c"])("div",re,[ce,Object(c["d"])("span",ne,Object(c["h"])(he.weather.current.air_quality["gb-defra-index"]),1)])):7==he.weather.current.air_quality["gb-defra-index"]&&he.weather.current.air_quality["gb-defra-index"]<=9?(Object(c["g"])(),Object(c["c"])("div",ae,[le,Object(c["d"])("span",ie,Object(c["h"])(he.weather.current.air_quality["gb-defra-index"]),1)])):he.weather.current.air_quality["gb-defra-index"]>=9?(Object(c["g"])(),Object(c["c"])("div",de,[oe,Object(c["d"])("span",se,Object(c["h"])(he.weather.current.air_quality["gb-defra-index"]),1)])):Object(c["b"])("",!0)])]),be])])):Object(c["b"])("",!0)])])}r("d3b7"),r("99af"),r("e9c4");var he={name:"App",data:function(){return{today:(new Date).toLocaleDateString("en-EN",{weekday:"long",year:"numeric",month:"long",day:"numeric"}).charAt(0).toUpperCase()+(new Date).toLocaleDateString("en-EN",{weekday:"long",year:"numeric",month:"long",day:"numeric"}).slice(1),api_key:"".concat("8487f339ddb9400a94f190501223001"),url:"https://api.weatherapi.com/v1/current.json?key=",query:"",weather:{}}},methods:{fetchWeather:function(e){"Enter"==e.key&&fetch("".concat(this.url).concat(this.api_key,"&q=").concat(this.query,"&aqi=yes")).then((function(e){return e.json()})).then(this.setResults)},setResults:function(e){this.weather=e},log:function(){console.log(JSON.stringify(this.weather.current.air_quality))}}},fe=r("6b0d"),je=r.n(fe);const Oe=je()(he,[["render",ue]]);var pe=Oe;Object(c["a"])(pe).mount("#app")}});
//# sourceMappingURL=app.f7a454f1.js.map