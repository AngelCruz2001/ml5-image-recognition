(this["webpackJsonpimage-recognition"]=this["webpackJsonpimage-recognition"]||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/bird.6ae1f642.png"},12:function(e,t,a){e.exports=a(39)},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),c=a.n(s),i=a(1),l=function(e){var t=e.dataImage;return console.log(t),r.a.createElement("img",{src:t,id:"image",className:"img-thumbnail animate__animated animate__backInLeft",width:"400",alt:""})},m=function(e){var t=e.results,a=(e.setInitialMessage,e.initialMessage);console.log("asdf: ",t);var n=["info","warning","danger"];return r.a.createElement("div",null,a?r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("footer",{className:"blockquote-footer mt-4",style:{fontSize:30}},'To start with the searching please click "Analyze" ')):r.a.createElement(r.a.Fragment,null,t.length>0?r.a.createElement("div",{className:"mt-3"},t.map((function(e,t){var a=e.label,s=e.confidence;return r.a.createElement("div",{key:s,className:"animate__animated animate__rubberBand"},r.a.createElement("p",{className:"h3"},a),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-striped bg-".concat(n[t]),role:"progressbar",style:{width:"".concat(100*s,"%")}})),r.a.createElement("p",{className:"h2 text-center"},(100*s).toFixed(2)))}))):r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border m-5",role:"status"}))))},o=a(2),u=a.n(o),d=a(9),p=a(10),g=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.imageClassifier("MobileNet");case 2:return a=e.sent,e.next=5,a.classify(t);case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.setDataImage,a=e.setInitialMessage,s=e.setResults,c=Object(n.useState)("Bird.png"),l=Object(i.a)(c,2),m=l[0],o=l[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"custom-file"},r.a.createElement("input",{type:"file",className:"custom-file-input",id:"inputGroupFile04","aria-describedby":"inputGroupFileAddon04",onChange:function(e){var n=e.target.files[0];if(n){o(n.name);var r=new FileReader;r.onload=function(e){var a=e.target;t(a.result)},r.readAsDataURL(n)}a(!0)},security:"true"}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"inputGroupFile04"},m)),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"inputGroupFileAddon04",onClick:function(){s([]),a(!1),g(document.getElementById("image")).then((function(e){s(e)}))}},"Analyze"))))},b=a(11),E=a.n(b),v=(a(38),function(){var e=Object(n.useState)(E.a),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)([]),o=Object(i.a)(c,2),u=o[0],d=o[1],p=Object(n.useState)(!0),b=Object(i.a)(p,2),v=b[0],N=b[1];return Object(n.useEffect)((function(){g(document.getElementById("image")).then((function(e){d(e)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Image classification with ML5.js"),r.a.createElement("hr",null),r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-5"},r.a.createElement(l,{dataImage:a})),r.a.createElement("div",{className:"col"},r.a.createElement(f,{setDataImage:s,setInitialMessage:N,setResults:d}),r.a.createElement(m,{results:u,setInitialMessage:N,initialMessage:v}))))});c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.f674324c.chunk.js.map