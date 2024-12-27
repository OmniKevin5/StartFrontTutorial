/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as a,jsxs as g}from"@dropins/tools/preact-jsx-runtime.js";import{classes as h}from"@dropins/tools/lib.js";import{Card as q,Header as R}from"@dropins/tools/components.js";import{useState as P,useEffect as S,useMemo as T}from"@dropins/tools/preact-hooks.js";import"../chunks/ShippingStatusCard.js";import"@dropins/tools/preact-compat.js";import{u as b}from"../chunks/useGetStoreConfig.js";import{Fragment as x}from"@dropins/tools/preact.js";import{events as N}from"@dropins/tools/event-bus.js";import{s as Q}from"../chunks/setTaxStatus.js";import{a as k}from"../chunks/OrderLoaders.js";import{C as G}from"../chunks/CartSummaryItem.js";import{useText as M}from"@dropins/tools/i18n.js";import"../chunks/getStoreConfig.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";const v=({orderData:n})=>{const[u,i]=P(!0),[e,r]=P(n);return S(()=>{const t=N.on("order/data",o=>{r(o),i(!1)},{eager:!0});return()=>{t==null||t.off()}},[]),{loading:u,order:e}},Y=({className:n,orderData:u,withHeader:i,showConfigurableOptions:e,routeProductDetails:r})=>{const t=b(),{loading:o,order:d}=v({orderData:u});return a("div",{className:h(["order-order-product-list",n]),children:a(I,{loading:o,placeholderImage:(t==null?void 0:t.baseMediaUrl)??"",taxConfig:Q((t==null?void 0:t.shoppingCartDisplayPrice)??0),order:d,withHeader:i,showConfigurableOptions:e,routeProductDetails:r})})},w=n=>{const u=(n==null?void 0:n.items)??[],i=u.filter(t=>(t==null?void 0:t.eligibleForReturn)&&(t==null?void 0:t.quantityReturnRequested)).map(t=>({...t,totalQuantity:t.quantityReturnRequested})),e=new Map(i.map(t=>[t.id,t])),r=u.map(t=>{const o=e.get(t==null?void 0:t.id);if(o){const d=t.totalQuantity-o.quantityReturnRequested;return d===0?null:{...t,totalQuantity:d}}return t}).filter(t=>t!==null);return{returnedList:i,canceledItems:r==null?void 0:r.filter(t=>t.quantityCanceled),nonCanceledItems:r==null?void 0:r.filter(t=>!t.quantityCanceled)}},I=({placeholderImage:n,loading:u,taxConfig:i,order:e=null,withHeader:r=!0,showConfigurableOptions:t,routeProductDetails:o})=>{const d=!!(e!=null&&e.returnNumber),c=M({cancelled:"Order.OrderProductListContent.cancelledTitle",allOrders:"Order.OrderProductListContent.allOrdersTitle",returned:"Order.OrderProductListContent.returnedTitle",refunded:"Order.OrderProductListContent.refundedTitle",sender:"Order.OrderProductListContent.GiftCard.sender",recipient:"Order.OrderProductListContent.GiftCard.recipient",message:"Order.OrderProductListContent.GiftCard.message",outOfStock:"Order.OrderProductListContent.stockStatus.outOfStock",downloadableCount:"Order.OrderProductListContent.downloadableCount"}),L=T(()=>{var p,f;if(!e)return[];if(!d){const{returnedList:s,canceledItems:m,nonCanceledItems:O}=w(e);return[{type:"returned",list:s,title:c.returned},{type:"cancelled",list:m,title:c.cancelled},{type:"allItems",list:O,title:c.allOrders}].filter(C=>{var y;return((y=C==null?void 0:C.list)==null?void 0:y.length)>0})}return[{type:"returned",list:((f=(p=e.returns.find(s=>s.returnNumber===(e==null?void 0:e.returnNumber)))==null?void 0:p.items)==null?void 0:f.map(s=>({...s,totalQuantity:s.requestQuantity})))??[],title:c.returned}]},[e,d,c]);return e?L.every(l=>l.list.length===0)?null:a(q,{variant:"secondary",className:"order-order-product-list-content",children:L.map((l,p)=>{var s;const f=l.list.reduce((m,{totalQuantity:O})=>O+m,0);return g(x,{children:[r?a(R,{title:`${l.title} (${f})`}):null,a("ul",{className:"order-order-product-list-content__items",children:(s=l.list)==null?void 0:s.map(m=>a("li",{"data-testid":"order-product-list-content-item",children:a(G,{placeholderImage:n,loading:u,product:m,itemType:l.type,taxConfig:i,translations:c,showConfigurableOptions:t,routeProductDetails:o})},m.id))})]},p)})}):a(k,{})};export{Y as OrderProductList,Y as default};