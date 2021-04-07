const Todo = require("./todo");

module.exports = function(server) {

    // Gib alle Todos zurück
    server.get('/api/todo', (req, res) => {
        Todo.find({}, (err, todos) => {
            if (err) {
                return res.status(500).send(err.message)
            } else {
                return res.status(200).send(todos)
            }
        })
    });

    // Erstelle neues Todo
    server.post('/api/todo', (req, res) => {
        const newTodo = new Todo(req.body)
        newTodo._id = undefined
        newTodo.save((err, todo) => {
            if (err) {
                return res.status(500).send(err.message)
            } else {
                return res.status(200).send(todo)
            }
        })
    });

    // Lösche Todo anhand id
    server.delete('/api/todo/:id', (req, res) => {
        Todo.findByIdAndDelete(req.params.id, (err, _) => {
            if (err) {
                return res.status(500).send(err.message)
            } else {
                return res.status(204).end()
            }
        })

    });

    // Update Todo anhand id
    server.post('/api/todo/:id', (req, res) => {
        Todo.findByIdAndUpdate(req.params.id, req.body, (err, _) => {
            if (err) {
                return res.status(500).send(err.message)
            } else {
                return res.status(201).send(req.body)
            }
        })
    });


}
