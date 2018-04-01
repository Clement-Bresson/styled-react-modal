module.exports=function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n){e.exports=require("styled-components")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.BaseModalBackground=void 0;var o,r,i,u=(o=["\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 30;\n  background-color: rgba(0, 0, 0, 0.5);\n  align-items: center;\n  justify-content: center\n"],r=["\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 30;\n  background-color: rgba(0, 0, 0, 0.5);\n  align-items: center;\n  justify-content: center\n"],Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(r)}}))),a=t(0),c=(i=a)&&i.__esModule?i:{default:i};n.BaseModalBackground=c.default.div(u)},function(e,n){e.exports=require("react-dom")},function(e,n){e.exports=require("react")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.BaseModalBackground=n.ModalProvider=void 0;var o,r,i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},u=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),a=(o=[""],r=[""],Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(r)}}))),c=t(3),s=f(c),l=f(t(2)),d=f(t(0)),p=t(1);function f(e){return e&&e.__esModule?e:{default:e}}function y(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function h(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function v(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var b=null,O=p.BaseModalBackground,k=function(e){function n(){return y(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return v(n,c.Component),u(n,[{key:"componentDidMount",value:function(){this.props.backgroundComponent&&(O=this.props.backgroundComponent)}},{key:"render",value:function(){return s.default.createElement("div",null,this.props.children,s.default.createElement("div",{ref:function(e){b=e}}))}}]),n}(),g=function(e){function n(e){y(this,n);var t=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={isOpen:!1},t.node=null,t.InnerStyles=d.default.div(e.styles)||d.default.div(a),t.onKeydown=t.onKeydown.bind(t),t.onBackgroundClick=t.onBackgroundClick.bind(t),t}return v(n,c.Component),u(n,[{key:"componentDidUpdate",value:function(e,n){n.isOpen!==this.state.isOpen&&(this.state.isOpen?this.state.isOpen&&document.addEventListener("keydown",this.onKeydown):(b&&this.node&&b.removeChild(this.node),document.removeEventListener("keydown",this.onKeydown)))}},{key:"onKeydown",value:function(e){"Escape"===e.key&&this.props.onEscapeKeydown&&this.props.onEscapeKeydown(e)}},{key:"onBackgroundClick",value:function(e){this.node===e.target&&this.props.onBackgroundClick&&this.props.onBackgroundClick(e)}},{key:"render",value:function(){var e=this;return this.props.isOpen?l.default.createPortal(s.default.createElement(O,{onClick:this.onBackgroundClick,innerRef:function(n){e.node=n}},s.default.createElement(this.InnerStyles,null,this.props.children)),b):null}}],[{key:"styled",value:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return function(e){function o(){return y(this,o),h(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return v(o,c.Component),u(o,[{key:"render",value:function(){return s.default.createElement(n,i({styles:t},this.props))}}]),o}()}},{key:"getDerivedStateFromProps",value:function(e){return e.isOpen?e.isOpen?{isOpen:!0}:null:{isOpen:!1}}}]),n}();n.default=g,n.ModalProvider=k,n.BaseModalBackground=p.BaseModalBackground}]);