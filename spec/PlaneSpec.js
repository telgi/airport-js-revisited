describe("Plane", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeOff']);
  });

  describe("Landing", function() {
    it("should be able to land in airport", function() {
      plane.land(airport);
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
  });

  describe("Taking off", function() {
    it("should be able to take off from an airport", function() {
      plane.land(airport);
      plane.takeOff();
      expect(airport.clearForTakeOff).toHaveBeenCalledWith();
    });
  });
});
