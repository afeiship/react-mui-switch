!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@material-ui/core"),require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["@material-ui/core","classnames","noop","object-assign","prop-types","react","react-dom"],t):"object"==typeof exports?exports.ReactMuiSwitch=t(require("@material-ui/core"),require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):e.ReactMuiSwitch=t(e["@material-ui/core"],e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react,e["react-dom"])}(this,function(e,t,r,o,n,a,u){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=o(n);t.default=a.default},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,s,p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=r(7),d=o(l),y=r(8),h=(o(y),r(6)),b=o(h),m=r(3),v=o(m),g=r(4),j=(o(g),r(5)),x=(o(j),r(2)),_=(s=c=function(e){function t(){var e,r,o,n;a(this,t);for(var i=arguments.length,c=Array(i),s=0;s<i;s++)c[s]=arguments[s];return r=o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o._onChange=function(e){var t=e.target.checked,r=o.props.onChange;r({target:{value:t}})},n=r,u(o,n)}return i(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.value,o=(e.onChange,n(e,["className","value","onChange"]));return d.default.createElement(x.Switch,p({className:(0,v.default)("react-mui-switch",t),checked:r,onChange:this._onChange},o))}}]),t}(l.Component),c.propTypes={className:b.default.string},c.defaultProps={},s);t.default=_},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t){e.exports=u}])});
//# sourceMappingURL=react-mui-switch.js.map