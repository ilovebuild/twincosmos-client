(function(t){function e(e){for(var c,a,i=e[0],s=e[1],u=e[2],b=0,f=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(c=!1)}c&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var c={},o={app:0},r=[];function a(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=c,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)a.d(n,c,function(e){return t[e]}.bind(null,c));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/twincosmos-client/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f1c":function(t,e,n){"use strict";n("15a0")},"15a0":function(t,e,n){},"18e6":function(t,e,n){"use strict";var c=n("5688"),o=n.n(c);n.d(e,"default",(function(){return o.a}))},"449b":function(t,e,n){"use strict";n("4e4c")},"4e4c":function(t,e,n){},"560f":function(t,e,n){"use strict";var c=n("a730"),o=n("18e6"),r=(n("5fab"),n("6b0d")),a=n.n(r);const i=a()(o["default"],[["render",c["a"]],["__scopeId","data-v-97b43696"]]);e["default"]=i},5688:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o={class:"logo"},r=Object(c["h"])("Twincosmos"),a={class:"nav"},i={class:"nav_item"},s=Object(c["h"])("world"),u={class:"nav_item"},l=Object(c["h"])("life"),b={class:"nav_item"},f=Object(c["h"])("study"),d={class:"nav_item"},j=Object(c["h"])("economy"),O={class:"nav_item"},m=Object(c["h"])("Chat"),p={class:"nav_item"},h=Object(c["h"])("play"),v={class:"nav_item"},g=Object(c["h"])("create"),y={class:"nav_item"},k=Object(c["h"])("productList"),w={class:"loginBtn d-flex"},_={key:0},x={key:1};function C(t,e,n,C,R,A){var L=Object(c["y"])("router-link"),T=Object(c["y"])("router-view");return Object(c["r"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("h1",o,[Object(c["i"])(L,{to:"/",class:"navbar-brand"},{default:Object(c["E"])((function(){return[r]})),_:1})]),Object(c["f"])("nav",null,[Object(c["f"])("ul",a,[Object(c["f"])("li",i,[Object(c["i"])(L,{to:"/",class:"nav-link"},{default:Object(c["E"])((function(){return[s]})),_:1})]),Object(c["f"])("li",u,[Object(c["i"])(L,{to:"/Life",class:"nav-link"},{default:Object(c["E"])((function(){return[l]})),_:1})]),Object(c["f"])("li",b,[Object(c["i"])(L,{to:"/Study",class:"nav-link"},{default:Object(c["E"])((function(){return[f]})),_:1})]),Object(c["f"])("li",d,[Object(c["i"])(L,{to:"/Economy",class:"nav-link"},{default:Object(c["E"])((function(){return[j]})),_:1})]),Object(c["f"])("li",O,[Object(c["i"])(L,{to:"/Chat",class:"nav-link"},{default:Object(c["E"])((function(){return[m]})),_:1})]),Object(c["f"])("li",p,[Object(c["i"])(L,{to:"/Play",class:"nav-link"},{default:Object(c["E"])((function(){return[h]})),_:1})]),Object(c["f"])("li",v,[Object(c["i"])(L,{to:"/Create",class:"nav-link"},{default:Object(c["E"])((function(){return[g]})),_:1})]),Object(c["f"])("li",y,[Object(c["i"])(L,{to:"/ProductList",class:"nav-link"},{default:Object(c["E"])((function(){return[k]})),_:1})])])]),Object(c["f"])("form",w,[void 0==A.user.email?(Object(c["r"])(),Object(c["e"])("div",_,[Object(c["f"])("button",{type:"button",onClick:e[0]||(e[0]=function(){return A.kakaoLoin&&A.kakaoLoin.apply(A,arguments)})},"로그인")])):(Object(c["r"])(),Object(c["e"])("div",x,[Object(c["f"])("button",{type:"button",onClick:e[1]||(e[1]=function(){return A.kakaoLogout&&A.kakaoLogout.apply(A,arguments)})},"로그아웃")]))]),Object(c["i"])(T)],64)}var R=n("1da1"),A=(n("96cf"),{computed:{user:function(){return this.$store.state.user}},methods:{kakaoLoin:function(){window.Kakao.Auth.login({scope:"account_email, gender, profile_nickname",success:this.getProfile})},getProfile:function(){var t=this;window.Kakao.API.request({url:"/v2/user/me",success:function(e){var n=e.kakao_account;t.login(n),alert("로그인 성공")},fail:function(t){console.log(t)}})},login:function(t){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api("http://3.37.61.15:3000/api/login",{param:[{email:t.email,nickname:t.profile.nickname},{nickname:t.profile.nickname}]});case 2:e.$store.commit("user",t),console.log("kako_account text=====",t),console.log("store. user ===>",e.$store.user);case 5:case"end":return n.stop()}}),n)})))()},kakaoLogout:function(){var t=this;window.Kakao.Auth.logout((function(e){console.log(e),t.$store.commit("user",{}),alert("로그아웃"),t.$router.push({path:"/"})}))}}}),L=(n("c6d3"),n("6b0d")),T=n.n(L);const P=T()(A,[["render",C]]);var E=P,M=n("6c02"),S={class:"wrap"},U=Object(c["f"])("h2",null,"This is an world",-1);function $(t,e,n,o,r,a){var i=Object(c["y"])("Greet");return Object(c["r"])(),Object(c["e"])("div",S,[U,Object(c["i"])(i)])}var G=function(t){return Object(c["u"])("data-v-9abc2126"),t=t(),Object(c["s"])(),t},I={class:"hello"},B=G((function(){return Object(c["f"])("h2",null,"hello component!!! Greet!",-1)})),D=[B];function K(t,e,n,o,r,a){return Object(c["r"])(),Object(c["e"])("div",I,D)}var F={name:"Greet",props:{msg:String}};n("bad4");const H=T()(F,[["render",K],["__scopeId","data-v-9abc2126"]]);var J=H,V={name:"world",data:function(){return{}},components:{Greet:J},methods:{showTitle:function(){this.title="Global Component TEST !!"}}};const N=T()(V,[["render",$]]);var q=N,z={class:"wrap"},W=Object(c["f"])("h2",null,"This is an create",-1),Z=[W];function Q(t,e,n,o,r,a){return Object(c["r"])(),Object(c["e"])("div",z,Z)}var X={data:function(){return{name1:"서울",price1:100,name2:"경기",price2:200}}};const Y=T()(X,[["render",Q]]);var tt=Y,et={class:"wrap"},nt=Object(c["f"])("h2",null,"This is an life",-1);function ct(t,e,n,o,r,a){var i=Object(c["y"])("Greet");return Object(c["r"])(),Object(c["e"])("div",et,[nt,Object(c["i"])(i)])}var ot={data:function(){return{name1:"서울",price1:100,name2:"경기",price2:200}}};const rt=T()(ot,[["render",ct]]);var at=rt,it=n("560f"),st={class:"about"},ut=Object(c["f"])("h2",null,"This is an economy",-1),lt=[ut];function bt(t,e,n,o,r,a){return Object(c["r"])(),Object(c["e"])("div",st,lt)}var ft={computed:{user:function(){return this.$store.state.user}},mounted:function(){void 0==this.user.email&&(alert("로그인을 해야 이용할 수 있습니다."),this.$router.push({path:"/"}))}};const dt=T()(ft,[["render",bt]]);var jt=dt,Ot=(n("a15b"),{class:"wrap"}),mt={key:0,class:"parent-container"},pt=Object(c["f"])("h2",null,"This is an chat",-1),ht={class:"btns"},vt={class:"name-container"},gt={key:1,class:"chat_Container"},yt={class:"chatHeader"},kt={class:"list-container",id:"chatBox"},wt={key:0,class:"message myMessage"},_t={class:"message_name"},xt={class:"message_time"},Ct={class:"message_text"},Rt={key:1,class:"message"},At={class:"message_name"},Lt={class:"message_time"},Tt={class:"message_text"},Pt={class:"text-input-container"};function Et(t,e,n,o,r,a){return Object(c["r"])(),Object(c["e"])("div",Ot,[r.joined?Object(c["d"])("",!0):(Object(c["r"])(),Object(c["e"])("div",mt,[pt,Object(c["f"])("div",ht,[Object(c["f"])("button",{onClick:e[0]||(e[0]=function(t){return a.selectedRoom("Lobby")})},"Lobby"),Object(c["f"])("button",{onClick:e[1]||(e[1]=function(t){return a.selectedRoom("Room")})},"Room"),Object(c["f"])("button",{onClick:e[2]||(e[2]=function(t){return a.selectedRoom("Room1")})},"Room1")]),Object(c["f"])("div",vt,[Object(c["F"])(Object(c["f"])("input",{type:"text",class:"user-name","onUpdate:modelValue":e[3]||(e[3]=function(t){return r.currentRoom=t})},null,512),[[c["C"],r.currentRoom]]),Object(c["F"])(Object(c["f"])("input",{type:"text",class:"user-name","onUpdate:modelValue":e[4]||(e[4]=function(t){return r.currentUser=t})},null,512),[[c["C"],r.currentUser]]),Object(c["f"])("button",{class:"join-button",onClick:e[5]||(e[5]=function(){return a.join&&a.join.apply(a,arguments)})},"Join")])])),r.joined?(Object(c["r"])(),Object(c["e"])("div",gt,[Object(c["f"])("div",yt,[Object(c["f"])("h4",null,Object(c["A"])(r.currentRoom),1),Object(c["f"])("button",{onClick:e[6]||(e[6]=function(){return a.refreshAll&&a.refreshAll.apply(a,arguments)})},"나가기")]),Object(c["f"])("div",kt,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(r.messages,(function(t){return Object(c["r"])(),Object(c["e"])("div",{key:t.id},[r.username==t.username?(Object(c["r"])(),Object(c["e"])("div",wt,[Object(c["f"])("div",null,[Object(c["f"])("span",_t,Object(c["A"])(t.username)+" "+Object(c["A"])(t.id),1),Object(c["f"])("span",xt,Object(c["A"])(t.time),1)]),Object(c["f"])("span",Ct,Object(c["A"])(t.text),1)])):(Object(c["r"])(),Object(c["e"])("div",Rt,[Object(c["f"])("div",null,[Object(c["f"])("span",At,Object(c["A"])(t.username)+" "+Object(c["A"])(t.id),1),Object(c["f"])("span",Lt,Object(c["A"])(t.time),1)]),Object(c["f"])("span",Tt,Object(c["A"])(t.text),1)]))])})),128))]),Object(c["f"])("div",Pt,[Object(c["F"])(Object(c["f"])("textarea",{"onUpdate:modelValue":e[7]||(e[7]=function(t){return r.text=t}),class:"text-message",onKeyup:e[8]||(e[8]=Object(c["G"])((function(){return a.sendMessage&&a.sendMessage.apply(a,arguments)}),["enter"]))},null,544),[[c["C"],r.text]])])])):Object(c["d"])("",!0)])}n("99af");var Mt=n("daa8"),St={name:"Chat",data:function(){return{currentRoom:"",joined:!1,currentUser:"",text:"",messages:[],username:""}},methods:{selectedRoom:function(t){this.currentRoom=t},join:function(){var t=this;this.joined=!0,this.socketInstance=Object(Mt["a"])("https://chat.siwonsoft.com/");var e=this.currentUser,n=this.currentRoom;this.username=e,this.socketInstance.emit("joinRoom",{username:e,room:n}),this.socketInstance.on("roomUsers",(function(e){var n=e.room,c=e.users;t.outputRoomName(n),t.outputUsers(c)})),this.socketInstance.on("message",(function(e){console.log("message from server = >",e),t.outputMessage(e)}))},outputRoomName:function(t){console.log("add room name to dom",t)},outputUsers:function(t){console.log("add users to dom",t)},sendMessage:function(){this.addMessage(),this.text=""},addMessage:function(){var t={text:this.text};this.socketInstance.emit("chatMessage",t.text)},outputMessage:function(t){this.messages=this.messages.concat(t);var e=document.getElementById("chatBox");setInterval(100),e.scrollTop=e.scrollHeight,console.log(e.scrollHeight)},refreshAll:function(){this.$router.go()}}};n("449b");const Ut=T()(St,[["render",Et]]);var $t=Ut,Gt={class:"wrap"},It=Object(c["g"])('<div class="character_select"><div class="sex"><li><button>남</button></li><li><button>여</button></li></div><div class="avata_editor"><div class="editor_type"><li><button>타입1</button></li><li><button>타입2</button></li><li><button>타입3</button></li><li><button>타입4</button></li><li><button>타입5</button></li></div><div class="editor_type_menu"><li><button>피부색</button></li><li><button>얼굴형</button></li><li><button>의상</button></li><li><button>헤어</button></li><li><button>수염</button></li><li><button>눈</button></li><li><button>눈썹</button></li><li><button>안경</button></li><li><button>데칼</button></li><li><button>복면</button></li><li><button>모자</button></li></div></div></div>',1),Bt={id:"renderCanvas",ref:"bjsCanvas"};function Dt(t,e,n,o,r,a){return Object(c["r"])(),Object(c["e"])("div",Gt,[It,Object(c["f"])("canvas",Bt,null,512)])}var Kt=n("a1e9"),Ft=n("5c40"),Ht=n("bf93"),Jt=function(t){var e=new Ht["b"](t),n=new Ht["f"](e),c=new Ht["c"]("camera1",new Ht["h"](0,5,-10),n);c.setTarget(Ht["h"].Zero()),c.attachControl(t,!0),new Ht["d"]("light",Ht["h"].Up(),n);var o=Ht["e"].CreateBox("box",{size:2},n),r=new Ht["g"]("box-material",n);r.diffuseColor=Ht["a"].Blue(),o.material=r,e.runRenderLoop((function(){n.render()}))},Vt={name:"BabylonScene",setup:function(){var t=Object(Kt["l"])(null);return Object(Ft["x"])((function(){t.value&&Jt(t.value)})),{bjsCanvas:t}},mounted:function(){console.log("마운트 플레이에 있는")}};n("0f1c");const Nt=T()(Vt,[["render",Dt]]);var qt=Nt;function zt(t,e,n,o,r,a){var i=Object(c["y"])("Greet");return Object(c["r"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("button",{onClick:e[0]||(e[0]=function(){return a.showTitle&&a.showTitle.apply(a,arguments)})}," 전역 컴포넌트 클릭해보세요. 아래에 글씨가 나옵니다. "),Object(c["i"])(i)],64)}var Wt={name:"About",data:function(){return{}},components:{Greet:J},methods:{showTitle:function(){this.title="Global Component TEST !!"}}};const Zt=T()(Wt,[["render",zt]]);var Qt=Zt,Xt=(n("ac1f"),n("00b4"),{class:"wrap"}),Yt=Object(c["f"])("h2",null,"This is an productList page1",-1);function te(t,e,n,o,r,a){return Object(c["r"])(),Object(c["e"])("div",Xt,[Yt,(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(r.menu,(function(t,e){return Object(c["r"])(),Object(c["e"])("h2",{key:t},Object(c["A"])(e)+" "+Object(c["A"])(t[e]),1)})),128)),(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(r.fruitData,(function(t,e){return Object(c["r"])(),Object(c["e"])("h2",{key:e},Object(c["A"])(t.product_name),1)})),128)),(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(r.delData,(function(t,e){return Object(c["r"])(),Object(c["e"])("h2",{key:e},Object(c["A"])(t.test),1)})),128))])}var ee={data:function(){return{menu:["home","aaa","aaa"],fruitData:[],delData:[]}},created:function(){this.getProductList()},methods:{getProductList:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("production"),n="/api/testlist",e.next=4,t.$api(n,{});case 4:t.fruitData=e.sent,t.delData=[{id:1,test:"aa"},{id:2,test:"99"},{id:3,test:"cc"}];case 6:case"end":return e.stop()}}),e)})))()}}};const ne=T()(ee,[["render",te]]);var ce=ne,oe=[{path:"/",name:"World",component:q},{path:"/Create",name:"Create",component:tt},{path:"/Life",name:"Life",component:at},{path:"/Study",name:"Study",component:it["default"]},{path:"/Economy",name:"Economy",component:jt},{path:"/Chat",name:"Chat",component:$t},{path:"/Play",name:"Play",component:qt},{path:"/productList",name:"ProductList",component:ce},{path:"/about",name:"About",component:Qt}],re=Object(M["a"])({history:Object(M["b"])("/twincosmos-client/"),routes:oe}),ae=re,ie=n("bc3a"),se=n.n(ie),ue={methods:{$api:function(t,e){return Object(R["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t="http://3.37.61.15:3000"+t,console.log("url : ",t),n.next=4,se()({method:"post",url:t,data:e}).catch((function(t){console.log(t)}));case 4:return n.abrupt("return",n.sent.data);case 5:case"end":return n.stop()}}),n)})))()}}},le=n("5502"),be=n("0e44"),fe=Object(le["a"])({state:function(){return{user:{}}},mutations:{user:function(t,e){t.user=e}},plugins:[Object(be["a"])({paths:["user"]})]}),de=fe,je=Object(c["c"])(E);je.use(ae),je.mixin(ue),je.use(de),je.mount("#app"),window.Kakao.init("3ba22632f359189b644bd0ee813b8d39")},"5fab":function(t,e,n){"use strict";n("ee1b")},a730:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n("7a23"),o={ref:"bjsCanvas",width:"500",height:"500"},r={id:"fps"};function a(t,e,n,a,i,s){return Object(c["r"])(),Object(c["e"])("div",null,[Object(c["f"])("canvas",o,null,512),Object(c["f"])("label",r,Object(c["A"])(t.fps),1)])}},bad4:function(t,e,n){"use strict";n("eaab")},c6d3:function(t,e,n){"use strict";n("fc8d")},eaab:function(t,e,n){},ee1b:function(t,e,n){},fc8d:function(t,e,n){}});
//# sourceMappingURL=app.e5460743.js.map