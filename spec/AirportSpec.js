describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  });

  describe("When a new airport is created", function() {
    it("starts with no planes", function() {
      expect(airport.planes()).toEqual([]);
    });

    it("has a default capacity of 20", function() {
      expect(airport.capacity()).toEqual(20);
    });

    it("can have the capacity overridden", function() {
      biggerAirport = new Airport(weather, 30);
      expect(biggerAirport.capacity()).toEqual(30);
    })
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
    it("should not land a plane", function() {
      weather.isStormy.and.returnValue(true);
      expect(function() { airport.clearForLanding(plane) }).toThrowError('Cannot land during storm');
      expect(airport.planes()).toEqual([]);
    });

    it("should not let a plane take off", function() {
      weather.isStormy.and.returnValue(false);
      airport.clearForLanding(plane);
      weather.isStormy.and.returnValue(true);
      expect(function() { airport.clearForTakeOff() }).toThrowError('Cannot take off during storm');
      expect(airport.planes()).toEqual([plane]);
    });
  });
});
