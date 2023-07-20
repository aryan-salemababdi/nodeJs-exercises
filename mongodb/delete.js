const { MongoClient, ObjectId } = require("mongodb");

const DB_URL =  "mongodb://localhost:27017";

const DB_Name = "mongodb-tutorials";

const client = new MongoClient(DB_URL);

async function main(){

    await client.connect();

    console.log("connercted to mongodb");

    const db = client.db(DB_Name)

    const userCollection = db.collection("user")

    // const result = await userCollection.deleteOne({firstName:"aryan"})

    const result = await userCollection.deleteOne({_id: new ObjectId("64b7b7ca3823013915c87c84")})

    console.log("deleted Document =>",result ) ;
    console.log(new ObjectId("64b7b7ca3823013915c87c84"));

}

main()