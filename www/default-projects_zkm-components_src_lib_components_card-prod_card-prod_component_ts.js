"use strict";(self.webpackChunkzero_km=self.webpackChunkzero_km||[]).push([["default-projects_zkm-components_src_lib_components_card-prod_card-prod_component_ts"],{3849:(k,_,p)=>{p.d(_,{Z:()=>E});var e=p(3184),d=p(6362),f=p(6908),s=p(2816),g=p(3432);function C(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(1,"svg",17),e.\u0275\u0275element(2,"path",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o){const t=a.$implicit;e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(t)}}let P=(()=>{class o{constructor(t){this.router=t,this.countDown=0,this.displayTime=0}ngOnInit(){const t=f.duration(this.data.expiration,"s"),n=setInterval(()=>{t.subtract(1,"s");const r=Math.floor(t.asHours())+"",i=Math.floor(t.minutes())+"",S=Math.floor(t.seconds())+"";var c,m;c=1==i.length?"0":"",m=1==S.length?"0":"";let b=parseInt((1==r.length?"00":2==r.length?"0":"")+Math.floor(t.asHours()));this.countDown=b.toString().padStart(2,"0")+":"+c+t.minutes()+":"+m+t.seconds(),0===t.asSeconds()&&clearInterval(n)},1e3)}openCar(t,n,r){let i=(n+"-"+t).toLowerCase().replace(/,?\s+/g,"-").replace(/[^\w-]+/g,"");this.router.navigate([`/assinatura/detalhes/${i}/${r}`],{queryParamsHandling:"merge"})}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(s.F0))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["movida-card-prod-day"]],inputs:{displayTime:"displayTime",data:"data"},decls:30,vars:14,consts:[[1,"card-prod"],[1,"card-prod-image",3,"click"],[3,"src","alt"],[1,"card-prod-info"],[1,"card-prod-info-title"],[3,"click"],[1,"card-prod-info-subtitle"],[1,"card-prod-info-regressive",3,"ngClass"],[1,"card-prod-info-adds"],[4,"ngFor","ngForOf"],[1,"card-prod-info-price"],[1,"text-price"],[1,"text-price-one"],[1,"text-price-two",3,"click"],[1,"text-price-three"],["text","Eu quero!","color","primary-500",3,"click"],[1,"card-prod-info-footer"],["width","6","height","6","viewBox","0 0 6 6","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M5 1.25781L2.25 4.25781L1 2.89418","stroke","#41454C","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275listener("click",function(){return n.openCar(n.data.model,n.data.brand,n.data.fipe)}),e.\u0275\u0275element(2,"img",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",3),e.\u0275\u0275elementStart(4,"div",4),e.\u0275\u0275elementStart(5,"h3",5),e.\u0275\u0275listener("click",function(){return n.openCar(n.data.model,n.data.brand,n.data.fipe)}),e.\u0275\u0275text(6),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275text(8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"h4",6),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"p",7),e.\u0275\u0275text(12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"div",8),e.\u0275\u0275template(14,C,5,1,"div",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"div",10),e.\u0275\u0275elementStart(16,"div",11),e.\u0275\u0275elementStart(17,"p",12),e.\u0275\u0275text(18,"a partir de"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"p",13),e.\u0275\u0275listener("click",function(){return n.openCar(n.data.model,n.data.brand,n.data.fipe)}),e.\u0275\u0275text(20),e.\u0275\u0275pipe(21,"currency"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"p",14),e.\u0275\u0275text(23,"Plano de 48 meses"),e.\u0275\u0275element(24,"br"),e.\u0275\u0275text(25,"Franquia de 1000km"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"app-button",15),e.\u0275\u0275listener("click",function(){return n.openCar(n.data.model,n.data.brand,n.data.fipe)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"div",16),e.\u0275\u0275elementStart(28,"p"),e.\u0275\u0275text(29),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("src",n.data.image,e.\u0275\u0275sanitizeUrl)("alt",n.data.detail),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate1("",n.data.brand," "),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n.data.model),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n.data.detail),e.\u0275\u0275advance(1),e.\u0275\u0275propertyInterpolate("ngClass",n.displayTime<3?"display-on":"display-off"),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("ENCERRA EM ",n.countDown,""),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",n.data.adds),e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate1("",e.\u0275\u0275pipeBind3(21,10,n.data.promotionValue,"BRL",!0),"/m\xeas*"),e.\u0275\u0275advance(9),e.\u0275\u0275textInterpolate(n.data.msgComPromo))},directives:[d.mk,d.sg,g.r],pipes:[d.H9],styles:[".card-prod[_ngcontent-%COMP%]{width:360px;font-family:Roboto}.card-prod[_ngcontent-%COMP%]:hover   .card-prod-info[_ngcontent-%COMP%]{box-shadow:0 4px 16px #231f201f}.card-prod-image[_ngcontent-%COMP%]{display:flex;cursor:pointer;height:227px}.card-prod-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:cover;object-fit:cover;height:260px;margin-top:-15px}.card-prod-info[_ngcontent-%COMP%]{background-color:#fff;border-radius:24px;padding-top:24%;margin-top:-22%}.card-prod-info-title[_ngcontent-%COMP%]{display:flex;justify-content:center}.card-prod-info-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:400;margin:0 4px 4px 0;font-size:28px;line-height:32px;color:#231f20;display:flex;cursor:pointer}.card-prod-info-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:900;font-size:28px;line-height:32px;color:#231f20;margin-left:4px}.card-prod-info-subtitle[_ngcontent-%COMP%]{text-align:center;color:#656f78;font-weight:500;font-size:14px;line-height:20px}.card-prod-info-regressive[_ngcontent-%COMP%]{font-weight:900;font-size:12px;line-height:14px;color:#f47920;margin-top:4px;text-align:center}.card-prod-info-adds[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:calc(100% - 16px);margin:24px 8px 14px;padding:8px 16px 0;background:#F6F8F9;border-radius:12px}.card-prod-info-adds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:center;width:50%;padding-bottom:8px}.card-prod-info-adds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#41454c}.card-prod-info-adds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#41454c;font-weight:700;font-size:12px;line-height:16px;margin-left:4px}.card-prod-info-price[_ngcontent-%COMP%]{margin:22px 16px;display:flex;justify-content:space-between}.card-prod-info-price[_ngcontent-%COMP%]   .text-price-one[_ngcontent-%COMP%]{font-weight:500;font-size:14px;line-height:20px;color:#656f78}.card-prod-info-price[_ngcontent-%COMP%]   .text-price-two[_ngcontent-%COMP%]{font-weight:900;font-size:18px;line-height:24px;color:#231f20;cursor:pointer}.card-prod-info-price[_ngcontent-%COMP%]   .text-price-three[_ngcontent-%COMP%]{font-weight:400;font-size:12px;line-height:16px;color:#656f78}.card-prod-info-price[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]{align-self:center}.card-prod-info-footer[_ngcontent-%COMP%]{padding-bottom:16px;text-align:center;min-height:31.9px}.card-prod-info-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:700;font-size:12px;line-height:16px;color:#656f78}.display-on[_ngcontent-%COMP%]{display:block}.display-off[_ngcontent-%COMP%]{display:none}"]}),o})();function x(o,a){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"section",12),e.\u0275\u0275elementStart(1,"div",13),e.\u0275\u0275elementStart(2,"button",14),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(3,"svg",15),e.\u0275\u0275element(4,"path",16),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(5,"button",17),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().addSlides()}),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(6,"svg",15),e.\u0275\u0275element(7,"path",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(8,"div",19),e.\u0275\u0275elementStart(9,"ul",20),e.\u0275\u0275elementStart(10,"li",21),e.\u0275\u0275element(11,"img",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("id","slide_"+t.data.fipe),e.\u0275\u0275advance(2),e.\u0275\u0275property("id","prev_"+t.data.fipe),e.\u0275\u0275advance(3),e.\u0275\u0275property("id","next_"+t.data.fipe),e.\u0275\u0275advance(6),e.\u0275\u0275property("src",t.data.image[0],e.\u0275\u0275sanitizeUrl)}}function h(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(1,"svg",25),e.\u0275\u0275element(2,"path",26),e.\u0275\u0275elementEnd(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o){const t=a.$implicit;e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(t)}}function M(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"div",23),e.\u0275\u0275template(1,h,5,1,"div",24),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t.data.adds)}}function u(o,a){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275elementStart(1,"div",27),e.\u0275\u0275elementStart(2,"p",28),e.\u0275\u0275text(3,"a partir de"),e.\u0275\u0275elementStart(4,"s"),e.\u0275\u0275text(5),e.\u0275\u0275pipe(6,"currency"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"app-button",29),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return r.openCar(r.data.model,r.data.brand,r.data.fipe)}),e.\u0275\u0275pipe(8,"currency"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"div",30),e.\u0275\u0275elementStart(10,"p"),e.\u0275\u0275text(11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind3(6,4,t.data.value,"BRL",!0)),e.\u0275\u0275advance(2),e.\u0275\u0275propertyInterpolate1("text","",e.\u0275\u0275pipeBind3(8,8,t.data.promotionValue,"BRL",!0),"/m\xeas*"),e.\u0275\u0275property("noPadding",t.noPadding),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(t.data.msgComPromo)}}function O(o,a){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",27),e.\u0275\u0275elementStart(1,"p",28),e.\u0275\u0275text(2,"a partir de"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"app-button",29),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return r.openCar(r.data.model,r.data.brand,r.data.fipe)}),e.\u0275\u0275pipe(4,"currency"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div",30),e.\u0275\u0275elementStart(6,"p"),e.\u0275\u0275text(7,"*Valor mensal da 1\xaa at\xe9 a \xfaltima parcela."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275propertyInterpolate1("text","",e.\u0275\u0275pipeBind3(4,2,t.data.promotionValue,"BRL",!0),"/m\xeas*"),e.\u0275\u0275property("noPadding",t.noPadding)}}let v=(()=>{class o{constructor(t){this.router=t,this.size="normal",this.splide=null,this.noPadding=!1}openCar(t,n,r){let i=(n+"-"+t).toLowerCase().replace(/,?\s+/g,"-").replace(/[^\w-]+/g,"");this.router.navigate([`/assinatura/detalhes/${i}/${r}`],{queryParamsHandling:"merge"})}ngOnInit(){"small"==this.size&&(this.noPadding=!0)}imageNotFound(t){t.target.src="assets/img/vehicles/image-not-found.png",t.target.alt="imagem do ve\xedculo n\xe3o encontrada"}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(s.F0))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["movida-card-prod-find"]],inputs:{size:"size",data:"data"},decls:19,vars:9,consts:[[1,"card-prod",3,"ngClass"],[1,"card-prod-image"],[3,"src","alt","click","error"],["splideBlock",""],[1,"card-prod-info"],[1,"card-prod-info-head"],[1,"card-prod-info-title"],[3,"click"],[1,"card-prod-info-subtitle"],["class","card-prod-info-adds",4,"ngIf"],[4,"ngIf","ngIfElse"],["noPromotion",""],["aria-label","Custom Arrows Example",1,"splide_showcase",2,"width","100%",3,"id"],[1,"splide__arrows"],["disabled","",1,"splide__arrow","splide__arrow--prev",3,"id"],["width","24","height","24","viewBox","0 0 24 24","fill","black","xmlns","http://www.w3.org/2000/svg",1,"arrow"],["d","M15 18L9 12L15 6","stroke","white","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],[1,"splide__arrow","splide__arrow--next",3,"id","click"],["d","M9 18L15 12L9 6","stroke","white","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],[1,"splide__track"],[1,"splide__list"],[1,"splide__slide"],["alt","",3,"src"],[1,"card-prod-info-adds"],[4,"ngFor","ngForOf"],["width","6","height","6","viewBox","0 0 6 6","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M5 1.25781L2.25 4.25781L1 2.89418","stroke","#41454C","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],[1,"card-prod-info-price"],[1,"text-price-one"],["color","tertiary-orange","size","small",3,"text","noPadding","click"],[1,"card-prod-info-footer"]],template:function(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275elementStart(2,"div"),e.\u0275\u0275elementStart(3,"img",2),e.\u0275\u0275listener("click",function(){return n.openCar(n.data.model,n.data.brand,n.data.fipe)})("error",function(i){return n.imageNotFound(i)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,x,12,4,"ng-template",null,3,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"div",4),e.\u0275\u0275elementStart(7,"div",5),e.\u0275\u0275elementStart(8,"div",6),e.\u0275\u0275elementStart(9,"h3",7),e.\u0275\u0275listener("click",function(){return n.openCar(n.data.model,n.data.brand,n.data.fipe)}),e.\u0275\u0275text(10),e.\u0275\u0275elementStart(11,"p"),e.\u0275\u0275text(12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"h4",8),e.\u0275\u0275text(14),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(15,M,2,1,"div",9),e.\u0275\u0275template(16,u,12,12,"div",10),e.\u0275\u0275template(17,O,8,6,"ng-template",null,11,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const r=e.\u0275\u0275reference(18);e.\u0275\u0275property("ngClass",n.size),e.\u0275\u0275advance(3),e.\u0275\u0275property("src",n.data.image,e.\u0275\u0275sanitizeUrl)("alt",n.data.detail),e.\u0275\u0275advance(7),e.\u0275\u0275textInterpolate1("",n.data.brand," "),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n.data.model),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n.data.detail),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.data.adds),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",0!=n.data.value)("ngIfElse",r)}},directives:[d.mk,d.O5,d.sg,g.r],pipes:[d.H9],styles:[".card-prod[_ngcontent-%COMP%]{font-family:Roboto}.card-prod[_ngcontent-%COMP%]:hover   .card-prod-info[_ngcontent-%COMP%]{box-shadow:0 4px 16px #231f201f}.card-prod-info[_ngcontent-%COMP%]{background-color:#fff;border-radius:12px}.card-prod-info-head[_ngcontent-%COMP%]{margin-top:10px}.card-prod-info-head[_ngcontent-%COMP%]   .card-prod-info-title[_ngcontent-%COMP%]{display:flex;margin-left:12px}.card-prod-info-head[_ngcontent-%COMP%]   .card-prod-info-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:500;margin:0 4px 4px 0;font-size:16px;line-height:24px;color:#231f20;display:flex;cursor:pointer}.card-prod-info-head[_ngcontent-%COMP%]   .card-prod-info-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:900;font-size:16px;line-height:24px;color:#231f20;margin-left:4px}.card-prod-info-head[_ngcontent-%COMP%]   .card-prod-info-subtitle[_ngcontent-%COMP%]{color:#656f78;font-weight:400;font-size:12px;line-height:16px;margin:0 12px;height:32px}.card-prod-info-adds[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;width:calc(100% - 16px);margin:8px;padding:8px 12px;background:#F6F8F9;border-radius:12px}.card-prod-info-adds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:center}.card-prod-info-adds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#41454c}.card-prod-info-adds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#41454c;font-weight:700;font-size:12px;line-height:16px;margin-left:4px}.card-prod-info-price[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:column;align-items:start}.card-prod-info-price[_ngcontent-%COMP%]   .text-price-one[_ngcontent-%COMP%]{font-weight:700;line-height:20px;color:#919ca5;margin-left:12px}.card-prod-info-price[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]{margin:4px 8px 6px;width:calc(100% - 16px)}.card-prod-info-footer[_ngcontent-%COMP%]{padding-bottom:10px;min-height:34px}.card-prod-info-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:700;font-size:10px;line-height:12px;color:#919ca5;margin:0 10px}.normal[_ngcontent-%COMP%]{width:264px;margin-bottom:50px}.normal[_ngcontent-%COMP%]   .card-prod-image[_ngcontent-%COMP%]{display:flex;cursor:pointer}.normal[_ngcontent-%COMP%]   .card-prod-image[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%}.normal[_ngcontent-%COMP%]   .card-prod-image[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:cover;object-fit:cover}@media (max-width: 600px){.normal[_ngcontent-%COMP%]{width:200px}}.normal[_ngcontent-%COMP%]   .card-prod-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:158px}.normal[_ngcontent-%COMP%]   .card-prod-info[_ngcontent-%COMP%]{padding-top:24%;margin-top:-22%}.normal[_ngcontent-%COMP%]   .card-prod-info-price[_ngcontent-%COMP%]   .text-price-one[_ngcontent-%COMP%]{font-size:14px;text-align:left;width:100%}.normal[_ngcontent-%COMP%]   .card-prod-info-price[_ngcontent-%COMP%]   .text-price-one[_ngcontent-%COMP%]   s[_ngcontent-%COMP%]{display:none}.normal[_ngcontent-%COMP%]   .card-prod-info-title[_ngcontent-%COMP%]{justify-content:left}.normal[_ngcontent-%COMP%]   .card-prod-info-subtitle[_ngcontent-%COMP%], .normal[_ngcontent-%COMP%]   .card-prod-info-footer[_ngcontent-%COMP%]{text-align:left}.small[_ngcontent-%COMP%]{margin:8px}@media (max-width: 880px){.small[_ngcontent-%COMP%]{margin:4px}}.small[_ngcontent-%COMP%]   .card-prod-image[_ngcontent-%COMP%]{display:flex;cursor:pointer;width:100%}.small[_ngcontent-%COMP%]   .card-prod-image[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%}.small[_ngcontent-%COMP%]   .card-prod-image[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:cover;object-fit:cover;height:170px}@media (min-width: 1700px){.small[_ngcontent-%COMP%]   .card-prod-image[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:260px}}@media (max-width: 880px){.small[_ngcontent-%COMP%]   .card-prod-image[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:260px}}@media (max-width: 800px){.small[_ngcontent-%COMP%]   .card-prod-image[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:180px}}@media (max-width: 500px){.small[_ngcontent-%COMP%]   .card-prod-image[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:120px}}.small[_ngcontent-%COMP%]   .card-prod-info[_ngcontent-%COMP%]{padding-top:20%;margin-top:-27%}.small[_ngcontent-%COMP%]   .card-prod-info-price[_ngcontent-%COMP%]   .text-price-one[_ngcontent-%COMP%]{font-size:12px;text-align:center;width:100%;margin-left:0}.small[_ngcontent-%COMP%]   .card-prod-info-price[_ngcontent-%COMP%]   .text-price-one[_ngcontent-%COMP%]   s[_ngcontent-%COMP%]{color:#ff8d3b;font-weight:700;font-size:12px;line-height:16px;margin-left:4px}.small[_ngcontent-%COMP%]   .card-prod-info-adds[_ngcontent-%COMP%]{display:none}.small[_ngcontent-%COMP%]   .card-prod-info-title[_ngcontent-%COMP%]{justify-content:center}.small[_ngcontent-%COMP%]   .card-prod-info-subtitle[_ngcontent-%COMP%], .small[_ngcontent-%COMP%]   .card-prod-info-footer[_ngcontent-%COMP%]{text-align:center}.small[_ngcontent-%COMP%]   .card-prod-info-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#41454c}.text-none[_ngcontent-%COMP%]{font-weight:900!important}"]}),o})();function w(o,a){if(1&o&&e.\u0275\u0275element(0,"movida-card-prod-day",2),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("data",t.vitrine)("displayTime",t.displayTime)}}function y(o,a){if(1&o&&e.\u0275\u0275element(0,"movida-card-prod-find",3),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("data",t.vitrine)("size",t.size)}}let E=(()=>{class o{constructor(){this.displayTime=0,this.type="",this.size=""}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["movida-card-prod"]],inputs:{displayTime:"displayTime",type:"type",vitrine:"vitrine",size:"size"},decls:3,vars:2,consts:[[3,"data","displayTime",4,"ngIf","ngIfElse"],["elseBlock",""],[3,"data","displayTime"],[3,"data","size"]],template:function(t,n){if(1&t&&(e.\u0275\u0275template(0,w,1,2,"movida-card-prod-day",0),e.\u0275\u0275template(1,y,1,2,"ng-template",null,1,e.\u0275\u0275templateRefExtractor)),2&t){const r=e.\u0275\u0275reference(2);e.\u0275\u0275property("ngIf","day"==n.type)("ngIfElse",r)}},directives:[d.O5,P,v],styles:[""]}),o})()}}]);
//# sourceMappingURL=default-projects_zkm-components_src_lib_components_card-prod_card-prod_component_ts.js.map