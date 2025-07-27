const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());




const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zkpltdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //1.for storing data/creating api(just variable declaration), from mongodb, "name_of_the_database"
    const menuCollection = client.db("bistroDB").collection("menu");// '/menu'
    const userCollection = client.db("bistroDB").collection("users ");// '/user'
    const reviewCollection = client.db("bistroDB").collection("reviews");// '/reviews'
    const cartCollection = client.db("bistroDB").collection("carts"); // '/carts'

    //step-2
    app.get('/menu', async(req, res) => {
        const result = await menuCollection.find().toArray();
        res.send(result);
    })
    app.get('/reviews', async(req, res) => {
        const result = await reviewCollection.find().toArray();
        res.send(result);
    })


    // user related api, (first do the cart operation)
    app.post('/users', async(req, res) => {
      const user = req.body;
      // insert email if user doesn't exist;
      const query = { email: user.email }
      const existingUser = await userCollection.findOne(query);
      if(existingUser){
        return res.send({ message: 'user already exist', insertedId: null })
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // read the users information
  // used in AllUsers
    app.get('/users', async(req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    })


    // carts collection,
    // insert/add data from clicking on "Add Card" btn
    app.post('/carts', async(req, res) => {
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem);
      res.send(result);
    })

    // It reads (fetches) all the cart items from your MongoDB carts collection and sends them back as an array in the response.
    app.get('/carts', async(req, res) => {
      const email = req.query.email; //useCart e email use korse with query(tenStack)
      const query = { email: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });

    // delete
    app.delete('/carts/:id', async(req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id)};
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    })
    


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send('boss is sitting');
})

app.listen(port, ()=> {
    console.log(`bistro boss is sitting on port ${port}`);
})




/*
  ------------------------
      NAMING CONVENTION
  ------------------------
  app.get(/users) : get information of all users
  app.get(/users/:id) : get information of specific user
  app.post(/users) : create a user
  app.put(/users/:id) : Used to replace the entire user resource with a new one.
  app.patch(/user/:id) : Used to partially update a user resource.
  app.delete(/users/:id) :  Deletes the user with the specified ID.
*/