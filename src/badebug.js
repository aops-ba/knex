const {performance} = require("perf_hooks");

// The base client provides the general structure
// for a dialect specific client object.
function BADebug(config = {}) {
  this._logArr = [];
}

BADebug.prototype.log = function(knexObj, entry) {
  let id = knexObj ? knexObj.__knexQueryUid : null;
  if (typeof knexObj !== "object") id = knexObj;
  this._logArr.push([this._getNow(), id, entry]);
  this._prune();
};

BADebug.prototype.get = function() {
  return this._logArr;
};

BADebug.prototype._prune = function() {
  const n = this._logArr.length;
  if (n > 10000) {
    this._logArr = this._logArr.slice(n - 5000);
  }
};

BADebug.prototype._getNow = function() {
  const d = performance.now();
  return Math.floor(d);
};

module.exports = BADebug;
