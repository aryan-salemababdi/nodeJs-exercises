const {MongoClient} = require("mongodb");

const DB_URL =  "mongodb://localhost:27017";

const DB_Name = "mongodb-tutorials";

const client = new MongoClient(DB_URL);

async function main(){

    await client.connect();

    console.log("connercted to mongodb");

    const db = client.db(DB_Name)

    const userCollection = db.collection("user")

    const result = await userCollection.insertOne({ 
        firstName : "aryan",
        lastName: "salemabadi",
        age: 21,
        skils: ["back-end","front-end","AI"],
        identity: "211234414",
        birthday: new Date("23-01-2002"),
        addres:{
            provience: "fars",
            city: "shiraz",
            street: "adelabad"
        }
    })

    console.log("inserted Document =>",result) ;

    userCollection.find({}).toArray().then(res=>{
        console.log(res);
    })

}

main()