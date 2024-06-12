(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9922],{61646:function(s,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_lib/Modules/Points/JavaScript/Client",function(){return o(35593)}])},35593:function(s,n,o){"use strict";o.r(n),o.d(n,{__toc:function(){return i}});var l=o(11527),e=o(12059),r=o(23443);let i=[{depth:2,value:"Points",id:"points"}];function t(s){let n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},(0,r.a)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{children:"Client"}),"\n",(0,l.jsx)(n.h2,{id:"points",children:"Points"}),"\n",(0,l.jsx)(n.p,{children:"Simple and centralised distance checking, supporting callbacks when entering, leaving, and standing in-range of set coordinates."}),"\n",(0,l.jsx)(n.pre,{"data-language":"ts","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"ts","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Point"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">({coords"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" distance"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" onEnter"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" onExit"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" nearby"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" args})"})]})})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["coords: ",(0,l.jsx)(n.code,{children:"number[]"})]}),"\n",(0,l.jsxs)(n.li,{children:["distance: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["onEnter?: ",(0,l.jsx)(n.code,{children:"function"})]}),"\n",(0,l.jsxs)(n.li,{children:["onExit?: ",(0,l.jsx)(n.code,{children:"function"})]}),"\n",(0,l.jsxs)(n.li,{children:["nearby?: ",(0,l.jsx)(n.code,{children:"function"})]}),"\n",(0,l.jsxs)(n.li,{children:["args?: ",(0,l.jsx)(n.code,{children:"T"})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{"data-language":"ts","data-theme":"default",children:(0,l.jsxs)(n.code,{"data-language":"ts","data-theme":"default",children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { Point"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" cache } "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@overextended/ox_lib/client'"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"nearby"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"this"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Point"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<{dunak"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}>) {"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// @ts-ignore"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"DrawMarker"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"this"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"coords"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".x"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"this"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"coords"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".y"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"this"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"coords"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".z"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"180"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"200"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"50"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"this"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".currentDistance "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"this"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".currentDistance "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"IsControlJustReleased"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"38"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")) {"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Inside marker'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"this"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".id)"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"this"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"args"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"?.dunak)"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"point"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Point"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  coords"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"GetEntityCoords"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"cache"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".ped"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  distance"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  nearby"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" nearby"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  args"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    dunak"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'nerd'"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"point"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"onEnter"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Entered range of point'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"point"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".id)"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"point"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"onExit"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Left range of point'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"point"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".id)"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})]})}n.default=(0,e.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.a)(),s.components);return n?(0,l.jsx)(n,{...s,children:(0,l.jsx)(t,{...s})}):t(s)},pageOpts:{filePath:"pages/ox_lib/Modules/Points/JavaScript/Client.mdx",route:"/ox_lib/Modules/Points/JavaScript/Client",title:"Client",headings:i},pageNextRoute:"/ox_lib/Modules/Points/JavaScript/Client"})}},function(s){s.O(0,[2059,9774,2888,179],function(){return s(s.s=61646)}),_N_E=s.O()}]);