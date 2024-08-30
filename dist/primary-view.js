import { _ as __decorate, a as _inherits, b as _createClass, t, j as i, c as _taggedTemplateLiteral, k as ke, h, d as _classCallCheck, e as _callSuper } from './custom-element-B4KNkwcf.js';
import { n } from './property-BNEfCaap.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
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
      var _this$cards$reduce = this.cards.reduce(function (acc, card) {
          var _a, _b;
          var isSidebar = (_b = (_a = card._elementConfig) === null || _a === void 0 ? void 0 : _a.variables) === null || _b === void 0 ? void 0 : _b.find(function (v) {
            return "sidebar" in v && v.sidebar === 1;
          });
          if (isSidebar) {
            acc.sidebar.push(card);
          } else {
            acc.cards.push(card);
          }
          return acc;
        }, {
          sidebar: [],
          cards: []
        }),
        sidebar = _this$cards$reduce.sidebar,
        cards = _this$cards$reduce.cards;
      return ke(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <div id=\"container\">\n        <section id=\"sidebar\">\n          ", "\n        </section>\n        <section id=\"cards\">\n          ", "\n        </section>\n      </div>\n    "])), sidebar.map(function (card) {
        return ke(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<div>", "</div>"])), card);
      }), cards.map(function (card) {
        return ke(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<div>", "</div>"])), card);
      }));
    }
  }], [{
    key: "styles",
    get: function get() {
      return i(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      #container {\n        height: 100%;\n        display: grid;\n        grid-template-columns: 350px 1fr;\n      }\n\n      #sidebar {\n        box-sizing: border-box;\n        background-color: var(--secondary-background-color);\n        padding: 10px;\n        display: grid;\n        grid-template-rows: auto auto minmax(0, 1fr);\n        gap: 15px;\n        height: calc(100vh - var(--header-height));\n      }\n\n      #cards {\n        padding: 10px;\n        gap: 15px;\n        display: grid;\n        grid-template-columns: repeat(auto-fill, 250px);\n        grid-template-rows: repeat(auto-fill, 250px);\n        overflow-y: auto;\n    "])));
    }
  }]);
}(h);
__decorate([n({
  type: Array
})], PrimaryView.prototype, "cards", void 0);
PrimaryView = __decorate([t("primary-view")], PrimaryView);
//# sourceMappingURL=primary-view.js.map
