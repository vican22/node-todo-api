const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log(err);
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    //deleteMany
    // db.collection("Todos")
    //   .deleteMany({ text: "Eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    //deleteOne
    // db.collection("Todos")
    //   .deleteOne({ text: "Eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    //findOneAndDelete
    // db.collection("Todos")
    //   .findOneAndDelete({ completed: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    //deleteMany
    db.collection("Users")
      .deleteMany({ name: "Vedran" })
      .then(res => {
        console.log(res);
      });

    //deleteOne
    // db.collection("Users")
    //   .deleteOne({
    //     _id: new ObjectID("5c346722b49a7c04b01efcf2")
    //   })
    //   .then(res => {
    //     console.log(res);
    //   });
    //client.close()
  }
);
