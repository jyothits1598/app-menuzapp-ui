(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{OwWB:function(e,t,n){"use strict";n.r(t),n.d(t,"LoginModule",(function(){return S}));var r=n("ofXK"),i=n("tyNb"),o=n("XNiG"),a=n("fXoL"),s=n("tk/3"),l=n("3Pt+"),d=n("n6ga"),c=n("3LUQ"),m=n("ej43");function u(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div"),a["\u0275\u0275text"](1," Email is required "),a["\u0275\u0275elementEnd"]())}function p(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div"),a["\u0275\u0275text"](1," Email is invalid "),a["\u0275\u0275elementEnd"]())}function g(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",22),a["\u0275\u0275template"](1,u,2,0,"div",23),a["\u0275\u0275template"](2,p,2,0,"div",23),a["\u0275\u0275elementEnd"]()),2&e){a["\u0275\u0275nextContext"]();const e=a["\u0275\u0275reference"](17);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==e||null==e.errors?null:e.errors.required),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==e||null==e.errors?null:e.errors.pattern)}}function h(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"p",22),a["\u0275\u0275text"](1," Password is required "),a["\u0275\u0275elementEnd"]())}const f=function(){return["/signup"]},v=function(){return["/forgot-password"]},w=i.f.forChild([{path:"",component:(()=>{class e{constructor(e,t,n,r,i,a,s){this.router=e,this.http=t,this.route=n,this.formBuilder=r,this.restApiservice=i,this.alertservice=a,this.authenticateService=s,this.unsubscribe$=new o.a,this.email_error=!1,this.password_error=!1,this.showNotificationMessage="",this.notification_color="red",this.showNotificationStatus=!1,this.router.navigateByUrl("/login")}ngOnInit(){this.returnUrl=this.route.snapshot.queryParams.returnUrl||"",localStorage.getItem("Audit_Auth")&&localStorage.getItem("loggedUser")&&this.router.navigateByUrl("/dashboard"),this.alertservice.getNotification().subscribe(({message:e,alertType:t})=>{this.showNotificationMessage="",e?("error"==t&&(this.notification_color="red"),this.showNotificationMessage=e,this.showNotificationStatus=!0,setTimeout(()=>{this.showNotificationStatus=!1},5e3)):this.showNotificationStatus=!1}),$(".toggle-password").click((function(){$(this).toggleClass("fa-eye fa-eye-slash");var e=$($(this).attr("toggle"));"password"==e.attr("type")?e.attr("type","text"):e.attr("type","password")}))}login(e){localStorage.getItem("Audit_Auth")&&localStorage.getItem("expire_time")&&this.authenticateService.checkExpiryStatus();var t=new RegExp("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}");this.email&&this.email.trim()&&t.test(this.email.trim())&&this.password&&this.password.trim()?this.authenticateService.login({email:this.email.trim(),password:this.password.trim()},this.returnUrl):(this.email_error=!this.email,this.email_error=!t.test(this.email),this.password_error=!this.password)}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](i.b),a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](i.a),a["\u0275\u0275directiveInject"](l.d),a["\u0275\u0275directiveInject"](d.a),a["\u0275\u0275directiveInject"](c.a),a["\u0275\u0275directiveInject"](m.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-login"]],decls:35,vars:10,consts:[[1,"navbar","btn-pd","justify-content-between"],[1,"navbar-brand",2,"font-size","24px"],[1,"btn-names"],["title","Signup",2,"text-decoration","none","color","#fff",3,"routerLink"],[1,"container"],[1,"signin-card"],[1,"login-header","mb-4"],["id","Login",1,"user",3,"ngSubmit"],["loginForm","ngForm"],[1,"row"],[1,"col-md-12"],[1,"form-group"],["email","","pattern","[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}","placeholder","Email","type","email","required","","id","email","name","email",1,"form-control","form-input",3,"ngModel","ngModelChange"],["useremail","ngModel"],["class","error-mez",4,"ngIf"],["required","","placeholder","Password","type","password","id","password","name","password",1,"form-control","form-input","custom-password-eye",3,"ngModel","ngModelChange"],["userpassword","ngModel"],["toggle","#password",1,"fa","fa-eye-slash","field-icon","toggle-password"],["type","submit","value","Login",1,"btn","btn-custom"],[1,"text-center","mt-4"],["title","Forgot password",1,"default-text",3,"routerLink"],["title","signup",1,"default-text",3,"routerLink"],[1,"error-mez"],[4,"ngIf"]],template:function(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"nav"),a["\u0275\u0275elementStart"](1,"div",0),a["\u0275\u0275elementStart"](2,"a",1),a["\u0275\u0275text"](3," menuzapp "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"div",2),a["\u0275\u0275elementStart"](5,"a",3),a["\u0275\u0275text"](6,"Don't have an account? Register now "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"div",4),a["\u0275\u0275elementStart"](8,"div",5),a["\u0275\u0275elementStart"](9,"div",6),a["\u0275\u0275text"](10," Menuzapp Restaurant login "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"form",7,8),a["\u0275\u0275listener"]("ngSubmit",(function(){a["\u0275\u0275restoreView"](e);const n=a["\u0275\u0275reference"](12);return t.login(n)})),a["\u0275\u0275elementStart"](13,"div",9),a["\u0275\u0275elementStart"](14,"div",10),a["\u0275\u0275elementStart"](15,"div",11),a["\u0275\u0275elementStart"](16,"input",12,13),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.email=e})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](18,g,3,2,"div",14),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](19,"div",10),a["\u0275\u0275elementStart"](20,"div",11),a["\u0275\u0275elementStart"](21,"input",15,16),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.password=e})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](23,"span",17),a["\u0275\u0275template"](24,h,2,0,"p",14),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](25,"div",10),a["\u0275\u0275elementStart"](26,"div",11),a["\u0275\u0275element"](27,"input",18),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](28,"div",10),a["\u0275\u0275elementStart"](29,"div",19),a["\u0275\u0275elementStart"](30,"a",20),a["\u0275\u0275text"](31,"Forgot password"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](32,"div",19),a["\u0275\u0275elementStart"](33,"a",21),a["\u0275\u0275text"](34,"Register an account"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=a["\u0275\u0275reference"](17),n=a["\u0275\u0275reference"](22);a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("routerLink",a["\u0275\u0275pureFunction0"](7,f)),a["\u0275\u0275advance"](11),a["\u0275\u0275property"]("ngModel",t.email),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",e.touched&&e.invalid||t.email_error),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngModel",t.password),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngIf",n.touched&&n.invalid||t.password_error),a["\u0275\u0275advance"](6),a["\u0275\u0275property"]("routerLink",a["\u0275\u0275pureFunction0"](8,v)),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("routerLink",a["\u0275\u0275pureFunction0"](9,f))}},directives:[i.e,l.u,l.k,l.l,l.b,l.c,l.o,l.q,l.j,l.m,r.j],styles:[".login-header[_ngcontent-%COMP%]{text-align:center;font-size:22px;color:#000;font-style:normal;font-weight:600}.btn-custom[_ngcontent-%COMP%]{background:#353fa8;color:#fff;border-radius:0!important;width:100%;text-align:center}.default-text[_ngcontent-%COMP%]{color:#353fa8;font-style:normal;font-weight:700;text-decoration:none}.signin-card[_ngcontent-%COMP%]{margin:0 auto 25px;max-width:300px;padding-top:100px}input.custom-password-eye[_ngcontent-%COMP%]{padding-right:30px}.field-icon[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:10px;right:25px;z-index:1;color:#b3b3b3}"]}),e})()}]);let S=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.b,w,l.p,l.g]]}),e})()}}]);