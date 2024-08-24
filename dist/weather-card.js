import { _ as __decorate, t, a as _inherits, b as _createClass, k as ke, c as _taggedTemplateLiteral, h, d as _classCallCheck, e as _callSuper } from './custom-element-D6qhRDeR.js';

var _templateObject;
var WeatherCard = /*#__PURE__*/function (_LitElement) {
  function WeatherCard() {
    _classCallCheck(this, WeatherCard);
    return _callSuper(this, WeatherCard, arguments);
  }
  _inherits(WeatherCard, _LitElement);
  return _createClass(WeatherCard, [{
    key: "setConfig",
    value: function setConfig(_config) {}
  }, {
    key: "render",
    value: function render() {
      return ke(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <ha-card header=\"Weather Card\">\n        <div>HELLO WORLD</div>\n      </ha-card>\n    "])));
    }
  }]);
}(h);
WeatherCard = __decorate([t("weather-card")], WeatherCard);
