"bundle";!function(){var a=System.get("@@amd-helpers").createDefine();define("app.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template> <require from="purecss/build/base.css"></require> <require from="purecss/build/buttons.css"></require> <router-view></router-view> </template>'}),a()}(),System.register("app.js",[],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[],execute:function(){c=function(){function a(){b(this,a)}return d(a,[{key:"configureRouter",value:function(a,b){a.title="Aurelia",a.map([{route:["","test"],name:"test",moduleId:"test",nav:!0,title:"Test job"}]),this.router=b}}]),a}(),a("App",c)}}}),System.register("main.js",[],function(a){"use strict";function b(a){a.use.standardConfiguration(),a.start().then(function(){return a.setRoot()})}return a("configure",b),{setters:[],execute:function(){}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("test.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template> <require from="components/list-manager"></require> <section class="main"> <p>Test description: <a href="https://docs.google.com/document/d/1Uhy6I3MFraPHfitt61zM6QGG0Gi5ktoIFuUXsZ-3ZgQ">english</a> <a href="https://docs.google.com/document/d/1GXQ69YKHMPjTQlv4Gxcrxjx2_NjfIatTnHGHA9XQTsI">russian</a> </p> <list-manager model.bind="model" dest-list.bind="model[0]" feedback-timeout="300"></list-manager> </section> </template>'}),a()}(),System.register("test.js",[],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c;return{setters:[],execute:function(){c=function d(){b(this,d),this.model=[{id:"1",items:["A","B","C"]},{id:"2",items:[1,2,3],feedback:{bdHighlight:!0,bgHighlight:!1}},{id:"3",items:["X","Y","Z"],feedback:{bdHighlight:!0,bgHighlight:!0},redundantCopyTo:["1"]}]},a("Test",c)}}});
