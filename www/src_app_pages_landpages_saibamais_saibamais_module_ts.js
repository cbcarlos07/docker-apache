"use strict";(self.webpackChunkzero_km=self.webpackChunkzero_km||[]).push([["src_app_pages_landpages_saibamais_saibamais_module_ts"],{4018:(v,c,r)=>{r.d(c,{v:()=>e});var p=r(6362),d=r(3184);let e=(()=>{class o{constructor(s){this.document=s}createLinkForCanonicalURL(){this.document.querySelectorAll('[rel="canonical"]')[0].setAttribute("href",this.document.URL)}}return o.\u0275fac=function(s){return new(s||o)(d.\u0275\u0275inject(p.K0))},o.\u0275prov=d.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},7895:(v,c,r)=>{r.r(c),r.d(c,{SaibamaisModule:()=>y});var p=r(6362),d=r(2816),e=r(3184),o=r(6854),u=r(4018);const x=[{path:"",component:(()=>{class t{constructor(a,n){this.orderService=a,this.seoService=n}ngOnInit(){this.seoService.createLinkForCanonicalURL();const a=document.querySelectorAll("input"),n={cpf:l=>l.replace(/\D/g,"").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})/,"$1-$2").replace(/(-\d{2})\d+?$/,"$1"),phone:l=>l.replace(/\D/g,"").replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{4})(\d)/,"$1-$2").replace(/(\d{4})-(\d)(\d{4})/,"$1$2-$3").replace(/(-\d{4})\d+?$/,"$1")};a.forEach(l=>{const i=l.dataset.js;"checkbox"!==l.type&&l.addEventListener("input",function(){i&&(this.value=n[i](this.value.toString()))},!1)})}enviar(a){a.preventDefault();const n=document.forms[0],l=n.querySelector("#nome"),i=n.querySelector("#cpf"),b=n.querySelector("#email"),E=n.querySelector("#uf"),S=n.querySelector("#telefone"),k=n.querySelector("#aceiteComunicados"),f=n.querySelector("#leuTermos"),g=n.querySelector("#button-label"),w={nome:l.value,cpf:i.value,email:b.value,uf:E.value,telefone:S.value,aceiteComunicados:k.value,leuTermos:f.value,action:"bitrix",title:"Saiba Mais",emails:["fabiosaton@movida.com.br"]};""!=l.value?""!=b.value?""!=E.value?""!=S.value?0!=f.checked?(g.innerText="ENVIANDO...",this.orderService.createLandingPage(w).subscribe(C=>{g.innerText="ENVIAR",alert("Dados enviados com sucesso!")},C=>{g.innerText="ENVIAR"})):alert("Campo Termos obrigat\xf3rio"):alert("Campo Telefone obrigat\xf3rio"):alert("Campo UF obrigat\xf3rio"):alert("Campo e-mail obrigat\xf3rio"):alert("Campo nome obrigat\xf3rio")}}return t.\u0275fac=function(a){return new(a||t)(e.\u0275\u0275directiveInject(o.p),e.\u0275\u0275directiveInject(u.v))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-saibamais"]],decls:292,vars:0,consts:[["lang","pt"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["rel","stylesheet","href","https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css","integrity","sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T","crossorigin","anonymous"],["href","https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css","rel","stylesheet"],["rel","stylesheet","href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css","integrity","sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==","crossorigin","anonymous","referrerpolicy","no-referrer"],[1,"bg-main"],[1,"container-fluid","d-lg-none"],[1,"row"],[1,"col-12"],["src","../../../../assets/img/lp-saibamais/banner_mobile.png","alt","banner",1,"img-fluid"],[1,"container"],[1,"row","justify-content-lg-end","justify-content-center","banner_topo","pb-4","px-2"],[1,"col-lg-4","col-md-9","form","mr-2","bg-white","area-form","py-4"],[1,"row","justify-content-center","px-1"],[1,"text-orange","text-center","m-0"],[1,"text-center","m-0","pb-2"],["action","","method","POST",1,"text-grey"],[1,"area-input"],["id","nome","name","nome","type","text","placeholder","Nome"],["id","cpf","name","cpf","type","text","data-js","cpf","placeholder","CPF (opcional)"],["id","email","name","email","type","email","placeholder","E-mail?"],["id","uf","name","uf","type","text","placeholder","UF"],["id","telefone","name","telefone","type","text","data-js","phone","placeholder","Telefone"],[1,"area-input","d-flex","justify-content-center"],["type","button",1,"btn","bg-main","text-white","w-50","rounded-pill",3,"click"],["id","button-label"],[1,"checkbox-area","d-flex","align-items-center","pr-2","pl-2"],["id","aceiteComunicados","name","aceiteComunicados","type","checkbox"],["for","aceiteComunicados",1,"pl-1"],["id","leuTermos","name","leuTermos","type","checkbox"],["for","leuTermos",1,"pl-1"],[1,"container-fluid","area-vantagens","position-relative"],[1,"row","py-4","justify-content-center"],[1,"d-flex","align-items-center"],[1,"rounded-pill","py-1","px-4","area-sem"],[1,"rounded-pill","py-1","px-4"],["src","../../../../assets/img/lp-saibamais/seta-down.png","alt","seta para baixo",1,"seta-vantagens"],[1,"container","py-5"],[1,"row","justify-content-center"],[1,"col-lg-4","col-md-12"],[1,"text-orange"],[1,"text-grey"],[1,"col-lg-4","col-md-6","py-4"],["src","../../../../assets/img/lp-saibamais/carro_section2.png","alt","",1,"img-fluid"],[1,"col-lg-4","col-md-6","text-center"],["src","../../../../assets/img/lp-saibamais/desconto1.png","alt","",1,"img-fluid",2,"margin","21px 0"],[1,"py-2","px-5","rounded-pill","m-0","pronta-entrega"],[1,"pl-5","ml-4","pt-3"],[1,"container-fluid","section-3","py-5"],[1,"row","bg-mobile-grey","py-5","px-2","d-lg-none"],[1,"col-12","py-4"],[1,"col-sm-6"],["src","../../../../assets/img/lp-saibamais/argo.png","alt","",1,"img-fluid"],[1,""],["src","../../../../assets/img/lp-saibamais/onix.png","alt","",1,"img-fluid"],[1,"row","bg-mobile-grey-2","py-5","px-2","d-lg-none"],["src","../../../../assets/img/lp-saibamais/global.png","alt","",1,"img-fluid"],["src","../../../../assets/img/lp-saibamais/corolla.png","alt","",1,"img-fluid"],[1,"row","mobi-none"],[1,"col","bg-section-3-left","d-flex","flex-column","align-items-end"],[1,"my-5","pt-5"],[1,"my-5"],[1,"col","bg-section-3-right","d-flex","flex-column","align-items-end"],[1,"my-5","pr-5","mr-5"],[1,"my-5","pt-5","pr-5","mr-5"],[1,"container","pb-4"],[1,"text-orange","text-center"],[1,"text-grey","font-weight-bold","text-center",2,"font-size","1.3rem"],[1,"col-lg-2","col-md-3"],[1,"row","flex-column"],[1,"d-flex","justify-content-center","align-items-center","tabela-titulo","bg-white"],[1,"vantagens-area-2","border","border-white","bg-grey-light","text-center"],["src","../../../../assets/img/lp-saibamais/dolar.png","alt","imagem dolar",1,"img-fluid"],[1,"pt-3","text-grey","font-weight-bold"],["src","../../../../assets/img/lp-saibamais/icone_engrenagem.png","alt","icone engrenagem",1,"img-fluid"],["src","../../../../assets/img/lp-saibamais/icone_prancheta.png","alt","icone pranchetta",1,"img-fluid"],["src","../../../../assets/img/lp-saibamais/icone_carro_dolar.png","alt","",1,"img-fluid"],[1,"col-lg-5","col-md-4","text-grey"],[1,"d-flex","justify-content-center","align-items-center","bg-dark","tabela-titulo"],[1,"text-white","text-center"],[1,"vantagens-area-2","border","border-white","bg-ice"],[1,"text-center"],[1,"far","fa-frown","icone_tabela"],[1,"pt-3","font-weight-bold","text-center"],[1,"br"],[1,"d-flex","align-items-center","justify-content-center","tabela-titulo","bg-main"],[1,"d-flex","align-items-center","justify-content-center","m-0"],["src","../../../../assets/img/lp-saibamais/zerokmlogo_tabela.png","width","160px","alt","logo Movida",1,"img-fluid"],[1,"vantagens-area-2","border","border-grey-light","bg-white"],[1,"far","fa-smile","icone_tabela_right"],[1,"container","pb-4","pt-4"],[1,"col-xs-6","col-md-3","offset-md-3"],[1,"d-inline"],[1,"text-center","pl-4","pr-4","text-white","call"],["href","https://www.movidazerokm.com.br/",1,"btn","bg-main","text-white","w-50","h-60","rounded-pill","border","bg-white","text-dark","btn-assine"],[1,"col-xs-12","col-md-4","pt-4","text-center"],["src","../../../../assets/img/lp-saibamais/zerokmlogo.png"]],template:function(a,n){1&a&&(e.\u0275\u0275elementStart(0,"html",0),e.\u0275\u0275elementStart(1,"head"),e.\u0275\u0275element(2,"meta",1),e.\u0275\u0275element(3,"meta",2),e.\u0275\u0275element(4,"link",3),e.\u0275\u0275element(5,"link",4),e.\u0275\u0275element(6,"link",5),e.\u0275\u0275elementStart(7,"title"),e.\u0275\u0275text(8,"0 km Movida"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"body"),e.\u0275\u0275elementStart(10,"header",6),e.\u0275\u0275elementStart(11,"div",7),e.\u0275\u0275elementStart(12,"div",8),e.\u0275\u0275elementStart(13,"div",9),e.\u0275\u0275elementStart(14,"div",8),e.\u0275\u0275elementStart(15,"figure"),e.\u0275\u0275element(16,"img",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"div",11),e.\u0275\u0275elementStart(18,"div",12),e.\u0275\u0275elementStart(19,"div",13),e.\u0275\u0275elementStart(20,"div",14),e.\u0275\u0275elementStart(21,"h3",15),e.\u0275\u0275text(22,"Quer saber mais?"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"p",16),e.\u0275\u0275elementStart(24,"strong"),e.\u0275\u0275text(25,"Preencha o formul\xe1rio"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(26," abaixo que logo "),e.\u0275\u0275element(27,"br"),e.\u0275\u0275text(28," nossos atendentes entraram em contato."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"form",17),e.\u0275\u0275elementStart(30,"div",18),e.\u0275\u0275element(31,"input",19),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"div",18),e.\u0275\u0275element(33,"input",20),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(34,"div",18),e.\u0275\u0275element(35,"input",21),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"div",18),e.\u0275\u0275element(37,"input",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"div",18),e.\u0275\u0275element(39,"input",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(40,"div",24),e.\u0275\u0275elementStart(41,"button",25),e.\u0275\u0275listener("click",function(i){return n.enviar(i)}),e.\u0275\u0275elementStart(42,"strong",26),e.\u0275\u0275text(43,"ENVIAR"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(44,"div",27),e.\u0275\u0275element(45,"input",28),e.\u0275\u0275elementStart(46,"label",29),e.\u0275\u0275elementStart(47,"small"),e.\u0275\u0275text(48,"Aceito receber da Movida comunicados com informa\xe7\xf5es institucionais e a\xe7\xf5es promocionais por meio de email, sms ou whatsapp."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(49,"div",27),e.\u0275\u0275element(50,"input",30),e.\u0275\u0275elementStart(51,"label",31),e.\u0275\u0275elementStart(52,"small"),e.\u0275\u0275text(53,"Declaro que li e aceito os Termos de Uso e Pol\xedtica de privacidade"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(54,"section",32),e.\u0275\u0275elementStart(55,"div",33),e.\u0275\u0275elementStart(56,"div",34),e.\u0275\u0275elementStart(57,"span",35),e.\u0275\u0275text(58,"SEM"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(59,"div",34),e.\u0275\u0275elementStart(60,"span",36),e.\u0275\u0275text(61,"PAPELADA"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(62,"div",34),e.\u0275\u0275elementStart(63,"span",36),e.\u0275\u0275text(64,"BUROCRACIA"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(65,"div",34),e.\u0275\u0275elementStart(66,"span",36),e.\u0275\u0275text(67,"PERDER DINHEIRO"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(68,"img",37),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(69,"section",38),e.\u0275\u0275elementStart(70,"div",39),e.\u0275\u0275elementStart(71,"div",40),e.\u0275\u0275elementStart(72,"h2",41),e.\u0275\u0275text(73,"Porque assinar um zero km na Movida? "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(74,"p",42),e.\u0275\u0275text(75,"O Zero KM Movida \xe9 um servi\xe7o de carro por assinatura para pessoa f\xedsica onde voc\xea aluga um carro pelo per\xedodo m\xednimo de 12 meses e n\xe3o se preocupa com documenta\xe7\xe3o, IPVA, licenciamento, seguro, manuten\xe7\xe3o previstas no manual e desvaloriza\xe7\xe3o do ve\xedculo, aproveitando s\xf3 as conveni\xeancias de ter um carro."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(76,"div",43),e.\u0275\u0275element(77,"img",44),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(78,"div",45),e.\u0275\u0275element(79,"img",46),e.\u0275\u0275elementStart(80,"p",42),e.\u0275\u0275elementStart(81,"strong"),e.\u0275\u0275text(82,"Nas 4 primeiras mensalidades*"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(83,"p",47),e.\u0275\u0275text(84,"Com pronta entrega!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(85,"p",48),e.\u0275\u0275elementStart(86,"strong",42),e.\u0275\u0275text(87,"*consulte condi\xe7\xf5es."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(88,"section",49),e.\u0275\u0275elementStart(89,"div",50),e.\u0275\u0275elementStart(90,"div",51),e.\u0275\u0275elementStart(91,"div",8),e.\u0275\u0275elementStart(92,"div",52),e.\u0275\u0275elementStart(93,"div",8),e.\u0275\u0275elementStart(94,"figure"),e.\u0275\u0275element(95,"img",53),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(96,"div",52),e.\u0275\u0275elementStart(97,"div",54),e.\u0275\u0275elementStart(98,"h4"),e.\u0275\u0275text(99,"HATCH"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(100,"p"),e.\u0275\u0275text(101,"Carros compactos "),e.\u0275\u0275element(102,"br"),e.\u0275\u0275text(103," e econ\xf4micos "),e.\u0275\u0275element(104,"br"),e.\u0275\u0275text(105," para o seu dia a dia. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(106,"div",51),e.\u0275\u0275elementStart(107,"div",8),e.\u0275\u0275elementStart(108,"div",52),e.\u0275\u0275elementStart(109,"div",8),e.\u0275\u0275elementStart(110,"figure"),e.\u0275\u0275element(111,"img",55),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(112,"div",52),e.\u0275\u0275elementStart(113,"div",54),e.\u0275\u0275elementStart(114,"h4"),e.\u0275\u0275text(115,"SEDAN"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(116,"p"),e.\u0275\u0275text(117,"Carros com um porta-malas maior, para quem precisa de mais espa\xe7o. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(118,"div",56),e.\u0275\u0275elementStart(119,"div",51),e.\u0275\u0275elementStart(120,"div",8),e.\u0275\u0275elementStart(121,"div",52),e.\u0275\u0275elementStart(122,"div",8),e.\u0275\u0275elementStart(123,"figure"),e.\u0275\u0275element(124,"img",57),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(125,"div",52),e.\u0275\u0275elementStart(126,"div",54),e.\u0275\u0275elementStart(127,"h4"),e.\u0275\u0275text(128,"SUV"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(129,"p"),e.\u0275\u0275text(130,"Carros mais espa\xe7osos e confort\xe1veis. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(131,"div",51),e.\u0275\u0275elementStart(132,"div",8),e.\u0275\u0275elementStart(133,"div",52),e.\u0275\u0275elementStart(134,"div",8),e.\u0275\u0275elementStart(135,"figure"),e.\u0275\u0275element(136,"img",58),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(137,"div",52),e.\u0275\u0275elementStart(138,"div",54),e.\u0275\u0275elementStart(139,"h4"),e.\u0275\u0275text(140,"LUXO"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(141,"p"),e.\u0275\u0275text(142,"Carros que prezam pelo amplo espa\xe7o, conforto e luxo. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(143,"div",59),e.\u0275\u0275elementStart(144,"div",60),e.\u0275\u0275elementStart(145,"div",61),e.\u0275\u0275elementStart(146,"h4"),e.\u0275\u0275text(147,"HATCH"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(148,"p"),e.\u0275\u0275text(149,"Carros compactos "),e.\u0275\u0275element(150,"br"),e.\u0275\u0275text(151," e econ\xf4micos "),e.\u0275\u0275element(152,"br"),e.\u0275\u0275text(153," para o seu dia a dia. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(154,"div",62),e.\u0275\u0275elementStart(155,"h4"),e.\u0275\u0275text(156,"SEDAN"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(157,"p"),e.\u0275\u0275text(158,"Carros com um "),e.\u0275\u0275element(159,"br"),e.\u0275\u0275text(160," \x03porta-malas maior, "),e.\u0275\u0275element(161,"br"),e.\u0275\u0275text(162,"\x03para quem precisa "),e.\u0275\u0275element(163,"br"),e.\u0275\u0275text(164," \x03de mais espa\xe7o. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(165,"div",63),e.\u0275\u0275elementStart(166,"div",64),e.\u0275\u0275elementStart(167,"h4"),e.\u0275\u0275text(168,"SUV"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(169,"p"),e.\u0275\u0275text(170,"Carros mais "),e.\u0275\u0275element(171,"br"),e.\u0275\u0275text(172," espa\xe7osos\x03 e"),e.\u0275\u0275element(173,"br"),e.\u0275\u0275text(174," confort\xe1veis. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(175,"div",65),e.\u0275\u0275elementStart(176,"h4"),e.\u0275\u0275text(177,"LUXO"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(178,"p"),e.\u0275\u0275text(179,"Carros que prezam "),e.\u0275\u0275element(180,"br"),e.\u0275\u0275text(181," pelo amplo espa\xe7o, "),e.\u0275\u0275element(182,"br"),e.\u0275\u0275text(183," conforto e luxo. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(184,"section",66),e.\u0275\u0275elementStart(185,"h2",67),e.\u0275\u0275text(186,"Quais as vantagens?"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(187,"p",68),e.\u0275\u0275text(188,"Quem compara vai de ZeroKm Movida. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(189,"div",39),e.\u0275\u0275elementStart(190,"div",69),e.\u0275\u0275elementStart(191,"div",70),e.\u0275\u0275elementStart(192,"div",71),e.\u0275\u0275elementStart(193,"h5",42),e.\u0275\u0275text(194,"BENEF\xcdCIOS"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(195,"div",72),e.\u0275\u0275element(196,"img",73),e.\u0275\u0275elementStart(197,"p",74),e.\u0275\u0275text(198,"Melhor Negocia\xe7\xe3o"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(199,"div",72),e.\u0275\u0275element(200,"img",75),e.\u0275\u0275elementStart(201,"p",74),e.\u0275\u0275text(202,"Manuten\xe7\xf5es"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(203,"div",72),e.\u0275\u0275element(204,"img",76),e.\u0275\u0275elementStart(205,"p",74),e.\u0275\u0275text(206,"Burocracia"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(207,"div",72),e.\u0275\u0275element(208,"img",77),e.\u0275\u0275elementStart(209,"p",74),e.\u0275\u0275text(210,"Deprecia\xe7\xe3o"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(211,"div",78),e.\u0275\u0275elementStart(212,"div",70),e.\u0275\u0275elementStart(213,"div",79),e.\u0275\u0275elementStart(214,"h5",80),e.\u0275\u0275text(215,"COMPRA DO CARRO"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(216,"div",81),e.\u0275\u0275elementStart(217,"div",82),e.\u0275\u0275element(218,"i",83),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(219,"p",84),e.\u0275\u0275text(220,"Gastar tempo e dinheiro buscando a "),e.\u0275\u0275element(221,"br",85),e.\u0275\u0275text(222," melhor negocia\xe7\xe3o e correr o risco e pagar mais caro."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(223,"div",81),e.\u0275\u0275elementStart(224,"div",82),e.\u0275\u0275element(225,"i",83),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(226,"p",84),e.\u0275\u0275text(227,"Ter que procurar um bom mec\xe2nico "),e.\u0275\u0275element(228,"br",85),e.\u0275\u0275text(229," e negociar o melhor valor."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(230,"div",81),e.\u0275\u0275elementStart(231,"div",82),e.\u0275\u0275element(232,"i",83),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(233,"p",84),e.\u0275\u0275text(234,"Se preocupar com emplacamento, IPVA,"),e.\u0275\u0275element(235,"br",85),e.\u0275\u0275text(236," impostos e documenta\xe7\xe3o."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(237,"div",81),e.\u0275\u0275elementStart(238,"div",82),e.\u0275\u0275element(239,"i",83),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(240,"p",84),e.\u0275\u0275text(241,"Com o passar do tempo seu carro e valor"),e.\u0275\u0275element(242,"br",85),e.\u0275\u0275text(243," investido sendo depreciado."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(244,"div",78),e.\u0275\u0275elementStart(245,"div",70),e.\u0275\u0275elementStart(246,"div",86),e.\u0275\u0275elementStart(247,"h5",87),e.\u0275\u0275element(248,"img",88),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(249,"div",89),e.\u0275\u0275elementStart(250,"div",82),e.\u0275\u0275element(251,"i",90),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(252,"p",84),e.\u0275\u0275text(253,"Gastar tempo e dinheiro buscando a "),e.\u0275\u0275element(254,"br",85),e.\u0275\u0275text(255," melhor negocia\xe7\xe3o e correr o risco e pagar mais caro."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(256,"div",89),e.\u0275\u0275elementStart(257,"div",82),e.\u0275\u0275element(258,"i",90),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(259,"p",84),e.\u0275\u0275text(260,"Ter que procurar um bom mec\xe2nico "),e.\u0275\u0275element(261,"br",85),e.\u0275\u0275text(262," e negociar o melhor valor."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(263,"div",89),e.\u0275\u0275elementStart(264,"div",82),e.\u0275\u0275element(265,"i",90),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(266,"p",84),e.\u0275\u0275text(267,"Se preocupar com emplacamento, IPVA,"),e.\u0275\u0275element(268,"br",85),e.\u0275\u0275text(269," impostos e documenta\xe7\xe3o."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(270,"div",89),e.\u0275\u0275elementStart(271,"div",82),e.\u0275\u0275element(272,"i",90),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(273,"p",84),e.\u0275\u0275text(274,"Com o passar do tempo seu carro e valor"),e.\u0275\u0275element(275,"br",85),e.\u0275\u0275text(276," investido sendo depreciado."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(277,"footer"),e.\u0275\u0275elementStart(278,"div",91),e.\u0275\u0275elementStart(279,"div",8),e.\u0275\u0275elementStart(280,"div",92),e.\u0275\u0275elementStart(281,"div",93),e.\u0275\u0275elementStart(282,"p",94),e.\u0275\u0275text(283,"Ou se preferir, fa\xe7a sua assinatura "),e.\u0275\u0275elementStart(284,"b"),e.\u0275\u0275text(285,"100% online!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(286,"div",39),e.\u0275\u0275elementStart(287,"a",95),e.\u0275\u0275elementStart(288,"strong"),e.\u0275\u0275text(289,"ASSINE J\xc1!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(290,"div",96),e.\u0275\u0275element(291,"img",97),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd())},styles:[":root{--orange-main: #f67b1b;--text-orange: #F67B22;--grey: #707070;--grey-light: #d9d9d9;--ice: #f2f2f2;--dark: #010101}*{box-sizing:border-box}::-webkit-input-placeholder{font-size:1rem;text-transform:normal!important;color:currentColor;padding-left:7.5px;opacity:.6;-webkit-transition:all .2s;transition:all .2s}::-moz-placeholder{font-size:1rem;text-transform:normal!important;color:currentColor;padding-left:7.5px;opacity:.6;-moz-transition:all .2s;transition:all .2s}:-ms-input-placeholder{font-size:1rem;text-transform:normal!important;color:currentColor;padding-left:7.5px;opacity:.6;-ms-transition:all .2s;transition:all .2s}:focus::-webkit-input-placeholder{opacity:.25}:focus::-moz-placeholder{opacity:.25}:focus:-ms-input-placeholder{opacity:.25}:not(:focus)::-webkit-input-placeholder{opacity:.6}:not(:focus)::-moz-placeholder{opacity:.6}:not(:focus):-ms-input-placeholder{opacity:.6}.banner_topo{background-image:url(banner_topo@2x.png);background-repeat:no-repeat;background-position:center center}.bg-main{background-color:#ff7c00!important}.bg-dark{background-color:#010101;background-color:var(--dark)}.bg-ice{background-color:#f2f2f2;background-color:var(--ice)}.bg-grey-light{background-color:#d9d9d9;background-color:var(--grey-light)}.bg-mobile-grey{background-color:#939393}.bg-mobile-grey-2{background-color:#5c5c5c}.text-orange{color:#f67b22;color:var(--text-orange)}.text-grey{color:#707070;color:var(--grey)}h3{font-size:2rem}.area-form{border-radius:1.7rem}.form p{font-size:1.1rem}.area-input{position:relative;width:100%;padding:.3rem 1rem}.area-input input{padding:.5rem;border-radius:1.9rem;width:100%;outline:none;border:none;border:solid 1px #707070;border:solid 1px var(--grey)}.area-input label{position:absolute;padding-left:2rem;left:0;top:17px}.checkbox-area small{font-size:.7rem}.checkbox-area label{line-height:1;font-size:.8em!important}.area-vantagens{background-color:#101010}.area-vantagens div{gap:15px}.area-sem{border:none!important;font-size:2.2rem!important;font-weight:700}.area-vantagens span{border:solid 1px #F67B22;color:#fff;font-size:1.6rem;display:flex;justify-content:center;align-items:center}.seta-vantagens{position:absolute;left:50%;margin-left:-30px;bottom:-27px}.pronta-entrega{border:1px solid #707070;border:1px solid var(--grey);align-items:center;font-weight:700;font-size:1.2rem;display:inline-block}.section-3{color:#fff;font-size:1.2rem;font-weight:700}.section-3 h4{font-weight:700}.bg-section-3-left{background-image:url(bg_section3_1.png);background-repeat:no-repeat;background-size:cover;background-position:center center}.bg-section-3-right{background-image:url(bg_section3_2.png);background-repeat:no-repeat;background-size:cover;background-position:5% center;padding-right:150px}.tabela-titulo{height:100px}.tabela-titulo h5{font-size:1.7rem!important}.vantagens-area-2{height:150px;padding:.5rem 1rem}.border-white{border-color:#fff}.border-grey-light{border-color:#d9d9d9;border-color:var(--grey-light)}.icone_tabela{font-size:50px;color:#010101}.icone_tabela_right{color:#ff6400;font-size:50px}footer{background-color:#f67b1b;background-color:var(--orange-main)}footer p.call{font-size:17px}footer a.btn-assine{height:50px!important;width:190px!important;font-size:20px;line-height:37px}@media (max-width: 768px){.banner_topo{background-image:none}.area-form{margin:0!important}.br{display:none}.bg-mobile-carros-1{background-image:url(bg_mobile_1.png);background-repeat:no-repeat;background-size:cover;background-position:0px center}.vantagens-area-2{height:180px;padding:.5rem 1rem}.mobi-none{display:none}}@media (max-width: 600px){.bg-mobile-carros-1{background-image:url(bg_mobile_1.png);background-repeat:no-repeat;background-size:cover;background-position:0px center;background-color:#0000004d!important}.descricaoMobile{background-color:#0000004d!important}.area-carros-mobile{padding:7rem 1rem}}\n"],encapsulation:2}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.Bz.forChild(x)],d.Bz]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[p.ez,h]]}),t})()}}]);
//# sourceMappingURL=src_app_pages_landpages_saibamais_saibamais_module_ts.js.map