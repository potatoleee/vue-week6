import{_ as l,R as p,r as c,o as _,c as m,a as o,w as n,b as e,d as u,k,F as f}from"./index-deebbf1e.js";const{VITE_APP_URL:i}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/vue-week6/",MODE:"production",DEV:!1,PROD:!0},$={methods:{logout(){this.$http.post(`${i}/logout`).then(()=>{document.cookie=`hexToken=; expires=${new Date};`,alert("token 已清除 已登出"),this.$router.push("/login")})},checkAdmin(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a,this.$http.post(`${i}/api/user/check`).then(t=>{console.log(t.data)}).catch(()=>{alert("請先登入帳號密碼喔～感謝你！"),this.$router.back("/login")})}},mounted(){this.checkAdmin()},components:{RouterView:p}},R=u("h1",null,"這是後台儀表板",-1);function V(a,t,w,x,g,r){const s=c("RouterLink"),d=c("RouterView");return _(),m(f,null,[R,o(s,{to:"/admin/products"},{default:n(()=>[e("產品管理")]),_:1}),e("| "),o(s,{to:"/admin/orders"},{default:n(()=>[e("訂單管理")]),_:1}),e("| "),o(s,{to:"/"},{default:n(()=>[e("回到前台首頁")]),_:1}),e("| "),u("a",{href:"#",onClick:t[0]||(t[0]=k((...h)=>r.logout&&r.logout(...h),["prevent"]))},"登出"),o(d)],64)}const P=l($,[["render",V]]);export{P as default};