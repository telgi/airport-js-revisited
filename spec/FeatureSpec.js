describe("Features", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe("When conditions are normal", function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0);
    });

    it("should land a plane in an airport", function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it("should get a plane to take off from an airport", function() {
      plane.land(airport);
      plane.takeOff(airport);
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe("When conditions are stormy", function() {
    it("should not land a plane in an airport", function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(function() { plane.land(airport) }).toThrowError('Cannot land during storm');
      expect(airport.planes()).not.toContain(plane);
    });

    it("should not let a plane take off from the airport", function() {
      spyOn(Math, 'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function() { plane.takeOff(airport) }).toThrowError('Cannot take off during storm');
      expect(airport.planes()).toContain(plane);
    });
  });
});
