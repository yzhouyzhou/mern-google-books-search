(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/math-background.14737e21.jpg"},23:function(e,t,a){e.exports=a(51)},46:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(19),r=a.n(o),c=a(54),i=a(55),s=a(56);function u(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function m(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function h(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}var d=a(20),E=a.n(d);var f=function(e){var t=e.children,a={width:"100%",height:"230px",background:"url(".concat(E.a,") no-repeat"),backgroundSize:"cover",clear:"both",paddingTop:80,marginTop:55,border:"3px solid gray",textAlign:"center",color:"darkgreen"};return l.a.createElement("div",{style:a,className:"jumbotron"},t)};var g=function(){return l.a.createElement(u,{fluid:!0},l.a.createElement(m,null,l.a.createElement(h,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var b=function(){return l.a.createElement("nav",{style:{backgroundColor:"darkgreen",color:"wheat"},className:"navbar fixed-top navbar-expand-lg navbar-dark"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8"},l.a.createElement("h2",null,"MERN Google Books ")),l.a.createElement("div",{className:"col-2"},l.a.createElement("a",{className:"navbar-brand",href:"/Search",style:{color:"wheat"}},"Search")),l.a.createElement("div",{className:"col-2"},l.a.createElement("a",{className:"navbar-brand",href:"/Savedbooks",style:{color:"wheat"}},"Saved"))))},k=a(21),v=a(6),p=a(7),w=a(10),y=a(8),N=a(11),B=a(5),S=a.n(B),j={searchBooks:function(e){return console.log("searchBooks ",e),S.a.get("/api/search/"+e)},getBooks:function(){return S.a.get("/api/books")},getBook:function(e){return S.a.get("/api/books/"+e)},deleteBook:function(e){return S.a.delete("/api/books/"+e)},saveBook:function(e){return console.log("saving the book "+e.title),S.a.post("/api/books",e)}};function x(e){var t=e.children;return l.a.createElement("ul",{className:"list-group"},t)}function O(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function z(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function I(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10,width:420,backgroundColor:"darkgreen",color:"wheat"},className:"btn btn-success"}),e.children)}function C(e){return l.a.createElement("button",Object.assign({style:{float:"left",marginTop:20,width:180},className:"btn btn-dark"},e),"View")}function D(e){return l.a.createElement("button",Object.assign({style:{float:"left",marginTop:20,width:180},className:"btn btn-dark"},e),"Save")}function L(e){return l.a.createElement("button",Object.assign({style:{float:"left",marginTop:20,width:180},className:"btn btn-dark"},e),"Delete")}a(46);var T=function(e){var t=e.src;return l.a.createElement("div",{className:"thumbnail",role:"img","aria-label":"Book Image",style:{backgroundImage:"url(".concat(t,")")}})},V=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(w.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],title:""},a.loadBooks=function(){0!==a.state.title.length&&j.searchBooks(a.state.title).then(function(e){return a.setState({books:e.data.items,title:"",author:"",description:""})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(k.a)({},n,l))},a.handleSearchSubmit=function(e){e.preventDefault(),j.searchBooks(a.state.title).then(function(e){a.setState({books:e.data.items}),console.log(a.state.books)}).catch(function(e){return console.log(e)})},a.handleSaveSubmit=function(e){console.log("the book is going to save "+e.title),e.title&&j.saveBook({title:e.title,author:e.authors?e.authors.join(", "):e.authors,description:e.description,image:e.imageLinks.thumbnail?e.imageLinks.thumbnail:"",link:e.previewLink}).then(function(t){return alert("Saved the Book [ ".concat(e.title," ]"))}).catch(function(e){return console.log(e)})},a.handleViewSubmit=function(e){console.log("the book is going to view "+e.title),window.open("".concat(e.previewLink))},a}return Object(N.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement(u,{fluid:!0},l.a.createElement(m,null,l.a.createElement(h,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"Think before you speak. Read before you think."),l.a.createElement("h4",null,"Search for and Save Books of Interest")),l.a.createElement("form",null,l.a.createElement(z,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Harry Potter (eg)"}),l.a.createElement(I,{disabled:!this.state.title,onClick:this.handleSearchSubmit},"Search Book")))),l.a.createElement(m,null,l.a.createElement(h,{size:"xs-12"},this.state.books.length?l.a.createElement(x,null,l.a.createElement("h1",null,l.a.createElement("u",null,"Results")),this.state.books.map(function(t){return l.a.createElement(O,{key:t.id},l.a.createElement(u,null,l.a.createElement(m,null,l.a.createElement(h,{size:"md-7"},l.a.createElement("h3",null,t.volumeInfo.title),l.a.createElement("h6",null,"Writen by : ",t.volumeInfo.authors?t.volumeInfo.authors.join(",  "):"")),l.a.createElement(h,{size:"md-2"},l.a.createElement(C,{onClick:function(){return e.handleViewSubmit(t.volumeInfo)}})),l.a.createElement(h,{size:"md-2"},l.a.createElement(D,{onClick:function(){return e.handleSaveSubmit(t.volumeInfo)}}))),l.a.createElement(m,null,l.a.createElement(h,{size:"xs-4 sm-2"},l.a.createElement(T,{src:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:""})),l.a.createElement(h,{size:"xs-8 sm-9"},l.a.createElement("p",null,l.a.createElement("strong",null,"Description: "),t.volumeInfo.description)))))})):l.a.createElement("h1",{className:"text-center"},"No Books to Display"))))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(w.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(l)))).state={books:[]},a.loadBooks=function(){j.getBooks().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){j.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.handleViewSubmit=function(e){console.log("the book is going to view "+e),window.open("".concat(e))},a}return Object(N.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement(u,{fluid:!0},l.a.createElement(m,null,l.a.createElement(h,{size:"sm-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"Books On My List")),this.state.books.length?l.a.createElement(x,null,l.a.createElement("h1",null,l.a.createElement("u",null,"Saved Books")),this.state.books.map(function(t){return l.a.createElement(O,{key:t._id},l.a.createElement(u,null,l.a.createElement(m,null,l.a.createElement(h,{size:"md-7"},l.a.createElement("h3",null,t.title),l.a.createElement("h6",null,"Writen by : ",t.author)),l.a.createElement(h,{size:"md-2"},l.a.createElement(C,{onClick:function(){return e.handleViewSubmit(t.link)}})),l.a.createElement(h,{size:"md-2"},l.a.createElement(L,{onClick:function(){return e.deleteBook(t._id)}}))),l.a.createElement(m,null,l.a.createElement(h,{size:"xs-4 sm-2"},l.a.createElement(T,{src:t.image?t.image:""})),l.a.createElement(h,{size:"xs-8 sm-9"},l.a.createElement("p",null,l.a.createElement("strong",null,"Description: "),t.description)))))})):l.a.createElement("h1",{className:"text-center"},"No Books to Display"))))}}]),t}(n.Component);a(47);var R=function(e){return console.log(e),l.a.createElement("footer",{className:"Footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"text-center text-white"},l.a.createElement("img",{className:"logo",alt:"logo",src:"logo192.png"}),l.a.createElement("span",null," CopyWrite"))))};var W=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(i.a,null,l.a.createElement(s.a,{exact:!0,path:"/",component:V}),l.a.createElement(s.a,{exact:!0,path:"/search",component:V}),l.a.createElement(s.a,{exact:!0,path:"/savedbooks",component:M}),l.a.createElement(s.a,{component:g})),l.a.createElement(R,null)))};r.a.render(l.a.createElement(W,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.d1e8bd7e.chunk.js.map