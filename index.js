var Map = function(values){
  this._keys = [];
  this._values = [];
  values && values.forEach(function(data){
    this.set.apply(this, data);
  });
};

Map.prototype.set = function(key, value) {
  var index = this._keys.indexOf(key);
  if (index === -1) {
    index = this._keys.length;
  }
  this._values[index] = value;
  this._keys[index] = key;
};

Map.prototype.get = function(key) {
  if ( this.has(key) === false ) return undefined;
  var index = this._keys.indexOf(key);
  return this._values[index];
};

Map.prototype.size = function() {
  return this._keys.length;
};

Map.prototype.delete = function(key) {
  if ( this.has(key) === false ) return true;
  var index = this._keys.indexOf(key);
  this._keys.splice(index, 1);
  this._values.splice(index, 1);
  return true;
};

Map.prototype.values = function() {
  return this._values;
};

Map.prototype.keys = function() {
  return this._keys;
};

Map.prototype.forEach = function(callback, context) {
  for(var i = 0; i < this._keys.length, i++) {
    callback.call(context || this._values[i], this._values[i], this._keys[i]);
  }
};

Map.prototype.has = function(key) {
  return this._keys.indexOf(key) > -1;
};

module.exports = Map;