(this["webpackJsonpcalculator-web"]=this["webpackJsonpcalculator-web"]||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(2),i=t.n(c),l=(t(13),t(3)),u=t(4),o=t(6),s=t(5),d=t(7),m=(t(14),t(15),function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={display:"0",currentNumber:"0"},t.addDecimal=function(){t.setState((function(e){return e.currentNumber.includes(".")?null:""===e.display[e.display.length-1].trim()?{display:e.display+"0.",currentNumber:e.currentNumber+"."}:{display:e.display+".",currentNumber:e.currentNumber+"."}}))},t.addNumber=function(e){t.setState((function(n){return"0"===n.display?{display:e,currentNumber:e}:{display:n.display+e,currentNumber:n.display+e}}))},t.addOperator=function(e){t.setState((function(n){var t=n.display[n.display.length-2];return["+","-","/","*"].includes(t)?{display:"".concat(n.display.slice(0,-3)," ").concat(e," "),currentNumber:"0"}:{display:"".concat(n.display," ").concat(e," "),currentNumber:"0"}}))},t.calculate=function(){},t.clear=function(){t.setState({display:"0",currentNumber:"0"})},t.toggleSign=function(){},t}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this,n=this.state.display;return r.a.createElement("div",{className:"App"},r.a.createElement("main",null,r.a.createElement("div",{className:"calculator"},r.a.createElement("section",{className:"display"},n),r.a.createElement("section",{className:"number-pad"},r.a.createElement("div",{className:"btn btn--clear",onClick:function(){return e.clear()}},"Clear"),r.a.createElement("div",{className:"btn btn--operand-plus",onClick:function(){return e.addOperator("+")}},"+"),r.a.createElement("div",{className:"btn btn--number-7",onClick:function(){return e.addNumber("7")}},"7"),r.a.createElement("div",{className:"btn btn--number-8",onClick:function(){return e.addNumber("8")}},"8"),r.a.createElement("div",{className:"btn btn--number-9",onClick:function(){return e.addNumber("9")}},"9"),r.a.createElement("div",{className:"btn btn--operand-minus",onClick:function(){return e.addOperator("-")}},"-"),r.a.createElement("div",{className:"btn btn--number-4",onClick:function(){return e.addNumber("4")}},"4"),r.a.createElement("div",{className:"btn btn--number-5",onClick:function(){return e.addNumber("5")}},"5"),r.a.createElement("div",{className:"btn btn--number-6",onClick:function(){return e.addNumber("6")}},"6"),r.a.createElement("div",{className:"btn btn--operand-division",onClick:function(){return e.addOperator("/")}},"\xf7"),r.a.createElement("div",{className:"btn btn--number-1",onClick:function(){return e.addNumber("7")}},"7"),r.a.createElement("div",{className:"btn btn--number-2",onClick:function(){return e.addNumber("8")}},"8"),r.a.createElement("div",{className:"btn btn--number-3",onClick:function(){return e.addNumber("9")}},"9"),r.a.createElement("div",{className:"btn btn--operand-product",onClick:function(){return e.addOperator("*")}},"x"),r.a.createElement("div",{className:"btn btn--sign",onClick:function(){return e.toggleSign()}},"+/-"),r.a.createElement("div",{className:"btn btn--decimal",onClick:function(){return e.addDecimal()}},"."),r.a.createElement("div",{className:"btn btn--number-0",onClick:function(){return e.addNumber("0")}},"0"),r.a.createElement("div",{className:"btn btn--operand-equal",onClick:function(){return e.calculate()}},"=")))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.b9db8ac3.chunk.js.map