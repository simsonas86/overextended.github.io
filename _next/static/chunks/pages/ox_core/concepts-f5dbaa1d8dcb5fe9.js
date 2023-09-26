(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6037],{8221:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_core/concepts",function(){return n(3518)}])},3518:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return o}});var l=n(1527),r=n(2059),a=n(3443);let o=[{depth:2,value:"Classes",id:"classes"}];function i(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",br:"br",pre:"pre",code:"code",span:"span"},(0,a.a)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{children:"Concepts"}),"\n",(0,l.jsx)(s.p,{children:"We'll try to explain some technical but core concepts used in ox_core here."}),"\n",(0,l.jsx)(s.h2,{id:"classes",children:"Classes"}),"\n",(0,l.jsxs)(s.p,{children:["Lua doesn't have support for true classes, but rather prototype-based inheritance.",(0,l.jsx)(s.br,{}),"\n","A prototype can hold its own variables and methods, which another object (an instance) can reference or call."]}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- OxPlayer will hold all inherited variables and methods for instances of it."})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" OxPlayer "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {}"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:'-- Sets the "index metamethod" of OxPlayer to reference itself.'})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- This is how instances will know to look up the table."})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"OxPlayer.__index "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" OxPlayer"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Set a new metatable on the table passed to the function."})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- The important code here is { __index = OxPlayer }."})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"OxPlayer"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"new"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"player"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setmetatable"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(player, OxPlayer)"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Using the `:` syntax will pass the object as the first parameter."})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" OxPlayer:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"getUsername"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" self.username"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Create our instance of OxPlayer."})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" player "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" OxPlayer."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"new"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    username "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Bob the Builder'"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- This is the same as OxPlayer.getUsername(player)."})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" username "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" player:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"getUsername"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- 'Bob the Builder'"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(username)"})]})]})}),"\n",(0,l.jsx)(s.p,{children:"When using the imported classes in your resources you can treat the methods as if you are calling a regular function."}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" player "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Ox."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayer"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(playerId)"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(player."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"getUsername"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())"})]})]})})]})}s.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.a)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(i,{...e})}):i(e)},pageOpts:{filePath:"pages/ox_core/concepts.mdx",route:"/ox_core/concepts",title:"Concepts",headings:o},pageNextRoute:"/ox_core/concepts"})}},function(e){e.O(0,[2059,9774,2888,179],function(){return e(e.s=8221)}),_N_E=e.O()}]);