let articles = [
  { id: 1, title: 'Introduction to JavaScript', author: 'Jane Smith' },
  { id: 2, title: 'Advanced CSS Techniques', author: 'Tom Brown' },
];

let comments = [{ id: 1, articleId: 1, content: 'Very informative article!' }];

let users = [{ id: 1, name: 'Alice Johnson', email: 'alice@example.com' }];

// function to get all articles
async function getAllArticles() {
  return articles;
}
// function to get articles by id
async function getArticleById(id) {
  return articles.find((article) => article.id === id);
}
//function to get all comments.
async function getAllComments() {
  return comments;
}
// function to get comment by id.
async function getCommentById(id) {
  return comments.find((comment) => comment.id === id);
}
// function to get user by id.
async function getUserById(id) {
  return users.find((user) => user.id === id);
}

module.exports = { getAllArticles, getArticleById, getAllComments, getCommentById, getUserById };