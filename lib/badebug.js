"use strict";

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The base client provides the general structure
// for a dialect specific client object.
function BADebug() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  this._logArr = [];
  this.start = Date.now();
}

BADebug.prototype.log = function (knexObj, entry) {
  var id = knexObj ? knexObj.__knexQueryUid : null;
  if ((typeof knexObj === "undefined" ? "undefined" : (0, _typeof3.default)(knexObj)) !== "object") id = knexObj;
  this._logArr.push([Date.now() - this.start, id, entry]);
  this._prune();
};

BADebug.prototype.get = function () {
  return this._logArr;
};

BADebug.prototype._prune = function () {
  var n = this._logArr.length;
  if (n > 10000) {
    this._logArr = this._logArr.slice(n - 5000);
  }
};

module.exports = BADebug;