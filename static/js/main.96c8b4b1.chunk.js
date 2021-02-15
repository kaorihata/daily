(this.webpackJsonpdaily=this.webpackJsonpdaily||[]).push([[0],{42:function(n,e,t){},50:function(n,e,t){},60:function(n,e,t){"use strict";t.r(e);var a,r=t(0),i=t.n(r),c=t(33),s=t.n(c),o=(t(42),t(15)),l=t(3),d=t(8),j=t(4),b=t(6),p=t(29),x=t(62),h=t(1),m=b.a.div(a||(a=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: fixed; \n  top: 0;\n  z-index: 999;\n  display: block;\n  background: var(--orange01);\n\n  .nav-btn{\n    background: #000;\n  }\n  .nav-list{   \n    z-index: 999;\n    transition: all .4s ease-in-out;\n    margin-left: -200px;\n    background: none; \n    position: absolute;\n    top: 45px;\n  }\n  .open{\n    margin-left: 0;\n    background: var(--orange01);\n  }\n  .nav{\n    color: var(--white01);\n    padding: 0.5rem 0.75rem;\n    display: flex;\n    align-items: center;\n    &:hover{\n      color: var(--black01);\n      transition: 0.6s;\n    }\n    span{\n      font-size: 1.25rem;\n      margin-left: 0.25rem;\n    }\n  }\n"])));function g(){var n=Object(r.useState)(!1),e=Object(d.a)(n,2),t=e[0],a=e[1],i=function(){a(!1)},c=window.pageYOffset;return window.onscroll=function(){var n=window.pageYOffset;document.querySelector("#navbar").style.top=c>n||c<0?"0":"-50px",c=n},Object(h.jsxs)(m,{id:"navbar",children:[Object(h.jsx)(x.a,{rounded:!0,toggled:t,toggle:a,size:32,color:"var(--white01)",distance:"lg"}),Object(h.jsxs)("div",{className:"nav-list "+(t?"open":""),children:[Object(h.jsxs)(o.b,{className:"nav",to:"/Daily",onClick:i,children:[Object(h.jsx)(p.a,{style:{fontSize:"31px"}}),Object(h.jsx)("span",{children:"HOME"})]}),Object(h.jsxs)(o.b,{className:"nav",to:"/login",onClick:i,children:[Object(h.jsx)(p.b,{style:{fontSize:"31px"}}),Object(h.jsx)("span",{children:"LOGIN"})]})]})]})}var u,O,f,v,w,y=t(14),k=(t(50),t(19)),N=t(35),z=t.n(N),S=t(36),E=t.n(S),q=t(34),D=t.n(q),F=b.a.div(u||(u=Object(j.a)([' \n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-content: center;\n\n  .card{\n    background: var(--yellow01);\n    position: relative;\n    margin: 0.75rem;\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n\n    &:hover{ \n      transform: translateY(-3px);\n    }\n  }\n  .card-media{\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    display: inline-block;\n    cursor: pointer;\n\n    .img-layer{\n      width: 100%;\n      height: 300px;\n      transition: all .3s linear;\n\n      img{\n        width: 360px;\n        height: 300px;\n      }    \n    }\n    .img-layer::before{\n      content: "";\n      display: none;\n      height: 300px;\n      width: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background-color: rgba(200,200,200,0.2);\n      background: radial-gradient(circle, rgba(200,200,200,0.4) 0%, rgba(200,200,200,0.1) 99%);\n      \n    }\n    .title{\n      background: #EB5E28;\n      width: calc(100% - 30px);\n      margin-top: -30px;\n      padding: 0.5rem;\n      color: #FFFCF2;\n      font-size: 1.25rem;\n      position: relative;\n    }\n\n    &:hover{\n      .img-layer::before{\n        display: block;\n      }\n      .img-layer{\n        transform: scale(1.15); \n      }\n    }\n  }\n  .card-text{\n      padding-left: 1.5rem;\n      padding-right: 0.5rem;\n      font-size: 1.125rem;\n      margin: 1rem 0;\n  }\n  button {\n      background: none;\n      border: none;\n      cursor: pointer;\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      font-size: 1.5rem;\n      padding: 1rem 1.5rem;\n  }\n\n  @media(max-width:768px){\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media(max-width:576px){\n    max-width: 320px;\n    grid-template-columns: 1fr;\n    justify-content: center;\n  }\n']))),Y=Object(k.css)(O||(O=Object(j.a)(["\n  grid-column: 2;\n  \n  @media(max-width: 768px){\n    grid-column: 1;\n  }\n"]))),B=Object(k.css)(f||(f=Object(j.a)(["\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--orange01);\n  background: var(--white01);\n"])));function C(n){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],i=t[1],c=Object(r.useState)(!1),s=Object(d.a)(c,2),o=s[0],l=s[1];return Object(r.useEffect)((function(){fetch("https://api.nytimes.com/svc/topstories/v2/".concat(n.topic,".json?api-key=").concat("Z7xEsJyfhqUdpNbCfkBh8bXxQ129cLj2")).then((function(n){return n.json()})).then((function(n){i(n.results),l(!0)})).catch((function(n){console.log(n.message)}))})),Object(h.jsx)(F,{children:o?a.map((function(n,e){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsxs)("a",{className:"card-media",target:"_blank",rel:"noreferrer noopener",href:n.url,children:[Object(h.jsx)("div",{className:"img-layer",children:Object(h.jsx)(D.a,{height:300,placeholder:Object(h.jsx)(z.a,{color:"var(--orange02)",css:B}),children:Object(h.jsx)("img",{src:null===n.multimedia?"https://via.placeholder.com/360x300.png?text=Visit+nytimes.com":n.multimedia[0].url,alt:null===n.multimedia?"no image":n.multimedia[0].caption})})}),Object(h.jsx)("div",{className:"title",children:n.title})]}),Object(h.jsx)("div",{className:"card-text",children:n.abstract})]},e)})):Object(h.jsx)(E.a,{css:Y})})}var J=b.a.h1(v||(v=Object(j.a)(["\n  font-size: 4rem;\n  font-weight: 300;\n"]))),L=b.a.div(w||(w=Object(j.a)(["\n  padding: 1rem;\n"])));function I(){return Object(h.jsxs)(y.d,{className:"tabs",children:[Object(h.jsx)(J,{children:"Daily"}),Object(h.jsxs)(y.b,{className:"tab-list",children:[Object(h.jsx)(y.a,{className:"tab",children:"Food"}),Object(h.jsx)(y.a,{className:"tab",children:"Travel"}),Object(h.jsx)(y.a,{className:"tab",children:"Health"}),Object(h.jsx)(y.a,{className:"tab",children:"Insider"}),Object(h.jsx)("div",{className:"line"})]}),Object(h.jsxs)(L,{children:[Object(h.jsx)(y.c,{children:Object(h.jsx)(C,{topic:"food"})}),Object(h.jsx)(y.c,{children:Object(h.jsx)(C,{topic:"travel"})}),Object(h.jsx)(y.c,{children:Object(h.jsx)(C,{topic:"health"})}),Object(h.jsx)(y.c,{children:Object(h.jsx)(C,{topic:"insider"})})]})]})}function P(){return Object(h.jsx)(I,{})}var H,M,T,A,G,Q,U,V,W,X,Z=t(5),_=t.n(Z),K=t(13),R=t(24),$=b.a.div(H||(H=Object(j.a)(["\n  width: 280px;\n  min-height: 570px;\n  margin: 60px auto 0;\n  display: flex;\n  flex-direction: column;\n  border-radius: 1rem;\n  background: var(--white01);\n  box-shadow: 0 3px 15px rgba(0,0,0,0.3);\n  position: relative;\n  overflow: hidden;\n"]))),nn=b.a.div(M||(M=Object(j.a)(["\n  width: 100%;\n  height: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0 1.8rem;\n  padding-bottom: 5rem;\n"]))),en=b.a.div(T||(T=Object(j.a)(["\n  width: 150%;\n  height: 550px;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  border-radius: 50%;\n  transform: rotate(60deg);\n  top: -290px;\n  left: -70px;\n  background: var(--orange01);\n  background-image: linear-gradient( 120deg, var(--orange02) 30%,  var(--orange01) 80% );\n"]))),tn=b.a.div(A||(A=Object(j.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  h2{\n    font-size: 2rem;\n    font-weight: 600;\n    color: var(--white01);\n    line-height: 1.2;\n    letter-spacing: 4px;\n    z-index: 999;\n  }\n  p{\n    color: var(--white01);\n    font-weight: 600;\n    margin-top: 0.25rem;\n    letter-spacing: 1px;\n    z-index: 999;\n  }\n"]))),an=b.a.div(G||(G=Object(j.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),rn=b.a.form(Q||(Q=Object(j.a)(["\n  width: 250px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),cn=b.a.div(U||(U=Object(j.a)(["\n  width: 100%;\n  margin-bottom: 0.4rem;\n  input{\n    width: 100%;\n    padding: 13px 12px 10px;\n    box-shadow: 0 2px 2px rgba(0,0,0,0.2);\n    font-size: 1.125rem;\n    -webkit-appearance: none;\n    &::placeholder{\n      color: rgba(0,0,0, 0.4);\n      letter-spacing: 1px;\n    }\n    &:focus{\n      box-shadow: inset 2px 2px 2px rgba(0,0,0,0.2);\n    }\n  }\n  p{\n    color: var(--orange01);\n    line-height: 1.6;\n  }\n  span{\n    color: var(--orange01);\n  }\n"]))),sn=b.a.div(V||(V=Object(j.a)(["\n  width: 100%;\n  padding: 0 5px;\n  span{\n    padding-left: 5px;\n  }\n"]))),on=b.a.div(W||(W=Object(j.a)(["\n  width: 100%;\n  padding: 0 5px;\n  .link{\n    color: var(--orange02);\n\n    &:hover{\n      color: var(--orange01);\n    }\n  }\n"]))),ln=b.a.input(X||(X=Object(j.a)(["\n  width: 100%;\n  padding: 0.5rem 1.5rem;\n  color: var(--white01);\n  background: var(--orange01);\n  background: linear-gradient(90deg, var(--orange02) 0%, var(--orange01) 100%);\n  align-self: end;\n  border-radius: 10px;\n  font-size: 1.125rem;\n  box-shadow: 0 4px 3px rgba(200,200,200,0.4);\n  margin: 1.2rem auto 0.4rem;\n\n  &:hover{\n    background-color: var(--orange02);\n    background: linear-gradient(90deg,var(--orange01)  0%, var(--orange02) 100%);\n  }\n"])));function dn(n){var e=n.login,t=Object(R.a)(),a=t.register,r=t.handleSubmit,i=t.errors,c=(t.reset,function(){var n=Object(K.a)(_.a.mark((function n(t){return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(t.email,t.password);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());return Object(h.jsxs)($,{children:[Object(h.jsxs)(nn,{children:[Object(h.jsx)(en,{}),Object(h.jsxs)(tn,{children:[Object(h.jsx)("h2",{children:"Welcome"}),Object(h.jsx)("h2",{children:"Back"}),Object(h.jsx)("p",{children:"Please login to continue!"})]})]}),Object(h.jsx)(an,{children:Object(h.jsxs)(rn,{onSubmit:r(c),children:[Object(h.jsxs)(cn,{children:[Object(h.jsx)("input",{name:"email",placeholder:"Email","aria-invalid":i.email?"true":"false",ref:a({required:"required",pattern:{value:/\S+@\S+\.\S+/,message:"Entered value does not match email format"}})}),i.email&&Object(h.jsx)("span",{role:"alert",children:i.email.message})]}),Object(h.jsxs)(cn,{children:[Object(h.jsx)("input",{name:"password",placeholder:"Password","aria-invalid":i.password?"true":"false",ref:a({required:"required",minLength:{value:5,message:"min length is 5"}})}),i.password&&Object(h.jsx)("span",{role:"alert",children:i.password.message})]}),Object(h.jsx)(ln,{type:"submit"}),Object(h.jsxs)(on,{children:["Don't have password, please",Object(h.jsx)(o.b,{to:"/signup",className:"link",children:" sign up"})]})]})})]})}function jn(){return Object(h.jsx)(dn,{})}function bn(){var n=Object(R.a)(),e=n.register,t=n.handleSubmit;return Object(h.jsxs)($,{children:[Object(h.jsxs)(nn,{children:[Object(h.jsx)(en,{}),Object(h.jsxs)(tn,{children:[Object(h.jsx)("h2",{children:"Join us"}),Object(h.jsx)("p",{children:"Sign up to follow Daily News"})]})]}),Object(h.jsx)(an,{children:Object(h.jsxs)(rn,{onSubmit:t((function(n){return console.log(n)})),children:[Object(h.jsx)(cn,{children:Object(h.jsx)("input",{name:"email",placeholder:"Email",ref:e})}),Object(h.jsx)(cn,{children:Object(h.jsx)("input",{name:"password",placeholder:"Password",ref:e})}),Object(h.jsxs)(sn,{children:[Object(h.jsx)("input",{type:"checkbox",name:"check",ref:e}),Object(h.jsx)("span",{children:"You agree to receive updates and offers from The Daily. You may opt out anytime."})]}),Object(h.jsx)(ln,{type:"submit"}),Object(h.jsxs)(on,{children:["Already registered?",Object(h.jsx)(o.b,{to:"/login",className:"link",children:" Login"})]})]})})]})}function pn(n){return Object(h.jsx)(bn,{})}function xn(){return Object(h.jsxs)(o.a,{children:[Object(h.jsx)(g,{}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/signup",children:Object(h.jsx)(pn,{})}),Object(h.jsx)(l.a,{path:"/login",children:Object(h.jsx)(jn,{})}),Object(h.jsx)(l.a,{path:"/Daily",children:Object(h.jsx)(P,{})})]})]})}s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(xn,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.96c8b4b1.chunk.js.map