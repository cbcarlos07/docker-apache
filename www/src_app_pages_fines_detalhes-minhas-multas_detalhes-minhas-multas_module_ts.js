"use strict";(self.webpackChunkzero_km=self.webpackChunkzero_km||[]).push([["src_app_pages_fines_detalhes-minhas-multas_detalhes-minhas-multas_module_ts"],{6935:(w,c,a)=>{a.r(c),a.d(c,{DetalhesMinhasMultasModule:()=>F});var m=a(6362),s=a(4466),r=a(2816),e=a(3184),x=a(318),g=a(8386),u=a(1909),h=a(6228),f=a(6070),v=a(419);function b(t,l){if(1&t&&(e.\u0275\u0275elementStart(0,"a",46),e.\u0275\u0275elementStart(1,"button",18),e.\u0275\u0275elementStart(2,"div",47),e.\u0275\u0275element(3,"img",48),e.\u0275\u0275elementStart(4,"p",49),e.\u0275\u0275text(5,"Baixar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275attribute("href",o.downloadFileLink,e.\u0275\u0275sanitizeUrl)}}function M(t,l){if(1&t){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",50),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().showNotFileToDownloadMsg()}),e.\u0275\u0275elementStart(1,"div",47),e.\u0275\u0275element(2,"img",48),e.\u0275\u0275elementStart(3,"p",49),e.\u0275\u0275text(4,"Baixar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}}function E(t,l){if(1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275elementStart(1,"div",19),e.\u0275\u0275elementStart(2,"div",20),e.\u0275\u0275elementStart(3,"p",21),e.\u0275\u0275text(4,"Forma de pagamento"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div",32),e.\u0275\u0275elementStart(6,"div",33),e.\u0275\u0275element(7,"img",51),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"div",35),e.\u0275\u0275elementStart(9,"p",52),e.\u0275\u0275text(10,"Cart\xe3o de cr\xe9dito"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"p",53),e.\u0275\u0275text(12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(7),e.\u0275\u0275propertyInterpolate1("src","assets/img/icons/order/card-brands/",o.fine.bandeiraId,".svg",e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(o.fine.nro2)}}function C(t,l){if(1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275elementStart(1,"div",54),e.\u0275\u0275elementStart(2,"div",20),e.\u0275\u0275elementStart(3,"p",21),e.\u0275\u0275text(4,"Forma de pagamento"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div",32),e.\u0275\u0275element(6,"img",55),e.\u0275\u0275elementStart(7,"div",41),e.\u0275\u0275elementStart(8,"p",52),e.\u0275\u0275text(9,"Cart\xe3o de cr\xe9dito"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"p",53),e.\u0275\u0275text(11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(11),e.\u0275\u0275textInterpolate(o.fine.nro2)}}function S(t,l){if(1&t&&(e.\u0275\u0275elementStart(0,"a",46),e.\u0275\u0275elementStart(1,"button",39),e.\u0275\u0275elementStart(2,"div",47),e.\u0275\u0275element(3,"img",48),e.\u0275\u0275elementStart(4,"p",49),e.\u0275\u0275text(5,"Baixar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275attribute("href",o.downloadFileLink,e.\u0275\u0275sanitizeUrl)}}function _(t,l){if(1&t){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",56),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().showNotFileToDownloadMsg()}),e.\u0275\u0275elementStart(1,"div",47),e.\u0275\u0275element(2,"img",48),e.\u0275\u0275elementStart(3,"p",49),e.\u0275\u0275text(4,"Baixar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}}const P=[{path:"",component:(()=>{class t{constructor(o,n,i,d,p,y){this.route=o,this.sanitizer=n,this.userService=i,this.shared=d,this.alertMsg=p,this.downloadPdfService=y,this.downloadFileLink=null,this.fine=[],this.steps=[{id:"0",label:"Home",link:"/"},{id:"1",label:"Meu portal",link:"/portal"},{id:"2",label:"Multas",link:"/portal/multas"},{id:"3",label:"Detalhes da infra\xe7\xe3o"}]}ngOnInit(){this.multaId=this.route.snapshot.params.multaId,this.loadFines()}loadFines(){this.shared.setCounterLoading(!0),this.userService.getFinesInfo(this.multaId).subscribe(o=>{this.fine=o.data.filter(n=>n.multaId==this.multaId),this.fine=this.fine[0],this.downloadMulta=`data:application/pdf;base64,${this.fine.multaBase}`,this.userService.getFinesBase64File(this.fine.multaId).subscribe(n=>{const i=n.data&&n.data.file?n.data.file:null;i?this.downloadPdfService.getLinkPdf(i,`multa_${this.fine.multaId}.pdf`).then(p=>{this.downloadFileLink=this.sanitizer.bypassSecurityTrustUrl(p.toString())}).then(()=>this.shared.setCounterLoading(!1)):this.shared.setCounterLoading(!1)},n=>this.shared.setCounterLoading(!1))},o=>{this.shared.setCounterLoading(!1)})}showNotFileToDownloadMsg(){this.alertMsg.openDialog({icon:"attention.svg",tipo:"warning",titulo:"",mensagem:"Ainda n\xe3o h\xe1 arquivos dispon\xedveis para essa multa."},"message",!0)}}return t.\u0275fac=function(o){return new(o||t)(e.\u0275\u0275directiveInject(r.gz),e.\u0275\u0275directiveInject(x.DomSanitizer),e.\u0275\u0275directiveInject(g.K),e.\u0275\u0275directiveInject(u.b),e.\u0275\u0275directiveInject(h.z),e.\u0275\u0275directiveInject(f.t))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-detalhes-minhas-multas"]],decls:125,vars:18,consts:[[1,"container","first-container"],[1,"steps-header",3,"steps"],[1,"fines-header"],[1,"container"],[1,"title-default"],["target","_blank",4,"ngIf"],["class","web",3,"click",4,"ngIf"],[1,"single-line"],[1,"content-wrapper"],[1,"detalhes"],[1,"row-fines"],[1,"col","col-sm-12","col-md-12","col-lg-4","detalhes-code"],[1,"data-infracao"],[1,"num-code"],[1,"vertical"],[1,"col","col-sm-12","col-md-12","col-lg-4","detalhes-data"],[1,"col","col-sm-12","col-md-12","col-lg-4","detalhes-ait"],[2,"width","95%"],[1,"web"],[1,"veiculo"],[1,"border-veiculo"],[1,"title-veiculo"],[1,"col-sm-2","col-md-1","col-lg-1"],["src","assets/img/icons/veiculo-19492.svg",1,"icon-l"],[1,"col-sm-8","col-md-8","col-lg-8"],[1,"title-card"],[1,"col","col-sm-2","col-md-1","col-lg-1"],["src","assets/img/icons/placa-19491.svg",1,"icon-r"],[1,"col","col-sm-8","col-md-2","col-lg-2"],[1,"col-9"],[1,"description-card"],[1,"col-3"],[1,"row"],[1,"col-1"],["src","assets/img/icons/alerta-19476.svg",1,"icon-l"],[1,"col-8"],["src","assets/img/icons/dollar.svg",1,"icon-r"],[1,"col-2"],[4,"ngIf"],[1,"mobile"],["src","assets/img/icons/veiculo-19492.svg",1,"icon-r"],[1,"col"],[1,"description-card-bottom"],[1,"line"],[1,"title-card-bottom"],["class","mobile",3,"click",4,"ngIf"],["target","_blank"],[1,"button-download"],["src","assets/img/icons/button-19337.svg",1,"icon-download"],[1,"title-download"],[1,"web",3,"click"],[1,"card-credit-icon",3,"src"],[1,"card-credit-title"],[1,"card-credit-description"],[1,"veiculo-bottom"],["src","assets/img/icons/visa_card.svg",1,"card-credit-icon"],[1,"mobile",3,"click"]],template:function(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"app-breadcrumb",1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"div",2),e.\u0275\u0275elementStart(3,"div",3),e.\u0275\u0275elementStart(4,"p",4),e.\u0275\u0275text(5,"Detalhes da infra\xe7\xe3o"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(6,b,6,1,"a",5),e.\u0275\u0275template(7,M,5,0,"button",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"div",3),e.\u0275\u0275element(9,"div",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"div",3),e.\u0275\u0275elementStart(11,"div",8),e.\u0275\u0275elementStart(12,"div",9),e.\u0275\u0275elementStart(13,"div",10),e.\u0275\u0275elementStart(14,"div",11),e.\u0275\u0275elementStart(15,"p",12),e.\u0275\u0275text(16,"C\xf3digo da Infra\xe7\xe3o"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"p",13),e.\u0275\u0275text(18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(19,"div",14),e.\u0275\u0275elementStart(20,"div",15),e.\u0275\u0275elementStart(21,"p",12),e.\u0275\u0275text(22,"Data e hora da infra\xe7\xe3o"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"p",13),e.\u0275\u0275text(24),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(25,"div",14),e.\u0275\u0275elementStart(26,"div",16),e.\u0275\u0275elementStart(27,"p",12),e.\u0275\u0275text(28,"N\xba AIT"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"p",13),e.\u0275\u0275text(30),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(31,"hr",17),e.\u0275\u0275elementStart(32,"div",18),e.\u0275\u0275elementStart(33,"div",19),e.\u0275\u0275elementStart(34,"div",20),e.\u0275\u0275elementStart(35,"p",21),e.\u0275\u0275text(36,"Ve\xedculo"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(37,"div",10),e.\u0275\u0275elementStart(38,"div",22),e.\u0275\u0275element(39,"img",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(40,"div",24),e.\u0275\u0275elementStart(41,"p",25),e.\u0275\u0275text(42,"Modelo"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(43,"div",26),e.\u0275\u0275element(44,"img",27),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(45,"div",28),e.\u0275\u0275elementStart(46,"p",25),e.\u0275\u0275text(47,"Placa"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(48,"div",10),e.\u0275\u0275elementStart(49,"div",29),e.\u0275\u0275elementStart(50,"p",30),e.\u0275\u0275text(51),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(52,"div",31),e.\u0275\u0275elementStart(53,"p",30),e.\u0275\u0275text(54),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(55,"hr",17),e.\u0275\u0275element(56,"hr",17),e.\u0275\u0275elementStart(57,"div",19),e.\u0275\u0275elementStart(58,"div",20),e.\u0275\u0275elementStart(59,"p",21),e.\u0275\u0275text(60,"Infra\xe7\xe3o"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(61,"div",32),e.\u0275\u0275elementStart(62,"div",33),e.\u0275\u0275element(63,"img",34),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(64,"div",35),e.\u0275\u0275elementStart(65,"p",25),e.\u0275\u0275text(66,"Descri\xe7\xe3o"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(67,"div",33),e.\u0275\u0275element(68,"img",36),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(69,"div",37),e.\u0275\u0275elementStart(70,"p",25),e.\u0275\u0275text(71,"Valor"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(72,"div",32),e.\u0275\u0275elementStart(73,"div",29),e.\u0275\u0275elementStart(74,"p",30),e.\u0275\u0275text(75),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(76,"div",31),e.\u0275\u0275elementStart(77,"p",30),e.\u0275\u0275text(78),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(79,"hr",17),e.\u0275\u0275template(80,E,13,2,"div",38),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(81,"div",39),e.\u0275\u0275elementStart(82,"div",19),e.\u0275\u0275elementStart(83,"div",20),e.\u0275\u0275elementStart(84,"p",21),e.\u0275\u0275text(85,"Ve\xedculo"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(86,"div",32),e.\u0275\u0275element(87,"img",40),e.\u0275\u0275elementStart(88,"div",41),e.\u0275\u0275elementStart(89,"p",25),e.\u0275\u0275text(90,"Modelo"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(91,"p",42),e.\u0275\u0275text(92),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(93,"div",43),e.\u0275\u0275elementStart(94,"div",32),e.\u0275\u0275element(95,"img",27),e.\u0275\u0275elementStart(96,"div",41),e.\u0275\u0275elementStart(97,"p",44),e.\u0275\u0275text(98,"Placa"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(99,"p",42),e.\u0275\u0275text(100),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(101,"hr",17),e.\u0275\u0275element(102,"hr",17),e.\u0275\u0275elementStart(103,"div",19),e.\u0275\u0275elementStart(104,"div",20),e.\u0275\u0275elementStart(105,"p",21),e.\u0275\u0275text(106,"Infra\xe7\xe3o"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(107,"div",32),e.\u0275\u0275element(108,"img",34),e.\u0275\u0275elementStart(109,"p",25),e.\u0275\u0275text(110,"Descri\xe7\xe3o"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(111,"p",30),e.\u0275\u0275text(112),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(113,"div",43),e.\u0275\u0275elementStart(114,"div",32),e.\u0275\u0275element(115,"img",36),e.\u0275\u0275elementStart(116,"div",41),e.\u0275\u0275elementStart(117,"p",44),e.\u0275\u0275text(118,"Valor"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(119,"p",42),e.\u0275\u0275text(120),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(121,"hr",17),e.\u0275\u0275template(122,C,12,1,"div",38),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(123,S,6,1,"a",5),e.\u0275\u0275template(124,_,5,0,"button",45),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("steps",n.steps),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",n.downloadFileLink),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!n.downloadFileLink),e.\u0275\u0275advance(11),e.\u0275\u0275textInterpolate(n.fine.multaId),e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate(n.fine.dataInfracao),e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate1("",n.fine.autoInfracao," "),e.\u0275\u0275advance(21),e.\u0275\u0275textInterpolate(n.fine.versao),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(n.fine.placa),e.\u0275\u0275advance(21),e.\u0275\u0275textInterpolate(n.fine.descricao),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1("R$ ",2==n.fine.statusId?n.fine.valorPago:n.fine.valorCobrado,""),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",n.fine.nro2),e.\u0275\u0275advance(12),e.\u0275\u0275textInterpolate(n.fine.versao),e.\u0275\u0275advance(8),e.\u0275\u0275textInterpolate(n.fine.placa),e.\u0275\u0275advance(12),e.\u0275\u0275textInterpolate(n.fine.descricao),e.\u0275\u0275advance(8),e.\u0275\u0275textInterpolate1("R$ ",2==n.fine.statusId?n.fine.valorPago:n.fine.valorCobrado,""),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",n.fine.nro2),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.downloadFileLink),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!n.downloadFileLink))},directives:[v.L,m.O5],styles:["*[_ngcontent-%COMP%]{font-family:Roboto}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding-top:32px}.single-line[_ngcontent-%COMP%]{width:100%;border:1px solid #ccc;margin-top:-25px}.first-container[_ngcontent-%COMP%]{margin-top:-20px}.fines-header[_ngcontent-%COMP%]{justify-content:center;background-color:#fff;margin-bottom:65px;margin-top:-20px}.title-default[_ngcontent-%COMP%]{color:#f97d00;font-size:24px}.webcomponent[_ngcontent-%COMP%]{width:100%}.m-b-40[_ngcontent-%COMP%]{margin-bottom:40px}.line[_ngcontent-%COMP%]{border-top:1px solid #dcdcdc;border:1;margin:20px 30px}hr[_ngcontent-%COMP%]{border-top:0px solid #dcdcdc;margin-bottom:45px}.title[_ngcontent-%COMP%]{text-align:center}.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Roboto;font-weight:500;font-size:24px;color:#58595b}.title[_ngcontent-%COMP%]   h3.orange[_ngcontent-%COMP%]{text-align:start;font-family:Roboto;font-weight:300;font-size:22px;color:#f47920;margin-bottom:15px}.title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-family:Roboto;font-weight:400;font-size:16px;color:#58595b}.content-wrapper[_ngcontent-%COMP%]{width:100%}@media only screen and (max-width: 960px){.mobile[_ngcontent-%COMP%]{display:block}.web[_ngcontent-%COMP%], .title-download[_ngcontent-%COMP%]{display:none}.detalhes-code[_ngcontent-%COMP%]{width:100%;border:1px solid var(--unnamed-color-dcdcdc);background:#FAFAFA 0% 0% no-repeat padding-box;border:1px solid #DCDCDC;border-radius:5px 5px 0 0;opacity:1}.detalhes-data[_ngcontent-%COMP%]{border:1px solid var(--unnamed-color-dcdcdc);background:#FAFAFA 0% 0% no-repeat padding-box;border:1px solid #DCDCDC;opacity:1}.detalhes-ait[_ngcontent-%COMP%]{background:#FAFAFA 0% 0% no-repeat padding-box;border:1px solid #DCDCDC;border-radius:0 0 5px 5px;opacity:1}.data-infracao[_ngcontent-%COMP%]{top:327px;margin:40px 0 0;letter-spacing:var(--unnamed-character-spacing-0);text-align:center;font: 700 14px/16px Roboto;color:#58595b;opacity:1}.num-code[_ngcontent-%COMP%]{margin:10px;letter-spacing:var(--unnamed-character-spacing-0);text-align:center;font: 700 24px/28px Roboto;color:#f97d00;opacity:1}.veiculo[_ngcontent-%COMP%]{top:569px;height:244px;background:#FFFFFF 0% 0% no-repeat padding-box;border:1px solid #F2F2F2;border-radius:5px;opacity:1}.veiculo[_ngcontent-%COMP%]   .border-veiculo[_ngcontent-%COMP%]{top:569px;height:49px;background:#F2F2F2 0% 0% no-repeat padding-box;border-radius:5px 5px 0 0;opacity:1}.veiculo[_ngcontent-%COMP%]   .title-veiculo[_ngcontent-%COMP%]{letter-spacing:var(--unnamed-character-spacing-0);font: 700 16px/19px Roboto;letter-spacing:0px;color:#58595b;opacity:1;margin-left:30px;padding:16px 0 15px}.veiculo-bottom[_ngcontent-%COMP%]{top:569px;height:140px;background:#FFFFFF 0% 0% no-repeat padding-box;border:1px solid #F2F2F2;border-radius:5px;opacity:1}.veiculo-bottom[_ngcontent-%COMP%]   .border-veiculo[_ngcontent-%COMP%]{top:569px;height:49px;background:#F2F2F2 0% 0% no-repeat padding-box;border-radius:5px 5px 0 0;opacity:1}.veiculo-bottom[_ngcontent-%COMP%]   .title-veiculo[_ngcontent-%COMP%]{letter-spacing:var(--unnamed-character-spacing-0);font: 700 16px/19px Roboto;letter-spacing:0px;color:#58595b;opacity:1;margin-left:30px;padding:16px 0 15px}.icon-l[_ngcontent-%COMP%]{width:16px;opacity:1;margin:25px 10px 8px 30px}.icon-r[_ngcontent-%COMP%]{width:16px;opacity:1;margin:0 0 8px 30px}.card-credit-icon[_ngcontent-%COMP%]{margin:25px 0 8px 30px;top:1068px;left:158px;width:60px;height:43px;opacity:1}.title-card[_ngcontent-%COMP%]{top:642px;height:16px;text-align:left;font: 700 14px/18px Roboto;letter-spacing:0px;color:#58595b;opacity:1;margin:25px 0 0 10px}.title-card-bottom[_ngcontent-%COMP%]{top:642px;height:16px;text-align:left;font: 700 14px/18px Roboto;letter-spacing:0px;color:#58595b;opacity:1;margin:5px 0 0 10px}.card-credit-title[_ngcontent-%COMP%]{font: 700 14px/18px Roboto;letter-spacing:0px;color:#58595b;opacity:1;margin:25px 0 8px 20px}.description-card[_ngcontent-%COMP%]{font: 300 14px/18px Roboto;letter-spacing:0px;color:#58595b;opacity:1;margin:0 20px 0 65px}.description-card-bottom[_ngcontent-%COMP%]{font: 300 14px/18px Roboto;letter-spacing:0px;color:#58595b;opacity:1;margin:5px 10px 0}.card-credit-description[_ngcontent-%COMP%]{top:558px;text-align:left;font: 300 14px/18px Roboto;letter-spacing:0px;color:#58595b;opacity:1;margin:0 0 24px 20px}.button-download[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:15px;width:44px;height:44px;background-color:#f47920;opacity:1;border-radius:50px;z-index:5000}.icon-download[_ngcontent-%COMP%]{top:612px;height:18px;opacity:1;margin:13px 20px 20px 14px}}@media (min-width: 960px){.vertical[_ngcontent-%COMP%]{border-left:1px solid #dcdcdc;border:1;margin:0 -10px -10px;height:128px}.mobile[_ngcontent-%COMP%]{display:none}.web[_ngcontent-%COMP%]{display:block}.row-fines[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.detalhes[_ngcontent-%COMP%]{top:290px;left:128px;width:1110px;height:130px;background:var(--unnamed-color-fafafa) 0% 0% no-repeat padding-box;border:1px solid var(--unnamed-color-dcdcdc);background:#FAFAFA 0% 0% no-repeat padding-box;border:1px solid #DCDCDC;border-radius:5px;opacity:1}.data-infracao[_ngcontent-%COMP%]{top:327px;margin:40px 0 0;letter-spacing:var(--unnamed-character-spacing-0);text-align:center;font: 700 14px/16px Roboto;color:#58595b;opacity:1}.num-code[_ngcontent-%COMP%]{margin:10px;letter-spacing:var(--unnamed-character-spacing-0);text-align:center;font: 700 24px/28px Roboto;color:#f97d00;opacity:1}.veiculo[_ngcontent-%COMP%]{top:470px;left:128px;width:1110px;height:128px;border:1px solid var(--unnamed-color-f2f2f2);background:#FFFFFF 0% 0% no-repeat padding-box;border:1px solid #F2F2F2;border-radius:5px;opacity:1}.veiculo[_ngcontent-%COMP%]   .border-veiculo[_ngcontent-%COMP%]{top:460px;left:128px;width:1109px;height:50px;background:var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;background:#F2F2F2 0% 0% no-repeat padding-box;border-radius:5px 5px 0 0;opacity:1}.veiculo[_ngcontent-%COMP%]   .title-veiculo[_ngcontent-%COMP%]{letter-spacing:var(--unnamed-character-spacing-0);font: 700 16px/19px Roboto;letter-spacing:0px;color:#58595b;opacity:1;margin-left:30px;padding:16px 0 15px}.icon-l[_ngcontent-%COMP%]{width:16px;opacity:1;margin:25px 10px 8px 30px}.icon-r[_ngcontent-%COMP%]{width:16px;opacity:1;margin:25px 0 8px 30px}.card-credit-icon[_ngcontent-%COMP%]{margin:25px 0 8px 30px;top:1068px;left:158px;width:60px;height:43px;opacity:1}.title-card[_ngcontent-%COMP%]{font: 700 14px/18px Roboto;letter-spacing:0px;color:#58595b;opacity:1;margin:25px 0 8px -35px}.card-credit-title[_ngcontent-%COMP%]{font: 700 14px/18px Roboto;letter-spacing:0px;color:#58595b;opacity:1;margin:25px 0 8px 20px}.description-card[_ngcontent-%COMP%]{top:558px;text-align:left;font: 300 14px/18px Roboto;letter-spacing:0px;color:#58595b;opacity:1;margin:0 0 24px 60px}.card-credit-description[_ngcontent-%COMP%]{top:558px;text-align:left;font: 300 14px/18px Roboto;letter-spacing:0px;color:#58595b;opacity:1;margin:0 0 24px 20px}.button-download[_ngcontent-%COMP%]{top:198px;left:1104px;width:127px;height:40px;background-color:#f47920;opacity:1;border-radius:4px}.title-download[_ngcontent-%COMP%]{text-align:left;font: 18px/20px Roboto;letter-spacing:0px;color:#fff;opacity:1;margin:-23px 20px 0 50px}.icon-download[_ngcontent-%COMP%]{height:18px;opacity:1;margin:12px 85px 0 20px}}"]}),t})()}];let O=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[r.Bz.forChild(P)],r.Bz]}),t})(),F=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[O,m.ez,s.m]]}),t})()}}]);
//# sourceMappingURL=src_app_pages_fines_detalhes-minhas-multas_detalhes-minhas-multas_module_ts.js.map