"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1996],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,g=m["".concat(d,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(4250),o=(n(9496),n(9613));const r={},l=void 0,i={unversionedId:"ox_target/Usage/Target",id:"ox_target/Usage/Target",title:"Target",description:"disableTargeting",source:"@site/docs/ox_target/Usage/Target.md",sourceDirName:"ox_target/Usage",slug:"/ox_target/Usage/Target",permalink:"/docs/ox_target/Usage/Target",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_target/Usage/Target.md",tags:[],version:"current",lastUpdatedAt:1675744579,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{},sidebar:"ox_target",previous:{title:"Globals",permalink:"/docs/ox_target/Usage/Globals"},next:{title:"Zones",permalink:"/docs/ox_target/Usage/Zones"}},d={},s=[{value:"disableTargeting",id:"disabletargeting",level:2},{value:"addModel",id:"addmodel",level:2},{value:"removeModel",id:"removemodel",level:2},{value:"addEntity",id:"addentity",level:2},{value:"removeEntity",id:"removeentity",level:2},{value:"addLocalEntity",id:"addlocalentity",level:2},{value:"removeLocalEntity",id:"removelocalentity",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local options = {\n    {\n        name = 'ox:option1',\n        event = 'ox_target:debug',\n        icon = 'fa-solid fa-road',\n        label = 'Option 1',\n        canInteract = function(entity, distance, coords, name, bone)\n            return math.random(0, 100) < 51\n        end\n    },\n    {\n        name = 'ox:option2',\n        event = 'ox_target:debug',\n        icon = 'fa-solid fa-road',\n        label = 'Option 2',\n        canInteract = function(entity, distance, coords, name, bone)\n            return math.random(0, 100) < 51\n        end\n    }\n}\n\nlocal models = { `prop_atm_01`, `prop_atm_02` }\nlocal optionsNames = { 'ox:option1', 'ox:option2' }\n")),(0,o.kt)("h2",{id:"disabletargeting"},"disableTargeting"),(0,o.kt)("p",null,"Toggles the state on being able to target. true/false"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:disableTargeting(state)\n")),(0,o.kt)("h2",{id:"addmodel"},"addModel"),(0,o.kt)("p",null,"Add new options when targeting a specific model or list of models."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:addModel(models, options)\n")),(0,o.kt)("h2",{id:"removemodel"},"removeModel"),(0,o.kt)("p",null,"Remove options from a specific model or list of models."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:removeModel(models, optionNames)\n")),(0,o.kt)("h2",{id:"addentity"},"addEntity"),(0,o.kt)("p",null,"Add new options when targeting a networked entity matching the given netid or list of netIds.",(0,o.kt)("br",{parentName:"p"}),"\n","Requires the use of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.fivem.net/natives/?_0x9E35DAB6"},"NetworkGetNetworkIdFromEntity")," on an entity id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:addEntity(netIds, options)\n")),(0,o.kt)("h2",{id:"removeentity"},"removeEntity"),(0,o.kt)("p",null,"Remove options from a networked entity matching the given netid or list of netIds.",(0,o.kt)("br",{parentName:"p"}),"\n","Requires the use of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.fivem.net/natives/?_0x9E35DAB6"},"NetworkGetNetworkIdFromEntity")," on an entity id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:removeEntity(netIds, optionNames)\n")),(0,o.kt)("h2",{id:"addlocalentity"},"addLocalEntity"),(0,o.kt)("p",null,"Add new options when targeting a local entity or list of entities."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:addLocalEntity(entities, options)\n")),(0,o.kt)("h2",{id:"removelocalentity"},"removeLocalEntity"),(0,o.kt)("p",null,"Remove options from a local entity or list of entities."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:removeLocalEntity(entities, optionNames)\n")))}c.isMDXComponent=!0}}]);