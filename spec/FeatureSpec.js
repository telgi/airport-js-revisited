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
      expect(airport.planes()).toContain([plane]);
    });
  });
});
