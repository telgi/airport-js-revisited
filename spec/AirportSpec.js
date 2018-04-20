describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  });

  it("starts with no planes", function() {
    expect(airport.planes()).toEqual([]);
  });

  describe("When conditions are normal", function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(false);
    });

    it("should be able to land a plane", function() {
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it("should be able to get a plane to take off", function() {
      airport.clearForTakeOff();
      expect(airport.planes()).toEqual([]);
    });
  });

  describe("When conditions are stormy", function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(true);
    });

    it("should not land a plane when it's stormy", function() {
      expect(function() { airport.clearForLanding(plane) }).toThrowError('Cannot land during storm');
      expect(airport.planes()).toEqual([]);
    });
  });
});
