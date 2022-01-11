const Author = require("../models/author.model");

//CREATE

module.exports.createNewAuthor = (req, res) => {
    console.log(req.body)
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor)) // SUCCESS
        .catch(err => {
            console.log("VALIDATIONS HAVE FAILED")
            res.status(400).json(err)
        }) //UNSUCCESS
}




//READ


module.exports.findAllAuthors = (req, res) => {
    //SORTING BY WHAT YOU WANT TO SORT AND DO POSIVITE 1 TO GO A-Z OR NEGATIVE 1 TO GO Z-A
    Author.find().sort({firstName: 1})
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json(err))
}

module.exports.findOneAuthor = (req, res) => {
    const { id } = req.params
    Author.findOne({ _id: id })
        .then(oneAuthor => { res.json(oneAuthor); console.log(oneAuthor) })
        .catch(err => res.json(err))
}





//UPDATE


module.exports.updateAuthor = (req, res) => {
    const { id } = req.params
    Author.findByIdAndUpdate({ _id: id }, req.body, { runValidators: true, new: true })
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}


//DELETE


module.exports.deleteAuthor = (req, res) => {
    const { id } = req.params
    Author.deleteOne({ _id: id })
        .then(deletedAuthor => res.json(deletedAuthor))
        .catch(err => res.json(err))
}

