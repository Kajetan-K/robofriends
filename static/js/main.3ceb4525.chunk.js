(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(4),s=n.n(c),o=(n(13),n(3)),a=n(0),i=function(e){var t=e.name,n=e.email,r=e.id;return Object(a.jsxs)("div",{className:"tc bg-light-green dib br3 ps3 ma2 grow bw2 shadow-5",children:[Object(a.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(r,"?200x200")}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:t}),Object(a.jsx)("p",{children:n})]})]})},h=function(e){var t=e.robots;return Object(a.jsx)("div",{children:t.map((function(e,n){return Object(a.jsx)(i,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},j=function(e){var t=e.searchChange;return Object(a.jsx)("div",{className:"pa2",children:Object(a.jsx)("input",{className:"pa 3 ba b--green bg-lightest-blue f3",type:"search",placeholder:"search robots",onChange:t})})},b=function(e){return Object(a.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},l=n(5),d=n(6),u=n(8),O=n(7),f=function(e){Object(u.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(a.jsx)("h1",{children:"Oooops. That is not good"}):this.props.children}}]),n}(r.Component);n(15);var p=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),l=i[0],d=i[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);var u=n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return n.length?Object(a.jsxs)("div",{className:"tc",children:[Object(a.jsx)("h1",{className:"f1",children:" Robofriends"}),Object(a.jsx)(j,{searchChange:function(e){d(e.target.value)}}),Object(a.jsx)(b,{children:Object(a.jsx)(f,{children:Object(a.jsx)(h,{robots:u})})})]}):Object(a.jsx)("h1",{children:" Loading "})};n(16);s.a.render(Object(a.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3ceb4525.chunk.js.map