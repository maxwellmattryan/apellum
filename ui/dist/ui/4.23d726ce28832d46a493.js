(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{iydT:function(t,n,e){"use strict";e.r(n),e.d(n,"HomeModule",(function(){return m}));var i=e("ofXK"),a=e("pKmL"),o=e("tyNb"),r=e("fXoL");let s=(()=>{class t{constructor(){this.paragraph="\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus lectus, vestibulum in lobortis in, consequat et lacus. Curabitur iaculis bibendum sem id dapibus. Duis tempus orci ut leo ornare varius. Ut mollis posuere sapien fringilla gravida. Sed in lorem rutrum, tincidunt purus vel, volutpat massa. Curabitur lobortis convallis tortor, nec scelerisque nibh consectetur eu. Maecenas gravida metus nec nunc fringilla, sed consequat nibh venenatis.\n        Pellentesque et convallis justo. Vestibulum quis pulvinar magna. Cras id neque pellentesque est placerat convallis. Curabitur euismod diam quam, a aliquam dolor suscipit eget. Ut vitae urna est. Etiam libero dui, pretium non purus id, hendrerit rhoncus ligula. Ut placerat leo in metus lobortis lobortis. Sed nisl massa, sollicitudin sit amet risus nec, aliquet gravida velit.",this.imageUrl="https://mattmaxwell.dev/assets/images/portfolio/profiles/portrait.png"}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.xb({type:t,selectors:[["app-home-about"]],inputs:{paragraph:"paragraph",imageUrl:"imageUrl"},decls:13,vars:4,consts:[[1,"section","about"],[1,"about__header"],[1,"about__line-divider","line-divider"],[1,"about__container"],[1,"about__description-text"],[1,"about__description"],[1,"about__portrait-container"],["type","image/webp",3,"srcset"],["type","image/png",3,"srcset"],["alt","Profile image",1,"about__portrait",3,"src"]],template:function(t,n){1&t&&(r.Ib(0,"div",0),r.Ib(1,"h2",1),r.ac(2,"About"),r.Hb(),r.Eb(3,"div",2),r.Ib(4,"div",3),r.Ib(5,"div",4),r.Ib(6,"p",5),r.ac(7),r.Hb(),r.Hb(),r.Ib(8,"div",6),r.Ib(9,"picture"),r.Eb(10,"source",7),r.Eb(11,"source",8),r.Eb(12,"img",9),r.Hb(),r.Hb(),r.Hb(),r.Hb()),2&t&&(r.ub(7),r.cc(" ",n.paragraph," "),r.ub(3),r.Qb("srcset",n.imageUrl,r.Vb),r.ub(1),r.Qb("srcset",n.imageUrl.substring(0,n.imageUrl.length-4)+"png",r.Vb),r.ub(1),r.Qb("src",n.imageUrl.substring(0,n.imageUrl.length-4)+"png",r.Vb))},styles:['.about__container[_ngcontent-%COMP%]{display:grid;grid-template-areas:"text" "portrait"}.about__description-text[_ngcontent-%COMP%]{grid-area:text}.about__portrait-container[_ngcontent-%COMP%]{grid-area:portrait}.about__description[_ngcontent-%COMP%]{color:#e2e2e2;margin-bottom:2rem}.about__technology-list[_ngcontent-%COMP%]{display:grid;grid-column-gap:2rem;grid-template-columns:1fr 1fr;margin-bottom:2rem}.about__technology-list-item[_ngcontent-%COMP%]{margin-bottom:1rem}.about__portrait[_ngcontent-%COMP%]{border:1px solid #000;box-shadow:0 0 5px #444;max-height:720px;max-width:100%;width:auto}@media only screen and (min-width:768px){.about__container[_ngcontent-%COMP%]{grid-template-areas:"text portrait"}.about__container[_ngcontent-%COMP%]   .about__description-text[_ngcontent-%COMP%]{margin-right:2rem}.about__technology-list[_ngcontent-%COMP%]{margin-bottom:0}}']}),t})(),c=(()=>{class t{constructor(){this.tagline="I make techno music.",this.landing="I am a producer based out of Austin, TX."}ngOnInit(){}constructEmail(t,n){return`${t}@${n}.com`}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.xb({type:t,selectors:[["app-home-landing"]],inputs:{tagline:"tagline",landing:"landing"},decls:13,vars:3,consts:[[1,"section","landing"],[1,"landing__header"],[1,"landing__header--highlight"],[1,"landing__tagline"],[1,"landing__landing"],[1,"btn","landing__contact-btn",3,"href"]],template:function(t,n){1&t&&(r.Ib(0,"div",0),r.Ib(1,"h1",1),r.ac(2," Hi, my name is "),r.Eb(3,"br"),r.Ib(4,"span",2),r.ac(5,"Apellum."),r.Hb(),r.Hb(),r.Ib(6,"h2",3),r.ac(7),r.Hb(),r.Ib(8,"p",4),r.ac(9),r.Hb(),r.Eb(10,"br"),r.Ib(11,"a",5),r.ac(12,"Contact Me"),r.Hb(),r.Hb()),2&t&&(r.ub(7),r.bc(n.tagline),r.ub(2),r.bc(n.landing),r.ub(2),r.Qb("href","mailto:"+n.constructEmail("apellummusic","gmail"),r.Vb))},styles:[".landing[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:92vh;justify-content:center}.landing__header[_ngcontent-%COMP%]{color:#e2e2e2;font-weight:300;margin-bottom:2rem}.landing__header--highlight[_ngcontent-%COMP%]{color:#f9f9f9;font-weight:700}.landing__tagline[_ngcontent-%COMP%]{color:#e2e2e2;font-weight:500;margin-bottom:2rem}.landing__landing[_ngcontent-%COMP%]{color:#e2e2e2;font-weight:400;margin-bottom:2rem}.landing__contact-btn[_ngcontent-%COMP%]{font-size:120%;height:56px;line-height:56px;width:176px}@media only screen and (min-width:768px){.landing__header--highlight[_ngcontent-%COMP%]{font-size:180%}.landing__contact-btn[_ngcontent-%COMP%]{height:76px;line-height:76px}}"]}),t})();var l=e("Vyfh");function u(t,n){1&t&&(r.Ib(0,"div",2),r.Eb(1,"app-home-landing"),r.Eb(2,"app-home-about"),r.Eb(3,"div",3),r.Hb())}function g(t,n){1&t&&r.Eb(0,"app-loading-spinner")}const b=[{path:"",component:(()=>{class t{constructor(){this.isLoaded=!0}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.xb({type:t,selectors:[["app-home"]],decls:3,vars:2,consts:[["class","section-container home-view",4,"ngIf","ngIfElse"],["loading",""],[1,"section-container","home-view"],[1,"section-divider"]],template:function(t,n){if(1&t&&(r.Yb(0,u,4,0,"div",0),r.Yb(1,g,1,0,"ng-template",null,1,r.Zb)),2&t){const t=r.Tb(2);r.Qb("ngIf",n.isLoaded)("ngIfElse",t)}},directives:[i.t,c,s,l.d],encapsulation:2}),t})()}];let d=(()=>{class t{}return t.\u0275mod=r.Bb({type:t}),t.\u0275inj=r.Ab({factory:function(n){return new(n||t)},imports:[[o.d.forChild(b)],o.d]}),t})(),m=(()=>{class t{}return t.\u0275mod=r.Bb({type:t}),t.\u0275inj=r.Ab({factory:function(n){return new(n||t)},imports:[[i.c,a.a,d]]}),t})()}}]);