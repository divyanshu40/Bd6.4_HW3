let express = require("express");
let { getAllArticles, getArticleById, getAllComments, getCommentById, getUserById } = require("./functions");
let app = express();
app.use(express.json());

// Exercise 1: Get All Articles
app.get("/articles", async (req, res) => {
  try {
    let result = await getAllArticles();
    if (result.length === 0) {
      return res.status(404).json({ error: "No articles found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error."});
  }
});
// Exercise 2 : Get Article by ID
app.get("/articles/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  try {
    let result = await getArticleById(id);
    if (! result) {
      return res.status(404).json({ error: "Article not found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error."});
  }
});
// Exercise 3 : Get All Comments
app.get("/comments", async (req, res) => {
  try {
    let result = await getAllComments();
    if (result.length === 0) {
      return res.status(404).json({ error: "No comments found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error."});
  }
});
// Exercise 4 : Get Comment by ID
app.get("/comments/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  try {
    let result = await getCommentById(id);
    if (! result) {
      return res.status(404).json({ error: "Comment not found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error"});
  }
});
// Exercise 5 : Get User by ID
app.get("/users/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  try {
    let result = await getUserById(id);
    if (! result) {
      return res.status(404).json({ error: "User not found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error."});
  }
});
module.exports = { app };