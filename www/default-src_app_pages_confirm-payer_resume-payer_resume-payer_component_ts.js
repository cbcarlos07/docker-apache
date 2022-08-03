"use strict";(self.webpackChunkzero_km=self.webpackChunkzero_km||[]).push([["default-src_app_pages_confirm-payer_resume-payer_resume-payer_component_ts"],{5357:(R,S,h)=>{h.d(S,{G:()=>A});var I=h(6908),e=h(3184);let A=(()=>{class C{constructor(){}checkInArray(a,u){let s=!1;return u.forEach(d=>{d.Descricao===a&&(s=!0)}),s}getProductId(a){switch(a){case"ADD":case"MB0KM":return 1;case"CFR":case"WDW1":return 4;case"CZKM":return 8;case"MC0KM":return 2;case"WDWP1":return 5;case"SPZKM":return 215;case"OSZKM":return 216}}getProductVetorId(a){switch(a){case"ADD":return 39;case"CFR":return 59;case"CZKM":return 96;case"SPZKM":return 218;case"OSZKM":return 247}}getProductPriceId(a){switch(a){case"ADD":return 331;case"CFR":return 775;case"CZKM":return 1783;case"MB0KM":return 157;case"MC0KM":return 158;case"WDW1":return 160;case"WDWP1":return 161;case"SPZKM":case"OSZKM":return 278}}getCoinsurance(a,u){const s=new Array;s.MB0KM="CPBZKM",s.MC0KM="CPCZKM";const d=JSON.parse(localStorage.getItem("coinsurances")),p=d?d.filter(M=>M.sigla===s[u])[0]:null,m=p?p.valores.filter(M=>M.grupo_id===a)[0]:null;return m?m.valor:null}getBookingPayload(a){let u=[],s=[],d=[];u.push({codigo:a.protection.sigla}),a.extraProtections.forEach(v=>{u.push({codigo:v.sigla})}),a.additionalServices&&a.additionalServices.forEach(v=>{"ADD"===v.sigla?v.drivers?v.drivers.forEach(i=>{null!==i.cpf&&d.push({nome:"Condutor",sobrenome:"Adicional",cpf:i.cpf})}):d=[]:s.push({tipo:v.sigla,quantidade:"1"})}),s.filter(v=>96===v.tipo).length||s.push({tipo:96,quantidade:"1"});const p=I().add(1,"day");let m=I(p).add(a.period&&a.period.dias?a.period.dias:30*parseInt(a.period.meses),"days");p.toString()===m.toString()&&(m=I(p).add(1440,"days"));let M={data_retirada:p.format("DD/MM/YYYY 10:00"),data_devolucao:m.format("DD/MM/YYYY 10:00"),local_retirada:"380",local_devolucao:"380","with-unavailable":!0,codigo_veiculo:a.acriss,sigla:void 0===a.mileage.valor?"":a.mileage.valor.sigla,protecoes:u,equipamentos:s,condutores:d,vitrine:!1,franquia:null};const D=localStorage.getItem("CPN");return D&&(M.coupon=D),M}getPromotion(a){let s=0,d=0,p={};return a.TotalCharge.Periods.forEach(m=>{m.valor_mensal!=s&&d>0&&(p={value_month_promo:s,value_normal:m.valor_mensal,valor_mensal_total:m.valor_mensal_total,promo_month:d,value_day:m.valor_diaria,total_days:m.diarias,car_promo:a.Vehicle.FipeCode,is_promo:!0}),s=m.valor_mensal,d++}),p}getPromotionMonths(a){let u=0,s=0,d={};return a.forEach(p=>{p.ValorTotal!=u&&s>0&&(d={value_month_promo:u,value_normal:p.ValorTotal,promo_month:s,valor_mensal_total:p.valor_mensal_total,is_promo:!0}),u=p.ValorTotal,s++}),d}getBackupCarAmount(a){try{const u=a.filter(s=>"CZKM"===s.PricedEquip.Equipment.Sigla)[0];return"true"===u.PricedEquip.Charge.IncludedInRate?parseFloat(u.PricedEquip.Charge.Amount):0}catch(u){return 0}}}return C.\u0275fac=function(a){return new(a||C)},C.\u0275prov=e.\u0275\u0275defineInjectable({token:C,factory:C.\u0275fac,providedIn:"root"}),C})()},7606:(R,S,h)=>{h.d(S,{n:()=>v});var I=h(8283),x=h(6945),e=h(3184),A=h(1909),C=h(5357),y=h(164),a=h(6228),u=h(6362);function d(i,P){if(1&i&&(e.\u0275\u0275elementStart(0,"span",7),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.isPromo?t.promoValue:t.totalValue)}}function p(i,P){if(1&i&&(e.\u0275\u0275elementStart(0,"span",7),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.isPromo?t.totalInstallmentsPromotion:t.totalInstallments,"/")}}function m(i,P){if(1&i&&(e.\u0275\u0275element(0,"hr",10),e.\u0275\u0275elementStart(1,"span",11),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()),2&i){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",null!=t.reserva&&t.reserva.MessagePromocaoVeiculo?null==t.reserva?null:t.reserva.MessagePromocaoVeiculo:t.messagePromo," ")}}function M(i,P){if(1&i&&(e.\u0275\u0275element(0,"hr",10),e.\u0275\u0275elementStart(1,"span",11),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()),2&i){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",null!=t.reserva&&t.reserva.MessageSemPromocao?null==t.reserva?null:t.reserva.MessageSemPromocao:t.messageNoPromo," ")}}function D(i,P){if(1&i&&(e.\u0275\u0275elementStart(0,"div",8),e.\u0275\u0275template(1,m,3,1,"ng-template",9),e.\u0275\u0275template(2,M,3,1,"ng-template",9),e.\u0275\u0275elementEnd()),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.messagePromo),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.messageNoPromo)}}let v=(()=>{class i{constructor(t,o,l,n){this.shared=t,this.quotationS=o,this.checkoutS=l,this.alertMsg=n,this.isPromo=!1,this.isOfferBlackFriday=!1,this.triggerAlert=!0,this.protectionList=new Array,this.extraProtectionList=new Array,this.additionalServiceList=new Array,this.formatNumber=new x.A}get protections(){return this.pedido&&this.pedido.protecao?this.pedido.protecao:0}get franchises(){return this.pedido&&this.pedido.tarifa?this.pedido.tarifa.Franquia:0}get periods(){return this.pedido&&this.pedido.tarifa?this.pedido.tarifa.Periodo:0}ngOnInit(){}ngOnChanges(){this.getTariff(),this.calculateInstallments()}getTariff(){if(this.shared.setCounterLoading(!0),0==Object.keys(this.protections).length||!this.franchises||!this.periods)return void this.shared.setCounterLoading(!1);this.carOpt={protection:{sigla:this.pedido.protecao.Sigla},values:{promo:null,total:null},extraProtections:[],additionalServices:[],period:{meses:parseInt(this.periods)},mileage:{valor:{sigla:this.pedido.tarifa.Sigla}},groupId:this.pedido.frota.Grupo,acriss:this.pedido.frota.Acriss},this.pedido.frota.Acriss&&(this.carOpt.acriss=this.pedido.frota.Acriss);const t=this.quotationS.getBookingPayload(this.carOpt);this.carOpt.bookingPayload=t,this.quoteReservation(t),this.shared.setCounterLoading(!1)}quoteReservation(t){return function(i,P,t,o){return new(t||(t=Promise))(function(n,_){function r(g){try{f(o.next(g))}catch(E){_(E)}}function c(g){try{f(o.throw(g))}catch(E){_(E)}}function f(g){g.done?n(g.value):function l(n){return n instanceof t?n:new t(function(_){_(n)})}(g.value).then(r,c)}f((o=o.apply(i,P||[])).next())})}(this,void 0,void 0,function*(){"null"!=localStorage.getItem("pagadorID")&&t.equipamentos.push({tipo:"RESP_FINAN",quantidade:1}),"null"!=localStorage.getItem("pagadorID")&&t.equipamentos.push({tipo:"RESP_FINAN",quantidade:1}),this.checkoutS.quoteReservation(t).subscribe(o=>{if(null!=o&&o&&o.success&&o.data.success){const l=o.data.VehAvailRSCore.VehVendorAvails.VehVendorAvail.VehAvails[0].VehAvail.VehAvailCore;this.getProtections(l.VehAvailInfo.PricedCoverages),this.getAdditionalServices(l.PricedEquips);const n=l.TotalCharge.Periods,_=this.quotationS.getPromotion(l);this.isPromo=!!_.is_promo&&_.is_promo;let r=this.isPromo?n[0].valor_mensal_total:null,c=this.isPromo?_.valor_mensal_total:n[0].valor_mensal_total;const f=19.9;r+=f,c+=f;const g=o.data.VehAvailRSCore.VehVendorAvails.VehVendorAvail.VehAvails[0];this.messagePromo=this.isPromo?g.VehAvail.VehAvailCore.VehAvailInfo.MessagePromocaoVeiculo:"",this.messageNoPromo=g.VehAvail.VehAvailCore.VehAvailInfo.MessageSemPromocao,this.carOpt.values.promo=this.isPromo?this.isPromo.toString():null,this.carOpt.values.total=c.toString(),this.totalValueMonth=this.formatNumber.getBRLCurrency(Number((c-=f).toString())),this.carOpt.tariff=l.RentalRate.RateQualifier.RateQualifier,this.excessKm=this.formatNumber.getBRLCurrency(Number(l.RentalRate.RateDistance.Amount)),this.promoValue=this.isPromo?this.formatNumber.getBRLCurrency(Number(this.isPromo?n[0].valor_mensal_total:null)):null,this.totalValue=this.formatNumber.getBRLCurrency(Number(this.carOpt.values.total)),this.totalResp=this.formatNumber.getBRLCurrency(Number(f)),this.checkoutS.encryptTotalPrepagamentoPay(Number(this.isPromo?this.carOpt.values.promo:this.carOpt.values.total))}else this.showErrorAlert()})})}getProtections(t){const o=[],n=t.filter(r=>"MB0KM"===r.PricedCoverage.Coverage.Code)[0],_=n?30*parseFloat(n.PricedCoverage.Charge.Calculation.UnitCharge):0;t.map(r=>{const c=r.PricedCoverage.Coverage.Code,f=r.PricedCoverage.Charge.Calculation.UnitCharge;if("MC0KM"===c||"MB0KM"===c){const g={id:this.quotationS.getProductId(c),coparticipacao:r.PricedCoverage.Coverage.Coparticipacao,price_id:this.quotationS.getProductPriceId(c),sigla:c,nome:r.PricedCoverage.Coverage.Details[0].value,descricao:r.PricedCoverage.Coverage.Details[1].value,valor:"MC0KM"===c?(30*parseFloat(f)-_).toFixed(2):(0).toFixed(2),copart:this.quotationS.getCoinsurance(this.carOpt.groupId,c),extra:!1,selected:r.PricedCoverage.Charge.IncludedInRate,panelDetail:"out",coverageDescriptions:"MC0KM"===c?["Cobertura para danos corporais causados a terceiros limitada a R$250M;","Cobertura para danos materiais causados a terceiros limitada a R$250M;","Cobertura para danos morais causados a terceiros limitada a R$30M."]:null,conductorsDescription:"A cobertura engloba tamb\xe9m outros condutores, que possam dirigir o ve\xedculo, contanto que sejam maiores de 21 anos e tenham habilita\xe7\xe3o h\xe1 mais de 2 anos."};r.PricedCoverage.Charge.IncludedInRate&&(this.carOpt.protection=g),o.push(g)}}),0===o.length?this.showErrorAlert():(this.protectionList=o.sort((r,c)=>r.sigla<c.sigla?-1:1),this.extraProtectionList=[].sort((r,c)=>r.sigla<c.sigla?-1:1))}getAdditionalServices(t){const o=new Array;o.push({id:this.quotationS.getProductId("ADD"),id_vetor:this.quotationS.getProductVetorId("ADD"),price_id:this.quotationS.getProductPriceId("ADD"),sigla:"ADD",sku:"1",nome:"Condutor adicional",descricao:"Inclua at\xe9 3 condutores adicionais para dirigir o seu possante!",valor:"0",checked:!1,panelDetail:"out"}),t.map(l=>{const n=l.PricedEquip.Equipment,_=l.PricedEquip.Charge,r=n.Sigla;if("CFR"===r||"CZKM"===r||"SPZKM"===r){const c={id:this.quotationS.getProductId(r),id_vetor:this.quotationS.getProductVetorId(r),price_id:this.quotationS.getProductPriceId(r),sigla:r,sku:"1",nome:n.Description,descricao:n.Details,valor:"CZKM"===r?"0":(30*parseFloat(_.Calculation.UnitCharge)).toFixed(2),checked:"true"===_.IncludedInRate,panelDetail:"out"};o.push(c)}}),this.additionalServiceList=o.sort((l,n)=>l.sigla<n.sigla?-1:1),this.shared.setCounterLoading(!1)}showErrorAlert(t=null){this.triggerAlert&&(this.shared.setCounterLoading(!1),this.triggerAlert=!1,this.alertMsg.openDialog({tipo:"redirect",titulo:"Desculpe,",mensagem:t||"N\xe3o foi poss\xedvel carregar as informa\xe7\xf5es do ve\xedculo. Por favor, tente novamente mais tarde."},"redirect",!0))}calculateInstallments(){let t=0,o=0,l={has_promo:!1};this.reserva&&this.reserva.Periodos&&this.reserva.Periodos.length>0&&this.isDetails&&(this.reserva.Periodos.forEach(n=>{n.valor_mensal_total!=t&&o>0&&(l={previous_valor_mensal_total:t,valor_mensal_total:n.valor_mensal_total,previous_period:o,has_promo:!0}),t=n.valor_mensal_total,o++}),l.has_promo?this.totalInstallmentsPromotion=`${this.formatNumber.getBRLCurrency(Number(l.previous_valor_mensal_total))}`:this.totalInstallments=`${this.formatNumber.getBRLCurrency(Number(this.reserva.Periodos[0].valor_mensal_total))}`)}}return i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275directiveInject(A.b),e.\u0275\u0275directiveInject(C.G),e.\u0275\u0275directiveInject(y.Z),e.\u0275\u0275directiveInject(a.z))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["app-resume-payer"]],inputs:{pedido:"pedido",reserva:"reserva",isDetails:"isDetails"},features:[e.\u0275\u0275ProvidersFeature([I.t]),e.\u0275\u0275NgOnChangesFeature],decls:10,vars:3,consts:[[1,"container"],[1,"wrapper"],[1,"title"],[1,"value"],["class","value__primary",4,"ngIf"],[1,"value__regular"],["class","observation",4,"ngIf"],[1,"value__primary"],[1,"observation"],[3,"ngIf"],[1,"observation__hr"],[1,"observation__label"]],template:function(t,o){1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275elementStart(2,"div",2),e.\u0275\u0275text(3," Valor total "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",3),e.\u0275\u0275template(5,d,2,1,"span",4),e.\u0275\u0275template(6,p,2,1,"span",4),e.\u0275\u0275elementStart(7,"span",5),e.\u0275\u0275text(8,"m\xeas"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(9,D,3,2,"div",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",!o.isDetails),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",o.isDetails),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",o.messagePromo||o.messageNoPromo))},directives:[u.O5],styles:[".wrapper[_ngcontent-%COMP%]{min-width:185px;background-color:#f4f4f4;border-top:2px solid #58595b;padding:28px 30px}@media (min-width: 1025px){.wrapper[_ngcontent-%COMP%]{padding:28px 35px}}.wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding-bottom:15px;border-bottom:1px solid #dcdcdc;font-size:24px;color:#58595b;font-family:Roboto;font-weight:500}.wrapper[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{text-align:right;padding-top:30px;font-size:18px;font-family:Roboto;font-weight:700}.wrapper[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .value__primary[_ngcontent-%COMP%]{font-size:32px;font-weight:500}.wrapper[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .value__regular[_ngcontent-%COMP%]{font-family:Roboto;font-weight:500}.wrapper[_ngcontent-%COMP%]   .observation[_ngcontent-%COMP%]{text-align:right;width:33%;margin-top:5px;margin-right:0;margin-left:auto}@media (max-width: 576px){.wrapper[_ngcontent-%COMP%]   .observation[_ngcontent-%COMP%]{width:80%}}.wrapper[_ngcontent-%COMP%]   .observation__hr[_ngcontent-%COMP%]{padding:5px;border-top:solid 1px #dcdcdc}.wrapper[_ngcontent-%COMP%]   .observation__label[_ngcontent-%COMP%]{color:#58595b;font-size:12px;font-family:Roboto;font-weight:300}"]}),i})()}}]);
//# sourceMappingURL=default-src_app_pages_confirm-payer_resume-payer_resume-payer_component_ts.js.map