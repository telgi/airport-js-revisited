describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it("starts with no planes", function() {
    expect(airport.planes()).toEqual([]);
  });

  describe("Landing", function() {
    it("should be able to land a plane", function() {
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });
  });
});
