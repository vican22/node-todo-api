const express = require("express");
const bodyParser = require("body-parser");
const { ObjectId } = require("mongodb");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo.js");
const { User } = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.listen(3000, () => {
  console.log("Started on port 3000");
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    res.status(404).send();
  }

  Todo.findById(id).then(
    todo => {
      if (!todo) {
        res.status(404).send();
      }

      res.status(200).send({ todo });
    },
    err => {
      res.status(400).send();
    }
  );
});
module.exports = {
  app
};
