import{_ as f,e as L,r,o as i,c,a as l,d as s,F as d,f as P,w as T,t as u}from"./index-deebbf1e.js";const{VITE_APP_URL:_,VITE_APP_PATH:p}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/vue-week6/",MODE:"production",DEV:!1,PROD:!0},k={data(){return{productList:[],isLoading:!1}},methods:{getProductList(){this.isLoading=!0,this.$http.get(`${_}/api/${p}/products/all`).then(e=>{console.log(e.data.products),this.productList=e.data.products}).catch(e=>{alert(e.data.message)}).finally(()=>{this.isLoading=!1})},addToCart(e){const o={product_id:e,qty:1};this.$http.post(`${_}/api/${p}/cart`,{data:o}).then(a=>{alert(a.data.message),console.log(a.data)})}},mounted(){this.getProductList()},components:{RouterLink:L}},V={class:"col-12 col-md-10"},v={class:"row gy-6"},$=["src"],x={class:"font-serifTc fs-6 fs-md-5 mb-4 text-center letterSpace-2"},E={class:"font-serifTc mb-4 text-center letterSpace-4"},y=["onClick"];function A(e,o,a,R,n,h){const m=r("VueLoading"),g=r("RouterLink");return i(),c(d,null,[l(m,{active:n.isLoading,"onUpdate:active":o[0]||(o[0]=t=>n.isLoading=t)},null,8,["active"]),s("div",V,[s("ul",v,[(i(!0),c(d,null,P(n.productList,t=>(i(),c("li",{class:"col-6 col-lg-4 px-md-6",key:t.id},[l(g,{to:`/product/${t.id}`},{default:T(()=>[s("img",{class:"rounded-2 img-fluid",src:t.imageUrl,alt:""},null,8,$)]),_:2},1032,["to"]),s("h3",x,u(t.title),1),s("p",E," NT$ "+u(t.price),1),s("button",{type:"button",class:"btn btn-primary",onClick:b=>h.addToCart(t.id)}," 加入購物車 ",8,y)]))),128))])])],64)}const C=f(k,[["render",A]]);export{C as default};