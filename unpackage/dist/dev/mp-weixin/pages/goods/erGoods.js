(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/erGoods"],{242:
/*!****************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/main.js?{"page":"pages%2Fgoods%2FerGoods"} ***!
  \****************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";(function(t){e(/*! uni-pages */4);o(e(/*! vue */2));var n=o(e(/*! ./pages/goods/erGoods.vue */243));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["createPage"])},243:
/*!*********************************************************!*\
  !*** C:/Users/love/Desktop/h52/pages/goods/erGoods.vue ***!
  \*********************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var o=e(/*! ./erGoods.vue?vue&type=template&id=3c084147&scoped=true& */244),r=e(/*! ./erGoods.vue?vue&type=script&lang=js& */246);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e(/*! ./erGoods.vue?vue&type=style&index=0&id=3c084147&scoped=true&lang=less& */248);var a,u=e(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */12),c=Object(u["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"3c084147",null,!1,o["components"],a);c.options.__file="pages/goods/erGoods.vue",n["default"]=c.exports},244:
/*!****************************************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/pages/goods/erGoods.vue?vue&type=template&id=3c084147&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,n,e){"use strict";e.r(n);var o=e(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./erGoods.vue?vue&type=template&id=3c084147&scoped=true& */245);e.d(n,"render",(function(){return o["render"]})),e.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),e.d(n,"components",(function(){return o["components"]}))},245:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/pages/goods/erGoods.vue?vue&type=template&id=3c084147&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,n,e){"use strict";var o;e.r(n),e.d(n,"render",(function(){return r})),e.d(n,"staticRenderFns",(function(){return a})),e.d(n,"recyclableRender",(function(){return i})),e.d(n,"components",(function(){return o}));var r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.goodsData,(function(n,e){var o=t.__get_orig(n),r=n.price.split("."),i=n.price.split(".");return{$orig:o,g0:r,g1:i}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},i=!1,a=[];r._withStripped=!0},246:
/*!**********************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/pages/goods/erGoods.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var o=e(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./erGoods.vue?vue&type=script&lang=js& */247),r=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=r.a},247:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/pages/goods/erGoods.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={components:{},data:function(){return{fenId:"",title:"",goodsData:[]}},onLoad:function(){var t=getCurrentPages(),n=t[t.length-1].options;this.fenId=n.id,this.title=n.pname,console.log(this.fenId,this.title,"ggg"),this.init()},methods:{init:function(){var t=this;this.$http.post("",{store_id:1,store_type:2,module:"app",action:"index",app:"productByCate",cid:this.fenId}).then((function(n){console.log(n,"hh"),t.goodsData=n.data.data.data}))},back:function(){t.navigateBack({delta:1})},alikeGoods:function(n){t.navigateTo({url:"/pages/goods/alikeGoods?id="+n})}}};n.default=e}).call(this,e(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},248:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/pages/goods/erGoods.vue?vue&type=style&index=0&id=3c084147&scoped=true&lang=less& ***!
  \*******************************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var o=e(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./erGoods.vue?vue&type=style&index=0&id=3c084147&scoped=true&lang=less& */249),r=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=r.a},249:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/pages/goods/erGoods.vue?vue&type=style&index=0&id=3c084147&scoped=true&lang=less& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,e){}},[[242,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goods/erGoods.js.map