describe("Features", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe("Landing", function() {
    it("should be able to land a plane in an airport", function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });
  });

  describe("Taking Off", function() {
    it("should be able to get a plane to take off from an airport", function() {
      plane.land(airport);
      plane.takeOff(airport);
      expect(airport.planes()).not.toContain(plane);
    });
  });
});
