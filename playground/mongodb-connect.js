//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDb server");
    }
    console.log("Connected to MongoDb server");
    const db = client.db("TodoApp");

    // db.collection("Todos").insertOne(
    //   {
    //     text: "Eat dinner",
    //     completed: false
    //   },
    //   (err, res) => {
    //     if (err) {
    //       return console.log("Unable to insert todo", err);
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    //   }
    // );

    // db.collection("Users").insertOne(
    //   {
    //     name: "Vedran",
    //     age: 31,
    //     location: "Zagreb"
    //   },
    //   (err, res) => {
    //     if (err) {
    //       return console.log("Unable to insert new user", err);
    //     }
    //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp()));
    //   }
    // );

    client.close();
  }
);
