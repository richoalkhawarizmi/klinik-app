(this["webpackJsonpskripsi-klinik"]=this["webpackJsonpskripsi-klinik"]||[]).push([[15],{195:function(e,a,t){"use strict";var s=t(214);a.a=function(e,a,t){var r=t||"";switch(e){case"success":s.a.success(a,r,3e3,null,null,"filled");break;case"warning":s.a.warning(a,r,3e3,null,null,"filled");break;case"error":s.a.error(a,r,5e3,(function(){alert("callback")}),null,"filled");break;default:s.a.info("Info message")}}},212:function(e,a,t){"use strict";var s=t(2),r=t.n(s),n=t(326);a.a=Object(n.d)((function(e){return r.a.createElement(n.a,e)}),{withRef:!1})},214:function(e,a,t){"use strict";var s=t(213),r=(t(210),t(211));t.d(a,"a",(function(){return r.a}));s.a},381:function(e,a,t){"use strict";var s=t(2),r=t.n(s),n=t(302),l=t(311),c=t(309),o=t(308),i=t(424),m=t(370);a.a=function(e){var a=function(){e.setOpen(!1),e.url&&e.push("".concat(e.url))};return r.a.createElement(l.a,{open:e.open,onClose:a,"aria-labelledby":"form-dialog-title"},r.a.createElement(m.a,{id:"form-dialog-title"},"Kemina Dental Care Say : "),r.a.createElement(o.a,null,r.a.createElement(i.a,{id:"alert-dialog-slide-description",className:"colorText1"},e.text)),r.a.createElement(c.a,null,r.a.createElement(n.a,{onClick:a,color:"primary"},"Oke")))}},618:function(e,a,t){"use strict";t.r(a);var s=t(8),r=t(197),n=t(2),l=t.n(n),c=t(394),o=t(274),i=t(482),m=t(615),u=t(589),d=t(616),p=t(392),b=t(221),f=t(63),g=t(212),w=t(198),h=t(218),E=t(195),k=t(381),O=t(196);a.default=Object(f.b)((function(e){var a=e.authUser;return{user:a.user,loading:a.loading}}))((function(e){var a=e.match.params.username,t=e.match.params.salt,f=Object(n.useState)({password1:"",password2:""}),j=Object(r.a)(f,2),N=j[0],v=j[1],y=Object(n.useState)(!1),C=Object(r.a)(y,2),x=C[0],P=C[1],S=Object(n.useState)(!0),R=Object(r.a)(S,2),G=R[0],A=R[1],D=Object(n.useState)(),I=Object(r.a)(D,2),J=I[0],K=I[1],z=function(e){var a=e.target.value,t=e.target.id||e.target.name,r=Object(s.a)({},N);r[t]=a,v(r)};return l.a.createElement(c.a,{className:"h-100"},l.a.createElement(w.a,{xxs:"12",md:"10",className:"mx-auto my-auto"},l.a.createElement(o.a,{className:"auth-card"},l.a.createElement("div",{className:"position-relative image-side "},l.a.createElement("p",{className:"text-white h2"},"Welcome to Kemina Dental Care"),l.a.createElement("p",{className:"white mb-0"},"Please use this form to reset password. ",l.a.createElement("br",null),"If you are a account, please"," ",l.a.createElement(b.b,{to:"/user/login",className:"linkColor"},"login")," or ",l.a.createElement(b.b,{to:"/user/register",className:"linkColor"},"register"),".")),l.a.createElement("div",{className:"form-side"},l.a.createElement(b.b,{to:"/",className:"white"},l.a.createElement("span",{className:"logo-single"})),l.a.createElement(i.a,{className:"mb-4"},l.a.createElement(g.a,{id:"user.reset-password"})),l.a.createElement(m.a,null,l.a.createElement(u.a,{className:"form-group has-float-label mb-4"},l.a.createElement(d.a,{name:"password1",onChange:z,type:"password",autoComplete:"false"}),l.a.createElement(g.a,{id:"user.new-password"})),l.a.createElement(u.a,{className:"form-group has-float-label mb-4"},l.a.createElement(d.a,{name:"password2",onChange:z,type:"password",autoComplete:"false"}),l.a.createElement(g.a,{id:"user.new-password-again"})),l.a.createElement("div",{className:"d-flex justify-content-end align-items-center"},l.a.createElement(p.a,{color:"primary",className:"btn-shadow",size:"lg",onClick:function(){if(N.password1===N.password2){if(N.password1.length<7)return Object(E.a)("error","Password minimal 8 digit","Gagal Reset Password");h.a.resetPassword(a,t,N.password1).then((function(e){e?(K("/user/login"),A("Reset password anda berhasil, silahkan login dengan password baru anda."),P(!0)):Object(E.a)("error","Server tidak dapat menjalankan perintah Anda saat ini. Silakan coba sesaat lagi","Gagal Reset Password")})).catch((function(e){Object(O.isArray)(e)&&e.length>0?Object(E.a)("error",e[0].message,"Gagal Reset Password"):Object(E.a)("error",e.message,"Gagal Reset Password")}))}else Object(E.a)("error","Password harus sama","Gagal reset")}},l.a.createElement(g.a,{id:"user.reset-button"})))))),l.a.createElement(k.a,{open:x,setOpen:P,text:G,url:J,push:e.history.push})))}))}}]);
//# sourceMappingURL=user-reset-password.a5d6b459.chunk.js.map