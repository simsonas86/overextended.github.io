(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6682],{45894:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_lib/Modules/Math/Shared",function(){return l(44399)}])},44399:function(e,n,l){"use strict";l.r(n),l.d(n,{__toc:function(){return i}});var r=l(52676),s=l(82601),a=l(48745);let i=[{depth:2,value:"lib.math",id:"libmath"},{depth:3,value:"math.toscalars",id:"mathtoscalars"},{depth:3,value:"math.tovector",id:"mathtovector"},{depth:3,value:"math.normaltorotation",id:"mathnormaltorotation"},{depth:3,value:"math.torgba",id:"mathtorgba"},{depth:3,value:"math.hextorgb",id:"mathhextorgb"},{depth:3,value:"math.tohex",id:"mathtohex"},{depth:3,value:"math.groupdigits",id:"mathgroupdigits"},{depth:3,value:"math.clamp",id:"mathclamp"},{depth:3,value:"math.round",id:"mathround"},{depth:3,value:"math.interp",id:"mathinterp"},{depth:3,value:"math.lerp",id:"mathlerp"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",span:"span",h3:"h3",ul:"ul",li:"li",br:"br"},(0,a.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"Shared"}),"\n",(0,r.jsx)(n.h2,{id:"libmath",children:"lib.math"}),"\n",(0,r.jsx)(n.p,{children:"Extends the standard Lua math table with extra functions."}),"\n",(0,r.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"math = lib.math"})})})}),"\n",(0,r.jsx)(n.h3,{id:"mathtoscalars",children:"math.toscalars"}),"\n",(0,r.jsx)(n.p,{children:"Takes a string and returns a set of scalar values."}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"math."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"toscalars"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(input, min, max, round)"})]})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["input: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:["min?: ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.li,{children:["max?: ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.li,{children:["round?: ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["...: ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"mathtovector",children:"math.tovector"}),"\n",(0,r.jsx)(n.p,{children:"Takes a string or table and returns a vector value, or a number if only one value was found."}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"math."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"tovector"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(input, min, max, round)"})]})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["input: ",(0,r.jsx)(n.code,{children:"string"})," or ",(0,r.jsx)(n.code,{children:"table"})]}),"\n",(0,r.jsxs)(n.li,{children:["min?: ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.li,{children:["max?: ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.li,{children:["round?: ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["value: ",(0,r.jsx)(n.code,{children:"number"})," or ",(0,r.jsx)(n.code,{children:"vector2"})," or ",(0,r.jsx)(n.code,{children:"vector3"})," or ",(0,r.jsx)(n.code,{children:"vector4"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"mathnormaltorotation",children:"math.normaltorotation"}),"\n",(0,r.jsx)(n.p,{children:"Takes a surface normal and tries to convert it to a vector3 rotation."}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"math."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"normaltorotation"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(input)"})]})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["input: ",(0,r.jsx)(n.code,{children:"vector3"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["value: ",(0,r.jsx)(n.code,{children:"vector3"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"mathtorgba",children:"math.torgba"}),"\n",(0,r.jsxs)(n.p,{children:["Takes a string or table and returns a vector value, or a number if only one value was found.",(0,r.jsx)(n.br,{}),"\n","Values are rounded and must be within the range of 0-255."]}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"math."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"torgba"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(input)"})]})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["input: ",(0,r.jsx)(n.code,{children:"string"})," or ",(0,r.jsx)(n.code,{children:"table"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["value: ",(0,r.jsx)(n.code,{children:"number"})," or ",(0,r.jsx)(n.code,{children:"vector2"})," or ",(0,r.jsx)(n.code,{children:"vector3"})," or ",(0,r.jsx)(n.code,{children:"vector4"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"mathhextorgb",children:"math.hextorgb"}),"\n",(0,r.jsx)(n.p,{children:"Takes a hexadecimal string and returns three integers."}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"math."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"hextorgb"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(input)"})]})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["input: ",(0,r.jsx)(n.code,{children:"string"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A hexadecimal value, e.g. ",(0,r.jsx)(n.code,{children:"'eb4034'"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["r: ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.li,{children:["g: ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.li,{children:["b: ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"mathtohex",children:"math.tohex"}),"\n",(0,r.jsx)(n.p,{children:"Takes a number or string and formats it as a hexadecimal string."}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"math."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"tohex"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(n, upper)"})]})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["n: ",(0,r.jsx)(n.code,{children:"number"})," or ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:["upper?: ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["hex: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"mathgroupdigits",children:"math.groupdigits"}),"\n",(0,r.jsx)(n.p,{children:"Takes a number and formats it into grouped digits."}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"math."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"groupdigits"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(number, seperator)"})]})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["number: ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.li,{children:["seperator?: ",(0,r.jsx)(n.code,{children:"string"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:","})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["groupedDigits: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"mathclamp",children:"math.clamp"}),"\n",(0,r.jsx)(n.p,{children:"Clamps a number between a lower and upper limit."}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"math."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"clamp"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(number, lower, upper)"})]})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["number: ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.li,{children:["lower: ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.li,{children:["upper: ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["number: ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"mathround",children:"math.round"}),"\n",(0,r.jsx)(n.p,{children:"Rounds a number to a whole number or to the specified number of decimal places."}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"math."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"round"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(value, places)"})]})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["value: ",(0,r.jsx)(n.code,{children:"number"})," | ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:["places?: ",(0,r.jsx)(n.code,{children:"number"})," | ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["roundedValue: ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"mathinterp",children:"math.interp"}),"\n",(0,r.jsxs)(n.p,{children:["Calculates an intermediate value between ",(0,r.jsx)(n.code,{children:"start"})," and ",(0,r.jsx)(n.code,{children:"finish"})," based on the interpolation ",(0,r.jsx)(n.code,{children:"factor"}),"."]}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"math."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"interp"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(start, finish, factor)"})]})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["generic ",(0,r.jsx)(n.code,{children:"T"}),": ",(0,r.jsx)(n.code,{children:"number"})," | ",(0,r.jsx)(n.code,{children:"vector2"})," | ",(0,r.jsx)(n.code,{children:"vector3"})," | ",(0,r.jsx)(n.code,{children:"vector4"})]}),"\n",(0,r.jsxs)(n.li,{children:["start: ",(0,r.jsx)(n.code,{children:"T"})]}),"\n",(0,r.jsxs)(n.li,{children:["finish: ",(0,r.jsx)(n.code,{children:"T"})]}),"\n",(0,r.jsxs)(n.li,{children:["factor: ",(0,r.jsx)(n.code,{children:"number"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The interpolation factor between 0 and 1."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["result: ",(0,r.jsx)(n.code,{children:"T"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"mathlerp",children:"math.lerp"}),"\n",(0,r.jsx)(n.p,{children:"Linearly interpolates between two values over a specified duration, returning an iterator function that will run once per game-frame."}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"math."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"lerp"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(start, finish, duration)"})]})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["generic ",(0,r.jsx)(n.code,{children:"T"}),": ",(0,r.jsx)(n.code,{children:"number"})," | ",(0,r.jsx)(n.code,{children:"table"})," | ",(0,r.jsx)(n.code,{children:"vector2"})," | ",(0,r.jsx)(n.code,{children:"vector3"})," | ",(0,r.jsx)(n.code,{children:"vector4"})]}),"\n",(0,r.jsxs)(n.li,{children:["start: ",(0,r.jsx)(n.code,{children:"T"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The starting value of the interpolation"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["finish: ",(0,r.jsx)(n.code,{children:"T"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The ending value of the interpolation"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["duration: ",(0,r.jsx)(n.code,{children:"number"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The duration over which to interpolate over in milliseconds."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["iteratorFunction: ",(0,r.jsx)(n.code,{children:"fun(): T, number"})]}),"\n"]})]})}n.default=(0,s.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/ox_lib/Modules/Math/Shared.mdx",route:"/ox_lib/Modules/Math/Shared",timestamp:1722343894e3,title:"Shared",headings:i},pageNextRoute:"/ox_lib/Modules/Math/Shared"})}},function(e){e.O(0,[2601,9774,2888,179],function(){return e(e.s=45894)}),_N_E=e.O()}]);