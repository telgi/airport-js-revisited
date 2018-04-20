function Airport() {
  this._planes = [];
}

Airport.prototype.planes = function() {
  return this._planes;
};
