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
});
