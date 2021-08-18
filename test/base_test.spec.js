/**
 * Defines the testing for the base case.
 *
 */
const app = require("../src/app");
var request = require("supertest")(app);
const { API_TOKEN } = require("../src/config");
const { expect } = require("chai");
const testStructure = {
  data: {
    title: "test title",
    description: "this is a test data structure",
    results: "SUCCESS",
  },
};

describe("GET /test", function (done) {
  it("should require authorization - returns 401", function () {
    request.get("/test").expect(401, done);
  });

  it("responds with 200 and a test data structure", function () {
    request
      .get("/test")
      .set("Authorization", "bearer " + API_TOKEN)
      .then((response) => {
        expect(response.statusCode, done).toBe(200);
      });
    //.expect(200, testStructure)
    //.expect("Content-Type", /json/);
    //.end(function (err, res) {
    //  if (err) return done(err);
    //  //res.body.should.be.instanceof(Array);
    //  done();
    //});
  });
});
