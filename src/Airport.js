function Airport(weather, capacity) {
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._capacity = typeof capacity !== 'undefined' ? capacity : 20;
  this._planes = [];
}

Airport.prototype.planes = function() {
  return this._planes;
};

Airport.prototype.capacity = function () {
  return this._capacity;
};

Airport.prototype.clearForLanding = function(plane) {
  if (this._weather.isStormy()) {
    throw new Error('Cannot land during storm');
  } else if (this._isFull()) {
    throw new Error('Cannot land - Airport is full');
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

Airport.prototype._isFull = function () {
  return (this._planes.length === this._capacity);
};
