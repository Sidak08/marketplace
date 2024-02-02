const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db('marketplace');
        const users = database.collection('users');

        const query = { name: 'test' };
        const user = await users.findOne(query);

        console.log(user);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);