const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect", err);
    }
    console.log("Connect to the MongoDB serve");
    const db = client.db("TodoApp");

    // db.collection("Todos")
    //   .findOneAndUpdate(
    //     { _id: new ObjectID("5c348b0e790a96a6b75947c0") },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     },
    //     {
    //       returnOriginal: false
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection("Users")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5c346a875a3bdb04d8259c6d")
        },
        {
          $set: {
            name: "Vedran"
          },
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });

    //client.close();
  }
);
