(this["webpackJsonpimg-scanner"]=this["webpackJsonpimg-scanner"]||[]).push([[0],{129:function(t,e,n){},131:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(39),i=n.n(a),s=(n(53),n(13)),c=(n(54),n(55),function(){return o.a.createElement("nav",{className:"bottom-nav-wrapper"},"made by Ian Huang")}),u=n(29),f=n(12),l=n.n(f),d=n(18),h=n(135),m=n(136),p=n(140),g=n(137),v=n(138),b=n(22),y=n(40),w=n(23),x=n.n(w),P=n(41),k=n.n(P),j=function(){return k()('!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="/image-scanner/",e(e.s=1)}([function(t,r,e){var n,o,f;!function(t){if(!t.numeric){var r={dim:function(t){var e;return"object"===typeof t?"object"===typeof(e=t[0])?"object"===typeof e[0]?r._dim(t):[t.length,e.length]:[t.length]:[]},_foreach2:function t(r,e,n,o){if(n===e.length-1)return o(r);var f,i=e[n],s=Array(i);for(f=i-1;f>=0;f--)s[f]=t(r[f],e,n+1,o);return s},cloneV:function(t){var r,e=t.length,n=Array(e);for(r=e-1;-1!==r;--r)n[r]=t[r];return n},clone:function(t){if("object"!==typeof t)return t;var e=r.cloneV,n=r.dim(t);return r._foreach2(t,n,0,e)},diag:function(t){var r,e,n,o,f=t.length,i=Array(f);for(r=f-1;r>=0;r--){for(o=Array(f),e=r+2,n=f-1;n>=e;n-=2)o[n]=0,o[n-1]=0;for(n>r&&(o[n]=0),o[r]=t[r],n=r-1;n>=1;n-=2)o[n]=0,o[n-1]=0;0===n&&(o[0]=0),i[r]=o}return i},rep:function(t,e,n){"undefined"===typeof n&&(n=0);var o,f=t[n],i=Array(f);if(n===t.length-1){for(o=f-2;o>=0;o-=2)i[o+1]=e,i[o]=e;return-1===o&&(i[0]=e),i}for(o=f-1;o>=0;o--)i[o]=r.rep(t,e,n+1);return i},identity:function(t){return r.diag(r.rep([t],1))},inv:function(t){var e,n,o,f,i,s,c,u,a=r.dim(t),h=Math.abs,l=a[0],d=a[1],y=r.clone(t),v=r.identity(l);for(s=0;s<d;++s){var p=-1,g=-1;for(i=s;i!==l;++i)(c=h(y[i][s]))>g&&(p=i,g=c);for(n=y[p],y[p]=y[s],y[s]=n,f=v[p],v[p]=v[s],v[s]=f,u=n[s],c=s;c!==d;++c)n[c]/=u;for(c=d-1;-1!==c;--c)f[c]/=u;for(i=l-1;-1!==i;--i)if(i!==s){for(e=y[i],o=v[i],u=e[s],c=s+1;c!==d;++c)e[c]-=n[c]*u;for(c=d-1;c>0;--c)o[c]-=f[c]*u,o[--c]-=f[c]*u;0===c&&(o[0]-=f[0]*u)}}return v},dotMMsmall:function(t,r){var e,n,o,f,i,s,c,u,a,h,l;for(f=t.length,i=r.length,s=r[0].length,c=Array(f),e=f-1;e>=0;e--){for(u=Array(s),a=t[e],o=s-1;o>=0;o--){for(h=a[i-1]*r[i-1][o],n=i-2;n>=1;n-=2)l=n-1,h+=a[n]*r[n][o]+a[l]*r[l][o];0===n&&(h+=a[0]*r[0][o]),u[o]=h}c[e]=u}return c},dotMV:function(t,e){var n,o=t.length,f=Array(o),i=r.dotVV;for(n=o-1;n>=0;n--)f[n]=i(t[n],e);return f},dotVV:function(t,r){var e,n,o=t.length,f=t[o-1]*r[o-1];for(e=o-2;e>=1;e-=2)n=e-1,f+=t[e]*r[e]+t[n]*r[n];return 0===e&&(f+=t[0]*r[0]),f},transpose:function(t){var r,e,n,o,f,i=t.length,s=t[0].length,c=Array(s);for(e=0;e<s;e++)c[e]=Array(i);for(r=i-1;r>=1;r-=2){for(o=t[r],n=t[r-1],e=s-1;e>=1;--e)(f=c[e])[r]=o[e],f[r-1]=n[e],(f=c[--e])[r]=o[e],f[r-1]=n[e];0===e&&((f=c[0])[r]=o[0],f[r-1]=n[0])}if(0===r){for(n=t[0],e=s-1;e>=1;--e)c[e][0]=n[e],c[--e][0]=n[e];0===e&&(c[0][0]=n[0])}return c}};this.numeric=r,t.numeric=r}}(this),f=function(){"use strict";function t(t,r,e){if(e){var n=r;r=t,t=n}var o,f=[[t[0],t[1],1,0,0,0,-1*r[0]*t[0],-1*r[0]*t[1]],[0,0,0,t[0],t[1],1,-1*r[1]*t[0],-1*r[1]*t[1]],[t[2],t[3],1,0,0,0,-1*r[2]*t[2],-1*r[2]*t[3]],[0,0,0,t[2],t[3],1,-1*r[3]*t[2],-1*r[3]*t[3]],[t[4],t[5],1,0,0,0,-1*r[4]*t[4],-1*r[4]*t[5]],[0,0,0,t[4],t[5],1,-1*r[5]*t[4],-1*r[5]*t[5]],[t[6],t[7],1,0,0,0,-1*r[6]*t[6],-1*r[6]*t[7]],[0,0,0,t[6],t[7],1,-1*r[7]*t[6],-1*r[7]*t[7]]],i=r;try{o=numeric.inv(numeric.dotMMsmall(numeric.transpose(f),f))}catch(h){return console.log(h),[1,0,0,0,1,0,0,0]}for(var s,c=numeric.dotMMsmall(o,numeric.transpose(f)),u=numeric.dotMV(c,i),a=0;a<u.length;a++)u[a]=(s=u[a],Math.round(1e10*s)/1e10);return u[8]=1,u}function r(e,n){return"undefined"!==typeof window&&window===this||void 0===this?new r(e,n):(this.srcPts=e,this.dstPts=n,this.coeffs=t(this.srcPts,this.dstPts,!1),this.coeffsInv=t(this.srcPts,this.dstPts,!0),this)}return r.prototype={transform:function(t,r){var e=[];return e[0]=(this.coeffs[0]*t+this.coeffs[1]*r+this.coeffs[2])/(this.coeffs[6]*t+this.coeffs[7]*r+1),e[1]=(this.coeffs[3]*t+this.coeffs[4]*r+this.coeffs[5])/(this.coeffs[6]*t+this.coeffs[7]*r+1),e},transformInverse:function(t,r){var e=[];return e[0]=(this.coeffsInv[0]*t+this.coeffsInv[1]*r+this.coeffsInv[2])/(this.coeffsInv[6]*t+this.coeffsInv[7]*r+1),e[1]=(this.coeffsInv[3]*t+this.coeffsInv[4]*r+this.coeffsInv[5])/(this.coeffsInv[6]*t+this.coeffsInv[7]*r+1),e}},r},void 0!==typeof t?t.exports=f():void 0===(o="function"===typeof(n=f)?n.call(r,e,r,t):n)||(t.exports=o)},function(t,r,e){"use strict";e.r(r);var n=e(0),o=e.n(n);self.onmessage=function(t){const{points:{topLeft:r,topRight:e,bottomLeft:n,bottomRight:f}}=t.data,i=(Math.sqrt((r.x-e.x)**2+(r.y-e.y)**2)+Math.sqrt((f.x-n.x)**2+(f.y-n.y)**2))/2,s=(Math.sqrt((r.x-n.x)**2+(r.y-n.y)**2)+Math.sqrt((f.x-e.x)**2+(f.y-e.y)**2))/2,c=[r.x,r.y,e.x,e.y,f.x,f.y,n.x,n.y],u=[0,0,i,0,i,s,0,s],a=o()(c,u);self.postMessage({matrix:a,width:i,height:s})}}]);\n//# sourceMappingURL=Matrix.worker.d843d03d.worker.js.map',"Worker",void 0,n.p+"static/js/Matrix.worker.d843d03d.worker.js")},E=function(){function t(){var e=this;Object(b.a)(this,t),this.setup=function(t,n){e.terminate(),e.container=t,e.x=t.offsetWidth/2,e.y=t.offsetHeight/2,e.scale=1,e.mousePressed=!1,e.sketch=function(r){n&&(r.preload=function(){e.background=r.loadImage(n)},r.setup=function(){var e=r.createCanvas(t.offsetWidth,t.offsetHeight);e.elt.addEventListener("contextmenu",(function(t){return t.preventDefault()})),e.parent(t),r.imageMode(r.CENTER)},r.draw=function(){var t=e.background.width*e.scale,n=e.background.height*e.scale;if(r.clear(),r.image(e.background,e.x,e.y,t,n),e.points.forEach((function(t){var n=e.mapPointToCanvas(t),o=n.x,a=n.y;r.noStroke(),r.fill("#e84a5f"),r.rectMode(r.CENTER),r.rect(o,a,10,10)})),4===e.points.length){var o=e.getCornerPoints(),a=o.topLeft,i=o.topRight,s=o.bottomLeft,c=o.bottomRight,u=e.mapPointToCanvas(a),f=e.mapPointToCanvas(i),l=e.mapPointToCanvas(s),d=e.mapPointToCanvas(c);r.stroke("#e84a5f99"),r.strokeWeight(8),e.drawLine(r,u,l),e.drawLine(r,f,d),e.drawLine(r,u,f),e.drawLine(r,l,d)}},r.mousePressed=function(){if(!(r.mouseX<0||r.mouseX>r.width||r.mouseY<0||r.mouseY>r.height)){var t=(r.mouseX-e.x)/e.scale+e.background.width/2,n=(r.mouseY-e.y)/e.scale+e.background.height/2,o=e.points.findIndex((function(e){var r=e.x,o=e.y;return t>=r-5&&t<=r+5&&n>=o-5&&n<=o+5}));r.mouseButton===r.RIGHT&&-1!==o?e.reactRemovePoint(o):r.mouseButton===r.LEFT&&e.isPinning&&t>=0&&t<=e.background.width&&n>=0&&n<=e.background.height&&e.reactAddPoint(t,n),e.startX=r.mouseX,e.startY=r.mouseY,e.mousePressed=!0}},r.mouseReleased=function(){e.mousePressed=!1},r.mouseDragged=function(){if(!e.isPinning&&e.mousePressed&&!(r.mouseX<0||r.mouseX>r.width||r.mouseY<0||r.mouseY>r.height)){var t=e.startX-r.mouseX,n=e.startY-r.mouseY;e.x-=t,e.y-=n,e.startX=r.mouseX,e.startY=r.mouseY}},r.mouseWheel=function(t){if(!e.isPinning&&!(r.mouseX<0||r.mouseX>r.width||r.mouseY<0||r.mouseY>r.height)){var n=t.delta;e.scale+=n/1e3}},r.windowResized=function(){r.resizeCanvas(t.offsetWidth,t.offsetHeight)})},e.p5instance=new x.a(e.sketch)},this.setPinning=function(t){e.p5instance&&(e.container.style.cursor=t?"crosshair":"grab",e.isPinning=t)},this.setAddPoint=function(t){return e.reactAddPoint=t},this.setRemovePoint=function(t){return e.reactRemovePoint=t},this.setPoints=function(t){return e.points=t},this.getCornerPoints=function(){var t=e.points.map((function(t){return{d:Math.sqrt(Math.pow(t.x,2)+Math.pow(t.y,2)),p:t}})).sort((function(t,e){return t.d-e.d}))[0].p,n=e.points.map((function(t){return{d:Math.sqrt(Math.pow(t.x-e.background.width,2)+Math.pow(t.y,2)),p:t}})).sort((function(t,e){return t.d-e.d}))[0].p,r=e.points.map((function(t){return{d:Math.sqrt(Math.pow(t.x,2)+Math.pow(t.y-e.background.height,2)),p:t}})).sort((function(t,e){return t.d-e.d}))[0].p;return{topLeft:t,topRight:n,bottomRight:e.points.map((function(t){return{d:Math.sqrt(Math.pow(t.x-e.background.width,2)+Math.pow(t.y-e.background.height,2)),p:t}})).sort((function(t,e){return t.d-e.d}))[0].p,bottomLeft:r}},this.project=Object(d.a)(l.a.mark((function t(){var n,r,o,a,i,s,c,u,f;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){var a=new j;a.postMessage({points:e.getCornerPoints()}),a.onmessage=function(e){n=e.data.matrix,r=e.data.width,o=e.data.height,t()}}));case 2:for(a=n.coeffsInv,e.background.loadPixels(),(i=e.p5instance.createImage(Math.floor(r),Math.floor(o))).loadPixels(),s=0;s<i.width;s++)for(c=0;c<i.height;c++)u=e.transformInverse(s,c,a),f=e.background.get(Math.floor(u.x),Math.floor(u.y)),i.set(s,c,f);return i.updatePixels(),t.abrupt("return",i);case 9:case"end":return t.stop()}}),t)}))),this.transformInverse=function(t,e,n){var r={};return r.x=(n[0]*t+n[1]*e+n[2])/(n[6]*t+n[7]*e+1),r.y=(n[3]*t+n[4]*e+n[5])/(n[6]*t+n[7]*e+1),r},this.drawLine=function(t,e,n){t.line(e.x,e.y,n.x,n.y)},this.mapPointToCanvas=function(t){return{x:e.x+t.x*e.scale-e.background.width*e.scale/2,y:e.y+t.y*e.scale-e.background.height*e.scale/2}},this.terminate=function(){e.p5instance&&(e.p5instance.remove(),e.p5instance=null)}}return Object(y.a)(t,[{key:"enabled",get:function(){return!!this.p5instance}}]),t}(),M=(n(58),function(t){var e=t.image,n=t.setImage,a=t.setResult,i=Object(r.useRef)(null),c=Object(r.useRef)(null),f=Object(r.useRef)(new E),b=Object(r.useState)(!1),y=Object(s.a)(b,2),w=y[0],x=y[1],P=Object(r.useState)([]),k=Object(s.a)(P,2),j=k[0],M=k[1],O=function(){var t=Object(d.a)(l.a.mark((function t(e){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.target.files&&e.target.files[0]&&((r=new FileReader).onload=function(t){n((function(){return t.target.result}))},r.readAsDataURL(e.target.files[0]));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=Object(r.useCallback)((function(t,e){var n=[].concat(Object(u.a)(j),[{x:t,y:e}]);M((function(){return n})),4===n.length&&x(!1)}),[j]),X=Object(r.useCallback)((function(t){var e=Object(u.a)(j);e.splice(t,1),M((function(){return e})),x(!0)}),[j]);return Object(r.useEffect)((function(){!f.current.enabled&&e&&f.current.setup(i.current,e)}),[i,e]),Object(r.useEffect)((function(){f.current.setAddPoint(R)}),[R]),Object(r.useEffect)((function(){f.current.setRemovePoint(X)}),[X]),Object(r.useEffect)((function(){f.current.setPoints(j)}),[j]),Object(r.useEffect)((function(){f.current.setPinning(w)}),[e,w]),Object(r.useEffect)((function(){document.body.addEventListener("keydown",(function(t){"Escape"===t.key&&x(!1)}))})),o.a.createElement("div",{className:"canvas-wrapper"},o.a.createElement("div",{className:"canvas-main",ref:i,onClick:function(){e||c.current.click()}},o.a.createElement("input",{ref:c,type:"file",accept:"image/png, image/jpeg",hidden:!0,onChange:O}),!e&&o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{size:100,color:"#dbe2ef77"}),o.a.createElement(m.a,{color:"#959ba577",textAlign:"center",marginTop:10},"Click to upload image")),e&&o.a.createElement(m.a,{className:"canvas-hint"},"Scroll to zoom in/out, drag to pan.",o.a.createElement("br",null),'Press "Start Pinning" and pin 4 points. Right click to unpin.')),o.a.createElement("div",{className:"canvas-toolbox"},o.a.createElement(p.a,{iconAfter:g.a,appearance:"primary",intent:"success",marginRight:8,disabled:!e||4===j.length,height:40,onClick:function(){return x(!w)}},w&&4!==j.length?o.a.createElement("span",null,"Stop Pinning (",4-j.length,")"):o.a.createElement("span",null,"Start Pinning (",4-j.length,")")),o.a.createElement(p.a,{appearance:"primary",intent:"danger",disabled:4!==j.length,height:40,iconAfter:v.a,onClick:Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a,t.next=3,f.current.project();case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})))},"Flatten")))}),O=n(139),R=function t(){var e=this;Object(b.a)(this,t),this.setup=function(t,n){e.terminate(),e.x=0,e.y=0,e.scale=1,e.background=n,e.mousePressed=!1,e.sketch=function(r){n&&(e.background=n,r.setup=function(){r.createCanvas(t.offsetWidth,t.offsetHeight,r.WEBGL).parent(t),r.imageMode(r.CENTER),r.noFill()},r.draw=function(){e.background&&(r.clear(),r.image(e.background,e.x,e.y,e.background.width*e.scale,e.background.height*e.scale))},r.mousePressed=function(){r.mouseX<0||r.mouseX>r.width||r.mouseY<0||r.mouseY>r.height||(e.startX=r.mouseX,e.startY=r.mouseY,e.mousePressed=!0)},r.mouseReleased=function(){e.mousePressed=!1},r.mouseDragged=function(){if(e.mousePressed&&!(r.mouseX<0||r.mouseX>r.width||r.mouseY<0||r.mouseY>r.height)){var t=e.startX-r.mouseX,n=e.startY-r.mouseY;e.x-=t,e.y-=n,e.startX=r.mouseX,e.startY=r.mouseY}},r.mouseWheel=function(t){if(!(r.mouseX<0||r.mouseX>r.width||r.mouseY<0||r.mouseY>r.height)){var n=t.delta;e.scale+=n/1e3}},r.windowResized=function(){r.resizeCanvas(t.offsetWidth,t.offsetHeight)})},e.p5instance=new x.a(e.sketch)},this.terminate=function(){e.p5instance&&e.p5instance.remove()}},X=(n(129),function(t){var e=t.result,n=Object(r.useRef)(null),a=Object(r.useRef)(new R);return Object(r.useEffect)((function(){e&&a.current.setup(n.current,e)}),[n,e]),o.a.createElement("div",{className:"result-wrapper"},o.a.createElement("div",{className:"result-main",ref:n}),o.a.createElement("div",{className:"result-toolbox"},o.a.createElement(p.a,{iconAfter:O.a,appearance:"primary",intent:"warning",marginRight:8,disabled:!e,height:40,onClick:function(){e.save("result","png")}},"Download")))});var Y=function(){var t=Object(r.useState)(""),e=Object(s.a)(t,2),n=e[0],a=e[1],i=Object(r.useState)(null),u=Object(s.a)(i,2),f=u[0],l=u[1];return o.a.createElement("div",{className:"app-wrapper"},o.a.createElement("div",{className:"app-content"},o.a.createElement(M,{image:n,setImage:a,setResult:l}),o.a.createElement(X,{result:f})),o.a.createElement(c,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},48:function(t,e,n){t.exports=n(131)},53:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){},58:function(t,e,n){}},[[48,1,2]]]);
//# sourceMappingURL=main.42ad3afd.chunk.js.map