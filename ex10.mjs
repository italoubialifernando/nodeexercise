const { createServer } = require("node:http");


function createApp() {
  return createServer((request, response) => {
  
  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");


  response.end(JSON.stringify({ name: "italo" }));
});
}


module.exports = createApp
module.exports = createApp

/* 
const supertest = require("supertest");

const createApp = require("./app.js");

const app = createApp();

const request = supertest(app);

test("GET /", async () => {
    const response = await request
        .get("/")
        .expect(200)
        .expect("Content-Type", "application/json");

    expect(response.text).toEqual({ name: "italo" });
}); */
