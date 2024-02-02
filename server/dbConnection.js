const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

const dbConnect = async () => {
    const database = client.db('marketplace');
    const users = database.collection('users');

    const query = { name: 'test' };
    const user = await users.findOne(query);

    console.log(user);
}

