const request = require("supertest");
const server = require("../index");

describe("Test health check", () => {
  it("Health check returns ok", async (done) => {
    const response = await request(server).get("/health-check");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "OK" });
    done();
  });

  afterAll(async (done) => {
    server.close();
    done();
  });
});
