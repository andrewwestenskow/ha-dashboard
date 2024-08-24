import { u, f, _ as __decorate, a as _inherits, b as _createClass, t, k as ke, c as _taggedTemplateLiteral, h, d as _classCallCheck, e as _callSuper } from './custom-element-D6qhRDeR.js';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f},r=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

var _templateObject, _templateObject2, _templateObject3;
var PrimaryView = /*#__PURE__*/function (_LitElement) {
  function PrimaryView() {
    var _this;
    _classCallCheck(this, PrimaryView);
    _this = _callSuper(this, PrimaryView, arguments);
    _this.cards = [];
    return _this;
  }
  _inherits(PrimaryView, _LitElement);
  return _createClass(PrimaryView, [{
    key: "setConfig",
    value: function setConfig(_config) {}
  }, {
    key: "render",
    value: function render() {
      if (!this.cards) {
        return ke(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
      }
      return ke(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["", ""])), this.cards.map(function (card) {
        return ke(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<div>", "</div>"])), card);
      }));
    }
  }]);
}(h);
__decorate([n({
  type: Array
})], PrimaryView.prototype, "cards", void 0);
PrimaryView = __decorate([t("primary-view")], PrimaryView);
