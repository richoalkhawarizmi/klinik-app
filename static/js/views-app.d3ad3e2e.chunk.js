(this["webpackJsonpskripsi-klinik"]=this["webpackJsonpskripsi-klinik"]||[]).push([[17],{212:function(e,n,t){"use strict";var a=t(2),l=t.n(a),r=t(326);n.a=Object(r.d)((function(e){return l.a.createElement(r.a,e)}),{withRef:!1})},545:function(e,n,t){e.exports=t.p+"static/media/profil.2df51c28.png"},621:function(e,n,t){"use strict";t.r(n);var a=t(2),l=t.n(a),r=t(457),i=t(63),c=t(197),s=t(326),o=t(650),u=t(654),m=t(593),d=t(594),p=t(221),b=t(4),h=t(9),f=function(){return l.a.createElement(a.Fragment,null,l.a.createElement("svg",{className:"main",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 9 17"},l.a.createElement("rect",{x:"0.48",y:"0.5",width:"7",height:"1"}),l.a.createElement("rect",{x:"0.48",y:"7.5",width:"7",height:"1"}),l.a.createElement("rect",{x:"0.48",y:"15.5",width:"7",height:"1"})),l.a.createElement("svg",{className:"sub",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 17"},l.a.createElement("rect",{x:"1.56",y:"0.5",width:"16",height:"1"}),l.a.createElement("rect",{x:"1.56",y:"7.5",width:"16",height:"1"}),l.a.createElement("rect",{x:"1.56",y:"15.5",width:"16",height:"1"})))},E=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 17"},l.a.createElement("rect",{x:"0.5",y:"0.5",width:"25",height:"1"}),l.a.createElement("rect",{x:"0.5",y:"7.5",width:"25",height:"1"}),l.a.createElement("rect",{x:"0.5",y:"15.5",width:"25",height:"1"}))},k=t(235),g=t(233),v=t(242),w=t(236),j=t(243),y=t(518),C=t.n(y),S=(t(520),t(635)),O=function(e){function n(e){var t;return Object(k.a)(this,n),(t=Object(v.a)(this,Object(w.a)(n).call(this,e))).toggle=function(){t.setState((function(e){return{tooltipOpen:!e.tooltipOpen}}))},t.getColor=function(){return localStorage.getItem(h.l)?localStorage.getItem(h.l):h.a},t.changeMode=function(){var e=t.getColor();e.indexOf("dark")>-1?e=e.replace("dark","light"):e.indexOf("light")>-1&&(e=e.replace("light","dark")),t.setState({switchChecked:e.indexOf("dark")>-1},(function(){localStorage.setItem(h.l,e),setTimeout((function(){window.location.reload()}),500)}))},t.state={switchChecked:!1,tooltipOpen:!1},t}return Object(j.a)(n,e),Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this.getColor();this.setState({switchChecked:e.indexOf("dark")>-1})}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-none d-md-inline-block align-middle mr-3"},l.a.createElement(C.a,{id:"Tooltip-Switch",className:"custom-switch custom-switch-primary custom-switch-small",checked:this.state.switchChecked,onChange:this.changeMode}),l.a.createElement(S.a,{placement:"left",isOpen:this.state.tooltipOpen,target:"Tooltip-Switch",toggle:this.toggle},"Dark Mode"))}}]),n}(a.Component),M=t(545),N=t.n(M),P=Object(s.d)(Object(i.b)((function(e){var n=e.menu,t=e.settings;return{containerClassnames:n.containerClassnames,menuClickCount:n.menuClickCount,selectedMenuHasSubItems:n.selectedMenuHasSubItems,locale:t.locale}}),{setContainerClassnames:b.B,clickOnMobileMenu:b.x,logoutUser:b.z,changeLocale:b.v})((function(e){var n=e.authLogin,t=Object(a.useState)({isInFullScreen:!1,searchKeyword:""}),r=Object(c.a)(t,2),i=r[0],s=r[1],b=e.containerClassnames,k=e.menuClickCount;return l.a.createElement("nav",{className:"navbar fixed-top"},l.a.createElement("div",{className:"d-flex align-items-center navbar-left"},l.a.createElement(p.b,{to:"#",className:"menu-button d-none d-md-block",onClick:function(n){return function(n,t,a){n.preventDefault(),setTimeout((function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!1,!1),window.dispatchEvent(e)}),350),e.setContainerClassnames(++t,a,e.selectedMenuHasSubItems)}(n,k,b)}},l.a.createElement(f,null)),l.a.createElement(p.b,{to:"#",className:"menu-button-mobile d-xs-block d-sm-block d-md-none",onClick:function(n){return function(n,t){n.preventDefault(),e.clickOnMobileMenu(t)}(n,b)}},l.a.createElement(E,null))),l.a.createElement("a",{className:"navbar-logo",href:"/"},l.a.createElement("span",{className:"logo d-none d-xs-block"}),l.a.createElement("span",{className:"logo-mobile d-block d-xs-none"})),l.a.createElement("div",{className:"navbar-right"},h.f&&l.a.createElement(O,null),l.a.createElement("div",{className:"header-icons d-inline-block align-middle"},l.a.createElement("button",{className:"header-icon btn btn-empty d-none d-sm-inline-block",type:"button",id:"fullScreenButton",onClick:function(){var e=document.fullscreenElement&&null!==document.fullscreenElement||document.webkitFullscreenElement&&null!==document.webkitFullscreenElement||document.mozFullScreenElement&&null!==document.mozFullScreenElement||document.msFullscreenElement&&null!==document.msFullscreenElement,n=document.documentElement;e?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullScreen?n.webkitRequestFullScreen():n.msRequestFullscreen&&n.msRequestFullscreen(),s({isInFullScreen:!e})}},i.isInFullScreen?l.a.createElement("i",{className:"simple-icon-size-actual d-block"}):l.a.createElement("i",{className:"simple-icon-size-fullscreen d-block"}))),l.a.createElement("div",{className:"user d-inline-block"},l.a.createElement(o.a,{className:"dropdown-menu-right"},l.a.createElement(u.a,{className:"p-0",color:"empty"},l.a.createElement("span",{className:"name mr-1"},n&&n.klinik.namaklinik&&n.klinik.namaklinik),l.a.createElement("span",null,l.a.createElement("img",{alt:"Profile",src:N.a}))),l.a.createElement(m.a,{className:"mt-3",right:!0},l.a.createElement(d.a,{onClick:function(){return e.history.push("/app/profil")}},"Account  ",n?" (".concat(n.username,")"):""),("pasien"===n.jenisUser||n.superadmin)&&l.a.createElement(d.a,{onClick:function(){return e.history.push("/app/manajemen-klinik")}},"Manajemen Klinik"),l.a.createElement(d.a,{divider:!0}),l.a.createElement(d.a,{onClick:function(){e.logoutUser(e.history)}},"Sign out"))))))}))),z=t(207),x=t(31),F=t.n(x),I=t(595),L=t(596),H=t(597),R=t(182),q=t.n(R),B=t(546),D=t.n(B),_=t(212),A=JSON.parse(localStorage.getItem("keminaAdmin")),W=A&&A.klinik.kodeklinik&&("admin"===A.jenisUser||A.superadmin)?[{id:"dashboard",icon:"iconsminds-newspaper",label:"menu.dashboard",to:"/app/dashboard"},{id:"Transaksi",icon:"iconsminds-stethoscope",label:"menu.transaksi",to:"/app/gogo/start",subs:[{icon:"simple-icon-paper-plane",label:"menu.konfirmasi-jadwal",to:"/app/transaksi/konfirmasi-jadwal"},{icon:"simple-icon-paper-plane",label:"menu.daftar-antrian",to:"/app/transaksi/daftar-antrian"},{icon:"simple-icon-paper-plane",label:"menu.penjualan",to:"/app/transaksi/penjualan"},{icon:"simple-icon-paper-plane",label:"menu.pembelian",to:"/app/transaksi/pembelian"}]},{id:"inventory",icon:"iconsminds-castle",label:"menu.inventory",to:"/app/gogo/start",subs:[{icon:"simple-icon-paper-plane",label:"menu.stok-tersedia",to:"/app/inventory/stok-tersedia"},{icon:"simple-icon-paper-plane",label:"menu.stok-masuk",to:"/app/inventory/stok-masuk"},{icon:"simple-icon-paper-plane",label:"menu.stok-keluar",to:"/app/inventory/stok-keluar"}]},{id:"datamaster",icon:"iconsminds-data-storage",label:"menu.data-master",to:"/app/second-menu",subs:[{icon:"simple-icon-paper-plane",label:"menu.dokter",to:"/app/data-master/dokter"},{icon:"simple-icon-paper-plane",label:"menu.pasien",to:"/app/data-master/pasien"},{icon:"simple-icon-paper-plane",label:"menu.admin",to:"/app/data-master/admin"},{icon:"simple-icon-paper-plane",label:"menu.jenis",to:"/app/data-master/jenis-produk"},{icon:"simple-icon-paper-plane",label:"menu.kategori",to:"/app/data-master/kategori-produk"},{icon:"simple-icon-paper-plane",label:"menu.produk",to:"/app/data-master/produk"},{icon:"simple-icon-paper-plane",label:"menu.layanan",to:"/app/data-master/layanan"}]},{id:"laporan",icon:"iconsminds-newspaper",label:"menu.laporan",to:"/app/laporan",subs:[{icon:"simple-icon-paper-plane",label:"menu.laporan-penjualan",to:"/app/laporan-penjualan"},{icon:"simple-icon-paper-plane",label:"menu.laporan-pelayanan",to:"/app/laporan-pelayanan"}]}]:A&&A.klinik.kodeklinik&&"pasien"===A.jenisUser?[{id:"dashboard",icon:"iconsminds-newspaper",label:"menu.dashboard",to:"/app/dashboard"},{id:"BuatJanji",icon:"iconsminds-newspaper",label:"menu.buat-janji",to:"/app/buat-janji"},{id:"Riwayat",icon:"iconsminds-newspaper",label:"menu.riwayat",to:"/app/riwayat"},{id:"profil",icon:"iconsminds-newspaper",label:"menu.profil",to:"/app/profil"}]:A&&A.klinik.kodeklinik&&"dokter"===A.jenisUser?[{id:"dashboard",icon:"iconsminds-newspaper",label:"menu.dashboard",to:"/app/dashboard"},{id:"ListJanji",icon:"iconsminds-newspaper",label:"menu.list-janji",to:"/app/list-janji"},{id:"Riwayat",icon:"iconsminds-newspaper",label:"menu.riwayat",to:"/app/riwayat"},{id:"profil",icon:"iconsminds-newspaper",label:"menu.profil",to:"/app/profil"}]:[{id:"pilihklinik",icon:"iconsminds-clinic",label:"menu.manajemenklinik",to:"/app/manajemen-klinik"}],T=function(e){function n(e){var t;return Object(k.a)(this,n),(t=Object(v.a)(this,Object(w.a)(n).call(this,e))).handleWindowResize=function(e){if(!e||e.isTrusted){var n=t.props.containerClassnames,a=t.getMenuClassesForResize(n);t.props.setContainerClassnames(0,a.join(" "),t.props.selectedMenuHasSubItems)}},t.handleDocumentClick=function(e){var n=t.getContainer(),a=!1;(e.target&&e.target.classList&&(e.target.classList.contains("menu-button")||e.target.classList.contains("menu-button-mobile"))||e.target.parentElement&&e.target.parentElement.classList&&(e.target.parentElement.classList.contains("menu-button")||e.target.parentElement.classList.contains("menu-button-mobile"))||e.target.parentElement&&e.target.parentElement.parentElement&&e.target.parentElement.parentElement.classList&&(e.target.parentElement.parentElement.classList.contains("menu-button")||e.target.parentElement.parentElement.classList.contains("menu-button-mobile")))&&(a=!0),n.contains(e.target)||n===e.target||a||(t.setState({viewingParentMenu:""}),t.toggle())},t.getMenuClassesForResize=function(e){var n=t.props,a=n.menuHiddenBreakpoint,l=n.subHiddenBreakpoint,r=e.split(" ").filter((function(e){return""!==e})),i=window.innerWidth;return i<a?r.push("menu-mobile"):i<l?(r=r.filter((function(e){return"menu-mobile"!==e}))).includes("menu-default")&&!r.includes("menu-sub-hidden")&&r.push("menu-sub-hidden"):(r=r.filter((function(e){return"menu-mobile"!==e}))).includes("menu-default")&&r.includes("menu-sub-hidden")&&(r=r.filter((function(e){return"menu-sub-hidden"!==e}))),r},t.getContainer=function(){return F.a.findDOMNode(Object(z.a)(t))},t.toggle=function(){var e=t.getIsHasSubItem();t.props.changeSelectedMenuHasSubItems(e);var n=t.props,a=n.containerClassnames,l=n.menuClickCount,r=a?a.split(" ").filter((function(e){return""!==e})):"",i=-1;e?r.includes("menu-sub-hidden")&&3===l?i=2:(r.includes("menu-hidden")||r.includes("menu-mobile"))&&(i=0):!r.includes("menu-default")||l%4!==0&&l%4!==3?!r.includes("menu-sub-hidden")||2!==l&&3!==l?(r.includes("menu-hidden")||r.includes("menu-mobile"))&&(i=0):i=0:i=1,i>=0&&t.props.setContainerClassnames(i,a,e)},t.handleProps=function(){t.addEvents()},t.addEvents=function(){["click","touchstart","touchend"].forEach((function(e){return document.addEventListener(e,t.handleDocumentClick,!0)}))},t.removeEvents=function(){["click","touchstart","touchend"].forEach((function(e){return document.removeEventListener(e,t.handleDocumentClick,!0)}))},t.setSelectedLiActive=function(e){var n=document.querySelector(".sub-menu  li.active");null!=n&&n.classList.remove("active");var a=document.querySelector(".third-level-menu  li.active");null!=a&&a.classList.remove("active");var l=document.querySelector(".third-level-menu  a.active");null!=l&&l.parentElement.classList.add("active");var r=document.querySelector(".sub-menu  a.active");if(null!=r)r.parentElement.classList.add("active"),t.setState({selectedParentMenu:r.parentElement.parentElement.getAttribute("data-parent")},e);else{var i=document.querySelector(".main-menu  li a.active");null!=i?t.setState({selectedParentMenu:i.getAttribute("data-flag")},e):""===t.state.selectedParentMenu&&t.setState({selectedParentMenu:W[0].id},e)}},t.setHasSubItemStatus=function(){var e=t.getIsHasSubItem();t.props.changeSelectedMenuHasSubItems(e),t.toggle()},t.getIsHasSubItem=function(){var e=t.state.selectedParentMenu,n=W.find((function(n){return n.id===e}));return!!n&&!!(n&&n.subs&&n.subs.length>0)},t.openSubMenu=function(e,n){var a=n.id,l=n.subs&&n.subs.length>0;if(t.props.changeSelectedMenuHasSubItems(l),l){e.preventDefault();var r=t.props,i=r.containerClassnames,c=r.menuClickCount,s=i?i.split(" ").filter((function(e){return""!==e})):"";s.includes("menu-mobile")?t.props.addContainerClassname("sub-show-temporary",i):!s.includes("menu-sub-hidden")||2!==c&&0!==c?!s.includes("menu-hidden")||1!==c&&3!==c?!s.includes("menu-default")||s.includes("menu-sub-hidden")||1!==c&&3!==c||t.props.setContainerClassnames(0,i,l):t.props.setContainerClassnames(2,i,l):t.props.setContainerClassnames(3,i,l),t.setState({viewingParentMenu:a})}else t.setState({viewingParentMenu:a,selectedParentMenu:a}),t.toggle()},t.toggleMenuCollapse=function(e,n){e.preventDefault();var a=t.state.collapsedMenus;return a.indexOf(n)>-1?t.setState({collapsedMenus:a.filter((function(e){return e!==n}))}):(a.push(n),t.setState({collapsedMenus:a})),!1},t.state={selectedParentMenu:"",viewingParentMenu:"",collapsedMenus:[]},t}return Object(j.a)(n,e),Object(g.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&(this.setSelectedLiActive(this.setHasSubItemStatus),window.scrollTo(0,0)),this.handleProps()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize(),this.handleProps(),this.setSelectedLiActive(this.setHasSubItemStatus)}},{key:"componentWillUnmount",value:function(){this.removeEvents(),window.removeEventListener("resize",this.handleWindowResize)}},{key:"render",value:function(){var e=this,n=this.state,t=n.selectedParentMenu,r=n.viewingParentMenu,i=n.collapsedMenus;return l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"main-menu"},l.a.createElement("div",{className:"scroll"},l.a.createElement(D.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},l.a.createElement(I.a,{vertical:!0,className:"list-unstyled"},W&&W.map((function(n){return l.a.createElement(L.a,{key:n.id,className:q()({active:t===n.id&&""===r||r===n.id})},n.newWindow?l.a.createElement("a",{href:n.to,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:n.icon})," ",l.a.createElement(_.a,{id:n.label})):l.a.createElement(p.b,{to:n.to,onClick:function(t){return e.openSubMenu(t,n)},"data-flag":n.id},l.a.createElement("i",{className:n.icon})," ",l.a.createElement(_.a,{id:n.label})))})))))),l.a.createElement("div",{className:"sub-menu"},l.a.createElement("div",{className:"scroll"},l.a.createElement(D.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},W&&W.map((function(n){return l.a.createElement(I.a,{key:n.id,className:q()({"d-block":e.state.selectedParentMenu===n.id&&""===e.state.viewingParentMenu||e.state.viewingParentMenu===n.id}),"data-parent":n.id},n.subs&&n.subs.map((function(t,r){return l.a.createElement(L.a,{key:"".concat(n.id,"_").concat(r),className:"".concat(t.subs&&t.subs.length>0?"has-sub-item":"")},t.newWindow?l.a.createElement("a",{href:t.to,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:t.icon})," ",l.a.createElement(_.a,{id:t.label})):t.subs&&t.subs.length>0?l.a.createElement(a.Fragment,null,l.a.createElement(p.b,{className:"rotate-arrow-icon opacity-50 ".concat(-1===i.indexOf("".concat(n.id,"_").concat(r))?"":"collapsed"),to:t.to,id:"".concat(n.id,"_").concat(r),onClick:function(t){return e.toggleMenuCollapse(t,"".concat(n.id,"_").concat(r))}},l.a.createElement("i",{className:"simple-icon-arrow-down"})," ",l.a.createElement(_.a,{id:t.label})),l.a.createElement(H.a,{isOpen:-1===i.indexOf("".concat(n.id,"_").concat(r))},l.a.createElement(I.a,{className:"third-level-menu"},t.subs.map((function(e,t){return l.a.createElement(L.a,{key:"".concat(n.id,"_").concat(r,"_").concat(t)},e.newWindow?l.a.createElement("a",{href:e.to,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:e.icon})," ",l.a.createElement(_.a,{id:e.label})):l.a.createElement(p.b,{to:e.to},l.a.createElement("i",{className:e.icon})," ",l.a.createElement(_.a,{id:e.label})))}))))):l.a.createElement(p.b,{to:t.to},l.a.createElement("i",{className:t.icon})," ",l.a.createElement(_.a,{id:t.label})))})))}))))))}}]),n}(a.Component),U=Object(r.g)(Object(i.b)((function(e){var n=e.menu;return{containerClassnames:n.containerClassnames,subHiddenBreakpoint:n.subHiddenBreakpoint,menuHiddenBreakpoint:n.menuHiddenBreakpoint,menuClickCount:n.menuClickCount,selectedMenuHasSubItems:n.selectedMenuHasSubItems}}),{setContainerClassnames:b.B,addContainerClassname:b.t,changeDefaultClassnames:b.u,changeSelectedMenuHasSubItems:b.w})(T)),J=Object(r.g)(Object(i.b)((function(e){return{containerClassnames:e.menu.containerClassnames}}),{})((function(e){var n=JSON.parse(localStorage.getItem("keminaAdmin")),t=e.containerClassnames;return l.a.createElement("div",{id:"app-container",className:t},l.a.createElement(P,{history:e.history,authLogin:n}),l.a.createElement(U,{authLogin:n}),l.a.createElement("main",null,l.a.createElement("div",{className:"container-fluid"},e.children)))}))),K=Object(a.lazy)((function(){return t.e(57).then(t.bind(null,599))})),X=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(41)]).then(t.bind(null,641))})),G=Object(a.lazy)((function(){return t.e(59).then(t.bind(null,609))})),Q=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(42)]).then(t.bind(null,610))})),V=Object(a.lazy)((function(){return Promise.all([t.e(1),t.e(6),t.e(43)]).then(t.bind(null,629))})),Y=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(26)]).then(t.bind(null,611))})),Z=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(23)]).then(t.bind(null,653))})),$=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(24)]).then(t.bind(null,627))})),ee=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(32)]).then(t.bind(null,637))})),ne=Object(a.lazy)((function(){return Promise.all([t.e(1),t.e(3),t.e(45),t.e(46)]).then(t.bind(null,639))})),te=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(30)]).then(t.bind(null,634))})),ae=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(27)]).then(t.bind(null,644))})),le=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(25)]).then(t.bind(null,624))})),re=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(36)]).then(t.bind(null,633))})),ie=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(35)]).then(t.bind(null,630))})),ce=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(39)]).then(t.bind(null,631))})),se=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(40)]).then(t.bind(null,632))})),oe=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(4),t.e(37)]).then(t.bind(null,643))})),ue=Object(a.lazy)((function(){return t.e(58).then(t.bind(null,612))})),me=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(21)]).then(t.bind(null,619))})),de=Object(a.lazy)((function(){return Promise.all([t.e(1),t.e(6),t.e(44)]).then(t.bind(null,645))})),pe=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(31)]).then(t.bind(null,640))})),be=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(33)]).then(t.bind(null,628))})),he=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(22)]).then(t.bind(null,623))})),fe=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(38)]).then(t.bind(null,642))}));n.default=Object(r.g)(Object(i.b)((function(e){return{containerClassnames:e.menu.containerClassnames}}),{})((function(e){var n=JSON.parse(localStorage.getItem("keminaAdmin")),t=e.match;return l.a.createElement(J,null,l.a.createElement("div",{className:"dashboard-wrapper"},l.a.createElement(a.Suspense,{fallback:l.a.createElement("div",{className:"loading"})},l.a.createElement(r.d,null,n&&n.klinik.kodeklinik?l.a.createElement(r.a,{exact:!0,from:"".concat(t.url,"/"),to:"".concat(t.url,"/dashboard")}):l.a.createElement(r.a,{exact:!0,from:"".concat(t.url,"/"),to:"".concat(t.url,"/manajemen-klinik")}),l.a.createElement(r.b,{path:"".concat(t.url,"/manajemen-klinik"),render:function(e){return l.a.createElement(X,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/gogo"),render:function(e){return l.a.createElement(K,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/second-menu"),render:function(e){return l.a.createElement(G,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/dashboard"),render:function(e){return l.a.createElement(V,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/profil"),render:function(e){return l.a.createElement(Q,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/transaksi/konfirmasi-jadwal"),render:function(e){return l.a.createElement(Y,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/transaksi/daftar-antrian"),render:function(e){return l.a.createElement(Z,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/transaksi/penjualan"),render:function(e){return l.a.createElement($,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/transaksi/pembelian"),render:function(e){return l.a.createElement(ee,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/inventory/stok-tersedia"),render:function(e){return l.a.createElement(ne,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/inventory/stok-masuk"),render:function(e){return l.a.createElement(te,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/inventory/stok-keluar"),render:function(e){return l.a.createElement(ae,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/data-master/dokter"),render:function(e){return l.a.createElement(le,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/data-master/pasien"),render:function(e){return l.a.createElement(re,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/data-master/admin"),render:function(e){return l.a.createElement(ie,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/data-master/jenis-produk"),render:function(e){return l.a.createElement(ce,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/data-master/kategori-produk"),render:function(e){return l.a.createElement(se,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/data-master/produk"),render:function(e){return l.a.createElement(oe,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/data-master/layanan"),render:function(e){return l.a.createElement(fe,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/laporan"),render:function(e){return l.a.createElement(ue,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/profil"),render:function(e){return l.a.createElement(Q,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/buat-janji"),render:function(e){return l.a.createElement(me,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/riwayat"),render:function(e){return l.a.createElement(de,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/laporan-penjualan"),render:function(e){return l.a.createElement(pe,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/laporan-pelayanan"),render:function(e){return l.a.createElement(be,e)}}),l.a.createElement(r.b,{path:"".concat(t.url,"/list-janji"),render:function(e){return l.a.createElement(he,e)}}),l.a.createElement(r.a,{to:"/error"})))))})))}}]);
//# sourceMappingURL=views-app.d3ad3e2e.chunk.js.map