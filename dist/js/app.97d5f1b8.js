(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},i=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=l;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"13c7":function(e,t,s){},"14d4":function(e,t,s){e.exports=s.p+"img/vue_gram_logo_cp.6eb5553c.png"},2886:function(e,t,s){},"2eb7":function(e,t,s){"use strict";var a=s("13c7"),n=s.n(a);n.a},"32a8":function(e,t,s){"use strict";var a=s("2886"),n=s.n(a);n.a},"34d0":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"app-phone"},[a("div",{staticClass:"phone-header"},[2===e.step||3===e.step?a("a",{staticClass:"cancel-cta",on:{click:e.goToHome}},[e._v("取消")]):e._e(),a("img",{attrs:{src:s("14d4"),alt:""}}),2===e.step?a("a",{staticClass:"next-cta",on:{click:function(t){e.step++}}},[e._v("下一步")]):e._e(),3===e.step?a("a",{staticClass:"next-cta",on:{click:e.share}},[e._v("发表")]):e._e()]),a("PhoneBody",{attrs:{posts:e.posts,filters:e.filters,step:e.step,image:e.image,selectFilter:e.selectFilter},model:{value:e.caption,callback:function(t){e.caption=t},expression:"caption"}}),a("div",{staticClass:"phone-footer"},[a("div",{staticClass:"home-cta"},[a("i",{staticClass:"fa fa-home",on:{click:e.goToHome}})]),a("div",{staticClass:"upload-cta"},[a("input",{attrs:{type:"file",id:"file",name:"file",disabled:1!==e.step},on:{input:e.uploadImage}}),e._m(0)])])],1)])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{attrs:{for:"file"}},[s("i",{staticClass:"fa fa-plus-square-o"})])}],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"phone-body"},[1===e.step?s("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"feed"},e._l(e.posts,(function(e,t){return s("VuegramPost",{key:t,attrs:{post:e}})})),1):e._e(),2===e.step?s("div",[s("div",{staticClass:"selected-image",class:e.selectFilter,style:{backgroundImage:"url("+e.image+")"}}),s("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"filter-container"},e._l(e.filters,(function(t){return s("FilterType",{key:t.name,attrs:{filter:t,image:e.image}})})),1)]):e._e(),3===e.step?s("div",[s("div",{staticClass:"selected-image",class:e.selectFilter,style:{backgroundImage:"url("+e.image+")"}}),s("div",{staticClass:"caption-container"},[s("textarea",{attrs:{placeholder:"这一刻的想法..."},domProps:{value:e.value},on:{input:e.inputText}})])]):e._e()])},o=[],l=(s("a9e3"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vuegram-post"},[s("div",{staticClass:"header level"},[s("div",{staticClass:"level-left"},[s("figure",{staticClass:"image is-32x32"},[s("img",{attrs:{src:e.post.userImage}})]),s("span",{staticClass:"username"},[e._v(e._s(e.post.username))])])]),s("div",{staticClass:"image-container",class:e.post.filter,style:{backgroundImage:"url("+e.post.postImage+")"},on:{dblclick:e.clicklike}}),s("div",{staticClass:"content"},[s("div",{staticClass:"heart"},[s("i",{staticClass:"fa",class:e.iClass,on:{click:e.clicklike}})]),s("div",{staticClass:"likes"},[e._v(" "+e._s(e.post.likes)+" likes ")]),s("p",{staticClass:"caption"},[s("span",[e._v(e._s(e.post.username))]),e._v(" "+e._s(e.post.caption)+" ")])])])}),c=[],p={props:{post:Object},methods:{clicklike:function(){this.post.hasBeenLiked?this.post.likes--:this.post.likes++,this.post.hasBeenLiked=!this.post.hasBeenLiked}},computed:{iClass:function(){return{"fa-heart":this.post.hasBeenLiked,"fa-heart-o":!this.post.hasBeenLiked}}}},u=p,m=(s("a2a1"),s("2877")),d=Object(m["a"])(u,l,c,!1,null,null,null),f=d.exports,g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"filter-type"},[s("p",[e._v(e._s(e.filter.name))]),s("div",{staticClass:"img",class:e.filter.name,style:{backgroundImage:"url("+e.image+")"},on:{click:e.selectFilter}})])},h=[],v=(s("4de4"),s("b0c0"),new a["a"]),_={props:{filter:Object,image:String},methods:{selectFilter:function(){v.$emit("selectedFilter",this.filter.name)}}},k=_,b=(s("bf76"),Object(m["a"])(k,g,h,!1,null,null,null)),w=b.exports,y={props:{posts:Array,filters:Array,step:Number,image:String,selectFilter:String,value:String},components:{VuegramPost:f,FilterType:w},methods:{inputText:function(e){this.$emit("input",e.target.value)}}},C=y,j=(s("2eb7"),Object(m["a"])(C,r,o,!1,null,null,null)),x=j.exports,I=[{username:"liuluwei",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tropical_beach.jpg",likes:36,hasBeenLiked:!1,caption:"When you're ready for summer '18 ☀️",filter:"perpetua"},{username:"cc",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg",likes:20,hasBeenLiked:!1,caption:"Views from the six...",filter:"clarendon"},{username:"ice",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg",likes:49,hasBeenLiked:!1,caption:"Current mood 🐶",filter:"lofi"},{username:"ice",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg",likes:49,hasBeenLiked:!1,caption:"Current mood 🐶",filter:"lofi"}],O=[{name:"normal"},{name:"clarendon"},{name:"gingham"},{name:"moon"},{name:"lark"},{name:"reyes"},{name:"juno"},{name:"slumber"},{name:"aden"},{name:"perpetua"},{name:"mayfair"},{name:"rise"},{name:"hudson"},{name:"valencia"},{name:"xpro2"},{name:"willow"},{name:"lofi"},{name:"inkwell"},{name:"nashville"}],F={name:"app",created:function(){var e=this;v.$on("selectedFilter",(function(t){e.selectFilter=t}))},data:function(){return{posts:I,filters:O,step:1,image:"",selectFilter:"",caption:""}},methods:{uploadImage:function(e){var t=this,s=e.target.files;if(s.length){var a=new FileReader;a.readAsDataURL(s[0]),a.onload=function(e){t.image=e.target.result,t.step=2}}},goToHome:function(){this.image="",this.selectFilter="",this.step=1},share:function(){var e={username:"fanghuayong",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",postImage:this.image,likes:0,hasBeenLiked:!1,caption:this.caption,filter:this.selectFilter};this.posts.unshift(e),this.goToHome()}},components:{PhoneBody:x}},B=F,P=(s("32a8"),Object(m["a"])(B,n,i,!1,null,null,null)),L=P.exports,T=s("5b6c"),z=s.n(T);a["a"].use(z.a),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(L)}}).$mount("#app")},5923:function(e,t,s){},a2a1:function(e,t,s){"use strict";var a=s("5923"),n=s.n(a);n.a},bf76:function(e,t,s){"use strict";var a=s("34d0"),n=s.n(a);n.a}});
//# sourceMappingURL=app.97d5f1b8.js.map