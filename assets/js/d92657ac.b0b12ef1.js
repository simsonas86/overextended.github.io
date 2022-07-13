"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7499],{9613:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(a),m=l,y=d["".concat(s,".").concat(m)]||d[m]||i[m]||n;return a?r.createElement(y,o(o({ref:t},c),{},{components:a})):r.createElement(y,o({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7640:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(9496),l=a(1626),n="tabItem_zeWL";function o(e){var t=e.children,a=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(n,o),hidden:a},t)}},866:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(5443),l=a(9496),n=a(1626),o=a(4252),u=a(1135),s=a(9162),p=a(3946),c="tabList_gs2P",i="tabItem_Ugfh";function d(e){var t,a,o=e.lazy,d=e.block,m=e.defaultValue,y=e.values,v=e.groupId,g=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=y?y:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,u.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(t=null!=m?m:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),x=T.tabGroupChoices,N=T.setTabGroupChoices,S=(0,l.useState)(h),Z=S[0],w=S[1],P=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var E=x[v];null!=E&&E!==Z&&b.some((function(e){return e.value===E}))&&w(E)}var I=function(e){var t=e.currentTarget,a=P.indexOf(t),r=b[a].value;r!==Z&&(O(t),w(r),null!=v&&N(v,String(r)))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r,l=P.indexOf(e.currentTarget)+1;a=null!=(r=P[l])?r:P[0];break;case"ArrowLeft":var n,o=P.indexOf(e.currentTarget)-1;a=null!=(n=P[o])?n:P[P.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,n.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":d},g)},b.map((function(e){var t=e.value,a=e.label,o=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:function(e){return P.push(e)},onKeyDown:j,onFocus:I,onClick:I},o,{className:(0,n.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":Z===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(f.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function m(e){var t=(0,o.Z)();return l.createElement(d,(0,r.Z)({key:String(t)},e))}},6428:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return m}});var r=a(5443),l=a(3010),n=(a(9496),a(9613)),o=a(866),u=a(7640),s=["components"],p={title:"Methods"},c=void 0,i={unversionedId:"ox_core/Player/Server/methods",id:"ox_core/Player/Server/methods",title:"Methods",description:"These functions are inherited by instances of CPlayer.",source:"@site/docs/ox_core/Player/Server/methods.md",sourceDirName:"ox_core/Player/Server",slug:"/ox_core/Player/Server/methods",permalink:"/docs/ox_core/Player/Server/methods",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_core/Player/Server/methods.md",tags:[],version:"current",lastUpdatedAt:1657740950,formattedLastUpdatedAt:"7/13/2022",frontMatter:{title:"Methods"},sidebar:"ox_core",previous:{title:"Events",permalink:"/docs/ox_core/Player/Server/events"},next:{title:"Server",permalink:"/docs/ox_core/Vehicle/Server/"}},d={},m=[{value:"player.set",id:"playerset",level:2},{value:"player.get",id:"playerget",level:2},{value:"player.getCoords",id:"playergetcoords",level:2},{value:"player.setGroup",id:"playersetgroup",level:2},{value:"player.hasGroup",id:"playerhasgroup",level:2},{value:"player.isPlayerInScope",id:"playerisplayerinscope",level:2},{value:"player.triggerScopedEvent",id:"playertriggerscopedevent",level:2}],y={toc:m};function v(e){var t=e.components,a=(0,l.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"These functions are inherited by instances of CPlayer."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local player = Ox.GetPlayer(source)\n"))),(0,n.kt)(u.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { GetPlayer } from '@overextended/ox_core/server'\n\nconst player = GetPlayer(source)\n")))),(0,n.kt)("h2",{id:"playerset"},"player.set"),(0,n.kt)("p",null,"Sets the player's metadata for key to the given value."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local key, value = 'iq', 300\nplayer.set(key, value)\n"))),(0,n.kt)(u.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const [key, value] = ['iq', 300]\nplayer.set(key, value)\n")))),(0,n.kt)("h2",{id:"playerget"},"player.get"),(0,n.kt)("p",null,"Return the player's metadata. Sending an argument will retrieve a specific metadata key."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local data = player.get()\nlocal iq = player.get('iq')\n"))),(0,n.kt)(u.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const data = player.get()\nconst iq = player.get('iq')\n")))),(0,n.kt)("h2",{id:"playergetcoords"},"player.getCoords"),(0,n.kt)("p",null,"Return the player's world position. The value will be cached for future calls, so send true for the first argument to update it."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local coords = player.getCoords(update)\n"))),(0,n.kt)(u.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const coords = player.getCoords(update)\n")))),(0,n.kt)("h2",{id:"playersetgroup"},"player.setGroup"),(0,n.kt)("p",null,"Updates the player's grade for the given group. A value of 0 will remove the player"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local group, grade = 'police', 3\nplayer.setGroup(group, grade)\n"))),(0,n.kt)(u.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const [group, grade] = ['police', 3]\nplayer.setGroup(group, grade)\n")))),(0,n.kt)("h2",{id:"playerhasgroup"},"player.hasGroup"),(0,n.kt)("p",null,"Check if the player is a member of a given group, and returns the matching group name and grade.",(0,n.kt)("br",{parentName:"p"}),"\n","The filter can be a string, array, or object where key is the group, and value is the minimum grade."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local filter = { police = 0, sheriff = 0 }\nlocal group, grade = player.hasGroup(filter)\n"))),(0,n.kt)(u.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const filter = { police: 0, sheriff: 0 }\nconst [group, grade] = player.hasGroup(filter)\n")))),(0,n.kt)("h2",{id:"playerisplayerinscope"},"player.isPlayerInScope"),(0,n.kt)("p",null,"Check if the given source is inside the player's scope."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local target = 2\nlocal inScope = player.isPlayerInScope(target)\n"))),(0,n.kt)(u.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const target = 2\nconst inScope = player.isPlayerInScope(target)\n")))),(0,n.kt)("h2",{id:"playertriggerscopedevent"},"player.triggerScopedEvent"),(0,n.kt)("p",null,"Trigger a client event for all players in the player's scope."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"player.triggerScopedEvent(eventName, ...)\n"))),(0,n.kt)(u.Z,{value:"js/ts",label:"JS/TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"player.triggerScopedEvent(eventName, ...)\n")))))}v.isMDXComponent=!0}}]);