(function(e){function t(t){for(var i,r,o=t[0],l=t[1],u=t[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);c&&c(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},s={app:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/ligun0805.github.io/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0334":function(e,t,n){"use strict";var i=n("b48a"),s=n.n(i);s.a},"3b29":function(e,t,n){},"3b9a":function(e,t,n){},"3cd9":function(e,t,n){"use strict";var i=n("3b9a"),s=n.n(i);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("SimonGame")],1)},a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"simonGameWrap"},[n("div",{staticClass:"simonCircleWrap",class:{beingHighlighted:e.isHighlighting,gameNotOn:!e.isGameOn}},e._l(e.sectors,(function(t){var i;return n("div",{key:t.id,class:(i={},i[t.class]=!0,i["sector_highlighted"]=t.isHighlighted,i),on:{click:function(n){return e.handleSectorClick(t.id)}}})})),0),n("div",{staticClass:"infoAndControls"},[e.isUserFail?e._e():n("p",{staticClass:"roundNumber"},[e._v(" "+e._s(e.languagesLocales.round)+": "+e._s(e.roundNumber)+" ")]),n("div",{on:{click:e.startTheGame}},[e.isGameOn?e._e():n("Button",{attrs:{type:"button",filled:"",label:e.languagesLocales.startTheGameButtonLabel}})],1),e.isUserFail?n("p",{staticClass:"lossAlert"},[e._v(" "+e._s(e.languagesLocales.youLostAlert)+" ")]):e._e(),n("div",{staticClass:"setLevelButtons"},[n("p",{staticClass:"levelLabel"},[e._v("Уровень сложности ")]),n("RadioInput",{attrs:{flex_column:"",disabled:e.isHighlighting,name:e.levelButtons.name,buttons:e.levelButtons.buttons,defaultValue:e.levelButtons.value},on:{"update-input-data":e.setLevel}})],1)])])},o=[],l=(n("4160"),n("d81d"),n("4fad"),n("159b"),n("3835")),u=n("ef4b"),c=n.n(u),d=n("ed16"),h=n.n(d),g=n("88d4"),f=n.n(g),m=n("a1c7"),p=n.n(m),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:{button:!0,button_filled:e.filled,button_hollow:e.hollow,button_disabled:e.disabled},attrs:{disabled:e.disabled,type:e.type}},[e._v(" "+e._s(e.label)+" ")])},v=[],y={name:"Button",props:{type:{type:String,default:"submit"},label:{type:String,required:!0},disabled:Boolean,filled:Boolean,hollow:Boolean}},S=y,_=(n("3cd9"),n("2877")),L=Object(_["a"])(S,b,v,!1,null,"5a4309cc",null),A=L.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"radioButtonsWrap"},[e.isRequired?n("p",{class:{requiredAlert:!0,requiredAlert_error:e.didSubmitAttempt&&!e.value}},[e._v(" Это поле обязательно для заполнения ")]):e._e(),n("div",{staticClass:"buttonsWrap",class:{"buttonsWrap_flex-row":e.flex_row,"buttonsWrap_flex-column":e.flex_column}},e._l(e.buttons,(function(t){return n("label",{key:t.name,class:{label:!0,label_disabled:e.disabled,label_error:e.isRequired&&e.didSubmitAttempt&&!e.value},attrs:{disabled:e.disabled,tabindex:"0",for:t.name},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.updateInputData(t.name)}}},[e._v(" "+e._s(t.nameLocale)+" "),n("input",{staticClass:"button",attrs:{type:"radio",disabled:e.disabled,tabindex:"-1",name:e.name,id:t.name},domProps:{value:t.name,checked:t.name===e.value},on:{change:function(t){return e.updateInputData(t.target.value)}}})])})),0)])},x=[],O={name:"RadioInput",props:{flex_row:Boolean,flex_column:Boolean,disabled:Boolean,name:{type:String,required:!0},defaultValue:{type:String,default:""},buttons:{type:Array,required:!0},isRequired:{type:Boolean,default:!1},didSubmitAttempt:{type:Boolean,default:!1}},data:function(){return{value:this.defaultValue}},methods:{updateInputData:function(e){this.value=e,this.$emit("update-input-data",e)}}},G=O,w=(n("0334"),Object(_["a"])(G,B,x,!1,null,"3746da02",null)),H=w.exports,U=n("3d20"),C=n.n(U),I={name:"SimonGame",components:{Button:A,RadioInput:H},data:function(){return{language:"ru",languageButtons:{name:"language",value:"ru",buttons:[{name:"ru",nameLocale:"Русский"},{name:"en",nameLocale:"English"}]},sectorsInit:[{id:0,class:"sector sector_first",isHighlighted:!1},{id:1,class:"sector sector_second",isHighlighted:!1},{id:2,class:"sector sector_third",isHighlighted:!1},{id:3,class:"sector sector_fourth",isHighlighted:!1}],roundNumber:0,level:"easy",isGameOn:!1,isUserFail:!1,isHighlighting:!1,audiosArray:[c.a,h.a,f.a,p.a]}},computed:{languagesLocales:function(){var e=this.languageButtons,t=this.roundNumber;switch(e.value){case"ru":return{round:"Раунд",startTheGameButtonLabel:"Начать новую игру",youLostAlert:"Вы проиграли в ".concat(t," раунде"),endGameAlert:"Игра окончена!",tryLostRoundButtonLabel:"Попробовать раунд ещё раз",repeatHighlightButtonLabel:"Повторить последовательность",levels:{easy:"Легкий",medium:"Средний",hard:"Сложный"}};case"en":return{round:"Round",startTheGameButtonLabel:"Start new game",youLostAlert:"You lost in ".concat(t," round"),endGameAlert:"Game over!",tryLostRoundButtonLabel:"Try lost round again",repeatHighlightButtonLabel:"Repeat highlight",levels:{easy:"Easy",medium:"Medium",hard:"Complex"}};default:return{round:"Раунд",startTheGameButtonLabel:"Начать новую игру",youLostAlert:"Вы проиграли в ".concat(t," раунде"),endGameAlert:"Игра окончена!",tryLostRoundButtonLabel:"Попробовать раунд ещё раз",repeatHighlightButtonLabel:"Повторить последовательность",levels:{easy:"Легкий",medium:"Средний",hard:"Сложный"}}}},levelButtons:function(){return{name:"level",value:"easy",buttons:Object.entries(this.languagesLocales.levels).map((function(e){var t=Object(l["a"])(e,2),n=t[0],i=t[1];return{name:n,nameLocale:i}}))}},timeout:function(){switch(this.level){case"easy":return 1.5;case"medium":return 1;case"hard":return.4;default:return 1.5}},sectors:function(){return this.sectorsInit.map((function(e){return e}))},gameSelectedSectorsArray:function(){for(var e=[],t=0;t<this.roundNumber;t++)e.push(this.getRandomNumber());return e},userSelectedSectorsArray:function(){return[]}},methods:{showAlert:function(){var e=this;C.a.fire({text:this.languagesLocales.endGameAlert,icon:"error",showCancelButton:!1,confirmButtonText:this.languagesLocales.startTheGameButtonLabel}).then((function(t){t.isConfirmed&&e.startTheGame()}))},setLanguage:function(e){this.languageButtons.value=e},playAudio:function(e){var t=new Audio(this.audiosArray[e]);t.play()},getRandomNumber:function(){return Math.floor(Math.random()*Math.floor(this.sectorsInit.length))},setLevel:function(e){this.clearUserSelectedSectors(),this.level=e,this.isGameOn&&!this.isHighlighting&&this.highlightSectors()},setIsGameOn:function(e){this.isGameOn=e},startTheGame:function(){this.clearUserSelectedSectors(),this.setIsGameOn(!0),this.roundNumber=1,this.isUserFail=!1,this.highlightSectors()},startNextRound:function(){this.clearUserSelectedSectors(),this.roundNumber++,this.highlightSectors()},setIsHighlighting:function(e){this.isHighlighting=e},highlightSector:function(e){var t=this;this.sectors.forEach((function(n){n.id===e?(t.sectors[n.id].isHighlighted=!0,t.playAudio(n.id),setTimeout((function(){t.sectors[n.id].isHighlighted=!1}),t.timeout/2*1e3)):t.sectors[n.id].isHighlighted=!1}))},highlightSectors:function(){this.setIsHighlighting(!0);var e=this.timeout,t=this.gameSelectedSectorsArray,n=this.highlightSector;t.forEach((function(t,i){setTimeout((function(){n(t)}),1e3*e*(i+1))})),this.setIsHighlighting(!1),setTimeout((function(){}),1e3*e*(t.length+.6))},repeatHighlight:function(){this.isHighlighting||(this.clearUserSelectedSectors(),this.highlightSectors())},setUserSelectedSectors:function(e){this.userSelectedSectorsArray.push(e)},clearUserSelectedSectors:function(){this.userSelectedSectorsArray.length=0},setIsUserFail:function(e){var t=this.gameSelectedSectorsArray,n=this.userSelectedSectorsArray;t[n.length-1]!==e&&this.handleUserFail()},handleUserFail:function(){this.isUserFail=!0,this.setIsGameOn(!1),this.showAlert()},tryLostRound:function(){this.isUserFail=!1,this.setIsGameOn(!0),this.clearUserSelectedSectors(),this.highlightSectors()},handleSectorClick:function(e){var t=this.gameSelectedSectorsArray,n=this.userSelectedSectorsArray,i=this.isHighlighting,s=this.isGameOn,a=this.playAudio,r=this.setUserSelectedSectors,o=this.setIsUserFail,l=this.startNextRound;i||(a(e),s&&(r(e),o(e),this.isUserFail||t.length!==n.length||l()))}}},R=I,T=(n("cc91"),Object(_["a"])(R,r,o,!1,null,"635fc206",null)),j=T.exports,k={name:"App",components:{SimonGame:j}},N=k,F=(n("5c0b"),Object(_["a"])(N,s,a,!1,null,null,null)),E=F.exports;i["a"].config.productionTip=!1,i["a"].config.devtools=!0,new i["a"]({render:function(e){return e(E)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),s=n.n(i);s.a},"88d4":function(e,t,n){e.exports=n.p+"media/2.7d29331d.ogg"},"9c0c":function(e,t,n){},a1c7:function(e,t,n){e.exports=n.p+"media/3.ab928396.ogg"},b48a:function(e,t,n){},cc91:function(e,t,n){"use strict";var i=n("3b29"),s=n.n(i);s.a},ed16:function(e,t,n){e.exports=n.p+"media/1.63d780a9.ogg"},ef4b:function(e,t,n){e.exports=n.p+"media/0.76fd3fb8.ogg"}});
//# sourceMappingURL=app.b2293bec.js.map