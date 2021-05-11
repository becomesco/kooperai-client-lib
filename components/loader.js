(function(){"use strict";function createCommonjsModule(e,o,t){return e(t={path:o,exports:{},require:function(e,o){return commonjsRequire(e,null==o?t.path:o)}},t.exports),t.exports}function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}for(var rngBrowser=createCommonjsModule((function(e){var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(o){var t=new Uint8Array(16);e.exports=function(){return o(t),t}}else{var n=new Array(16);e.exports=function(){for(var e,o=0;o<16;o++)0==(3&o)&&(e=4294967296*Math.random()),n[o]=e>>>((3&o)<<3)&255;return n}}})),byteToHex=[],i=0;i<256;++i)byteToHex[i]=(i+256).toString(16).substr(1);function bytesToUuid(e,o){var t=o||0,n=byteToHex;return[n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]]].join("")}var bytesToUuid_1=bytesToUuid,_nodeId,_clockseq,_lastMSecs=0,_lastNSecs=0;function v1(e,o,t){var n=o&&t||0,r=o||[],a=(e=e||{}).node||_nodeId,i=void 0!==e.clockseq?e.clockseq:_clockseq;if(null==a||null==i){var s=rngBrowser();null==a&&(a=_nodeId=[1|s[0],s[1],s[2],s[3],s[4],s[5]]),null==i&&(i=_clockseq=16383&(s[6]<<8|s[7]))}var c=void 0!==e.msecs?e.msecs:(new Date).getTime(),l=void 0!==e.nsecs?e.nsecs:_lastNSecs+1,d=c-_lastMSecs+(l-_lastNSecs)/1e4;if(d<0&&void 0===e.clockseq&&(i=i+1&16383),(d<0||c>_lastMSecs)&&void 0===e.nsecs&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_lastMSecs=c,_lastNSecs=l,_clockseq=i;var u=(1e4*(268435455&(c+=122192928e5))+l)%4294967296;r[n++]=u>>>24&255,r[n++]=u>>>16&255,r[n++]=u>>>8&255,r[n++]=255&u;var w=c/4294967296*1e4&268435455;r[n++]=w>>>8&255,r[n++]=255&w,r[n++]=w>>>24&15|16,r[n++]=w>>>16&255,r[n++]=i>>>8|128,r[n++]=255&i;for(var p=0;p<6;++p)r[n+p]=a[p];return o||bytesToUuid_1(r)}var v1_1=v1;function v4(e,o,t){var n=o&&t||0;"string"==typeof e&&(o="binary"===e?new Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||rngBrowser)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,o)for(var a=0;a<16;++a)o[n+a]=r[a];return o||bytesToUuid_1(r)}var v4_1=v4,uuid=v4_1;uuid.v1=v1_1,uuid.v4=v4_1;var uuid_1=uuid;async function loader(){async function loadSlick(){if(!window.$){const jqueryResult=await fetch("https://code.jquery.com/jquery-3.6.0.min.js"),jquery=await jqueryResult.text();await eval(jquery);const slickResult=await fetch("https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"),slick=await slickResult.text();await eval(slick)}}async function loadComponentScript(key){if(!window.KooperAI.widgets[key]){try{const res=await fetch(`/${namePrefix}component-${key}.js`);return eval(await res.text()),!0}catch(e){console.warn(e)}try{console.log("HERE");const res=await fetch(`http://localhost:5000/components/component-${key}.js`);return eval(await res.text()),!0}catch(e){return console.warn(e),!1}}}const tags=[{key:"type1",name:"kooperai-widget-t1"},{key:"type2",name:"kooperai-widget-t2",async preLoad(){await loadSlick()}},{key:"type3",name:"kooperai-widget-t3"},{key:"type4",name:"kooperai-widget-t4",async preLoad(){await loadSlick()}},{key:"type5",name:"kooperai-widget-t5",async preLoad(){await loadSlick()}}],namePrefix="data"===window.KooperAI.clientHash?"components/":window.KooperAI.clientHash+"-";window.KooperAI.widgets||(window.KooperAI.widgets={});for(let e=0;e<tags.length;e++){const o=tags[e],t=document.querySelectorAll(o.name);t.length>0&&(await loadComponentScript(o.key),o.preLoad&&await o.preLoad());for(let e=0;e<t.length;e++){const n=t[e],r=n.getAttributeNames(),a={};for(let e=0;e<r.length;e++){const o=r[e];a[o]=n.getAttribute(o)}const i=uuid_1.v4();n.setAttribute("id",i),window.KooperAI.widgets[o.key](i,a)}}}window.KooperAI||(window.KooperAI={}),window.KooperAI.loader||(window.KooperAI.loader=loader),window.KooperAI.functions||(window.KooperAI.functions={}),window.addEventListener("load",(async()=>{await loader()}))})();
//# sourceMappingURL=loader.js.map
