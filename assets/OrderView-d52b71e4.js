import{S as u}from"./sweetalert2.all-701279fd.js";import{_,r as m,o as p,c as b,d as a,w as h,b as e,n as d,p as V,q as v}from"./index-b687e0c4.js";const{VITE_APP_URL:D,VITE_APP_PATH:P}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/vue-week6/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{orderData:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{isPhone(t){return/^(09)[0-9]{8}$/.test(t)?!0:"請填寫正確的手機號碼格式"},createOrder(){this.isLoading=!0,this.$http.post(`${D}/api/${P}/order`,{data:this.orderData}).then(t=>{console.log(t),this.$refs.form.resetForm(),this.orderData.message="",u.fire({position:"top-end",icon:"success",title:"訂單建立成功",showConfirmButton:!1,timer:1500})}).catch(()=>{u.fire({position:"top-end",icon:"success",title:"訂單建立失敗，請確認",showConfirmButton:!1,timer:1500})})}}},g={class:"my-5 row justify-content-center"},w={class:"mb-3"},x=e("label",{for:"email",class:"form-label"},"Email",-1),k={class:"mb-3"},U=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),y={class:"mb-3"},A=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),T={class:"mb-3"},B=e("label",{for:"address",class:"form-label"},"收件人地址",-1),C={class:"mb-3"},F=e("label",{for:"message",class:"form-label"},"留言",-1),O=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function S(t,s,q,I,o,c){const r=m("VField"),n=m("ErrorMessage"),f=m("VForm");return p(),b("div",g,[a(f,{ref:"form",class:"col-md-6",onSubmit:c.createOrder},{default:h(({errors:i})=>[e("div",w,[x,a(r,{id:"email",name:"email",type:"email",class:d(["form-control",{"is-invalid":i.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.orderData.user.email,"onUpdate:modelValue":s[0]||(s[0]=l=>o.orderData.user.email=l)},null,8,["class","modelValue"]),a(n,{name:"email",class:"invalid-feedback"})]),e("div",k,[U,a(r,{id:"name",name:"姓名",type:"text",class:d(["form-control",{"is-invalid":i.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.orderData.user.name,"onUpdate:modelValue":s[1]||(s[1]=l=>o.orderData.user.name=l)},null,8,["class","modelValue"]),a(n,{name:"姓名",class:"invalid-feedback"})]),e("div",y,[A,a(r,{id:"tel",name:"電話",type:"tel",class:d(["form-control",{"is-invalid":i.電話}]),placeholder:"請輸入電話",rules:c.isPhone,modelValue:o.orderData.user.tel,"onUpdate:modelValue":s[2]||(s[2]=l=>o.orderData.user.tel=l)},null,8,["class","rules","modelValue"]),a(n,{name:"電話",class:"invalid-feedback"})]),e("div",T,[B,a(r,{id:"address",name:"地址",type:"text",class:d(["form-control",{"is-invalid":i.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:o.orderData.user.address,"onUpdate:modelValue":s[3]||(s[3]=l=>o.orderData.user.address=l)},null,8,["class","modelValue"]),a(n,{name:"地址",class:"invalid-feedback"})]),e("div",C,[F,V(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=l=>o.orderData.message=l)},null,512),[[v,o.orderData.message]])]),O]),_:1},8,["onSubmit"])])}const N=_(E,[["render",S]]);export{N as default};