(this["webpackJsonpskripsi-klinik"]=this["webpackJsonpskripsi-klinik"]||[]).push([[47],{205:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var a=n(2),r=n.n(a),c=n(403),i=function(e){return r.a.createElement(c.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},o=function(e){return r.a.createElement("div",{className:"separator ".concat(e.className)})}},219:function(e,t,n){"use strict";var a=n(47),r={dataUser:function(e,t,n,r){return new Promise((function(c,i){var o='\n                query {\n                    detailUser(username:"'.concat(n,'",jenisUser:"').concat(r,'"){\n                        superadmin\n                        nama\n                        noHp\n                        jenisUser\n                  }\n                }\n            ');Object(a.a)(o,e,t).then((function(e){return e.errors?i(e.errors):e.data&&e.data.detailUser?c(e.data.detailUser):c([])})).catch((function(e){return i(e)}))}))},selectKlinikPasien:function(e,t,n,r,c){return new Promise((function(i,o){var s='\n\t\t\tmutation {\n\t\t\t\tupdateLogin(kodeklinik: "'.concat(n,'", namaklinik: "').concat(r,'")\n\t\t\t\tsimpanUser(input:{username:"').concat(c,'"}, kodeklinik:"').concat(n,'", namaklinik: "').concat(r,'")\n\t\t\t  }\n            ');Object(a.a)(s,e,t).then((function(e){return e.errors?o(e.errors):e.data&&e.data.updateLogin&&e.data.simpanUser?i(!0):i([])})).catch((function(e){return o(e)}))}))},selectKlinikAdmin:function(e,t,n,r){return new Promise((function(c,i){var o='\n\t\t\tmutation {\n\t\t\t\tupdateLogin(kodeklinik: "'.concat(n,'", namaklinik: "').concat(r,'")\n\t\t\t  }\n            ');Object(a.a)(o,e,t).then((function(e){return e.errors?i(e.errors):e.data&&e.data.updateLogin?c(!0):c([])})).catch((function(e){return i(e)}))}))},hapusUser:function(e,t,n){return new Promise((function(r,c){var i='\n\t\t\tmutation {\n\t\t\t\thapusUser(username: "'.concat(n,'")\n\t\t\t  }\n            ');Object(a.a)(i,e,t).then((function(e){return e.errors?c(e.errors):e.data&&e.data.hapusUser?r(!0):r([])})).catch((function(e){return c(e)}))}))},registerUser:function(e,t,n,r,c){return new Promise((function(i,o){var s='\n\t\t\tmutation {\n\t\t\t\tregisterUser(input:{\n\t\t\t\t\tusername:"'.concat(e,'", \n\t\t\t\t\tpassword:"').concat(r,'", \n\t\t\t\t\tnama:"').concat(t,'", \n\t\t\t\t\tnoHp:"').concat(c,'", \n\t\t\t\t\talamat:"').concat(n,'"})\n\t\t\t  }\n            ');Object(a.a)(s).then((function(e){return e.errors?o(e.errors):e.data&&e.data.registerUser?i(!0):i([])})).catch((function(e){return o(e)}))}))},aktivasiUser:function(e,t){return new Promise((function(n,r){var c='\n\t\t\tmutation {\n\t\t\t\taktivasiUser(username:"'.concat(e,'", salt: "').concat(t,'")\n\t\t\t  }\n            ');Object(a.a)(c).then((function(e){return e.errors?r(e.errors):e.data&&e.data.aktivasiUser?n(!0):n([])})).catch((function(e){return r(e)}))}))},forgetPassword:function(e){return new Promise((function(t,n){var r='\n\t\t\tmutation {\n\t\t\t\treqResetPassword(username:"'.concat(e,'")\n\t\t\t  }\n            ');Object(a.a)(r).then((function(e){return e.errors?n(e.errors):e.data&&e.data.reqResetPassword?t(!0):t([])})).catch((function(e){return n(e)}))}))},resetPassword:function(e,t,n){return new Promise((function(r,c){var i='\n\t\t\tmutation {\n\t\t\t\tresetNewPassword(username:"'.concat(e,'", salt: "').concat(t,'", password:"').concat(n,'")\n\t\t\t  }\n            ');Object(a.a)(i).then((function(e){return e.errors?c(e.errors):e.data&&e.data.resetNewPassword?r(!0):r([])})).catch((function(e){return c(e)}))}))},loginUser:function(e,t){return new Promise((function(n,r){var c='\n\t\t\tquery {\n\t\t\t\tloginUser(username:"'.concat(e,'",password:"').concat(t,'"){\n\t\t\t\t\tclientID\n\t\t\t\t\ttoken\n\t\t\t\t\tsuperadmin\n\t\t\t\t\tjenisUser\n\t\t\t\t\tklinik{\n\t\t\t\t\t\tkodeklinik\n\t\t\t\t\t\tnamaklinik\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t  }\n            ');Object(a.a)(c).then((function(e){return e.errors?r(e.errors):e.data&&e.data.loginUser?n(e.data.loginUser):n([])})).catch((function(e){return r(e)}))}))},detailUser:function(e,t,n,r){return new Promise((function(c,i){var o='\n                query {\n                    detailUser(username:"'.concat(n,'",jenisUser:"').concat(r,'"){\n                        username\n                        nama\n\t\t\t\t\t\tnoHp\n\t\t\t\t\t\talamat\n                  }\n                }\n            ');Object(a.a)(o,e,t).then((function(e){return e.errors?i(e.errors):e.data&&e.data.detailUser?c(e.data.detailUser):c([])})).catch((function(e){return i(e)}))}))},updateProfil:function(e,t,n,r,c,i,o,s,u){return new Promise((function(l,m){var d='\n\t\t\tmutation {\n\t\t\t\tsimpanUser(input:{username:"'.concat(n,'", nama:"').concat(r,'", noHp:"').concat(c,'", alamat:"').concat(i,'", jenisUser:"').concat(o,'"},kodeklinik: "').concat(s,'", namaklinik: "').concat(u,'")\n\t\t\t  }\n            ');Object(a.a)(d,e,t).then((function(e){return e.errors?m(e.errors):e.data&&e.data.simpanUser?l(!0):l([])})).catch((function(e){return m(e)}))}))}};t.a=r},226:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var a=n(242),r=n(240),c=n(244),i=n(243),o=n(208),s=n(245),u=n(2),l=n.n(u),m=n(281),d=n(282),k=n(596),f=n(657),g=n(653),p=n(595),h=n(283),P=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).getSafePage=n.getSafePage.bind(Object(o.a)(n)),n.changePage=n.changePage.bind(Object(o.a)(n)),n.applyPage=n.applyPage.bind(Object(o.a)(n)),n.pageClick=n.pageClick.bind(Object(o.a)(n)),n.renderPages=n.renderPages.bind(Object(o.a)(n)),n.changePageSize=n.changePageSize.bind(Object(o.a)(n)),n.renderPageJump=n.renderPageJump.bind(Object(o.a)(n)),n.state={page:e.page,pageSize:n.props.defaultPageSize},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"getSafePage",value:function(e){return Number.isNaN(e)&&(e=this.props.page),Math.min(Math.max(e,0),this.props.pages-1)}},{key:"changePageSize",value:function(e){this.props.onPageSizeChange(e),this.setState({pageSize:e})}},{key:"changePage",value:function(e){e=this.getSafePage(e),this.setState({page:e}),this.props.page!==e&&this.props.onPageChange(e)}},{key:"applyPage",value:function(e){e&&e.preventDefault();var t=this.state.page;this.changePage(""===t?this.props.page:t)}},{key:"pageClick",value:function(e){this.changePage(e)}},{key:"renderPages",value:function(){for(var e=this,t=this.props.pages,n=[],a=function(t){var a=e.state.page===t;n.push(l.a.createElement(m.a,{key:t,active:a},l.a.createElement(d.a,{onClick:function(){return e.pageClick(t)}},t+1)))},r=0;r<t;r++)a(r);return n}},{key:"renderPageJump",value:function(){for(var e=this,t=this.props.pages,n=[],a=function(t){n.push(l.a.createElement(k.a,{key:t,onClick:function(){return e.changePage(t)}},t+1))},r=0;r<t;r++)a(r);return n}},{key:"render",value:function(){var e=this,t=this.props,n=t.page,a=t.pages,r=t.canPrevious,c=t.canNext,i=t.pageSizeOptions,o=t.showPageSizeOptions,s=t.showPageJump;return l.a.createElement(u.Fragment,null,l.a.createElement("div",{className:"text-center"},s&&l.a.createElement("div",{className:"float-left pt-2"},l.a.createElement("span",null,"Page "),l.a.createElement(f.a,{className:"d-inline-block"},l.a.createElement(g.a,{caret:!0,color:"outline-primary",size:"xs"},this.state.page+1),l.a.createElement(p.a,{direction:"left"},this.renderPageJump())),l.a.createElement("span",null," of "),a),l.a.createElement(h.a,{className:"d-inline-block",size:"sm",listClassName:"justify-content-center","aria-label":"Page navigation example"},l.a.createElement(m.a,{className:"".concat(!r&&"disabled")},l.a.createElement(d.a,{className:"prev",onClick:function(){r&&e.changePage(n-1)},disabled:!r},l.a.createElement("i",{className:"simple-icon-arrow-left"}))),this.renderPages(),l.a.createElement(m.a,{className:"".concat(!c&&"disabled")},l.a.createElement(d.a,{className:"next",onClick:function(){c&&e.changePage(n+1)},disabled:!c},l.a.createElement("i",{className:"simple-icon-arrow-right"})))),o&&l.a.createElement("div",{className:"float-right pt-2"},l.a.createElement("span",{className:"text-muted text-small mr-1"},"Items "),l.a.createElement(f.a,{className:"d-inline-block"},l.a.createElement(g.a,{caret:!0,color:"outline-primary",size:"xs"},this.state.pageSize),l.a.createElement(p.a,{right:!0},i.map((function(t,n){return l.a.createElement(k.a,{key:n,onClick:function(){return e.changePageSize(t)}},t)})))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{page:e.page}}}]),t}(u.Component)},639:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(460),i=n(196),o=n(404),s=n(268),u=n(269),l=n(274),m=n(275),d=n(205),k=n(276),f=n(219),g=n(8),p=n(47),h={cekStok:function(e,t,n){return new Promise((function(a,r){var c='\n                query{\n                    cekStok(kodeklinik:"'.concat(n,'"){\n                    kodeProduk\n                    namaProduk\n                    kategori{\n                        kodeKategoriProduk\n                        kategoriProduk\n                    }\n                    jenis{\n                        kodeJenisProduk\n                        jenisProduk\n                    }\n                    harga\n                    satuan\n                    stokQty\n                    }\n                }\n            ');Object(p.a)(c,e,t).then((function(e){var t=[];return e.data.cekStok.map((function(e){if(e.kategori)var n=e.kategori.kategoriProduk,a=e.kategori.kodeKategoriProduk;if(e.jenis)var r=e.jenis.jenisProduk,c=e.jenis.kodeJenisProduk;return t.push(Object(g.a)({},e,{kodekategori:a,kategori:n,kodejenis:c,jenis:r}))})),e.errors?r(e.errors):e.data&&e.data.cekStok?a(t):a([])})).catch((function(e){return r(e)}))}))},simpanProduk:function(e,t,n,a,r,c,i,o){return new Promise((function(s,u){var l='\n            mutation {\n                simpanProduk(input:{\n                    kodeklinik: "'.concat(n,'",\n                    kodeProduk: "').concat(a,'",\n                    namaProduk: "').concat(r,'",\n                    kategori: "').concat(i,'",\n                    jenis: "').concat(c,'",\n                    harga: ').concat(o,",\n                })\n            }\n        ");Object(p.a)(l,e,t).then((function(e){return e.errors?u(e.errors):e.data&&e.data.simpanKlinik?s(e.data.simpanKlinik):s([])})).catch((function(e){return u(e)}))}))},hapusProduk:function(e,t,n,a){return new Promise((function(r,c){var i='\n\t\t\tmutation {\n                hapusProduk(kodeProduk:"'.concat(a,'", kodeklinik:"').concat(n,'")\n\t\t\t  }\n            ');Object(p.a)(i,e,t).then((function(e){return e.errors?c(e.errors):e.data&&e.data.hapusProduk?r(!0):r([])})).catch((function(e){return c(e)}))}))},loadSelecBox:function(e,t,n){return new Promise((function(a,r){var c='\n                query {\n                    listKategoriProduk(kodeklinik:"'.concat(n,'"){\n                        kodeKategoriProduk\n                        kategoriProduk\n                      }\n                      listJenisProduk(kodeklinik:"').concat(n,'"){\n                        kodeJenisProduk\n                        jenisProduk\n                      }\n                }\n            ');Object(p.a)(c,e,t).then((function(e){if(e.errors)return r(e.errors);var t=e.data.listKategoriProduk,n=e.data.listJenisProduk;return e.data&&e.data.listKategoriProduk?a({kategori:t,jenis:n}):a([])})).catch((function(e){return r(e)}))}))}},P=n(263),b=n.n(P),v=n(216),E=n(226),j=n(227),O=function(e){var t=JSON.parse(localStorage.getItem("keminaAdmin")),n=Object(a.useState)(!0),c=Object(i.a)(n,2),g=c[0],p=c[1],P=Object(a.useState)([]),O=Object(i.a)(P,2),N=O[0],w=O[1],U=Object(a.useState)({}),S=Object(i.a)(U,2),y=S[0],x=S[1];Object(a.useEffect)((function(){return h.cekStok(t.clientID,t.token,t.klinik.kodeklinik).then((function(e){w(e)})).catch((function(e){console.error(e)})).finally((function(){return p(!1)})),function(){}}),[t.clientID,t.token,t.username,t.klinik.kodeklinik,g]),Object(a.useEffect)((function(){return f.a.dataUser(t.clientID,t.token,t.username,t.jenisUser).then((function(e){x(e)})).catch((function(e){console.error(e)})),function(){}}),[t.clientID,t.token,t.username,t.jenisUser]);var C=[{Header:"Kode Produk",accessor:"kodeProduk",Cell:function(e){return r.a.createElement("p",{className:"list-item-heading"},g?r.a.createElement(b.a,null):e.value)}},{Header:"Nama Produk",accessor:"namaProduk",Cell:function(e){return r.a.createElement("p",{className:"list-item-heading"},g?r.a.createElement(b.a,null):e.value)}},{Header:"Kategori",accessor:"kategori",Cell:function(e){return r.a.createElement("p",{className:"list-item-heading"},g?r.a.createElement(b.a,null):e.value)}},{Header:"Jenis",accessor:"jenis",Cell:function(e){return r.a.createElement("p",{className:"list-item-heading"},g?r.a.createElement(b.a,null):e.value)}},{Header:"Harga",accessor:"harga",Cell:function(e){return r.a.createElement("p",{className:"list-item-heading"},g?r.a.createElement(b.a,null):e.value)}},{Header:"Satuan",accessor:"satuan",Cell:function(e){return r.a.createElement("p",{className:"list-item-heading"},g?r.a.createElement(b.a,null):e.value)}},{Header:"Qty",accessor:"stokQty",Cell:function(e){return r.a.createElement("p",{className:"list-item-heading"},g?r.a.createElement(b.a,null):e.value)}}];return"admin"===y.jenisUser?r.a.createElement(a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(d.a,{xxs:"12"},r.a.createElement("div",{className:"mb-2"},r.a.createElement("h1",null,"Inventory"),r.a.createElement(s.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},r.a.createElement(u.a,null,r.a.createElement(v.a,{id:"menu.stok-tersedia"})))),r.a.createElement(d.b,{className:"mb-5"}))),r.a.createElement(o.a,null,r.a.createElement(d.a,{xxs:"12",className:"mb-4"},r.a.createElement(k.a,{id:"menu_id"},r.a.createElement(l.a,null,r.a.createElement(m.a,null,r.a.createElement(j.a,{data:N,columns:C,defaultPageSize:5,filterable:!1,showPageJump:!0,PaginationComponent:E.a,showPageSizeOptions:!0}))))))):r.a.createElement("p",null,"You do not have access rights")};t.default=function(e){var t=e.match;return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",{className:"loading"})},r.a.createElement(c.d,null,r.a.createElement(c.a,{exact:!0,from:"".concat(t.url,"/index"),to:"".concat(t.url,"/index")}),r.a.createElement(c.b,{path:"".concat(t.url),render:function(e){return r.a.createElement(O,e)}}),r.a.createElement(c.a,{to:"/error"})))}}}]);
//# sourceMappingURL=47.cdb03744.chunk.js.map