(this["webpackJsonpimg-scanner"]=this["webpackJsonpimg-scanner"]||[]).push([[0],{159:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(42),i=n.n(a),s=(n(58),n(15)),c=n(43),u=(n(84),n(85),function(){return o.a.createElement("nav",{className:"bottom-nav-wrapper"},"made by Ian Huang")}),f=n(31),l=n(14),h=n.n(l),d=n(20),m=n(165),p=n(166),g=n(170),v=n(167),b=n(168),y=n(24),w=n(45),x=n(25),k=n.n(x),P=n(46),j=n.n(P),E=function(){return j()('!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="/image-scanner/",e(e.s=1)}([function(t,r,e){var n,o,f;!function(t){if(!t.numeric){var r={dim:function(t){var e;return"object"===typeof t?"object"===typeof(e=t[0])?"object"===typeof e[0]?r._dim(t):[t.length,e.length]:[t.length]:[]},_foreach2:function t(r,e,n,o){if(n===e.length-1)return o(r);var f,i=e[n],s=Array(i);for(f=i-1;f>=0;f--)s[f]=t(r[f],e,n+1,o);return s},cloneV:function(t){var r,e=t.length,n=Array(e);for(r=e-1;-1!==r;--r)n[r]=t[r];return n},clone:function(t){if("object"!==typeof t)return t;var e=r.cloneV,n=r.dim(t);return r._foreach2(t,n,0,e)},diag:function(t){var r,e,n,o,f=t.length,i=Array(f);for(r=f-1;r>=0;r--){for(o=Array(f),e=r+2,n=f-1;n>=e;n-=2)o[n]=0,o[n-1]=0;for(n>r&&(o[n]=0),o[r]=t[r],n=r-1;n>=1;n-=2)o[n]=0,o[n-1]=0;0===n&&(o[0]=0),i[r]=o}return i},rep:function(t,e,n){"undefined"===typeof n&&(n=0);var o,f=t[n],i=Array(f);if(n===t.length-1){for(o=f-2;o>=0;o-=2)i[o+1]=e,i[o]=e;return-1===o&&(i[0]=e),i}for(o=f-1;o>=0;o--)i[o]=r.rep(t,e,n+1);return i},identity:function(t){return r.diag(r.rep([t],1))},inv:function(t){var e,n,o,f,i,s,c,u,a=r.dim(t),h=Math.abs,l=a[0],d=a[1],y=r.clone(t),v=r.identity(l);for(s=0;s<d;++s){var p=-1,g=-1;for(i=s;i!==l;++i)(c=h(y[i][s]))>g&&(p=i,g=c);for(n=y[p],y[p]=y[s],y[s]=n,f=v[p],v[p]=v[s],v[s]=f,u=n[s],c=s;c!==d;++c)n[c]/=u;for(c=d-1;-1!==c;--c)f[c]/=u;for(i=l-1;-1!==i;--i)if(i!==s){for(e=y[i],o=v[i],u=e[s],c=s+1;c!==d;++c)e[c]-=n[c]*u;for(c=d-1;c>0;--c)o[c]-=f[c]*u,o[--c]-=f[c]*u;0===c&&(o[0]-=f[0]*u)}}return v},dotMMsmall:function(t,r){var e,n,o,f,i,s,c,u,a,h,l;for(f=t.length,i=r.length,s=r[0].length,c=Array(f),e=f-1;e>=0;e--){for(u=Array(s),a=t[e],o=s-1;o>=0;o--){for(h=a[i-1]*r[i-1][o],n=i-2;n>=1;n-=2)l=n-1,h+=a[n]*r[n][o]+a[l]*r[l][o];0===n&&(h+=a[0]*r[0][o]),u[o]=h}c[e]=u}return c},dotMV:function(t,e){var n,o=t.length,f=Array(o),i=r.dotVV;for(n=o-1;n>=0;n--)f[n]=i(t[n],e);return f},dotVV:function(t,r){var e,n,o=t.length,f=t[o-1]*r[o-1];for(e=o-2;e>=1;e-=2)n=e-1,f+=t[e]*r[e]+t[n]*r[n];return 0===e&&(f+=t[0]*r[0]),f},transpose:function(t){var r,e,n,o,f,i=t.length,s=t[0].length,c=Array(s);for(e=0;e<s;e++)c[e]=Array(i);for(r=i-1;r>=1;r-=2){for(o=t[r],n=t[r-1],e=s-1;e>=1;--e)(f=c[e])[r]=o[e],f[r-1]=n[e],(f=c[--e])[r]=o[e],f[r-1]=n[e];0===e&&((f=c[0])[r]=o[0],f[r-1]=n[0])}if(0===r){for(n=t[0],e=s-1;e>=1;--e)c[e][0]=n[e],c[--e][0]=n[e];0===e&&(c[0][0]=n[0])}return c}};this.numeric=r,t.numeric=r}}(this),f=function(){"use strict";function t(t,r,e){if(e){var n=r;r=t,t=n}var o,f=[[t[0],t[1],1,0,0,0,-1*r[0]*t[0],-1*r[0]*t[1]],[0,0,0,t[0],t[1],1,-1*r[1]*t[0],-1*r[1]*t[1]],[t[2],t[3],1,0,0,0,-1*r[2]*t[2],-1*r[2]*t[3]],[0,0,0,t[2],t[3],1,-1*r[3]*t[2],-1*r[3]*t[3]],[t[4],t[5],1,0,0,0,-1*r[4]*t[4],-1*r[4]*t[5]],[0,0,0,t[4],t[5],1,-1*r[5]*t[4],-1*r[5]*t[5]],[t[6],t[7],1,0,0,0,-1*r[6]*t[6],-1*r[6]*t[7]],[0,0,0,t[6],t[7],1,-1*r[7]*t[6],-1*r[7]*t[7]]],i=r;try{o=numeric.inv(numeric.dotMMsmall(numeric.transpose(f),f))}catch(h){return console.log(h),[1,0,0,0,1,0,0,0]}for(var s,c=numeric.dotMMsmall(o,numeric.transpose(f)),u=numeric.dotMV(c,i),a=0;a<u.length;a++)u[a]=(s=u[a],Math.round(1e10*s)/1e10);return u[8]=1,u}function r(e,n){return"undefined"!==typeof window&&window===this||void 0===this?new r(e,n):(this.srcPts=e,this.dstPts=n,this.coeffs=t(this.srcPts,this.dstPts,!1),this.coeffsInv=t(this.srcPts,this.dstPts,!0),this)}return r.prototype={transform:function(t,r){var e=[];return e[0]=(this.coeffs[0]*t+this.coeffs[1]*r+this.coeffs[2])/(this.coeffs[6]*t+this.coeffs[7]*r+1),e[1]=(this.coeffs[3]*t+this.coeffs[4]*r+this.coeffs[5])/(this.coeffs[6]*t+this.coeffs[7]*r+1),e},transformInverse:function(t,r){var e=[];return e[0]=(this.coeffsInv[0]*t+this.coeffsInv[1]*r+this.coeffsInv[2])/(this.coeffsInv[6]*t+this.coeffsInv[7]*r+1),e[1]=(this.coeffsInv[3]*t+this.coeffsInv[4]*r+this.coeffsInv[5])/(this.coeffsInv[6]*t+this.coeffsInv[7]*r+1),e}},r},void 0!==typeof t?t.exports=f():void 0===(o="function"===typeof(n=f)?n.call(r,e,r,t):n)||(t.exports=o)},function(t,r,e){"use strict";e.r(r);var n=e(0),o=e.n(n);self.onmessage=function(t){const{points:{topLeft:r,topRight:e,bottomLeft:n,bottomRight:f}}=t.data,i=(Math.sqrt((r.x-e.x)**2+(r.y-e.y)**2)+Math.sqrt((f.x-n.x)**2+(f.y-n.y)**2))/2,s=(Math.sqrt((r.x-n.x)**2+(r.y-n.y)**2)+Math.sqrt((f.x-e.x)**2+(f.y-e.y)**2))/2,c=[r.x,r.y,e.x,e.y,f.x,f.y,n.x,n.y],u=[0,0,i,0,i,s,0,s],a=o()(c,u);self.postMessage({matrix:a,width:i,height:s})}}]);\n//# sourceMappingURL=Matrix.worker.d843d03d.worker.js.map',"Worker",void 0,n.p+"static/js/Matrix.worker.d843d03d.worker.js")},M=function(){function e(){var t=this;Object(y.a)(this,e),this.setup=function(e,n){t.terminate(),t.container=e,t.x=e.offsetWidth/2,t.y=e.offsetHeight/2,t.scale=1,t.mousePressed=!1,t.sketch=function(r){n&&(r.preload=function(){t.background=r.loadImage(n)},r.setup=function(){var t=r.createCanvas(e.offsetWidth,e.offsetHeight);t.elt.addEventListener("contextmenu",(function(e){return e.preventDefault()})),t.parent(e),r.imageMode(r.CENTER)},r.draw=function(){var e=t.background.width*t.scale,n=t.background.height*t.scale;if(r.clear(),r.image(t.background,t.x,t.y,e,n),r.push(),t.points.forEach((function(e){var n=t.mapPointToCanvas(e),o=n.x,a=n.y;r.noStroke(),r.fill("#e84a5f"),r.rectMode(r.CENTER),r.rect(o,a,10,10)})),r.pop(),r.push(),4===t.points.length){var o=t.getCornerPoints(),a=o.topLeft,i=o.topRight,s=o.bottomLeft,c=o.bottomRight,u=t.mapPointToCanvas(a),f=t.mapPointToCanvas(i),l=t.mapPointToCanvas(s),h=t.mapPointToCanvas(c);r.stroke("#e84a5f99"),r.strokeWeight(8),t.drawLine(r,u,l),t.drawLine(r,f,h),t.drawLine(r,u,f),t.drawLine(r,l,h)}if(r.pop(),r.push(),r.text("x: ".concat(Math.floor(r.mouseX),", y: ").concat(Math.floor(r.mouseY)),10,r.height-10),r.mouseX>=t.x-e/2&&r.mouseX<=t.x+e/2&&r.mouseY>=t.y-n/2&&r.mouseY<=t.y+n/2){var d=(r.mouseX-t.x+t.background.width*t.scale/2)/t.scale,m=(r.mouseY-t.y+t.background.height*t.scale/2)/t.scale;r.text("img x: ".concat(Math.floor(d),", img y: ").concat(Math.floor(m)),10,r.height-30)}r.pop()},r.mousePressed=function(){if(!(r.mouseX<0||r.mouseX>r.width||r.mouseY<0||r.mouseY>r.height)){var e=(r.mouseX-t.x)/t.scale+t.background.width/2,n=(r.mouseY-t.y)/t.scale+t.background.height/2,o=t.points.findIndex((function(t){var r=t.x,o=t.y;return e>=r-5&&e<=r+5&&n>=o-5&&n<=o+5}));r.mouseButton===r.RIGHT&&-1!==o?t.reactRemovePoint(o):r.mouseButton===r.LEFT&&t.isPinning&&e>=0&&e<=t.background.width&&n>=0&&n<=t.background.height&&t.reactAddPoint(e,n),t.startX=r.mouseX,t.startY=r.mouseY,t.mousePressed=!0}},r.mouseReleased=function(){t.mousePressed=!1},r.mouseDragged=function(){if(!t.isPinning&&t.mousePressed&&!(r.mouseX<0||r.mouseX>r.width||r.mouseY<0||r.mouseY>r.height)){var e=t.startX-r.mouseX,n=t.startY-r.mouseY;t.x-=e,t.y-=n,t.startX=r.mouseX,t.startY=r.mouseY}},r.mouseWheel=function(e){if(!t.isPinning&&!(r.mouseX<0||r.mouseX>r.width||r.mouseY<0||r.mouseY>r.height)){var n=e.delta;t.scale+=n/1e3}},r.windowResized=function(){r.resizeCanvas(e.offsetWidth,e.offsetHeight)})},t.p5instance=new k.a(t.sketch)},this.setPinning=function(e){t.p5instance&&(t.container.style.cursor=e?"crosshair":"grab",t.isPinning=e)},this.setAddPoint=function(e){return t.reactAddPoint=e},this.setRemovePoint=function(e){return t.reactRemovePoint=e},this.setPoints=function(e){return t.points=e},this.getCornerPoints=function(){var e=t.points.map((function(e){return{d:Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2)),p:e}})).sort((function(e,t){return e.d-t.d}))[0].p,n=t.points.map((function(e){return{d:Math.sqrt(Math.pow(e.x-t.background.width,2)+Math.pow(e.y,2)),p:e}})).sort((function(e,t){return e.d-t.d}))[0].p,r=t.points.map((function(e){return{d:Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y-t.background.height,2)),p:e}})).sort((function(e,t){return e.d-t.d}))[0].p;return{topLeft:e,topRight:n,bottomRight:t.points.map((function(e){return{d:Math.sqrt(Math.pow(e.x-t.background.width,2)+Math.pow(e.y-t.background.height,2)),p:e}})).sort((function(e,t){return e.d-t.d}))[0].p,bottomLeft:r}},this.project=Object(d.a)(h.a.mark((function e(){var n,r,o,a,i,s,c,u,f;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var a=new E;a.postMessage({points:t.getCornerPoints()}),a.onmessage=function(t){n=t.data.matrix,r=t.data.width,o=t.data.height,e()}}));case 2:for(a=n.coeffsInv,t.background.loadPixels(),(i=t.p5instance.createImage(Math.floor(r),Math.floor(o))).loadPixels(),s=0;s<i.width;s++)for(c=0;c<i.height;c++)u=t.transformInverse(s,c,a),f=t.background.get(Math.floor(u.x),Math.floor(u.y)),i.set(s,c,f);return i.updatePixels(),e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)}))),this.transformInverse=function(e,t,n){var r={};return r.x=(n[0]*e+n[1]*t+n[2])/(n[6]*e+n[7]*t+1),r.y=(n[3]*e+n[4]*t+n[5])/(n[6]*e+n[7]*t+1),r},this.drawLine=function(e,t,n){e.line(t.x,t.y,n.x,n.y)},this.mapPointToCanvas=function(e){return{x:t.x+e.x*t.scale-t.background.width*t.scale/2,y:t.y+e.y*t.scale-t.background.height*t.scale/2}},this.terminate=function(){t.p5instance&&(t.p5instance.remove(),t.p5instance=null)}}return Object(w.a)(e,[{key:"enabled",get:function(){return!!this.p5instance}}]),e}(),O=(n(88),function(e){var t=e.image,n=e.setImage,a=e.setResult,i=e.setLoading,c=Object(r.useRef)(null),u=Object(r.useRef)(null),l=Object(r.useRef)(new M),y=Object(r.useState)(!1),w=Object(s.a)(y,2),x=w[0],k=w[1],P=Object(r.useState)([]),j=Object(s.a)(P,2),E=j[0],O=j[1],R=function(){var e=Object(d.a)(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.files&&t.target.files[0]&&((r=new FileReader).onload=function(e){n((function(){return e.target.result}))},r.readAsDataURL(t.target.files[0]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=Object(r.useCallback)((function(e,t){var n=[].concat(Object(f.a)(E),[{x:e,y:t}]);O((function(){return n})),4===n.length&&k(!1)}),[E]),Y=Object(r.useCallback)((function(e){var t=Object(f.a)(E);t.splice(e,1),O((function(){return t})),k(!0)}),[E]);return Object(r.useEffect)((function(){!l.current.enabled&&t&&l.current.setup(c.current,t)}),[c,t]),Object(r.useEffect)((function(){l.current.setAddPoint(X)}),[X]),Object(r.useEffect)((function(){l.current.setRemovePoint(Y)}),[Y]),Object(r.useEffect)((function(){l.current.setPoints(E)}),[E]),Object(r.useEffect)((function(){l.current.setPinning(x)}),[t,x]),Object(r.useEffect)((function(){document.body.addEventListener("keydown",(function(e){"Escape"===e.key&&k(!1)}))})),o.a.createElement("div",{className:"canvas-wrapper"},o.a.createElement("div",{className:"canvas-main",ref:c,onClick:function(){t||u.current.click()}},o.a.createElement("input",{ref:u,type:"file",accept:"image/png, image/jpeg",hidden:!0,onChange:R}),!t&&o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{size:100,color:"#dbe2ef77"}),o.a.createElement(p.a,{color:"#959ba577",textAlign:"center",marginTop:10},"Click to upload image")),t&&o.a.createElement(p.a,{className:"canvas-hint"},"Scroll to zoom in/out, drag to pan.",o.a.createElement("br",null),'Press "Start Pinning" and pin 4 points. Right click to unpin.')),o.a.createElement("div",{className:"canvas-toolbox"},o.a.createElement(g.a,{iconAfter:v.a,appearance:"primary",intent:"success",marginRight:8,disabled:!t||4===E.length,height:40,onClick:function(){return k(!x)}},x&&4!==E.length?o.a.createElement("span",null,"Stop Pinning (",4-E.length,")"):o.a.createElement("span",null,"Start Pinning (",4-E.length,")")),o.a.createElement(g.a,{appearance:"primary",intent:"danger",disabled:4!==E.length,height:40,iconAfter:b.a,onClick:Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.t0=a,e.next=4,l.current.project();case 4:e.t1=e.sent,(0,e.t0)(e.t1),i(!1);case 7:case"end":return e.stop()}}),e)})))},"Flatten")))}),R=n(169),X=function e(){var t=this;Object(y.a)(this,e),this.setup=function(e,n){t.terminate(),t.x=0,t.y=0,t.scale=1,t.background=n,t.mousePressed=!1,t.sketch=function(r){n&&(t.background=n,r.setup=function(){r.createCanvas(e.offsetWidth,e.offsetHeight,r.WEBGL).parent(e),r.imageMode(r.CENTER),r.noFill()},r.draw=function(){t.background&&(r.clear(),r.image(t.background,t.x,t.y,t.background.width*t.scale,t.background.height*t.scale))},r.mousePressed=function(){r.mouseX<0||r.mouseX>r.width||r.mouseY<0||r.mouseY>r.height||(t.startX=r.mouseX,t.startY=r.mouseY,t.mousePressed=!0)},r.mouseReleased=function(){t.mousePressed=!1},r.mouseDragged=function(){if(t.mousePressed&&!(r.mouseX<0||r.mouseX>r.width||r.mouseY<0||r.mouseY>r.height)){var e=t.startX-r.mouseX,n=t.startY-r.mouseY;t.x-=e,t.y-=n,t.startX=r.mouseX,t.startY=r.mouseY}},r.mouseWheel=function(e){if(!(r.mouseX<0||r.mouseX>r.width||r.mouseY<0||r.mouseY>r.height)){var n=e.delta;t.scale+=n/1e3}},r.windowResized=function(){r.resizeCanvas(e.offsetWidth,e.offsetHeight)})},t.p5instance=new k.a(t.sketch)},this.terminate=function(){t.p5instance&&t.p5instance.remove()}},Y=(n(159),function(e){var t=e.result,n=Object(r.useRef)(null),a=Object(r.useRef)(new X);return Object(r.useEffect)((function(){t&&a.current.setup(n.current,t)}),[n,t]),o.a.createElement("div",{className:"result-wrapper"},o.a.createElement("div",{className:"result-main",ref:n}),o.a.createElement("div",{className:"result-toolbox"},o.a.createElement(g.a,{iconAfter:R.a,appearance:"primary",intent:"warning",marginRight:8,disabled:!t,height:40,onClick:function(){t.save("result","png")}},"Download")))});var C=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(null),f=Object(s.a)(i,2),l=f[0],h=f[1],d=Object(r.useState)(!1),m=Object(s.a)(d,2),p=m[0],g=m[1];return o.a.createElement("div",{className:"app-wrapper"},o.a.createElement("div",{className:"app-content"},o.a.createElement(O,{image:n,setImage:a,setResult:h,setLoading:g}),o.a.createElement(Y,{result:l})),o.a.createElement(u,null),o.a.createElement("div",{className:"app-loader",style:{visibility:p?"visible":"hidden",opacity:p?1:0}},o.a.createElement(c.BounceLoader,{size:100,color:"white",loading:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,n){e.exports=n(161)},58:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},88:function(e,t,n){}},[[53,1,2]]]);
//# sourceMappingURL=main.9606cf0a.chunk.js.map