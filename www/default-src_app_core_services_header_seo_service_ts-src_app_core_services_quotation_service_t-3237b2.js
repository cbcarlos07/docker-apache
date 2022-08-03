"use strict";(self.webpackChunkzero_km=self.webpackChunkzero_km||[]).push([["default-src_app_core_services_header_seo_service_ts-src_app_core_services_quotation_service_t-3237b2"],{4018:(E,v,g)=>{g.d(v,{v:()=>p});var e=g(6362),y=g(3184);let p=(()=>{class f{constructor(l){this.document=l}createLinkForCanonicalURL(){this.document.querySelectorAll('[rel="canonical"]')[0].setAttribute("href",this.document.URL)}}return f.\u0275fac=function(l){return new(l||f)(y.\u0275\u0275inject(e.K0))},f.\u0275prov=y.\u0275\u0275defineInjectable({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},5357:(E,v,g)=>{g.d(v,{G:()=>f});var e=g(6908),p=g(3184);let f=(()=>{class t{constructor(){}checkInArray(a,c){let o=!1;return c.forEach(r=>{r.Descricao===a&&(o=!0)}),o}getProductId(a){switch(a){case"ADD":case"MB0KM":return 1;case"CFR":case"WDW1":return 4;case"CZKM":return 8;case"MC0KM":return 2;case"WDWP1":return 5;case"SPZKM":return 215;case"OSZKM":return 216}}getProductVetorId(a){switch(a){case"ADD":return 39;case"CFR":return 59;case"CZKM":return 96;case"SPZKM":return 218;case"OSZKM":return 247}}getProductPriceId(a){switch(a){case"ADD":return 331;case"CFR":return 775;case"CZKM":return 1783;case"MB0KM":return 157;case"MC0KM":return 158;case"WDW1":return 160;case"WDWP1":return 161;case"SPZKM":case"OSZKM":return 278}}getCoinsurance(a,c){const o=new Array;o.MB0KM="CPBZKM",o.MC0KM="CPCZKM";const r=JSON.parse(localStorage.getItem("coinsurances")),u=r?r.filter(C=>C.sigla===o[c])[0]:null,d=u?u.valores.filter(C=>C.grupo_id===a)[0]:null;return d?d.valor:null}getBookingPayload(a){let c=[],o=[],r=[];c.push({codigo:a.protection.sigla}),a.extraProtections.forEach(_=>{c.push({codigo:_.sigla})}),a.additionalServices&&a.additionalServices.forEach(_=>{"ADD"===_.sigla?_.drivers?_.drivers.forEach(k=>{null!==k.cpf&&r.push({nome:"Condutor",sobrenome:"Adicional",cpf:k.cpf})}):r=[]:o.push({tipo:_.sigla,quantidade:"1"})}),o.filter(_=>96===_.tipo).length||o.push({tipo:96,quantidade:"1"});const u=e().add(1,"day");let d=e(u).add(a.period&&a.period.dias?a.period.dias:30*parseInt(a.period.meses),"days");u.toString()===d.toString()&&(d=e(u).add(1440,"days"));let C={data_retirada:u.format("DD/MM/YYYY 10:00"),data_devolucao:d.format("DD/MM/YYYY 10:00"),local_retirada:"380",local_devolucao:"380","with-unavailable":!0,codigo_veiculo:a.acriss,sigla:void 0===a.mileage.valor?"":a.mileage.valor.sigla,protecoes:c,equipamentos:o,condutores:r,vitrine:!1,franquia:null};const S=localStorage.getItem("CPN");return S&&(C.coupon=S),C}getPromotion(a){let o=0,r=0,u={};return a.TotalCharge.Periods.forEach(d=>{d.valor_mensal!=o&&r>0&&(u={value_month_promo:o,value_normal:d.valor_mensal,valor_mensal_total:d.valor_mensal_total,promo_month:r,value_day:d.valor_diaria,total_days:d.diarias,car_promo:a.Vehicle.FipeCode,is_promo:!0}),o=d.valor_mensal,r++}),u}getPromotionMonths(a){let c=0,o=0,r={};return a.forEach(u=>{u.ValorTotal!=c&&o>0&&(r={value_month_promo:c,value_normal:u.ValorTotal,promo_month:o,valor_mensal_total:u.valor_mensal_total,is_promo:!0}),c=u.ValorTotal,o++}),r}getBackupCarAmount(a){try{const c=a.filter(o=>"CZKM"===o.PricedEquip.Equipment.Sigla)[0];return"true"===c.PricedEquip.Charge.IncludedInRate?parseFloat(c.PricedEquip.Charge.Amount):0}catch(c){return 0}}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=p.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},3405:(E,v,g)=>{g.d(v,{o:()=>y});var e=g(3184);let y=(()=>{class p{constructor(){this.previousKey=null,this.regexNumbers=RegExp("[0-9]"),this.regexLetters=RegExp("[a-zA-Z]"),this.regexOnlyNumbers=RegExp("^[0-9]*$")}isValidTel(t){const l=t.value;return 0===l.length||10===l.length?null:{telNotValid:!0}}isValidCel(t){return 11===t.value.length?null:{celNotValid:!0}}isValidCep(t){return 8===t.value.length?null:{cepNotValid:!0}}isValidCpf(t){const l=t.value;if(l){let a,c,o,r,u,d;if(d=1,l.length<11)return null;for(r=0;r<l.length-1;r++)if(l.charAt(r)!==l.charAt(r+1)){d=0;break}if(d)return{cpfNotValid:!0};for(a=l.substring(0,9),c=l.substring(9),o=0,r=10;r>1;r--)o+=a.charAt(10-r)*r;if(u=o%11<2?0:11-o%11,u!==Number(c.charAt(0)))return{cpfNotValid:!0};for(a=l.substring(0,10),o=0,r=11;r>1;r--)o+=a.charAt(11-r)*r;return u=o%11<2?0:11-o%11,u!==Number(c.charAt(1))?{cpfNotValid:!0}:null}return null}repetitionValidator(t){let l=t.parent;if(!l)return null;var a=!1;for(let c in l.controls){let o=l.get(c);t!=o&&""!=t.value&&null!=t.value&&t.value==o.value&&(a=!0)}return a?{duplicated:!0}:null}isValidPswd(t){return/^\d+(?:\.\d+)?$/.test(t.value)&&6===t.value.length?null:/^\d+(?:\.\d+)?$/.test(t.value)?{pswdMaxSix:!0}:{pswdOnlyNumbers:!0}}checkNumbers(t){!this.regexNumbers.test(t.key)&&"Backspace"!==t.key&&"Tab"!==t.key&&t.preventDefault()}checkCep(t,l){if(this.regexNumbers.test(t.key)||"Backspace"===t.key||"Tab"===t.key){let a=t.target.value;"Backspace"===t.key&&(a=a.substring(0,a.length-1)),"Backspace"!==t.key&&(a+=t.key),a=a.replace("-",""),l(a.length>=8)}else t.preventDefault()}checkCPF(t){const l=t;if(l){let a,c,o,r,u,d;if(d=1,l.length<11)return!1;for(r=0;r<l.length-1;r++)if(l.charAt(r)!==l.charAt(r+1)){d=0;break}if(d)return!1;for(a=l.substring(0,9),c=l.substring(9),o=0,r=10;r>1;r--)o+=a.charAt(10-r)*r;if(u=o%11<2?0:11-o%11,u!==Number(c.charAt(0)))return!1;for(a=l.substring(0,10),o=0,r=11;r>1;r--)o+=a.charAt(11-r)*r;return u=o%11<2?0:11-o%11,u===Number(c.charAt(1))}return!1}checkLetters(t){this.previousKey===String.fromCharCode(32)&&t.key===String.fromCharCode(32)?t.preventDefault():t.key===String.fromCharCode(32)||this.regexLetters.test(t.key)?this.previousKey=t.key:t.preventDefault()}checkEnterPress(t,l){if("Enter"===t.key){t.preventDefault();for(const a in l.controls)l.controls[a].markAsTouched(),l.controls[a].markAsDirty();return!0}return!1}checkIsOnlyNumbers(t){return this.regexOnlyNumbers.test(t)}checkFormControls(t){for(const l in t.controls)t.controls[l].markAsTouched(),t.controls[l].markAsDirty()}getOnlyNumbers(t){return t.replace(/[^0-9]+/g,"")}}return p.\u0275fac=function(t){return new(t||p)},p.\u0275prov=e.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},2922:(E,v,g)=>{g.d(v,{o:()=>P});var e=g(3184),y=g(6362);let p=(()=>{class n{constructor(){this.alt="",this.title=""}ngOnInit(){}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["icone-orange-check"]],inputs:{alt:"alt",title:"title"},decls:3,vars:2,consts:[["xmlns","http://www.w3.org/2000/svg","width","13.88","height","13.88","viewBox","0 0 13.88 13.88"],["cx","6.94","cy","6.94","r","6.94",1,"a"],["d","M-4273.836-325.893l-4.848,4.882-3.046-3.143,1.24-1.214,1.806,1.8,3.613-3.645Z","transform","translate(4284.611 331.365)",1,"b"]],template:function(s,i){1&s&&(e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(0,"svg",0),e.\u0275\u0275element(1,"circle",1),e.\u0275\u0275element(2,"path",2),e.\u0275\u0275elementEnd()),2&s&&e.\u0275\u0275attribute("alt",i.alt)("title",i.title)},styles:[".a[_ngcontent-%COMP%]{fill:#f97d00}.b[_ngcontent-%COMP%]{fill:#fff}\n/*# sourceMappingURL=orange-check.component.ts-angular-inline--66.css.map*/"]}),n})(),f=(()=>{class n{constructor(){this.alt="",this.title=""}ngOnInit(){}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["icone-orange-1"]],inputs:{alt:"alt",title:"title"},decls:11,vars:2,consts:[["xmlns","http://www.w3.org/2000/svg","width","13.882","height","13.883","viewBox","0 0 13.882 13.883"],["id","Grupo_14080","data-name","Grupo 14080","transform","translate(6975 1546)"],["id","Grupo_14078","data-name","Grupo 14078","transform","translate(-7125 -1614)"],["id","Grupo_14085","data-name","Grupo 14085","transform","translate(150 68)"],["id","Grupo_13406","data-name","Grupo 13406"],["id","Elipse_292","data-name","Elipse 292","transform","translate(0 0)","fill","#fff","stroke","#f97d00","stroke-width","1"],["cx","6.941","cy","6.941","r","6.941","stroke","none"],["cx","6.941","cy","6.941","r","6.441","fill","none"],["id","_1","data-name","1","transform","translate(4.131 10.371)","fill","#f97d00","font-size","10","font-family","Roboto-Bold, Roboto","font-weight","700"],["x","0","y","0"]],template:function(s,i){1&s&&(e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(0,"svg",0),e.\u0275\u0275elementStart(1,"g",1),e.\u0275\u0275elementStart(2,"g",2),e.\u0275\u0275elementStart(3,"g",3),e.\u0275\u0275elementStart(4,"g",4),e.\u0275\u0275elementStart(5,"g",5),e.\u0275\u0275element(6,"circle",6),e.\u0275\u0275element(7,"circle",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"text",8),e.\u0275\u0275elementStart(9,"tspan",9),e.\u0275\u0275text(10,"1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&s&&e.\u0275\u0275attribute("alt",i.alt)("title",i.title)},encapsulation:2}),n})(),t=(()=>{class n{constructor(){this.alt="",this.title=""}ngOnInit(){}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["icone-orange-2"]],inputs:{alt:"alt",title:"title"},decls:14,vars:2,consts:[["xmlns","http://www.w3.org/2000/svg","width","13.882","height","13.883","viewBox","0 0 13.882 13.883"],["id","Grupo_14083","data-name","Grupo 14083","transform","translate(6733 1481)"],["id","Grupo_14081","data-name","Grupo 14081","transform","translate(-6750.524 -1481)"],["id","_5","data-name","5","transform","translate(22.558 10.371)","fill","#dcdcdc","font-size","10","font-family","Roboto-Bold, Roboto","font-weight","700"],["x","0","y","0"],["id","Grupo_14084","data-name","Grupo 14084","transform","translate(17.524)"],["id","Grupo_13406","data-name","Grupo 13406"],["id","Elipse_292","data-name","Elipse 292","transform","translate(0 0)","fill","#fff","stroke","#f97d00","stroke-width","1"],["cx","6.941","cy","6.941","r","6.941","stroke","none"],["cx","6.941","cy","6.941","r","6.441","fill","none"],["id","_2","data-name","2","transform","translate(4.131 10.371)","fill","#f97d00","font-size","10","font-family","Roboto-Bold, Roboto","font-weight","700"]],template:function(s,i){1&s&&(e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(0,"svg",0),e.\u0275\u0275elementStart(1,"g",1),e.\u0275\u0275elementStart(2,"g",2),e.\u0275\u0275elementStart(3,"text",3),e.\u0275\u0275elementStart(4,"tspan",4),e.\u0275\u0275text(5,"5"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"g",5),e.\u0275\u0275elementStart(7,"g",6),e.\u0275\u0275elementStart(8,"g",7),e.\u0275\u0275element(9,"circle",8),e.\u0275\u0275element(10,"circle",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"text",10),e.\u0275\u0275elementStart(12,"tspan",4),e.\u0275\u0275text(13,"2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&s&&e.\u0275\u0275attribute("alt",i.alt)("title",i.title)},encapsulation:2}),n})(),l=(()=>{class n{constructor(){this.alt="",this.title=""}ngOnInit(){}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["icone-gray-2"]],inputs:{alt:"alt",title:"title"},decls:14,vars:2,consts:[["xmlns","http://www.w3.org/2000/svg","width","13.882","height","13.883","viewBox","0 0 13.882 13.883"],["id","Grupo_14086","data-name","Grupo 14086","transform","translate(6733 1481)"],["id","Grupo_14081","data-name","Grupo 14081","transform","translate(-6750.524 -1481)"],["id","_5","data-name","5","transform","translate(22.558 10.371)","fill","#dcdcdc","font-size","10","font-family","Roboto-Bold, Roboto","font-weight","700"],["x","0","y","0"],["id","Grupo_14084","data-name","Grupo 14084","transform","translate(17.524)"],["id","Grupo_13406","data-name","Grupo 13406"],["id","Elipse_292","data-name","Elipse 292","transform","translate(0 0)","fill","#fff","stroke","#dcdcdc","stroke-width","1"],["cx","6.941","cy","6.941","r","6.941","stroke","none"],["cx","6.941","cy","6.941","r","6.441","fill","none"],["id","_2","data-name","2","transform","translate(4.131 10.371)","fill","#dcdcdc","font-size","10","font-family","Roboto-Bold, Roboto","font-weight","700"]],template:function(s,i){1&s&&(e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(0,"svg",0),e.\u0275\u0275elementStart(1,"g",1),e.\u0275\u0275elementStart(2,"g",2),e.\u0275\u0275elementStart(3,"text",3),e.\u0275\u0275elementStart(4,"tspan",4),e.\u0275\u0275text(5,"5"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"g",5),e.\u0275\u0275elementStart(7,"g",6),e.\u0275\u0275elementStart(8,"g",7),e.\u0275\u0275element(9,"circle",8),e.\u0275\u0275element(10,"circle",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"text",10),e.\u0275\u0275elementStart(12,"tspan",4),e.\u0275\u0275text(13,"2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&s&&e.\u0275\u0275attribute("alt",i.alt)("title",i.title)},encapsulation:2}),n})(),a=(()=>{class n{constructor(){this.alt="",this.title=""}ngOnInit(){}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["icone-orange-3"]],inputs:{alt:"alt",title:"title"},decls:8,vars:2,consts:[["id","Grupo_13725","data-name","Grupo 13725","xmlns","http://www.w3.org/2000/svg","width","13.881","height","13.881","viewBox","0 0 13.881 13.881"],["id","Grupo_13406","data-name","Grupo 13406"],["id","Elipse_292","data-name","Elipse 292","fill","#fff","stroke","#f97d00","stroke-width","1"],["cx","6.941","cy","6.941","r","6.941","stroke","none"],["cx","6.941","cy","6.941","r","6.441","fill","none"],["id","_3","data-name","3","transform","translate(7 10.371)","fill","#f97d00","font-size","10","font-family","Roboto-Bold, Roboto","font-weight","700"],["x","-2.869","y","0"]],template:function(s,i){1&s&&(e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(0,"svg",0),e.\u0275\u0275elementStart(1,"g",1),e.\u0275\u0275elementStart(2,"g",2),e.\u0275\u0275element(3,"circle",3),e.\u0275\u0275element(4,"circle",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"text",5),e.\u0275\u0275elementStart(6,"tspan",6),e.\u0275\u0275text(7,"3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&s&&e.\u0275\u0275attribute("alt",i.alt)("title",i.title)},encapsulation:2}),n})(),c=(()=>{class n{constructor(){this.alt="",this.title=""}ngOnInit(){}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["icone-gray-3"]],inputs:{alt:"alt",title:"title"},decls:10,vars:2,consts:[["xmlns","http://www.w3.org/2000/svg","width","13.882","height","13.883","viewBox","0 0 13.882 13.883"],["id","Grupo_14088","data-name","Grupo 14088","transform","translate(6491.275 1481)"],["id","Grupo_14087","data-name","Grupo 14087","transform","translate(-6491.275 -1481)"],["id","Grupo_13406","data-name","Grupo 13406"],["id","Elipse_292","data-name","Elipse 292","transform","translate(0 0)","fill","#fff","stroke","#dcdcdc","stroke-width","1"],["cx","6.941","cy","6.941","r","6.941","stroke","none"],["cx","6.941","cy","6.941","r","6.441","fill","none"],["id","_3","data-name","3","transform","translate(4.131 10.371)","fill","#dcdcdc","font-size","10","font-family","Roboto-Bold, Roboto","font-weight","700"],["x","0","y","0"]],template:function(s,i){1&s&&(e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(0,"svg",0),e.\u0275\u0275elementStart(1,"g",1),e.\u0275\u0275elementStart(2,"g",2),e.\u0275\u0275elementStart(3,"g",3),e.\u0275\u0275elementStart(4,"g",4),e.\u0275\u0275element(5,"circle",5),e.\u0275\u0275element(6,"circle",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"text",7),e.\u0275\u0275elementStart(8,"tspan",8),e.\u0275\u0275text(9,"3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&s&&e.\u0275\u0275attribute("alt",i.alt)("title",i.title)},encapsulation:2}),n})();function o(n,m){1&n&&e.\u0275\u0275element(0,"icone-orange-check",10)}function r(n,m){1&n&&e.\u0275\u0275element(0,"icone-orange-1",10)}function u(n,m){1&n&&e.\u0275\u0275element(0,"icone-orange-check",11)}function d(n,m){1&n&&e.\u0275\u0275element(0,"icone-orange-2",11)}function C(n,m){1&n&&e.\u0275\u0275element(0,"icone-gray-2",11)}function S(n,m){1&n&&e.\u0275\u0275element(0,"icone-orange-check",12)}function _(n,m){1&n&&e.\u0275\u0275element(0,"icone-orange-3",12)}function k(n,m){1&n&&e.\u0275\u0275element(0,"icone-gray-3",12)}let P=(()=>{class n{constructor(){this.statusTimeline=[{id:"veiculo",active:!1,current:!1,label:"Ve\xedculo",activeImg:"orange-icon-1.svg",checkedImg:"orange-check.svg",displayImg:"orange-icon-1.svg"},{id:"login",active:!1,current:!1,label:"Login",defaultImg:"gray-icon-2.svg",activeImg:"orange-icon-2.svg",checkedImg:"orange-check.svg",displayImg:"gray-icon-2.svg"},{id:"pagamento",active:!1,current:!1,label:"Pagamento",defaultImg:"gray-icon-3.svg",activeImg:"orange-icon-3.svg",checkedImg:"orange-check.svg",displayImg:"gray-icon-3.svg"},{id:"foto",active:!1,current:!1,label:"Foto",defaultImg:"gray-icon-4.svg",activeImg:"orange-icon-4.svg",checkedImg:"orange-check.svg",displayImg:"gray-icon-4.svg"},{id:"cnh",active:!1,current:!1,label:"CNH",defaultImg:"gray-icon-5.svg",activeImg:"orange-icon-5.svg",checkedImg:"orange-check.svg",displayImg:"gray-icon-5.svg"}]}set currentStep(s){this._currentStep=s,this.setStatusTimeline(s)}get currentStep(){return this._currentStep}set isOnDemand(s){this._isOnDemand=s,this.statusTimeline[2].label=s?"Dados de pagamento":"Pagamento"}get isOnDemand(){return this._isOnDemand}ngOnInit(){}setStatusTimeline(s){const i=this.statusTimeline.map(h=>h.id).indexOf(s);this.statusTimeline.forEach((h,I)=>{I===i&&(h.current=!0,h.displayImg=h.activeImg),I<i&&(h.active=!0,h.displayImg=h.checkedImg),I>i&&(h.displayImg=h.defaultImg)})}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-steps-timeline"]],inputs:{currentStep:"currentStep",isOnDemand:"isOnDemand"},decls:28,vars:24,consts:[[1,"steps-timeline","search-bar-spacer"],[1,"container","timeline"],[1,"timeline__item"],[1,"timeline__status"],[1,"timeline__hr","default"],["class","timeline__img","alt","Passo 1","title","Etapa de Detalhes do ve\xedculo",4,"ngIf"],[1,"timeline__hr"],[1,"timeline__label"],["class","timeline__img","alt","Passo 2","title","Etapa de Login",4,"ngIf"],["class","timeline__img","alt","Passo 3","title","Etapa de Pagamento",4,"ngIf"],["alt","Passo 1","title","Etapa de Detalhes do ve\xedculo",1,"timeline__img"],["alt","Passo 2","title","Etapa de Login",1,"timeline__img"],["alt","Passo 3","title","Etapa de Pagamento",1,"timeline__img"]],template:function(s,i){1&s&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275elementStart(2,"div",2),e.\u0275\u0275elementStart(3,"div",3),e.\u0275\u0275element(4,"hr",4),e.\u0275\u0275template(5,o,1,0,"icone-orange-check",5),e.\u0275\u0275template(6,r,1,0,"icone-orange-1",5),e.\u0275\u0275element(7,"hr",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"label",7),e.\u0275\u0275text(9,"Detalhes"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"div",2),e.\u0275\u0275elementStart(11,"div",3),e.\u0275\u0275element(12,"hr",6),e.\u0275\u0275template(13,u,1,0,"icone-orange-check",8),e.\u0275\u0275template(14,d,1,0,"icone-orange-2",8),e.\u0275\u0275template(15,C,1,0,"icone-gray-2",8),e.\u0275\u0275element(16,"hr",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"label",7),e.\u0275\u0275text(18,"Login"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"div",2),e.\u0275\u0275elementStart(20,"div",3),e.\u0275\u0275element(21,"hr",6),e.\u0275\u0275template(22,S,1,0,"icone-orange-check",9),e.\u0275\u0275template(23,_,1,0,"icone-orange-3",9),e.\u0275\u0275template(24,k,1,0,"icone-gray-3",9),e.\u0275\u0275element(25,"hr",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"label",7),e.\u0275\u0275text(27,"Pagamento"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&s&&(e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",i.statusTimeline[0].active),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.statusTimeline[0].current),e.\u0275\u0275advance(1),e.\u0275\u0275classProp("active",i.statusTimeline[0].active),e.\u0275\u0275advance(1),e.\u0275\u0275classProp("active",i.statusTimeline[0].active||i.statusTimeline[0].current),e.\u0275\u0275advance(4),e.\u0275\u0275classProp("active",i.statusTimeline[1].active||i.statusTimeline[1].current),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.statusTimeline[1].active),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.statusTimeline[1].current&&!i.statusTimeline[1].active),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!i.statusTimeline[1].current&&!i.statusTimeline[1].active),e.\u0275\u0275advance(1),e.\u0275\u0275classProp("active",i.statusTimeline[1].active),e.\u0275\u0275advance(1),e.\u0275\u0275classProp("active",i.statusTimeline[1].active||i.statusTimeline[1].current),e.\u0275\u0275advance(4),e.\u0275\u0275classProp("active",i.statusTimeline[2].active||i.statusTimeline[2].current),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.statusTimeline[2].active),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.statusTimeline[2].current&&!i.statusTimeline[2].active),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!i.statusTimeline[2].current&&!i.statusTimeline[2].active),e.\u0275\u0275advance(1),e.\u0275\u0275classProp("active",i.statusTimeline[2].active),e.\u0275\u0275advance(1),e.\u0275\u0275classProp("active",i.statusTimeline[2].active||i.statusTimeline[2].current))},directives:[y.O5,p,f,t,l,a,c],styles:[".steps-timeline[_ngcontent-%COMP%]{height:auto;background-color:#f2f2f2}.steps-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;padding:6px}.steps-timeline[_ngcontent-%COMP%]   .timeline__item[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.steps-timeline[_ngcontent-%COMP%]   .timeline__status[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center}@media (max-width: 767px){.steps-timeline[_ngcontent-%COMP%]   .timeline__status.pad-top[_ngcontent-%COMP%]{padding-top:12px}}.steps-timeline[_ngcontent-%COMP%]   .timeline__hr[_ngcontent-%COMP%]{width:100%;border-top:solid 1px #DCDCDC}.steps-timeline[_ngcontent-%COMP%]   .timeline__hr.default[_ngcontent-%COMP%]{border-top:solid 1px #F4F4F4}.steps-timeline[_ngcontent-%COMP%]   .timeline__hr.active[_ngcontent-%COMP%]{border-top:solid 1px #F47920}.steps-timeline[_ngcontent-%COMP%]   .timeline__img[_ngcontent-%COMP%]{width:22px;height:auto}.steps-timeline[_ngcontent-%COMP%]   .timeline__label[_ngcontent-%COMP%]{font-family:Roboto;font-weight:400;font-size:10px;color:#58595b;text-align:center;margin-top:3px}.steps-timeline[_ngcontent-%COMP%]   .timeline__label.default[_ngcontent-%COMP%]{color:#999}.steps-timeline[_ngcontent-%COMP%]   .timeline__label.active[_ngcontent-%COMP%]{color:#f47920}"]}),n})()},6945:(E,v,g)=>{g.d(v,{A:()=>e});class e{getFormattedNum(p){return p.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")}getBRLCurrency(p){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(p)}getCurrency(p){return p.toLocaleString("pt-br",{minimumFractionDigits:2})}}}}]);
//# sourceMappingURL=default-src_app_core_services_header_seo_service_ts-src_app_core_services_quotation_service_t-3237b2.js.map