/**
 * Defines the testing for the file access api
 *
 */

const app = require("../src/app");
var request = require("supertest")(app);
const { API_TOKEN } = require("../src/config");
const { expect } = require("chai");

describe("GET /files", (done) => {
  it("GET /files - Should require authorization - returns 401", () => {
    request.get("/files").then((response) => {
      expect(response.statusCode, done).toBe(401);
    });
  });

  it("GET /files - Uses authorization - returns 200", () => {
    request
      .get("/files")
      .set("Authorization", "bearer " + API_TOKEN)
      .then((response) => {
        expect(response.statusCode, done).toBe(200);
      });
  });
});

describe("GET /files/download/:filename", (done) => {
  it("responds with 200", () => {
    request
      .get("/files/download/test_note_1.txt")
      .set("Authorization", "bearer " + API_TOKEN)
      .then((response) => {
        expect(response.statusCode, done).toBe(200);
      });
  });
});

describe("GET /files/view/:filename", (done) => {
  it("responds with 200", () => {
    request
      .get("/files/download/test_note_1.txt")
      .set("Authorization", "bearer " + API_TOKEN)
      .then((response) => {
        expect(response.statusCode, done).toBe(200);
      });
  });
});
