const AuthorController = require("../controllers/author.controller")

module.exports = app => {
    // CREATE
    app.post("/api/authors/new", AuthorController.createNewAuthor)
    // READ
    app.get("/api/authors", AuthorController.findAllAuthors)
    app.get("/api/authors/:id", AuthorController.findOneAuthor)
    // UPDATE
    app.put("/api/authors/edit/:id", AuthorController.updateAuthor)
    // DELETE
    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor)
}