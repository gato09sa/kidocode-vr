(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lu="166",N_=0,ad=1,U_=2,Up=1,O_=2,ai=3,Wi=0,pn=1,Dn=2,Fi=0,is=1,cd=2,ld=3,ud=4,F_=5,fr=100,V_=101,k_=102,B_=103,z_=104,H_=200,G_=201,W_=202,X_=203,Ll=204,Nl=205,q_=206,$_=207,j_=208,K_=209,Y_=210,J_=211,Q_=212,Z_=213,tv=214,ev=0,nv=1,iv=2,Wa=3,rv=4,sv=5,ov=6,av=7,Op=0,cv=1,lv=2,Vi=0,uv=1,hv=2,dv=3,fv=4,pv=5,mv=6,gv=7,Fp=300,fs=301,ps=302,Ul=303,Ol=304,yc=306,Fl=1e3,mr=1001,Vl=1002,bn=1003,_v=1004,Jo=1005,Ln=1006,Wc=1007,gr=1008,pi=1009,Vp=1010,kp=1011,go=1012,Nu=1013,Er=1014,ci=1015,wo=1016,Uu=1017,Ou=1018,ms=1020,Bp=35902,zp=1021,Hp=1022,Vn=1023,Gp=1024,Wp=1025,rs=1026,gs=1027,Xp=1028,Fu=1029,qp=1030,Vu=1031,ku=1033,Ca=33776,Ia=33777,Pa=33778,Da=33779,kl=35840,Bl=35841,zl=35842,Hl=35843,Gl=36196,Wl=37492,Xl=37496,ql=37808,$l=37809,jl=37810,Kl=37811,Yl=37812,Jl=37813,Ql=37814,Zl=37815,tu=37816,eu=37817,nu=37818,iu=37819,ru=37820,su=37821,La=36492,ou=36494,au=36495,$p=36283,cu=36284,lu=36285,uu=36286,vv=3200,yv=3201,jp=0,Ev=1,Di="",An="srgb",Qi="srgb-linear",Bu="display-p3",Ec="display-p3-linear",Xa="linear",ye="srgb",qa="rec709",$a="p3",Ur=7680,hd=519,Sv=512,xv=513,Tv=514,Kp=515,Mv=516,Av=517,wv=518,bv=519,dd=35044,fd="300 es",li=2e3,ja=2001;class ws{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pd=1234567;const io=Math.PI/180,_o=180/Math.PI;function bs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function zu(i,t){return(i%t+t)%t}function Rv(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Cv(i,t,e){return i!==t?(e-i)/(t-i):0}function ro(i,t,e){return(1-e)*i+e*t}function Iv(i,t,e,n){return ro(i,t,1-Math.exp(-e*n))}function Pv(i,t=1){return t-Math.abs(zu(i,t*2)-t)}function Dv(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Lv(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Nv(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Uv(i,t){return i+Math.random()*(t-i)}function Ov(i){return i*(.5-Math.random())}function Fv(i){i!==void 0&&(pd=i);let t=pd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vv(i){return i*io}function kv(i){return i*_o}function Bv(i){return(i&i-1)===0&&i!==0}function zv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gv(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),u=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),f=o((t-n)/2),m=s((n-t)/2),S=o((n-t)/2);switch(r){case"XYX":i.set(a*h,l*d,l*f,a*u);break;case"YZY":i.set(l*f,a*h,l*d,a*u);break;case"ZXZ":i.set(l*d,l*f,a*h,a*u);break;case"XZX":i.set(a*h,l*S,l*m,a*u);break;case"YXY":i.set(l*m,a*h,l*S,a*u);break;case"ZYZ":i.set(l*S,l*m,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xc={DEG2RAD:io,RAD2DEG:_o,generateUUID:bs,clamp:Xe,euclideanModulo:zu,mapLinear:Rv,inverseLerp:Cv,lerp:ro,damp:Iv,pingpong:Pv,smoothstep:Dv,smootherstep:Lv,randInt:Nv,randFloat:Uv,randFloatSpread:Ov,seededRandom:Fv,degToRad:Vv,radToDeg:kv,isPowerOfTwo:Bv,ceilPowerOfTwo:zv,floorPowerOfTwo:Hv,setQuaternionFromProperEuler:Gv,normalize:cn,denormalize:Qr};class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,r,s,o,a,l,u){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,u)}set(t,e,n,r,s,o,a,l,u){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],d=n[7],f=n[2],m=n[5],S=n[8],M=r[0],_=r[3],g=r[6],R=r[1],b=r[4],L=r[7],V=r[2],N=r[5],T=r[8];return s[0]=o*M+a*R+l*V,s[3]=o*_+a*b+l*N,s[6]=o*g+a*L+l*T,s[1]=u*M+h*R+d*V,s[4]=u*_+h*b+d*N,s[7]=u*g+h*L+d*T,s[2]=f*M+m*R+S*V,s[5]=f*_+m*b+S*N,s[8]=f*g+m*L+S*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8];return e*o*h-e*a*u-n*s*h+n*a*l+r*s*u-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8],d=h*o-a*u,f=a*l-h*s,m=u*s-o*l,S=e*d+n*f+r*m;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return t[0]=d*M,t[1]=(r*u-h*n)*M,t[2]=(a*n-r*o)*M,t[3]=f*M,t[4]=(h*e-r*l)*M,t[5]=(r*s-a*e)*M,t[6]=m*M,t[7]=(n*l-u*e)*M,t[8]=(o*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(qc.makeScale(t,e)),this}rotate(t){return this.premultiply(qc.makeRotation(-t)),this}translate(t,e){return this.premultiply(qc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qc=new jt;function Yp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ka(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wv(){const i=Ka("canvas");return i.style.display="block",i}const md={};function Jp(i){i in md||(md[i]=!0,console.warn(i))}function Xv(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const gd=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_d=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qo={[Qi]:{transfer:Xa,primaries:qa,toReference:i=>i,fromReference:i=>i},[An]:{transfer:ye,primaries:qa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ec]:{transfer:Xa,primaries:$a,toReference:i=>i.applyMatrix3(_d),fromReference:i=>i.applyMatrix3(gd)},[Bu]:{transfer:ye,primaries:$a,toReference:i=>i.convertSRGBToLinear().applyMatrix3(_d),fromReference:i=>i.applyMatrix3(gd).convertLinearToSRGB()}},qv=new Set([Qi,Ec]),he={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!qv.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Qo[t].toReference,r=Qo[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Qo[i].primaries},getTransfer:function(i){return i===Di?Xa:Qo[i].transfer}};function ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $c(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Or;class $v{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Or===void 0&&(Or=Ka("canvas")),Or.width=t.width,Or.height=t.height;const n=Or.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Or}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ka("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ss(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ss(e[n]/255)*255):e[n]=ss(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jv=0;class Qp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=bs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(jc(r[o].image)):s.push(jc(r[o]))}else s=jc(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$v.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kv=0;class hn extends ws{constructor(t=hn.DEFAULT_IMAGE,e=hn.DEFAULT_MAPPING,n=mr,r=mr,s=Ln,o=gr,a=Vn,l=pi,u=hn.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=bs(),this.name="",this.source=new Qp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fl:t.x=t.x-Math.floor(t.x);break;case mr:t.x=t.x<0?0:1;break;case Vl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fl:t.y=t.y-Math.floor(t.y);break;case mr:t.y=t.y<0?0:1;break;case Vl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Fp;hn.DEFAULT_ANISOTROPY=1;class Ve{constructor(t=0,e=0,n=0,r=1){Ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,u=l[0],h=l[4],d=l[8],f=l[1],m=l[5],S=l[9],M=l[2],_=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-M)<.01&&Math.abs(S-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+M)<.1&&Math.abs(S+_)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(u+1)/2,L=(m+1)/2,V=(g+1)/2,N=(h+f)/4,T=(d+M)/4,x=(S+_)/4;return b>L&&b>V?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=N/n,s=T/n):L>V?L<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(L),n=N/r,s=x/r):V<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(V),n=T/s,r=x/s),this.set(n,r,s,e),this}let R=Math.sqrt((_-S)*(_-S)+(d-M)*(d-M)+(f-h)*(f-h));return Math.abs(R)<.001&&(R=1),this.x=(_-S)/R,this.y=(d-M)/R,this.z=(f-h)/R,this.w=Math.acos((u+m+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yv extends ws{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new hn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Qp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends Yv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zp extends hn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jv extends hn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rs{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],u=n[r+1],h=n[r+2],d=n[r+3];const f=s[o+0],m=s[o+1],S=s[o+2],M=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=S,t[e+3]=M;return}if(d!==M||l!==f||u!==m||h!==S){let _=1-a;const g=l*f+u*m+h*S+d*M,R=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const V=Math.sqrt(b),N=Math.atan2(V,g*R);_=Math.sin(_*N)/V,a=Math.sin(a*N)/V}const L=a*R;if(l=l*_+f*L,u=u*_+m*L,h=h*_+S*L,d=d*_+M*L,_===1-a){const V=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=V,u*=V,h*=V,d*=V}}t[e]=l,t[e+1]=u,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],u=n[r+2],h=n[r+3],d=s[o],f=s[o+1],m=s[o+2],S=s[o+3];return t[e]=a*S+h*d+l*m-u*f,t[e+1]=l*S+h*f+u*d-a*m,t[e+2]=u*S+h*m+a*f-l*d,t[e+3]=h*S-a*d-l*f-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(r/2),d=a(s/2),f=l(n/2),m=l(r/2),S=l(s/2);switch(o){case"XYZ":this._x=f*h*d+u*m*S,this._y=u*m*d-f*h*S,this._z=u*h*S+f*m*d,this._w=u*h*d-f*m*S;break;case"YXZ":this._x=f*h*d+u*m*S,this._y=u*m*d-f*h*S,this._z=u*h*S-f*m*d,this._w=u*h*d+f*m*S;break;case"ZXY":this._x=f*h*d-u*m*S,this._y=u*m*d+f*h*S,this._z=u*h*S+f*m*d,this._w=u*h*d-f*m*S;break;case"ZYX":this._x=f*h*d-u*m*S,this._y=u*m*d+f*h*S,this._z=u*h*S-f*m*d,this._w=u*h*d+f*m*S;break;case"YZX":this._x=f*h*d+u*m*S,this._y=u*m*d+f*h*S,this._z=u*h*S-f*m*d,this._w=u*h*d-f*m*S;break;case"XZY":this._x=f*h*d-u*m*S,this._y=u*m*d-f*h*S,this._z=u*h*S+f*m*d,this._w=u*h*d+f*m*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,h=e._w;return this._x=n*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-n*u,this._z=s*h+o*u+n*l-r*a,this._w=o*h-n*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),d=Math.sin((1-e)*h)/u,f=Math.sin(e*h)/u;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*n),h=2*(a*e-s*r),d=2*(s*n-o*e);return this.x=e+l*u+o*d-a*h,this.y=n+l*h+a*u-s*d,this.z=r+l*d+s*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kc.copy(this).projectOnVector(t),this.sub(Kc)}reflect(t){return this.sub(Kc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kc=new F,vd=new Rs;class bo{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(s,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zo.copy(n.boundingBox)),Zo.applyMatrix4(t.matrixWorld),this.union(Zo)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),ta.subVectors(this.max,js),Fr.subVectors(t.a,js),Vr.subVectors(t.b,js),kr.subVectors(t.c,js),Ai.subVectors(Vr,Fr),wi.subVectors(kr,Vr),rr.subVectors(Fr,kr);let e=[0,-Ai.z,Ai.y,0,-wi.z,wi.y,0,-rr.z,rr.y,Ai.z,0,-Ai.x,wi.z,0,-wi.x,rr.z,0,-rr.x,-Ai.y,Ai.x,0,-wi.y,wi.x,0,-rr.y,rr.x,0];return!Yc(e,Fr,Vr,kr,ta)||(e=[1,0,0,0,1,0,0,0,1],!Yc(e,Fr,Vr,kr,ta))?!1:(ea.crossVectors(Ai,wi),e=[ea.x,ea.y,ea.z],Yc(e,Fr,Vr,kr,ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ni=[new F,new F,new F,new F,new F,new F,new F,new F],Rn=new F,Zo=new bo,Fr=new F,Vr=new F,kr=new F,Ai=new F,wi=new F,rr=new F,js=new F,ta=new F,ea=new F,sr=new F;function Yc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){sr.fromArray(i,s);const a=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=t.dot(sr),u=e.dot(sr),h=n.dot(sr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const Qv=new bo,Ks=new F,Jc=new F;class Sc{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qv.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);const e=Ks.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ks,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(Jc)),this.expandByPoint(Ks.copy(t.center).sub(Jc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new F,Qc=new F,na=new F,bi=new F,Zc=new F,ia=new F,tl=new F;class Hu{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Qc.copy(t).add(e).multiplyScalar(.5),na.copy(e).sub(t).normalize(),bi.copy(this.origin).sub(Qc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(na),a=bi.dot(this.direction),l=-bi.dot(na),u=bi.lengthSq(),h=Math.abs(1-o*o);let d,f,m,S;if(h>0)if(d=o*l-a,f=o*a-l,S=s*h,d>=0)if(f>=-S)if(f<=S){const M=1/h;d*=M,f*=M,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;else f<=-S?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+u):f<=S?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Qc).addScaledVector(na,f),m}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),r=ii.dot(ii)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,r=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,r=(t.min.x-f.x)*u),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,r,s){Zc.subVectors(e,t),ia.subVectors(n,t),tl.crossVectors(Zc,ia);let o=this.direction.dot(tl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,t);const l=a*this.direction.dot(ia.crossVectors(bi,ia));if(l<0)return null;const u=a*this.direction.dot(Zc.cross(bi));if(u<0||l+u>o)return null;const h=-a*bi.dot(tl);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(t,e,n,r,s,o,a,l,u,h,d,f,m,S,M,_){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,u,h,d,f,m,S,M,_)}set(t,e,n,r,s,o,a,l,u,h,d,f,m,S,M,_){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=h,g[10]=d,g[14]=f,g[3]=m,g[7]=S,g[11]=M,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Br.setFromMatrixColumn(t,0).length(),s=1/Br.setFromMatrixColumn(t,1).length(),o=1/Br.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=o*h,m=o*d,S=a*h,M=a*d;e[0]=l*h,e[4]=-l*d,e[8]=u,e[1]=m+S*u,e[5]=f-M*u,e[9]=-a*l,e[2]=M-f*u,e[6]=S+m*u,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*d,S=u*h,M=u*d;e[0]=f+M*a,e[4]=S*a-m,e[8]=o*u,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-S,e[6]=M+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*d,S=u*h,M=u*d;e[0]=f-M*a,e[4]=-o*d,e[8]=S+m*a,e[1]=m+S*a,e[5]=o*h,e[9]=M-f*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*d,S=a*h,M=a*d;e[0]=l*h,e[4]=S*u-m,e[8]=f*u+M,e[1]=l*d,e[5]=M*u+f,e[9]=m*u-S,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*u,S=a*l,M=a*u;e[0]=l*h,e[4]=M-f*d,e[8]=S*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-u*h,e[6]=m*d+S,e[10]=f-M*d}else if(t.order==="XZY"){const f=o*l,m=o*u,S=a*l,M=a*u;e[0]=l*h,e[4]=-d,e[8]=u*h,e[1]=f*d+M,e[5]=o*h,e[9]=m*d-S,e[2]=S*d-m,e[6]=a*h,e[10]=M*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zv,t,ty)}lookAt(t,e,n){const r=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ri.crossVectors(n,yn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ri.crossVectors(n,yn)),Ri.normalize(),ra.crossVectors(yn,Ri),r[0]=Ri.x,r[4]=ra.x,r[8]=yn.x,r[1]=Ri.y,r[5]=ra.y,r[9]=yn.y,r[2]=Ri.z,r[6]=ra.z,r[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],d=n[5],f=n[9],m=n[13],S=n[2],M=n[6],_=n[10],g=n[14],R=n[3],b=n[7],L=n[11],V=n[15],N=r[0],T=r[4],x=r[8],v=r[12],y=r[1],A=r[5],I=r[9],w=r[13],B=r[2],W=r[6],X=r[10],J=r[14],j=r[3],ht=r[7],gt=r[11],At=r[15];return s[0]=o*N+a*y+l*B+u*j,s[4]=o*T+a*A+l*W+u*ht,s[8]=o*x+a*I+l*X+u*gt,s[12]=o*v+a*w+l*J+u*At,s[1]=h*N+d*y+f*B+m*j,s[5]=h*T+d*A+f*W+m*ht,s[9]=h*x+d*I+f*X+m*gt,s[13]=h*v+d*w+f*J+m*At,s[2]=S*N+M*y+_*B+g*j,s[6]=S*T+M*A+_*W+g*ht,s[10]=S*x+M*I+_*X+g*gt,s[14]=S*v+M*w+_*J+g*At,s[3]=R*N+b*y+L*B+V*j,s[7]=R*T+b*A+L*W+V*ht,s[11]=R*x+b*I+L*X+V*gt,s[15]=R*v+b*w+L*J+V*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],h=t[2],d=t[6],f=t[10],m=t[14],S=t[3],M=t[7],_=t[11],g=t[15];return S*(+s*l*d-r*u*d-s*a*f+n*u*f+r*a*m-n*l*m)+M*(+e*l*m-e*u*f+s*o*f-r*o*m+r*u*h-s*l*h)+_*(+e*u*d-e*a*m-s*o*d+n*o*m+s*a*h-n*u*h)+g*(-r*a*h-e*l*d+e*a*f+r*o*d-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8],d=t[9],f=t[10],m=t[11],S=t[12],M=t[13],_=t[14],g=t[15],R=d*_*u-M*f*u+M*l*m-a*_*m-d*l*g+a*f*g,b=S*f*u-h*_*u-S*l*m+o*_*m+h*l*g-o*f*g,L=h*M*u-S*d*u+S*a*m-o*M*m-h*a*g+o*d*g,V=S*d*l-h*M*l-S*a*f+o*M*f+h*a*_-o*d*_,N=e*R+n*b+r*L+s*V;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/N;return t[0]=R*T,t[1]=(M*f*s-d*_*s-M*r*m+n*_*m+d*r*g-n*f*g)*T,t[2]=(a*_*s-M*l*s+M*r*u-n*_*u-a*r*g+n*l*g)*T,t[3]=(d*l*s-a*f*s-d*r*u+n*f*u+a*r*m-n*l*m)*T,t[4]=b*T,t[5]=(h*_*s-S*f*s+S*r*m-e*_*m-h*r*g+e*f*g)*T,t[6]=(S*l*s-o*_*s-S*r*u+e*_*u+o*r*g-e*l*g)*T,t[7]=(o*f*s-h*l*s+h*r*u-e*f*u-o*r*m+e*l*m)*T,t[8]=L*T,t[9]=(S*d*s-h*M*s-S*n*m+e*M*m+h*n*g-e*d*g)*T,t[10]=(o*M*s-S*a*s+S*n*u-e*M*u-o*n*g+e*a*g)*T,t[11]=(h*a*s-o*d*s-h*n*u+e*d*u+o*n*m-e*a*m)*T,t[12]=V*T,t[13]=(h*M*r-S*d*r+S*n*f-e*M*f-h*n*_+e*d*_)*T,t[14]=(S*a*r-o*M*r-S*n*l+e*M*l+o*n*_-e*a*_)*T,t[15]=(o*d*r-h*a*r+h*n*l-e*d*l-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,u=s*o,h=s*a;return this.set(u*o+n,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+n,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,h=o+o,d=a+a,f=s*u,m=s*h,S=s*d,M=o*h,_=o*d,g=a*d,R=l*u,b=l*h,L=l*d,V=n.x,N=n.y,T=n.z;return r[0]=(1-(M+g))*V,r[1]=(m+L)*V,r[2]=(S-b)*V,r[3]=0,r[4]=(m-L)*N,r[5]=(1-(f+g))*N,r[6]=(_+R)*N,r[7]=0,r[8]=(S+b)*T,r[9]=(_-R)*T,r[10]=(1-(f+M))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Br.set(r[0],r[1],r[2]).length();const o=Br.set(r[4],r[5],r[6]).length(),a=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Cn.copy(this);const u=1/s,h=1/o,d=1/a;return Cn.elements[0]*=u,Cn.elements[1]*=u,Cn.elements[2]*=u,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,e.setFromRotationMatrix(Cn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=li){const l=this.elements,u=2*s/(e-t),h=2*s/(n-r),d=(e+t)/(e-t),f=(n+r)/(n-r);let m,S;if(a===li)m=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===ja)m=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=li){const l=this.elements,u=1/(e-t),h=1/(n-r),d=1/(o-s),f=(e+t)*u,m=(n+r)*h;let S,M;if(a===li)S=(o+s)*d,M=-2*d;else if(a===ja)S=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Br=new F,Cn=new Ee,Zv=new F(0,0,0),ty=new F(1,1,1),Ri=new F,ra=new F,yn=new F,yd=new Ee,Ed=new Rs;class Jn{constructor(t=0,e=0,n=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ed.setFromEuler(this),this.setFromQuaternion(Ed,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Gu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ey=0;const Sd=new F,zr=new Rs,ri=new Ee,sa=new F,Ys=new F,ny=new F,iy=new Rs,xd=new F(1,0,0),Td=new F(0,1,0),Md=new F(0,0,1),Ad={type:"added"},ry={type:"removed"},Hr={type:"childadded",child:null},el={type:"childremoved",child:null};class $e extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new F,e=new Jn,n=new Rs,r=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ee},normalMatrix:{value:new jt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis(xd,t)}rotateY(t){return this.rotateOnAxis(Td,t)}rotateZ(t){return this.rotateOnAxis(Md,t)}translateOnAxis(t,e){return Sd.copy(t).applyQuaternion(this.quaternion),this.position.add(Sd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xd,t)}translateY(t){return this.translateOnAxis(Td,t)}translateZ(t){return this.translateOnAxis(Md,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sa.copy(t):sa.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Ys,sa,this.up):ri.lookAt(sa,Ys,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(ri),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ad),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ry),el.child=t,this.dispatchEvent(el),el.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ad),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,ny),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,iy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),S=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),S.length>0&&(n.nodes=S)}return n.object=r,n;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}$e.DEFAULT_UP=new F(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new F,si=new F,nl=new F,oi=new F,Gr=new F,Wr=new F,wd=new F,il=new F,rl=new F,sl=new F;class qn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),In.subVectors(t,e),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){In.subVectors(r,e),si.subVectors(n,e),nl.subVectors(t,e);const o=In.dot(In),a=In.dot(si),l=In.dot(nl),u=si.dot(si),h=si.dot(nl),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(u*l-a*h)*f,S=(o*h-a*l)*f;return s.set(1-m-S,S,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static isFrontFacing(t,e,n,r){return In.subVectors(n,e),si.subVectors(t,e),In.cross(si).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),si.subVectors(this.a,this.b),In.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return qn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Gr.subVectors(r,n),Wr.subVectors(s,n),il.subVectors(t,n);const l=Gr.dot(il),u=Wr.dot(il);if(l<=0&&u<=0)return e.copy(n);rl.subVectors(t,r);const h=Gr.dot(rl),d=Wr.dot(rl);if(h>=0&&d<=h)return e.copy(r);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Gr,o);sl.subVectors(t,s);const m=Gr.dot(sl),S=Wr.dot(sl);if(S>=0&&m<=S)return e.copy(s);const M=m*u-l*S;if(M<=0&&u>=0&&S<=0)return a=u/(u-S),e.copy(n).addScaledVector(Wr,a);const _=h*S-m*d;if(_<=0&&d-h>=0&&m-S>=0)return wd.subVectors(s,r),a=(d-h)/(d-h+(m-S)),e.copy(r).addScaledVector(wd,a);const g=1/(_+M+f);return o=M*g,a=f*g,e.copy(n).addScaledVector(Gr,o).addScaledVector(Wr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},oa={h:0,s:0,l:0};function ol(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ne{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=he.workingColorSpace){if(t=zu(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ol(o,s,t+1/3),this.g=ol(o,s,t),this.b=ol(o,s,t-1/3)}return he.toWorkingColorSpace(this,r),this}setStyle(t,e=An){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){const n=tm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}copyLinearToSRGB(t){return this.r=$c(t.r),this.g=$c(t.g),this.b=$c(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return he.fromWorkingColorSpace(en.copy(this),t),Math.round(Xe(en.r*255,0,255))*65536+Math.round(Xe(en.g*255,0,255))*256+Math.round(Xe(en.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(en.copy(this),e);const n=en.r,r=en.g,s=en.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=u,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=An){he.fromWorkingColorSpace(en.copy(this),t);const e=en.r,n=en.g,r=en.b;return t!==An?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(oa);const n=ro(Ci.h,oa.h,e),r=ro(Ci.s,oa.s,e),s=ro(Ci.l,oa.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new ne;ne.NAMES=tm;let sy=0;class Cs extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=is,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Nl,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ll&&(n.blendSrc=this.blendSrc),this.blendDst!==Nl&&(n.blendDst=this.blendDst),this.blendEquation!==fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Is extends Cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new F,aa=new Tt;class $n{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Jp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)aa.fromBufferAttribute(this,e),aa.applyMatrix3(t),this.setXY(e,aa.x,aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qr(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qr(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qr(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dd&&(t.usage=this.usage),t}}class em extends $n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nm extends $n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends $n{constructor(t,e,n){super(new Float32Array(t),e,n)}}let oy=0;const Mn=new Ee,al=new $e,Xr=new F,En=new bo,Js=new bo,Ge=new F;class dn extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yp(t)?nm:em)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return al.lookAt(t),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _e(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(En.min,Js.min),En.expandByPoint(Ge),Ge.addVectors(En.max,Js.max),En.expandByPoint(Ge)):(En.expandByPoint(Js.min),En.expandByPoint(Js.max))}En.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ge.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ge));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Ge.fromBufferAttribute(a,u),l&&(Xr.fromBufferAttribute(t,u),Ge.add(Xr)),r=Math.max(r,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new F,l[x]=new F;const u=new F,h=new F,d=new F,f=new Tt,m=new Tt,S=new Tt,M=new F,_=new F;function g(x,v,y){u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,v),d.fromBufferAttribute(n,y),f.fromBufferAttribute(s,x),m.fromBufferAttribute(s,v),S.fromBufferAttribute(s,y),h.sub(u),d.sub(u),m.sub(f),S.sub(f);const A=1/(m.x*S.y-S.x*m.y);isFinite(A)&&(M.copy(h).multiplyScalar(S.y).addScaledVector(d,-m.y).multiplyScalar(A),_.copy(d).multiplyScalar(m.x).addScaledVector(h,-S.x).multiplyScalar(A),a[x].add(M),a[v].add(M),a[y].add(M),l[x].add(_),l[v].add(_),l[y].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let x=0,v=R.length;x<v;++x){const y=R[x],A=y.start,I=y.count;for(let w=A,B=A+I;w<B;w+=3)g(t.getX(w+0),t.getX(w+1),t.getX(w+2))}const b=new F,L=new F,V=new F,N=new F;function T(x){V.fromBufferAttribute(r,x),N.copy(V);const v=a[x];b.copy(v),b.sub(V.multiplyScalar(V.dot(v))).normalize(),L.crossVectors(N,v);const A=L.dot(l[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,A)}for(let x=0,v=R.length;x<v;++x){const y=R[x],A=y.start,I=y.count;for(let w=A,B=A+I;w<B;w+=3)T(t.getX(w+0)),T(t.getX(w+1)),T(t.getX(w+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,h=new F,d=new F;if(t)for(let f=0,m=t.count;f<m;f+=3){const S=t.getX(f+0),M=t.getX(f+1),_=t.getX(f+2);r.fromBufferAttribute(e,S),s.fromBufferAttribute(e,M),o.fromBufferAttribute(e,_),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,S),l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,_),a.add(h),l.add(h),u.add(h),n.setXYZ(S,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){const u=a.array,h=a.itemSize,d=a.normalized,f=new u.constructor(l.length*h);let m=0,S=0;for(let M=0,_=l.length;M<_;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*h;for(let g=0;g<h;g++)f[S++]=u[m++]}return new $n(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new dn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,n);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,d=u.length;h<d;h++){const f=u[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const m=u[d];h.push(m.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(e))}const s=t.morphAttributes;for(const u in s){const h=[],d=s[u];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bd=new Ee,or=new Hu,ca=new Sc,Rd=new F,qr=new F,$r=new F,jr=new F,cl=new F,la=new F,ua=new Tt,ha=new Tt,da=new Tt,Cd=new F,Id=new F,Pd=new F,fa=new F,pa=new F;class we extends $e{constructor(t=new dn,e=new Is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){la.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],d=s[l];h!==0&&(cl.fromBufferAttribute(d,t),o?la.addScaledVector(cl,h):la.addScaledVector(cl.sub(e),h))}e.add(la)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(s),or.copy(t.ray).recast(t.near),!(ca.containsPoint(or.origin)===!1&&(or.intersectSphere(ca,Rd)===null||or.origin.distanceToSquared(Rd)>(t.far-t.near)**2))&&(bd.copy(s).invert(),or.copy(t.ray).applyMatrix4(bd),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,or)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,M=f.length;S<M;S++){const _=f[S],g=o[_.materialIndex],R=Math.max(_.start,m.start),b=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let L=R,V=b;L<V;L+=3){const N=a.getX(L),T=a.getX(L+1),x=a.getX(L+2);r=ma(this,g,t,n,u,h,d,N,T,x),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const S=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let _=S,g=M;_<g;_+=3){const R=a.getX(_),b=a.getX(_+1),L=a.getX(_+2);r=ma(this,o,t,n,u,h,d,R,b,L),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let S=0,M=f.length;S<M;S++){const _=f[S],g=o[_.materialIndex],R=Math.max(_.start,m.start),b=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let L=R,V=b;L<V;L+=3){const N=L,T=L+1,x=L+2;r=ma(this,g,t,n,u,h,d,N,T,x),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const S=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let _=S,g=M;_<g;_+=3){const R=_,b=_+1,L=_+2;r=ma(this,o,t,n,u,h,d,R,b,L),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}}function ay(i,t,e,n,r,s,o,a){let l;if(t.side===pn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Wi,a),l===null)return null;pa.copy(a),pa.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(pa);return u<e.near||u>e.far?null:{distance:u,point:pa.clone(),object:i}}function ma(i,t,e,n,r,s,o,a,l,u){i.getVertexPosition(a,qr),i.getVertexPosition(l,$r),i.getVertexPosition(u,jr);const h=ay(i,t,e,n,qr,$r,jr,fa);if(h){r&&(ua.fromBufferAttribute(r,a),ha.fromBufferAttribute(r,l),da.fromBufferAttribute(r,u),h.uv=qn.getInterpolation(fa,qr,$r,jr,ua,ha,da,new Tt)),s&&(ua.fromBufferAttribute(s,a),ha.fromBufferAttribute(s,l),da.fromBufferAttribute(s,u),h.uv1=qn.getInterpolation(fa,qr,$r,jr,ua,ha,da,new Tt)),o&&(Cd.fromBufferAttribute(o,a),Id.fromBufferAttribute(o,l),Pd.fromBufferAttribute(o,u),h.normal=qn.getInterpolation(fa,qr,$r,jr,Cd,Id,Pd,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new F,materialIndex:0};qn.getNormal(qr,$r,jr,d.normal),h.face=d}return h}class Xi extends dn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],d=[];let f=0,m=0;S("z","y","x",-1,-1,n,e,t,o,s,0),S("z","y","x",1,-1,n,e,-t,o,s,1),S("x","z","y",1,1,t,n,e,r,o,2),S("x","z","y",1,-1,t,n,-e,r,o,3),S("x","y","z",1,-1,t,e,n,r,s,4),S("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(d,2));function S(M,_,g,R,b,L,V,N,T,x,v){const y=L/T,A=V/x,I=L/2,w=V/2,B=N/2,W=T+1,X=x+1;let J=0,j=0;const ht=new F;for(let gt=0;gt<X;gt++){const At=gt*A-w;for(let Zt=0;Zt<W;Zt++){const ce=Zt*y-I;ht[M]=ce*R,ht[_]=At*b,ht[g]=B,u.push(ht.x,ht.y,ht.z),ht[M]=0,ht[_]=0,ht[g]=N>0?1:-1,h.push(ht.x,ht.y,ht.z),d.push(Zt/T),d.push(1-gt/x),J+=1}}for(let gt=0;gt<x;gt++)for(let At=0;At<T;At++){const Zt=f+At+W*gt,ce=f+At+W*(gt+1),Q=f+(At+1)+W*(gt+1),at=f+(At+1)+W*gt;l.push(Zt,ce,at),l.push(ce,Q,at),j+=6}a.addGroup(m,j,v),m+=j,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _s(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ln(i){const t={};for(let e=0;e<i.length;e++){const n=_s(i[e]);for(const r in n)t[r]=n[r]}return t}function cy(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function im(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const ly={clone:_s,merge:ln};var uy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uy,this.fragmentShader=hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=cy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rm extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new F,Dd=new Tt,Ld=new Tt;class wn extends rm{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_o*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,Dd,Ld),e.subVectors(Ld,Dd)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(io*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/u,r*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Kr=-90,Yr=1;class dy extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(Kr,Yr,t,e);r.layers=this.layers,this.add(r);const s=new wn(Kr,Yr,t,e);s.layers=this.layers,this.add(s);const o=new wn(Kr,Yr,t,e);o.layers=this.layers,this.add(o);const a=new wn(Kr,Yr,t,e);a.layers=this.layers,this.add(a);const l=new wn(Kr,Yr,t,e);l.layers=this.layers,this.add(l);const u=new wn(Kr,Yr,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class sm extends hn{constructor(t,e,n,r,s,o,a,l,u,h){t=t!==void 0?t:[],e=e!==void 0?e:fs,super(t,e,n,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fy extends Sr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new sm(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xi(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Fi});s.uniforms.tEquirect.value=e;const o=new we(r,s),a=e.minFilter;return e.minFilter===gr&&(e.minFilter=Ln),new dy(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const ll=new F,py=new F,my=new jt;class ur{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ll.subVectors(n,e).cross(py.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ll),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||my.getNormalMatrix(t),r=this.coplanarPoint(ll).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Sc,ga=new F;class Wu{constructor(t=new ur,e=new ur,n=new ur,r=new ur,s=new ur,o=new ur){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],S=r[9],M=r[10],_=r[11],g=r[12],R=r[13],b=r[14],L=r[15];if(n[0].setComponents(l-s,f-u,_-m,L-g).normalize(),n[1].setComponents(l+s,f+u,_+m,L+g).normalize(),n[2].setComponents(l+o,f+h,_+S,L+R).normalize(),n[3].setComponents(l-o,f-h,_-S,L-R).normalize(),n[4].setComponents(l-a,f-d,_-M,L-b).normalize(),e===li)n[5].setComponents(l+a,f+d,_+M,L+b).normalize();else if(e===ja)n[5].setComponents(a,d,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(t){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ga.x=r.normal.x>0?t.max.x:t.min.x,ga.y=r.normal.y>0?t.max.y:t.min.y,ga.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ga)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function om(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function gy(i){const t=new WeakMap;function e(a,l){const u=a.array,h=a.usage,d=u.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,u,h),a.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,u){const h=l.array,d=l._updateRange,f=l.updateRanges;if(i.bindBuffer(u,a),d.count===-1&&f.length===0&&i.bufferSubData(u,0,h),f.length!==0){for(let m=0,S=f.length;m<S;m++){const M=f[m];i.bufferSubData(u,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class yi extends dn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),u=a+1,h=l+1,d=t/a,f=e/l,m=[],S=[],M=[],_=[];for(let g=0;g<h;g++){const R=g*f-o;for(let b=0;b<u;b++){const L=b*d-s;S.push(L,-R,0),M.push(0,0,1),_.push(b/a),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let R=0;R<a;R++){const b=R+u*g,L=R+u*(g+1),V=R+1+u*(g+1),N=R+1+u*g;m.push(b,L,N),m.push(L,V,N)}this.setIndex(m),this.setAttribute("position",new _e(S,3)),this.setAttribute("normal",new _e(M,3)),this.setAttribute("uv",new _e(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.widthSegments,t.heightSegments)}}var _y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ty=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,My=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ay=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,by=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ry=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Iy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Py=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,By=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$y="gl_FragColor = linearToOutputTexel( gl_FragColor );",jy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ky=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,s0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,l0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,m0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,g0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,L0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_E=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ME=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:_y,alphahash_pars_fragment:vy,alphamap_fragment:yy,alphamap_pars_fragment:Ey,alphatest_fragment:Sy,alphatest_pars_fragment:xy,aomap_fragment:Ty,aomap_pars_fragment:My,batching_pars_vertex:Ay,batching_vertex:wy,begin_vertex:by,beginnormal_vertex:Ry,bsdfs:Cy,iridescence_fragment:Iy,bumpmap_pars_fragment:Py,clipping_planes_fragment:Dy,clipping_planes_pars_fragment:Ly,clipping_planes_pars_vertex:Ny,clipping_planes_vertex:Uy,color_fragment:Oy,color_pars_fragment:Fy,color_pars_vertex:Vy,color_vertex:ky,common:By,cube_uv_reflection_fragment:zy,defaultnormal_vertex:Hy,displacementmap_pars_vertex:Gy,displacementmap_vertex:Wy,emissivemap_fragment:Xy,emissivemap_pars_fragment:qy,colorspace_fragment:$y,colorspace_pars_fragment:jy,envmap_fragment:Ky,envmap_common_pars_fragment:Yy,envmap_pars_fragment:Jy,envmap_pars_vertex:Qy,envmap_physical_pars_fragment:l0,envmap_vertex:Zy,fog_vertex:t0,fog_pars_vertex:e0,fog_fragment:n0,fog_pars_fragment:i0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:s0,lights_lambert_fragment:o0,lights_lambert_pars_fragment:a0,lights_pars_begin:c0,lights_toon_fragment:u0,lights_toon_pars_fragment:h0,lights_phong_fragment:d0,lights_phong_pars_fragment:f0,lights_physical_fragment:p0,lights_physical_pars_fragment:m0,lights_fragment_begin:g0,lights_fragment_maps:_0,lights_fragment_end:v0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:E0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:x0,map_fragment:T0,map_pars_fragment:M0,map_particle_fragment:A0,map_particle_pars_fragment:w0,metalnessmap_fragment:b0,metalnessmap_pars_fragment:R0,morphinstance_vertex:C0,morphcolor_vertex:I0,morphnormal_vertex:P0,morphtarget_pars_vertex:D0,morphtarget_vertex:L0,normal_fragment_begin:N0,normal_fragment_maps:U0,normal_pars_fragment:O0,normal_pars_vertex:F0,normal_vertex:V0,normalmap_pars_fragment:k0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:z0,clearcoat_pars_fragment:H0,iridescence_pars_fragment:G0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:q0,project_vertex:$0,dithering_fragment:j0,dithering_pars_fragment:K0,roughnessmap_fragment:Y0,roughnessmap_pars_fragment:J0,shadowmap_pars_fragment:Q0,shadowmap_pars_vertex:Z0,shadowmap_vertex:tE,shadowmask_pars_fragment:eE,skinbase_vertex:nE,skinning_pars_vertex:iE,skinning_vertex:rE,skinnormal_vertex:sE,specularmap_fragment:oE,specularmap_pars_fragment:aE,tonemapping_fragment:cE,tonemapping_pars_fragment:lE,transmission_fragment:uE,transmission_pars_fragment:hE,uv_pars_fragment:dE,uv_pars_vertex:fE,uv_vertex:pE,worldpos_vertex:mE,background_vert:gE,background_frag:_E,backgroundCube_vert:vE,backgroundCube_frag:yE,cube_vert:EE,cube_frag:SE,depth_vert:xE,depth_frag:TE,distanceRGBA_vert:ME,distanceRGBA_frag:AE,equirect_vert:wE,equirect_frag:bE,linedashed_vert:RE,linedashed_frag:CE,meshbasic_vert:IE,meshbasic_frag:PE,meshlambert_vert:DE,meshlambert_frag:LE,meshmatcap_vert:NE,meshmatcap_frag:UE,meshnormal_vert:OE,meshnormal_frag:FE,meshphong_vert:VE,meshphong_frag:kE,meshphysical_vert:BE,meshphysical_frag:zE,meshtoon_vert:HE,meshtoon_frag:GE,points_vert:WE,points_frag:XE,shadow_vert:qE,shadow_frag:$E,sprite_vert:jE,sprite_frag:KE},mt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Xn={basic:{uniforms:ln([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:ln([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ne(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:ln([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:ln([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:ln([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new ne(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:ln([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:ln([mt.points,mt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:ln([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:ln([mt.common,mt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:ln([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:ln([mt.sprite,mt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:ln([mt.common,mt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:ln([mt.lights,mt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Xn.physical={uniforms:ln([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const _a={r:0,b:0,g:0},cr=new Jn,YE=new Ee;function JE(i,t,e,n,r,s,o){const a=new ne(0);let l=s===!0?0:1,u,h,d=null,f=0,m=null;function S(R){let b=R.isScene===!0?R.background:null;return b&&b.isTexture&&(b=(R.backgroundBlurriness>0?e:t).get(b)),b}function M(R){let b=!1;const L=S(R);L===null?g(a,l):L&&L.isColor&&(g(L,1),b=!0);const V=i.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,o):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(R,b){const L=S(b);L&&(L.isCubeTexture||L.mapping===yc)?(h===void 0&&(h=new we(new Xi(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:_s(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,N,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),cr.copy(b.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(YE.makeRotationFromEuler(cr)),h.material.toneMapped=he.getTransfer(L.colorSpace)!==ye,(d!==L||f!==L.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=L,f=L.version,m=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(u===void 0&&(u=new we(new yi(2,2),new qi({name:"BackgroundMaterial",uniforms:_s(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=L,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=he.getTransfer(L.colorSpace)!==ye,L.matrixAutoUpdate===!0&&L.updateMatrix(),u.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||f!==L.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=L,f=L.version,m=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null))}function g(R,b){R.getRGB(_a,im(i)),n.buffers.color.setClear(_a.r,_a.g,_a.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(R,b=1){a.set(R),l=b,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,g(a,l)},render:M,addToRenderList:_}}function QE(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(y,A,I,w,B){let W=!1;const X=d(w,I,A);s!==X&&(s=X,u(s.object)),W=m(y,w,I,B),W&&S(y,w,I,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,L(y,A,I,w),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function u(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,A,I){const w=I.wireframe===!0;let B=n[y.id];B===void 0&&(B={},n[y.id]=B);let W=B[A.id];W===void 0&&(W={},B[A.id]=W);let X=W[w];return X===void 0&&(X=f(l()),W[w]=X),X}function f(y){const A=[],I=[],w=[];for(let B=0;B<e;B++)A[B]=0,I[B]=0,w[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:w,object:y,attributes:{},index:null}}function m(y,A,I,w){const B=s.attributes,W=A.attributes;let X=0;const J=I.getAttributes();for(const j in J)if(J[j].location>=0){const gt=B[j];let At=W[j];if(At===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(At=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(At=y.instanceColor)),gt===void 0||gt.attribute!==At||At&&gt.data!==At.data)return!0;X++}return s.attributesNum!==X||s.index!==w}function S(y,A,I,w){const B={},W=A.attributes;let X=0;const J=I.getAttributes();for(const j in J)if(J[j].location>=0){let gt=W[j];gt===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor));const At={};At.attribute=gt,gt&&gt.data&&(At.data=gt.data),B[j]=At,X++}s.attributes=B,s.attributesNum=X,s.index=w}function M(){const y=s.newAttributes;for(let A=0,I=y.length;A<I;A++)y[A]=0}function _(y){g(y,0)}function g(y,A){const I=s.newAttributes,w=s.enabledAttributes,B=s.attributeDivisors;I[y]=1,w[y]===0&&(i.enableVertexAttribArray(y),w[y]=1),B[y]!==A&&(i.vertexAttribDivisor(y,A),B[y]=A)}function R(){const y=s.newAttributes,A=s.enabledAttributes;for(let I=0,w=A.length;I<w;I++)A[I]!==y[I]&&(i.disableVertexAttribArray(I),A[I]=0)}function b(y,A,I,w,B,W,X){X===!0?i.vertexAttribIPointer(y,A,I,B,W):i.vertexAttribPointer(y,A,I,w,B,W)}function L(y,A,I,w){M();const B=w.attributes,W=I.getAttributes(),X=A.defaultAttributeValues;for(const J in W){const j=W[J];if(j.location>=0){let ht=B[J];if(ht===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){const gt=ht.normalized,At=ht.itemSize,Zt=t.get(ht);if(Zt===void 0)continue;const ce=Zt.buffer,Q=Zt.type,at=Zt.bytesPerElement,xt=Q===i.INT||Q===i.UNSIGNED_INT||ht.gpuType===Nu;if(ht.isInterleavedBufferAttribute){const vt=ht.data,Ht=vt.stride,Wt=ht.offset;if(vt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<j.locationSize;Qt++)g(j.location+Qt,vt.meshPerAttribute);y.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Qt=0;Qt<j.locationSize;Qt++)_(j.location+Qt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let Qt=0;Qt<j.locationSize;Qt++)b(j.location+Qt,At/j.locationSize,Q,gt,Ht*at,(Wt+At/j.locationSize*Qt)*at,xt)}else{if(ht.isInstancedBufferAttribute){for(let vt=0;vt<j.locationSize;vt++)g(j.location+vt,ht.meshPerAttribute);y.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let vt=0;vt<j.locationSize;vt++)_(j.location+vt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let vt=0;vt<j.locationSize;vt++)b(j.location+vt,At/j.locationSize,Q,gt,At*at,At/j.locationSize*vt*at,xt)}}else if(X!==void 0){const gt=X[J];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(j.location,gt);break;case 3:i.vertexAttrib3fv(j.location,gt);break;case 4:i.vertexAttrib4fv(j.location,gt);break;default:i.vertexAttrib1fv(j.location,gt)}}}}R()}function V(){x();for(const y in n){const A=n[y];for(const I in A){const w=A[I];for(const B in w)h(w[B].object),delete w[B];delete A[I]}delete n[y]}}function N(y){if(n[y.id]===void 0)return;const A=n[y.id];for(const I in A){const w=A[I];for(const B in w)h(w[B].object),delete w[B];delete A[I]}delete n[y.id]}function T(y){for(const A in n){const I=n[A];if(I[y.id]===void 0)continue;const w=I[y.id];for(const B in w)h(w[B].object),delete w[B];delete I[y.id]}}function x(){v(),o=!0,s!==r&&(s=r,u(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:x,resetDefaultState:v,dispose:V,releaseStatesOfGeometry:N,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:_,disableUnusedAttributes:R}}function ZE(i,t,e){let n;function r(u){n=u}function s(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,d){d!==0&&(i.drawArraysInstanced(n,u,h,d),e.update(h,n,d))}function a(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,d);let m=0;for(let S=0;S<d;S++)m+=h[S];e.update(m,n,1)}function l(u,h,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let S=0;S<u.length;S++)o(u[S],h[S],f[S]);else{m.multiDrawArraysInstancedWEBGL(n,u,0,h,0,f,0,d);let S=0;for(let M=0;M<d;M++)S+=h[M];for(let M=0;M<f.length;M++)e.update(S,n,f[M])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tS(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(N){return!(N!==Vn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const T=N===wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==pi&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ci&&!T)}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,V=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:S,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:g,maxVaryings:R,maxFragmentUniforms:b,vertexTextures:L,maxSamples:V}}function eS(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new ur,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){const S=d.clippingPlanes,M=d.clipIntersection,_=d.clipShadows,g=i.get(d);if(!r||S===null||S.length===0||s&&!_)s?h(null):u();else{const R=s?0:n,b=R*4;let L=g.clippingState||null;l.value=L,L=h(S,f,b,m);for(let V=0;V!==b;++V)L[V]=e[V];g.clippingState=L,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,S){const M=d!==null?d.length:0;let _=null;if(M!==0){if(_=l.value,S!==!0||_===null){const g=m+M*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(_===null||_.length<g)&&(_=new Float32Array(g));for(let b=0,L=m;b!==M;++b,L+=4)o.copy(d[b]).applyMatrix4(R,a),o.normal.toArray(_,L),_[L+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,_}}function nS(i){let t=new WeakMap;function e(o,a){return a===Ul?o.mapping=fs:a===Ol&&(o.mapping=ps),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ul||a===Ol)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new fy(l.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class am extends rm{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const es=4,Nd=[.125,.215,.35,.446,.526,.582],pr=20,ul=new am,Ud=new ne;let hl=null,dl=0,fl=0,pl=!1;const hr=(1+Math.sqrt(5))/2,Jr=1/hr,Od=[new F(-hr,Jr,0),new F(hr,Jr,0),new F(-Jr,0,hr),new F(Jr,0,hr),new F(0,hr,-Jr),new F(0,hr,Jr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Fd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){hl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hl,dl,fl),this._renderer.xr.enabled=pl,t.scissorTest=!1,va(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:wo,format:Vn,colorSpace:Qi,depthBuffer:!1},r=Vd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vd(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iS(s)),this._blurMaterial=rS(s,t,e)}return r}_compileMaterial(t){const e=new we(this._lodPlanes[0],t);this._renderer.compile(e,ul)}_sceneToCubeUV(t,e,n,r){const a=new wn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ud),h.toneMapping=Vi,h.autoClear=!1;const m=new Is({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),S=new we(new Xi,m);let M=!1;const _=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,M=!0):(m.color.copy(Ud),M=!0);for(let g=0;g<6;g++){const R=g%3;R===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):R===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const b=this._cubeSize;va(r,R*b,g>2?b:0,b,b),h.setRenderTarget(r),M&&h.render(S,a),h.render(t,a)}S.geometry.dispose(),S.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===fs||t.mapping===ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;va(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ul)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Od[(r-s-1)%Od.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new we(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*pr-1),M=s/S,_=isFinite(s)?1+Math.floor(h*M):pr;_>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${pr}`);const g=[];let R=0;for(let T=0;T<pr;++T){const x=T/M,v=Math.exp(-x*x/2);g.push(v),T===0?R+=v:T<_&&(R+=2*v)}for(let T=0;T<g.length;T++)g[T]=g[T]/R;f.envMap.value=t.texture,f.samples.value=_,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=S,f.mipInt.value=b-n;const L=this._sizeLods[r],V=3*L*(r>b-es?r-b+es:0),N=4*(this._cubeSize-L);va(e,V,N,3*L,2*L),l.setRenderTarget(e),l.render(d,ul)}}function iS(i){const t=[],e=[],n=[];let r=i;const s=i-es+1+Nd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-es?l=Nd[o-i+es-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,S=6,M=3,_=2,g=1,R=new Float32Array(M*S*m),b=new Float32Array(_*S*m),L=new Float32Array(g*S*m);for(let N=0;N<m;N++){const T=N%3*2/3-1,x=N>2?0:-1,v=[T,x,0,T+2/3,x,0,T+2/3,x+1,0,T,x,0,T+2/3,x+1,0,T,x+1,0];R.set(v,M*S*N),b.set(f,_*S*N);const y=[N,N,N,N,N,N];L.set(y,g*S*N)}const V=new dn;V.setAttribute("position",new $n(R,M)),V.setAttribute("uv",new $n(b,_)),V.setAttribute("faceIndex",new $n(L,g)),t.push(V),r>es&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vd(i,t,e){const n=new Sr(i,t,e);return n.texture.mapping=yc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function rS(i,t,e){const n=new Float32Array(pr),r=new F(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function kd(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Bd(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sS(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ul||l===Ol,h=l===fs||l===ps;if(u||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Fd(i)),d=u?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return u&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new Fd(i)),d=u?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function oS(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Jp("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function aS(i,t,e,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const S in f.attributes)t.remove(f.attributes[S]);for(const S in f.morphAttributes){const M=f.morphAttributes[S];for(let _=0,g=M.length;_<g;_++)t.remove(M[_])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const S in f)t.update(f[S],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const S in m){const M=m[S];for(let _=0,g=M.length;_<g;_++)t.update(M[_],i.ARRAY_BUFFER)}}function u(d){const f=[],m=d.index,S=d.attributes.position;let M=0;if(m!==null){const R=m.array;M=m.version;for(let b=0,L=R.length;b<L;b+=3){const V=R[b+0],N=R[b+1],T=R[b+2];f.push(V,N,N,T,T,V)}}else if(S!==void 0){const R=S.array;M=S.version;for(let b=0,L=R.length/3-1;b<L;b+=3){const V=b+0,N=b+1,T=b+2;f.push(V,N,N,T,T,V)}}else return;const _=new(Yp(f)?nm:em)(f,1);_.version=M;const g=s.get(d);g&&t.remove(g),s.set(d,_)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function cS(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){i.drawElements(n,m,s,f*o),e.update(m,n,1)}function u(f,m,S){S!==0&&(i.drawElementsInstanced(n,m,s,f*o,S),e.update(m,n,S))}function h(f,m,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,S);let _=0;for(let g=0;g<S;g++)_+=m[g];e.update(_,n,1)}function d(f,m,S,M){if(S===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<f.length;g++)u(f[g]/o,m[g],M[g]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,M,0,S);let g=0;for(let R=0;R<S;R++)g+=m[R];for(let R=0;R<M.length;R++)e.update(g,n,M[R])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function lS(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function uS(i,t,e){const n=new WeakMap,r=new Ve;function s(o,a,l){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let y=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const S=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let L=0;S===!0&&(L=1),M===!0&&(L=2),_===!0&&(L=3);let V=a.attributes.position.count*L,N=1;V>t.maxTextureSize&&(N=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const T=new Float32Array(V*N*4*d),x=new Zp(T,V,N,d);x.type=ci,x.needsUpdate=!0;const v=L*4;for(let A=0;A<d;A++){const I=g[A],w=R[A],B=b[A],W=V*N*4*A;for(let X=0;X<I.count;X++){const J=X*v;S===!0&&(r.fromBufferAttribute(I,X),T[W+J+0]=r.x,T[W+J+1]=r.y,T[W+J+2]=r.z,T[W+J+3]=0),M===!0&&(r.fromBufferAttribute(w,X),T[W+J+4]=r.x,T[W+J+5]=r.y,T[W+J+6]=r.z,T[W+J+7]=0),_===!0&&(r.fromBufferAttribute(B,X),T[W+J+8]=r.x,T[W+J+9]=r.y,T[W+J+10]=r.z,T[W+J+11]=B.itemSize===4?r.w:1)}}f={count:d,texture:x,size:new Tt(V,N)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let S=0;for(let _=0;_<u.length;_++)S+=u[_];const M=a.morphTargetsRelative?1:1-S;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function hS(i,t,e,n){let r=new WeakMap;function s(l){const u=n.render.frame,h=l.geometry,d=t.get(l,h);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}class cm extends hn{constructor(t,e,n,r,s,o,a,l,u,h=rs){if(h!==rs&&h!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===rs&&(n=Er),n===void 0&&h===gs&&(n=ms),super(null,r,s,o,a,l,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const lm=new hn,zd=new cm(1,1),um=new Zp,hm=new Jv,dm=new sm,Hd=[],Gd=[],Wd=new Float32Array(16),Xd=new Float32Array(9),qd=new Float32Array(4);function Ps(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Hd[r];if(s===void 0&&(s=new Float32Array(r),Hd[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xc(i,t){let e=Gd[t];e===void 0&&(e=new Int32Array(t),Gd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function pS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function mS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function gS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;qd.set(n),i.uniformMatrix2fv(this.addr,!1,qd),Be(e,n)}}function _S(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;Xd.set(n),i.uniformMatrix3fv(this.addr,!1,Xd),Be(e,n)}}function vS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;Wd.set(n),i.uniformMatrix4fv(this.addr,!1,Wd),Be(e,n)}}function yS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ES(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function SS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function xS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function TS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function MS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function AS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function wS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function bS(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(zd.compareFunction=Kp,s=zd):s=lm,e.setTexture2D(t||s,r)}function RS(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||hm,r)}function CS(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||dm,r)}function IS(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||um,r)}function PS(i){switch(i){case 5126:return dS;case 35664:return fS;case 35665:return pS;case 35666:return mS;case 35674:return gS;case 35675:return _S;case 35676:return vS;case 5124:case 35670:return yS;case 35667:case 35671:return ES;case 35668:case 35672:return SS;case 35669:case 35673:return xS;case 5125:return TS;case 36294:return MS;case 36295:return AS;case 36296:return wS;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return RS;case 35680:case 36300:case 36308:case 36293:return CS;case 36289:case 36303:case 36311:case 36292:return IS}}function DS(i,t){i.uniform1fv(this.addr,t)}function LS(i,t){const e=Ps(t,this.size,2);i.uniform2fv(this.addr,e)}function NS(i,t){const e=Ps(t,this.size,3);i.uniform3fv(this.addr,e)}function US(i,t){const e=Ps(t,this.size,4);i.uniform4fv(this.addr,e)}function OS(i,t){const e=Ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function FS(i,t){const e=Ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function VS(i,t){const e=Ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kS(i,t){i.uniform1iv(this.addr,t)}function BS(i,t){i.uniform2iv(this.addr,t)}function zS(i,t){i.uniform3iv(this.addr,t)}function HS(i,t){i.uniform4iv(this.addr,t)}function GS(i,t){i.uniform1uiv(this.addr,t)}function WS(i,t){i.uniform2uiv(this.addr,t)}function XS(i,t){i.uniform3uiv(this.addr,t)}function qS(i,t){i.uniform4uiv(this.addr,t)}function $S(i,t,e){const n=this.cache,r=t.length,s=xc(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||lm,s[o])}function jS(i,t,e){const n=this.cache,r=t.length,s=xc(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||hm,s[o])}function KS(i,t,e){const n=this.cache,r=t.length,s=xc(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||dm,s[o])}function YS(i,t,e){const n=this.cache,r=t.length,s=xc(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||um,s[o])}function JS(i){switch(i){case 5126:return DS;case 35664:return LS;case 35665:return NS;case 35666:return US;case 35674:return OS;case 35675:return FS;case 35676:return VS;case 5124:case 35670:return kS;case 35667:case 35671:return BS;case 35668:case 35672:return zS;case 35669:case 35673:return HS;case 5125:return GS;case 36294:return WS;case 36295:return XS;case 36296:return qS;case 35678:case 36198:case 36298:case 36306:case 35682:return $S;case 35679:case 36299:case 36307:return jS;case 35680:case 36300:case 36308:case 36293:return KS;case 36289:case 36303:case 36311:case 36292:return YS}}class QS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=PS(e.type)}}class ZS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=JS(e.type)}}class tx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function $d(i,t){i.seq.push(t),i.map[t.id]=t}function ex(i,t,e){const n=i.name,r=n.length;for(ml.lastIndex=0;;){const s=ml.exec(n),o=ml.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){$d(e,u===void 0?new QS(a,i,t):new ZS(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new tx(a),$d(e,d)),e=d}}}class Na{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);ex(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function jd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const nx=37297;let ix=0;function rx(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function sx(i){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(i);let n;switch(t===e?n="":t===$a&&e===qa?n="LinearDisplayP3ToLinearSRGB":t===qa&&e===$a&&(n="LinearSRGBToLinearDisplayP3"),i){case Qi:case Ec:return[n,"LinearTransferOETF"];case An:case Bu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Kd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+rx(i.getShaderSource(t),o)}else return r}function ox(i,t){const e=sx(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ax(i,t){let e;switch(t){case uv:e="Linear";break;case hv:e="Reinhard";break;case dv:e="OptimizedCineon";break;case fv:e="ACESFilmic";break;case mv:e="AgX";break;case gv:e="Neutral";break;case pv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function cx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function lx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ux(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function eo(i){return i!==""}function Yd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function hu(i){return i.replace(hx,fx)}const dx=new Map;function fx(i,t){let e=$t[t];if(e===void 0){const n=dx.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hu(e)}const px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(i){return i.replace(px,mx)}function mx(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Up?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===O_?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function _x(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fs:case ps:t="ENVMAP_TYPE_CUBE";break;case yc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ps:t="ENVMAP_MODE_REFRACTION";break}return t}function yx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Op:t="ENVMAP_BLENDING_MULTIPLY";break;case cv:t="ENVMAP_BLENDING_MIX";break;case lv:t="ENVMAP_BLENDING_ADD";break}return t}function Ex(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Sx(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=gx(e),u=_x(e),h=vx(e),d=yx(e),f=Ex(e),m=cx(e),S=lx(s),M=r.createProgram();let _,g,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(eo).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(eo).join(`
`),g.length>0&&(g+=`
`)):(_=[Zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),g=[Zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?$t.tonemapping_pars_fragment:"",e.toneMapping!==Vi?ax("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,ox("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(eo).join(`
`)),o=hu(o),o=Yd(o,e),o=Jd(o,e),a=hu(a),a=Yd(a,e),a=Jd(a,e),o=Qd(o),a=Qd(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",e.glslVersion===fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=R+_+o,L=R+g+a,V=jd(r,r.VERTEX_SHADER,b),N=jd(r,r.FRAGMENT_SHADER,L);r.attachShader(M,V),r.attachShader(M,N),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function T(A){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(M).trim(),w=r.getShaderInfoLog(V).trim(),B=r.getShaderInfoLog(N).trim();let W=!0,X=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,V,N);else{const J=Kd(r,V,"vertex"),j=Kd(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+J+`
`+j)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(w===""||B==="")&&(X=!1);X&&(A.diagnostics={runnable:W,programLog:I,vertexShader:{log:w,prefix:_},fragmentShader:{log:B,prefix:g}})}r.deleteShader(V),r.deleteShader(N),x=new Na(r,M),v=ux(r,M)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(M,nx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ix++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=V,this.fragmentShader=N,this}let xx=0;class Tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mx(t),e.set(t,n)),n}}class Mx{constructor(t){this.id=xx++,this.code=t,this.usedTimes=0}}function Ax(i,t,e,n,r,s,o){const a=new Gu,l=new Tx,u=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return u.add(v),v===0?"uv":`uv${v}`}function _(v,y,A,I,w){const B=I.fog,W=w.geometry,X=v.isMeshStandardMaterial?I.environment:null,J=(v.isMeshStandardMaterial?e:t).get(v.envMap||X),j=J&&J.mapping===yc?J.image.height:null,ht=S[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const gt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,At=gt!==void 0?gt.length:0;let Zt=0;W.morphAttributes.position!==void 0&&(Zt=1),W.morphAttributes.normal!==void 0&&(Zt=2),W.morphAttributes.color!==void 0&&(Zt=3);let ce,Q,at,xt;if(ht){const ae=Xn[ht];ce=ae.vertexShader,Q=ae.fragmentShader}else ce=v.vertexShader,Q=v.fragmentShader,l.update(v),at=l.getVertexShaderID(v),xt=l.getFragmentShaderID(v);const vt=i.getRenderTarget(),Ht=w.isInstancedMesh===!0,Wt=w.isBatchedMesh===!0,Qt=!!v.map,Se=!!v.matcap,O=!!J,xe=!!v.aoMap,oe=!!v.lightMap,le=!!v.bumpMap,Ct=!!v.normalMap,Te=!!v.displacementMap,kt=!!v.emissiveMap,bt=!!v.metalnessMap,U=!!v.roughnessMap,C=v.anisotropy>0,Y=v.clearcoat>0,it=v.dispersion>0,ot=v.iridescence>0,nt=v.sheen>0,Pt=v.transmission>0,ft=C&&!!v.anisotropyMap,yt=Y&&!!v.clearcoatMap,Gt=Y&&!!v.clearcoatNormalMap,ut=Y&&!!v.clearcoatRoughnessMap,Et=ot&&!!v.iridescenceMap,te=ot&&!!v.iridescenceThicknessMap,Lt=nt&&!!v.sheenColorMap,St=nt&&!!v.sheenRoughnessMap,Ft=!!v.specularMap,Bt=!!v.specularColorMap,fe=!!v.specularIntensityMap,k=Pt&&!!v.transmissionMap,ct=Pt&&!!v.thicknessMap,Z=!!v.gradientMap,tt=!!v.alphaMap,st=v.alphaTest>0,Nt=!!v.alphaHash,Kt=!!v.extensions;let pe=Vi;v.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(pe=i.toneMapping);const Ne={shaderID:ht,shaderType:v.type,shaderName:v.name,vertexShader:ce,fragmentShader:Q,defines:v.defines,customVertexShaderID:at,customFragmentShaderID:xt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Wt,batchingColor:Wt&&w._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&w.instanceColor!==null,instancingMorph:Ht&&w.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Qi,alphaToCoverage:!!v.alphaToCoverage,map:Qt,matcap:Se,envMap:O,envMapMode:O&&J.mapping,envMapCubeUVHeight:j,aoMap:xe,lightMap:oe,bumpMap:le,normalMap:Ct,displacementMap:f&&Te,emissiveMap:kt,normalMapObjectSpace:Ct&&v.normalMapType===Ev,normalMapTangentSpace:Ct&&v.normalMapType===jp,metalnessMap:bt,roughnessMap:U,anisotropy:C,anisotropyMap:ft,clearcoat:Y,clearcoatMap:yt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:ut,dispersion:it,iridescence:ot,iridescenceMap:Et,iridescenceThicknessMap:te,sheen:nt,sheenColorMap:Lt,sheenRoughnessMap:St,specularMap:Ft,specularColorMap:Bt,specularIntensityMap:fe,transmission:Pt,transmissionMap:k,thicknessMap:ct,gradientMap:Z,opaque:v.transparent===!1&&v.blending===is&&v.alphaToCoverage===!1,alphaMap:tt,alphaTest:st,alphaHash:Nt,combine:v.combine,mapUv:Qt&&M(v.map.channel),aoMapUv:xe&&M(v.aoMap.channel),lightMapUv:oe&&M(v.lightMap.channel),bumpMapUv:le&&M(v.bumpMap.channel),normalMapUv:Ct&&M(v.normalMap.channel),displacementMapUv:Te&&M(v.displacementMap.channel),emissiveMapUv:kt&&M(v.emissiveMap.channel),metalnessMapUv:bt&&M(v.metalnessMap.channel),roughnessMapUv:U&&M(v.roughnessMap.channel),anisotropyMapUv:ft&&M(v.anisotropyMap.channel),clearcoatMapUv:yt&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:te&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:St&&M(v.sheenRoughnessMap.channel),specularMapUv:Ft&&M(v.specularMap.channel),specularColorMapUv:Bt&&M(v.specularColorMap.channel),specularIntensityMapUv:fe&&M(v.specularIntensityMap.channel),transmissionMapUv:k&&M(v.transmissionMap.channel),thicknessMapUv:ct&&M(v.thicknessMap.channel),alphaMapUv:tt&&M(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ct||C),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!W.attributes.uv&&(Qt||tt),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:w.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Zt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Qt&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===ye,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Dn,flipSided:v.side===pn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Kt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&v.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ne.vertexUv1s=u.has(1),Ne.vertexUv2s=u.has(2),Ne.vertexUv3s=u.has(3),u.clear(),Ne}function g(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)y.push(A),y.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(R(y,v),b(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function R(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function b(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),v.push(a.mask)}function L(v){const y=S[v.type];let A;if(y){const I=Xn[y];A=ly.clone(I.uniforms)}else A=v.uniforms;return A}function V(v,y){let A;for(let I=0,w=h.length;I<w;I++){const B=h[I];if(B.cacheKey===y){A=B,++A.usedTimes;break}}return A===void 0&&(A=new Sx(i,y,v,s),h.push(A)),A}function N(v){if(--v.usedTimes===0){const y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),v.destroy()}}function T(v){l.remove(v)}function x(){l.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:L,acquireProgram:V,releaseProgram:N,releaseShaderCache:T,programs:h,dispose:x}}function wx(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function bx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function tf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ef(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d,f,m,S,M,_){let g=i[t];return g===void 0?(g={id:d.id,object:d,geometry:f,material:m,groupOrder:S,renderOrder:d.renderOrder,z:M,group:_},i[t]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=m,g.groupOrder=S,g.renderOrder=d.renderOrder,g.z=M,g.group=_),t++,g}function a(d,f,m,S,M,_){const g=o(d,f,m,S,M,_);m.transmission>0?n.push(g):m.transparent===!0?r.push(g):e.push(g)}function l(d,f,m,S,M,_){const g=o(d,f,m,S,M,_);m.transmission>0?n.unshift(g):m.transparent===!0?r.unshift(g):e.unshift(g)}function u(d,f){e.length>1&&e.sort(d||bx),n.length>1&&n.sort(f||tf),r.length>1&&r.sort(f||tf)}function h(){for(let d=t,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:u}}function Rx(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new ef,i.set(n,[o])):r>=s.length?(o=new ef,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new ne};break;case"SpotLight":e={position:new F,direction:new F,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Ix(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Px=0;function Dx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lx(i){const t=new Cx,e=Ix(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new F);const r=new F,s=new Ee,o=new Ee;function a(u){let h=0,d=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let m=0,S=0,M=0,_=0,g=0,R=0,b=0,L=0,V=0,N=0,T=0;u.sort(Dx);for(let v=0,y=u.length;v<y;v++){const A=u[v],I=A.color,w=A.intensity,B=A.distance,W=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=I.r*w,d+=I.g*w,f+=I.b*w;else if(A.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(A.sh.coefficients[X],w);T++}else if(A.isDirectionalLight){const X=t.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const J=A.shadow,j=e.get(A);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=A.shadow.matrix,R++}n.directional[m]=X,m++}else if(A.isSpotLight){const X=t.get(A);X.position.setFromMatrixPosition(A.matrixWorld),X.color.copy(I).multiplyScalar(w),X.distance=B,X.coneCos=Math.cos(A.angle),X.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),X.decay=A.decay,n.spot[M]=X;const J=A.shadow;if(A.map&&(n.spotLightMap[V]=A.map,V++,J.updateMatrices(A),A.castShadow&&N++),n.spotLightMatrix[M]=J.matrix,A.castShadow){const j=e.get(A);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=W,L++}M++}else if(A.isRectAreaLight){const X=t.get(A);X.color.copy(I).multiplyScalar(w),X.halfWidth.set(A.width*.5,0,0),X.halfHeight.set(0,A.height*.5,0),n.rectArea[_]=X,_++}else if(A.isPointLight){const X=t.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),X.distance=A.distance,X.decay=A.decay,A.castShadow){const J=A.shadow,j=e.get(A);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,n.pointShadow[S]=j,n.pointShadowMap[S]=W,n.pointShadowMatrix[S]=A.shadow.matrix,b++}n.point[S]=X,S++}else if(A.isHemisphereLight){const X=t.get(A);X.skyColor.copy(A.color).multiplyScalar(w),X.groundColor.copy(A.groundColor).multiplyScalar(w),n.hemi[g]=X,g++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const x=n.hash;(x.directionalLength!==m||x.pointLength!==S||x.spotLength!==M||x.rectAreaLength!==_||x.hemiLength!==g||x.numDirectionalShadows!==R||x.numPointShadows!==b||x.numSpotShadows!==L||x.numSpotMaps!==V||x.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=_,n.point.length=S,n.hemi.length=g,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=L+V-N,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=T,x.directionalLength=m,x.pointLength=S,x.spotLength=M,x.rectAreaLength=_,x.hemiLength=g,x.numDirectionalShadows=R,x.numPointShadows=b,x.numSpotShadows=L,x.numSpotMaps=V,x.numLightProbes=T,n.version=Px++)}function l(u,h){let d=0,f=0,m=0,S=0,M=0;const _=h.matrixWorldInverse;for(let g=0,R=u.length;g<R;g++){const b=u[g];if(b.isDirectionalLight){const L=n.directional[d];L.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(_),d++}else if(b.isSpotLight){const L=n.spot[m];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(_),L.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(_),m++}else if(b.isRectAreaLight){const L=n.rectArea[S];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(_),o.identity(),s.copy(b.matrixWorld),s.premultiply(_),o.extractRotation(s),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),S++}else if(b.isPointLight){const L=n.point[f];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(_),f++}else if(b.isHemisphereLight){const L=n.hemi[M];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(_),M++}}}return{setup:a,setupView:l,state:n}}function nf(i){const t=new Lx(i),e=[],n=[];function r(h){u.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Nx(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new nf(i),t.set(r,[a])):s>=o.length?(a=new nf(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ux extends Cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ox extends Cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kx(i,t,e){let n=new Wu;const r=new Tt,s=new Tt,o=new Ve,a=new Ux({depthPacking:yv}),l=new Ox,u={},h=e.maxTextureSize,d={[Wi]:pn,[pn]:Wi,[Dn]:Dn},f=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Fx,fragmentShader:Vx}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const S=new dn;S.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new we(S,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Up;let g=this.type;this.render=function(N,T,x){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||N.length===0)return;const v=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Fi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const w=g!==ai&&this.type===ai,B=g===ai&&this.type!==ai;for(let W=0,X=N.length;W<X;W++){const J=N[W],j=J.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ht=j.getFrameExtents();if(r.multiply(ht),s.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ht.x),r.x=s.x*ht.x,j.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ht.y),r.y=s.y*ht.y,j.mapSize.y=s.y)),j.map===null||w===!0||B===!0){const At=this.type!==ai?{minFilter:bn,magFilter:bn}:{};j.map!==null&&j.map.dispose(),j.map=new Sr(r.x,r.y,At),j.map.texture.name=J.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const gt=j.getViewportCount();for(let At=0;At<gt;At++){const Zt=j.getViewport(At);o.set(s.x*Zt.x,s.y*Zt.y,s.x*Zt.z,s.y*Zt.w),I.viewport(o),j.updateMatrices(J,At),n=j.getFrustum(),L(T,x,j.camera,J,this.type)}j.isPointLightShadow!==!0&&this.type===ai&&R(j,x),j.needsUpdate=!1}g=this.type,_.needsUpdate=!1,i.setRenderTarget(v,y,A)};function R(N,T){const x=t.update(M);f.defines.VSM_SAMPLES!==N.blurSamples&&(f.defines.VSM_SAMPLES=N.blurSamples,m.defines.VSM_SAMPLES=N.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Sr(r.x,r.y)),f.uniforms.shadow_pass.value=N.map.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(T,null,x,f,M,null),m.uniforms.shadow_pass.value=N.mapPass.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(T,null,x,m,M,null)}function b(N,T,x,v){let y=null;const A=x.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(A!==void 0)y=A;else if(y=x.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=y.uuid,w=T.uuid;let B=u[I];B===void 0&&(B={},u[I]=B);let W=B[w];W===void 0&&(W=y.clone(),B[w]=W,T.addEventListener("dispose",V)),y=W}if(y.visible=T.visible,y.wireframe=T.wireframe,v===ai?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,x.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=i.properties.get(y);I.light=x}return y}function L(N,T,x,v,y){if(N.visible===!1)return;if(N.layers.test(T.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&y===ai)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,N.matrixWorld);const w=t.update(N),B=N.material;if(Array.isArray(B)){const W=w.groups;for(let X=0,J=W.length;X<J;X++){const j=W[X],ht=B[j.materialIndex];if(ht&&ht.visible){const gt=b(N,ht,v,y);N.onBeforeShadow(i,N,T,x,w,gt,j),i.renderBufferDirect(x,null,w,gt,N,j),N.onAfterShadow(i,N,T,x,w,gt,j)}}}else if(B.visible){const W=b(N,B,v,y);N.onBeforeShadow(i,N,T,x,w,W,null),i.renderBufferDirect(x,null,w,W,N,null),N.onAfterShadow(i,N,T,x,w,W,null)}}const I=N.children;for(let w=0,B=I.length;w<B;w++)L(I[w],T,x,v,y)}function V(N){N.target.removeEventListener("dispose",V);for(const x in u){const v=u[x],y=N.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}function Bx(i){function t(){let k=!1;const ct=new Ve;let Z=null;const tt=new Ve(0,0,0,0);return{setMask:function(st){Z!==st&&!k&&(i.colorMask(st,st,st,st),Z=st)},setLocked:function(st){k=st},setClear:function(st,Nt,Kt,pe,Ne){Ne===!0&&(st*=pe,Nt*=pe,Kt*=pe),ct.set(st,Nt,Kt,pe),tt.equals(ct)===!1&&(i.clearColor(st,Nt,Kt,pe),tt.copy(ct))},reset:function(){k=!1,Z=null,tt.set(-1,0,0,0)}}}function e(){let k=!1,ct=null,Z=null,tt=null;return{setTest:function(st){st?xt(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(st){ct!==st&&!k&&(i.depthMask(st),ct=st)},setFunc:function(st){if(Z!==st){switch(st){case ev:i.depthFunc(i.NEVER);break;case nv:i.depthFunc(i.ALWAYS);break;case iv:i.depthFunc(i.LESS);break;case Wa:i.depthFunc(i.LEQUAL);break;case rv:i.depthFunc(i.EQUAL);break;case sv:i.depthFunc(i.GEQUAL);break;case ov:i.depthFunc(i.GREATER);break;case av:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=st}},setLocked:function(st){k=st},setClear:function(st){tt!==st&&(i.clearDepth(st),tt=st)},reset:function(){k=!1,ct=null,Z=null,tt=null}}}function n(){let k=!1,ct=null,Z=null,tt=null,st=null,Nt=null,Kt=null,pe=null,Ne=null;return{setTest:function(ae){k||(ae?xt(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(ae){ct!==ae&&!k&&(i.stencilMask(ae),ct=ae)},setFunc:function(ae,Qe,Sn){(Z!==ae||tt!==Qe||st!==Sn)&&(i.stencilFunc(ae,Qe,Sn),Z=ae,tt=Qe,st=Sn)},setOp:function(ae,Qe,Sn){(Nt!==ae||Kt!==Qe||pe!==Sn)&&(i.stencilOp(ae,Qe,Sn),Nt=ae,Kt=Qe,pe=Sn)},setLocked:function(ae){k=ae},setClear:function(ae){Ne!==ae&&(i.clearStencil(ae),Ne=ae)},reset:function(){k=!1,ct=null,Z=null,tt=null,st=null,Nt=null,Kt=null,pe=null,Ne=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,S=!1,M=null,_=null,g=null,R=null,b=null,L=null,V=null,N=new ne(0,0,0),T=0,x=!1,v=null,y=null,A=null,I=null,w=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=X>=1):J.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=X>=2);let j=null,ht={};const gt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),Zt=new Ve().fromArray(gt),ce=new Ve().fromArray(At);function Q(k,ct,Z,tt){const st=new Uint8Array(4),Nt=i.createTexture();i.bindTexture(k,Nt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<Z;Kt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(ct+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return Nt}const at={};at[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),s.setFunc(Wa),le(!1),Ct(ad),xt(i.CULL_FACE),xe(Fi);function xt(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function vt(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Ht(k,ct){return h[k]!==ct?(i.bindFramebuffer(k,ct),h[k]=ct,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ct),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Wt(k,ct){let Z=f,tt=!1;if(k){Z=d.get(ct),Z===void 0&&(Z=[],d.set(ct,Z));const st=k.textures;if(Z.length!==st.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Nt=0,Kt=st.length;Nt<Kt;Nt++)Z[Nt]=i.COLOR_ATTACHMENT0+Nt;Z.length=st.length,tt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,tt=!0);tt&&i.drawBuffers(Z)}function Qt(k){return m!==k?(i.useProgram(k),m=k,!0):!1}const Se={[fr]:i.FUNC_ADD,[V_]:i.FUNC_SUBTRACT,[k_]:i.FUNC_REVERSE_SUBTRACT};Se[B_]=i.MIN,Se[z_]=i.MAX;const O={[H_]:i.ZERO,[G_]:i.ONE,[W_]:i.SRC_COLOR,[Ll]:i.SRC_ALPHA,[Y_]:i.SRC_ALPHA_SATURATE,[j_]:i.DST_COLOR,[q_]:i.DST_ALPHA,[X_]:i.ONE_MINUS_SRC_COLOR,[Nl]:i.ONE_MINUS_SRC_ALPHA,[K_]:i.ONE_MINUS_DST_COLOR,[$_]:i.ONE_MINUS_DST_ALPHA,[J_]:i.CONSTANT_COLOR,[Q_]:i.ONE_MINUS_CONSTANT_COLOR,[Z_]:i.CONSTANT_ALPHA,[tv]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(k,ct,Z,tt,st,Nt,Kt,pe,Ne,ae){if(k===Fi){S===!0&&(vt(i.BLEND),S=!1);return}if(S===!1&&(xt(i.BLEND),S=!0),k!==F_){if(k!==M||ae!==x){if((_!==fr||b!==fr)&&(i.blendEquation(i.FUNC_ADD),_=fr,b=fr),ae)switch(k){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cd:i.blendFunc(i.ONE,i.ONE);break;case ld:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ud:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ld:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ud:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}g=null,R=null,L=null,V=null,N.set(0,0,0),T=0,M=k,x=ae}return}st=st||ct,Nt=Nt||Z,Kt=Kt||tt,(ct!==_||st!==b)&&(i.blendEquationSeparate(Se[ct],Se[st]),_=ct,b=st),(Z!==g||tt!==R||Nt!==L||Kt!==V)&&(i.blendFuncSeparate(O[Z],O[tt],O[Nt],O[Kt]),g=Z,R=tt,L=Nt,V=Kt),(pe.equals(N)===!1||Ne!==T)&&(i.blendColor(pe.r,pe.g,pe.b,Ne),N.copy(pe),T=Ne),M=k,x=!1}function oe(k,ct){k.side===Dn?vt(i.CULL_FACE):xt(i.CULL_FACE);let Z=k.side===pn;ct&&(Z=!Z),le(Z),k.blending===is&&k.transparent===!1?xe(Fi):xe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const tt=k.stencilWrite;o.setTest(tt),tt&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),kt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(k){v!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),v=k)}function Ct(k){k!==N_?(xt(i.CULL_FACE),k!==y&&(k===ad?i.cullFace(i.BACK):k===U_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),y=k}function Te(k){k!==A&&(W&&i.lineWidth(k),A=k)}function kt(k,ct,Z){k?(xt(i.POLYGON_OFFSET_FILL),(I!==ct||w!==Z)&&(i.polygonOffset(ct,Z),I=ct,w=Z)):vt(i.POLYGON_OFFSET_FILL)}function bt(k){k?xt(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function U(k){k===void 0&&(k=i.TEXTURE0+B-1),j!==k&&(i.activeTexture(k),j=k)}function C(k,ct,Z){Z===void 0&&(j===null?Z=i.TEXTURE0+B-1:Z=j);let tt=ht[Z];tt===void 0&&(tt={type:void 0,texture:void 0},ht[Z]=tt),(tt.type!==k||tt.texture!==ct)&&(j!==Z&&(i.activeTexture(Z),j=Z),i.bindTexture(k,ct||at[k]),tt.type=k,tt.texture=ct)}function Y(){const k=ht[j];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function it(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(k){Zt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Zt.copy(k))}function St(k){ce.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ce.copy(k))}function Ft(k,ct){let Z=l.get(ct);Z===void 0&&(Z=new WeakMap,l.set(ct,Z));let tt=Z.get(k);tt===void 0&&(tt=i.getUniformBlockIndex(ct,k.name),Z.set(k,tt))}function Bt(k,ct){const tt=l.get(ct).get(k);a.get(ct)!==tt&&(i.uniformBlockBinding(ct,tt,k.__bindingPointIndex),a.set(ct,tt))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,ht={},h={},d=new WeakMap,f=[],m=null,S=!1,M=null,_=null,g=null,R=null,b=null,L=null,V=null,N=new ne(0,0,0),T=0,x=!1,v=null,y=null,A=null,I=null,w=null,Zt.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:xt,disable:vt,bindFramebuffer:Ht,drawBuffers:Wt,useProgram:Qt,setBlending:xe,setMaterial:oe,setFlipSided:le,setCullFace:Ct,setLineWidth:Te,setPolygonOffset:kt,setScissorTest:bt,activeTexture:U,bindTexture:C,unbindTexture:Y,compressedTexImage2D:it,compressedTexImage3D:ot,texImage2D:Et,texImage3D:te,updateUBOMapping:Ft,uniformBlockBinding:Bt,texStorage2D:Gt,texStorage3D:ut,texSubImage2D:nt,texSubImage3D:Pt,compressedTexSubImage2D:ft,compressedTexSubImage3D:yt,scissor:Lt,viewport:St,reset:fe}}function rf(i,t,e,n){const r=zx(n);switch(e){case zp:return i*t;case Gp:return i*t;case Wp:return i*t*2;case Xp:return i*t/r.components*r.byteLength;case Fu:return i*t/r.components*r.byteLength;case qp:return i*t*2/r.components*r.byteLength;case Vu:return i*t*2/r.components*r.byteLength;case Hp:return i*t*3/r.components*r.byteLength;case Vn:return i*t*4/r.components*r.byteLength;case ku:return i*t*4/r.components*r.byteLength;case Ca:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pa:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:case Hl:return Math.max(i,16)*Math.max(t,8)/4;case kl:case zl:return Math.max(i,8)*Math.max(t,8)/2;case Gl:case Wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case jl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case tu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case eu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case nu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case iu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ru:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case su:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case La:case ou:case au:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $p:case cu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case lu:case uu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zx(i){switch(i){case pi:case Vp:return{byteLength:1,components:1};case go:case kp:case wo:return{byteLength:2,components:1};case Uu:case Ou:return{byteLength:2,components:4};case Er:case Nu:case ci:return{byteLength:4,components:1};case Bp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Hx(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Tt,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(U,C){return m?new OffscreenCanvas(U,C):Ka("canvas")}function M(U,C,Y){let it=1;const ot=bt(U);if((ot.width>Y||ot.height>Y)&&(it=Y/Math.max(ot.width,ot.height)),it<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const nt=Math.floor(it*ot.width),Pt=Math.floor(it*ot.height);d===void 0&&(d=S(nt,Pt));const ft=C?S(nt,Pt):d;return ft.width=nt,ft.height=Pt,ft.getContext("2d").drawImage(U,0,0,nt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+nt+"x"+Pt+")."),ft}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),U;return U}function _(U){return U.generateMipmaps&&U.minFilter!==bn&&U.minFilter!==Ln}function g(U){i.generateMipmap(U)}function R(U,C,Y,it,ot=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let nt=C;if(C===i.RED&&(Y===i.FLOAT&&(nt=i.R32F),Y===i.HALF_FLOAT&&(nt=i.R16F),Y===i.UNSIGNED_BYTE&&(nt=i.R8)),C===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(nt=i.R8UI),Y===i.UNSIGNED_SHORT&&(nt=i.R16UI),Y===i.UNSIGNED_INT&&(nt=i.R32UI),Y===i.BYTE&&(nt=i.R8I),Y===i.SHORT&&(nt=i.R16I),Y===i.INT&&(nt=i.R32I)),C===i.RG&&(Y===i.FLOAT&&(nt=i.RG32F),Y===i.HALF_FLOAT&&(nt=i.RG16F),Y===i.UNSIGNED_BYTE&&(nt=i.RG8)),C===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(nt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(nt=i.RG16UI),Y===i.UNSIGNED_INT&&(nt=i.RG32UI),Y===i.BYTE&&(nt=i.RG8I),Y===i.SHORT&&(nt=i.RG16I),Y===i.INT&&(nt=i.RG32I)),C===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),C===i.RGBA){const Pt=ot?Xa:he.getTransfer(it);Y===i.FLOAT&&(nt=i.RGBA32F),Y===i.HALF_FLOAT&&(nt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(nt=Pt===ye?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function b(U,C){let Y;return U?C===null||C===Er||C===ms?Y=i.DEPTH24_STENCIL8:C===ci?Y=i.DEPTH32F_STENCIL8:C===go&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Er||C===ms?Y=i.DEPTH_COMPONENT24:C===ci?Y=i.DEPTH_COMPONENT32F:C===go&&(Y=i.DEPTH_COMPONENT16),Y}function L(U,C){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==bn&&U.minFilter!==Ln?Math.log2(Math.max(C.width,C.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?C.mipmaps.length:1}function V(U){const C=U.target;C.removeEventListener("dispose",V),T(C),C.isVideoTexture&&h.delete(C)}function N(U){const C=U.target;C.removeEventListener("dispose",N),v(C)}function T(U){const C=n.get(U);if(C.__webglInit===void 0)return;const Y=U.source,it=f.get(Y);if(it){const ot=it[C.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&x(U),Object.keys(it).length===0&&f.delete(Y)}n.remove(U)}function x(U){const C=n.get(U);i.deleteTexture(C.__webglTexture);const Y=U.source,it=f.get(Y);delete it[C.__cacheKey],o.memory.textures--}function v(U){const C=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(C.__webglFramebuffer[it]))for(let ot=0;ot<C.__webglFramebuffer[it].length;ot++)i.deleteFramebuffer(C.__webglFramebuffer[it][ot]);else i.deleteFramebuffer(C.__webglFramebuffer[it]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[it])}else{if(Array.isArray(C.__webglFramebuffer))for(let it=0;it<C.__webglFramebuffer.length;it++)i.deleteFramebuffer(C.__webglFramebuffer[it]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let it=0;it<C.__webglColorRenderbuffer.length;it++)C.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[it]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Y=U.textures;for(let it=0,ot=Y.length;it<ot;it++){const nt=n.get(Y[it]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(Y[it])}n.remove(U)}let y=0;function A(){y=0}function I(){const U=y;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),y+=1,U}function w(U){const C=[];return C.push(U.wrapS),C.push(U.wrapT),C.push(U.wrapR||0),C.push(U.magFilter),C.push(U.minFilter),C.push(U.anisotropy),C.push(U.internalFormat),C.push(U.format),C.push(U.type),C.push(U.generateMipmaps),C.push(U.premultiplyAlpha),C.push(U.flipY),C.push(U.unpackAlignment),C.push(U.colorSpace),C.join()}function B(U,C){const Y=n.get(U);if(U.isVideoTexture&&Te(U),U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){const it=U.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(Y,U,C);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+C)}function W(U,C){const Y=n.get(U);if(U.version>0&&Y.__version!==U.version){ce(Y,U,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+C)}function X(U,C){const Y=n.get(U);if(U.version>0&&Y.__version!==U.version){ce(Y,U,C);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+C)}function J(U,C){const Y=n.get(U);if(U.version>0&&Y.__version!==U.version){Q(Y,U,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+C)}const j={[Fl]:i.REPEAT,[mr]:i.CLAMP_TO_EDGE,[Vl]:i.MIRRORED_REPEAT},ht={[bn]:i.NEAREST,[_v]:i.NEAREST_MIPMAP_NEAREST,[Jo]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[Wc]:i.LINEAR_MIPMAP_NEAREST,[gr]:i.LINEAR_MIPMAP_LINEAR},gt={[Sv]:i.NEVER,[bv]:i.ALWAYS,[xv]:i.LESS,[Kp]:i.LEQUAL,[Tv]:i.EQUAL,[wv]:i.GEQUAL,[Mv]:i.GREATER,[Av]:i.NOTEQUAL};function At(U,C){if(C.type===ci&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===Ln||C.magFilter===Wc||C.magFilter===Jo||C.magFilter===gr||C.minFilter===Ln||C.minFilter===Wc||C.minFilter===Jo||C.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,j[C.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,j[C.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,j[C.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,ht[C.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,ht[C.minFilter]),C.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,gt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===bn||C.minFilter!==Jo&&C.minFilter!==gr||C.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Zt(U,C){let Y=!1;U.__webglInit===void 0&&(U.__webglInit=!0,C.addEventListener("dispose",V));const it=C.source;let ot=f.get(it);ot===void 0&&(ot={},f.set(it,ot));const nt=w(C);if(nt!==U.__cacheKey){ot[nt]===void 0&&(ot[nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ot[nt].usedTimes++;const Pt=ot[U.__cacheKey];Pt!==void 0&&(ot[U.__cacheKey].usedTimes--,Pt.usedTimes===0&&x(C)),U.__cacheKey=nt,U.__webglTexture=ot[nt].texture}return Y}function ce(U,C,Y){let it=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(it=i.TEXTURE_3D);const ot=Zt(U,C),nt=C.source;e.bindTexture(it,U.__webglTexture,i.TEXTURE0+Y);const Pt=n.get(nt);if(nt.version!==Pt.__version||ot===!0){e.activeTexture(i.TEXTURE0+Y);const ft=he.getPrimaries(he.workingColorSpace),yt=C.colorSpace===Di?null:he.getPrimaries(C.colorSpace),Gt=C.colorSpace===Di||ft===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let ut=M(C.image,!1,r.maxTextureSize);ut=kt(C,ut);const Et=s.convert(C.format,C.colorSpace),te=s.convert(C.type);let Lt=R(C.internalFormat,Et,te,C.colorSpace,C.isVideoTexture);At(it,C);let St;const Ft=C.mipmaps,Bt=C.isVideoTexture!==!0,fe=Pt.__version===void 0||ot===!0,k=nt.dataReady,ct=L(C,ut);if(C.isDepthTexture)Lt=b(C.format===gs,C.type),fe&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Lt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Lt,ut.width,ut.height,0,Et,te,null));else if(C.isDataTexture)if(Ft.length>0){Bt&&fe&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,Ft[0].width,Ft[0].height);for(let Z=0,tt=Ft.length;Z<tt;Z++)St=Ft[Z],Bt?k&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,St.width,St.height,Et,te,St.data):e.texImage2D(i.TEXTURE_2D,Z,Lt,St.width,St.height,0,Et,te,St.data);C.generateMipmaps=!1}else Bt?(fe&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,ut.width,ut.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,Et,te,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,ut.width,ut.height,0,Et,te,ut.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Bt&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Lt,Ft[0].width,Ft[0].height,ut.depth);for(let Z=0,tt=Ft.length;Z<tt;Z++)if(St=Ft[Z],C.format!==Vn)if(Et!==null)if(Bt){if(k)if(C.layerUpdates.size>0){const st=rf(St.width,St.height,C.format,C.type);for(const Nt of C.layerUpdates){const Kt=St.data.subarray(Nt*st/St.data.BYTES_PER_ELEMENT,(Nt+1)*st/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Nt,St.width,St.height,1,Et,Kt,0,0)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,St.width,St.height,ut.depth,Et,St.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Lt,St.width,St.height,ut.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,St.width,St.height,ut.depth,Et,te,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Lt,St.width,St.height,ut.depth,0,Et,te,St.data)}else{Bt&&fe&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,Ft[0].width,Ft[0].height);for(let Z=0,tt=Ft.length;Z<tt;Z++)St=Ft[Z],C.format!==Vn?Et!==null?Bt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,St.width,St.height,Et,St.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Lt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?k&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,St.width,St.height,Et,te,St.data):e.texImage2D(i.TEXTURE_2D,Z,Lt,St.width,St.height,0,Et,te,St.data)}else if(C.isDataArrayTexture)if(Bt){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Lt,ut.width,ut.height,ut.depth),k)if(C.layerUpdates.size>0){const Z=rf(ut.width,ut.height,C.format,C.type);for(const tt of C.layerUpdates){const st=ut.data.subarray(tt*Z/ut.data.BYTES_PER_ELEMENT,(tt+1)*Z/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,ut.width,ut.height,1,Et,te,st)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Et,te,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,ut.width,ut.height,ut.depth,0,Et,te,ut.data);else if(C.isData3DTexture)Bt?(fe&&e.texStorage3D(i.TEXTURE_3D,ct,Lt,ut.width,ut.height,ut.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Et,te,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,ut.width,ut.height,ut.depth,0,Et,te,ut.data);else if(C.isFramebufferTexture){if(fe)if(Bt)e.texStorage2D(i.TEXTURE_2D,ct,Lt,ut.width,ut.height);else{let Z=ut.width,tt=ut.height;for(let st=0;st<ct;st++)e.texImage2D(i.TEXTURE_2D,st,Lt,Z,tt,0,Et,te,null),Z>>=1,tt>>=1}}else if(Ft.length>0){if(Bt&&fe){const Z=bt(Ft[0]);e.texStorage2D(i.TEXTURE_2D,ct,Lt,Z.width,Z.height)}for(let Z=0,tt=Ft.length;Z<tt;Z++)St=Ft[Z],Bt?k&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Et,te,St):e.texImage2D(i.TEXTURE_2D,Z,Lt,Et,te,St);C.generateMipmaps=!1}else if(Bt){if(fe){const Z=bt(ut);e.texStorage2D(i.TEXTURE_2D,ct,Lt,Z.width,Z.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,te,ut)}else e.texImage2D(i.TEXTURE_2D,0,Lt,Et,te,ut);_(C)&&g(it),Pt.__version=nt.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function Q(U,C,Y){if(C.image.length!==6)return;const it=Zt(U,C),ot=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+Y);const nt=n.get(ot);if(ot.version!==nt.__version||it===!0){e.activeTexture(i.TEXTURE0+Y);const Pt=he.getPrimaries(he.workingColorSpace),ft=C.colorSpace===Di?null:he.getPrimaries(C.colorSpace),yt=C.colorSpace===Di||Pt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Gt=C.isCompressedTexture||C.image[0].isCompressedTexture,ut=C.image[0]&&C.image[0].isDataTexture,Et=[];for(let tt=0;tt<6;tt++)!Gt&&!ut?Et[tt]=M(C.image[tt],!0,r.maxCubemapSize):Et[tt]=ut?C.image[tt].image:C.image[tt],Et[tt]=kt(C,Et[tt]);const te=Et[0],Lt=s.convert(C.format,C.colorSpace),St=s.convert(C.type),Ft=R(C.internalFormat,Lt,St,C.colorSpace),Bt=C.isVideoTexture!==!0,fe=nt.__version===void 0||it===!0,k=ot.dataReady;let ct=L(C,te);At(i.TEXTURE_CUBE_MAP,C);let Z;if(Gt){Bt&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ft,te.width,te.height);for(let tt=0;tt<6;tt++){Z=Et[tt].mipmaps;for(let st=0;st<Z.length;st++){const Nt=Z[st];C.format!==Vn?Lt!==null?Bt?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st,0,0,Nt.width,Nt.height,Lt,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st,Ft,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st,0,0,Nt.width,Nt.height,Lt,St,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st,Ft,Nt.width,Nt.height,0,Lt,St,Nt.data)}}}else{if(Z=C.mipmaps,Bt&&fe){Z.length>0&&ct++;const tt=bt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ft,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ut){Bt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Et[tt].width,Et[tt].height,Lt,St,Et[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ft,Et[tt].width,Et[tt].height,0,Lt,St,Et[tt].data);for(let st=0;st<Z.length;st++){const Kt=Z[st].image[tt].image;Bt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st+1,0,0,Kt.width,Kt.height,Lt,St,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st+1,Ft,Kt.width,Kt.height,0,Lt,St,Kt.data)}}else{Bt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt,St,Et[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ft,Lt,St,Et[tt]);for(let st=0;st<Z.length;st++){const Nt=Z[st];Bt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st+1,0,0,Lt,St,Nt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st+1,Ft,Lt,St,Nt.image[tt])}}}_(C)&&g(i.TEXTURE_CUBE_MAP),nt.__version=ot.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function at(U,C,Y,it,ot,nt){const Pt=s.convert(Y.format,Y.colorSpace),ft=s.convert(Y.type),yt=R(Y.internalFormat,Pt,ft,Y.colorSpace);if(!n.get(C).__hasExternalTextures){const ut=Math.max(1,C.width>>nt),Et=Math.max(1,C.height>>nt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,nt,yt,ut,Et,C.depth,0,Pt,ft,null):e.texImage2D(ot,nt,yt,ut,Et,0,Pt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Ct(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,ot,n.get(Y).__webglTexture,0,le(C)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,ot,n.get(Y).__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(U,C,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,U),C.depthBuffer){const it=C.depthTexture,ot=it&&it.isDepthTexture?it.type:null,nt=b(C.stencilBuffer,ot),Pt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=le(C);Ct(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,nt,C.width,C.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,nt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,nt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,U)}else{const it=C.textures;for(let ot=0;ot<it.length;ot++){const nt=it[ot],Pt=s.convert(nt.format,nt.colorSpace),ft=s.convert(nt.type),yt=R(nt.internalFormat,Pt,ft,nt.colorSpace),Gt=le(C);Y&&Ct(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,yt,C.width,C.height):Ct(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,yt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,yt,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(U,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),B(C.depthTexture,0);const it=n.get(C.depthTexture).__webglTexture,ot=le(C);if(C.depthTexture.format===rs)Ct(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(C.depthTexture.format===gs)Ct(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Ht(U){const C=n.get(U),Y=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!C.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");vt(C.__webglFramebuffer,U)}else if(Y){C.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[it]),C.__webglDepthbuffer[it]=i.createRenderbuffer(),xt(C.__webglDepthbuffer[it],U,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=i.createRenderbuffer(),xt(C.__webglDepthbuffer,U,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(U,C,Y){const it=n.get(U);C!==void 0&&at(it.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Ht(U)}function Qt(U){const C=U.texture,Y=n.get(U),it=n.get(C);U.addEventListener("dispose",N);const ot=U.textures,nt=U.isWebGLCubeRenderTarget===!0,Pt=ot.length>1;if(Pt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=C.version,o.memory.textures++),nt){Y.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(C.mipmaps&&C.mipmaps.length>0){Y.__webglFramebuffer[ft]=[];for(let yt=0;yt<C.mipmaps.length;yt++)Y.__webglFramebuffer[ft][yt]=i.createFramebuffer()}else Y.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ft=0;ft<C.mipmaps.length;ft++)Y.__webglFramebuffer[ft]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let ft=0,yt=ot.length;ft<yt;ft++){const Gt=n.get(ot[ft]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&Ct(U)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ft=0;ft<ot.length;ft++){const yt=ot[ft];Y.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ft]);const Gt=s.convert(yt.format,yt.colorSpace),ut=s.convert(yt.type),Et=R(yt.internalFormat,Gt,ut,yt.colorSpace,U.isXRRenderTarget===!0),te=le(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,Et,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(Y.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),At(i.TEXTURE_CUBE_MAP,C);for(let ft=0;ft<6;ft++)if(C.mipmaps&&C.mipmaps.length>0)for(let yt=0;yt<C.mipmaps.length;yt++)at(Y.__webglFramebuffer[ft][yt],U,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,yt);else at(Y.__webglFramebuffer[ft],U,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);_(C)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let ft=0,yt=ot.length;ft<yt;ft++){const Gt=ot[ft],ut=n.get(Gt);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),At(i.TEXTURE_2D,Gt),at(Y.__webglFramebuffer,U,Gt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),_(Gt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ft=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,it.__webglTexture),At(ft,C),C.mipmaps&&C.mipmaps.length>0)for(let yt=0;yt<C.mipmaps.length;yt++)at(Y.__webglFramebuffer[yt],U,C,i.COLOR_ATTACHMENT0,ft,yt);else at(Y.__webglFramebuffer,U,C,i.COLOR_ATTACHMENT0,ft,0);_(C)&&g(ft),e.unbindTexture()}U.depthBuffer&&Ht(U)}function Se(U){const C=U.textures;for(let Y=0,it=C.length;Y<it;Y++){const ot=C[Y];if(_(ot)){const nt=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pt=n.get(ot).__webglTexture;e.bindTexture(nt,Pt),g(nt),e.unbindTexture()}}}const O=[],xe=[];function oe(U){if(U.samples>0){if(Ct(U)===!1){const C=U.textures,Y=U.width,it=U.height;let ot=i.COLOR_BUFFER_BIT;const nt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(U),ft=C.length>1;if(ft)for(let yt=0;yt<C.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let yt=0;yt<C.length;yt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[yt]);const Gt=n.get(C[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,Y,it,0,0,Y,it,ot,i.NEAREST),l===!0&&(O.length=0,xe.length=0,O.push(i.COLOR_ATTACHMENT0+yt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(O.push(nt),xe.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,O))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let yt=0;yt<C.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[yt]);const Gt=n.get(C[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const C=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function le(U){return Math.min(r.maxSamples,U.samples)}function Ct(U){const C=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Te(U){const C=o.render.frame;h.get(U)!==C&&(h.set(U,C),U.update())}function kt(U,C){const Y=U.colorSpace,it=U.format,ot=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Y!==Qi&&Y!==Di&&(he.getTransfer(Y)===ye?(it!==Vn||ot!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),C}function bt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=A,this.setTexture2D=B,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=J,this.rebindTextures=Wt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Ct}function Gx(i,t){function e(n,r=Di){let s;const o=he.getTransfer(r);if(n===pi)return i.UNSIGNED_BYTE;if(n===Uu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ou)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vp)return i.BYTE;if(n===kp)return i.SHORT;if(n===go)return i.UNSIGNED_SHORT;if(n===Nu)return i.INT;if(n===Er)return i.UNSIGNED_INT;if(n===ci)return i.FLOAT;if(n===wo)return i.HALF_FLOAT;if(n===zp)return i.ALPHA;if(n===Hp)return i.RGB;if(n===Vn)return i.RGBA;if(n===Gp)return i.LUMINANCE;if(n===Wp)return i.LUMINANCE_ALPHA;if(n===rs)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===Xp)return i.RED;if(n===Fu)return i.RED_INTEGER;if(n===qp)return i.RG;if(n===Vu)return i.RG_INTEGER;if(n===ku)return i.RGBA_INTEGER;if(n===Ca||n===Ia||n===Pa||n===Da)if(o===ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ia)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kl||n===Bl||n===zl||n===Hl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gl||n===Wl||n===Xl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Gl||n===Wl)return o===ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ql||n===$l||n===jl||n===Kl||n===Yl||n===Jl||n===Ql||n===Zl||n===tu||n===eu||n===nu||n===iu||n===ru||n===su)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ql)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===iu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ru)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===su)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===ou||n===au)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===La)return o===ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ou)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===au)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$p||n===cu||n===lu||n===uu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===La)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Wx extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class un extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xx={type:"move"};class gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const M of t.hand.values()){const _=e.getJointPose(M,n),g=this._getHandJoint(u,M);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,S=.005;u.inputState.pinching&&f>m+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=m-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$x=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new hn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qi({vertexShader:qx,fragmentShader:$x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kx extends ws{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,d=null,f=null,m=null,S=null;const M=new jx,_=e.getContextAttributes();let g=null,R=null;const b=[],L=[],V=new Tt;let N=null;const T=new wn;T.layers.enable(1),T.viewport=new Ve;const x=new wn;x.layers.enable(2),x.viewport=new Ve;const v=[T,x],y=new Wx;y.layers.enable(1),y.layers.enable(2);let A=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let at=b[Q];return at===void 0&&(at=new gl,b[Q]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Q){let at=b[Q];return at===void 0&&(at=new gl,b[Q]=at),at.getGripSpace()},this.getHand=function(Q){let at=b[Q];return at===void 0&&(at=new gl,b[Q]=at),at.getHandSpace()};function w(Q){const at=L.indexOf(Q.inputSource);if(at===-1)return;const xt=b[at];xt!==void 0&&(xt.update(Q.inputSource,Q.frame,u||o),xt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function B(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",W);for(let Q=0;Q<b.length;Q++){const at=L[Q];at!==null&&(L[Q]=null,b[Q].disconnect(at))}A=null,I=null,M.reset(),t.setRenderTarget(g),m=null,f=null,d=null,r=null,R=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(g=t.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",B),r.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(V),r.renderState.layers===void 0){const at={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,at),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new Sr(m.framebufferWidth,m.framebufferHeight,{format:Vn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let at=null,xt=null,vt=null;_.depth&&(vt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=_.stencil?gs:rs,xt=_.stencil?ms:Er);const Ht={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};d=new XRWebGLBinding(r,e),f=d.createProjectionLayer(Ht),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),R=new Sr(f.textureWidth,f.textureHeight,{format:Vn,type:pi,depthTexture:new cm(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function W(Q){for(let at=0;at<Q.removed.length;at++){const xt=Q.removed[at],vt=L.indexOf(xt);vt>=0&&(L[vt]=null,b[vt].disconnect(xt))}for(let at=0;at<Q.added.length;at++){const xt=Q.added[at];let vt=L.indexOf(xt);if(vt===-1){for(let Wt=0;Wt<b.length;Wt++)if(Wt>=L.length){L.push(xt),vt=Wt;break}else if(L[Wt]===null){L[Wt]=xt,vt=Wt;break}if(vt===-1)break}const Ht=b[vt];Ht&&Ht.connect(xt)}}const X=new F,J=new F;function j(Q,at,xt){X.setFromMatrixPosition(at.matrixWorld),J.setFromMatrixPosition(xt.matrixWorld);const vt=X.distanceTo(J),Ht=at.projectionMatrix.elements,Wt=xt.projectionMatrix.elements,Qt=Ht[14]/(Ht[10]-1),Se=Ht[14]/(Ht[10]+1),O=(Ht[9]+1)/Ht[5],xe=(Ht[9]-1)/Ht[5],oe=(Ht[8]-1)/Ht[0],le=(Wt[8]+1)/Wt[0],Ct=Qt*oe,Te=Qt*le,kt=vt/(-oe+le),bt=kt*-oe;at.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(bt),Q.translateZ(kt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const U=Qt+kt,C=Se+kt,Y=Ct-bt,it=Te+(vt-bt),ot=O*Se/C*U,nt=xe*Se/C*U;Q.projectionMatrix.makePerspective(Y,it,ot,nt,U,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ht(Q,at){at===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(at.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;M.texture!==null&&(Q.near=M.depthNear,Q.far=M.depthFar),y.near=x.near=T.near=Q.near,y.far=x.far=T.far=Q.far,(A!==y.near||I!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,I=y.far,T.near=A,T.far=I,x.near=A,x.far=I,T.updateProjectionMatrix(),x.updateProjectionMatrix(),Q.updateProjectionMatrix());const at=Q.parent,xt=y.cameras;ht(y,at);for(let vt=0;vt<xt.length;vt++)ht(xt[vt],at);xt.length===2?j(y,T,x):y.projectionMatrix.copy(T.projectionMatrix),gt(Q,y,at)};function gt(Q,at,xt){xt===null?Q.matrix.copy(at.matrixWorld):(Q.matrix.copy(xt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(at.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(at.projectionMatrix),Q.projectionMatrixInverse.copy(at.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=_o*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let At=null;function Zt(Q,at){if(h=at.getViewerPose(u||o),S=at,h!==null){const xt=h.views;m!==null&&(t.setRenderTargetFramebuffer(R,m.framebuffer),t.setRenderTarget(R));let vt=!1;xt.length!==y.cameras.length&&(y.cameras.length=0,vt=!0);for(let Wt=0;Wt<xt.length;Wt++){const Qt=xt[Wt];let Se=null;if(m!==null)Se=m.getViewport(Qt);else{const xe=d.getViewSubImage(f,Qt);Se=xe.viewport,Wt===0&&(t.setRenderTargetTextures(R,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(R))}let O=v[Wt];O===void 0&&(O=new wn,O.layers.enable(Wt),O.viewport=new Ve,v[Wt]=O),O.matrix.fromArray(Qt.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(Qt.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Se.x,Se.y,Se.width,Se.height),Wt===0&&(y.matrix.copy(O.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),vt===!0&&y.cameras.push(O)}const Ht=r.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){const Wt=d.getDepthInformation(xt[0]);Wt&&Wt.isValid&&Wt.texture&&M.init(t,Wt,r.renderState)}}for(let xt=0;xt<b.length;xt++){const vt=L[xt],Ht=b[xt];vt!==null&&Ht!==void 0&&Ht.update(vt,at,u||o)}At&&At(Q,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),S=null}const ce=new om;ce.setAnimationLoop(Zt),this.setAnimationLoop=function(Q){At=Q},this.dispose=function(){}}}const lr=new Jn,Yx=new Ee;function Jx(i,t){function e(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function n(_,g){g.color.getRGB(_.fogColor.value,im(i)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function r(_,g,R,b,L){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(_,g):g.isMeshToonMaterial?(s(_,g),d(_,g)):g.isMeshPhongMaterial?(s(_,g),h(_,g)):g.isMeshStandardMaterial?(s(_,g),f(_,g),g.isMeshPhysicalMaterial&&m(_,g,L)):g.isMeshMatcapMaterial?(s(_,g),S(_,g)):g.isMeshDepthMaterial?s(_,g):g.isMeshDistanceMaterial?(s(_,g),M(_,g)):g.isMeshNormalMaterial?s(_,g):g.isLineBasicMaterial?(o(_,g),g.isLineDashedMaterial&&a(_,g)):g.isPointsMaterial?l(_,g,R,b):g.isSpriteMaterial?u(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,e(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===pn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,e(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===pn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,e(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,e(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const R=t.get(g),b=R.envMap,L=R.envMapRotation;b&&(_.envMap.value=b,lr.copy(L),lr.x*=-1,lr.y*=-1,lr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),_.envMapRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(lr)),_.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,_.aoMapTransform))}function o(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform))}function a(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function l(_,g,R,b){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*R,_.scale.value=b*.5,g.map&&(_.map.value=g.map,e(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function u(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function h(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function d(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function f(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function m(_,g,R){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,g){g.matcap&&(_.matcap.value=g.matcap)}function M(_,g){const R=t.get(g).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Qx(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,b){const L=b.program;n.uniformBlockBinding(R,L)}function u(R,b){let L=r[R.id];L===void 0&&(S(R),L=h(R),r[R.id]=L,R.addEventListener("dispose",_));const V=b.program;n.updateUBOMapping(R,V);const N=t.render.frame;s[R.id]!==N&&(f(R),s[R.id]=N)}function h(R){const b=d();R.__bindingPointIndex=b;const L=i.createBuffer(),V=R.__size,N=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,V,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,L),L}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const b=r[R.id],L=R.uniforms,V=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let N=0,T=L.length;N<T;N++){const x=Array.isArray(L[N])?L[N]:[L[N]];for(let v=0,y=x.length;v<y;v++){const A=x[v];if(m(A,N,v,V)===!0){const I=A.__offset,w=Array.isArray(A.value)?A.value:[A.value];let B=0;for(let W=0;W<w.length;W++){const X=w[W],J=M(X);typeof X=="number"||typeof X=="boolean"?(A.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,I+B,A.__data)):X.isMatrix3?(A.__data[0]=X.elements[0],A.__data[1]=X.elements[1],A.__data[2]=X.elements[2],A.__data[3]=0,A.__data[4]=X.elements[3],A.__data[5]=X.elements[4],A.__data[6]=X.elements[5],A.__data[7]=0,A.__data[8]=X.elements[6],A.__data[9]=X.elements[7],A.__data[10]=X.elements[8],A.__data[11]=0):(X.toArray(A.__data,B),B+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,b,L,V){const N=R.value,T=b+"_"+L;if(V[T]===void 0)return typeof N=="number"||typeof N=="boolean"?V[T]=N:V[T]=N.clone(),!0;{const x=V[T];if(typeof N=="number"||typeof N=="boolean"){if(x!==N)return V[T]=N,!0}else if(x.equals(N)===!1)return x.copy(N),!0}return!1}function S(R){const b=R.uniforms;let L=0;const V=16;for(let T=0,x=b.length;T<x;T++){const v=Array.isArray(b[T])?b[T]:[b[T]];for(let y=0,A=v.length;y<A;y++){const I=v[y],w=Array.isArray(I.value)?I.value:[I.value];for(let B=0,W=w.length;B<W;B++){const X=w[B],J=M(X),j=L%V;j!==0&&V-j<J.boundary&&(L+=V-j),I.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=L,L+=J.storage}}}const N=L%V;return N>0&&(L+=V-N),R.__size=L,R.__cache={},this}function M(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),b}function _(R){const b=R.target;b.removeEventListener("dispose",_);const L=o.indexOf(b.__bindingPointIndex);o.splice(L,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function g(){for(const R in r)i.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}class Zx{constructor(t={}){const{canvas:e=Wv(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),S=new Int32Array(4);let M=null,_=null;const g=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this.toneMapping=Vi,this.toneMappingExposure=1;const b=this;let L=!1,V=0,N=0,T=null,x=-1,v=null;const y=new Ve,A=new Ve;let I=null;const w=new ne(0);let B=0,W=e.width,X=e.height,J=1,j=null,ht=null;const gt=new Ve(0,0,W,X),At=new Ve(0,0,W,X);let Zt=!1;const ce=new Wu;let Q=!1,at=!1;const xt=new Ee,vt=new F,Ht=new Ve,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function Se(){return T===null?J:1}let O=n;function xe(P,z){return e.getContext(P,z)}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lu}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",st,!1),O===null){const z="webgl2";if(O=xe(z,P),O===null)throw xe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let oe,le,Ct,Te,kt,bt,U,C,Y,it,ot,nt,Pt,ft,yt,Gt,ut,Et,te,Lt,St,Ft,Bt,fe;function k(){oe=new oS(O),oe.init(),Ft=new Gx(O,oe),le=new tS(O,oe,t,Ft),Ct=new Bx(O),Te=new lS(O),kt=new wx,bt=new Hx(O,oe,Ct,kt,le,Ft,Te),U=new nS(b),C=new sS(b),Y=new gy(O),Bt=new QE(O,Y),it=new aS(O,Y,Te,Bt),ot=new hS(O,it,Y,Te),te=new uS(O,le,bt),Gt=new eS(kt),nt=new Ax(b,U,C,oe,le,Bt,Gt),Pt=new Jx(b,kt),ft=new Rx,yt=new Nx(oe),Et=new JE(b,U,C,Ct,ot,f,l),ut=new kx(b,ot,le),fe=new Qx(O,Te,le,Ct),Lt=new ZE(O,oe,Te),St=new cS(O,oe,Te),Te.programs=nt.programs,b.capabilities=le,b.extensions=oe,b.properties=kt,b.renderLists=ft,b.shadowMap=ut,b.state=Ct,b.info=Te}k();const ct=new Kx(b,O);this.xr=ct,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=oe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=oe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(P){P!==void 0&&(J=P,this.setSize(W,X,!1))},this.getSize=function(P){return P.set(W,X)},this.setSize=function(P,z,q=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=P,X=z,e.width=Math.floor(P*J),e.height=Math.floor(z*J),q===!0&&(e.style.width=P+"px",e.style.height=z+"px"),this.setViewport(0,0,P,z)},this.getDrawingBufferSize=function(P){return P.set(W*J,X*J).floor()},this.setDrawingBufferSize=function(P,z,q){W=P,X=z,J=q,e.width=Math.floor(P*q),e.height=Math.floor(z*q),this.setViewport(0,0,P,z)},this.getCurrentViewport=function(P){return P.copy(y)},this.getViewport=function(P){return P.copy(gt)},this.setViewport=function(P,z,q,$){P.isVector4?gt.set(P.x,P.y,P.z,P.w):gt.set(P,z,q,$),Ct.viewport(y.copy(gt).multiplyScalar(J).round())},this.getScissor=function(P){return P.copy(At)},this.setScissor=function(P,z,q,$){P.isVector4?At.set(P.x,P.y,P.z,P.w):At.set(P,z,q,$),Ct.scissor(A.copy(At).multiplyScalar(J).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(P){Ct.setScissorTest(Zt=P)},this.setOpaqueSort=function(P){j=P},this.setTransparentSort=function(P){ht=P},this.getClearColor=function(P){return P.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(P=!0,z=!0,q=!0){let $=0;if(P){let H=!1;if(T!==null){const lt=T.texture.format;H=lt===ku||lt===Vu||lt===Fu}if(H){const lt=T.texture.type,pt=lt===pi||lt===Er||lt===go||lt===ms||lt===Uu||lt===Ou,_t=Et.getClearColor(),Mt=Et.getClearAlpha(),Ut=_t.r,Ot=_t.g,Dt=_t.b;pt?(m[0]=Ut,m[1]=Ot,m[2]=Dt,m[3]=Mt,O.clearBufferuiv(O.COLOR,0,m)):(S[0]=Ut,S[1]=Ot,S[2]=Dt,S[3]=Mt,O.clearBufferiv(O.COLOR,0,S))}else $|=O.COLOR_BUFFER_BIT}z&&($|=O.DEPTH_BUFFER_BIT),q&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ft.dispose(),yt.dispose(),kt.dispose(),U.dispose(),C.dispose(),ot.dispose(),Bt.dispose(),fe.dispose(),nt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Sn),ct.removeEventListener("sessionend",ko),xn.stop()};function Z(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const P=Te.autoReset,z=ut.enabled,q=ut.autoUpdate,$=ut.needsUpdate,H=ut.type;k(),Te.autoReset=P,ut.enabled=z,ut.autoUpdate=q,ut.needsUpdate=$,ut.type=H}function st(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Nt(P){const z=P.target;z.removeEventListener("dispose",Nt),Kt(z)}function Kt(P){pe(P),kt.remove(P)}function pe(P){const z=kt.get(P).programs;z!==void 0&&(z.forEach(function(q){nt.releaseProgram(q)}),P.isShaderMaterial&&nt.releaseShaderCache(P))}this.renderBufferDirect=function(P,z,q,$,H,lt){z===null&&(z=Wt);const pt=H.isMesh&&H.matrixWorld.determinant()<0,_t=Bs(P,z,q,$,H);Ct.setMaterial($,pt);let Mt=q.index,Ut=1;if($.wireframe===!0){if(Mt=it.getWireframeAttribute(q),Mt===void 0)return;Ut=2}const Ot=q.drawRange,Dt=q.attributes.position;let re=Ot.start*Ut,me=(Ot.start+Ot.count)*Ut;lt!==null&&(re=Math.max(re,lt.start*Ut),me=Math.min(me,(lt.start+lt.count)*Ut)),Mt!==null?(re=Math.max(re,0),me=Math.min(me,Mt.count)):Dt!=null&&(re=Math.max(re,0),me=Math.min(me,Dt.count));const ge=me-re;if(ge<0||ge===1/0)return;Bt.setup(H,$,_t,q,Mt);let Ze,se=Lt;if(Mt!==null&&(Ze=Y.get(Mt),se=St,se.setIndex(Ze)),H.isMesh)$.wireframe===!0?(Ct.setLineWidth($.wireframeLinewidth*Se()),se.setMode(O.LINES)):se.setMode(O.TRIANGLES);else if(H.isLine){let Rt=$.linewidth;Rt===void 0&&(Rt=1),Ct.setLineWidth(Rt*Se()),H.isLineSegments?se.setMode(O.LINES):H.isLineLoop?se.setMode(O.LINE_LOOP):se.setMode(O.LINE_STRIP)}else H.isPoints?se.setMode(O.POINTS):H.isSprite&&se.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)se.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Rt=H._multiDrawStarts,Ue=H._multiDrawCounts,Yt=H._multiDrawCount,Re=Mt?Y.get(Mt).bytesPerElement:1,Tn=kt.get($).currentProgram.getUniforms();for(let Oe=0;Oe<Yt;Oe++)Tn.setValue(O,"_gl_DrawID",Oe),se.render(Rt[Oe]/Re,Ue[Oe])}else if(H.isInstancedMesh)se.renderInstances(re,ge,H.count);else if(q.isInstancedBufferGeometry){const Rt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ue=Math.min(q.instanceCount,Rt);se.renderInstances(re,ge,Ue)}else se.render(re,ge)};function Ne(P,z,q){P.transparent===!0&&P.side===Dn&&P.forceSinglePass===!1?(P.side=pn,P.needsUpdate=!0,gn(P,z,q),P.side=Wi,P.needsUpdate=!0,gn(P,z,q),P.side=Dn):gn(P,z,q)}this.compile=function(P,z,q=null){q===null&&(q=P),_=yt.get(q),_.init(z),R.push(_),q.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(_.pushLight(H),H.castShadow&&_.pushShadow(H))}),P!==q&&P.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(_.pushLight(H),H.castShadow&&_.pushShadow(H))}),_.setupLights();const $=new Set;return P.traverse(function(H){const lt=H.material;if(lt)if(Array.isArray(lt))for(let pt=0;pt<lt.length;pt++){const _t=lt[pt];Ne(_t,q,H),$.add(_t)}else Ne(lt,q,H),$.add(lt)}),R.pop(),_=null,$},this.compileAsync=function(P,z,q=null){const $=this.compile(P,z,q);return new Promise(H=>{function lt(){if($.forEach(function(pt){kt.get(pt).currentProgram.isReady()&&$.delete(pt)}),$.size===0){H(P);return}setTimeout(lt,10)}oe.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ae=null;function Qe(P){ae&&ae(P)}function Sn(){xn.stop()}function ko(){xn.start()}const xn=new om;xn.setAnimationLoop(Qe),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(P){ae=P,ct.setAnimationLoop(P),P===null?xn.stop():xn.start()},ct.addEventListener("sessionstart",Sn),ct.addEventListener("sessionend",ko),this.render=function(P,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(z),z=ct.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,z,T),_=yt.get(P,R.length),_.init(z),R.push(_),xt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ce.setFromProjectionMatrix(xt),at=this.localClippingEnabled,Q=Gt.init(this.clippingPlanes,at),M=ft.get(P,g.length),M.init(),g.push(M),ct.enabled===!0&&ct.isPresenting===!0){const lt=b.xr.getDepthSensingMesh();lt!==null&&Pr(lt,z,-1/0,b.sortObjects)}Pr(P,z,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(j,ht),Qt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Qt&&Et.addToRenderList(M,P),this.info.render.frame++,Q===!0&&Gt.beginShadows();const q=_.state.shadowsArray;ut.render(q,P,z),Q===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=M.opaque,H=M.transmissive;if(_.setupLights(),z.isArrayCamera){const lt=z.cameras;if(H.length>0)for(let pt=0,_t=lt.length;pt<_t;pt++){const Mt=lt[pt];Dr($,H,P,Mt)}Qt&&Et.render(P);for(let pt=0,_t=lt.length;pt<_t;pt++){const Mt=lt[pt];Fs(M,P,Mt,Mt.viewport)}}else H.length>0&&Dr($,H,P,z),Qt&&Et.render(P),Fs(M,P,z);T!==null&&(bt.updateMultisampleRenderTarget(T),bt.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(b,P,z),Bt.resetDefaultState(),x=-1,v=null,R.pop(),R.length>0?(_=R[R.length-1],Q===!0&&Gt.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,g.pop(),g.length>0?M=g[g.length-1]:M=null};function Pr(P,z,q,$){if(P.visible===!1)return;if(P.layers.test(z.layers)){if(P.isGroup)q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(z);else if(P.isLight)_.pushLight(P),P.castShadow&&_.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ce.intersectsSprite(P)){$&&Ht.setFromMatrixPosition(P.matrixWorld).applyMatrix4(xt);const pt=ot.update(P),_t=P.material;_t.visible&&M.push(P,pt,_t,q,Ht.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ce.intersectsObject(P))){const pt=ot.update(P),_t=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ht.copy(P.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Ht.copy(pt.boundingSphere.center)),Ht.applyMatrix4(P.matrixWorld).applyMatrix4(xt)),Array.isArray(_t)){const Mt=pt.groups;for(let Ut=0,Ot=Mt.length;Ut<Ot;Ut++){const Dt=Mt[Ut],re=_t[Dt.materialIndex];re&&re.visible&&M.push(P,pt,re,q,Ht.z,Dt)}}else _t.visible&&M.push(P,pt,_t,q,Ht.z,null)}}const lt=P.children;for(let pt=0,_t=lt.length;pt<_t;pt++)Pr(lt[pt],z,q,$)}function Fs(P,z,q,$){const H=P.opaque,lt=P.transmissive,pt=P.transparent;_.setupLightsView(q),Q===!0&&Gt.setGlobalState(b.clippingPlanes,q),$&&Ct.viewport(y.copy($)),H.length>0&&Hn(H,z,q),lt.length>0&&Hn(lt,z,q),pt.length>0&&Hn(pt,z,q),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Dr(P,z,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[$.id]===void 0&&(_.state.transmissionRenderTarget[$.id]=new Sr(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?wo:pi,minFilter:gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const lt=_.state.transmissionRenderTarget[$.id],pt=$.viewport||y;lt.setSize(pt.z,pt.w);const _t=b.getRenderTarget();b.setRenderTarget(lt),b.getClearColor(w),B=b.getClearAlpha(),B<1&&b.setClearColor(16777215,.5),Qt?Et.render(q):b.clear();const Mt=b.toneMapping;b.toneMapping=Vi;const Ut=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),_.setupLightsView($),Q===!0&&Gt.setGlobalState(b.clippingPlanes,$),Hn(P,q,$),bt.updateMultisampleRenderTarget(lt),bt.updateRenderTargetMipmap(lt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Dt=0,re=z.length;Dt<re;Dt++){const me=z[Dt],ge=me.object,Ze=me.geometry,se=me.material,Rt=me.group;if(se.side===Dn&&ge.layers.test($.layers)){const Ue=se.side;se.side=pn,se.needsUpdate=!0,Bo(ge,q,$,Ze,se,Rt),se.side=Ue,se.needsUpdate=!0,Ot=!0}}Ot===!0&&(bt.updateMultisampleRenderTarget(lt),bt.updateRenderTargetMipmap(lt))}b.setRenderTarget(_t),b.setClearColor(w,B),Ut!==void 0&&($.viewport=Ut),b.toneMapping=Mt}function Hn(P,z,q){const $=z.isScene===!0?z.overrideMaterial:null;for(let H=0,lt=P.length;H<lt;H++){const pt=P[H],_t=pt.object,Mt=pt.geometry,Ut=$===null?pt.material:$,Ot=pt.group;_t.layers.test(q.layers)&&Bo(_t,z,q,Mt,Ut,Ot)}}function Bo(P,z,q,$,H,lt){P.onBeforeRender(b,z,q,$,H,lt),P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),H.transparent===!0&&H.side===Dn&&H.forceSinglePass===!1?(H.side=pn,H.needsUpdate=!0,b.renderBufferDirect(q,z,$,H,P,lt),H.side=Wi,H.needsUpdate=!0,b.renderBufferDirect(q,z,$,H,P,lt),H.side=Dn):b.renderBufferDirect(q,z,$,H,P,lt),P.onAfterRender(b,z,q,$,H,lt)}function gn(P,z,q){z.isScene!==!0&&(z=Wt);const $=kt.get(P),H=_.state.lights,lt=_.state.shadowsArray,pt=H.state.version,_t=nt.getParameters(P,H.state,lt,z,q),Mt=nt.getProgramCacheKey(_t);let Ut=$.programs;$.environment=P.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(P.isMeshStandardMaterial?C:U).get(P.envMap||$.environment),$.envMapRotation=$.environment!==null&&P.envMap===null?z.environmentRotation:P.envMapRotation,Ut===void 0&&(P.addEventListener("dispose",Nt),Ut=new Map,$.programs=Ut);let Ot=Ut.get(Mt);if(Ot!==void 0){if($.currentProgram===Ot&&$.lightsStateVersion===pt)return ks(P,_t),Ot}else _t.uniforms=nt.getUniforms(P),P.onBeforeCompile(_t,b),Ot=nt.acquireProgram(_t,Mt),Ut.set(Mt,Ot),$.uniforms=_t.uniforms;const Dt=$.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Dt.clippingPlanes=Gt.uniform),ks(P,_t),$.needsLights=zo(P),$.lightsStateVersion=pt,$.needsLights&&(Dt.ambientLightColor.value=H.state.ambient,Dt.lightProbe.value=H.state.probe,Dt.directionalLights.value=H.state.directional,Dt.directionalLightShadows.value=H.state.directionalShadow,Dt.spotLights.value=H.state.spot,Dt.spotLightShadows.value=H.state.spotShadow,Dt.rectAreaLights.value=H.state.rectArea,Dt.ltc_1.value=H.state.rectAreaLTC1,Dt.ltc_2.value=H.state.rectAreaLTC2,Dt.pointLights.value=H.state.point,Dt.pointLightShadows.value=H.state.pointShadow,Dt.hemisphereLights.value=H.state.hemi,Dt.directionalShadowMap.value=H.state.directionalShadowMap,Dt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Dt.spotShadowMap.value=H.state.spotShadowMap,Dt.spotLightMatrix.value=H.state.spotLightMatrix,Dt.spotLightMap.value=H.state.spotLightMap,Dt.pointShadowMap.value=H.state.pointShadowMap,Dt.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Ot,$.uniformsList=null,Ot}function Vs(P){if(P.uniformsList===null){const z=P.currentProgram.getUniforms();P.uniformsList=Na.seqWithValue(z.seq,P.uniforms)}return P.uniformsList}function ks(P,z){const q=kt.get(P);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function Bs(P,z,q,$,H){z.isScene!==!0&&(z=Wt),bt.resetTextureUnits();const lt=z.fog,pt=$.isMeshStandardMaterial?z.environment:null,_t=T===null?b.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Qi,Mt=($.isMeshStandardMaterial?C:U).get($.envMap||pt),Ut=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ot=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Dt=!!q.morphAttributes.position,re=!!q.morphAttributes.normal,me=!!q.morphAttributes.color;let ge=Vi;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ge=b.toneMapping);const Ze=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,se=Ze!==void 0?Ze.length:0,Rt=kt.get($),Ue=_.state.lights;if(Q===!0&&(at===!0||P!==v)){const ze=P===v&&$.id===x;Gt.setState($,P,ze)}let Yt=!1;$.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Ue.state.version||Rt.outputColorSpace!==_t||H.isBatchedMesh&&Rt.batching===!1||!H.isBatchedMesh&&Rt.batching===!0||H.isBatchedMesh&&Rt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Rt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Rt.instancing===!1||!H.isInstancedMesh&&Rt.instancing===!0||H.isSkinnedMesh&&Rt.skinning===!1||!H.isSkinnedMesh&&Rt.skinning===!0||H.isInstancedMesh&&Rt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Rt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Rt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Rt.instancingMorph===!1&&H.morphTexture!==null||Rt.envMap!==Mt||$.fog===!0&&Rt.fog!==lt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Gt.numPlanes||Rt.numIntersection!==Gt.numIntersection)||Rt.vertexAlphas!==Ut||Rt.vertexTangents!==Ot||Rt.morphTargets!==Dt||Rt.morphNormals!==re||Rt.morphColors!==me||Rt.toneMapping!==ge||Rt.morphTargetsCount!==se)&&(Yt=!0):(Yt=!0,Rt.__version=$.version);let Re=Rt.currentProgram;Yt===!0&&(Re=gn($,z,H));let Tn=!1,Oe=!1,tr=!1;const zt=Re.getUniforms(),_n=Rt.uniforms;if(Ct.useProgram(Re.program)&&(Tn=!0,Oe=!0,tr=!0),$.id!==x&&(x=$.id,Oe=!0),Tn||v!==P){zt.setValue(O,"projectionMatrix",P.projectionMatrix),zt.setValue(O,"viewMatrix",P.matrixWorldInverse);const ze=zt.map.cameraPosition;ze!==void 0&&ze.setValue(O,vt.setFromMatrixPosition(P.matrixWorld)),le.logarithmicDepthBuffer&&zt.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&zt.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),v!==P&&(v=P,Oe=!0,tr=!0)}if(H.isSkinnedMesh){zt.setOptional(O,H,"bindMatrix"),zt.setOptional(O,H,"bindMatrixInverse");const ze=H.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),zt.setValue(O,"boneTexture",ze.boneTexture,bt))}H.isBatchedMesh&&(zt.setOptional(O,H,"batchingTexture"),zt.setValue(O,"batchingTexture",H._matricesTexture,bt),zt.setOptional(O,H,"batchingIdTexture"),zt.setValue(O,"batchingIdTexture",H._indirectTexture,bt),zt.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&zt.setValue(O,"batchingColorTexture",H._colorsTexture,bt));const ei=q.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&te.update(H,q,Re),(Oe||Rt.receiveShadow!==H.receiveShadow)&&(Rt.receiveShadow=H.receiveShadow,zt.setValue(O,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(_n.envMap.value=Mt,_n.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(_n.envMapIntensity.value=z.environmentIntensity),Oe&&(zt.setValue(O,"toneMappingExposure",b.toneMappingExposure),Rt.needsLights&&zs(_n,tr),lt&&$.fog===!0&&Pt.refreshFogUniforms(_n,lt),Pt.refreshMaterialUniforms(_n,$,J,X,_.state.transmissionRenderTarget[P.id]),Na.upload(O,Vs(Rt),_n,bt)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Na.upload(O,Vs(Rt),_n,bt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&zt.setValue(O,"center",H.center),zt.setValue(O,"modelViewMatrix",H.modelViewMatrix),zt.setValue(O,"normalMatrix",H.normalMatrix),zt.setValue(O,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const ze=$.uniformsGroups;for(let Hs=0,Ho=ze.length;Hs<Ho;Hs++){const Go=ze[Hs];fe.update(Go,Re),fe.bind(Go,Re)}}return Re}function zs(P,z){P.ambientLightColor.needsUpdate=z,P.lightProbe.needsUpdate=z,P.directionalLights.needsUpdate=z,P.directionalLightShadows.needsUpdate=z,P.pointLights.needsUpdate=z,P.pointLightShadows.needsUpdate=z,P.spotLights.needsUpdate=z,P.spotLightShadows.needsUpdate=z,P.rectAreaLights.needsUpdate=z,P.hemisphereLights.needsUpdate=z}function zo(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,z,q){kt.get(P.texture).__webglTexture=z,kt.get(P.depthTexture).__webglTexture=q;const $=kt.get(P);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,z){const q=kt.get(P);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(P,z=0,q=0){T=P,V=z,N=q;let $=!0,H=null,lt=!1,pt=!1;if(P){const Mt=kt.get(P);Mt.__useDefaultFramebuffer!==void 0?(Ct.bindFramebuffer(O.FRAMEBUFFER,null),$=!1):Mt.__webglFramebuffer===void 0?bt.setupRenderTarget(P):Mt.__hasExternalTextures&&bt.rebindTextures(P,kt.get(P.texture).__webglTexture,kt.get(P.depthTexture).__webglTexture);const Ut=P.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(pt=!0);const Ot=kt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ot[z])?H=Ot[z][q]:H=Ot[z],lt=!0):P.samples>0&&bt.useMultisampledRTT(P)===!1?H=kt.get(P).__webglMultisampledFramebuffer:Array.isArray(Ot)?H=Ot[q]:H=Ot,y.copy(P.viewport),A.copy(P.scissor),I=P.scissorTest}else y.copy(gt).multiplyScalar(J).floor(),A.copy(At).multiplyScalar(J).floor(),I=Zt;if(Ct.bindFramebuffer(O.FRAMEBUFFER,H)&&$&&Ct.drawBuffers(P,H),Ct.viewport(y),Ct.scissor(A),Ct.setScissorTest(I),lt){const Mt=kt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,Mt.__webglTexture,q)}else if(pt){const Mt=kt.get(P.texture),Ut=z||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Mt.__webglTexture,q||0,Ut)}x=-1},this.readRenderTargetPixels=function(P,z,q,$,H,lt,pt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=kt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&pt!==void 0&&(_t=_t[pt]),_t){Ct.bindFramebuffer(O.FRAMEBUFFER,_t);try{const Mt=P.texture,Ut=Mt.format,Ot=Mt.type;if(!le.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=P.width-$&&q>=0&&q<=P.height-H&&O.readPixels(z,q,$,H,Ft.convert(Ut),Ft.convert(Ot),lt)}finally{const Mt=T!==null?kt.get(T).__webglFramebuffer:null;Ct.bindFramebuffer(O.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(P,z,q,$,H,lt,pt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=kt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&pt!==void 0&&(_t=_t[pt]),_t){Ct.bindFramebuffer(O.FRAMEBUFFER,_t);try{const Mt=P.texture,Ut=Mt.format,Ot=Mt.type;if(!le.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=P.width-$&&q>=0&&q<=P.height-H){const Dt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Dt),O.bufferData(O.PIXEL_PACK_BUFFER,lt.byteLength,O.STREAM_READ),O.readPixels(z,q,$,H,Ft.convert(Ut),Ft.convert(Ot),0),O.flush();const re=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);await Xv(O,re,4);try{O.bindBuffer(O.PIXEL_PACK_BUFFER,Dt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,lt)}finally{O.deleteBuffer(Dt),O.deleteSync(re)}return lt}}finally{const Mt=T!==null?kt.get(T).__webglFramebuffer:null;Ct.bindFramebuffer(O.FRAMEBUFFER,Mt)}}},this.copyFramebufferToTexture=function(P,z=null,q=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,P=arguments[1]);const $=Math.pow(2,-q),H=Math.floor(P.image.width*$),lt=Math.floor(P.image.height*$),pt=z!==null?z.x:0,_t=z!==null?z.y:0;bt.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,pt,_t,H,lt),Ct.unbindTexture()},this.copyTextureToTexture=function(P,z,q=null,$=null,H=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1],z=arguments[2],H=arguments[3]||0,q=null);let lt,pt,_t,Mt,Ut,Ot;q!==null?(lt=q.max.x-q.min.x,pt=q.max.y-q.min.y,_t=q.min.x,Mt=q.min.y):(lt=P.image.width,pt=P.image.height,_t=0,Mt=0),$!==null?(Ut=$.x,Ot=$.y):(Ut=0,Ot=0);const Dt=Ft.convert(z.format),re=Ft.convert(z.type);bt.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const me=O.getParameter(O.UNPACK_ROW_LENGTH),ge=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ze=O.getParameter(O.UNPACK_SKIP_PIXELS),se=O.getParameter(O.UNPACK_SKIP_ROWS),Rt=O.getParameter(O.UNPACK_SKIP_IMAGES),Ue=P.isCompressedTexture?P.mipmaps[H]:P.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Ue.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ue.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_t),O.pixelStorei(O.UNPACK_SKIP_ROWS,Mt),P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,Ut,Ot,lt,pt,Dt,re,Ue.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,Ut,Ot,Ue.width,Ue.height,Dt,Ue.data):O.texSubImage2D(O.TEXTURE_2D,H,Ut,Ot,lt,pt,Dt,re,Ue),O.pixelStorei(O.UNPACK_ROW_LENGTH,me),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ge),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ze),O.pixelStorei(O.UNPACK_SKIP_ROWS,se),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Rt),H===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(P,z,q=null,$=null,H=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,P=arguments[2],z=arguments[3],H=arguments[4]||0);let lt,pt,_t,Mt,Ut,Ot,Dt,re,me;const ge=P.isCompressedTexture?P.mipmaps[H]:P.image;q!==null?(lt=q.max.x-q.min.x,pt=q.max.y-q.min.y,_t=q.max.z-q.min.z,Mt=q.min.x,Ut=q.min.y,Ot=q.min.z):(lt=ge.width,pt=ge.height,_t=ge.depth,Mt=0,Ut=0,Ot=0),$!==null?(Dt=$.x,re=$.y,me=$.z):(Dt=0,re=0,me=0);const Ze=Ft.convert(z.format),se=Ft.convert(z.type);let Rt;if(z.isData3DTexture)bt.setTexture3D(z,0),Rt=O.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)bt.setTexture2DArray(z,0),Rt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const Ue=O.getParameter(O.UNPACK_ROW_LENGTH),Yt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Re=O.getParameter(O.UNPACK_SKIP_PIXELS),Tn=O.getParameter(O.UNPACK_SKIP_ROWS),Oe=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ge.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ge.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Mt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ut),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ot),P.isDataTexture||P.isData3DTexture?O.texSubImage3D(Rt,H,Dt,re,me,lt,pt,_t,Ze,se,ge.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Rt,H,Dt,re,me,lt,pt,_t,Ze,ge.data):O.texSubImage3D(Rt,H,Dt,re,me,lt,pt,_t,Ze,se,ge),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ue),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Yt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Re),O.pixelStorei(O.UNPACK_SKIP_ROWS,Tn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Oe),H===0&&z.generateMipmaps&&O.generateMipmap(Rt),Ct.unbindTexture()},this.initRenderTarget=function(P){kt.get(P).__webglFramebuffer===void 0&&bt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?bt.setTextureCube(P,0):P.isData3DTexture?bt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?bt.setTexture2DArray(P,0):bt.setTexture2D(P,0),Ct.unbindTexture()},this.resetState=function(){V=0,N=0,T=null,Ct.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Bu?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===Ec?"display-p3":"srgb"}}class tT extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class qu extends Cs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ya=new F,Ja=new F,sf=new Ee,Qs=new Hu,ya=new Sc,_l=new F,of=new F;class fm extends $e{constructor(t=new dn,e=new qu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ya.fromBufferAttribute(e,r-1),Ja.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ya.distanceTo(Ja);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),ya.radius+=s,t.ray.intersectsSphere(ya)===!1)return;sf.copy(r).invert(),Qs.copy(t.ray).applyMatrix4(sf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),S=Math.min(h.count,o.start+o.count);for(let M=m,_=S-1;M<_;M+=u){const g=h.getX(M),R=h.getX(M+1),b=Ea(this,t,Qs,l,g,R);b&&e.push(b)}if(this.isLineLoop){const M=h.getX(S-1),_=h.getX(m),g=Ea(this,t,Qs,l,M,_);g&&e.push(g)}}else{const m=Math.max(0,o.start),S=Math.min(f.count,o.start+o.count);for(let M=m,_=S-1;M<_;M+=u){const g=Ea(this,t,Qs,l,M,M+1);g&&e.push(g)}if(this.isLineLoop){const M=Ea(this,t,Qs,l,S-1,m);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ea(i,t,e,n,r,s){const o=i.geometry.attributes.position;if(Ya.fromBufferAttribute(o,r),Ja.fromBufferAttribute(o,s),e.distanceSqToSegment(Ya,Ja,_l,of)>n)return;_l.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(_l);if(!(l<t.near||l>t.far))return{distance:l,point:of.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const af=new F,cf=new F;class eT extends fm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)af.fromBufferAttribute(e,r),cf.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+af.distanceTo(cf);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pm extends hn{constructor(t,e,n,r,s,o,a,l,u){super(t,e,n,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=n[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],f=n[r+1]-h,m=(o-h)/f;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new Tt:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,r=[],s=[],o=[],a=new F,l=new Ee;for(let m=0;m<=t;m++){const S=m/t;r[m]=this.getTangentAt(S,new F)}s[0]=new F,o[0]=new F;let u=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=u&&(u=h,n.set(1,0,0)),d<=u&&(u=d,n.set(0,1,0)),f<=u&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const S=Math.acos(Xe(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,S))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(Xe(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let S=1;S<=t;S++)s[S].applyMatrix4(l.makeRotationAxis(r[S],m*S)),o[S].crossVectors(r[S],s[S])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $u extends ti{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Tt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,m=u-this.aY;l=f*h-m*d+this.aX,u=f*d+m*h+this.aY}return n.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class nT extends $u{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ju(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,h,d){let f=(o-s)/u-(a-s)/(u+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,m*=h,r(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Sa=new F,vl=new ju,yl=new ju,El=new ju;class iT extends ti{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new F){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,h;this.closed||a>0?u=r[(a-1)%s]:(Sa.subVectors(r[0],r[1]).add(r[0]),u=Sa);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Sa.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Sa),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let S=Math.pow(u.distanceToSquared(d),m),M=Math.pow(d.distanceToSquared(f),m),_=Math.pow(f.distanceToSquared(h),m);M<1e-4&&(M=1),S<1e-4&&(S=M),_<1e-4&&(_=M),vl.initNonuniformCatmullRom(u.x,d.x,f.x,h.x,S,M,_),yl.initNonuniformCatmullRom(u.y,d.y,f.y,h.y,S,M,_),El.initNonuniformCatmullRom(u.z,d.z,f.z,h.z,S,M,_)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(u.x,d.x,f.x,h.x,this.tension),yl.initCatmullRom(u.y,d.y,f.y,h.y,this.tension),El.initCatmullRom(u.z,d.z,f.z,h.z,this.tension));return n.set(vl.calc(l),yl.calc(l),El.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new F().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function lf(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function rT(i,t){const e=1-i;return e*e*t}function sT(i,t){return 2*(1-i)*i*t}function oT(i,t){return i*i*t}function so(i,t,e,n){return rT(i,t)+sT(i,e)+oT(i,n)}function aT(i,t){const e=1-i;return e*e*e*t}function cT(i,t){const e=1-i;return 3*e*e*i*t}function lT(i,t){return 3*(1-i)*i*i*t}function uT(i,t){return i*i*i*t}function oo(i,t,e,n,r){return aT(i,t)+cT(i,e)+lT(i,n)+uT(i,r)}class mm extends ti{constructor(t=new Tt,e=new Tt,n=new Tt,r=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Tt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(oo(t,r.x,s.x,o.x,a.x),oo(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hT extends ti{constructor(t=new F,e=new F,n=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new F){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(oo(t,r.x,s.x,o.x,a.x),oo(t,r.y,s.y,o.y,a.y),oo(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gm extends ti{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dT extends ti{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _m extends ti{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(so(t,r.x,s.x,o.x),so(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fT extends ti{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(so(t,r.x,s.x,o.x),so(t,r.y,s.y,o.y),so(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vm extends ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],h=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(lf(a,l.x,u.x,h.x,d.x),lf(a,l.y,u.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Tt().fromArray(r))}return this}}var uf=Object.freeze({__proto__:null,ArcCurve:nT,CatmullRomCurve3:iT,CubicBezierCurve:mm,CubicBezierCurve3:hT,EllipseCurve:$u,LineCurve:gm,LineCurve3:dT,QuadraticBezierCurve:_m,QuadraticBezierCurve3:fT,SplineCurve:vm});class pT extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uf[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let u=0;u<l.length;u++){const h=l[u];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new uf[r.type]().fromJSON(r))}return this}}class mT extends pT{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new gm(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new _m(this.currentPoint.clone(),new Tt(t,e),new Tt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new mm(this.currentPoint.clone(),new Tt(t,e),new Tt(n,r),new Tt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new vm(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+u,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const u=new $u(t,e,n,r,s,o,a,l);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ku extends dn{constructor(t=[new Tt(0,-.5),new Tt(.5,0),new Tt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Xe(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],u=[],h=1/e,d=new F,f=new Tt,m=new F,S=new F,M=new F;let _=0,g=0;for(let R=0;R<=t.length-1;R++)switch(R){case 0:_=t[R+1].x-t[R].x,g=t[R+1].y-t[R].y,m.x=g*1,m.y=-_,m.z=g*0,M.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:_=t[R+1].x-t[R].x,g=t[R+1].y-t[R].y,m.x=g*1,m.y=-_,m.z=g*0,S.copy(m),m.x+=M.x,m.y+=M.y,m.z+=M.z,m.normalize(),l.push(m.x,m.y,m.z),M.copy(S)}for(let R=0;R<=e;R++){const b=n+R*h*r,L=Math.sin(b),V=Math.cos(b);for(let N=0;N<=t.length-1;N++){d.x=t[N].x*L,d.y=t[N].y,d.z=t[N].x*V,o.push(d.x,d.y,d.z),f.x=R/e,f.y=N/(t.length-1),a.push(f.x,f.y);const T=l[3*N+0]*L,x=l[3*N+1],v=l[3*N+0]*V;u.push(T,x,v)}}for(let R=0;R<e;R++)for(let b=0;b<t.length-1;b++){const L=b+R*t.length,V=L,N=L+t.length,T=L+t.length+1,x=L+1;s.push(V,N,x),s.push(T,x,N)}this.setIndex(s),this.setAttribute("position",new _e(o,3)),this.setAttribute("uv",new _e(a,2)),this.setAttribute("normal",new _e(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ku(t.points,t.segments,t.phiStart,t.phiLength)}}class Yu extends Ku{constructor(t=1,e=1,n=4,r=8){const s=new mT;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new Yu(t.radius,t.length,t.capSegments,t.radialSegments)}}class Tc extends dn{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],m=[];let S=0;const M=[],_=n/2;let g=0;R(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new _e(d,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(m,2));function R(){const L=new F,V=new F;let N=0;const T=(e-t)/n;for(let x=0;x<=s;x++){const v=[],y=x/s,A=y*(e-t)+t;for(let I=0;I<=r;I++){const w=I/r,B=w*l+a,W=Math.sin(B),X=Math.cos(B);V.x=A*W,V.y=-y*n+_,V.z=A*X,d.push(V.x,V.y,V.z),L.set(W,T,X).normalize(),f.push(L.x,L.y,L.z),m.push(w,1-y),v.push(S++)}M.push(v)}for(let x=0;x<r;x++)for(let v=0;v<s;v++){const y=M[v][x],A=M[v+1][x],I=M[v+1][x+1],w=M[v][x+1];h.push(y,A,w),h.push(A,I,w),N+=6}u.addGroup(g,N,0),g+=N}function b(L){const V=S,N=new Tt,T=new F;let x=0;const v=L===!0?t:e,y=L===!0?1:-1;for(let I=1;I<=r;I++)d.push(0,_*y,0),f.push(0,y,0),m.push(.5,.5),S++;const A=S;for(let I=0;I<=r;I++){const B=I/r*l+a,W=Math.cos(B),X=Math.sin(B);T.x=v*X,T.y=_*y,T.z=v*W,d.push(T.x,T.y,T.z),f.push(0,y,0),N.x=W*.5+.5,N.y=X*.5*y+.5,m.push(N.x,N.y),S++}for(let I=0;I<r;I++){const w=V+I,B=A+I;L===!0?h.push(B,B+1,w):h.push(B+1,B,w),x+=3}u.addGroup(g,x,L===!0?1:2),g+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ju extends Tc{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ju(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qu extends dn{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],o=[];a(r),u(n),h(),this.setAttribute("position",new _e(s,3)),this.setAttribute("normal",new _e(s.slice(),3)),this.setAttribute("uv",new _e(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(R){const b=new F,L=new F,V=new F;for(let N=0;N<e.length;N+=3)m(e[N+0],b),m(e[N+1],L),m(e[N+2],V),l(b,L,V,R)}function l(R,b,L,V){const N=V+1,T=[];for(let x=0;x<=N;x++){T[x]=[];const v=R.clone().lerp(L,x/N),y=b.clone().lerp(L,x/N),A=N-x;for(let I=0;I<=A;I++)I===0&&x===N?T[x][I]=v:T[x][I]=v.clone().lerp(y,I/A)}for(let x=0;x<N;x++)for(let v=0;v<2*(N-x)-1;v++){const y=Math.floor(v/2);v%2===0?(f(T[x][y+1]),f(T[x+1][y]),f(T[x][y])):(f(T[x][y+1]),f(T[x+1][y+1]),f(T[x+1][y]))}}function u(R){const b=new F;for(let L=0;L<s.length;L+=3)b.x=s[L+0],b.y=s[L+1],b.z=s[L+2],b.normalize().multiplyScalar(R),s[L+0]=b.x,s[L+1]=b.y,s[L+2]=b.z}function h(){const R=new F;for(let b=0;b<s.length;b+=3){R.x=s[b+0],R.y=s[b+1],R.z=s[b+2];const L=_(R)/2/Math.PI+.5,V=g(R)/Math.PI+.5;o.push(L,1-V)}S(),d()}function d(){for(let R=0;R<o.length;R+=6){const b=o[R+0],L=o[R+2],V=o[R+4],N=Math.max(b,L,V),T=Math.min(b,L,V);N>.9&&T<.1&&(b<.2&&(o[R+0]+=1),L<.2&&(o[R+2]+=1),V<.2&&(o[R+4]+=1))}}function f(R){s.push(R.x,R.y,R.z)}function m(R,b){const L=R*3;b.x=t[L+0],b.y=t[L+1],b.z=t[L+2]}function S(){const R=new F,b=new F,L=new F,V=new F,N=new Tt,T=new Tt,x=new Tt;for(let v=0,y=0;v<s.length;v+=9,y+=6){R.set(s[v+0],s[v+1],s[v+2]),b.set(s[v+3],s[v+4],s[v+5]),L.set(s[v+6],s[v+7],s[v+8]),N.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),x.set(o[y+4],o[y+5]),V.copy(R).add(b).add(L).divideScalar(3);const A=_(V);M(N,y+0,R,A),M(T,y+2,b,A),M(x,y+4,L,A)}}function M(R,b,L,V){V<0&&R.x===1&&(o[b]=R.x-1),L.x===0&&L.z===0&&(o[b]=V/2/Math.PI+.5)}function _(R){return Math.atan2(R.z,-R.x)}function g(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qu(t.vertices,t.indices,t.radius,t.details)}}class Zu extends Qu{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zu(t.radius,t.detail)}}class Qa extends dn{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const h=[],d=new F,f=new F,m=[],S=[],M=[],_=[];for(let g=0;g<=n;g++){const R=[],b=g/n;let L=0;g===0&&o===0?L=.5/e:g===n&&l===Math.PI&&(L=-.5/e);for(let V=0;V<=e;V++){const N=V/e;d.x=-t*Math.cos(r+N*s)*Math.sin(o+b*a),d.y=t*Math.cos(o+b*a),d.z=t*Math.sin(r+N*s)*Math.sin(o+b*a),S.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),_.push(N+L,1-b),R.push(u++)}h.push(R)}for(let g=0;g<n;g++)for(let R=0;R<e;R++){const b=h[g][R+1],L=h[g][R],V=h[g+1][R],N=h[g+1][R+1];(g!==0||o>0)&&m.push(b,L,N),(g!==n-1||l<Math.PI)&&m.push(L,V,N)}this.setIndex(m),this.setAttribute("position",new _e(S,3)),this.setAttribute("normal",new _e(M,3)),this.setAttribute("uv",new _e(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class th extends dn{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],u=[],h=new F,d=new F,f=new F;for(let m=0;m<=n;m++)for(let S=0;S<=r;S++){const M=S/r*s,_=m/n*Math.PI*2;d.x=(t+e*Math.cos(_))*Math.cos(M),d.y=(t+e*Math.cos(_))*Math.sin(M),d.z=e*Math.sin(_),a.push(d.x,d.y,d.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),u.push(S/r),u.push(m/n)}for(let m=1;m<=n;m++)for(let S=1;S<=r;S++){const M=(r+1)*m+S-1,_=(r+1)*(m-1)+S-1,g=(r+1)*(m-1)+S,R=(r+1)*m+S;o.push(M,_,R),o.push(_,g,R)}this.setIndex(o),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new th(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Nn extends Cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jp,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ym extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class gT extends ym{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Sl=new Ee,hf=new F,df=new F;class _T{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wu,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;hf.setFromMatrixPosition(t.matrixWorld),e.position.copy(hf),df.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(df),e.updateMatrixWorld(),Sl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vT extends _T{constructor(){super(new am(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yT extends ym{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new vT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ff=new Ee;class ET{constructor(t,e,n=0,r=1/0){this.ray=new Hu(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Gu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ff.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ff),this}intersectObject(t,e=!0,n=[]){return du(t,this,n,e),n.sort(pf),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)du(t[r],this,n,e);return n.sort(pf),n}}function pf(i,t){return i.distance-t.distance}function du(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)du(s[o],t,e,!0)}}class ST extends eT{constructor(t=10,e=10,n=4473924,r=8947848){n=new ne(n),r=new ne(r);const s=e/2,o=t/e,a=t/2,l=[],u=[];for(let f=0,m=0,S=-a;f<=e;f++,S+=o){l.push(-a,0,S,a,0,S),l.push(S,0,-a,S,0,a);const M=f===s?n:r;M.toArray(u,m),m+=3,M.toArray(u,m),m+=3,M.toArray(u,m),m+=3,M.toArray(u,m),m+=3}const h=new dn;h.setAttribute("position",new _e(l,3)),h.setAttribute("color",new _e(u,3));const d=new qu({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lu);class vs{static createButton(t,e={}){const n=document.createElement("button");function r(){let u=null;async function h(m){m.addEventListener("end",d),await t.xr.setSession(m),n.textContent="EXIT VR",u=m}function d(){u.removeEventListener("end",d),n.textContent="ENTER VR",u=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const f={...e,optionalFeatures:["local-floor","bounded-floor","layers",...e.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){u===null?navigator.xr.requestSession("immersive-vr",f).then(h):(u.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(h).catch(m=>{console.warn(m)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(h).catch(m=>{console.warn(m)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="VR NOT SUPPORTED"}function a(u){s(),console.warn("Exception when trying to call xr.isSessionSupported",u),n.textContent="VR NOT ALLOWED"}function l(u){u.style.position="absolute",u.style.bottom="20px",u.style.padding="12px 6px",u.style.border="1px solid #fff",u.style.borderRadius="4px",u.style.background="rgba(0,0,0,0.1)",u.style.color="#fff",u.style.font="normal 13px sans-serif",u.style.textAlign="center",u.style.opacity="0.5",u.style.outline="none",u.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(u){u?r():o(),u&&vs.xrSessionIsGranted&&n.click()}).catch(a),n;{const u=document.createElement("a");return window.isSecureContext===!1?(u.href=document.location.href.replace(/^http:/,"https:"),u.innerHTML="WEBXR NEEDS HTTPS"):(u.href="https://immersiveweb.dev/",u.innerHTML="WEBXR NOT AVAILABLE"),u.style.left="calc(50% - 90px)",u.style.width="180px",u.style.textDecoration="none",l(u),u}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{vs.xrSessionIsGranted=!0})}}}vs.xrSessionIsGranted=!1;vs.registerSessionGrantedListener();function Za(i,t,e=1317668){const n=new yi(i,t),r=new Nn({color:e,roughness:1,metalness:0});return new we(n,r)}function ao(i,t=.12){const e=document.createElement("canvas");e.width=1024,e.height=256;const n=e.getContext("2d");n.clearRect(0,0,e.width,e.height),n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,e.width,e.height),n.font="bold 58px system-ui, sans-serif",n.fillStyle="#EAF2FF",n.textAlign="center",n.textBaseline="middle",n.fillText(i,e.width/2,e.height/2);const r=new pm(e);r.colorSpace=An;const s=new Is({map:r,transparent:!0,side:Dn,depthWrite:!1});return new we(new yi(t*2.2,t),s)}function mf({text:i,w:t=.42,h:e=.14,color:n=2450411,tag:r="",labelScale:s=.11}){const o=new un,a=Za(t,e,n);a.userData.isUIButton=!0,a.userData.tag=r,o.add(a);const l=ao(i,s);l.position.set(0,0,.01),o.add(l);const u=new we(new yi(t*1.1,e*1.3),new Is({transparent:!0,opacity:0}));return u.userData.isUIButton=!0,u.userData.tag=r,o.add(u),o}function xT(i){const t=new un,e=Za(2.25,.22,1713720);e.position.set(0,0,-.002),t.add(e);const n=document.createElement("canvas");n.width=3072,n.height=384;const r=n.getContext("2d");r.clearRect(0,0,n.width,n.height),r.fillStyle="rgba(0,0,0,0)",r.fillRect(0,0,n.width,n.height),r.font="bold 142px system-ui, sans-serif",r.fillStyle="#f8fafc",r.textAlign="center",r.textBaseline="middle",r.fillText(i,n.width/2,n.height/2);const s=new pm(n);s.colorSpace=An;const o=new we(new yi(2.12,.17),new Is({map:s,transparent:!0,side:Dn,depthWrite:!1}));return o.position.set(0,0,.002),t.add(o),t}function gf({name:i,kind:t,color:e}){const n=new un;n.userData.isBlockRoot=!0,n.userData.blockKind=t,n.userData.blockName=i;const r=new we(new Xi(.34,.08,.12),new Nn({color:e,roughness:.65}));r.userData.isBlock=!0,r.userData.blockKind=t,r.userData.blockName=i,n.add(r);const s=ao(i,.22);s.position.set(0,.01,.09),n.add(s);const o=new we(new Xi(.38,.14,.16),new Is({transparent:!0,opacity:0}));return o.userData.isBlock=!0,o.userData.blockKind=t,o.userData.blockName=i,n.add(o),n}function TT(i,t,e){const n=new un;i.add(n),n.position.set(0,1.35,-1.2);const r=new un;r.position.set(0,0,0),n.add(r);const s=Za(.85,.75,988704);s.position.set(0,0,-.01),r.add(s);const o=ao("PASOS DEL ROBOT",.24);o.position.set(0,.34,.02),r.add(o);const a=new un;a.position.set(1.25,0,0),n.add(a);const l=Za(1.12,.75,988704);l.position.set(0,0,-.01),a.add(l);const u=ao("INSTRUCCIONES PARA MOVERLO",.47);u.position.set(0,.34,.02),a.add(u);const h=new un;h.position.set(.28,.48,0),n.add(h);const d=xT("RETO: Ayuda al robot a atrapar el cristal dorado");d.position.set(-.52,.22,.02),h.add(d);const f=mf({text:"PROBAR RUTA",w:.66,color:1483594,tag:"run",labelScale:.19});f.position.set(0,0,.01),h.add(f);const m=mf({text:"EMPEZAR DE NUEVO",w:.98,color:2450411,tag:"reset",labelScale:.19});m.position.set(-.92,0,.01),h.add(m);const S=[],M=8;for(let I=0;I<M;I++){const w=.22-I*.07,B=new we(new Xi(.72,.055,.04),new Nn({color:1450290,roughness:1}));B.position.set(0,w,0),B.userData.isSlot=!0,B.userData.slotIndex=I,r.add(B);const W=ao(String(I+1),.08);W.position.set(-.38,w,.03),r.add(W),S.push(B)}const _=[{name:"Avanzar",kind:"move",color:2278750},{name:"Girar Izq",kind:"turnLeft",color:6333946},{name:"Girar Der",kind:"turnRight",color:6333946},{name:"Atrapar",kind:"catch",color:16347926}],g=[],R=[];_.forEach((I,w)=>{const B=gf(I);B.position.set(0,.22-w*.12,.02),a.add(B),R.push(B),g.push(B.position.clone())});const b=new Array(M).fill(null);function L(){var I,w;for(let B=0;B<b.length;B++)(I=b[B])!=null&&I.mesh&&((w=b[B].mesh.parent)==null||w.remove(b[B].mesh)),b[B]=null}function V(I){var w;for(let B=0;B<b.length;B++)((w=b[B])==null?void 0:w.mesh)===I&&(b[B]=null)}function N(){const I=[];for(const w of b)w&&(w.kind==="move"&&I.push({type:"move"}),w.kind==="turnLeft"&&I.push({type:"turn",dir:-1}),w.kind==="turnRight"&&I.push({type:"turn",dir:1}),w.kind==="catch"&&I.push({type:"catch"}));return I}function T(I){const w=_.find(W=>W.kind===I),B=gf(w);return B.userData.isPlacedInstance=!0,B}function x(I){var W,X;const w=I.getWorldPosition(new F);let B={i:-1,d:1/0};for(let J=0;J<S.length;J++){const j=S[J].getWorldPosition(new F),ht=w.distanceTo(j);ht<B.d&&(B={i:J,d:ht})}if(B.d<.32){const J=B.i;(W=b[J])!=null&&W.mesh&&((X=b[J].mesh.parent)==null||X.remove(b[J].mesh),b[J]=null),r.add(I);const j=S[J].position.clone();return I.position.set(j.x+.08,j.y,.06),I.rotation.set(0,0,0),b[J]={kind:I.userData.blockKind,mesh:I},!0}return!1}function v(I){const w=I.userData.blockKind;return T(w)}const y={rig:n,programPanel:r,blocksPanel:a,topPanel:h,slots:S,blocks:R,runBtn:f,resetBtn:m,trySnapBlock:x,createGrabInstanceFromPalette:v,detachPlacedBlock:V,clearProgram:L,compileActions:N,onUIButton(I){if(I==="reset"&&(e==null||e.log("reset_pressed"),L(),t.resetWorld()),I==="run"){const w=N();e==null||e.addAttempt(w),e==null||e.log("run_pressed",{actions:w}),t.resetWorld(),t.run(w)}}};function A(){}return{rig:n,interactables:y,update:A}}function MT(i=6,t=6){const e=new ST(i,t,3095370,1910320);return e.position.y=0,e}function _f(i){return i===0?0:i===1?-Math.PI/2:i===2?Math.PI:Math.PI/2}function AT(){const i=new un,t=new we(new Yu(.09,.12,6,12),new Nn({color:5032432,roughness:.28,metalness:.08}));t.position.y=.17,i.add(t);const e=new we(new Qa(.09,20,16),new Nn({color:12577023,roughness:.2,metalness:.05}));e.position.y=.31,i.add(e);const n=new we(new Qa(.014,12,10),new Nn({color:988970}));n.position.set(-.026,.325,-.077),i.add(n);const r=n.clone();r.position.x=.026,i.add(r);const s=new we(new Ju(.026,.09,10),new Nn({color:16317180,roughness:.35}));s.rotation.x=Math.PI/2,s.position.set(0,.26,-.12),i.add(s);const o=new we(new Tc(.08,.08,.04,12),new Nn({color:2450411,roughness:.65}));return o.position.y=.02,i.add(o),i}function wT(){const i=new un,t=new we(new Zu(.095,0),new Nn({color:16096779,emissive:8138002,emissiveIntensity:.75,roughness:.2,metalness:.1}));t.position.y=.2,i.add(t);const e=new we(new th(.14,.014,10,24),new Nn({color:16569165,emissive:9584654,emissiveIntensity:.5}));return e.rotation.x=Math.PI/2,e.position.y=.12,i.add(e),{target:i,core:t,ring:e}}function bT(i,t={}){const e=new un;i.add(e);const n=MT(6,6);n.position.set(-1.2,0,-1.2),e.add(n);const r=new yi(6,6),s=new Nn({color:1054498,roughness:1}),o=new we(r,s);o.rotation.x=-Math.PI/2,o.position.set(-1.2,0,-1.2),o.receiveShadow=!0,e.add(o);const a=AT();a.position.set(-1.2,0,-1.2),e.add(a);const l=wT(),u=l.target;u.position.set(-1.2+.6,0,-1.2-.6),e.add(u);const h={robot:a,target:u,targetCore:l.core,targetRing:l.ring,gridOrigin:new F(-1.2,0,-1.2),tile:1,dir:0,busy:!1,queue:[],caught:!1,_anim:null};function d(){h.robot.position.set(h.gridOrigin.x,0,h.gridOrigin.z),h.dir=0,h.robot.rotation.set(0,_f(h.dir),0),h.target.visible=!0,h.caught=!1,h.busy=!1,h.queue=[],h._anim=null}function f(R){h.queue.push(...R)}function m(R){h.dir=(h.dir+(R===1?1:3))%4;const b=_f(h.dir);h._anim={type:"turn",t:0,dur:.35,from:h.robot.rotation.y,to:b}}function S(){const R=h.dir,b=new F(0,0,0);R===0&&(b.z=-1),R===1&&(b.x=1),R===2&&(b.z=1),R===3&&(b.x=-1);const L=h.robot.position.clone(),V=L.clone().add(b.multiplyScalar(h.tile*.5)),N=h.gridOrigin.x-1.5,T=h.gridOrigin.x+1.5,x=h.gridOrigin.z-1.5,v=h.gridOrigin.z+1.5;V.x=Xc.clamp(V.x,N,T),V.z=Xc.clamp(V.z,x,v),h._anim={type:"move",t:0,dur:.45,from:L,to:V}}function M(){var V;const R=h.robot.position,b=h.target.position,L=Math.hypot(R.x-b.x,R.z-b.z);!h.caught&&L<.28&&(h.caught=!0,h.target.visible=!1,(V=t.onCatchSuccess)==null||V.call(t))}function _(){var b;if(h._anim)return;const R=h.queue.shift();if(!R){h.busy=!1,h.caught||(b=t.onRunFinishedWithoutSuccess)==null||b.call(t);return}R.type==="move"&&S(),R.type==="turn"&&m(R.dir),R.type==="catch"&&(M(),h._anim={type:"wait",t:0,dur:.22})}function g(R){if(h.busy&&_(),h._anim){h._anim.t+=R;const b=Math.min(1,h._anim.t/h._anim.dur);h._anim.type==="move"?h.robot.position.lerpVectors(h._anim.from,h._anim.to,b):h._anim.type==="turn"&&(h.robot.rotation.y=Xc.lerp(h._anim.from,h._anim.to,b)),b>=1&&(h._anim=null)}h.target.visible&&(h.targetCore.rotation.y+=R*2.4,h.targetRing.rotation.z+=R*1.8,h.target.position.y=.02+Math.sin(performance.now()*.004)*.02)}return{root:e,state:h,resetWorld:d,enqueue:f,run(R){h.busy||(h.busy=!0,h.queue=[],f(R))},update:g}}function RT(i,t,e,n,r){const s=new ET,o=new Ee,a=new Rs,l=new F,u=new F,h=new F,d=new F(0,1,0),f=1.6,m=1.8,S=.18,M=i.xr.getController(0),_=i.xr.getController(1);r.add(M,_);const g=i.xr.getControllerGrip(0),R=i.xr.getControllerGrip(1);r.add(g,R);function b(){const B=new dn().setFromPoints([new F(0,0,0),new F(0,0,-1)]),W=new qu({color:16777215}),X=new fm(B,W);return X.name="ray",X.scale.z=3,X}M.add(b()),_.add(b());const L={grabbing:new Map,input:{leftX:0,leftY:0,rightX:0}};function V(B){var W;B.target.userData.gamepad=((W=B.data)==null?void 0:W.gamepad)||null}function N(B){B.target.userData.gamepad=null}function T(B){o.identity().extractRotation(B.matrixWorld),s.ray.origin.setFromMatrixPosition(B.matrixWorld),s.ray.direction.set(0,0,-1).applyMatrix4(o);const W=[];return n.interactables.rig.traverse(X=>{(X.userData.isUIButton||X.userData.isBlock||X.userData.isSlot)&&W.push(X)}),s.intersectObjects(W,!1)}function x(B){let W=B;for(;W&&!W.userData.isBlockRoot&&W.parent;)W=W.parent;return W!=null&&W.userData.isBlockRoot?W:null}function v(B){const W=B.target,X=T(W);if(!X.length)return;const J=X[0],j=J.object;if(j.userData.isUIButton){n.interactables.onUIButton(j.userData.tag);return}if(j.userData.isBlock){const ht=x(j);if(!ht)return;let gt=ht;ht.userData.isPlacedInstance?n.interactables.detachPlacedBlock(ht):(gt=n.interactables.createGrabInstanceFromPalette(j),t.add(gt),gt.position.copy(ht.getWorldPosition(new F))),W.attach(gt);const At=W.worldToLocal(J.point.clone());gt.position.copy(At),gt.position.z-=.04,gt.rotation.set(0,0,0),L.grabbing.set(W,gt);return}}function y(B){var j;const W=B.target,X=L.grabbing.get(W);if(!X)return;t.attach(X),n.interactables.trySnapBlock(X)||X.userData.isPlacedInstance&&((j=X.parent)==null||j.remove(X)),L.grabbing.delete(W)}M.addEventListener("selectstart",v),M.addEventListener("selectend",y),_.addEventListener("selectstart",v),_.addEventListener("selectend",y),M.addEventListener("connected",V),M.addEventListener("disconnected",N),_.addEventListener("connected",V),_.addEventListener("disconnected",N);function A(){const B=j=>{const ht=j.userData.gamepad;if(!ht||!ht.axes||ht.axes.length<2)return[0,0];const gt=ht.axes.length;return[ht.axes[gt-2]||0,ht.axes[gt-1]||0]},[W,X]=B(M),[J]=B(_);L.input.leftX=W,L.input.leftY=X,L.input.rightX=J}function I(B){if(!i.xr.isPresenting)return;const W=Math.abs(L.input.leftX)>S?L.input.leftX:0,X=Math.abs(L.input.leftY)>S?L.input.leftY:0,J=Math.abs(L.input.rightX)>S?L.input.rightX:0;W===0&&X===0&&J===0||(l.set(0,0,-1).applyQuaternion(e.quaternion),l.y=0,!(l.lengthSq()<1e-6)&&(l.normalize(),u.crossVectors(l,d).normalize(),h.set(0,0,0),h.addScaledVector(l,-X*f*B),h.addScaledVector(u,W*f*B),r.position.add(h),r.rotation.y-=J*m*B))}function w(B){A(),I(B);for(const[W,X]of L.grabbing.entries())W.getWorldQuaternion(a),a.invert(),X.quaternion.copy(a)}return{update:w}}const CT=()=>{};var vf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=function(i){const t=[];let e=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},IT=function(i){const t=[];let e=0,n=0;for(;e<i.length;){const r=i[e++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[e++];t[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[e++],o=i[e++],a=i[e++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const s=i[e++],o=i[e++];t[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Sm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,a=o?i[r+1]:0,l=r+2<i.length,u=l?i[r+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),n.push(e[h],e[d],e[f],e[m])}return n.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(Em(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):IT(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=e[i.charAt(r++)],a=r<i.length?e[i.charAt(r)]:0;++r;const u=r<i.length?e[i.charAt(r)]:64;++r;const d=r<i.length?e[i.charAt(r)]:64;if(++r,s==null||a==null||u==null||d==null)throw new PT;const f=s<<2|a>>4;if(n.push(f),u!==64){const m=a<<4&240|u>>2;if(n.push(m),d!==64){const S=u<<6&192|d;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class PT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DT=function(i){const t=Em(i);return Sm.encodeByteArray(t,!0)},tc=function(i){return DT(i).replace(/\./g,"")},xm=function(i){try{return Sm.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=()=>LT().__FIREBASE_DEFAULTS__,UT=()=>{if(typeof process>"u"||typeof vf>"u")return;const i=vf.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},OT=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&xm(i[1]);return t&&JSON.parse(t)},Mc=()=>{try{return CT()||NT()||UT()||OT()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Tm=i=>{var t,e;return(e=(t=Mc())==null?void 0:t.emulatorHosts)==null?void 0:e[i]},FT=i=>{const t=Tm(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Mm=()=>{var i;return(i=Mc())==null?void 0:i.config},Am=i=>{var t;return(t=Mc())==null?void 0:t[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wm(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...i};return[tc(JSON.stringify(e)),tc(JSON.stringify(o)),""].join(".")}const co={};function BT(){const i={prod:[],emulator:[]};for(const t of Object.keys(co))co[t]?i.emulator.push(t):i.prod.push(t);return i}function zT(i){let t=document.getElementById(i),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",i),e=!0),{created:e,element:t}}let yf=!1;function bm(i,t){if(typeof window>"u"||typeof document>"u"||!Ds(window.location.host)||co[i]===t||co[i]||yf)return;co[i]=t;function e(f){return`__firebase__banner__${f}`}const n="__firebase__banner",s=BT().prod.length>0;function o(){const f=document.getElementById(n);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,m){f.setAttribute("width","24"),f.setAttribute("id",m),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{yf=!0,o()},f}function h(f,m){f.setAttribute("id",m),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function d(){const f=zT(n),m=e("text"),S=document.getElementById(m)||document.createElement("span"),M=e("learnmore"),_=document.getElementById(M)||document.createElement("a"),g=e("preprendIcon"),R=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const b=f.element;a(b),h(_,M);const L=u();l(R,g),b.append(R,S,_,L),document.body.appendChild(b)}s?(S.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(an())}function GT(){var t;const i=(t=Mc())==null?void 0:t.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function XT(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function qT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $T(){const i=an();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function jT(){return!GT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function KT(){try{return typeof indexedDB=="object"}catch{return!1}}function YT(){return new Promise((i,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var s;t(((s=r.error)==null?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="FirebaseError";class Ei extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=JT,Object.setPrototypeOf(this,Ei.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ro.prototype.create)}}class Ro{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?QT(s,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ei(r,a,n)}}function QT(i,t){return i.replace(ZT,(e,n)=>{const r=t[n];return r!=null?String(r):`<${n}?>`})}const ZT=/\{\$([^}]+)}/g;function tM(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}function xr(i,t){if(i===t)return!0;const e=Object.keys(i),n=Object.keys(t);for(const r of e){if(!n.includes(r))return!1;const s=i[r],o=t[r];if(Ef(s)&&Ef(o)){if(!xr(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!e.includes(r))return!1;return!0}function Ef(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(i){const t=[];for(const[e,n]of Object.entries(i))Array.isArray(n)?n.forEach(r=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function eM(i,t){const e=new nM(i,t);return e.subscribe.bind(e)}class nM{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(n=>{this.error(n)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(t===void 0&&e===void 0&&n===void 0)throw new Error("Missing Observer.");iM(t,["next","error","complete"])?r=t:r={next:t,error:e,complete:n},r.next===void 0&&(r.next=xl),r.error===void 0&&(r.error=xl),r.complete===void 0&&(r.complete=xl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iM(i,t){if(typeof i!="object"||i===null)return!1;for(const e of t)if(e in i&&typeof i[e]=="function")return!0;return!1}function xl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(i){return i&&i._delegate?i._delegate:i}class Tr{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new VT;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),n=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(oM(t))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(t=dr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=dr){return this.instances.has(t)}getOptions(t=dr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);n===a&&o.resolve(r)}return r}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),r=this.onInitCallbacks.get(n)??new Set;r.add(t),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&t(s,n),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:sM(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=dr){return this.component?this.component.multipleInstances?t:dr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sM(i){return i===dr?void 0:i}function oM(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new rM(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ee||(ee={}));const cM={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},lM=ee.INFO,uM={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},hM=(i,t,...e)=>{if(t<i.logLevel)return;const n=new Date().toISOString(),r=uM[t];if(r)console[r](`[${n}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eh{constructor(t){this.name=t,this._logLevel=lM,this._logHandler=hM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ee))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?cM[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...t),this._logHandler(this,ee.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...t),this._logHandler(this,ee.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...t),this._logHandler(this,ee.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...t),this._logHandler(this,ee.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...t),this._logHandler(this,ee.ERROR,...t)}}const dM=(i,t)=>t.some(e=>i instanceof e);let Sf,xf;function fM(){return Sf||(Sf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pM(){return xf||(xf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rm=new WeakMap,fu=new WeakMap,Cm=new WeakMap,Tl=new WeakMap,nh=new WeakMap;function mM(i){const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{e(ki(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Rm.set(e,i)}).catch(()=>{}),nh.set(t,i),t}function gM(i){if(fu.has(i))return;const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{e(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});fu.set(i,t)}let pu={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return fu.get(i);if(t==="objectStoreNames")return i.objectStoreNames||Cm.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ki(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function _M(i){pu=i(pu)}function vM(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=i.call(Ml(this),t,...e);return Cm.set(n,t.sort?t.sort():[t]),ki(n)}:pM().includes(i)?function(...t){return i.apply(Ml(this),t),ki(Rm.get(this))}:function(...t){return ki(i.apply(Ml(this),t))}}function yM(i){return typeof i=="function"?vM(i):(i instanceof IDBTransaction&&gM(i),dM(i,fM())?new Proxy(i,pu):i)}function ki(i){if(i instanceof IDBRequest)return mM(i);if(Tl.has(i))return Tl.get(i);const t=yM(i);return t!==i&&(Tl.set(i,t),nh.set(t,i)),t}const Ml=i=>nh.get(i);function EM(i,t,{blocked:e,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,t),a=ki(o);return n&&o.addEventListener("upgradeneeded",l=>{n(ki(o.result),l.oldVersion,l.newVersion,ki(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const SM=["get","getKey","getAll","getAllKeys","count"],xM=["put","add","delete","clear"],Al=new Map;function Tf(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(Al.get(t))return Al.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,r=xM.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(r||SM.includes(e)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),r&&l.done]))[0]};return Al.set(t,s),s}_M(i=>({...i,get:(t,e,n)=>Tf(t,e)||i.get(t,e,n),has:(t,e)=>!!Tf(t,e)||i.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(MM(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function MM(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const mu="@firebase/app",Mf="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new eh("@firebase/app"),AM="@firebase/app-compat",wM="@firebase/analytics-compat",bM="@firebase/analytics",RM="@firebase/app-check-compat",CM="@firebase/app-check",IM="@firebase/auth",PM="@firebase/auth-compat",DM="@firebase/database",LM="@firebase/data-connect",NM="@firebase/database-compat",UM="@firebase/functions",OM="@firebase/functions-compat",FM="@firebase/installations",VM="@firebase/installations-compat",kM="@firebase/messaging",BM="@firebase/messaging-compat",zM="@firebase/performance",HM="@firebase/performance-compat",GM="@firebase/remote-config",WM="@firebase/remote-config-compat",XM="@firebase/storage",qM="@firebase/storage-compat",$M="@firebase/firestore",jM="@firebase/ai",KM="@firebase/firestore-compat",YM="firebase",JM="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="[DEFAULT]",QM={[mu]:"fire-core",[AM]:"fire-core-compat",[bM]:"fire-analytics",[wM]:"fire-analytics-compat",[CM]:"fire-app-check",[RM]:"fire-app-check-compat",[IM]:"fire-auth",[PM]:"fire-auth-compat",[DM]:"fire-rtdb",[LM]:"fire-data-connect",[NM]:"fire-rtdb-compat",[UM]:"fire-fn",[OM]:"fire-fn-compat",[FM]:"fire-iid",[VM]:"fire-iid-compat",[kM]:"fire-fcm",[BM]:"fire-fcm-compat",[zM]:"fire-perf",[HM]:"fire-perf-compat",[GM]:"fire-rc",[WM]:"fire-rc-compat",[XM]:"fire-gcs",[qM]:"fire-gcs-compat",[$M]:"fire-fst",[KM]:"fire-fst-compat",[jM]:"fire-vertex","fire-js":"fire-js",[YM]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new Map,ZM=new Map,_u=new Map;function Af(i,t){try{i.container.addComponent(t)}catch(e){mi.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function ys(i){const t=i.name;if(_u.has(t))return mi.debug(`There were multiple attempts to register component ${t}.`),!1;_u.set(t,i);for(const e of ec.values())Af(e,i);for(const e of ZM.values())Af(e,i);return!0}function ih(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}function Un(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bi=new Ro("app","Firebase",tA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Bi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=JM;function Im(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const n={name:gu,automaticDataCollectionEnabled:!0,...t},r=n.name;if(typeof r!="string"||!r)throw Bi.create("bad-app-name",{appName:String(r)});if(e||(e=Mm()),!e)throw Bi.create("no-options");const s=ec.get(r);if(s){if(xr(e,s.options)&&xr(n,s.config))return s;throw Bi.create("duplicate-app",{appName:r})}const o=new aM(r);for(const l of _u.values())o.addComponent(l);const a=new eA(e,n,o);return ec.set(r,a),a}function Pm(i=gu){const t=ec.get(i);if(!t&&i===gu&&Mm())return Im();if(!t)throw Bi.create("no-app",{appName:i});return t}function zi(i,t,e){let n=QM[i]??i;e&&(n+=`-${e}`);const r=n.match(/\s|\//),s=t.match(/\s|\//);if(r||s){const o=[`Unable to register library "${n}" with version "${t}":`];r&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&s&&o.push("and"),s&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),mi.warn(o.join(" "));return}ys(new Tr(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="firebase-heartbeat-database",iA=1,vo="firebase-heartbeat-store";let wl=null;function Dm(){return wl||(wl=EM(nA,iA,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(vo)}catch(e){console.warn(e)}}}}).catch(i=>{throw Bi.create("idb-open",{originalErrorMessage:i.message})})),wl}async function rA(i){try{const e=(await Dm()).transaction(vo),n=await e.objectStore(vo).get(Lm(i));return await e.done,n}catch(t){if(t instanceof Ei)mi.warn(t.message);else{const e=Bi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});mi.warn(e.message)}}}async function wf(i,t){try{const n=(await Dm()).transaction(vo,"readwrite");await n.objectStore(vo).put(t,Lm(i)),await n.done}catch(e){if(e instanceof Ei)mi.warn(e.message);else{const n=Bi.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});mi.warn(n.message)}}}function Lm(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=1024,oA=30;class aA{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new lA(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bf();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>oA){const o=uA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){mi.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bf(),{heartbeatsToSend:n,unsentEntries:r}=cA(this._heartbeatsCache.heartbeats),s=tc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return mi.warn(e),""}}}function bf(){return new Date().toISOString().substring(0,10)}function cA(i,t=sA){const e=[];let n=i.slice();for(const r of i){const s=e.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Rf(e)>t){s.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),Rf(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class lA{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KT()?YT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await rA(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return wf(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return wf(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function Rf(i){return tc(JSON.stringify({version:2,heartbeats:i})).length}function uA(i){if(i.length===0)return-1;let t=0,e=i[0].date;for(let n=1;n<i.length;n++)i[n].date<e&&(e=i[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(i){ys(new Tr("platform-logger",t=>new TM(t),"PRIVATE")),ys(new Tr("heartbeat",t=>new aA(t),"PRIVATE")),zi(mu,Mf,i),zi(mu,Mf,"esm2020"),zi("fire-js","")}hA("");var dA="firebase",fA="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zi(dA,fA,"app");function Nm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pA=Nm,Um=new Ro("auth","Firebase",Nm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=new eh("@firebase/auth");function mA(i,...t){nc.logLevel<=ee.WARN&&nc.warn(`Auth (${Ls}): ${i}`,...t)}function Ua(i,...t){nc.logLevel<=ee.ERROR&&nc.error(`Auth (${Ls}): ${i}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(i,...t){throw rh(i,...t)}function jn(i,...t){return rh(i,...t)}function Om(i,t,e){const n={...pA(),[t]:e};return new Ro("auth","Firebase",n).create(t,{appName:i.name})}function Hi(i){return Om(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rh(i,...t){if(typeof i!="string"){const e=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=i.name),i._errorFactory.create(e,...n)}return Um.create(i,...t)}function Vt(i,t,...e){if(!i)throw rh(t,...e)}function ui(i){const t="INTERNAL ASSERTION FAILED: "+i;throw Ua(t),new Error(t)}function _i(i,t){i||ui(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function gA(){return Cf()==="http:"||Cf()==="https:"}function Cf(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gA()||XT()||"connection"in navigator)?navigator.onLine:!0}function vA(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t,e){this.shortDelay=t,this.longDelay=e,_i(e>t,"Short delay should be less than long delay!"),this.isMobile=HT()||qT()}get(){return _A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(i,t){_i(i.emulator,"Emulator should always be set here");const{url:e}=i.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ui("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ui("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ui("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],SA=new Io(3e4,6e4);function Ac(i,t){return i.tenantId&&!t.tenantId?{...t,tenantId:i.tenantId}:t}async function Ns(i,t,e,n,r={}){return Vm(i,r,async()=>{let s={},o={};n&&(t==="GET"?o=n:s={body:JSON.stringify(n)});const a=Co({key:i.config.apiKey,...o}).slice(1),l=await i._getAdditionalHeaders();l["Content-Type"]="application/json",i.languageCode&&(l["X-Firebase-Locale"]=i.languageCode);const u={method:t,headers:l,...s};return WT()||(u.referrerPolicy="no-referrer"),i.emulatorConfig&&Ds(i.emulatorConfig.host)&&(u.credentials="include"),Fm.fetch()(await Bm(i,i.config.apiHost,e,a),u)})}async function Vm(i,t,e){i._canInitEmulator=!1;const n={...yA,...t};try{const r=new xA(i),s=await Promise.race([e(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xa(i,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xa(i,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xa(i,"email-already-in-use",o);if(l==="USER_DISABLED")throw xa(i,"user-disabled",o);const h=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Om(i,h,u);gi(i,h)}}catch(r){if(r instanceof Ei)throw r;gi(i,"network-request-failed",{message:String(r)})}}async function km(i,t,e,n,r={}){const s=await Ns(i,t,e,n,r);return"mfaPendingCredential"in s&&gi(i,"multi-factor-auth-required",{_serverResponse:s}),s}async function Bm(i,t,e,n){const r=`${t}${e}?${n}`,s=i,o=s.config.emulator?sh(i.config,r):`${i.config.apiScheme}://${r}`;return EA.includes(e)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class xA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,n)=>{this.timer=setTimeout(()=>n(jn(this.auth,"network-request-failed")),SA.get())})}}function xa(i,t,e){const n={appName:i.name};e.email&&(n.email=e.email),e.phoneNumber&&(n.phoneNumber=e.phoneNumber);const r=jn(i,t,n);return r.customData._tokenResponse=e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(i,t){return Ns(i,"POST","/v1/accounts:delete",t)}async function ic(i,t){return Ns(i,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function MA(i,t=!1){const e=zn(i),n=await e.getIdToken(t),r=oh(n);Vt(r&&r.exp&&r.auth_time&&r.iat,e.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:n,authTime:lo(bl(r.auth_time)),issuedAtTime:lo(bl(r.iat)),expirationTime:lo(bl(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bl(i){return Number(i)*1e3}function oh(i){const[t,e,n]=i.split(".");if(t===void 0||e===void 0||n===void 0)return Ua("JWT malformed, contained fewer than 3 sections"),null;try{const r=xm(e);return r?JSON.parse(r):(Ua("Failed to decode base64 JWT payload"),null)}catch(r){return Ua("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function If(i){const t=oh(i);return Vt(t,"internal-error"),Vt(typeof t.exp<"u","internal-error"),Vt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(i,t,e=!1){if(e)return t;try{return await t}catch(n){throw n instanceof Ei&&AA(n)&&i.auth.currentUser===i&&await i.auth.signOut(),n}}function AA({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=lo(this.lastLoginAt),this.creationTime=lo(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(i){var d;const t=i.auth,e=await i.getIdToken(),n=await yo(i,ic(t,{idToken:e}));Vt(n==null?void 0:n.users.length,t,"internal-error");const r=n.users[0];i._notifyReloadListener(r);const s=(d=r.providerUserInfo)!=null&&d.length?zm(r.providerUserInfo):[],o=RA(i.providerData,s),a=i.isAnonymous,l=!(i.email&&r.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new yu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(i,h)}async function bA(i){const t=zn(i);await rc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function RA(i,t){return[...i.filter(n=>!t.some(r=>r.providerId===n.providerId)),...t]}function zm(i){return i.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(i,t){const e=await Vm(i,{},async()=>{const n=Co({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=i.config,o=await Bm(i,r,"/v1/token",`key=${s}`),a=await i._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:n};return i.emulatorConfig&&Ds(i.emulatorConfig.host)&&(l.credentials="include"),Fm.fetch()(o,l)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function IA(i,t){return Ns(i,"POST","/v2/accounts:revokeToken",Ac(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Vt(t.idToken,"internal-error"),Vt(typeof t.idToken<"u","internal-error"),Vt(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):If(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){Vt(t.length!==0,"internal-error");const e=If(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(Vt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:s}=await CA(t,e);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:s}=e,o=new os;return n&&(Vt(typeof n=="string","internal-error",{appName:t}),o.refreshToken=n),r&&(Vt(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),s&&(Vt(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return ui("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(i,t){Vt(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class kn{constructor({uid:t,auth:e,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new wA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new yu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await yo(this,this.stsTokenManager.getToken(this.auth,t));return Vt(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return MA(this,t)}reload(){return bA(this)}_assign(t){this!==t&&(Vt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new kn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){Vt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await rc(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Un(this.auth.app))return Promise.reject(Hi(this.auth));const t=await this.getIdToken();return await yo(this,TA(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const n=e.displayName??void 0,r=e.email??void 0,s=e.phoneNumber??void 0,o=e.photoURL??void 0,a=e.tenantId??void 0,l=e._redirectEventId??void 0,u=e.createdAt??void 0,h=e.lastLoginAt??void 0,{uid:d,emailVerified:f,isAnonymous:m,providerData:S,stsTokenManager:M}=e;Vt(d&&M,t,"internal-error");const _=os.fromJSON(this.name,M);Vt(typeof d=="string",t,"internal-error"),Pi(n,t.name),Pi(r,t.name),Vt(typeof f=="boolean",t,"internal-error"),Vt(typeof m=="boolean",t,"internal-error"),Pi(s,t.name),Pi(o,t.name),Pi(a,t.name),Pi(l,t.name),Pi(u,t.name),Pi(h,t.name);const g=new kn({uid:d,auth:t,email:r,emailVerified:f,displayName:n,isAnonymous:m,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:_,createdAt:u,lastLoginAt:h});return S&&Array.isArray(S)&&(g.providerData=S.map(R=>({...R}))),l&&(g._redirectEventId=l),g}static async _fromIdTokenResponse(t,e,n=!1){const r=new os;r.updateFromServerResponse(e);const s=new kn({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await rc(s),s}static async _fromGetAccountInfoResponse(t,e,n){const r=e.users[0];Vt(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?zm(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new os;a.updateFromIdToken(n);const l=new kn({uid:r.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new yu(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map;function hi(i){_i(i instanceof Function,"Expected a class definition");let t=Pf.get(i);return t?(_i(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,Pf.set(i,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Hm.type="NONE";const Df=Hm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(i,t,e){return`firebase:${i}:${t}:${e}`}class as{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=Oa(this.userKey,r.apiKey,s),this.fullPersistenceKey=Oa("persistence",r.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await ic(this.auth,{idToken:t}).catch(()=>{});return e?kn._fromGetAccountInfoResponse(this.auth,e,t):null}return kn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new as(hi(Df),t,n);const r=(await Promise.all(e.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||hi(Df);const o=Oa(n,t.config.apiKey,t.name);let a=null;for(const u of e)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const f=await ic(t,{idToken:h}).catch(()=>{});if(!f)break;d=await kn._fromGetAccountInfoResponse(t,f,h)}else d=kn._fromJSON(t,h);u!==s&&(a=d),s=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new as(s,t,n):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(e.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new as(s,t,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(qm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Gm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(jm(t))return"Blackberry";if(Km(t))return"Webos";if(Wm(t))return"Safari";if((t.includes("chrome/")||Xm(t))&&!t.includes("edge/"))return"Chrome";if($m(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=i.match(e);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Gm(i=an()){return/firefox\//i.test(i)}function Wm(i=an()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Xm(i=an()){return/crios\//i.test(i)}function qm(i=an()){return/iemobile/i.test(i)}function $m(i=an()){return/android/i.test(i)}function jm(i=an()){return/blackberry/i.test(i)}function Km(i=an()){return/webos/i.test(i)}function ah(i=an()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function PA(i=an()){var t;return ah(i)&&!!((t=window.navigator)!=null&&t.standalone)}function DA(){return $T()&&document.documentMode===10}function Ym(i=an()){return ah(i)||$m(i)||Km(i)||jm(i)||/windows phone/i.test(i)||qm(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(i,t=[]){let e;switch(i){case"Browser":e=Lf(an());break;case"Worker":e=`${Lf(an())}-${i}`;break;default:e=i}const n=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Ls}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const r of e)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(i,t={}){return Ns(i,"GET","/v2/passwordPolicy",Ac(i,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=6;class OA{constructor(t){var n;const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??UA,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=t.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let n;for(let r=0;r<t.length;r++)n=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,r,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nf(this),this.idTokenSubscription=new Nf(this),this.beforeStateQueue=new LA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Um,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=hi(e)),this._initializationPromise=this.queue(async()=>{var n,r,s;if(!this._deleted&&(this.persistenceManager=await as.create(this,t),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await ic(this,{idToken:t}),n=await kn._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var s;if(Un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let n=e,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=n==null?void 0:n._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(n=l.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return Vt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await rc(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=vA()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Un(this.app))return Promise.reject(Hi(this));const e=t?zn(t):null;return e&&Vt(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Vt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Un(this.app)?Promise.reject(Hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Un(this.app)?Promise.reject(Hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await NA(this),e=new OA(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ro("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged(()=>{n(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(n.tenantId=this.tenantId),await IA(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return t===null?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&hi(t)||this._popupRedirectResolver;Vt(e,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[hi(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Vt(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof e=="function"){const l=t.addObserver(e,n,r);return()=>{o=!0,l()}}else{const l=t.addObserver(e);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Vt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Jm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;if(Un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&mA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function wc(i){return zn(i)}class Nf{constructor(t){this.auth=t,this.observer=null,this.addObserver=eM(e=>this.observer=e)}get next(){return Vt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VA(i){ch=i}function kA(i){return ch.loadJS(i)}function BA(){return ch.gapiScript}function zA(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(i,t){const e=ih(i,"auth");if(e.isInitialized()){const r=e.getImmediate(),s=e.getOptions();if(xr(s,t??{}))return r;gi(r,"already-initialized")}return e.initialize({options:t})}function GA(i,t){const e=(t==null?void 0:t.persistence)||[],n=(Array.isArray(e)?e:[e]).map(hi);t!=null&&t.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(n,t==null?void 0:t.popupRedirectResolver)}function WA(i,t,e){const n=wc(i);Vt(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const r=!1,s=Qm(t),{host:o,port:a}=XA(t),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){Vt(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),Vt(xr(u,n.config.emulator)&&xr(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,Ds(o)?(wm(`${s}//${o}${l}`),bm("Auth",!0)):qA()}function Qm(i){const t=i.indexOf(":");return t<0?"":i.substr(0,t+1)}function XA(i){const t=Qm(i),e=/(\/\/)?([^?#/]+)/.exec(i.substr(t.length));if(!e)return{host:"",port:null};const n=e[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const s=r[1];return{host:s,port:Uf(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:Uf(o)}}}function Uf(i){if(!i)return null;const t=Number(i);return isNaN(t)?null:t}function qA(){function i(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ui("not implemented")}_getIdTokenResponse(t){return ui("not implemented")}_linkToIdToken(t,e){return ui("not implemented")}_getReauthenticationResolver(t){return ui("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(i,t){return km(i,"POST","/v1/accounts:signInWithIdp",Ac(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="http://localhost";class Mr extends Zm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Mr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):gi("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:n,signInMethod:r,...s}=e;if(!n||!r)return null;const o=new Mr(n,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return cs(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,cs(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,cs(t,e)}buildRequest(){const t={requestUri:$A,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Co(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends tg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends Po{constructor(){super("facebook.com")}static credential(t){return Mr._fromParams({providerId:Li.PROVIDER_ID,signInMethod:Li.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Li.credentialFromTaggedObject(t)}static credentialFromError(t){return Li.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Li.credential(t.oauthAccessToken)}catch{return null}}}Li.FACEBOOK_SIGN_IN_METHOD="facebook.com";Li.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Po{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Mr._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ni.credentialFromTaggedObject(t)}static credentialFromError(t){return Ni.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Ni.credential(e,n)}catch{return null}}}Ni.GOOGLE_SIGN_IN_METHOD="google.com";Ni.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends Po{constructor(){super("github.com")}static credential(t){return Mr._fromParams({providerId:Ui.PROVIDER_ID,signInMethod:Ui.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ui.credentialFromTaggedObject(t)}static credentialFromError(t){return Ui.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ui.credential(t.oauthAccessToken)}catch{return null}}}Ui.GITHUB_SIGN_IN_METHOD="github.com";Ui.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Po{constructor(){super("twitter.com")}static credential(t,e){return Mr._fromParams({providerId:Oi.PROVIDER_ID,signInMethod:Oi.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Oi.credentialFromTaggedObject(t)}static credentialFromError(t){return Oi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Oi.credential(e,n)}catch{return null}}}Oi.TWITTER_SIGN_IN_METHOD="twitter.com";Oi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(i,t){return km(i,"POST","/v1/accounts:signUp",Ac(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const s=await kn._fromIdTokenResponse(t,n,r),o=Of(n);return new $i({user:s,providerId:o,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Of(n);return new $i({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Of(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KA(i){var r;if(Un(i.app))return Promise.reject(Hi(i));const t=wc(i);if(await t._initializationPromise,(r=t.currentUser)!=null&&r.isAnonymous)return new $i({user:t.currentUser,providerId:null,operationType:"signIn"});const e=await jA(t,{returnSecureToken:!0}),n=await $i._fromIdTokenResponse(t,"signIn",e,!0);return await t._updateCurrentUser(n.user),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc extends Ei{constructor(t,e,n,r){super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,sc.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new sc(t,e,n,r)}}function eg(i,t,e,n){return(t==="reauthenticate"?e._getReauthenticationResolver(i):e._getIdTokenResponse(i)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?sc._fromErrorAndOperation(i,s,t,n):s})}async function YA(i,t,e=!1){const n=await yo(i,t._linkToIdToken(i.auth,await i.getIdToken()),e);return $i._forOperation(i,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(i,t,e=!1){const{auth:n}=i;if(Un(n.app))return Promise.reject(Hi(n));const r="reauthenticate";try{const s=await yo(i,eg(n,r,t,i),e);Vt(s.idToken,n,"internal-error");const o=oh(s.idToken);Vt(o,n,"internal-error");const{sub:a}=o;return Vt(i.uid===a,n,"user-mismatch"),$i._forOperation(i,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&gi(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(i,t,e=!1){if(Un(i.app))return Promise.reject(Hi(i));const n="signIn",r=await eg(i,n,t),s=await $i._fromIdTokenResponse(i,n,r);return e||await i._updateCurrentUser(s.user),s}function ZA(i,t,e,n){return zn(i).onIdTokenChanged(t,e,n)}function tw(i,t,e){return zn(i).beforeAuthStateChanged(t,e)}const oc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(oc,"1"),this.storage.removeItem(oc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=1e3,nw=10;class ig extends ng{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ym(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const n=t.key;e?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(n);!e&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);DA()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,nw):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},ew)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ig.type="LOCAL";const iw=ig;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg extends ng{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}rg.type="SESSION";const sg=rg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(i){return Promise.all(i.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(r=>r.isListeningto(t));if(e)return e;const n=new bc(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:s}=e.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map(async u=>u(e.origin,s)),l=await rw(a);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:l})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(i="",t=10){let e="";for(let n=0;n<t;n++)e+=Math.floor(Math.random()*10);return i+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=lh("",20);r.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return window}function ow(i){Kn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function aw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cw(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function lw(){return og()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="firebaseLocalStorageDb",uw=1,ac="firebaseLocalStorage",cg="fbase_key";class Do{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Rc(i,t){return i.transaction([ac],t?"readwrite":"readonly").objectStore(ac)}function hw(){const i=indexedDB.deleteDatabase(ag);return new Do(i).toPromise()}function Eu(){const i=indexedDB.open(ag,uw);return new Promise((t,e)=>{i.addEventListener("error",()=>{e(i.error)}),i.addEventListener("upgradeneeded",()=>{const n=i.result;try{n.createObjectStore(ac,{keyPath:cg})}catch(r){e(r)}}),i.addEventListener("success",async()=>{const n=i.result;n.objectStoreNames.contains(ac)?t(n):(n.close(),await hw(),t(await Eu()))})})}async function Ff(i,t,e){const n=Rc(i,!0).put({[cg]:t,value:e});return new Do(n).toPromise()}async function dw(i,t){const e=Rc(i,!1).get(t),n=await new Do(e).toPromise();return n===void 0?null:n.value}function Vf(i,t){const e=Rc(i,!0).delete(t);return new Do(e).toPromise()}const fw=800,pw=3;class lg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eu(),this.db)}async _withRetries(t){let e=0;for(;;)try{const n=await this._openDb();return await t(n)}catch(n){if(e++>pw)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return og()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bc._getInstance(lw()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aw(),!this.activeServiceWorker)return;this.sender=new sw(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(e=t[0])!=null&&e.fulfilled&&(n=t[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||cw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Eu();return await Ff(t,oc,"1"),await Vf(t,oc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ff(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(n=>dw(n,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Vf(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const s=Rc(r,!1).getAll();return new Do(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],n=new Set;if(t.length!==0)for(const{fbase_key:r,value:s}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lg.type="LOCAL";const mw=lg;new Io(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(i,t){return t?hi(t):(Vt(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends Zm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return cs(t,this._buildIdpRequest())}_linkToIdToken(t,e){return cs(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return cs(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function _w(i){return QA(i.auth,new uh(i),i.bypassAuthState)}function vw(i){const{auth:t,user:e}=i;return Vt(e,t,"internal-error"),JA(e,new uh(i),i.bypassAuthState)}async function yw(i){const{auth:t,user:e}=i;return Vt(e,t,"internal-error"),YA(e,new uh(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t,e,n,r,s=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:e,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return _w;case"linkViaPopup":case"linkViaRedirect":return yw;case"reauthViaPopup":case"reauthViaRedirect":return vw;default:gi(this.auth,"internal-error")}}resolve(t){_i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){_i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=new Io(2e3,1e4);class ns extends ug{constructor(t,e,n,r,s){super(t,e,r,s),this.provider=n,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Vt(t,this.auth,"internal-error"),t}async onExecution(){_i(this.filter.length===1,"Popup operations only handle one event");const t=lh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;if((n=(e=this.authWindow)==null?void 0:e.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Ew.get())};t()}}ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="pendingRedirect",Fa=new Map;class xw extends ug{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Fa.get(this.auth._key());if(!t){try{const n=await Tw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Fa.set(this.auth._key(),t)}return this.bypassAuthState||Fa.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tw(i,t){const e=ww(t),n=Aw(i);if(!await n._isAvailable())return!1;const r=await n._get(e)==="true";return await n._remove(e),r}function Mw(i,t){Fa.set(i._key(),t)}function Aw(i){return hi(i._redirectPersistence)}function ww(i){return Oa(Sw,i.config.apiKey,i.name)}async function bw(i,t,e=!1){if(Un(i.app))return Promise.reject(Hi(i));const n=wc(i),r=gw(n,t),o=await new xw(n,r,e).execute();return o&&!e&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=10*60*1e3;class Cw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Iw(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!hg(t)){const r=((n=t.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";e.onError(jn(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Rw&&this.cachedEventUids.clear(),this.cachedEventUids.has(kf(t))}saveEventToCache(t){this.cachedEventUids.add(kf(t)),this.lastProcessedEventTime=Date.now()}}function kf(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(t=>t).join("-")}function hg({type:i,error:t}){return i==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Iw(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hg(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pw(i,t={}){return Ns(i,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lw=/^https?/;async function Nw(i){if(i.config.emulator)return;const{authorizedDomains:t}=await Pw(i);for(const e of t)try{if(Uw(e))return}catch{}gi(i,"unauthorized-domain")}function Uw(i){const t=vu(),{protocol:e,hostname:n}=new URL(t);if(i.startsWith("chrome-extension://")){const o=new URL(i);return o.hostname===""&&n===""?e==="chrome-extension:"&&i.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===n}if(!Lw.test(e))return!1;if(Dw.test(i))return n===i;const r=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=new Io(3e4,6e4);function Bf(){const i=Kn().___jsl;if(i!=null&&i.H){for(const t of Object.keys(i.H))if(i.H[t].r=i.H[t].r||[],i.H[t].L=i.H[t].L||[],i.H[t].r=[...i.H[t].L],i.CP)for(let e=0;e<i.CP.length;e++)i.CP[e]=null}}function Fw(i){return new Promise((t,e)=>{var r,s,o;function n(){Bf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Bf(),e(jn(i,"network-request-failed"))},timeout:Ow.get()})}if((s=(r=Kn().gapi)==null?void 0:r.iframes)!=null&&s.Iframe)t(gapi.iframes.getContext());else if((o=Kn().gapi)!=null&&o.load)n();else{const a=zA("iframefcb");return Kn()[a]=()=>{gapi.load?n():e(jn(i,"network-request-failed"))},kA(`${BA()}?onload=${a}`).catch(l=>e(l))}}).catch(t=>{throw Va=null,t})}let Va=null;function Vw(i){return Va=Va||Fw(i),Va}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=new Io(5e3,15e3),Bw="__/auth/iframe",zw="emulator/auth/iframe",Hw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ww(i){const t=i.config;Vt(t.authDomain,i,"auth-domain-config-required");const e=t.emulator?sh(t,zw):`https://${i.config.authDomain}/${Bw}`,n={apiKey:t.apiKey,appName:i.name,v:Ls},r=Gw.get(i.config.apiHost);r&&(n.eid=r);const s=i._getFrameworks();return s.length&&(n.fw=s.join(",")),`${e}?${Co(n).slice(1)}`}async function Xw(i){const t=await Vw(i),e=Kn().gapi;return Vt(e,i,"internal-error"),t.open({where:document.body,url:Ww(i),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hw,dontclear:!0},n=>new Promise(async(r,s)=>{await n.restyle({setHideOnLeave:!1});const o=jn(i,"network-request-failed"),a=Kn().setTimeout(()=>{s(o)},kw.get());function l(){Kn().clearTimeout(a),r(n)}n.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$w=500,jw=600,Kw="_blank",Yw="http://localhost";class zf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jw(i,t,e,n=$w,r=jw){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const l={...qw,width:n.toString(),height:r.toString(),top:s,left:o},u=an().toLowerCase();e&&(a=Xm(u)?Kw:e),Gm(u)&&(t=t||Yw,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[m,S])=>`${f}${m}=${S},`,"");if(PA(u)&&a!=="_self")return Qw(t||"",a),new zf(null);const d=window.open(t||"",a,h);Vt(d,i,"popup-blocked");try{d.focus()}catch{}return new zf(d)}function Qw(i,t){const e=document.createElement("a");e.href=i,e.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="__/auth/handler",tb="emulator/auth/handler",eb=encodeURIComponent("fac");async function Hf(i,t,e,n,r,s){Vt(i.config.authDomain,i,"auth-domain-config-required"),Vt(i.config.apiKey,i,"invalid-api-key");const o={apiKey:i.config.apiKey,appName:i.name,authType:e,redirectUrl:n,v:Ls,eventId:r};if(t instanceof tg){t.setDefaultLanguage(i.languageCode),o.providerId=t.providerId||"",tM(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(t instanceof Po){const h=t.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}i.tenantId&&(o.tid=i.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await i._getAppCheckToken(),u=l?`#${eb}=${encodeURIComponent(l)}`:"";return`${nb(i)}?${Co(a).slice(1)}${u}`}function nb({config:i}){return i.emulator?sh(i,tb):`https://${i.authDomain}/${Zw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="webStorageSupport";class ib{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sg,this._completeRedirectFn=bw,this._overrideRedirectResult=Mw}async _openPopup(t,e,n,r){var o;_i((o=this.eventManagers[t._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Hf(t,e,n,vu(),r);return Jw(t,s,lh())}async _openRedirect(t,e,n,r){await this._originValidation(t);const s=await Hf(t,e,n,vu(),r);return ow(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:r,promise:s}=this.eventManagers[e];return r?Promise.resolve(r):(_i(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await Xw(t),n=new Cw(t);return e.register("authEvent",r=>(Vt(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Rl,{type:Rl},r=>{var o;const s=(o=r==null?void 0:r[0])==null?void 0:o[Rl];s!==void 0&&e(!!s),gi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Nw(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ym()||Wm()||ah()}}const rb=ib;var Gf="@firebase/auth",Wf="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(n=>{t((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Vt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ab(i){ys(new Tr("auth",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;Vt(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:a,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jm(i)},u=new FA(n,r,s,l);return GA(u,e),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider("auth-internal").initialize()})),ys(new Tr("auth-internal",t=>{const e=wc(t.getProvider("auth").getImmediate());return(n=>new sb(n))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),zi(Gf,Wf,ob(i)),zi(Gf,Wf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=5*60,lb=Am("authIdTokenMaxAge")||cb;let Xf=null;const ub=i=>async t=>{const e=t&&await t.getIdTokenResult(),n=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>lb)return;const r=e==null?void 0:e.token;Xf!==r&&(Xf=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function hb(i=Pm()){const t=ih(i,"auth");if(t.isInitialized())return t.getImmediate();const e=HA(i,{popupRedirectResolver:rb,persistence:[mw,iw,sg]}),n=Am("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const o=ub(s.toString());tw(e,o,()=>o(e.currentUser)),ZA(e,a=>o(a))}}const r=Tm("auth");return r&&WA(e,`http://${r}`),e}function db(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}VA({loadJS(i){return new Promise((t,e)=>{const n=document.createElement("script");n.setAttribute("src",i),n.onload=t,n.onerror=r=>{const s=jn("internal-error");s.customData=r,e(s)},n.type="text/javascript",n.charset="UTF-8",db().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ab("Browser");var qf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hh;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,x){function v(){}v.prototype=x.prototype,T.F=x.prototype,T.prototype=new v,T.prototype.constructor=T,T.D=function(y,A,I){for(var w=Array(arguments.length-2),B=2;B<arguments.length;B++)w[B-2]=arguments[B];return x.prototype[A].apply(y,w)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(n,e),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(T,x,v){v||(v=0);const y=Array(16);if(typeof x=="string")for(var A=0;A<16;++A)y[A]=x.charCodeAt(v++)|x.charCodeAt(v++)<<8|x.charCodeAt(v++)<<16|x.charCodeAt(v++)<<24;else for(A=0;A<16;++A)y[A]=x[v++]|x[v++]<<8|x[v++]<<16|x[v++]<<24;x=T.g[0],v=T.g[1],A=T.g[2];let I=T.g[3],w;w=x+(I^v&(A^I))+y[0]+3614090360&4294967295,x=v+(w<<7&4294967295|w>>>25),w=I+(A^x&(v^A))+y[1]+3905402710&4294967295,I=x+(w<<12&4294967295|w>>>20),w=A+(v^I&(x^v))+y[2]+606105819&4294967295,A=I+(w<<17&4294967295|w>>>15),w=v+(x^A&(I^x))+y[3]+3250441966&4294967295,v=A+(w<<22&4294967295|w>>>10),w=x+(I^v&(A^I))+y[4]+4118548399&4294967295,x=v+(w<<7&4294967295|w>>>25),w=I+(A^x&(v^A))+y[5]+1200080426&4294967295,I=x+(w<<12&4294967295|w>>>20),w=A+(v^I&(x^v))+y[6]+2821735955&4294967295,A=I+(w<<17&4294967295|w>>>15),w=v+(x^A&(I^x))+y[7]+4249261313&4294967295,v=A+(w<<22&4294967295|w>>>10),w=x+(I^v&(A^I))+y[8]+1770035416&4294967295,x=v+(w<<7&4294967295|w>>>25),w=I+(A^x&(v^A))+y[9]+2336552879&4294967295,I=x+(w<<12&4294967295|w>>>20),w=A+(v^I&(x^v))+y[10]+4294925233&4294967295,A=I+(w<<17&4294967295|w>>>15),w=v+(x^A&(I^x))+y[11]+2304563134&4294967295,v=A+(w<<22&4294967295|w>>>10),w=x+(I^v&(A^I))+y[12]+1804603682&4294967295,x=v+(w<<7&4294967295|w>>>25),w=I+(A^x&(v^A))+y[13]+4254626195&4294967295,I=x+(w<<12&4294967295|w>>>20),w=A+(v^I&(x^v))+y[14]+2792965006&4294967295,A=I+(w<<17&4294967295|w>>>15),w=v+(x^A&(I^x))+y[15]+1236535329&4294967295,v=A+(w<<22&4294967295|w>>>10),w=x+(A^I&(v^A))+y[1]+4129170786&4294967295,x=v+(w<<5&4294967295|w>>>27),w=I+(v^A&(x^v))+y[6]+3225465664&4294967295,I=x+(w<<9&4294967295|w>>>23),w=A+(x^v&(I^x))+y[11]+643717713&4294967295,A=I+(w<<14&4294967295|w>>>18),w=v+(I^x&(A^I))+y[0]+3921069994&4294967295,v=A+(w<<20&4294967295|w>>>12),w=x+(A^I&(v^A))+y[5]+3593408605&4294967295,x=v+(w<<5&4294967295|w>>>27),w=I+(v^A&(x^v))+y[10]+38016083&4294967295,I=x+(w<<9&4294967295|w>>>23),w=A+(x^v&(I^x))+y[15]+3634488961&4294967295,A=I+(w<<14&4294967295|w>>>18),w=v+(I^x&(A^I))+y[4]+3889429448&4294967295,v=A+(w<<20&4294967295|w>>>12),w=x+(A^I&(v^A))+y[9]+568446438&4294967295,x=v+(w<<5&4294967295|w>>>27),w=I+(v^A&(x^v))+y[14]+3275163606&4294967295,I=x+(w<<9&4294967295|w>>>23),w=A+(x^v&(I^x))+y[3]+4107603335&4294967295,A=I+(w<<14&4294967295|w>>>18),w=v+(I^x&(A^I))+y[8]+1163531501&4294967295,v=A+(w<<20&4294967295|w>>>12),w=x+(A^I&(v^A))+y[13]+2850285829&4294967295,x=v+(w<<5&4294967295|w>>>27),w=I+(v^A&(x^v))+y[2]+4243563512&4294967295,I=x+(w<<9&4294967295|w>>>23),w=A+(x^v&(I^x))+y[7]+1735328473&4294967295,A=I+(w<<14&4294967295|w>>>18),w=v+(I^x&(A^I))+y[12]+2368359562&4294967295,v=A+(w<<20&4294967295|w>>>12),w=x+(v^A^I)+y[5]+4294588738&4294967295,x=v+(w<<4&4294967295|w>>>28),w=I+(x^v^A)+y[8]+2272392833&4294967295,I=x+(w<<11&4294967295|w>>>21),w=A+(I^x^v)+y[11]+1839030562&4294967295,A=I+(w<<16&4294967295|w>>>16),w=v+(A^I^x)+y[14]+4259657740&4294967295,v=A+(w<<23&4294967295|w>>>9),w=x+(v^A^I)+y[1]+2763975236&4294967295,x=v+(w<<4&4294967295|w>>>28),w=I+(x^v^A)+y[4]+1272893353&4294967295,I=x+(w<<11&4294967295|w>>>21),w=A+(I^x^v)+y[7]+4139469664&4294967295,A=I+(w<<16&4294967295|w>>>16),w=v+(A^I^x)+y[10]+3200236656&4294967295,v=A+(w<<23&4294967295|w>>>9),w=x+(v^A^I)+y[13]+681279174&4294967295,x=v+(w<<4&4294967295|w>>>28),w=I+(x^v^A)+y[0]+3936430074&4294967295,I=x+(w<<11&4294967295|w>>>21),w=A+(I^x^v)+y[3]+3572445317&4294967295,A=I+(w<<16&4294967295|w>>>16),w=v+(A^I^x)+y[6]+76029189&4294967295,v=A+(w<<23&4294967295|w>>>9),w=x+(v^A^I)+y[9]+3654602809&4294967295,x=v+(w<<4&4294967295|w>>>28),w=I+(x^v^A)+y[12]+3873151461&4294967295,I=x+(w<<11&4294967295|w>>>21),w=A+(I^x^v)+y[15]+530742520&4294967295,A=I+(w<<16&4294967295|w>>>16),w=v+(A^I^x)+y[2]+3299628645&4294967295,v=A+(w<<23&4294967295|w>>>9),w=x+(A^(v|~I))+y[0]+4096336452&4294967295,x=v+(w<<6&4294967295|w>>>26),w=I+(v^(x|~A))+y[7]+1126891415&4294967295,I=x+(w<<10&4294967295|w>>>22),w=A+(x^(I|~v))+y[14]+2878612391&4294967295,A=I+(w<<15&4294967295|w>>>17),w=v+(I^(A|~x))+y[5]+4237533241&4294967295,v=A+(w<<21&4294967295|w>>>11),w=x+(A^(v|~I))+y[12]+1700485571&4294967295,x=v+(w<<6&4294967295|w>>>26),w=I+(v^(x|~A))+y[3]+2399980690&4294967295,I=x+(w<<10&4294967295|w>>>22),w=A+(x^(I|~v))+y[10]+4293915773&4294967295,A=I+(w<<15&4294967295|w>>>17),w=v+(I^(A|~x))+y[1]+2240044497&4294967295,v=A+(w<<21&4294967295|w>>>11),w=x+(A^(v|~I))+y[8]+1873313359&4294967295,x=v+(w<<6&4294967295|w>>>26),w=I+(v^(x|~A))+y[15]+4264355552&4294967295,I=x+(w<<10&4294967295|w>>>22),w=A+(x^(I|~v))+y[6]+2734768916&4294967295,A=I+(w<<15&4294967295|w>>>17),w=v+(I^(A|~x))+y[13]+1309151649&4294967295,v=A+(w<<21&4294967295|w>>>11),w=x+(A^(v|~I))+y[4]+4149444226&4294967295,x=v+(w<<6&4294967295|w>>>26),w=I+(v^(x|~A))+y[11]+3174756917&4294967295,I=x+(w<<10&4294967295|w>>>22),w=A+(x^(I|~v))+y[2]+718787259&4294967295,A=I+(w<<15&4294967295|w>>>17),w=v+(I^(A|~x))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+x&4294967295,T.g[1]=T.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+I&4294967295}n.prototype.v=function(T,x){x===void 0&&(x=T.length);const v=x-this.blockSize,y=this.C;let A=this.h,I=0;for(;I<x;){if(A==0)for(;I<=v;)r(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<x;)if(y[A++]=T.charCodeAt(I++),A==this.blockSize){r(this,y),A=0;break}}else for(;I<x;)if(y[A++]=T[I++],A==this.blockSize){r(this,y),A=0;break}}this.h=A,this.o+=x},n.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var x=1;x<T.length-8;++x)T[x]=0;x=this.o*8;for(var v=T.length-8;v<T.length;++v)T[v]=x&255,x/=256;for(this.v(T),T=Array(16),x=0,v=0;v<4;++v)for(let y=0;y<32;y+=8)T[x++]=this.g[v]>>>y&255;return T};function s(T,x){var v=a;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=x(T)}function o(T,x){this.h=x;const v=[];let y=!0;for(let A=T.length-1;A>=0;A--){const I=T[A]|0;y&&I==x||(v[A]=I,y=!1)}this.g=v}var a={};function l(T){return-128<=T&&T<128?s(T,function(x){return new o([x|0],x<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return d;if(T<0)return _(u(-T));const x=[];let v=1;for(let y=0;T>=v;y++)x[y]=T/v|0,v*=4294967296;return new o(x,0)}function h(T,x){if(T.length==0)throw Error("number format error: empty string");if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(T.charAt(0)=="-")return _(h(T.substring(1),x));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=u(Math.pow(x,8));let y=d;for(let I=0;I<T.length;I+=8){var A=Math.min(8,T.length-I);const w=parseInt(T.substring(I,I+A),x);A<8?(A=u(Math.pow(x,A)),y=y.j(A).add(u(w))):(y=y.j(v),y=y.add(u(w)))}return y}var d=l(0),f=l(1),m=l(16777216);i=o.prototype,i.m=function(){if(M(this))return-_(this).m();let T=0,x=1;for(let v=0;v<this.g.length;v++){const y=this.i(v);T+=(y>=0?y:4294967296+y)*x,x*=4294967296}return T},i.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(M(this))return"-"+_(this).toString(T);const x=u(Math.pow(T,6));var v=this;let y="";for(;;){const A=L(v,x).g;v=g(v,A.j(x));let I=((v.g.length>0?v.g[0]:v.h)>>>0).toString(T);if(v=A,S(v))return I+y;for(;I.length<6;)I="0"+I;y=I+y}},i.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(let x=0;x<T.g.length;x++)if(T.g[x]!=0)return!1;return!0}function M(T){return T.h==-1}i.l=function(T){return T=g(this,T),M(T)?-1:S(T)?0:1};function _(T){const x=T.g.length,v=[];for(let y=0;y<x;y++)v[y]=~T.g[y];return new o(v,~T.h).add(f)}i.abs=function(){return M(this)?_(this):this},i.add=function(T){const x=Math.max(this.g.length,T.g.length),v=[];let y=0;for(let A=0;A<=x;A++){let I=y+(this.i(A)&65535)+(T.i(A)&65535),w=(I>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);y=w>>>16,I&=65535,w&=65535,v[A]=w<<16|I}return new o(v,v[v.length-1]&-2147483648?-1:0)};function g(T,x){return T.add(_(x))}i.j=function(T){if(S(this)||S(T))return d;if(M(this))return M(T)?_(this).j(_(T)):_(_(this).j(T));if(M(T))return _(this.j(_(T)));if(this.l(m)<0&&T.l(m)<0)return u(this.m()*T.m());const x=this.g.length+T.g.length,v=[];for(var y=0;y<2*x;y++)v[y]=0;for(y=0;y<this.g.length;y++)for(let A=0;A<T.g.length;A++){const I=this.i(y)>>>16,w=this.i(y)&65535,B=T.i(A)>>>16,W=T.i(A)&65535;v[2*y+2*A]+=w*W,R(v,2*y+2*A),v[2*y+2*A+1]+=I*W,R(v,2*y+2*A+1),v[2*y+2*A+1]+=w*B,R(v,2*y+2*A+1),v[2*y+2*A+2]+=I*B,R(v,2*y+2*A+2)}for(T=0;T<x;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=x;T<2*x;T++)v[T]=0;return new o(v,0)};function R(T,x){for(;(T[x]&65535)!=T[x];)T[x+1]+=T[x]>>>16,T[x]&=65535,x++}function b(T,x){this.g=T,this.h=x}function L(T,x){if(S(x))throw Error("division by zero");if(S(T))return new b(d,d);if(M(T))return x=L(_(T),x),new b(_(x.g),_(x.h));if(M(x))return x=L(T,_(x)),new b(_(x.g),x.h);if(T.g.length>30){if(M(T)||M(x))throw Error("slowDivide_ only works with positive integers.");for(var v=f,y=x;y.l(T)<=0;)v=V(v),y=V(y);var A=N(v,1),I=N(y,1);for(y=N(y,2),v=N(v,2);!S(y);){var w=I.add(y);w.l(T)<=0&&(A=A.add(v),I=w),y=N(y,1),v=N(v,1)}return x=g(T,A.j(x)),new b(A,x)}for(A=d;T.l(x)>=0;){for(v=Math.max(1,Math.floor(T.m()/x.m())),y=Math.ceil(Math.log(v)/Math.LN2),y=y<=48?1:Math.pow(2,y-48),I=u(v),w=I.j(x);M(w)||w.l(T)>0;)v-=y,I=u(v),w=I.j(x);S(I)&&(I=f),A=A.add(I),T=g(T,w)}return new b(A,T)}i.B=function(T){return L(this,T).h},i.and=function(T){const x=Math.max(this.g.length,T.g.length),v=[];for(let y=0;y<x;y++)v[y]=this.i(y)&T.i(y);return new o(v,this.h&T.h)},i.or=function(T){const x=Math.max(this.g.length,T.g.length),v=[];for(let y=0;y<x;y++)v[y]=this.i(y)|T.i(y);return new o(v,this.h|T.h)},i.xor=function(T){const x=Math.max(this.g.length,T.g.length),v=[];for(let y=0;y<x;y++)v[y]=this.i(y)^T.i(y);return new o(v,this.h^T.h)};function V(T){const x=T.g.length+1,v=[];for(let y=0;y<x;y++)v[y]=T.i(y)<<1|T.i(y-1)>>>31;return new o(v,T.h)}function N(T,x){const v=x>>5;x%=32;const y=T.g.length-v,A=[];for(let I=0;I<y;I++)A[I]=x>0?T.i(I+v)>>>x|T.i(I+v+1)<<32-x:T.i(I+v);return new o(A,T.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,hh=o}).apply(typeof qf<"u"?qf:typeof self<"u"?self:typeof window<"u"?window:{});var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dg,no,fg,ka,Su,pg,mg,gg;(function(){var i,t=Object.defineProperty;function e(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ta=="object"&&Ta];for(var p=0;p<c.length;++p){var E=c[p];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var n=e(this);function r(c,p){if(p)t:{var E=n;c=c.split(".");for(var D=0;D<c.length-1;D++){var G=c[D];if(!(G in E))break t;E=E[G]}c=c[c.length-1],D=E[c],p=p(D),p!=D&&p!=null&&t(E,c,{configurable:!0,writable:!0,value:p})}}r("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(c){return c||function(p){var E=[],D;for(D in p)Object.prototype.hasOwnProperty.call(p,D)&&E.push([D,p[D]]);return E}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function a(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function l(c,p,E){return c.call.apply(c.bind,arguments)}function u(c,p,E){return u=l,u.apply(null,arguments)}function h(c,p){var E=Array.prototype.slice.call(arguments,1);return function(){var D=E.slice();return D.push.apply(D,arguments),c.apply(this,D)}}function d(c,p){function E(){}E.prototype=p.prototype,c.Z=p.prototype,c.prototype=new E,c.prototype.constructor=c,c.Ob=function(D,G,K){for(var dt=Array(arguments.length-2),qt=2;qt<arguments.length;qt++)dt[qt-2]=arguments[qt];return p.prototype[G].apply(D,dt)}}var f=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function m(c){const p=c.length;if(p>0){const E=Array(p);for(let D=0;D<p;D++)E[D]=c[D];return E}return[]}function S(c,p){for(let D=1;D<arguments.length;D++){const G=arguments[D];var E=typeof G;if(E=E!="object"?E:G?Array.isArray(G)?"array":E:"null",E=="array"||E=="object"&&typeof G.length=="number"){E=c.length||0;const K=G.length||0;c.length=E+K;for(let dt=0;dt<K;dt++)c[E+dt]=G[dt]}else c.push(G)}}class M{constructor(p,E){this.i=p,this.j=E,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function _(c){o.setTimeout(()=>{throw c},0)}function g(){var c=T;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class R{constructor(){this.h=this.g=null}add(p,E){const D=b.get();D.set(p,E),this.h?this.h.next=D:this.g=D,this.h=D}}var b=new M(()=>new L,c=>c.reset());class L{constructor(){this.next=this.g=this.h=null}set(p,E){this.h=p,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let V,N=!1,T=new R,x=()=>{const c=Promise.resolve(void 0);V=()=>{c.then(v)}};function v(){for(var c;c=g();){try{c.h.call(c.g)}catch(E){_(E)}var p=b;p.j(c),p.h<100&&(p.h++,c.next=p.g,p.g=c)}N=!1}function y(){this.u=this.u,this.C=this.C}y.prototype.u=!1,y.prototype.dispose=function(){this.u||(this.u=!0,this.N())},y.prototype[Symbol.dispose]=function(){this.dispose()},y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const E=()=>{};o.addEventListener("test",E,p),o.removeEventListener("test",E,p)}catch{}return c}();function w(c){return/^[\s\xa0]*$/.test(c)}function B(c,p){A.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,p)}d(B,A),B.prototype.init=function(c,p){const E=this.type=c.type,D=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget,p||(E=="mouseover"?p=c.fromElement:E=="mouseout"&&(p=c.toElement)),this.relatedTarget=p,D?(this.clientX=D.clientX!==void 0?D.clientX:D.pageX,this.clientY=D.clientY!==void 0?D.clientY:D.pageY,this.screenX=D.screenX||0,this.screenY=D.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&B.Z.h.call(this)},B.prototype.h=function(){B.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var W="closure_listenable_"+(Math.random()*1e6|0),X=0;function J(c,p,E,D,G){this.listener=c,this.proxy=null,this.src=p,this.type=E,this.capture=!!D,this.ha=G,this.key=++X,this.da=this.fa=!1}function j(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ht(c,p,E){for(const D in c)p.call(E,c[D],D,c)}function gt(c,p){for(const E in c)p.call(void 0,c[E],E,c)}function At(c){const p={};for(const E in c)p[E]=c[E];return p}const Zt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(c,p){let E,D;for(let G=1;G<arguments.length;G++){D=arguments[G];for(E in D)c[E]=D[E];for(let K=0;K<Zt.length;K++)E=Zt[K],Object.prototype.hasOwnProperty.call(D,E)&&(c[E]=D[E])}}function Q(c){this.src=c,this.g={},this.h=0}Q.prototype.add=function(c,p,E,D,G){const K=c.toString();c=this.g[K],c||(c=this.g[K]=[],this.h++);const dt=xt(c,p,D,G);return dt>-1?(p=c[dt],E||(p.fa=!1)):(p=new J(p,this.src,K,!!D,G),p.fa=E,c.push(p)),p};function at(c,p){const E=p.type;if(E in c.g){var D=c.g[E],G=Array.prototype.indexOf.call(D,p,void 0),K;(K=G>=0)&&Array.prototype.splice.call(D,G,1),K&&(j(p),c.g[E].length==0&&(delete c.g[E],c.h--))}}function xt(c,p,E,D){for(let G=0;G<c.length;++G){const K=c[G];if(!K.da&&K.listener==p&&K.capture==!!E&&K.ha==D)return G}return-1}var vt="closure_lm_"+(Math.random()*1e6|0),Ht={};function Wt(c,p,E,D,G){if(Array.isArray(p)){for(let K=0;K<p.length;K++)Wt(c,p[K],E,D,G);return null}return E=kt(E),c&&c[W]?c.J(p,E,a(D)?!!D.capture:!1,G):Qt(c,p,E,!1,D,G)}function Qt(c,p,E,D,G,K){if(!p)throw Error("Invalid event type");const dt=a(G)?!!G.capture:!!G;let qt=Ct(c);if(qt||(c[vt]=qt=new Q(c)),E=qt.add(p,E,D,dt,K),E.proxy)return E;if(D=Se(),E.proxy=D,D.src=c,D.listener=E,c.addEventListener)I||(G=dt),G===void 0&&(G=!1),c.addEventListener(p.toString(),D,G);else if(c.attachEvent)c.attachEvent(oe(p.toString()),D);else if(c.addListener&&c.removeListener)c.addListener(D);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Se(){function c(E){return p.call(c.src,c.listener,E)}const p=le;return c}function O(c,p,E,D,G){if(Array.isArray(p))for(var K=0;K<p.length;K++)O(c,p[K],E,D,G);else D=a(D)?!!D.capture:!!D,E=kt(E),c&&c[W]?(c=c.i,K=String(p).toString(),K in c.g&&(p=c.g[K],E=xt(p,E,D,G),E>-1&&(j(p[E]),Array.prototype.splice.call(p,E,1),p.length==0&&(delete c.g[K],c.h--)))):c&&(c=Ct(c))&&(p=c.g[p.toString()],c=-1,p&&(c=xt(p,E,D,G)),(E=c>-1?p[c]:null)&&xe(E))}function xe(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[W])at(p.i,c);else{var E=c.type,D=c.proxy;p.removeEventListener?p.removeEventListener(E,D,c.capture):p.detachEvent?p.detachEvent(oe(E),D):p.addListener&&p.removeListener&&p.removeListener(D),(E=Ct(p))?(at(E,c),E.h==0&&(E.src=null,p[vt]=null)):j(c)}}}function oe(c){return c in Ht?Ht[c]:Ht[c]="on"+c}function le(c,p){if(c.da)c=!0;else{p=new B(p,this);const E=c.listener,D=c.ha||c.src;c.fa&&xe(c),c=E.call(D,p)}return c}function Ct(c){return c=c[vt],c instanceof Q?c:null}var Te="__closure_events_fn_"+(Math.random()*1e9>>>0);function kt(c){return typeof c=="function"?c:(c[Te]||(c[Te]=function(p){return c.handleEvent(p)}),c[Te])}function bt(){y.call(this),this.i=new Q(this),this.M=this,this.G=null}d(bt,y),bt.prototype[W]=!0,bt.prototype.removeEventListener=function(c,p,E,D){O(this,c,p,E,D)};function U(c,p){var E,D=c.G;if(D)for(E=[];D;D=D.G)E.push(D);if(c=c.M,D=p.type||p,typeof p=="string")p=new A(p,c);else if(p instanceof A)p.target=p.target||c;else{var G=p;p=new A(D,c),ce(p,G)}G=!0;let K,dt;if(E)for(dt=E.length-1;dt>=0;dt--)K=p.g=E[dt],G=C(K,D,!0,p)&&G;if(K=p.g=c,G=C(K,D,!0,p)&&G,G=C(K,D,!1,p)&&G,E)for(dt=0;dt<E.length;dt++)K=p.g=E[dt],G=C(K,D,!1,p)&&G}bt.prototype.N=function(){if(bt.Z.N.call(this),this.i){var c=this.i;for(const p in c.g){const E=c.g[p];for(let D=0;D<E.length;D++)j(E[D]);delete c.g[p],c.h--}}this.G=null},bt.prototype.J=function(c,p,E,D){return this.i.add(String(c),p,!1,E,D)},bt.prototype.K=function(c,p,E,D){return this.i.add(String(c),p,!0,E,D)};function C(c,p,E,D){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();let G=!0;for(let K=0;K<p.length;++K){const dt=p[K];if(dt&&!dt.da&&dt.capture==E){const qt=dt.listener,Fe=dt.ha||dt.src;dt.fa&&at(c.i,dt),G=qt.call(Fe,D)!==!1&&G}}return G&&!D.defaultPrevented}function Y(c,p){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:o.setTimeout(c,p||0)}function it(c){c.g=Y(()=>{c.g=null,c.i&&(c.i=!1,it(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class ot extends y{constructor(p,E){super(),this.m=p,this.l=E,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:it(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(c){y.call(this),this.h=c,this.g={}}d(nt,y);var Pt=[];function ft(c){ht(c.g,function(p,E){this.g.hasOwnProperty(E)&&xe(p)},c),c.g={}}nt.prototype.N=function(){nt.Z.N.call(this),ft(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yt=o.JSON.stringify,Gt=o.JSON.parse,ut=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function Et(){}function te(){}var Lt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function St(){A.call(this,"d")}d(St,A);function Ft(){A.call(this,"c")}d(Ft,A);var Bt={},fe=null;function k(){return fe=fe||new bt}Bt.Ia="serverreachability";function ct(c){A.call(this,Bt.Ia,c)}d(ct,A);function Z(c){const p=k();U(p,new ct(p))}Bt.STAT_EVENT="statevent";function tt(c,p){A.call(this,Bt.STAT_EVENT,c),this.stat=p}d(tt,A);function st(c){const p=k();U(p,new tt(p,c))}Bt.Ja="timingevent";function Nt(c,p){A.call(this,Bt.Ja,c),this.size=p}d(Nt,A);function Kt(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},p)}function pe(){this.g=!0}pe.prototype.ua=function(){this.g=!1};function Ne(c,p,E,D,G,K){c.info(function(){if(c.g)if(K){var dt="",qt=K.split("&");for(let de=0;de<qt.length;de++){var Fe=qt[de].split("=");if(Fe.length>1){const He=Fe[0];Fe=Fe[1];const Gn=He.split("_");dt=Gn.length>=2&&Gn[1]=="type"?dt+(He+"="+Fe+"&"):dt+(He+"=redacted&")}}}else dt=null;else dt=K;return"XMLHTTP REQ ("+D+") [attempt "+G+"]: "+p+`
`+E+`
`+dt})}function ae(c,p,E,D,G,K,dt){c.info(function(){return"XMLHTTP RESP ("+D+") [ attempt "+G+"]: "+p+`
`+E+`
`+K+" "+dt})}function Qe(c,p,E,D){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+ko(c,E)+(D?" "+D:"")})}function Sn(c,p){c.info(function(){return"TIMEOUT: "+p})}pe.prototype.info=function(){};function ko(c,p){if(!c.g)return p;if(!p)return null;try{const K=JSON.parse(p);if(K){for(c=0;c<K.length;c++)if(Array.isArray(K[c])){var E=K[c];if(!(E.length<2)){var D=E[1];if(Array.isArray(D)&&!(D.length<1)){var G=D[0];if(G!="noop"&&G!="stop"&&G!="close")for(let dt=1;dt<D.length;dt++)D[dt]=""}}}}return yt(K)}catch{return p}}var xn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Pr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Fs;function Dr(){}d(Dr,Et),Dr.prototype.g=function(){return new XMLHttpRequest},Fs=new Dr;function Hn(c){return encodeURIComponent(String(c))}function Bo(c){var p=1;c=c.split(":");const E=[];for(;p>0&&c.length;)E.push(c.shift()),p--;return c.length&&E.push(c.join(":")),E}function gn(c,p,E,D){this.j=c,this.i=p,this.l=E,this.S=D||1,this.V=new nt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vs}function Vs(){this.i=null,this.g="",this.h=!1}var ks={},Bs={};function zs(c,p,E){c.M=1,c.A=_n(Re(p)),c.u=E,c.R=!0,zo(c,null)}function zo(c,p){c.F=Date.now(),$(c),c.B=Re(c.A);var E=c.B,D=c.S;Array.isArray(D)||(D=[String(D)]),kh(E.i,"t",D),c.C=0,E=c.j.L,c.h=new Vs,c.g=id(c.j,E?p:null,!c.u),c.P>0&&(c.O=new ot(u(c.Y,c,c.g),c.P)),p=c.V,E=c.g,D=c.ba;var G="readystatechange";Array.isArray(G)||(G&&(Pt[0]=G.toString()),G=Pt);for(let K=0;K<G.length;K++){const dt=Wt(E,G[K],D||p.handleEvent,!1,p.h||p);if(!dt)break;p.g[dt.key]=dt}p=c.J?At(c.J):{},c.u?(c.v||(c.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,p)):(c.v="GET",c.g.ea(c.B,c.v,null,p)),Z(),Ne(c.i,c.v,c.B,c.l,c.S,c.u)}gn.prototype.ba=function(c){c=c.target;const p=this.O;p&&xi(c)==3?p.j():this.Y(c)},gn.prototype.Y=function(c){try{if(c==this.g)t:{const qt=xi(this.g),Fe=this.g.ya(),de=this.g.ca();if(!(qt<3)&&(qt!=3||this.g&&(this.h.h||this.g.la()||qh(this.g)))){this.K||qt!=4||Fe==7||(Fe==8||de<=0?Z(3):Z(2)),lt(this);var p=this.g.ca();this.X=p;var E=P(this);if(this.o=p==200,ae(this.i,this.v,this.B,this.l,this.S,qt,p),this.o){if(this.U&&!this.L){e:{if(this.g){var D,G=this.g;if((D=G.g?G.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(D)){var K=D;break e}}K=null}if(c=K)Qe(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Mt(this,c);else{this.o=!1,this.m=3,st(12),_t(this),pt(this);break t}}if(this.R){c=!0;let He;for(;!this.K&&this.C<E.length;)if(He=q(this,E),He==Bs){qt==4&&(this.m=4,st(14),c=!1),Qe(this.i,this.l,null,"[Incomplete Response]");break}else if(He==ks){this.m=4,st(15),Qe(this.i,this.l,E,"[Invalid Chunk]"),c=!1;break}else Qe(this.i,this.l,He,null),Mt(this,He);if(z(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qt!=4||E.length!=0||this.h.h||(this.m=1,st(16),c=!1),this.o=this.o&&c,!c)Qe(this.i,this.l,E,"[Invalid Chunked Response]"),_t(this),pt(this);else if(E.length>0&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.aa&&!dt.P&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+E.length),Hc(dt),dt.P=!0,st(11))}}else Qe(this.i,this.l,E,null),Mt(this,E);qt==4&&_t(this),this.o&&!this.K&&(qt==4?Zh(this.j,this):(this.o=!1,$(this)))}else D_(this.g),p==400&&E.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),_t(this),pt(this)}}}catch{}finally{}};function P(c){if(!z(c))return c.g.la();const p=qh(c.g);if(p==="")return"";let E="";const D=p.length,G=xi(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return _t(c),pt(c),"";c.h.i=new o.TextDecoder}for(let K=0;K<D;K++)c.h.h=!0,E+=c.h.i.decode(p[K],{stream:!(G&&K==D-1)});return p.length=0,c.h.g+=E,c.C=0,c.h.g}function z(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function q(c,p){var E=c.C,D=p.indexOf(`
`,E);return D==-1?Bs:(E=Number(p.substring(E,D)),isNaN(E)?ks:(D+=1,D+E>p.length?Bs:(p=p.slice(D,D+E),c.C=D+E,p)))}gn.prototype.cancel=function(){this.K=!0,_t(this)};function $(c){c.T=Date.now()+c.H,H(c,c.H)}function H(c,p){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Kt(u(c.aa,c),p)}function lt(c){c.D&&(o.clearTimeout(c.D),c.D=null)}gn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Sn(this.i,this.B),this.M!=2&&(Z(),st(17)),_t(this),this.m=2,pt(this)):H(this,this.T-c)};function pt(c){c.j.I==0||c.K||Zh(c.j,c)}function _t(c){lt(c);var p=c.O;p&&typeof p.dispose=="function"&&p.dispose(),c.O=null,ft(c.V),c.g&&(p=c.g,c.g=null,p.abort(),p.dispose())}function Mt(c,p){try{var E=c.j;if(E.I!=0&&(E.g==c||me(E.h,c))){if(!c.L&&me(E.h,c)&&E.I==3){try{var D=E.Ba.g.parse(p)}catch{D=null}if(Array.isArray(D)&&D.length==3){var G=D;if(G[0]==0){t:if(!E.v){if(E.g)if(E.g.F+3e3<c.F)jo(E),qo(E);else break t;zc(E),st(18)}}else E.xa=G[1],0<E.xa-E.K&&G[2]<37500&&E.F&&E.A==0&&!E.C&&(E.C=Kt(u(E.Va,E),6e3));re(E.h)<=1&&E.ta&&(E.ta=void 0)}else nr(E,11)}else if((c.L||E.g==c)&&jo(E),!w(p))for(G=E.Ba.g.parse(p),p=0;p<G.length;p++){let de=G[p];const He=de[0];if(!(He<=E.K))if(E.K=He,de=de[1],E.I==2)if(de[0]=="c"){E.M=de[1],E.ba=de[2];const Gn=de[3];Gn!=null&&(E.ka=Gn,E.j.info("VER="+E.ka));const ir=de[4];ir!=null&&(E.za=ir,E.j.info("SVER="+E.za));const Ti=de[5];Ti!=null&&typeof Ti=="number"&&Ti>0&&(D=1.5*Ti,E.O=D,E.j.info("backChannelRequestTimeoutMs_="+D)),D=E;const Mi=c.g;if(Mi){const Yo=Mi.g?Mi.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yo){var K=D.h;K.g||Yo.indexOf("spdy")==-1&&Yo.indexOf("quic")==-1&&Yo.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(ge(K,K.h),K.h=null))}if(D.G){const Gc=Mi.g?Mi.g.getResponseHeader("X-HTTP-Session-Id"):null;Gc&&(D.wa=Gc,zt(D.J,D.G,Gc))}}E.I=3,E.l&&E.l.ra(),E.aa&&(E.T=Date.now()-c.F,E.j.info("Handshake RTT: "+E.T+"ms")),D=E;var dt=c;if(D.na=nd(D,D.L?D.ba:null,D.W),dt.L){Ze(D.h,dt);var qt=dt,Fe=D.O;Fe&&(qt.H=Fe),qt.D&&(lt(qt),$(qt)),D.g=dt}else Jh(D);E.i.length>0&&$o(E)}else de[0]!="stop"&&de[0]!="close"||nr(E,7);else E.I==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?nr(E,7):Bc(E):de[0]!="noop"&&E.l&&E.l.qa(de),E.A=0)}}Z(4)}catch{}}var Ut=class{constructor(c,p){this.g=c,this.map=p}};function Ot(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Dt(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function re(c){return c.h?1:c.g?c.g.size:0}function me(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function ge(c,p){c.g?c.g.add(p):c.h=p}function Ze(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}Ot.prototype.cancel=function(){if(this.i=se(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function se(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const E of c.g.values())p=p.concat(E.G);return p}return m(c.i)}var Rt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ue(c,p){if(c){c=c.split("&");for(let E=0;E<c.length;E++){const D=c[E].indexOf("=");let G,K=null;D>=0?(G=c[E].substring(0,D),K=c[E].substring(D+1)):G=c[E],p(G,K?decodeURIComponent(K.replace(/\+/g," ")):"")}}}function Yt(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;c instanceof Yt?(this.l=c.l,Tn(this,c.j),this.o=c.o,this.g=c.g,Oe(this,c.u),this.h=c.h,tr(this,Bh(c.i)),this.m=c.m):c&&(p=String(c).match(Rt))?(this.l=!1,Tn(this,p[1]||"",!0),this.o=ei(p[2]||""),this.g=ei(p[3]||"",!0),Oe(this,p[4]),this.h=ei(p[5]||"",!0),tr(this,p[6]||"",!0),this.m=ei(p[7]||"")):(this.l=!1,this.i=new Gs(null,this.l))}Yt.prototype.toString=function(){const c=[];var p=this.j;p&&c.push(ze(p,Ho,!0),":");var E=this.g;return(E||p=="file")&&(c.push("//"),(p=this.o)&&c.push(ze(p,Ho,!0),"@"),c.push(Hn(E).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.u,E!=null&&c.push(":",String(E))),(E=this.h)&&(this.g&&E.charAt(0)!="/"&&c.push("/"),c.push(ze(E,E.charAt(0)=="/"?T_:Go,!0))),(E=this.i.toString())&&c.push("?",E),(E=this.m)&&c.push("#",ze(E,A_)),c.join("")},Yt.prototype.resolve=function(c){const p=Re(this);let E=!!c.j;E?Tn(p,c.j):E=!!c.o,E?p.o=c.o:E=!!c.g,E?p.g=c.g:E=c.u!=null;var D=c.h;if(E)Oe(p,c.u);else if(E=!!c.h){if(D.charAt(0)!="/")if(this.g&&!this.h)D="/"+D;else{var G=p.h.lastIndexOf("/");G!=-1&&(D=p.h.slice(0,G+1)+D)}if(G=D,G==".."||G==".")D="";else if(G.indexOf("./")!=-1||G.indexOf("/.")!=-1){D=G.lastIndexOf("/",0)==0,G=G.split("/");const K=[];for(let dt=0;dt<G.length;){const qt=G[dt++];qt=="."?D&&dt==G.length&&K.push(""):qt==".."?((K.length>1||K.length==1&&K[0]!="")&&K.pop(),D&&dt==G.length&&K.push("")):(K.push(qt),D=!0)}D=K.join("/")}else D=G}return E?p.h=D:E=c.i.toString()!=="",E?tr(p,Bh(c.i)):E=!!c.m,E&&(p.m=c.m),p};function Re(c){return new Yt(c)}function Tn(c,p,E){c.j=E?ei(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function Oe(c,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);c.u=p}else c.u=null}function tr(c,p,E){p instanceof Gs?(c.i=p,w_(c.i,c.l)):(E||(p=ze(p,M_)),c.i=new Gs(p,c.l))}function zt(c,p,E){c.i.set(p,E)}function _n(c){return zt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function ei(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ze(c,p,E){return typeof c=="string"?(c=encodeURI(c).replace(p,Hs),E&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Hs(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ho=/[#\/\?@]/g,Go=/[#\?:]/g,T_=/[#\?]/g,M_=/[#\?@]/g,A_=/#/g;function Gs(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function er(c){c.g||(c.g=new Map,c.h=0,c.i&&Ue(c.i,function(p,E){c.add(decodeURIComponent(p.replace(/\+/g," ")),E)}))}i=Gs.prototype,i.add=function(c,p){er(this),this.i=null,c=Lr(this,c);let E=this.g.get(c);return E||this.g.set(c,E=[]),E.push(p),this.h+=1,this};function Oh(c,p){er(c),p=Lr(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function Fh(c,p){return er(c),p=Lr(c,p),c.g.has(p)}i.forEach=function(c,p){er(this),this.g.forEach(function(E,D){E.forEach(function(G){c.call(p,G,D,this)},this)},this)};function Vh(c,p){er(c);let E=[];if(typeof p=="string")Fh(c,p)&&(E=E.concat(c.g.get(Lr(c,p))));else for(c=Array.from(c.g.values()),p=0;p<c.length;p++)E=E.concat(c[p]);return E}i.set=function(c,p){return er(this),this.i=null,c=Lr(this,c),Fh(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},i.get=function(c,p){return c?(c=Vh(this,c),c.length>0?String(c[0]):p):p};function kh(c,p,E){Oh(c,p),E.length>0&&(c.i=null,c.g.set(Lr(c,p),m(E)),c.h+=E.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(let D=0;D<p.length;D++){var E=p[D];const G=Hn(E);E=Vh(this,E);for(let K=0;K<E.length;K++){let dt=G;E[K]!==""&&(dt+="="+Hn(E[K])),c.push(dt)}}return this.i=c.join("&")};function Bh(c){const p=new Gs;return p.i=c.i,c.g&&(p.g=new Map(c.g),p.h=c.h),p}function Lr(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function w_(c,p){p&&!c.j&&(er(c),c.i=null,c.g.forEach(function(E,D){const G=D.toLowerCase();D!=G&&(Oh(this,D),kh(this,G,E))},c)),c.j=p}function b_(c,p){const E=new pe;if(o.Image){const D=new Image;D.onload=h(Si,E,"TestLoadImage: loaded",!0,p,D),D.onerror=h(Si,E,"TestLoadImage: error",!1,p,D),D.onabort=h(Si,E,"TestLoadImage: abort",!1,p,D),D.ontimeout=h(Si,E,"TestLoadImage: timeout",!1,p,D),o.setTimeout(function(){D.ontimeout&&D.ontimeout()},1e4),D.src=c}else p(!1)}function R_(c,p){const E=new pe,D=new AbortController,G=setTimeout(()=>{D.abort(),Si(E,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:D.signal}).then(K=>{clearTimeout(G),K.ok?Si(E,"TestPingServer: ok",!0,p):Si(E,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(G),Si(E,"TestPingServer: error",!1,p)})}function Si(c,p,E,D,G){try{G&&(G.onload=null,G.onerror=null,G.onabort=null,G.ontimeout=null),D(E)}catch{}}function C_(){this.g=new ut}function Vc(c){this.i=c.Sb||null,this.h=c.ab||!1}d(Vc,Et),Vc.prototype.g=function(){return new Wo(this.i,this.h)};function Wo(c,p){bt.call(this),this.H=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(Wo,bt),i=Wo.prototype,i.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=p,this.readyState=1,Xs(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(p.body=c),(this.H||o).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ws(this)),this.readyState=0},i.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Xs(this)),this.g&&(this.readyState=3,Xs(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;zh(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function zh(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}i.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?Ws(this):Xs(this),this.readyState==3&&zh(this)}},i.Oa=function(c){this.g&&(this.response=this.responseText=c,Ws(this))},i.Na=function(c){this.g&&(this.response=c,Ws(this))},i.ga=function(){this.g&&Ws(this)};function Ws(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Xs(c)}i.setRequestHeader=function(c,p){this.A.append(c,p)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var E=p.next();!E.done;)E=E.value,c.push(E[0]+": "+E[1]),E=p.next();return c.join(`\r
`)};function Xs(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Hh(c){let p="";return ht(c,function(E,D){p+=D,p+=":",p+=E,p+=`\r
`}),p}function kc(c,p,E){t:{for(D in E){var D=!1;break t}D=!0}D||(E=Hh(E),typeof c=="string"?E!=null&&Hn(E):zt(c,p,E))}function Ce(c){bt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(Ce,bt);var I_=/^https?$/i,P_=["POST","PUT"];i=Ce.prototype,i.Fa=function(c){this.H=c},i.ea=function(c,p,E,D){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Fs.g(),this.g.onreadystatechange=f(u(this.Ca,this));try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(K){Gh(this,K);return}if(c=E||"",E=new Map(this.headers),D)if(Object.getPrototypeOf(D)===Object.prototype)for(var G in D)E.set(G,D[G]);else if(typeof D.keys=="function"&&typeof D.get=="function")for(const K of D.keys())E.set(K,D.get(K));else throw Error("Unknown input type for opt_headers: "+String(D));D=Array.from(E.keys()).find(K=>K.toLowerCase()=="content-type"),G=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(P_,p,void 0)>=0)||D||G||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,dt]of E)this.g.setRequestHeader(K,dt);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(K){Gh(this,K)}};function Gh(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.o=5,Wh(c),Xo(c)}function Wh(c){c.A||(c.A=!0,U(c,"complete"),U(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,U(this,"complete"),U(this,"abort"),Xo(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xo(this,!0)),Ce.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Xh(this):this.Xa())},i.Xa=function(){Xh(this)};function Xh(c){if(c.h&&typeof s<"u"){if(c.v&&xi(c)==4)setTimeout(c.Ca.bind(c),0);else if(U(c,"readystatechange"),xi(c)==4){c.h=!1;try{const K=c.ca();t:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var E;if(!(E=p)){var D;if(D=K===0){let dt=String(c.D).match(Rt)[1]||null;!dt&&o.self&&o.self.location&&(dt=o.self.location.protocol.slice(0,-1)),D=!I_.test(dt?dt.toLowerCase():"")}E=D}if(E)U(c,"complete"),U(c,"success");else{c.o=6;try{var G=xi(c)>2?c.g.statusText:""}catch{G=""}c.l=G+" ["+c.ca()+"]",Wh(c)}}finally{Xo(c)}}}}function Xo(c,p){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const E=c.g;c.g=null,p||U(c,"ready");try{E.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function xi(c){return c.g?c.g.readyState:0}i.ca=function(){try{return xi(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),Gt(p)}};function qh(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function D_(c){const p={};c=(c.g&&xi(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let D=0;D<c.length;D++){if(w(c[D]))continue;var E=Bo(c[D]);const G=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const K=p[G]||[];p[G]=K,K.push(E)}gt(p,function(D){return D.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qs(c,p,E){return E&&E.internalChannelParams&&E.internalChannelParams[c]||p}function $h(c){this.za=0,this.i=[],this.j=new pe,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qs("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qs("baseRetryDelayMs",5e3,c),this.Za=qs("retryDelaySeedMs",1e4,c),this.Ta=qs("forwardChannelMaxRetries",2,c),this.va=qs("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Ot(c&&c.concurrentRequestLimit),this.Ba=new C_,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=$h.prototype,i.ka=8,i.I=1,i.connect=function(c,p,E,D){st(0),this.W=c,this.H=p||{},E&&D!==void 0&&(this.H.OSID=E,this.H.OAID=D),this.F=this.X,this.J=nd(this,null,this.W),$o(this)};function Bc(c){if(jh(c),c.I==3){var p=c.V++,E=Re(c.J);if(zt(E,"SID",c.M),zt(E,"RID",p),zt(E,"TYPE","terminate"),$s(c,E),p=new gn(c,c.j,p),p.M=2,p.A=_n(Re(E)),E=!1,o.navigator&&o.navigator.sendBeacon)try{E=o.navigator.sendBeacon(p.A.toString(),"")}catch{}!E&&o.Image&&(new Image().src=p.A,E=!0),E||(p.g=id(p.j,null),p.g.ea(p.A)),p.F=Date.now(),$(p)}ed(c)}function qo(c){c.g&&(Hc(c),c.g.cancel(),c.g=null)}function jh(c){qo(c),c.v&&(o.clearTimeout(c.v),c.v=null),jo(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function $o(c){if(!Dt(c.h)&&!c.m){c.m=!0;var p=c.Ea;V||x(),N||(V(),N=!0),T.add(p,c),c.D=0}}function L_(c,p){return re(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=p.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Kt(u(c.Ea,c,p),td(c,c.D)),c.D++,!0)}i.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const G=new gn(this,this.j,c);let K=this.o;if(this.U&&(K?(K=At(K),ce(K,this.U)):K=this.U),this.u!==null||this.R||(G.J=K,K=null),this.S)t:{for(var p=0,E=0;E<this.i.length;E++){e:{var D=this.i[E];if("__data__"in D.map&&(D=D.map.__data__,typeof D=="string")){D=D.length;break e}D=void 0}if(D===void 0)break;if(p+=D,p>4096){p=E;break t}if(p===4096||E===this.i.length-1){p=E+1;break t}}p=1e3}else p=1e3;p=Yh(this,G,p),E=Re(this.J),zt(E,"RID",c),zt(E,"CVER",22),this.G&&zt(E,"X-HTTP-Session-Id",this.G),$s(this,E),K&&(this.R?p="headers="+Hn(Hh(K))+"&"+p:this.u&&kc(E,this.u,K)),ge(this.h,G),this.Ra&&zt(E,"TYPE","init"),this.S?(zt(E,"$req",p),zt(E,"SID","null"),G.U=!0,zs(G,E,null)):zs(G,E,p),this.I=2}}else this.I==3&&(c?Kh(this,c):this.i.length==0||Dt(this.h)||Kh(this))};function Kh(c,p){var E;p?E=p.l:E=c.V++;const D=Re(c.J);zt(D,"SID",c.M),zt(D,"RID",E),zt(D,"AID",c.K),$s(c,D),c.u&&c.o&&kc(D,c.u,c.o),E=new gn(c,c.j,E,c.D+1),c.u===null&&(E.J=c.o),p&&(c.i=p.G.concat(c.i)),p=Yh(c,E,1e3),E.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),ge(c.h,E),zs(E,D,p)}function $s(c,p){c.H&&ht(c.H,function(E,D){zt(p,D,E)}),c.l&&ht({},function(E,D){zt(p,D,E)})}function Yh(c,p,E){E=Math.min(c.i.length,E);const D=c.l?u(c.l.Ka,c.l,c):null;t:{var G=c.i;let qt=-1;for(;;){const Fe=["count="+E];qt==-1?E>0?(qt=G[0].g,Fe.push("ofs="+qt)):qt=0:Fe.push("ofs="+qt);let de=!0;for(let He=0;He<E;He++){var K=G[He].g;const Gn=G[He].map;if(K-=qt,K<0)qt=Math.max(0,G[He].g-100),de=!1;else try{K="req"+K+"_"||"";try{var dt=Gn instanceof Map?Gn:Object.entries(Gn);for(const[ir,Ti]of dt){let Mi=Ti;a(Ti)&&(Mi=yt(Ti)),Fe.push(K+ir+"="+encodeURIComponent(Mi))}}catch(ir){throw Fe.push(K+"type="+encodeURIComponent("_badmap")),ir}}catch{D&&D(Gn)}}if(de){dt=Fe.join("&");break t}}dt=void 0}return c=c.i.splice(0,E),p.G=c,dt}function Jh(c){if(!c.g&&!c.v){c.Y=1;var p=c.Da;V||x(),N||(V(),N=!0),T.add(p,c),c.A=0}}function zc(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Kt(u(c.Da,c),td(c,c.A)),c.A++,!0)}i.Da=function(){if(this.v=null,Qh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Kt(u(this.Wa,this),c)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),qo(this),Qh(this))};function Hc(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function Qh(c){c.g=new gn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var p=Re(c.na);zt(p,"RID","rpc"),zt(p,"SID",c.M),zt(p,"AID",c.K),zt(p,"CI",c.F?"0":"1"),!c.F&&c.ia&&zt(p,"TO",c.ia),zt(p,"TYPE","xmlhttp"),$s(c,p),c.u&&c.o&&kc(p,c.u,c.o),c.O&&(c.g.H=c.O);var E=c.g;c=c.ba,E.M=1,E.A=_n(Re(p)),E.u=null,E.R=!0,zo(E,c)}i.Va=function(){this.C!=null&&(this.C=null,qo(this),zc(this),st(19))};function jo(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function Zh(c,p){var E=null;if(c.g==p){jo(c),Hc(c),c.g=null;var D=2}else if(me(c.h,p))E=p.G,Ze(c.h,p),D=1;else return;if(c.I!=0){if(p.o)if(D==1){E=p.u?p.u.length:0,p=Date.now()-p.F;var G=c.D;D=k(),U(D,new Nt(D,E)),$o(c)}else Jh(c);else if(G=p.m,G==3||G==0&&p.X>0||!(D==1&&L_(c,p)||D==2&&zc(c)))switch(E&&E.length>0&&(p=c.h,p.i=p.i.concat(E)),G){case 1:nr(c,5);break;case 4:nr(c,10);break;case 3:nr(c,6);break;default:nr(c,2)}}}function td(c,p){let E=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(E*=2),E*p}function nr(c,p){if(c.j.info("Error code "+p),p==2){var E=u(c.bb,c),D=c.Ua;const G=!D;D=new Yt(D||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Tn(D,"https"),_n(D),G?b_(D.toString(),E):R_(D.toString(),E)}else st(2);c.I=0,c.l&&c.l.pa(p),ed(c),jh(c)}i.bb=function(c){c?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function ed(c){if(c.I=0,c.ja=[],c.l){const p=se(c.h);(p.length!=0||c.i.length!=0)&&(S(c.ja,p),S(c.ja,c.i),c.h.i.length=0,m(c.i),c.i.length=0),c.l.oa()}}function nd(c,p,E){var D=E instanceof Yt?Re(E):new Yt(E);if(D.g!="")p&&(D.g=p+"."+D.g),Oe(D,D.u);else{var G=o.location;D=G.protocol,p=p?p+"."+G.hostname:G.hostname,G=+G.port;const K=new Yt(null);D&&Tn(K,D),p&&(K.g=p),G&&Oe(K,G),E&&(K.h=E),D=K}return E=c.G,p=c.wa,E&&p&&zt(D,E,p),zt(D,"VER",c.ka),$s(c,D),D}function id(c,p,E){if(p&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Aa&&!c.ma?new Ce(new Vc({ab:E})):new Ce(c.ma),p.Fa(c.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function rd(){}i=rd.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Ko(){}Ko.prototype.g=function(c,p){return new vn(c,p)};function vn(c,p){bt.call(this),this.g=new $h(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(c?c["X-WebChannel-Client-Profile"]=p.sa:c={"X-WebChannel-Client-Profile":p.sa}),this.g.U=c,(c=p&&p.Qb)&&!w(c)&&(this.g.u=c),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!w(p)&&(this.g.G=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new Nr(this)}d(vn,bt),vn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},vn.prototype.close=function(){Bc(this.g)},vn.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var E={};E.__data__=c,c=E}else this.v&&(E={},E.__data__=yt(c),c=E);p.i.push(new Ut(p.Ya++,c)),p.I==3&&$o(p)},vn.prototype.N=function(){this.g.l=null,delete this.j,Bc(this.g),delete this.g,vn.Z.N.call(this)};function sd(c){St.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){t:{for(const E in p){c=E;break t}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}d(sd,St);function od(){Ft.call(this),this.status=1}d(od,Ft);function Nr(c){this.g=c}d(Nr,rd),Nr.prototype.ra=function(){U(this.g,"a")},Nr.prototype.qa=function(c){U(this.g,new sd(c))},Nr.prototype.pa=function(c){U(this.g,new od)},Nr.prototype.oa=function(){U(this.g,"b")},Ko.prototype.createWebChannel=Ko.prototype.g,vn.prototype.send=vn.prototype.o,vn.prototype.open=vn.prototype.m,vn.prototype.close=vn.prototype.close,gg=function(){return new Ko},mg=function(){return k()},pg=Bt,Su={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},xn.NO_ERROR=0,xn.TIMEOUT=8,xn.HTTP_ERROR=6,ka=xn,Pr.COMPLETE="complete",fg=Pr,te.EventType=Lt,Lt.OPEN="a",Lt.CLOSE="b",Lt.ERROR="c",Lt.MESSAGE="d",bt.prototype.listen=bt.prototype.J,no=te,Ce.prototype.listenOnce=Ce.prototype.K,Ce.prototype.getLastError=Ce.prototype.Ha,Ce.prototype.getLastErrorCode=Ce.prototype.ya,Ce.prototype.getStatus=Ce.prototype.ca,Ce.prototype.getResponseJson=Ce.prototype.La,Ce.prototype.getResponseText=Ce.prototype.la,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Fa,dg=Ce}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}rn.UNAUTHENTICATED=new rn(null),rn.GOOGLE_CREDENTIALS=new rn("google-credentials-uid"),rn.FIRST_PARTY=new rn("first-party-uid"),rn.MOCK_USER=new rn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us="12.10.0";function fb(i){Us=i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new eh("@firebase/firestore");function Zr(){return Ar.logLevel}function wt(i,...t){if(Ar.logLevel<=ee.DEBUG){const e=t.map(dh);Ar.debug(`Firestore (${Us}): ${i}`,...e)}}function wr(i,...t){if(Ar.logLevel<=ee.ERROR){const e=t.map(dh);Ar.error(`Firestore (${Us}): ${i}`,...e)}}function Eo(i,...t){if(Ar.logLevel<=ee.WARN){const e=t.map(dh);Ar.warn(`Firestore (${Us}): ${i}`,...e)}}function dh(i){if(typeof i=="string")return i;try{return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(i,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,_g(i,n,e)}function _g(i,t,e){let n=`FIRESTORE (${Us}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw wr(n),new Error(n)}function Ie(i,t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,i||_g(t,r,n)}function ve(i,t){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class It extends Ei{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(rn.UNAUTHENTICATED))}shutdown(){}}class mb{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class gb{constructor(t){this.t=t,this.currentUser=rn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Ie(this.o===void 0,42304);let n=this.i;const r=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let s=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vr,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{wt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(wt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vr)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(wt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Ie(typeof n.accessToken=="string",31837,{l:n}),new vg(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ie(t===null||typeof t=="string",2055,{h:t}),new rn(t)}}class _b{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=rn.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class vb{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new _b(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(rn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $f{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yb{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Un(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Ie(this.o===void 0,3512);const n=s=>{s.error!=null&&wt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,wt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>n(s))};const r=s=>{wt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?r(s):wt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new $f(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Ie(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new $f(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<i;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=Eb(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%62))}return n}}function ue(i,t){return i<t?-1:i>t?1:0}function xu(i,t){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++){const r=i.charAt(n),s=t.charAt(n);if(r!==s)return Cl(r)===Cl(s)?ue(r,s):Cl(r)?1:-1}return ue(i.length,t.length)}const Sb=55296,xb=57343;function Cl(i){const t=i.charCodeAt(0);return t>=Sb&&t<=xb}function Es(i,t,e){return i.length===t.length&&i.every((n,r)=>e(n,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="__name__";class Wn{constructor(t,e,n){e===void 0?e=0:e>t.length&&Jt(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&Jt(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Wn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Wn?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=Wn.compareSegments(t.get(r),e.get(r));if(s!==0)return s}return ue(t.length,e.length)}static compareSegments(t,e){const n=Wn.isNumericId(t),r=Wn.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?Wn.extractNumericId(t).compare(Wn.extractNumericId(e)):xu(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return hh.fromString(t.substring(4,t.length-2))}}class be extends Wn{construct(t,e,n){return new be(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new It(rt.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(r=>r.length>0))}return new be(e)}static emptyPath(){return new be([])}}const Tb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Wn{construct(t,e,n){return new Ye(t,e,n)}static isValidIdentifier(t){return Tb.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jf}static keyField(){return new Ye([jf])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(n.length===0)throw new It(rt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new It(rt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new It(rt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(n+=a,r++):(s(),r++)}if(s(),o)throw new It(rt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ye(e)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.path=t}static fromPath(t){return new Xt(be.fromString(t))}static fromName(t){return new Xt(be.fromString(t).popFirst(5))}static empty(){return new Xt(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&be.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return be.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Xt(new be(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(i,t,e){if(!e)throw new It(rt.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function Mb(i,t,e,n){if(t===!0&&n===!0)throw new It(rt.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function Kf(i){if(!Xt.isDocumentKey(i))throw new It(rt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Yf(i){if(Xt.isDocumentKey(i))throw new It(rt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Eg(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function ph(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":Jt(12329,{type:typeof i})}function Sg(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new It(rt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ph(i);throw new It(rt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(i,t){const e={typeString:i};return t&&(e.value=t),e}function Lo(i,t){if(!Eg(i))throw new It(rt.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const r=t[n].typeString,s="value"in t[n]?{value:t[n].value}:void 0;if(!(n in i)){e=`JSON missing required field: '${n}'`;break}const o=i[n];if(r&&typeof o!==r){e=`JSON field '${n}' must be a ${r}.`;break}if(s!==void 0&&o!==s.value){e=`Expected '${n}' field to equal '${s.value}'`;break}}if(e)throw new It(rt.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=-62135596800,Qf=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(t){return Ae.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Qf);return new Ae(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new It(rt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new It(rt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Jf)throw new It(rt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new It(rt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qf}_compareTo(t){return this.seconds===t.seconds?ue(this.nanoseconds,t.nanoseconds):ue(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Lo(t,Ae._jsonSchema))return new Ae(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Jf;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ae._jsonSchemaVersion="firestore/timestamp/1.0",Ae._jsonSchema={type:Le("string",Ae._jsonSchemaVersion),seconds:Le("number"),nanoseconds:Le("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{static fromTimestamp(t){return new Me(t)}static min(){return new Me(new Ae(0,0))}static max(){return new Me(new Ae(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=-1;function Ab(i,t){const e=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,r=Me.fromTimestamp(n===1e9?new Ae(e+1,0):new Ae(e,n));return new ji(r,Xt.empty(),t)}function wb(i){return new ji(i.readTime,i.key,So)}class ji{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ji(Me.min(),Xt.empty(),So)}static max(){return new ji(Me.max(),Xt.empty(),So)}}function bb(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=Xt.comparator(i.documentKey,t.documentKey),e!==0?e:ue(i.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mh(i){if(i.code!==rt.FAILED_PRECONDITION||i.message!==Rb)throw i;wt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Jt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new et((n,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(n,r)},this.catchCallback=s=>{this.wrapFailure(e,s).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof et?e:et.resolve(e)}catch(e){return et.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):et.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):et.reject(e)}static resolve(t){return new et((e,n)=>{e(t)})}static reject(t){return new et((e,n)=>{n(t)})}static waitFor(t){return new et((e,n)=>{let r=0,s=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&e()},l=>n(l))}),o=!0,s===r&&e()})}static or(t){let e=et.resolve(!1);for(const n of t)e=e.next(r=>r?et.resolve(r):n());return e}static forEach(t,e){const n=[];return t.forEach((r,s)=>{n.push(e.call(this,r,s))}),this.waitFor(n)}static mapArray(t,e){return new et((n,r)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;e(t[u]).next(h=>{o[u]=h,++a,a===s&&n(o)},h=>r(h))}})}static doWhile(t,e){return new et((n,r)=>{const s=()=>{t()===!0?e().next(()=>{s()},r):n()};s()})}}function Ib(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function No(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}gh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=-1;function vh(i){return i==null}function cc(i){return i===0&&1/i==-1/0}function Pb(i){return typeof i=="number"&&Number.isInteger(i)&&!cc(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="";function Db(i){let t="";for(let e=0;e<i.length;e++)t.length>0&&(t=Zf(t)),t=Lb(i.get(e),t);return Zf(t)}function Lb(i,t){let e=t;const n=i.length;for(let r=0;r<n;r++){const s=i.charAt(r);switch(s){case"\0":e+="";break;case xg:e+="";break;default:e+=s}}return e}function Zf(i){return i+xg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function Os(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function Tg(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,e){this.comparator=t,this.root=e||je.EMPTY}insert(t,e){return new mn(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,je.BLACK,null,null))}remove(t){return new mn(this.comparator,this.root.remove(t,this.comparator).copy(null,null,je.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ma(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ma(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ma(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ma(this.root,t,this.comparator,!0)}}class Ma{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class je{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=n??je.RED,this.left=r??je.EMPTY,this.right=s??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new je(t??this.key,e??this.value,n??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):s===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return je.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Jt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Jt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Jt(27949);return t+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw Jt(57766)}get value(){throw Jt(16141)}get color(){throw Jt(16727)}get left(){throw Jt(29726)}get right(){throw Jt(36894)}copy(t,e,n,r,s){return this}insert(t,e,n){return new je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t){this.comparator=t,this.data=new mn(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ep(this.data.getIterator())}getIteratorFrom(t){return new ep(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof Je)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Je(this.comparator);return e.data=t,e}}class ep{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t){this.fields=t,t.sort(Ye.comparator)}static empty(){return new Bn([])}unionWith(t){let e=new Je(Ye.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Bn(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Es(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Nb("Invalid base64 string: "+s):s}}(t);return new Qn(e)}static fromUint8Array(t){const e=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new Qn(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ue(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qn.EMPTY_BYTE_STRING=new Qn("");const Ub=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(i){if(Ie(!!i,39018),typeof i=="string"){let t=0;const e=Ub.exec(i);if(Ie(!!e,46558,{timestamp:i}),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Ke(i.seconds),nanos:Ke(i.nanos)}}function Ke(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ss(i){return typeof i=="string"?Qn.fromBase64String(i):Qn.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="server_timestamp",Ag="__type__",wg="__previous_value__",bg="__local_write_time__";function yh(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)==null?void 0:e.fields)||{})[Ag])==null?void 0:n.stringValue)===Mg}function Eh(i){const t=i.mapValue.fields[wg];return yh(t)?Eh(t):t}function lc(i){const t=br(i.mapValue.fields[bg].timestampValue);return new Ae(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(t,e,n,r,s,o,a,l,u,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=d}}const uc="(default)";class hc{constructor(t,e){this.projectId=t,this.database=e||uc}static empty(){return new hc("","")}get isDefaultDatabase(){return this.database===uc}isEqual(t){return t instanceof hc&&t.projectId===this.projectId&&t.database===this.database}}function Fb(i,t){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new It(rt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hc(i.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="__type__",Vb="__max__",Aa={mapValue:{}},Cg="__vector__",Tu="value";function Rr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?yh(i)?4:Bb(i)?9007199254740991:kb(i)?10:11:Jt(28295,{value:i})}function Zn(i,t){if(i===t)return!0;const e=Rr(i);if(e!==Rr(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return lc(i).isEqual(lc(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=br(r.timestampValue),a=br(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(r,s){return Ss(r.bytesValue).isEqual(Ss(s.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(r,s){return Ke(r.geoPointValue.latitude)===Ke(s.geoPointValue.latitude)&&Ke(r.geoPointValue.longitude)===Ke(s.geoPointValue.longitude)}(i,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ke(r.integerValue)===Ke(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=Ke(r.doubleValue),a=Ke(s.doubleValue);return o===a?cc(o)===cc(a):isNaN(o)&&isNaN(a)}return!1}(i,t);case 9:return Es(i.arrayValue.values||[],t.arrayValue.values||[],Zn);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(tp(o)!==tp(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Zn(o[l],a[l])))return!1;return!0}(i,t);default:return Jt(52216,{left:i})}}function xo(i,t){return(i.values||[]).find(e=>Zn(e,t))!==void 0}function xs(i,t){if(i===t)return 0;const e=Rr(i),n=Rr(t);if(e!==n)return ue(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return ue(i.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Ke(s.integerValue||s.doubleValue),l=Ke(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(i,t);case 3:return np(i.timestampValue,t.timestampValue);case 4:return np(lc(i),lc(t));case 5:return xu(i.stringValue,t.stringValue);case 6:return function(s,o){const a=Ss(s),l=Ss(o);return a.compareTo(l)}(i.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=ue(a[u],l[u]);if(h!==0)return h}return ue(a.length,l.length)}(i.referenceValue,t.referenceValue);case 8:return function(s,o){const a=ue(Ke(s.latitude),Ke(o.latitude));return a!==0?a:ue(Ke(s.longitude),Ke(o.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return ip(i.arrayValue,t.arrayValue);case 10:return function(s,o){var f,m,S,M;const a=s.fields||{},l=o.fields||{},u=(f=a[Tu])==null?void 0:f.arrayValue,h=(m=l[Tu])==null?void 0:m.arrayValue,d=ue(((S=u==null?void 0:u.values)==null?void 0:S.length)||0,((M=h==null?void 0:h.values)==null?void 0:M.length)||0);return d!==0?d:ip(u,h)}(i.mapValue,t.mapValue);case 11:return function(s,o){if(s===Aa.mapValue&&o===Aa.mapValue)return 0;if(s===Aa.mapValue)return 1;if(o===Aa.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const f=xu(l[d],h[d]);if(f!==0)return f;const m=xs(a[l[d]],u[h[d]]);if(m!==0)return m}return ue(l.length,h.length)}(i.mapValue,t.mapValue);default:throw Jt(23264,{he:e})}}function np(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return ue(i,t);const e=br(i),n=br(t),r=ue(e.seconds,n.seconds);return r!==0?r:ue(e.nanos,n.nanos)}function ip(i,t){const e=i.values||[],n=t.values||[];for(let r=0;r<e.length&&r<n.length;++r){const s=xs(e[r],n[r]);if(s)return s}return ue(e.length,n.length)}function Ts(i){return Mu(i)}function Mu(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const n=br(e);return`time(${n.seconds},${n.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return Ss(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return Xt.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let n="[",r=!0;for(const s of e.values||[])r?r=!1:n+=",",n+=Mu(s);return n+"]"}(i.arrayValue):"mapValue"in i?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",s=!0;for(const o of n)s?s=!1:r+=",",r+=`${o}:${Mu(e.fields[o])}`;return r+"}"}(i.mapValue):Jt(61005,{value:i})}function Ba(i){switch(Rr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Eh(i);return t?16+Ba(t):16;case 5:return 2*i.stringValue.length;case 6:return Ss(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((r,s)=>r+Ba(s),0)}(i.arrayValue);case 10:case 11:return function(n){let r=0;return Os(n.fields,(s,o)=>{r+=s.length+Ba(o)}),r}(i.mapValue);default:throw Jt(13486,{value:i})}}function Au(i){return!!i&&"integerValue"in i}function Sh(i){return!!i&&"arrayValue"in i}function za(i){return!!i&&"mapValue"in i}function kb(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)==null?void 0:e.fields)||{})[Rg])==null?void 0:n.stringValue)===Cg}function uo(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const t={mapValue:{fields:{}}};return Os(i.mapValue.fields,(e,n)=>t.mapValue.fields[e]=uo(n)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=uo(i.arrayValue.values[e]);return t}return{...i}}function Bb(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===Vb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t){this.value=t}static empty(){return new On({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!za(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=uo(e)}setAll(t){let e=Ye.emptyPath(),n={},r=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,n,r),n={},r=[],e=a.popLast()}o?n[a.lastSegment()]=uo(o):r.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());za(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Zn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];za(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Os(e,(r,s)=>t[r]=s);for(const r of n)delete t[r]}clone(){return new On(uo(this.value))}}function Ig(i){const t=[];return Os(i.fields,(e,n)=>{const r=new Ye([e]);if(za(n)){const s=Ig(n.mapValue).fields;if(s.length===0)t.push(r);else for(const o of s)t.push(r.child(o))}else t.push(r)}),new Bn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,e,n,r,s,o,a){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Pn(t,0,Me.min(),Me.min(),Me.min(),On.empty(),0)}static newFoundDocument(t,e,n,r){return new Pn(t,1,e,Me.min(),n,r,0)}static newNoDocument(t,e){return new Pn(t,2,e,Me.min(),Me.min(),On.empty(),0)}static newUnknownDocument(t,e){return new Pn(t,3,e,Me.min(),Me.min(),On.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=On.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=On.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Me.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Pn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Pn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,e){this.position=t,this.inclusive=e}}function rp(i,t,e){let n=0;for(let r=0;r<i.position.length;r++){const s=t[r],o=i.position[r];if(s.field.isKeyField()?n=Xt.comparator(Xt.fromName(o.referenceValue),e.key):n=xs(o,e.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function sp(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!Zn(i.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,e="asc"){this.field=t,this.dir=e}}function zb(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{}class qe extends Pg{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Gb(t,e,n):e==="array-contains"?new qb(t,n):e==="in"?new $b(t,n):e==="not-in"?new jb(t,n):e==="array-contains-any"?new Kb(t,n):new qe(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Wb(t,n):new Xb(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(xs(e,this.value)):e!==null&&Rr(this.value)===Rr(e)&&this.matchesComparison(xs(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Jt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ki extends Pg{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ki(t,e)}matches(t){return Dg(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Dg(i){return i.op==="and"}function Lg(i){return Hb(i)&&Dg(i)}function Hb(i){for(const t of i.filters)if(t instanceof Ki)return!1;return!0}function wu(i){if(i instanceof qe)return i.field.canonicalString()+i.op.toString()+Ts(i.value);if(Lg(i))return i.filters.map(t=>wu(t)).join(",");{const t=i.filters.map(e=>wu(e)).join(",");return`${i.op}(${t})`}}function Ng(i,t){return i instanceof qe?function(n,r){return r instanceof qe&&n.op===r.op&&n.field.isEqual(r.field)&&Zn(n.value,r.value)}(i,t):i instanceof Ki?function(n,r){return r instanceof Ki&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,o,a)=>s&&Ng(o,r.filters[a]),!0):!1}(i,t):void Jt(19439)}function Ug(i){return i instanceof qe?function(e){return`${e.field.canonicalString()} ${e.op} ${Ts(e.value)}`}(i):i instanceof Ki?function(e){return e.op.toString()+" {"+e.getFilters().map(Ug).join(" ,")+"}"}(i):"Filter"}class Gb extends qe{constructor(t,e,n){super(t,e,n),this.key=Xt.fromName(n.referenceValue)}matches(t){const e=Xt.comparator(t.key,this.key);return this.matchesComparison(e)}}class Wb extends qe{constructor(t,e){super(t,"in",e),this.keys=Og("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Xb extends qe{constructor(t,e){super(t,"not-in",e),this.keys=Og("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Og(i,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(n=>Xt.fromName(n.referenceValue))}class qb extends qe{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Sh(e)&&xo(e.arrayValue,this.value)}}class $b extends qe{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&xo(this.value.arrayValue,e)}}class jb extends qe{constructor(t,e){super(t,"not-in",e)}matches(t){if(xo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!xo(this.value.arrayValue,e)}}class Kb extends qe{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Sh(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>xo(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(t,e=null,n=[],r=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.Te=null}}function op(i,t=null,e=[],n=[],r=null,s=null,o=null){return new Yb(i,t,e,n,r,s,o)}function xh(i){const t=ve(i);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>wu(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),vh(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ts(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ts(n)).join(",")),t.Te=e}return t.Te}function Th(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!zb(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!Ng(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!sp(i.startAt,t.startAt)&&sp(i.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e=null,n=[],r=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Jb(i,t,e,n,r,s,o,a){return new Cc(i,t,e,n,r,s,o,a)}function Qb(i){return new Cc(i)}function ap(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Zb(i){return Xt.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function tR(i){return i.collectionGroup!==null}function ho(i){const t=ve(i);if(t.Ie===null){t.Ie=[];const e=new Set;for(const s of t.explicitOrderBy)t.Ie.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Je(Ye.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.Ie.push(new fc(s,n))}),e.has(Ye.keyField().canonicalString())||t.Ie.push(new fc(Ye.keyField(),n))}return t.Ie}function yr(i){const t=ve(i);return t.Ee||(t.Ee=eR(t,ho(i))),t.Ee}function eR(i,t){if(i.limitType==="F")return op(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new fc(r.field,s)});const e=i.endAt?new dc(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new dc(i.startAt.position,i.startAt.inclusive):null;return op(i.path,i.collectionGroup,t,i.filters,i.limit,e,n)}}function bu(i,t,e){return new Cc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function Fg(i,t){return Th(yr(i),yr(t))&&i.limitType===t.limitType}function Vg(i){return`${xh(yr(i))}|lt:${i.limitType}`}function Zs(i){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Ug(r)).join(", ")}]`),vh(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ts(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ts(r)).join(",")),`Target(${n})`}(yr(i))}; limitType=${i.limitType})`}function Mh(i,t){return t.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Xt.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(i,t)&&function(n,r){for(const s of ho(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(i,t)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(i,t)&&function(n,r){return!(n.startAt&&!function(o,a,l){const u=rp(o,a,l);return o.inclusive?u<=0:u<0}(n.startAt,ho(n),r)||n.endAt&&!function(o,a,l){const u=rp(o,a,l);return o.inclusive?u>=0:u>0}(n.endAt,ho(n),r))}(i,t)}function nR(i){return(t,e)=>{let n=!1;for(const r of ho(i)){const s=iR(r,t,e);if(s!==0)return s;n=n||r.field.isKeyField()}return 0}}function iR(i,t,e){const n=i.field.isKeyField()?Xt.comparator(t.key,e.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?xs(l,u):Jt(42886)}(i.field,t,e);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return Jt(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[r,s]of n)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return n.length===1?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Os(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return Tg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=new mn(Xt.comparator);function pc(){return rR}const kg=new mn(Xt.comparator);function wa(...i){let t=kg;for(const e of i)t=t.insert(e.key,e);return t}function Bg(i){let t=kg;return i.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function _r(){return fo()}function zg(){return fo()}function fo(){return new Cr(i=>i.toString(),(i,t)=>i.isEqual(t))}const sR=new mn(Xt.comparator),oR=new Je(Xt.comparator);function sn(...i){let t=oR;for(const e of i)t=t.add(e);return t}const aR=new Je(ue);function cR(){return aR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cc(t)?"-0":t}}function Hg(i){return{integerValue:""+i}}function lR(i,t){return Pb(t)?Hg(t):Ah(i,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this._=void 0}}function uR(i,t,e){return i instanceof To?function(r,s){const o={fields:{[Ag]:{stringValue:Mg},[bg]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&yh(s)&&(s=Eh(s)),s&&(o.fields[wg]=s),{mapValue:o}}(e,t):i instanceof Mo?Wg(i,t):i instanceof Ao?Xg(i,t):function(r,s){const o=Gg(r,s),a=cp(o)+cp(r.Ae);return Au(o)&&Au(r.Ae)?Hg(a):Ah(r.serializer,a)}(i,t)}function hR(i,t,e){return i instanceof Mo?Wg(i,t):i instanceof Ao?Xg(i,t):e}function Gg(i,t){return i instanceof mc?function(n){return Au(n)||function(s){return!!s&&"doubleValue"in s}(n)}(t)?t:{integerValue:0}:null}class To extends Ic{}class Mo extends Ic{constructor(t){super(),this.elements=t}}function Wg(i,t){const e=qg(t);for(const n of i.elements)e.some(r=>Zn(r,n))||e.push(n);return{arrayValue:{values:e}}}class Ao extends Ic{constructor(t){super(),this.elements=t}}function Xg(i,t){let e=qg(t);for(const n of i.elements)e=e.filter(r=>!Zn(r,n));return{arrayValue:{values:e}}}class mc extends Ic{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function cp(i){return Ke(i.integerValue||i.doubleValue)}function qg(i){return Sh(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(t,e){this.field=t,this.transform=e}}function fR(i,t){return i.field.isEqual(t.field)&&function(n,r){return n instanceof Mo&&r instanceof Mo||n instanceof Ao&&r instanceof Ao?Es(n.elements,r.elements,Zn):n instanceof mc&&r instanceof mc?Zn(n.Ae,r.Ae):n instanceof To&&r instanceof To}(i.transform,t.transform)}class pR{constructor(t,e){this.version=t,this.transformResults=e}}class di{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new di}static exists(t){return new di(void 0,t)}static updateTime(t){return new di(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ha(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class Pc{}function $g(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new Kg(i.key,di.none()):new Uo(i.key,i.data,di.none());{const e=i.data,n=On.empty();let r=new Je(Ye.comparator);for(let s of t.fields)if(!r.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?n.delete(s):n.set(s,o),r=r.add(s)}return new Ir(i.key,n,new Bn(r.toArray()),di.none())}}function mR(i,t,e){i instanceof Uo?function(r,s,o){const a=r.value.clone(),l=up(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(i,t,e):i instanceof Ir?function(r,s,o){if(!Ha(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=up(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(jg(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(i,t,e):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function po(i,t,e,n){return i instanceof Uo?function(s,o,a,l){if(!Ha(s.precondition,o))return a;const u=s.value.clone(),h=hp(s.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(i,t,e,n):i instanceof Ir?function(s,o,a,l){if(!Ha(s.precondition,o))return a;const u=hp(s.fieldTransforms,l,o),h=o.data;return h.setAll(jg(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(i,t,e,n):function(s,o,a){return Ha(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(i,t,e)}function gR(i,t){let e=null;for(const n of i.fieldTransforms){const r=t.data.field(n.field),s=Gg(n.transform,r||null);s!=null&&(e===null&&(e=On.empty()),e.set(n.field,s))}return e||null}function lp(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Es(n,r,(s,o)=>fR(s,o))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class Uo extends Pc{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ir extends Pc{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function jg(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=i.data.field(e);t.set(e,n)}}),t}function up(i,t,e){const n=new Map;Ie(i.length===e.length,32656,{Ve:e.length,de:i.length});for(let r=0;r<e.length;r++){const s=i[r],o=s.transform,a=t.data.field(s.field);n.set(s.field,hR(o,a,e[r]))}return n}function hp(i,t,e){const n=new Map;for(const r of i){const s=r.transform,o=e.data.field(r.field);n.set(r.field,uR(s,o,t))}return n}class Kg extends Pc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _R extends Pc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&mR(s,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=po(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=po(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=zg();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(r.key)?null:a;const l=$g(o,a);l!==null&&n.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(Me.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),sn())}isEqual(t){return this.batchId===t.batchId&&Es(this.mutations,t.mutations,(e,n)=>lp(e,n))&&Es(this.baseMutations,t.baseMutations,(e,n)=>lp(e,n))}}class wh{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Ie(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let r=function(){return sR}();const s=t.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,n[o].version);return new wh(t,e,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,ie;function ER(i){switch(i){case rt.OK:return Jt(64938);case rt.CANCELLED:case rt.UNKNOWN:case rt.DEADLINE_EXCEEDED:case rt.RESOURCE_EXHAUSTED:case rt.INTERNAL:case rt.UNAVAILABLE:case rt.UNAUTHENTICATED:return!1;case rt.INVALID_ARGUMENT:case rt.NOT_FOUND:case rt.ALREADY_EXISTS:case rt.PERMISSION_DENIED:case rt.FAILED_PRECONDITION:case rt.ABORTED:case rt.OUT_OF_RANGE:case rt.UNIMPLEMENTED:case rt.DATA_LOSS:return!0;default:return Jt(15467,{code:i})}}function SR(i){if(i===void 0)return wr("GRPC error has no .code"),rt.UNKNOWN;switch(i){case De.OK:return rt.OK;case De.CANCELLED:return rt.CANCELLED;case De.UNKNOWN:return rt.UNKNOWN;case De.DEADLINE_EXCEEDED:return rt.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return rt.RESOURCE_EXHAUSTED;case De.INTERNAL:return rt.INTERNAL;case De.UNAVAILABLE:return rt.UNAVAILABLE;case De.UNAUTHENTICATED:return rt.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return rt.INVALID_ARGUMENT;case De.NOT_FOUND:return rt.NOT_FOUND;case De.ALREADY_EXISTS:return rt.ALREADY_EXISTS;case De.PERMISSION_DENIED:return rt.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return rt.FAILED_PRECONDITION;case De.ABORTED:return rt.ABORTED;case De.OUT_OF_RANGE:return rt.OUT_OF_RANGE;case De.UNIMPLEMENTED:return rt.UNIMPLEMENTED;case De.DATA_LOSS:return rt.DATA_LOSS;default:return Jt(39323,{code:i})}}(ie=De||(De={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new hh([4294967295,4294967295],0);class xR{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ru(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function TR(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function MR(i,t){return Ru(i,t.toTimestamp())}function ls(i){return Ie(!!i,49232),Me.fromTimestamp(function(e){const n=br(e);return new Ae(n.seconds,n.nanos)}(i))}function Yg(i,t){return Cu(i,t).canonicalString()}function Cu(i,t){const e=function(r){return new be(["projects",r.projectId,"databases",r.database])}(i).child("documents");return t===void 0?e:e.child(t)}function AR(i){const t=be.fromString(i);return Ie(LR(t),10190,{key:t.toString()}),t}function Iu(i,t){return Yg(i.databaseId,t.path)}function wR(i){const t=AR(i);return t.length===4?be.emptyPath():RR(t)}function bR(i){return new be(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function RR(i){return Ie(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function dp(i,t,e){return{name:Iu(i,t),fields:e.value.mapValue.fields}}function CR(i,t){let e;if(t instanceof Uo)e={update:dp(i,t.key,t.value)};else if(t instanceof Kg)e={delete:Iu(i,t.key)};else if(t instanceof Ir)e={update:dp(i,t.key,t.data),updateMask:DR(t.fieldMask)};else{if(!(t instanceof _R))return Jt(16599,{dt:t.type});e={verify:Iu(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(s,o){const a=o.transform;if(a instanceof To)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Mo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ao)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof mc)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Jt(20930,{transform:o.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:MR(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Jt(27497)}(i,t.precondition)),e}function IR(i,t){return i&&i.length>0?(Ie(t!==void 0,14353),i.map(e=>function(r,s){let o=r.updateTime?ls(r.updateTime):ls(s);return o.isEqual(Me.min())&&(o=ls(s)),new pR(o,r.transformResults||[])}(e,t))):[]}function PR(i){let t=wR(i.parent);const e=i.structuredQuery,n=e.from?e.from.length:0;let r=null;if(n>0){Ie(n===1,65062);const h=e.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let s=[];e.where&&(s=function(d){const f=Jg(d);return f instanceof Ki&&Lg(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(d){return d.map(f=>function(S){return new fc(ts(S.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(d){let f;return f=typeof d=="object"?d.value:d,vh(f)?null:f}(e.limit));let l=null;e.startAt&&(l=function(d){const f=!!d.before,m=d.values||[];return new dc(m,f)}(e.startAt));let u=null;return e.endAt&&(u=function(d){const f=!d.before,m=d.values||[];return new dc(m,f)}(e.endAt)),Jb(t,r,o,s,a,"F",l,u)}function Jg(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ts(e.unaryFilter.field);return qe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ts(e.unaryFilter.field);return qe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ts(e.unaryFilter.field);return qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ts(e.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Jt(61313);default:return Jt(60726)}}(i):i.fieldFilter!==void 0?function(e){return qe.create(ts(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Jt(58110);default:return Jt(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return Ki.create(e.compositeFilter.filters.map(n=>Jg(n)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Jt(1026)}}(e.compositeFilter.op))}(i):Jt(30097,{filter:i})}function ts(i){return Ye.fromServerFormat(i.fieldPath)}function DR(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function LR(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function Qg(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(t){this.yt=t}}function UR(i){const t=PR({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?bu(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.Sn=new FR}addToCollectionParentIndex(t,e){return this.Sn.add(e),et.resolve()}getCollectionParents(t,e){return et.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return et.resolve()}deleteFieldIndex(t,e){return et.resolve()}deleteAllFieldIndexes(t){return et.resolve()}createTargetIndexes(t,e){return et.resolve()}getDocumentsMatchingTarget(t,e){return et.resolve(null)}getIndexType(t,e){return et.resolve(0)}getFieldIndexes(t,e){return et.resolve([])}getNextCollectionGroupToUpdate(t){return et.resolve(null)}getMinOffset(t,e){return et.resolve(ji.min())}getMinOffsetFromCollectionGroup(t,e){return et.resolve(ji.min())}updateCollectionGroup(t,e,n){return et.resolve()}updateIndexEntries(t,e){return et.resolve()}}class FR{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Je(be.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Je(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Zg=41943040;class fn{static withCacheSize(t){return new fn(t,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn.DEFAULT_COLLECTION_PERCENTILE=10,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fn.DEFAULT=new fn(Zg,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fn.DISABLED=new fn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Ms(0)}static ar(){return new Ms(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="LruGarbageCollector",VR=1048576;function mp([i,t],[e,n]){const r=ue(i,e);return r===0?ue(t,n):r}class kR{constructor(t){this.Pr=t,this.buffer=new Je(mp),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();mp(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class BR{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){wt(pp,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){No(e)?wt(pp,"Ignoring IndexedDB error during garbage collection: ",e):await mh(e)}await this.Ar(3e5)})}}class zR{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return et.resolve(gh.ce);const n=new kR(e);return this.Vr.forEachTarget(t,r=>n.Er(r.sequenceNumber)).next(()=>this.Vr.mr(t,r=>n.Er(r))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(wt("LruGarbageCollector","Garbage collection skipped; disabled"),et.resolve(fp)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(wt("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fp):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let n,r,s,o,a,l,u;const h=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(wt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(t,r))).next(d=>(n=d,a=Date.now(),this.removeTargets(t,n,e))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(t,n))).next(d=>(u=Date.now(),Zr()<=ee.DEBUG&&wt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),et.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:d})))}}function HR(i,t){return new zR(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(){this.changes=new Cr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Pn.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?et.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(n!==null&&po(n.mutation,r,Bn.empty(),Ae.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,sn()).next(()=>n))}getLocalViewOfDocuments(t,e,n=sn()){const r=_r();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(s=>{let o=wa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const n=_r();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,sn()))}populateOverlays(t,e,n){const r=[];return n.forEach(s=>{e.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,n,r){let s=pc();const o=fo(),a=function(){return fo()}();return e.forEach((l,u)=>{const h=n.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Ir)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),po(h.mutation,u,h.mutation.getFieldMask(),Ae.now())):o.set(u.key,Bn.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,h)=>o.set(u,h)),e.forEach((u,h)=>a.set(u,new WR(h,o.get(u)??null))),a))}recalculateAndSaveOverlays(t,e){const n=fo();let r=new mn((o,a)=>o-a),s=sn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=e.get(l);if(u===null)return;let h=n.get(l)||Bn.empty();h=a.applyToLocalView(u,h),n.set(l,h);const d=(r.get(a.batchId)||sn()).add(l);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=zg();h.forEach(f=>{if(!s.has(f)){const m=$g(e.get(f),n.get(f));m!==null&&d.set(f,m),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return et.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,r){return Zb(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):tR(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):et.resolve(_r());let a=So,l=s;return o.next(u=>et.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?et.resolve():this.remoteDocumentCache.getEntry(t,h).next(f=>{l=l.insert(h,f)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,sn())).next(h=>({batchId:a,changes:Bg(h)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Xt(e)).next(n=>{let r=wa();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let o=wa();return this.indexManager.getCollectionParents(t,s).next(a=>et.forEach(a,l=>{const u=function(d,f){return new Cc(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(e,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,n,r).next(h=>{h.forEach((d,f)=>{o=o.insert(d,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r))).next(o=>{s.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Pn.newInvalidDocument(h)))});let a=wa();return o.forEach((l,u)=>{const h=s.get(l);h!==void 0&&po(h.mutation,u,Bn.empty(),Ae.now()),Mh(e,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return et.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:ls(r.createTime)}}(e)),et.resolve()}getNamedQuery(t,e){return et.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(r){return{name:r.name,query:UR(r.bundledQuery),readTime:ls(r.readTime)}}(e)),et.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this.overlays=new mn(Xt.comparator),this.Lr=new Map}getOverlay(t,e){return et.resolve(this.overlays.get(e))}getOverlays(t,e){const n=_r();return et.forEach(e,r=>this.getOverlay(t,r).next(s=>{s!==null&&n.set(r,s)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((r,s)=>{this.bt(t,e,s)}),et.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Lr.get(n);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(n)),et.resolve()}getOverlaysForCollection(t,e,n){const r=_r(),s=e.length+1,o=new Xt(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>n&&r.set(l.getKey(),l)}return et.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new mn((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>n){let h=s.get(u.largestBatchId);h===null&&(h=_r(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=_r(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return et.resolve(a)}bt(t,e,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new yR(e,n));let s=this.Lr.get(e);s===void 0&&(s=sn(),this.Lr.set(e,s)),this.Lr.set(e,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.sessionToken=Qn.EMPTY_BYTE_STRING}getSessionToken(t){return et.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,et.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this.kr=new Je(We.Kr),this.qr=new Je(We.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const n=new We(t,e);this.kr=this.kr.add(n),this.qr=this.qr.add(n)}$r(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Wr(new We(t,e))}Qr(t,e){t.forEach(n=>this.removeReference(n,e))}Gr(t){const e=new Xt(new be([])),n=new We(e,t),r=new We(e,t+1),s=[];return this.qr.forEachInRange([n,r],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new Xt(new be([])),n=new We(e,t),r=new We(e,t+1);let s=sn();return this.qr.forEachInRange([n,r],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new We(t,0),n=this.kr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class We{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return Xt.comparator(t.key,e.key)||ue(t.Hr,e.Hr)}static Ur(t,e){return ue(t.Hr,e.Hr)||Xt.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new Je(We.Kr)}checkEmpty(t){return et.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,r){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vR(s,e,n,r);this.mutationQueue.push(o);for(const a of r)this.Jr=this.Jr.add(new We(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return et.resolve(o)}lookupMutationBatch(t,e){return et.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Xr(n),s=r<0?0:r;return et.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return et.resolve(this.mutationQueue.length===0?_h:this.Yn-1)}getAllMutationBatches(t){return et.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new We(e,0),r=new We(e,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([n,r],o=>{const a=this.Zr(o.Hr);s.push(a)}),et.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Je(ue);return e.forEach(r=>{const s=new We(r,0),o=new We(r,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],a=>{n=n.add(a.Hr)})}),et.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;Xt.isDocumentKey(s)||(s=s.child(""));const o=new We(new Xt(s),0);let a=new Je(ue);return this.Jr.forEachWhile(l=>{const u=l.key.path;return!!n.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.Hr)),!0)},o),et.resolve(this.Yr(a))}Yr(t){const e=[];return t.forEach(n=>{const r=this.Zr(n);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){Ie(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Jr;return et.forEach(e.mutations,r=>{const s=new We(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Jr=n})}nr(t){}containsKey(t,e){const n=new We(e,0),r=this.Jr.firstAfterOrEqual(n);return et.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,et.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(t){this.ti=t,this.docs=function(){return new mn(Xt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,o=this.ti(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return et.resolve(n?n.document.mutableCopy():Pn.newInvalidDocument(e))}getEntries(t,e){let n=pc();return e.forEach(r=>{const s=this.docs.get(r);n=n.insert(r,s?s.document.mutableCopy():Pn.newInvalidDocument(r))}),et.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=pc();const o=e.path,a=new Xt(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||bb(wb(h),n)<=0||(r.has(h.key)||Mh(e,h))&&(s=s.insert(h.key,h.mutableCopy()))}return et.resolve(s)}getAllFromCollectionGroup(t,e,n,r){Jt(9500)}ni(t,e){return et.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new JR(this)}getSize(t){return et.resolve(this.size)}}class JR extends GR{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.Mr.addEntry(t,r)):this.Mr.removeEntry(n)}),et.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(t){this.persistence=t,this.ri=new Cr(e=>xh(e),Th),this.lastRemoteSnapshotVersion=Me.min(),this.highestTargetId=0,this.ii=0,this.si=new bh,this.targetCount=0,this.oi=Ms._r()}forEachTarget(t,e){return this.ri.forEach((n,r)=>e(r)),et.resolve()}getLastRemoteSnapshotVersion(t){return et.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return et.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),et.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ii&&(this.ii=e),et.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Ms(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,et.resolve()}updateTargetData(t,e){return this.lr(e),et.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,et.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=e&&n.get(a.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),et.waitFor(s).next(()=>r)}getTargetCount(t){return et.resolve(this.targetCount)}getTargetData(t,e){const n=this.ri.get(e)||null;return et.resolve(n)}addMatchingKeys(t,e,n){return this.si.$r(e,n),et.resolve()}removeMatchingKeys(t,e,n){this.si.Qr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),et.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),et.resolve()}getMatchingKeysForTargetId(t,e){const n=this.si.jr(e);return et.resolve(n)}containsKey(t,e){return et.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(t,e){this._i={},this.overlays={},this.ai=new gh(0),this.ui=!1,this.ui=!0,this.ci=new jR,this.referenceDelegate=t(this),this.li=new QR(this),this.indexManager=new OR,this.remoteDocumentCache=function(r){return new YR(r)}(n=>this.referenceDelegate.hi(n)),this.serializer=new NR(e),this.Pi=new qR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new $R,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this._i[t.toKey()];return n||(n=new KR(e,this.referenceDelegate),this._i[t.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,n){wt("MemoryPersistence","Starting transaction:",t);const r=new ZR(this.ai.next());return this.referenceDelegate.Ti(),n(r).next(s=>this.referenceDelegate.Ii(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ei(t,e){return et.or(Object.values(this._i).map(n=>()=>n.containsKey(t,e)))}}class ZR extends Cb{constructor(t){super(),this.currentSequenceNumber=t}}class Rh{constructor(t){this.persistence=t,this.Ri=new bh,this.Ai=null}static Vi(t){return new Rh(t)}get di(){if(this.Ai)return this.Ai;throw Jt(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.di.delete(n.toString()),et.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.di.add(n.toString()),et.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),et.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(r=>this.di.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(s=>this.di.add(s.toString()))}).next(()=>n.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return et.forEach(this.di,n=>{const r=Xt.fromPath(n);return this.mi(t,r).next(s=>{s||e.removeEntry(r,Me.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(n=>{n?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return et.or([()=>et.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class gc{constructor(t,e){this.persistence=t,this.fi=new Cr(n=>Db(n.path),(n,r)=>n.isEqual(r)),this.garbageCollector=HR(this,e)}static Vi(t,e){return new gc(t,e)}Ti(){}Ii(t){return et.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(r=>n+r))}pr(t){let e=0;return this.mr(t,n=>{e++}).next(()=>e)}mr(t,e){return et.forEach(this.fi,(n,r)=>this.wr(t,n,r).next(s=>s?et.resolve():e(r)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.ni(t,o=>this.wr(t,o,e).next(a=>{a||(n++,s.removeEntry(o,Me.min()))})).next(()=>s.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),et.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),et.resolve()}removeReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),et.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),et.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Ba(t.data.value)),e}wr(t,e,n){return et.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const r=this.fi.get(e);return et.resolve(r!==void 0&&r>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Ts=n,this.Is=r}static Es(t,e){let n=sn(),r=sn();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Ch(t,e.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return jT()?8:Ib(an())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.gs(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(t,e,r,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new tC;return this.ys(t,e,o).next(a=>{if(s.result=a,this.As)return this.ws(t,e,o,a.size)})}).next(()=>s.result)}ws(t,e,n,r){return n.documentReadCount<this.Vs?(Zr()<=ee.DEBUG&&wt("QueryEngine","SDK will not create cache indexes for query:",Zs(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),et.resolve()):(Zr()<=ee.DEBUG&&wt("QueryEngine","Query:",Zs(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(Zr()<=ee.DEBUG&&wt("QueryEngine","The SDK decides to create cache indexes for query:",Zs(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,yr(e))):et.resolve())}gs(t,e){if(ap(e))return et.resolve(null);let n=yr(e);return this.indexManager.getIndexType(t,n).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=bu(e,null,"F"),n=yr(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{const o=sn(...s);return this.fs.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,n).next(l=>{const u=this.bs(e,a);return this.Ss(e,u,o,l.readTime)?this.gs(t,bu(e,null,"F")):this.Ds(t,u,e,l)}))})))}ps(t,e,n,r){return ap(e)||r.isEqual(Me.min())?et.resolve(null):this.fs.getDocuments(t,n).next(s=>{const o=this.bs(e,s);return this.Ss(e,o,n,r)?et.resolve(null):(Zr()<=ee.DEBUG&&wt("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Zs(e)),this.Ds(t,o,e,Ab(r,So)).next(a=>a))})}bs(t,e){let n=new Je(nR(t));return e.forEach((r,s)=>{Mh(t,s)&&(n=n.add(s))}),n}Ss(t,e,n,r){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ys(t,e,n){return Zr()<=ee.DEBUG&&wt("QueryEngine","Using full collection scan to execute query:",Zs(e)),this.fs.getDocumentsMatchingQuery(t,e,ji.min(),n)}Ds(t,e,n,r){return this.fs.getDocumentsMatchingQuery(t,n,r).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="LocalStore";class iC{constructor(t,e,n,r){this.persistence=t,this.Cs=e,this.serializer=r,this.vs=new mn(ue),this.Fs=new Cr(s=>xh(s),Th),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(n)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new XR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function rC(i,t,e,n){return new iC(i,t,e,n)}async function e_(i,t){const e=ve(i);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(s=>(r=s,e.Os(t),e.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],a=[];let l=sn();for(const u of r){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return e.localDocuments.getDocuments(n,l).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:a}))})})}function sC(i,t){const e=ve(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=t.batch.keys(),s=e.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,f=d.keys();let m=et.resolve();return f.forEach(S=>{m=m.next(()=>h.getEntry(l,S)).next(M=>{const _=u.docVersions.get(S);Ie(_!==null,48541),M.version.compareTo(_)<0&&(d.applyToRemoteDocument(M,u),M.isValidDocument()&&(M.setReadTime(u.commitVersion),h.addEntry(M)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(e,n,t,s).next(()=>s.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(a){let l=sn();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>e.localDocuments.getDocuments(n,r))})}function oC(i){const t=ve(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function aC(i,t){const e=ve(i);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=_h),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}class gp{constructor(){this.activeTargetIds=cR()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class cC{constructor(){this.vo=new gp,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,n){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new gp,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="ConnectivityMonitor";class vp{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){wt(_p,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){wt(_p,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba=null;function Pu(){return ba===null?ba=function(){return 268435456+Math.round(2147483648*Math.random())}():ba++,"0x"+ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="RestConnection",uC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class hC{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===uc?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(t,e,n,r,s){const o=Pu(),a=this.Qo(t,e.toUriEncodedString());wt(Il,`Sending RPC '${t}' ${o}:`,a,n);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,r,s);const{host:u}=new URL(a),h=Ds(u);return this.zo(t,a,l,n,h).then(d=>(wt(Il,`Received RPC '${t}' ${o}: `,d),d),d=>{throw Eo(Il,`RPC '${t}' ${o} failed with error: `,d,"url: ",a,"request:",n),d})}jo(t,e,n,r,s,o){return this.Wo(t,e,n,r,s)}Go(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Us}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((r,s)=>t[s]=r),n&&n.headers.forEach((r,s)=>t[s]=r)}Qo(t,e){const n=uC[t];let r=`${this.qo}/v1/${e}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="WebChannelConnection",to=(i,t,e)=>{i.listen(t,n=>{try{e(n)}catch(r){setTimeout(()=>{throw r},0)}})};class us extends hC{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!us.c_){const t=mg();to(t,pg.STAT_EVENT,e=>{e.stat===Su.PROXY?wt(nn,"STAT_EVENT: detected buffering proxy"):e.stat===Su.NOPROXY&&wt(nn,"STAT_EVENT: detected no buffering proxy")}),us.c_=!0}}zo(t,e,n,r,s){const o=Pu();return new Promise((a,l)=>{const u=new dg;u.setWithCredentials(!0),u.listenOnce(fg.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ka.NO_ERROR:const d=u.getResponseJson();wt(nn,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(d)),a(d);break;case ka.TIMEOUT:wt(nn,`RPC '${t}' ${o} timed out`),l(new It(rt.DEADLINE_EXCEEDED,"Request time out"));break;case ka.HTTP_ERROR:const f=u.getStatus();if(wt(nn,`RPC '${t}' ${o} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const S=m==null?void 0:m.error;if(S&&S.status&&S.message){const M=function(g){const R=g.toLowerCase().replace(/_/g,"-");return Object.values(rt).indexOf(R)>=0?R:rt.UNKNOWN}(S.status);l(new It(M,S.message))}else l(new It(rt.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new It(rt.UNAVAILABLE,"Connection failed."));break;default:Jt(9055,{l_:t,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{wt(nn,`RPC '${t}' ${o} completed.`)}});const h=JSON.stringify(r);wt(nn,`RPC '${t}' ${o} sending request:`,r),u.send(e,"POST",h,n,15)})}T_(t,e,n){const r=Pu(),s=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=s.join("");wt(nn,`Creating RPC '${t}' stream ${r}: ${u}`,a);const h=o.createWebChannel(u,a);this.I_(h);let d=!1,f=!1;const m=new dC({Ho:S=>{f?wt(nn,`Not sending because RPC '${t}' stream ${r} is closed:`,S):(d||(wt(nn,`Opening RPC '${t}' stream ${r} transport.`),h.open(),d=!0),wt(nn,`RPC '${t}' stream ${r} sending:`,S),h.send(S))},Jo:()=>h.close()});return to(h,no.EventType.OPEN,()=>{f||(wt(nn,`RPC '${t}' stream ${r} transport opened.`),m.i_())}),to(h,no.EventType.CLOSE,()=>{f||(f=!0,wt(nn,`RPC '${t}' stream ${r} transport closed`),m.o_(),this.E_(h))}),to(h,no.EventType.ERROR,S=>{f||(f=!0,Eo(nn,`RPC '${t}' stream ${r} transport errored. Name:`,S.name,"Message:",S.message),m.o_(new It(rt.UNAVAILABLE,"The operation could not be completed")))}),to(h,no.EventType.MESSAGE,S=>{var M;if(!f){const _=S.data[0];Ie(!!_,16349);const g=_,R=(g==null?void 0:g.error)||((M=g[0])==null?void 0:M.error);if(R){wt(nn,`RPC '${t}' stream ${r} received error:`,R);const b=R.status;let L=function(T){const x=De[T];if(x!==void 0)return SR(x)}(b),V=R.message;b==="NOT_FOUND"&&V.includes("database")&&V.includes("does not exist")&&V.includes(this.databaseId.database)&&Eo(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),L===void 0&&(L=rt.INTERNAL,V="Unknown error status: "+b+" with message "+R.message),f=!0,m.o_(new It(L,V)),h.close()}else wt(nn,`RPC '${t}' stream ${r} received:`,_),m.__(_)}}),us.u_(),setTimeout(()=>{m.s_()},0),m}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,n){super.Go(t,e,n),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return gg()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(i){return new us(i)}function Pl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(i){return new xR(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */us.c_=!1;class n_{constructor(t,e,n=1e3,r=1.5,s=6e4){this.Ci=t,this.timerId=e,this.R_=n,this.A_=r,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,e-n);r>0&&wt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="PersistentStream";class pC{constructor(t,e,n,r,s,o,a,l){this.Ci=t,this.b_=n,this.S_=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new n_(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===rt.RESOURCE_EXHAUSTED?(wr(e.toString()),wr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===rt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.D_===e&&this.G_(n,r)},n=>{t(()=>{const r=new It(rt.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(r)})})}G_(t,e){const n=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(r=>{n(()=>this.z_(r))}),this.stream.onMessage(r=>{n(()=>++this.F_==1?this.H_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return wt(yp,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(wt(yp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mC extends pC{constructor(t,e,n,r,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return Ie(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Ie(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Ie(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=IR(t.writeResults,t.commitTime),n=ls(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=bR(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>CR(this.serializer,n))};this.K_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{}class _C extends gC{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new It(rt.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(t,Cu(e,n),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===rt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new It(rt.UNKNOWN,s.toString())})}jo(t,e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(t,Cu(e,n),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===rt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new It(rt.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function vC(i,t,e,n){return new _C(i,t,e,n)}class yC{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(wr(e),this.aa=!1):wt("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="RemoteStore";class EC{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{n.enqueueAndForget(async()=>{Vo(this)&&(wt(Oo,"Restarting streams for network reachability change."),await async function(l){const u=ve(l);u.Ea.add(4),await Fo(u),u.Va.set("Unknown"),u.Ea.delete(4),await Lc(u)}(this))})}),this.Va=new yC(n,r)}}async function Lc(i){if(Vo(i))for(const t of i.Ra)await t(!0)}async function Fo(i){for(const t of i.Ra)await t(!1)}function Vo(i){return ve(i).Ea.size===0}async function i_(i,t,e){if(!No(t))throw t;i.Ea.add(1),await Fo(i),i.Va.set("Offline"),e||(e=()=>oC(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{wt(Oo,"Retrying IndexedDB access"),await e(),i.Ea.delete(1),await Lc(i)})}function r_(i,t){return t().catch(e=>i_(i,e,t))}async function Nc(i){const t=ve(i),e=Yi(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:_h;for(;SC(t);)try{const r=await aC(t.localStore,n);if(r===null){t.Ta.length===0&&e.L_();break}n=r.batchId,xC(t,r)}catch(r){await i_(t,r)}s_(t)&&o_(t)}function SC(i){return Vo(i)&&i.Ta.length<10}function xC(i,t){i.Ta.push(t);const e=Yi(i);e.O_()&&e.Y_&&e.ea(t.mutations)}function s_(i){return Vo(i)&&!Yi(i).x_()&&i.Ta.length>0}function o_(i){Yi(i).start()}async function TC(i){Yi(i).ra()}async function MC(i){const t=Yi(i);for(const e of i.Ta)t.ea(e.mutations)}async function AC(i,t,e){const n=i.Ta.shift(),r=wh.from(n,t,e);await r_(i,()=>i.remoteSyncer.applySuccessfulWrite(r)),await Nc(i)}async function wC(i,t){t&&Yi(i).Y_&&await async function(n,r){if(function(o){return ER(o)&&o!==rt.ABORTED}(r.code)){const s=n.Ta.shift();Yi(n).B_(),await r_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Nc(n)}}(i,t),s_(i)&&o_(i)}async function Ep(i,t){const e=ve(i);e.asyncQueue.verifyOperationInProgress(),wt(Oo,"RemoteStore received new credentials");const n=Vo(e);e.Ea.add(3),await Fo(e),n&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Lc(e)}async function bC(i,t){const e=ve(i);t?(e.Ea.delete(2),await Lc(e)):t||(e.Ea.add(2),await Fo(e),e.Va.set("Unknown"))}function Yi(i){return i.fa||(i.fa=function(e,n,r){const s=ve(e);return s.sa(),new mC(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:TC.bind(null,i),t_:wC.bind(null,i),ta:MC.bind(null,i),na:AC.bind(null,i)}),i.Ra.push(async t=>{t?(i.fa.B_(),await Nc(i)):(await i.fa.stop(),i.Ta.length>0&&(wt(Oo,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))})),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const o=Date.now()+n,a=new Ih(t,e,o,r,s);return a.start(n),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new It(rt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function a_(i,t){if(wr("AsyncQueue",`${t}: ${i}`),No(i))return new It(rt.UNAVAILABLE,`${t}: ${i}`);throw i}class RC{constructor(){this.queries=Sp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const r=ve(e),s=r.queries;r.queries=Sp(),s.forEach((o,a)=>{for(const l of a.ba)l.onError(n)})})(this,new It(rt.ABORTED,"Firestore shutting down"))}}function Sp(){return new Cr(i=>Vg(i),Fg)}function CC(i){i.Ca.forEach(t=>{t.next()})}var xp,Tp;(Tp=xp||(xp={})).Ma="default",Tp.Cache="cache";const IC="SyncEngine";class PC{constructor(t,e,n,r,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Cr(a=>Vg(a),Fg),this.Iu=new Map,this.Eu=new Set,this.Ru=new mn(Xt.comparator),this.Au=new Map,this.Vu=new bh,this.du={},this.mu=new Map,this.fu=Ms.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function DC(i,t,e){const n=OC(i);try{const r=await function(o,a){const l=ve(o),u=Ae.now(),h=a.reduce((m,S)=>m.add(S.key),sn());let d,f;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let S=pc(),M=sn();return l.xs.getEntries(m,h).next(_=>{S=_,S.forEach((g,R)=>{R.isValidDocument()||(M=M.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,S)).next(_=>{d=_;const g=[];for(const R of a){const b=gR(R,d.get(R.key).overlayedDocument);b!=null&&g.push(new Ir(R.key,b,Ig(b.value.mapValue),di.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,g,a)}).next(_=>{f=_;const g=_.applyToLocalDocumentSet(d,M);return l.documentOverlayCache.saveOverlays(m,_.batchId,g)})}).then(()=>({batchId:f.batchId,changes:Bg(d)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let u=o.du[o.currentUser.toKey()];u||(u=new mn(ue)),u=u.insert(a,l),o.du[o.currentUser.toKey()]=u}(n,r.batchId,e),await Uc(n,r.changes),await Nc(n.remoteStore)}catch(r){const s=a_(r,"Failed to persist write");e.reject(s)}}function Mp(i,t,e){const n=ve(i);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const r=[];n.Tu.forEach((s,o)=>{const a=o.view.va(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=ve(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const f of d.ba)f.va(a)&&(u=!0)}),u&&CC(l)}(n.eventManager,t),r.length&&n.Pu.J_(r),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function LC(i,t){const e=ve(i),n=t.batch.batchId;try{const r=await sC(e.localStore,t);l_(e,n,null),c_(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Uc(e,r)}catch(r){await mh(r)}}async function NC(i,t,e){const n=ve(i);try{const r=await function(o,a){const l=ve(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Ie(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(n.localStore,t);l_(n,t,e),c_(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Uc(n,r)}catch(r){await mh(r)}}function c_(i,t){(i.mu.get(t)||[]).forEach(e=>{e.resolve()}),i.mu.delete(t)}function l_(i,t,e){const n=ve(i);let r=n.du[n.currentUser.toKey()];if(r){const s=r.get(t);s&&(e?s.reject(e):s.resolve(),r=r.remove(t)),n.du[n.currentUser.toKey()]=r}}async function Uc(i,t,e){const n=ve(i),r=[],s=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach((a,l)=>{o.push(n.pu(l,t,e).then(u=>{var h;if((u||e)&&n.isPrimaryClient){const d=u?!u.fromCache:(h=e==null?void 0:e.targetChanges.get(l.targetId))==null?void 0:h.current;n.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){r.push(u);const d=Ch.Es(l.targetId,u);s.push(d)}}))}),await Promise.all(o),n.Pu.J_(r),await async function(l,u){const h=ve(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>et.forEach(u,f=>et.forEach(f.Ts,m=>h.persistence.referenceDelegate.addReference(d,f.targetId,m)).next(()=>et.forEach(f.Is,m=>h.persistence.referenceDelegate.removeReference(d,f.targetId,m)))))}catch(d){if(!No(d))throw d;wt(nC,"Failed to update sequence numbers: "+d)}for(const d of u){const f=d.targetId;if(!d.fromCache){const m=h.vs.get(f),S=m.snapshotVersion,M=m.withLastLimboFreeSnapshotVersion(S);h.vs=h.vs.insert(f,M)}}}(n.localStore,s))}async function UC(i,t){const e=ve(i);if(!e.currentUser.isEqual(t)){wt(IC,"User change. New user:",t.toKey());const n=await e_(e.localStore,t);e.currentUser=t,function(s,o){s.mu.forEach(a=>{a.forEach(l=>{l.reject(new It(rt.CANCELLED,o))})}),s.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Uc(e,n.Ns)}}function OC(i){const t=ve(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=LC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=NC.bind(null,t),t}class _c{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Dc(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return rC(this.persistence,new eC,t.initialUser,this.serializer)}Cu(t){return new t_(Rh.Vi,this.serializer)}Du(t){return new cC}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_c.provider={build:()=>new _c};class FC extends _c{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Ie(this.persistence.referenceDelegate instanceof gc,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new BR(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?fn.withCacheSize(this.cacheSizeBytes):fn.DEFAULT;return new t_(n=>gc.Vi(n,e),this.serializer)}}class Du{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Mp(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=UC.bind(null,this.syncEngine),await bC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new RC}()}createDatastore(t){const e=Dc(t.databaseInfo.databaseId),n=fC(t.databaseInfo);return vC(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,r,s,o,a){return new EC(n,r,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Mp(this.syncEngine,e,0),function(){return vp.v()?new vp:new lC}())}createSyncEngine(t,e){return function(r,s,o,a,l,u,h){const d=new PC(r,s,o,a,l,u);return h&&(d.gu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const s=ve(r);wt(Oo,"RemoteStore shutting down."),s.Ea.add(5),await Fo(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Du.provider={build:()=>new Du};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="FirestoreClient";class VC{constructor(t,e,n,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this._databaseInfo=r,this.user=rn.UNAUTHENTICATED,this.clientId=fh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{wt(Ji,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(wt(Ji,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=a_(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Dl(i,t){i.asyncQueue.verifyOperationInProgress(),wt(Ji,"Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let n=e.initialUser;i.setCredentialChangeListener(async r=>{n.isEqual(r)||(await e_(t.localStore,r),n=r)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function Ap(i,t){i.asyncQueue.verifyOperationInProgress();const e=await kC(i);wt(Ji,"Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(n=>Ep(t.remoteStore,n)),i.setAppCheckTokenChangeListener((n,r)=>Ep(t.remoteStore,r)),i._onlineComponents=t}async function kC(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){wt(Ji,"Using user provided OfflineComponentProvider");try{await Dl(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===rt.FAILED_PRECONDITION||r.code===rt.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;Eo("Error using user provided cache. Falling back to memory cache: "+e),await Dl(i,new _c)}}else wt(Ji,"Using default OfflineComponentProvider"),await Dl(i,new FC(void 0));return i._offlineComponents}async function BC(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(wt(Ji,"Using user provided OnlineComponentProvider"),await Ap(i,i._uninitializedComponentsProvider._online)):(wt(Ji,"Using default OnlineComponentProvider"),await Ap(i,new Du))),i._onlineComponents}function zC(i){return BC(i).then(t=>t.syncEngine)}function HC(i,t){const e=new vr;return i.asyncQueue.enqueueAndForget(async()=>DC(await zC(i),t,e)),e.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="ComponentProvider",wp=new Map;function WC(i,t,e,n,r){return new Ob(i,t,e,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,u_(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="firestore.googleapis.com",bp=!0;class Rp{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new It(rt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=h_,this.ssl=bp}else this.host=t.host,this.ssl=t.ssl??bp;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Zg;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<VR)throw new It(rt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Mb("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=u_(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new It(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new It(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new It(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Oc{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new It(rt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new It(rt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rp(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new pb;switch(n.type){case"firstParty":return new vb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new It(rt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=wp.get(e);n&&(wt(GC,"Removing Datastore"),wp.delete(e),n.terminate())}(this),Promise.resolve()}}function XC(i,t,e,n={}){var u;i=Sg(i,Oc);const r=Ds(t),s=i._getSettings(),o={...s,emulatorOptions:i._getEmulatorOptions()},a=`${t}:${e}`;r&&(wm(`https://${a}`),bm("Firestore",!0)),s.host!==h_&&s.host!==a&&Eo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:r,emulatorOptions:n};if(!xr(l,o)&&(i._setSettings(l),n.mockUserToken)){let h,d;if(typeof n.mockUserToken=="string")h=n.mockUserToken,d=rn.MOCK_USER;else{h=kT(n.mockUserToken,(u=i._app)==null?void 0:u.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new It(rt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new rn(f)}i._authCredentials=new mb(new vg(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ph(this.firestore,t,this._query)}}class on{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new on(this.firestore,t,this._key)}toJSON(){return{type:on._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Lo(e,on._jsonSchema))return new on(t,n||null,new Xt(be.fromString(e.referencePath)))}}on._jsonSchemaVersion="firestore/documentReference/1.0",on._jsonSchema={type:Le("string",on._jsonSchemaVersion),referencePath:Le("string")};class Gi extends Ph{constructor(t,e,n){super(t,e,Qb(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new on(this.firestore,null,new Xt(t))}withConverter(t){return new Gi(this.firestore,t,this._path)}}function qC(i,t,...e){if(i=zn(i),yg("collection","path",t),i instanceof Oc){const n=be.fromString(t,...e);return Yf(n),new Gi(i,null,n)}{if(!(i instanceof on||i instanceof Gi))throw new It(rt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(be.fromString(t,...e));return Yf(n),new Gi(i.firestore,null,n)}}function $C(i,t,...e){if(i=zn(i),arguments.length===1&&(t=fh.newId()),yg("doc","path",t),i instanceof Oc){const n=be.fromString(t,...e);return Kf(n),new on(i,null,new Xt(n))}{if(!(i instanceof on||i instanceof Gi))throw new It(rt.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(be.fromString(t,...e));return Kf(n),new on(i.firestore,i instanceof Gi?i.converter:null,new Xt(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="AsyncQueue";class Ip{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new n_(this,"async_queue_retry"),this._c=()=>{const n=Pl();n&&wt(Cp,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=Pl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Pl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new vr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!No(t))throw t;wt(Cp,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(n=>{throw this.nc=n,this.rc=!1,wr("INTERNAL UNHANDLED ERROR: ",Pp(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const r=Ih.createAndSchedule(this,t,e,n,s=>this.hc(s));return this.tc.push(r),r}uc(){this.nc&&Jt(47125,{Pc:Pp(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Pp(i){let t=i.message||"";return i.stack&&(t=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),t}class d_ extends Oc{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Ip,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ip(t),this._firestoreClient=void 0,await t}}}function jC(i,t){const e=typeof i=="object"?i:Pm(),n=typeof i=="string"?i:uc,r=ih(e,"firestore").getImmediate({identifier:n});if(!r._initialized){const s=FT("firestore");s&&XC(r,...s)}return r}function KC(i){if(i._terminated)throw new It(rt.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||YC(i),i._firestoreClient}function YC(i){var n,r,s,o;const t=i._freezeSettings(),e=WC(i._databaseId,((n=i._app)==null?void 0:n.options.appId)||"",i._persistenceKey,(r=i._app)==null?void 0:r.options.apiKey,t);i._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(i._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),i._firestoreClient=new VC(i._authCredentials,i._appCheckCredentials,i._queue,e,i._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fn(Qn.fromBase64String(t))}catch(e){throw new It(rt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Fn(Qn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Fn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Lo(t,Fn._jsonSchema))return Fn.fromBase64String(t.bytes)}}Fn._jsonSchemaVersion="firestore/bytes/1.0",Fn._jsonSchema={type:Le("string",Fn._jsonSchemaVersion),bytes:Le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new It(rt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new It(rt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new It(rt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ue(this._lat,t._lat)||ue(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:fi._jsonSchemaVersion}}static fromJSON(t){if(Lo(t,fi._jsonSchema))return new fi(t.latitude,t.longitude)}}fi._jsonSchemaVersion="firestore/geoPoint/1.0",fi._jsonSchema={type:Le("string",fi._jsonSchemaVersion),latitude:Le("number"),longitude:Le("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==r[s])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Yn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Lo(t,Yn._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Yn(t.vectorValues);throw new It(rt.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yn._jsonSchemaVersion="firestore/vectorValue/1.0",Yn._jsonSchema={type:Le("string",Yn._jsonSchemaVersion),vectorValues:Le("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=/^__.*__$/;class QC{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new Ir(t,this.data,this.fieldMask,e,this.fieldTransforms):new Uo(t,this.data,e,this.fieldTransforms)}}function p_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Jt(40011,{dataSource:i})}}class Lh{constructor(t,e,n,r,s,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new Lh({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var r;const e=(r=this.path)==null?void 0:r.child(t),n=this.contextWith({path:e,arrayElement:!1});return n.validatePathSegment(t),n}childContextForFieldPath(t){var r;const e=(r=this.path)==null?void 0:r.child(t),n=this.contextWith({path:e,arrayElement:!1});return n.validatePath(),n}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return vc(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(p_(this.dataSource)&&JC.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class ZC{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Dc(t)}createContext(t,e,n,r=!1){return new Lh({dataSource:t,methodName:e,targetDoc:n,path:Ye.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tI(i){const t=i._freezeSettings(),e=Dc(i._databaseId);return new ZC(i._databaseId,!!t.ignoreUndefinedProperties,e)}function eI(i,t,e,n,r,s={}){const o=i.createContext(s.merge||s.mergeFields?2:0,t,e,r);v_("Data must be an object, but it was:",o,n);const a=g_(n,o);let l,u;if(s.merge)l=new Bn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const f=Uh(t,d,e);if(!o.contains(f))throw new It(rt.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);rI(h,f)||h.push(f)}l=new Bn(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new QC(new On(a),l,u)}class Nh extends Dh{_toFieldTransform(t){return new dR(t.path,new To)}isEqual(t){return t instanceof Nh}}function m_(i,t){if(__(i=zn(i)))return v_("Unsupported field value:",t,i),g_(i,t);if(i instanceof Dh)return function(n,r){if(!p_(r.dataSource))throw r.createError(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.createError(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return function(n,r){const s=[];let o=0;for(const a of n){let l=m_(a,r.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(i,t)}return function(n,r){if((n=zn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return lR(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ae.fromDate(n);return{timestampValue:Ru(r.serializer,s)}}if(n instanceof Ae){const s=new Ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ru(r.serializer,s)}}if(n instanceof fi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Fn)return{bytesValue:TR(r.serializer,n._byteString)};if(n instanceof on){const s=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw r.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Yg(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof Yn)return function(o,a){const l=o instanceof Yn?o.toArray():o;return{mapValue:{fields:{[Rg]:{stringValue:Cg},[Tu]:{arrayValue:{values:l.map(h=>{if(typeof h!="number")throw a.createError("VectorValues must only contain numeric values.");return Ah(a.serializer,h)})}}}}}}(n,r);if(Qg(n))return n._toProto(r.serializer);throw r.createError(`Unsupported field value: ${ph(n)}`)}(i,t)}function g_(i,t){const e={};return Tg(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Os(i,(n,r)=>{const s=m_(r,t.childContextForField(n));s!=null&&(e[n]=s)}),{mapValue:{fields:e}}}function __(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ae||i instanceof fi||i instanceof Fn||i instanceof on||i instanceof Dh||i instanceof Yn||Qg(i))}function v_(i,t,e){if(!__(e)||!Eg(e)){const n=ph(e);throw n==="an object"?t.createError(i+" a custom object"):t.createError(i+" "+n)}}function Uh(i,t,e){if((t=zn(t))instanceof f_)return t._internalPath;if(typeof t=="string")return iI(i,t);throw vc("Field path arguments must be of type string or ",i,!1,void 0,e)}const nI=new RegExp("[~\\*/\\[\\]]");function iI(i,t,e){if(t.search(nI)>=0)throw vc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new f_(...t.split("."))._internalPath}catch{throw vc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function vc(i,t,e,n,r){const s=n&&!n.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${r}`),l+=")"),new It(rt.INVALID_ARGUMENT,a+i+l)}function rI(i,t){return i.some(e=>e.isEqual(t))}function sI(){return new Nh("serverTimestamp")}const Dp="@firebase/firestore",Lp="4.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new on(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new oI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Uh("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class oI extends y_{data(){return super.data()}}function aI(i,t,e){let n;return n=i?i.toFirestore(t):t,n}class Ra{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hs extends y_{constructor(t,e,n,r,s,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Uh("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new It(rt.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=hs._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}hs._jsonSchemaVersion="firestore/documentSnapshot/1.0",hs._jsonSchema={type:Le("string",hs._jsonSchemaVersion),bundleSource:Le("string","DocumentSnapshot"),bundleName:Le("string"),bundle:Le("string")};class Ga extends hs{data(t={}){return super.data(t)}}class mo{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Ra(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Ga(this._firestore,this._userDataWriter,n.key,n,new Ra(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new It(rt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new Ga(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Ra(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ga(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Ra(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:cI(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new It(rt.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=mo._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=fh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],r=[];return this.docs.forEach(s=>{s._document!==null&&(e.push(s._document),n.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),r.push(s.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function cI(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Jt(61501,{type:i})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mo._jsonSchemaVersion="firestore/querySnapshot/1.0",mo._jsonSchema={type:Le("string",mo._jsonSchemaVersion),bundleSource:Le("string","QuerySnapshot"),bundleName:Le("string"),bundle:Le("string")};function lI(i,t){const e=Sg(i.firestore,d_),n=$C(i),r=aI(i.converter,t),s=tI(i.firestore);return uI(e,[eI(s,"addDoc",n._key,r,i.converter!==null,{}).toMutation(n._key,di.exists(!1))]).then(()=>n)}function uI(i,t){const e=KC(i);return HC(e,t)}(function(t,e=!0){fb(Ls),ys(new Tr("firestore",(n,{instanceIdentifier:r,options:s})=>{const o=n.getProvider("app").getImmediate(),a=new d_(new gb(n.getProvider("auth-internal")),new yb(o,n.getProvider("app-check-internal")),Fb(o,r),o);return s={useFetchStreams:e,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),zi(Dp,Lp,t),zi(Dp,Lp,"esm2020")})();const hI={apiKey:"AIzaSyCU2Pi8tqjDGRU6D7HeVEpRBa1K72fKibo",authDomain:"kidocode-vr.firebaseapp.com",projectId:"kidocode-vr",storageBucket:"kidocode-vr.firebasestorage.app",messagingSenderId:"808827342473",appId:"1:808827342473:web:c805341aa2752d377f8058"},E_=Im(hI),dI=hb(E_),fI=jC(E_);async function pI(){return(await KA(dI)).user}function mI(i){let t=null;function e(){t={uid:i.uid,startedAt:Date.now(),endedAt:null,durationMs:null,attempts:0,success:!1,logs:[]},n("session_started")}function n(a,l={}){t&&t.logs.push({type:a,timestamp:Date.now(),...l})}function r(a=null){t&&(t.attempts+=1,n("attempt_started",{attemptNumber:t.attempts,program:a}))}async function s(a=!1){t&&(t.endedAt=Date.now(),t.durationMs=t.endedAt-t.startedAt,t.success=a,n("session_finished",{success:a,durationMs:t.durationMs}),await lI(qC(fI,"sessions"),{...t,createdAt:sI()}),console.log("Sesión guardada en Firestore"))}function o(){return t}return{startSession:e,log:n,addAttempt:r,finishSession:s,getSession:o}}let ds;async function gI(){const i=await pI();console.log("Usuario conectado:",i.uid),ds=mI(i),ds.startSession()}gI();const vi=new Zx({antialias:!0});vi.setSize(window.innerWidth,window.innerHeight);vi.setPixelRatio(Math.min(devicePixelRatio,2));vi.xr.enabled=!0;document.body.appendChild(vi.domElement);document.body.appendChild(vs.createButton(vi));const Zi=new tT;Zi.background=new ne(724756);const As=new wn(65,window.innerWidth/window.innerHeight,.01,100),Fc=new un;Fc.position.set(0,0,0);Fc.add(As);Zi.add(Fc);As.position.set(0,1.6,2.4);const _I=new gT(16777215,2241348,1);Zi.add(_I);const S_=new yT(16777215,1.1);S_.position.set(2,6,3);Zi.add(S_);const x_=bT(Zi,{onCatchSuccess:async()=>{ds.log("target_caught"),await ds.finishSession(!0)},onRunFinishedWithoutSuccess:()=>{ds.log("run_finished_without_success")}}),vI=TT(Zi,x_,ds),yI=RT(vi,Zi,As,vI,Fc);window.addEventListener("resize",()=>{As.aspect=window.innerWidth/window.innerHeight,As.updateProjectionMatrix(),vi.setSize(window.innerWidth,window.innerHeight)});let Np=0;vi.setAnimationLoop(i=>{const t=Math.min(.05,(i-Np)/1e3);Np=i,x_.update(t),yI.update(t),vi.render(Zi,As)});
