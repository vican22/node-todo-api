const { ObjectId } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

const id = "5c35bdcbc27e74073cb9e6bf";
const userId = "5c34b11db086560c3d567a43";
if (!ObjectId.isValid(id)) {
  console.log("ID not valid");
}
// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => console.log("Todo", todo));

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("ID not found");
//     }
//     console.log("Todo By Id", todo);
//   })
//   .catch(err => console.log(err));

User.findById(userId)
  .then(user => {
    if (!user) {
      return console.log("ID not found");
    }

    console.log("Find User By Id", user);
  })
  .catch(err => console.log(err));
