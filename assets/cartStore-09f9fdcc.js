import{f as d,g as s}from"./index-d8960d07.js";import{S as r}from"./sweetalert2.all-930fe38b.js";const l=d("loadingStore",{state:()=>({loadingItem:"",isLoading:!1})}),n=l(),{VITE_APP_URL:i,VITE_APP_PATH:o}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/vue-week6/",MODE:"production",DEV:!1,PROD:!0},h=d("cartStore",{state:()=>({cart:{}}),actions:{addToCart(t){const e={product_id:t,qty:1};this.loadingItem=t,s.post(`${i}/api/${o}/cart`,{data:e}).then(()=>{this.getCartList(),r.fire({position:"top-end",icon:"success",title:"已加入購物車",showConfirmButton:!1,timer:800}),this.loadingItem=""}).catch(a=>{alert(a.response.data.message)})},getCartList(){n.isLoading=!0,s.get(`${i}/api/${o}/cart`).then(t=>{this.cart=t.data.data}).catch(t=>{alert(t.response.data.message)}).finally(()=>{n.isLoading=!1})},updateCartItem(t){const e={product_id:t.product_id,qty:t.qty};this.loadingItem=t.id,s.put(`${i}/api/${o}/cart/${t.id}`,{data:e}).then(a=>{console.log(a),this.getCartList(),this.loadingItem=""}).catch(a=>{alert(a.response.data.message)})},deleteCartItem(t){n.isLoading=!0,this.loadingItem=t.id,s.delete(`${i}/api/${o}/cart/${t.id}`).then(()=>{r.fire({position:"top-end",icon:"success",title:"已刪除品項",showConfirmButton:!1,timer:800}),this.getCartList(),this.loadingItem=""}).catch(e=>{alert(e.response.data.message)}).finally(()=>{n.isLoading=!1})},deleteAllCartItem(){s.delete(`${i}/api/${o}/carts`).then(()=>{r.fire({position:"top-end",icon:"success",title:"已刪除全部品項",showConfirmButton:!1,timer:800}),this.getCartList()}).catch(t=>{alert(t.response.data.message)})}},getters:{cartList:({cart:t})=>t}});export{h as c,l};