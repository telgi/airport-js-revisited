function Airport(weather) {
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._planes = [];
}

Airport.prototype.planes = function() {
  return this._planes;
};

Airport.prototype.clearForLanding = function(plane) {
  if (this._weather.isStormy()) {
    throw new Error('Cannot land during storm');
  } else {
    this._planes.push(plane);
  }
};

Airport.prototype.clearForTakeOff = function () {
  if (this._weather.isStormy()) {
    throw new Error('Cannot take off during storm');
  } else {
    this._planes.pop();
  }
};
