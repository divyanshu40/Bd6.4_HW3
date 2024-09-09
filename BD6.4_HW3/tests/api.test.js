let request = require("supertest");
let http = require("http");
let { app } = require("../index");
let { getAllArticles, getArticleById, getAllComments, getCommentById, getUserById } = require("../functions");


jest.mock("../functions", () => ({
  ...jest.requireActual("../functions"),
getAllArticles: jest.fn(),
getArticleById: jest.fn(),
getAllComments: jest.fn(),
getCommentById: jest.fn(),
getUserById: jest.fn()
}));

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, done);
});

afterAll((done) => {
  server.close(done);
});

describe("API Error Testing", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  // Exercise 6: Test Get All Articles with No Articles
  it("GET API /articles should return 404 if no articles found", async () => {
    getAllArticles.mockReturnValue([]);
    let result = await request(server).get("/articles");
    expect(result.status).toEqual(404);
    expect(result.body.error).toBe("No articles found");
  });
  // Exercise 7: Test Get Article by Non-Existent ID
  it("GET API /articles/:id should return 404 if article not found", async () => {
    getArticleById.mockReturnValue(null);
    let result = await request(server).get("/articles/5");
    expect(result.status).toEqual(404);
    expect(result.body.error).toBe("Article not found");
  });
  // Exercise 8: Test Get All Comments with No Comments
it("GET API /comments should return 404 if no comments found", async () => {
  getAllComments.mockReturnValue([]);
  let result = await request(server).get("/comments");
  expect(result.status).toEqual(404);
  expect(result.body.error).toBe("No comments found");
});
// Exercise 9: Test Get Comment by Non-Existent ID
it("GET API /comments/:id should return 404 if comment not found.", async () => {
  getCommentById.mockReturnValue(null);
  let result = await request(server).get("/comments/6");
  expect(result.status).toEqual(404);
  expect(result.body.error).toBe("Comment not found");
});
// Exercise 10: Test Get User by Non-Existent ID
it("GET API /users/:id should return 404 if user not found", async () => {
  getUserById.mockReturnValue(null);
  let result = await request(server).get("/users/4");
  expect(result.status).toEqual(404);
  expect(result.body.error).toBe("User not found");
});
});