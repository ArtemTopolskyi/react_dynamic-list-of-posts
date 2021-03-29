(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(8),l=n.n(o),r=n(1),s=(n(14),n(15),"https://mate-api.herokuapp.com");function u(e){return fetch("".concat(s,"/").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}n(16);var m=function(e){var t=e.userId,n=e.selectedPostId,o=e.changeSelectedPostId,l=Object(a.useState)(null),s=Object(r.a)(l,2),m=s[0],i=s[1];return Object(a.useEffect)((function(){(function(e){var t=u("posts");return e?t.then((function(t){return t.data.filter((function(t){return t.userId===e}))})):t.then((function(e){return e.data}))})(t).then((function(e){return i(e)}))}),[t]),c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),m?c.a.createElement("ul",{className:"PostsList__list"},m&&m.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostsList__item"},c.a.createElement("div",null,c.a.createElement("b",null,"[User #".concat(e.userId,"]")),c.a.createElement("br",null),e.title),n===e.id?c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return o(0)}},"Close"):c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return o(e.id)}},"Open"))}))):c.a.createElement(c.a.Fragment,null,"Loading..."))},i=n(5),d=n(4),p=n(6),f=(n(17),function(e){var t=e.postId,n=e.comments,o=e.addComment,l=Object(a.useState)({name:"",email:"",body:""}),u=Object(r.a)(l,2),m=u[0],f=u[1],E=function(e){var t=e.target,n=t.name,a=t.value;f((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(d.a)({},n,a))}))};return c.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault();var a,c={id:n.length>0?Math.max.apply(Math,Object(i.a)(n.map((function(e){return e.id}))))+1:1,postId:t,name:m.name,email:m.email,body:m.body,createdAt:String(new Date),updatedAt:String(new Date)};o(c),a=c,fetch("".concat(s,"/comments"),{method:"POST",headers:{"Content-type":"application/json; charset=utf-8"},body:JSON.stringify({postId:a.postId,name:a.name,email:a.email,body:a.body})}).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText))})),f({name:"",email:"",body:""})}},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:m.name,onChange:E})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:m.email,onChange:E})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:m.body,onChange:E})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),E=(n(18),function(e){var t=e.postId,n=Object(a.useState)(null),o=Object(r.a)(n,2),l=o[0],m=o[1],d=Object(a.useState)(null),p=Object(r.a)(d,2),E=p[0],b=p[1],h=Object(a.useState)(!0),v=Object(r.a)(h,2),_=v[0],N=v[1];Object(a.useEffect)((function(){(function(e){return u("posts/".concat(e)).then((function(e){return e.data}))})(t).then((function(e){return m(e)})),function(e){return u("comments").then((function(t){return t.data.filter((function(t){return t.postId===e}))}))}(t).then((function(e){return b(e)}))}),[t]);var y=function(e){!function(e){fetch("".concat(s,"/comments/").concat(e),{method:"DELETE"}).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText))}))}(e),b((function(t){return t.filter((function(t){return t.id!==e}))}))};return c.a.createElement(c.a.Fragment,null,l&&E?c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,l.title)),c.a.createElement("section",{className:"PostDetails__comments"},E.length>0&&c.a.createElement("button",{type:"button",className:"button",onClick:function(){N((function(e){return!e}))}},_?"Hide ".concat(E.length," comments"):"Show ".concat(E.length," comments")),c.a.createElement("ul",{className:"PostDetails__list"},_&&E.map((function(e){return c.a.createElement("li",{className:"PostDetails__list-item",key:e.id},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return y(e.id)}},"X"),c.a.createElement("p",null,e.body))})))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(f,{postId:t,comments:E,addComment:function(e){b((function(t){return[].concat(Object(i.a)(t),[e])}))}})))):c.a.createElement(c.a.Fragment,null,"Loading..."))}),b=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(0),s=Object(r.a)(l,2),u=s[0],i=s[1],d=Object(a.useState)(0),p=Object(r.a)(d,2),f=p[0],b=p[1];return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",value:u,onChange:function(e){i(e.target.value),o(Number(e.target.value))}},c.a.createElement("option",{value:"0"},"All users"),c.a.createElement("option",{value:"1"},"Leanne Graham"),c.a.createElement("option",{value:"2"},"Ervin Howell"),c.a.createElement("option",{value:"3"},"Clementine Bauch"),c.a.createElement("option",{value:"4"},"Patricia Lebsack"),c.a.createElement("option",{value:"5"},"Chelsey Dietrich"),c.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),c.a.createElement("option",{value:"7"},"Kurtis Weissnat"),c.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),c.a.createElement("option",{value:"9"},"Glenna Reichert"),c.a.createElement("option",{value:"10"},"Leanne Graham")))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(m,{userId:n,selectedPostId:f,changeSelectedPostId:b})),Boolean(f)&&c.a.createElement("div",{className:"App__content"},c.a.createElement(E,{postId:f}))))};l.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.147351a7.chunk.js.map