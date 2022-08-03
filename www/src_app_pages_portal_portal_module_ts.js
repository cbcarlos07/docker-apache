"use strict";(self.webpackChunkzero_km=self.webpackChunkzero_km||[]).push([["src_app_pages_portal_portal_module_ts"],{2314:(h,s,i)=>{i.r(s),i.d(s,{PortalModule:()=>x});var p=i(4466),a=i(2816),l=i(2340),t=i(3184),d=i(8386),c=i(5212),g=i(419);const m=[{path:"",component:(()=>{class e{constructor(n,o,f){this.userService=n,this.menuService=o,this.router=f,this.pointsInfo=[],this.points=0,this.expirePoints=0,this.expirePointsDate="",this.accountInfo=[],this.finishedRegister=0,this.warningText="",this.warningColor="",this.SITEMOVIDA_URL=l.N.siteMovida,this.steps=[{id:"0",label:"Home",link:"/"},{id:"1",label:"Meu portal"}]}ngOnInit(){this.loadPoints(),this.verifyAccount()}loadPoints(){this.showLoading=!0,this.pointsInfo=this.userService.getPoints().subscribe(n=>{this.points=n.data.saldo,n.data.pontos_expirando&&(this.expirePoints=n.data.pontos_expirando.pontos_expirando,this.expirePointsDate=n.data.pontos_expirando.data_expiracao),this.showLoading=!1},n=>{this.showLoading=!1})}verifyAccount(){this.accountInfo=this.userService.verifyAccount().subscribe(n=>{this.finishedRegister=n,0==n?(this.warningText="Complete seu cadastro",this.warningColor="red"):(this.warningText="Cadastro completo",this.warningColor="green")})}redidectToOrders(){this.closeMenu(),this.router.navigate(["/minha-conta"])}redirectToMyPayments(){this.closeMenu(),this.router.navigate(["/portal/meus-pagamentos"])}redidectToAccount(){this.closeMenu()}closeMenu(){this.menuService.changeMenu.emit("")}}return e.\u0275fac=function(n){return new(n||e)(t.\u0275\u0275directiveInject(d.K),t.\u0275\u0275directiveInject(c.h),t.\u0275\u0275directiveInject(a.F0))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-portal"]],decls:16,vars:9,consts:[[1,"container","first-container"],[1,"steps-header",3,"steps"],[1,"portal-header"],[1,"container"],[1,"title"],[1,"single-line"],["title","Minha Conta","iconUrl","assets/img/icons/users-icon.svg","bodyText","Altere o cadastro, senha e cart\xf5es cadastrados","buttonText","Editar",3,"warningHexColor","warningMessage","buttonUrl"],["title","Meus pedidos","iconUrl","assets/img/icons/pedido-icon.svg","bodyText","Consulte seus pedidos realizados no Zero Km","buttonText","Meus pedidos","buttonUrl","/portal/meus-pedidos"],["title","Meus pagamentos","iconUrl","assets/img/icons/pagamentos-icon.svg","bodyText","Consulte seu extrato de pagamentos Zero Km","buttonText","Meus pagamentos","buttonUrl","/portal/meus-pagamentos"],["title","Multas","iconUrl","assets/img/icons/multas-icon.svg","bodyText","Consulte o extrato das suas multas","buttonText","Consultar multas","buttonUrl","/portal/multas"],["title","CRLV Digital","iconUrl","assets/img/icons/multas-icon.svg","bodyText","Consulte e fa\xe7a download do licenciamento do seu ve\xedculo por assinatura","buttonText","Consultar Documentos","buttonUrl","/portal/crlv-digital"],["title","Movida Fidelidade","iconUrl","assets/img/icons/logo.svg","buttonText","Meu extrato",3,"currentPoints","expirePoints","expireDate","showLoading","buttonUrl"]],template:function(n,o){1&n&&(t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275element(1,"app-breadcrumb",1),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(2,"div",2),t.\u0275\u0275elementStart(3,"div",3),t.\u0275\u0275elementStart(4,"p",4),t.\u0275\u0275text(5,"Meu Portal"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"div",3),t.\u0275\u0275element(7,"div",5),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(8,"div",3),t.\u0275\u0275element(9,"card-component",6),t.\u0275\u0275element(10,"card-component",7),t.\u0275\u0275element(11,"card-component",8),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(12,"div",3),t.\u0275\u0275element(13,"card-component",9),t.\u0275\u0275element(14,"card-component",10),t.\u0275\u0275element(15,"fidelidade-card-component",11),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&n&&(t.\u0275\u0275advance(1),t.\u0275\u0275property("steps",o.steps),t.\u0275\u0275advance(8),t.\u0275\u0275propertyInterpolate("warningHexColor",o.warningColor),t.\u0275\u0275propertyInterpolate("warningMessage",o.warningText),t.\u0275\u0275propertyInterpolate1("buttonUrl","",o.SITEMOVIDA_URL,"usuario/dados-cadastrais"),t.\u0275\u0275advance(6),t.\u0275\u0275propertyInterpolate("currentPoints",o.points),t.\u0275\u0275propertyInterpolate("expirePoints",o.expirePoints),t.\u0275\u0275propertyInterpolate("expireDate",o.expirePointsDate),t.\u0275\u0275propertyInterpolate1("buttonUrl","",o.SITEMOVIDA_URL,"usuario/extratopontos"),t.\u0275\u0275property("showLoading",o.showLoading))},directives:[g.L],styles:["*[_ngcontent-%COMP%]{font-family:Roboto}.portal-header[_ngcontent-%COMP%]{justify-content:center;background-color:#fff;margin-bottom:65px;margin-top:-20px}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding-top:32px;flex-wrap:wrap}.title[_ngcontent-%COMP%]{color:#f97d00;font-size:24px}.menus-container[_ngcontent-%COMP%]{width:100%;justify-content:space-between;flex-direction:row;align-items:center;padding-top:32px}.single-container[_ngcontent-%COMP%]{width:350px;height:210px;min-width:300px;background:#fafafa;text-align:center}.bottom-container[_ngcontent-%COMP%]{justify-content:unset}.button-container[_ngcontent-%COMP%]{width:200px;height:40px;margin-top:39px;background:#f97d00;color:#fff}.button-points-container[_ngcontent-%COMP%]{width:200px;height:40px;margin-top:15px;background:#f97d00;color:#fff}.submenu-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-bottom:40px;padding:30px 0 0 30px}.submenu-points-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-bottom:22px;padding:30px 0 0 30px}.img-header[_ngcontent-%COMP%]{margin-right:12px;margin-top:-5px}.points-container[_ngcontent-%COMP%]{display:flex;flex-flow:row;margin:0 30px;justify-content:space-between}.current-points[_ngcontent-%COMP%], .expire-points[_ngcontent-%COMP%]{color:#58595b;font-size:11px;font-weight:700}.value-points[_ngcontent-%COMP%], .expire-points-value[_ngcontent-%COMP%]{color:#f97d00;margin-top:5px}.value-points[_ngcontent-%COMP%]{font-size:35px}.expire-points-value[_ngcontent-%COMP%]{font-size:24px}.date-expire-points[_ngcontent-%COMP%]{color:#858585;font-size:11px}.img-register[_ngcontent-%COMP%]{width:118px;height:30px;margin-left:53px;margin-top:-5px}.bottom-submenu-left[_ngcontent-%COMP%]{margin-right:30px;margin-top:-30px}.text-submenu[_ngcontent-%COMP%]{font-size:14px}.span-incomplete-register[_ngcontent-%COMP%]{padding:5px 10px;font-weight:500;font-size:14px;border-radius:5px;background-color:red;color:#fff;margin:-5px 0 0 10px}.span-complete-register[_ngcontent-%COMP%]{padding:5px 10px;font-weight:500;font-size:14px;border-radius:5px;background-color:green;color:#fff;margin:-5px 0 0 30px}.calendar-container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.calendar-icon[_ngcontent-%COMP%]{width:10px;height:10px;margin-right:5px}.movida-fidelidade-icon[_ngcontent-%COMP%]{border-radius:50%;width:18px;height:18px}.single-line[_ngcontent-%COMP%]{width:100%;border:1px solid #ccc;margin-top:-25px}.first-container[_ngcontent-%COMP%]{margin-top:-20px}.multas-mt-negative[_ngcontent-%COMP%]{margin-top:20px!important}.fidelidade-m-negative[_ngcontent-%COMP%]{margin-top:-30px}@media only screen and (max-width: 960px){.bottom-submenu-left[_ngcontent-%COMP%]{margin-top:-30px}.multas-mt-negative[_ngcontent-%COMP%]{margin-top:-20px!important}}@media only screen and (min-width: 960px){.fidelidade-m-negative[_ngcontent-%COMP%]{margin-left:-2px}}"]}),e})()}];let u=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[a.Bz.forChild(m)],a.Bz]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[u,p.m]]}),e})()}}]);
//# sourceMappingURL=src_app_pages_portal_portal_module_ts.js.map