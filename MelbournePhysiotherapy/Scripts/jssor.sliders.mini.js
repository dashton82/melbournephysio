﻿(function(g,f,b,d,c,e,z){/*! Jssor */
$Jssor$=g.$Jssor$=g.$Jssor$||{};new(function(){});var m=function(){var b=this,a={};b.$On=b.addEventListener=function(b,c){if(typeof c!="function")return;if(!a[b])a[b]=[];a[b].push(c)};b.$Off=b.removeEventListener=function(e,d){var b=a[e];if(typeof d!="function")return;else if(!b)return;for(var c=0;c<b.length;c++)if(d==b[c]){b.splice(c,1);return}};b.d=function(e){var c=a[e],d=[];if(!c)return;for(var b=1;b<arguments.length;b++)d.push(arguments[b]);for(var b=0;b<c.length;b++)try{c[b].apply(g,d)}catch(f){}}},h;(function(){h=function(a,b){this.x=typeof a=="number"?a:0;this.y=typeof b=="number"?b:0};})();var l=g.$JssorEasing$={$EaseLinear:function(a){return a},$EaseGoBack:function(a){return 1-b.abs(2-1)},$EaseSwing:function(a){return-b.cos(a*b.PI)/2+.5},$EaseInQuad:function(a){return a*a},$EaseOutQuad:function(a){return-a*(a-2)},$EaseInOutQuad:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},$EaseInCubic:function(a){return a*a*a},$EaseOutCubic:function(a){return(a-=1)*a*a+1},$EaseInOutCubic:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},$EaseInQuart:function(a){return a*a*a*a},$EaseOutQuart:function(a){return-((a-=1)*a*a*a-1)},$EaseInOutQuart:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},$EaseInQuint:function(a){return a*a*a*a*a},$EaseOutQuint:function(a){return(a-=1)*a*a*a*a+1},$EaseInOutQuint:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},$EaseInSine:function(a){return 1-b.cos(a*b.PI/2)},$EaseOutSine:function(a){return b.sin(a*b.PI/2)},$EaseInOutSine:function(a){return-1/2*(b.cos(b.PI*a)-1)},$EaseInExpo:function(a){return a==0?0:b.pow(2,10*(a-1))},$EaseOutExpo:function(a){return a==1?1:-b.pow(2,-10*a)+1},$EaseInOutExpo:function(a){return a==0||a==1?a:(a*=2)<1?1/2*b.pow(2,10*(a-1)):1/2*(-b.pow(2,-10*--a)+2)},$EaseInCirc:function(a){return-(b.sqrt(1-a*a)-1)},$EaseOutCirc:function(a){return b.sqrt(1-(a-=1)*a)},$EaseInOutCirc:function(a){return(a*=2)<1?-1/2*(b.sqrt(1-a*a)-1):1/2*(b.sqrt(1-(a-=2)*a)+1)},$EaseInElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return-(b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c))},$EaseOutElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return b.pow(2,-10*a)*b.sin((a-d)*2*b.PI/c)+1},$EaseInOutElastic:function(a){if(!a||a==1)return a;var c=.45,d=.1125;return(a*=2)<1?-.5*b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c):b.pow(2,-10*(a-=1))*b.sin((a-d)*2*b.PI/c)*.5+1},$EaseInBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},$EaseOutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},$EaseInOutBack:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},$EaseInBounce:function(a){return 1-l.$EaseOutBounce(1-a)},$EaseOutBounce:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},$EaseInOutBounce:function(a){return a<1/2?l.$EaseInBounce(a*2)*.5:l.$EaseOutBounce(a*2-1)*.5+.5},$EaseInWave:function(a){return 1-b.cos(a*b.PI*2)},$EaseOutWave:function(a){return b.sin(a*b.PI*2)},$EaseOutJump:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},$EaseInJump:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a}},q={Md:37,qd:39},n={Cd:0,Bd:1,Dd:2,Fd:3,Ed:4,ue:5},y=1,u=2,v=4,x=5,j,a=new function(){var i=this,m=n.Cd,j=0,q=0,t=0,cb=navigator.appName,k=navigator.userAgent;function D(){if(!m)if(cb=="Microsoft Internet Explorer"&&!!g.attachEvent&&!!g.ActiveXObject){var d=k.indexOf("MSIE");m=n.Bd;q=parseFloat(k.substring(d+5,k.indexOf(";",d)));/*@cc_on@*/j=f.documentMode||q}else if(cb=="Netscape"&&!!g.addEventListener){var c=k.indexOf("Firefox"),a=k.indexOf("Safari"),h=k.indexOf("Chrome"),b=k.indexOf("AppleWebKit");if(c>=0){m=n.Dd;j=parseFloat(k.substring(c+8))}else if(a>=0){var i=k.substring(0,a).lastIndexOf("/");m=h>=0?n.Ed:n.Fd;j=parseFloat(k.substring(i+1,a))}if(b>=0)t=parseFloat(k.substring(b+12))}else{var e=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);if(e){m=n.ue;j=parseFloat(e[2])}}}function l(){D();return m==y}function G(){return l()&&(j<6||f.compatMode=="BackCompat")}function V(){D();return m==u}function hb(){D();return m==v}function ib(){D();return m==x}function s(){return l()&&j<9}var B;function r(a){if(!B){p(["transform","WebkitTransform","msTransform","MozTransform","OTransform"],function(b){if(!i.Zb(a.style[b])){B=b;return c}});B=B||"transform"}return B}function ab(a){return Object.prototype.toString.call(a)}var J;function p(a,c){if(ab(a)=="[object Array]"){for(var b=0;b<a.length;b++)if(c(a[b],b,a))break}else for(var d in a)if(c(a[d],d,a))break}function jb(){if(!J){J={};p(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){J["[object "+a+"]"]=a.toLowerCase()})}return J}function A(a){return a==d?String(a):jb()[ab(a)]||"object"}function bb(b,a){setTimeout(b,a||0)}function I(b,d,c){var a=!b||b=="inherit"?"":b;p(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.lastIndex+1,a.length-(b.lastIndex+1));a=d+e}});a=c+(a.indexOf(" ")!=0?" ":"")+a;return a}function W(b,a){if(j<9)b.style.filter=a}i.Qb=l;i.Yb=hb;i.Wb=ib;i.Pb=s;i.tb=function(){return j};i.Tb=function(){return t};i.$Delay=bb;i.J=function(a){if(i.se(a))a=f.getElementById(a);return a};i.Mb=function(a){return a?a:g.event};i.fc=function(a){a=i.Mb(a);var b=new h;if(a.type=="DOMMouseScroll"&&V()&&j<3){b.x=a.screenX;b.y=a.screenY}else if(typeof a.pageX=="number"){b.x=a.pageX;b.y=a.pageY}else if(typeof a.clientX=="number"){b.x=a.clientX+f.body.scrollLeft+f.documentElement.scrollLeft;b.y=a.clientY+f.body.scrollTop+f.documentElement.scrollTop}return b};i.Jb=function(c,a,f){if(l()&&q<9){var h=c.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=b.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=I(h,[i],d);W(c,g)}else c.style.opacity=a==1?"":b.round(a*100)/100};i.xe=function(b,c){var a=r(b);if(a)b.style[a+"Origin"]=c};i.ze=function(a,c){if(l()&&q<9||q<10&&G())a.style.zoom=c==1?"":c;else{var b=r(a);if(b){var f="scale("+c+")",e=a.style[b],g=new RegExp(/[\s]*scale\(.*?\)/g),d=I(e,[g],f);a.style[b]=d}}};i.re=function(a){if(!a.style[r(a)]||a.style[r(a)]=="none")a.style[r(a)]="perspective(2000px)"};i.e=function(a,c,d,b){a=i.J(a);if(a.addEventListener){c=="mousewheel"&&a.addEventListener("DOMMouseScroll",d,b);a.addEventListener(c,d,b)}else if(a.attachEvent){a.attachEvent("on"+c,d);b&&a.setCapture&&a.setCapture()}};i.Uc=function(a,c,d,b){a=i.J(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};i.Tc=function(b,a){i.e(s()?f:g,"mouseup",b,a)};i.U=function(a){a=i.Mb(a);a.preventDefault&&a.preventDefault();a.cancel=c;a.returnValue=e};i.p=function(e,d){for(var b=[],a=2;a<arguments.length;a++)b.push(arguments[a]);var c=function(){for(var c=b.concat([]),a=0;a<arguments.length;a++)c.push(arguments[a]);return d.apply(e,c)};return c};i.Rc=function(a,c){var b=f.createTextNode(c);i.Vb(a);a.appendChild(b)};i.Vb=function(a){a.innerHTML=""};i.jb=function(c){for(var b=[],a=c.firstChild;a;a=a.nextSibling)a.nodeType==1&&b.push(a);return b};function N(a,c,b,f){if(!b)b="u";for(a=a?a.firstChild:d;a;a=a.nextSibling)if(a.nodeType==1){if(a.getAttribute(b)==c)return a;if(f){var e=N(a,c,b,f);if(e)return e}}}i.n=N;function S(a,c,e){for(a=a?a.firstChild:d;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(e){var b=S(a,c,e);if(b)return b}}}i.kd=S;i.od=function(b,a){return b.getElementsByTagName(a)};i.m=function(c){for(var b=1;b<arguments.length;b++){var a=arguments[b];if(a)for(var d in a)c[d]=a[d]}return c};i.Zb=function(a){return A(a)=="undefined"};i.md=function(a){return A(a)=="function"};i.se=function(a){return A(a)=="string"};i.nd=function(a){return!isNaN(parseFloat(a))&&isFinite(a)};i.f=p;i.gb=function(a){return i.ec("DIV",a)};i.dd=function(a){return i.ec("SPAN",a)};i.ec=function(b,a){a=a||f;return a.createElement(b)};i.P=function(){};i.Sb=function(a,b){return a.getAttribute(b)};i.cd=function(b,c,a){b.setAttribute(c,a)};i.ac=function(a){return a.className};i.bc=function(b,a){b.className=a?a:""};i.ad=function(a){return a.style.display};i.Z=function(b,a){b.style.display=a||""};i.S=function(b,a){b.style.overflow=a};i.fb=function(a){return a.parentNode};i.x=function(a){i.Z(a,"none")};i.o=function(a,b){i.Z(a,b==e?"none":"")};i.q=function(b,a){b.style.position=a};i.j=function(a,b){a.style.top=b+"px"};i.i=function(a,b){a.style.left=b+"px"};i.h=function(a){return parseInt(a.style.width,10)};i.E=function(c,a){c.style.width=b.max(a,0)+"px"};i.k=function(a){return parseInt(a.style.height,10)};i.K=function(c,a){c.style.height=b.max(a,0)+"px"};i.Bc=function(a){return a.style.cssText};i.Db=function(b,a){b.style.cssText=a};i.Kc=function(b,a){b.removeAttribute(a)};i.ie=function(b,a){b.style.marginLeft=a+"px"};i.le=function(b,a){b.style.marginTop=a+"px"};i.zc=function(a){return parseInt(a.style.zIndex)||0};i.W=function(c,a){c.style.zIndex=b.ceil(a)};i.Cc=function(b,a){b.style.backgroundColor=a};i.gd=function(){return l()&&j<10};i.fd=function(d,c){if(c)d.style.clip="rect("+b.round(c.$Top)+"px "+b.round(c.$Right)+"px "+b.round(c.$Bottom)+"px "+b.round(c.$Left)+"px)";else{var g=i.Bc(d),f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=I(g,f,"");a.Db(d,e)}};i.u=function(){return+new Date};i.r=function(b,a){b.appendChild(a)};i.Zc=function(b,a){p(a,function(a){i.r(b,a)})};i.bb=function(c,b,a){c.insertBefore(b,a)};i.X=function(b,a){b.removeChild(a)};i.Yc=function(b,a){p(a,function(a){i.X(b,a)})};i.bd=function(a){i.Yc(a,i.jb(a))};i.gc=function(b,a){var c=f.body;while(a&&b!=a&&c!=a)try{a=a.parentNode}catch(d){return e}return b==a};i.s=function(b,a){return b.cloneNode(a)};function L(b,a,c){a.onload=d;a.abort=d;b&&b(a,c)}i.O=function(e,b){if(i.Wb()&&j<11.6||!e)L(b,d);else{var a=new Image;a.onload=i.p(d,L,b,a);a.onabort=i.p(d,L,b,a,c);a.src=e}};i.pd=function(e,b,f){var d=e.length+1;function c(a){d--;if(b&&a&&a.src==b.src)b=a;!d&&f&&f(b)}a.f(e,function(b){a.O(b.src,c)});c()};i.kc=function(d,k,j,i){if(i)d=a.s(d,c);for(var h=a.od(d,k),f=h.length-1;f>-1;f--){var b=h[f],e=a.s(j,c);a.bc(e,a.ac(b));a.Db(e,a.Bc(b));var g=a.fb(b);a.bb(g,e,b);a.X(g,b)}return d};var C;function lb(b){var g=this,h,d,j;function f(){var c=h;if(d)c+="dn";else if(j)c+="av";a.bc(b,c)}function k(){C.push(g);d=c;f()}g.Pc=function(){d=e;f()};g.xc=function(a){j=a;f()};b=i.J(b);if(!C){i.Tc(function(){var a=C;C=[];p(a,function(a){a.Pc()})});C=[]}h=i.ac(b);a.e(b,"mousedown",k)}i.qb=function(a){return new lb(a)};var F={$Opacity:i.Jb,$Top:i.j,$Left:i.i,ub:i.E,ob:i.K,Qc:i.Z,$Clip:i.fd,Uf:i.ie,Vf:i.le,B:i.q,$ZIndex:i.W};function H(){return F}i.Wc=H;i.I=function(c,b){var a=H();p(b,function(d,b){a[b]&&a[b](c,d)})};new(function(){})};j=function(n,m,g,O,z,x){n=n||0;var f=this,r,o,p,y,A=0,C,M,L,D,j=0,t=0,E,k=n,i,h,q,u=[],B;function I(b){i+=b;h+=b;k+=b;j+=b;t+=b;a.f(u,function(a){a,a.$Shift(b)})}function N(a,b){var c=a-i+n*b;I(c);return h}function w(w,G){var n=w;if(q&&(n>=h||n<=i))n=((n-i)%q+q)%q+i;if(!E||y||G||j!=n){var p=b.min(n,h);p=b.max(p,i);if(!E||y||G||p!=t){if(x){var e=x;if(z){var s=(p-k)/(m||1);if(g.Vc&&a.Yb()&&m)s=b.round(s*m/16)/m*16;if(g.$Reverse)s=1-s;e={};for(var o in x){var R=M[o]||1,J=L[o]||[0,1],l=(s-J[0])/J[1];l=b.min(b.max(l,0),1);l=l*R;var H=b.floor(l);if(l!=H)l-=H;var Q=C[o]||C.eb,I=Q(l),r,K=z[o],F=x[o];if(a.nd(F))r=K+(F-K)*I;else{r=a.m({A:{}},z[o]);a.f(F.A,function(c,b){var a=c*I;r.A[b]=a;r[b]+=a})}e[o]=r}}if(z.$Zoom);if(x.$Clip&&g.$Move){var v=e.$Clip.A,D=(v.$Top||0)+(v.$Bottom||0),A=(v.$Left||0)+(v.$Right||0);e.$Left=(e.$Left||0)+A;e.$Top=(e.$Top||0)+D;e.$Clip.$Left-=A;e.$Clip.$Right-=A;e.$Clip.$Top-=D;e.$Clip.$Bottom-=D}if(e.$Clip&&a.gd()&&!e.$Clip.$Top&&!e.$Clip.$Left&&e.$Clip.$Right==g.vb&&e.$Clip.$Bottom==g.yb)e.$Clip=d;a.f(e,function(b,a){B[a]&&B[a](O,b)})}f.Eb(t-k,p-k)}t=p;a.f(u,function(b,c){var a=w<j?u[u.length-c-1]:b;a.y(w,G)});var P=j,N=w;j=n;E=c;f.mb(P,N)}}function F(a,c){c&&a.tc(h,1);h=b.max(h,a.Q());u.push(a)}function H(){if(r){var d=a.u(),e=b.min(d-A,a.Wb()?80:20),c=j+e*p;A=d;if(c*p>=o*p)c=o;w(c);if(!y&&c*p>=o*p)J(D);else a.$Delay(H,g.$Interval)}}function v(d,e,g){if(!r){r=c;y=g;D=e;d=b.max(d,i);d=b.min(d,h);o=d;p=o<j?-1:1;f.hc();A=a.u();H()}}function J(a){if(r){y=r=D=e;f.pc();a&&a()}}f.$Play=function(a,b,c){v(a?j+a:h,b,c)};f.oc=function(b,a,c){v(b,a,c)};f.z=function(){J()};f.ed=function(a){v(a)};f.C=function(){return j};f.Nc=function(){return o};f.cb=function(){return t};f.y=w;f.Fc=function(){w(i,c)};f.$Move=function(a){w(j+a)};f.$IsPlaying=function(){return r};f.hd=function(a){q=a};f.tc=N;f.$Shift=I;f.xb=function(a){F(a,0)};f.Hb=function(a){F(a,1)};f.Q=function(){return h};f.mb=a.P;f.hc=a.P;f.pc=a.P;f.Eb=a.P;f.Gb=a.u();g=a.m({$Interval:15},g);q=g.Lc;B=a.m({},a.Wc(),g.Ic);i=k=n;h=n+m;var M=g.$Round||{},L=g.$During||{};C=a.m({eb:a.md(g.$Easing)&&g.$Easing||l.$EaseSwing},g.$Easing)};var r;new function(){;function n(o,Wb){var k=this;function rc(){var a=this;j.call(a,-1e8,2e8);a.pe=function(){var c=a.cb(),d=b.floor(c),f=v(d),e=c-b.floor(c);return{D:f,Be:d,B:e}};a.mb=function(d,a){var e=b.floor(a);if(e!=a&&a>d)e++;Lb(e,c);k.d(n.$EVT_POSITION_CHANGE,v(a),v(d),a,d)}}function qc(){var b=this;j.call(b,0,0,{Lc:t});a.f(B,function(a){i.$Loop&&a.hd(t);b.Hb(a);a.$Shift(rb/Rb)})}function pc(){var a=this,b=Kb.$Elmt;j.call(a,-1,2,{$Easing:l.$EaseLinear,Ic:{B:Qb},Lc:t},b,{B:1},{B:-1});a.ib=b}function ec(o,m){var a=this,f,g,h,l,b;j.call(a,-1e8,2e8);a.hc=function(){M=c;Q=d;k.d(n.$EVT_SWIPE_START,v(x.C()),x.C())};a.pc=function(){M=e;l=e;var a=x.pe();k.d(n.$EVT_SWIPE_END,v(x.C()),x.C());!a.B&&tc(a.Be,r)};a.mb=function(d,c){var a;if(l)a=b;else{a=g;if(h)a=i.$SlideEasing(c/h)*(g-f)+f}x.y(a)};a.db=function(b,d,c,e){f=b;g=d;h=c;x.y(b);a.y(0);a.oc(c,e)};a.ve=function(e){l=c;b=e;a.$Play(e,d,c)};a.we=function(a){b=a};x=new rc;x.xb(o);x.xb(m)}function fc(){var c=this,b=Pb();a.W(b,0);c.$Elmt=b;c.rb=function(){a.x(b);a.Vb(b)}}function oc(p,o){var f=this,s,w,H,x,g,y=[],X,q,bb,G,T,E,l,u,h;j.call(f,-C,C+1,{});function D(a){w&&w.Ib();s&&s.Ib();ab(p,a);s=new I.$Class(p,I,1);w=new I.$Class(p,I);w.Fc();s.Fc()}function db(){s.Gb<I.Gb&&D()}function M(o,q,m){if(!G){G=c;if(g&&m){var d=m.width,b=m.height,l=d,j=b;if(d&&b&&i.$FillMode){if(i.$FillMode&3){var h=e,p=L/K*b/d;if(i.$FillMode&1)h=p>1;else if(i.$FillMode&2)h=p<1;l=h?d*K/b:L;j=h?K:b*L/d}a.E(g,l);a.K(g,j);a.j(g,(K-j)/2);a.i(g,(L-l)/2)}a.q(g,"absolute");k.d(n.$EVT_LOAD_END,Ub)}}a.x(q);o&&o(f)}function cb(b,c,d,e){if(e==Q&&r==o&&N)if(!sc){var a=v(b);z.ne(a,o,c,f,d);c.Ld();U.tc(a,1);U.y(a);A.db(b,b,0)}}function eb(b){if(b==Q&&r==o){if(!l){var a=d;if(z)if(z.D==o)a=z.qe();else z.rb();db();l=new mc(o,a,f.Jd(),f.Hd());l.Ub(h)}!l.$IsPlaying()&&l.wb()}}function W(e,c){if(e==o){if(e!=c)B[c]&&B[c].Id();h&&h.$Enable();var j=Q=a.u();f.O(a.p(d,eb,j))}else{var g=b.abs(o-e);(!T||g<=i.$LazyLoading||t-g<=i.$LazyLoading)&&f.O()}}function fb(){if(r==o&&l){l.z();h&&h.$Quit();h&&h.$Disable();l.Hc()}}function gb(){r==o&&l&&l.z()}function S(b){if(P)a.U(b);else k.d(n.$EVT_CLICK,o,b)}function R(){h=u.pInstance;l&&l.Ub(h)}f.O=function(e,b){b=b||x;if(y.length&&!G){a.o(b);if(!bb){bb=c;k.d(n.$EVT_LOAD_START);a.f(y,function(b){if(!b.src){b.src=a.Sb(b,"src2");a.Z(b,b["display-origin"])}})}a.pd(y,g,a.p(d,M,e,b))}else M(e,b)};f.yd=function(){if(z){var b=z.Ae(t);if(b){var f=Q=a.u(),c=o+1,e=B[v(c)];return e.O(a.p(d,cb,c,e,b,f),x)}}V(r+i.$AutoPlaySteps)};f.Cb=function(){W(o,o)};f.Id=function(){h&&h.$Quit();h&&h.$Disable();f.Ac();l&&l.xd();l=d;D()};f.Ld=function(){a.x(p)};f.Ac=function(){a.o(p)};f.vd=function(){h&&h.$Enable()};function ab(b,f,d){d=d||0;if(!E){if(b.tagName=="IMG"){y.push(b);if(!b.src){T=c;b["display-origin"]=a.ad(b);a.x(b)}}a.Pb()&&a.W(b,a.zc(b)+1);if(a.Tb()>0)(!F||a.Tb()<534||!Z)&&a.re(b)}var h=a.jb(b);a.f(h,function(h){var j=a.Sb(h,"u");if(j=="player"&&!u){u=h;if(u.pInstance)R();else a.e(u,"dataavailable",R)}if(j=="caption"){if(!a.Qb()&&!f){var i=a.s(h,c);a.bb(b,i,h);a.X(b,h);h=i;f=c}}else if(!E&&!d&&!g&&a.Sb(h,"u")=="image"){g=h;if(g){if(g.tagName=="A"){X=g;a.I(X,O);q=a.s(g,e);a.e(q,"click",S);a.I(q,O);a.Z(q,"block");a.Jb(q,0);a.Cc(q,"#000");g=a.kd(g,"IMG")}g.border=0;a.I(g,O)}}ab(h,f,d+1)})}f.Eb=function(c,b){var a=C-b;Qb(H,a)};f.Jd=function(){return s};f.Hd=function(){return w};f.D=o;m.call(f);var J=a.n(p,"thumb");if(J){f.wd=a.s(J,c);a.x(J)}a.o(p);x=a.s(Y,c);a.W(x,1e3);a.e(p,"click",S);D(c);E=c;f.cc=g;f.Oc=q;f.ib=H=p;a.r(H,x);k.$On(203,W);k.$On(22,gb);k.$On(24,fb)}function mc(h,q,v,u){var b=this,m=0,x=0,o,g,d,f,l,s,w,t,p=B[h];j.call(b,0,0);function y(){a.bd(J);Vb&&l&&p.Oc&&a.r(J,p.Oc);a.o(J,l||!p.cc)}function A(){if(s){s=e;k.d(n.$EVT_ROLLBACK_END,h,d,m,g,d,f);b.y(g)}b.wb()}function C(a){t=a;b.z();b.wb()}b.wb=function(){var a=b.cb();if(!G&&!M&&!t&&(a!=d||N&&(!Nb||S))&&r==h){if(!a){if(o&&!l){l=c;b.Hc(c);k.d(n.$EVT_SLIDESHOW_START,h,m,x,o,f)}y()}var e,i=n.$EVT_STATE_CHANGE;if(a==f){d==f&&b.y(g);return p.yd()}else if(a==d)e=f;else if(a==g)e=d;else if(!a)e=g;else if(a>d){s=c;e=d;i=n.$EVT_ROLLBACK_START}else e=b.Nc();k.d(i,h,a,m,g,d,f);b.oc(e,A)}};b.xd=function(){z&&z.D==h&&z.rb();var a=b.cb();a<f&&k.d(n.$EVT_STATE_CHANGE,h,-a-1,m,g,d,f)};b.Hc=function(b){q&&a.S(cb,b&&q.dc.$Outside?"":"hidden")};b.Eb=function(b,a){if(l&&a>=o){l=e;y();p.Ac();z.rb();k.d(n.$EVT_SLIDESHOW_END,h,m,x,o,f)}k.d(n.$EVT_PROGRESS_CHANGE,h,a,m,g,d,f)};b.Ub=function(a){if(a&&!w){w=a;a.$On($JssorPlayer$.Xc,C)}};q&&b.Hb(q);o=b.Q();b.Q();b.Hb(v);g=v.Q();d=g+i.$AutoPlayInterval;u.$Shift(d);b.xb(u);f=b.Q()}function Qb(c,g){var f=w>0?w:i.$PlayOrientation,d=b.round(vb*g*(f&1)),e=b.round(wb*g*(f>>1&1));if(a.Qb()&&a.tb()>=10&&a.tb()<11)c.style.msTransform="translate("+d+"px, "+e+"px)";else if(a.Yb()&&a.tb()>=30){c.style.WebkitTransition="transform 0s";c.style.WebkitTransform="translate3d("+d+"px, "+e+"px, 0px) perspective(2000px)"}else{a.i(c,d);a.j(c,e)}}function lc(a){P=0;!H&&ic()&&kc(a)}function kc(b){kb=M;G=c;ub=e;Q=d;a.e(f,hb,Sb);a.u();Db=A.Nc();A.z();if(!kb)w=0;if(F){var h=b.touches[0];pb=h.clientX;qb=h.clientY}else{var g=a.fc(b);pb=g.x;qb=g.y;a.U(b)}E=0;X=0;bb=0;D=x.C();k.d(n.$EVT_DRAG_START,v(D),D,b)}function Sb(e){if(G&&(!a.Pb()||e.button)){var f;if(F){var n=e.touches;if(n&&n.length>0)f=new h(n[0].clientX,n[0].clientY)}else f=a.fc(e);if(f){var l=f.x-pb,m=f.y-qb;if(b.floor(D)!=D)w=i.$PlayOrientation&H;if((l||m)&&!w){if(H==3)if(b.abs(m)>b.abs(l))w=2;else w=1;else w=H;if(F&&w==1&&b.abs(m)-b.abs(l)>3)ub=c}if(w){var d=m,k=wb;if(w==1){d=l;k=vb}if(!i.$Loop){if(d>0){var g=k*r,j=d-g;if(j>0)d=g+b.sqrt(j)*5}if(d<0){var g=k*(t-C-r),j=-d-g;if(j>0)d=-g-b.sqrt(j)*5}}if(E-X<-2)bb=1;else if(E-X>2)bb=0;X=E;E=d;mb=D-E/k/(gb||1);if(E&&w&&!ub){a.U(e);if(!M)A.ve(mb);else A.we(mb)}else a.Pb()&&a.U(e)}}}else zb(e)}function zb(h){gc();if(G){G=e;a.u();a.Uc(f,hb,Sb);P=E;P&&a.U(h);A.z();var d=x.C();k.d(n.$EVT_DRAG_END,v(d),d,v(D),D,h);var c=b.floor(D);if(b.abs(E)>=i.$MinDragOffsetToSlide){c=b.floor(d);c+=bb}if(!i.$Loop)c=b.min(t-C,b.max(c,0));var g=b.abs(c-d);g=1-b.pow(1-g,5);if(!P&&kb)A.ed(Db);else if(d==c){nb.vd();nb.Cb()}else A.db(d,c,g*Mb)}}function dc(a){B[r];r=v(a);nb=B[r];Lb(a);return r}function tc(a,b){w=0;dc(a);k.d(n.$EVT_PARK,v(a),b)}function Lb(b,c){a.f(R,function(a){a.Lb(v(b),b,c)})}function ic(){var b=n.nc||0,a=i.$DragOrientation;if(F)a&1&&(a&=1);n.nc|=a;return H=a&~b}function gc(){if(H){n.nc&=~i.$DragOrientation;H=0}}function Pb(){var b=a.gb();a.I(b,O);a.q(b,"absolute");return b}function v(a){return(a%t+t)%t}function ac(b,a){V(b,i.$SlideDuration,a)}function tb(){a.f(R,function(a){a.Nb(a.ab.$ChanceToShow>S)})}function Yb(b){b=a.Mb(b);var c=b.target?b.target:b.srcElement,d=b.relatedTarget?b.relatedTarget:b.toElement;if(!a.gc(o,c)||a.gc(o,d))return;S=1;tb();B[r].Cb()}function Xb(){S=0;tb()}function Zb(){O={ub:L,ob:K,$Top:0,$Left:0};a.f(T,function(b){a.I(b,O);a.q(b,"absolute");a.S(b,"hidden");a.x(b)});a.I(Y,O)}function eb(b,a){V(b,a,c)}function V(h,g,l){if(Jb&&(!G||i.$NaviQuitDrag)){M=c;G=e;A.z();if(a.Zb(g))g=Mb;var f=Ab.cb(),d=h;if(l){d=f+h;if(h>0)d=b.ceil(d);else d=b.floor(d)}if(!i.$Loop)d=b.max(0,b.min(d,t-C));var k=(d-f)%t;d=f+k;var j=f==d?0:g*b.abs(k);j=b.min(j,g*C*1.5);A.db(f,d,j)}}k.$PlayTo=V;k.$GoTo=function(a){V(a,0)};k.$Next=function(){eb(1)};k.$Prev=function(){eb(-1)};k.$Pause=function(){N=e};k.$Play=function(){if(!N){N=c;B[r]&&B[r].Cb()}};k.$SetSlideshowTransitions=function(a){i.$SlideshowOptions.$Transitions=a};k.$SetCaptionTransitions=function(b){I.Gb=a.u()};k.$SlidesCount=function(){return T.length};k.$CurrentIndex=function(){return r};k.$IsAutoPlaying=function(){return N};k.$IsDragging=function(){return G};k.$IsSliding=function(){return M};k.$IsMouseOver=function(){return!S};k.$LastDragSucceded=function(){return P};k.$GetOriginalWidth=function(){return a.h(u||o)};k.$GetOriginalHeight=function(){return a.k(u||o)};k.$GetScaleWidth=function(){return a.h(o)};k.$GetScaleHeight=function(){return a.k(o)};k.$SetScaleWidth=function(c){if(!u){var b=a.s(o,e);a.Kc(b,"id");a.q(b,"relative");a.j(b,0);a.i(b,0);a.S(b,"visible");u=a.s(o,e);a.Kc(u,"id");a.Db(u,"");a.q(u,"absolute");a.j(u,0);a.i(u,0);a.E(u,a.h(o));a.K(u,a.k(o));a.xe(u,"0 0");a.r(u,b);var d=a.jb(o);a.r(o,u);a.Zc(b,d);a.o(b);a.o(u)}gb=c/a.h(u);a.ze(u,gb);a.E(o,c);a.K(o,gb*a.k(u))};k.jc=function(a){var d=b.ceil(v(rb/Rb)),c=v(a-r+d);if(c>C){if(a-r>t/2)a-=t;else if(a-r<=-t/2)a+=t}else a=r+c-d;return a};m.call(this);k.$Elmt=o=a.J(o);var i=a.m({$FillMode:0,$LazyLoading:1,$StartIndex:0,$AutoPlay:e,$Loop:c,$NaviQuitDrag:c,$AutoPlaySteps:1,$AutoPlayInterval:3e3,$PauseOnHover:3,$HwaMode:1,$SlideDuration:500,$SlideEasing:l.$EaseOutQuad,$MinDragOffsetToSlide:20,$SlideSpacing:0,$DisplayPieces:1,$ParkingPosition:0,$UISearchMode:1,$PlayOrientation:1,$DragOrientation:1},Wb),ab=i.$SlideshowOptions,I=a.m({$Class:s},i.Qe),ob=i.$NavigatorOptions,jb=i.$DirectionNavigatorOptions,W=i.$ThumbnailNavigatorOptions,db=i.$UISearchMode,u,y=a.n(o,"slides",d,db),Y=a.n(o,"loading",d,db)||a.gb(f),Gb=a.n(o,"navigator",d,db),Cb=a.n(o,"thumbnavigator",d,db),cc=a.h(y),bc=a.k(y);if(!i.$Loop)i.$ParkingPosition=0;if(i.$DisplayPieces>1||i.$ParkingPosition)i.$DragOrientation&=i.$PlayOrientation;var O,T=a.jb(y),r=-1,nb,t=T.length,L=i.$SlideWidth||cc,K=i.$SlideHeight||bc,Ob=i.$SlideSpacing,vb=L+Ob,wb=K+Ob,Rb=i.$PlayOrientation==1?vb:wb,C=b.min(i.$DisplayPieces,t),cb,w,H,ub,F,R=[],Tb,Eb,Ib,Vb,sc,N,Nb=i.$PauseOnHover,Mb=i.$SlideDuration,lb,Z,rb,Jb=C<t,jc=Jb&&i.$DragOrientation,P,S=1,M,G,Q,pb=0,qb=0,E,X,bb,Ab,x,U,A,Kb=new fc,gb;N=i.$AutoPlay;k.ab=Wb;Zb();o["jssor-slider"]=c;a.W(y,a.zc(y));a.q(y,"absolute");cb=a.s(y);a.bb(a.fb(y),cb,y);if(ab){Vb=ab.$ShowLink;lb=ab.$Class;Z=C==1&&t>1&&lb&&(!a.Qb()||a.tb()>=8)}rb=Z||C>=t?0:i.$ParkingPosition;var sb=y,B=[],z,J,yb="mousedown",hb="mousemove",Bb="mouseup",fb,D,kb,Db,mb;if(g.navigator.msPointerEnabled){yb="MSPointerDown";hb="MSPointerMove";Bb="MSPointerUp";fb="MSPointerCancel";if(i.$DragOrientation){var xb="none";if(i.$DragOrientation==1)xb="pan-y";else if(i.$DragOrientation==2)xb="pan-x";a.cd(sb.style,"-ms-touch-action",xb)}}else if("ontouchstart"in g||"createTouch"in f){F=c;yb="touchstart";hb="touchmove";Bb="touchend";fb="touchcancel"}U=new pc;if(Z)z=new lb(Kb,L,K,ab,F);a.r(cb,U.ib);a.S(y,"hidden");J=Pb();a.Cc(J,"#000");a.Jb(J,0);a.bb(sb,J,sb.firstChild);for(var ib=0;ib<T.length;ib++){var nc=T[ib],Ub=new oc(nc,ib);B.push(Ub)}a.x(Y);Ab=new qc;A=new ec(Ab,U);if(jc){a.e(y,yb,lc);a.e(f,Bb,zb);fb&&a.e(f,fb,zb)}Nb&=F?2:1;if(Gb&&ob){Tb=new ob.$Class(Gb,ob);R.push(Tb)}if(jb){Eb=new jb.$Class(o,jb,i.$UISearchMode);R.push(Eb)}if(Cb&&W){W.$StartIndex=i.$StartIndex;Ib=new W.$Class(Cb,W);R.push(Ib)}a.f(R,function(a){a.zb(t,B,Y);a.$On(p.pb,ac)});a.e(o,"mouseout",Yb);a.e(o,"mouseover",Xb);tb();i.$ArrowKeyNavigation&&a.e(f,"keydown",function(a){if(a.keyCode==q.Md)eb(-1);else a.keyCode==q.qd&&eb(1)});k.$SetScaleWidth(k.$GetOriginalWidth());A.db(i.$StartIndex,i.$StartIndex,0)}n.$EVT_CLICK=21;n.$EVT_DRAG_START=22;n.$EVT_DRAG_END=23;n.$EVT_SWIPE_START=24;n.$EVT_SWIPE_END=25;n.$EVT_LOAD_START=26;n.$EVT_LOAD_END=27;n.$EVT_POSITION_CHANGE=202;n.$EVT_PARK=203;n.$EVT_SLIDESHOW_START=206;n.$EVT_SLIDESHOW_END=207;n.$EVT_PROGRESS_CHANGE=208;n.$EVT_STATE_CHANGE=209;n.$EVT_ROLLBACK_START=210;n.$EVT_ROLLBACK_END=211;g.$JssorSlider$=r=n};var p={pb:1};g.$JssorNavigator$=function(e,B){var g=this;m.call(g);e=a.J(e);var s,t,r,q,k=0,f,l,j,x,y,i,h,o,n,A=[],z=[];function w(a){a!=-1&&z[a].xc(a==k)}function u(a){g.d(p.pb,a*l)}g.$Elmt=e;g.Lb=function(a){if(a!=q){var d=k,c=b.floor(a/l);k=c;q=a;w(d);w(c)}};g.Nb=function(b){a.o(e,b)};var v;g.zb=function(E){if(!v){s=b.ceil(E/l);k=0;var q=o+x,w=n+y,p=b.ceil(s/j)-1;t=o+q*(!i?p:j-1);r=n+w*(i?p:j-1);a.E(e,t);a.K(e,r);f.$AutoCenter&1&&a.i(e,(a.h(a.fb(e))-t)/2);f.$AutoCenter&2&&a.j(e,(a.k(a.fb(e))-r)/2);for(var g=0;g<s;g++){var D=a.dd();a.Rc(D,g+1);var m=a.kc(h,"NumberTemplate",D,c);a.q(m,"absolute");var B=g%(p+1);a.i(m,!i?q*B:g%j*q);a.j(m,i?w*B:b.floor(g/(p+1))*w);a.r(e,m);A[g]=m;f.$ActionMode&1&&a.e(m,"click",a.p(d,u,g));f.$ActionMode&2&&a.e(m,"mouseover",a.p(d,u,g));z[g]=a.qb(m)}v=c}};g.ab=f=a.m({$SpacingX:0,$SpacingY:0,$Orientation:1,$ActionMode:1},B);h=a.n(e,"prototype");o=a.h(h);n=a.k(h);a.X(e,h);l=f.$Steps||1;j=f.$Lanes||1;x=f.$SpacingX;y=f.$SpacingY;i=f.$Orientation-1};g.$JssorDirectionNavigator$=function(i,t,o){var e=this;m.call(e);var b=a.n(i,"arrowleft",d,o),f=a.n(i,"arrowright",d,o),h,j,n=a.h(i),l=a.k(i),r=a.h(b),q=a.k(b);function k(a){e.d(p.pb,a,c)}e.Lb=function(b,a,c){if(c);};e.Nb=function(c){a.o(b,c);a.o(f,c)};var s;e.zb=function(c){if(!s){if(h.$AutoCenter&1){a.i(b,(n-r)/2);a.i(f,(n-r)/2)}if(h.$AutoCenter&2){a.j(b,(l-q)/2);a.j(f,(l-q)/2)}a.e(b,"click",a.p(d,k,-j));a.e(f,"click",a.p(d,k,j));a.qb(b);a.qb(f)}};e.ab=h=a.m({$Steps:1},t);j=h.$Steps};g.$JssorThumbnailNavigator$=function(i,A){var h=this,x,l,d,u=[],y,w,f,n,o,t,s,k,q,g,j;m.call(h);i=a.J(i);function z(n,e){var g=this,b,m,k;function o(){m.xc(l==e)}function i(){if(!q.$LastDragSucceded()){var a=(f-e%f)%f,b=q.jc((e+a)/f),c=b*f-a;h.d(p.pb,c)}}g.D=e;g.sc=o;k=n.wd||n.cc||a.gb();g.ib=b=a.kc(j,"ThumbnailTemplate",k,c);m=a.qb(b);d.$ActionMode&1&&a.e(b,"click",i);d.$ActionMode&2&&a.e(b,"mouseover",i)}h.Lb=function(c,d,e){var a=l;l=c;a!=-1&&u[a].sc();u[c].sc();!e&&q.$PlayTo(q.jc(b.floor(d/f)))};h.Nb=function(b){a.o(i,b)};var v;h.zb=function(F,D){if(!v){x=F;b.ceil(x/f);l=-1;k=b.min(k,D.length);var h=d.$Orientation&1,p=t+(t+n)*(f-1)*(1-h),m=s+(s+o)*(f-1)*h,C=p+(p+n)*(k-1)*h,A=m+(m+o)*(k-1)*(1-h);a.q(g,"absolute");a.S(g,"hidden");d.$AutoCenter&1&&a.i(g,(y-C)/2);d.$AutoCenter&2&&a.j(g,(w-A)/2);a.E(g,C);a.K(g,A);var j=[];a.f(D,function(l,e){var i=new z(l,e),d=i.ib,c=b.floor(e/f),k=e%f;a.i(d,(t+n)*k*(1-h));a.j(d,(s+o)*k*h);if(!j[c]){j[c]=a.gb();a.r(g,j[c])}a.r(j[c],d);u.push(i)});var E=a.m({$AutoPlay:e,$NaviQuitDrag:e,$SlideWidth:p,$SlideHeight:m,$SlideSpacing:n*h+o*(1-h),$MinDragOffsetToSlide:12,$SlideDuration:200,$PauseOnHover:3,$PlayOrientation:d.$Orientation,$DragOrientation:d.$DisableDrag?0:d.$Orientation},d);q=new r(i,E);v=c}};h.ab=d=a.m({$SpacingX:3,$SpacingY:3,$DisplayPieces:1,$Orientation:1,$AutoCenter:3,$ActionMode:1},A);y=a.h(i);w=a.k(i);g=a.n(i,"slides");j=a.n(g,"prototype");a.X(g,j);f=d.$Lanes||1;n=d.$SpacingX;o=d.$SpacingY;t=a.h(j);s=a.k(j);k=d.$DisplayPieces};function s(){j.call(this,0,0);this.Ib=a.P}})(window,document,Math,null,true,false)