import{S as N,i as g,s as E,k as _,q as H,a as T,l as f,m as u,r as q,h as d,c as x,n as D,b as I,F as c,u as L,T as m}from"../chunks/index.0785a3b5.js";function M(l){let a,n,t=(l[0].title??"No data")+"",i,h,o,r=(l[0].content??"No data")+"";return{c(){a=_("div"),n=_("h1"),i=H(t),h=T(),o=_("div"),this.h()},l(s){a=f(s,"DIV",{class:!0});var e=u(a);n=f(e,"H1",{});var v=u(n);i=q(v,t),v.forEach(d),h=x(e),o=f(e,"DIV",{});var p=u(o);p.forEach(d),e.forEach(d),this.h()},h(){D(a,"class","container")},m(s,e){I(s,a,e),c(a,n),c(n,i),c(a,h),c(a,o),o.innerHTML=r},p(s,[e]){e&1&&t!==(t=(s[0].title??"No data")+"")&&L(i,t),e&1&&r!==(r=(s[0].content??"No data")+"")&&(o.innerHTML=r)},i:m,o:m,d(s){s&&d(a)}}}function S(l,a,n){let{data:t}=a;return console.log(t),l.$$set=i=>{"data"in i&&n(0,t=i.data)},[t]}class b extends N{constructor(a){super(),g(this,a,S,M,E,{data:0})}}export{b as default};