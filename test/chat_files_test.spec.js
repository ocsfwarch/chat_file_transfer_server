/**
 * Defines the testing for the base case.
 *
 */
const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../src/app");

describe("GET /files", () => {
  it("responds with 200", () => {
    return supertest(app).get("/files").expect(200);
  });
});

describe("GET /files/view/:filename", () => {
  it("responds with 200", () => {
    return supertest(app).get("/files/view/test_note_1.txt").expect(200);
  });
});

describe("GET /files/download/:filename", () => {
  it("responds with 200", () => {
    return supertest(app).get("/files/download/test_note_1.txt").expect(200);
  });
});
