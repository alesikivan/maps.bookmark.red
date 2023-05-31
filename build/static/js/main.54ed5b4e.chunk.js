(this["webpackJsonpkepler-demo"]=this["webpackJsonpkepler-demo"]||[]).push([[0],{1015:function(e,t){},1347:function(e,t,n){},1354:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(91),i=n.n(o),r=(n(845),n(207)),l=n(144),m=n(60);n(848);function u(){return c.a.createElement("div",{className:"container"},c.a.createElement("p",null,"Example ",c.a.createElement("b",null,"Digital City")," about page. Go to the ",c.a.createElement(l.b,{to:"/map"},"map"),"."))}n(849);function s(){return c.a.createElement("div",{className:"container"},c.a.createElement("p",null,"The ",c.a.createElement("b",null,"Digital City")," is a city that is connected to the net and is equipped with technological platforms for information and communications management that can enable the Internet of Things. These platforms also make it possible to process huge amounts of data and information, offering new services to city dwellers as well as new functionality in managing the urban environment."),c.a.createElement("p",null,"Digitalization is a key factor in making cities more sustainable: it enables the development of new forms of urban logistics and mobility, such as electric mobility and car sharing."),c.a.createElement("p",null,"Digitalization also encourages the introduction of new safety and renewable source technologies. It also promotes the introduction of systems for withstanding extreme meteorological events."))}var f=n(29),d=(n(850),n(798)),p=n.n(d),E=n(819),h=n.n(E),b=n(820),g=n(823),w=n(206);function y(e){var t=e.id,n=Object(r.useDispatch)(),a="".concat("https://maps.bookmark.red/get-data","/").concat(t),o=Object(g.a)(a,(function(e){return h.a.get(e).then((function(e){return e.data}))})).data;return c.a.useEffect((function(){if(o){var e=w.KeplerGlSchema.load(o.datasets,o.config);n(Object(b.addDataToMap)(e))}}),[n,o]),c.a.createElement(p.a,{id:"kepler",mapboxApiAccessToken:"pk.eyJ1IjoianVyYWIiLCJhIjoiY2w0Y3B4czh2MDB4bjNibmFtY3lwejVyNiJ9.L0fUUXNK5homTTaZjVa3rg",width:window.innerWidth,height:window.innerHeight})}function j(){var e=Object(a.useState)(!1),t=Object(f.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(1),r=Object(f.a)(i,2),l=r[0],u=r[1],s=Object(m.f)(),d=[{id:1,name:"Traffic Map",keyword:"traffic-map"},{id:2,name:"Cluster Map",keyword:"cluster-map"},{id:3,name:"Czech Highway Weekly Traffic",keyword:"czech-highway-weekly-traffic"}],p=Object(m.g)().type,E=void 0===p?"traffic-map":p;return Object(a.useEffect)((function(){!function(){var e=d.find((function(e){return e.keyword===E})),t=e?e.id:1;u(t)}()}),[]),c.a.createElement("main",{className:"map-page"},c.a.createElement("nav",{className:"map-page-navigation"},c.a.createElement("div",{className:"dropdown open"},c.a.createElement("button",{onClick:function(){return o(!n)},className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Change map"),n?c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},d.map((function(e,t){return c.a.createElement("div",{key:t,onClick:function(){return function(e){var t="Do you want to change the map to ".concat(e.name,"?");window.confirm(t)&&(s("/map/".concat(e.keyword),{replace:!0}),u(e.id),o(!1))}(e)},className:"dropdown-item"},e.id===l?c.a.createElement("span",{className:"active"},"\u2013"):"",e.name)}))):""),c.a.createElement("div",{className:"current-map"},c.a.createElement("span",{className:"text-bold"},"Current map:"),c.a.createElement("span",null,d.find((function(e){return e.id===l})).name))),c.a.createElement("div",{className:"map-area"},c.a.createElement(y,{id:l})))}function v(){return c.a.createElement("div",{className:"container"},c.a.createElement("p",null,"Page not found #404"))}n(1347);function k(){return c.a.createElement("nav",{className:"menu"},c.a.createElement(l.b,{to:"/",className:"logo-title"},"Digital city"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(l.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"map"},"Map")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"about"},"About"))))}var N=n(204),O=n(212),D=n(822),C=n.n(D),M=Object(O.combineReducers)({keplerGl:C.a}),T=Object(O.createStore)(M,{},Object(O.applyMiddleware)(N.taskMiddleware));function x(){return c.a.createElement(r.Provider,{store:T},c.a.createElement(l.a,null,c.a.createElement(k,null),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",element:c.a.createElement(s,null)}),c.a.createElement(m.a,{path:"map/:type",element:c.a.createElement(j,null)}),c.a.createElement(m.a,{path:"map",element:c.a.createElement(j,null)}),c.a.createElement(m.a,{path:"about",element:c.a.createElement(u,null)}),c.a.createElement(m.a,{path:"*",element:c.a.createElement(v,null)}))))}i.a.render(c.a.createElement(x,null),document.getElementById("root"))},307:function(e,t){},308:function(e,t){},309:function(e,t){},518:function(e,t){},519:function(e,t){},520:function(e,t){},521:function(e,t){},522:function(e,t){},523:function(e,t){},524:function(e,t){},558:function(e,t){},559:function(e,t){},560:function(e,t){},804:function(e,t){},805:function(e,t){},806:function(e,t){},807:function(e,t){},808:function(e,t){},840:function(e,t,n){e.exports=n(1354)},845:function(e,t,n){},848:function(e,t,n){},849:function(e,t,n){},850:function(e,t,n){},995:function(e,t,n){var a={"./":44,"./ca":595,"./ca.js":595,"./cn":596,"./cn.js":596,"./en":428,"./en.js":428,"./es":597,"./es.js":597,"./fi":598,"./fi.js":598,"./formatted-message":429,"./formatted-message.js":429,"./index":44,"./index.js":44,"./ja":599,"./ja.js":599,"./locales":120,"./locales.js":120,"./pt":600,"./pt.js":600,"./ru":601,"./ru.js":601};function c(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=o,e.exports=c,c.id=995}},[[840,1,2]]]);
//# sourceMappingURL=main.54ed5b4e.chunk.js.map