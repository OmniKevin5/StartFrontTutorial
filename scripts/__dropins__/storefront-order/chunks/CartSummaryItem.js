/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as v,jsxs as S,Fragment as _}from"@dropins/tools/preact-jsx-runtime.js";import{Price as P,Image as T,CartItem as g,Icon as u,Incrementer as o}from"@dropins/tools/components.js";import{useCallback as G}from"@dropins/tools/preact-hooks.js";import{classes as J}from"@dropins/tools/lib.js";import{O as r}from"./OrderLoaders.js";import*as M from"@dropins/tools/preact-compat.js";const c=k=>M.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...k},M.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),M.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.75 5.88423V4.75H12.25V5.88423L12.0485 13.0713H11.9515L11.75 5.88423ZM11.7994 18.25V16.9868H12.2253V18.25H11.7994Z",stroke:"currentColor"})),se=({placeholderImage:k="",loading:X,product:e,itemType:Y,taxConfig:D,translations:h,disabledIncrementer:i,onQuantity:E,showConfigurableOptions:V,routeProductDetails:w})=>{var q,x,O,W,$,z,B,F,K,R,U;const{taxExcluded:f,taxIncluded:L}=D,t=G((m,H,b)=>v(P,{amount:m,currency:H,weight:"normal",...b}),[]),Z=G(m=>{var b,A;const H=(b=m==null?void 0:m.product)!=null&&b.thumbnail.url.length?(A=m==null?void 0:m.product)==null?void 0:A.thumbnail.url:k;return v(T,{src:H,alt:m==null?void 0:m.productName,loading:"lazy",width:"90",height:"120"})},[k]);if(!e)return v(r,{});let N={};const Q=Y==="cancelled",C=(x=(q=e==null?void 0:e.product)==null?void 0:q.stockStatus)==null?void 0:x.includes("IN_STOCK"),l=e==null?void 0:e.giftCard,a=(O=e==null?void 0:e.itemPrices)==null?void 0:O.priceIncludingTax,s=(W=e==null?void 0:e.itemPrices)==null?void 0:W.originalPrice,n=($=e==null?void 0:e.itemPrices)==null?void 0:$.price,I=e.totalQuantity>1?{quantity:e.totalQuantity}:{},y=e.discounted&&((z=e.price)==null?void 0:z.value)!==(s==null?void 0:s.value)*(e==null?void 0:e.totalQuantity),j={...(e==null?void 0:e.configurableOptions)||{},...(e==null?void 0:e.bundleOptions)||{},...l!=null&&l.senderName?{[h.sender]:l==null?void 0:l.senderName}:{},...l!=null&&l.senderEmail?{[h.sender]:l==null?void 0:l.senderEmail}:{},...l!=null&&l.senderName?{[h.sender]:l==null?void 0:l.senderName}:{},...l!=null&&l.recipientEmail?{[h.recipient]:l==null?void 0:l.recipientEmail}:{},...l!=null&&l.message?{[h.message]:l==null?void 0:l.message}:{},...e!=null&&e.downloadableLinks?{[`${(B=e==null?void 0:e.downloadableLinks)==null?void 0:B.count} ${h.downloadableCount}`]:(F=e==null?void 0:e.downloadableLinks)==null?void 0:F.result}:{}};if(L&&f){const m=y?s==null?void 0:s.value:(a==null?void 0:a.value)*(e==null?void 0:e.totalQuantity);N={taxExcluded:!0,taxIncluded:void 0,price:t(s==null?void 0:s.value,s==null?void 0:s.currency),total:S(_,{children:[t(m,s==null?void 0:s.currency,{variant:e.discounted&&(a==null?void 0:a.value)!==m?"strikethrough":"default"}),e.discounted&&(a==null?void 0:a.value)!==m?t(a==null?void 0:a.value,a==null?void 0:a.currency,{sale:!0,weight:"bold"}):null]}),totalExcludingTax:t((n==null?void 0:n.value)*e.totalQuantity,n==null?void 0:n.currency)}}else if(!L&&f)N={taxExcluded:void 0,taxIncluded:void 0,price:t(s==null?void 0:s.value,s==null?void 0:s.currency),total:S(_,{children:[t((s==null?void 0:s.value)*(e==null?void 0:e.totalQuantity),a==null?void 0:a.currency,{variant:y?"strikethrough":"default"}),y?t((K=e.price)==null?void 0:K.value,(R=e.price)==null?void 0:R.currency,{sale:!0,weight:"bold"}):null]}),totalExcludingTax:t((n==null?void 0:n.value)*(e==null?void 0:e.totalQuantity),n==null?void 0:n.currency)};else if(L&&!f){const m=y?s.value:a.value*e.totalQuantity;N={taxExcluded:void 0,taxIncluded:!0,price:t(a==null?void 0:a.value,a==null?void 0:a.currency),total:S(_,{children:[t(m,a==null?void 0:a.currency,{variant:y?"strikethrough":"default",weight:"bold"}),y?t(a==null?void 0:a.value,a==null?void 0:a.currency,{sale:!0,weight:"bold"}):null]})}}return v(g,{loading:X,alert:Q&&C?S("span",{children:[v(u,{source:c}),h.outOfStock]}):v(_,{}),configurations:(V==null?void 0:V(j))??j,title:w?v("a",{"data-testid":"product-name",className:J(["cart-summary-item__title",["cart-summary-item__title--strikethrough",Q]]),href:w(e),children:e==null?void 0:e.productName}):v("div",{"data-testid":"product-name",className:J(["cart-summary-item__title",["cart-summary-item__title--strikethrough",Q]]),children:e==null?void 0:e.productName}),sku:v("div",{children:(U=e==null?void 0:e.product)==null?void 0:U.sku}),...I,image:w?v("a",{href:w(e),children:Z(e)}):Z(e),...N,footer:E&&!i?v(o,{value:1,min:1,max:e==null?void 0:e.totalQuantity,onValue:m=>E==null?void 0:E(Number(m)),name:"quantity","data-testid":"returnIncrementer",readonly:!0}):void 0})};export{se as C,c as S};