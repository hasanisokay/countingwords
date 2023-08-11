const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;

// middleware
app.use(cors());
app.use(express.json());

// function to encrypt password
async function hashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw error;
  }
}

// function to count words
const countWords = (str) => {
  const words = str.toLowerCase().match(/\w+/g);
  const wordCount = {};

  if (words) {
    for (const word of words) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  }
  return wordCount;
};

app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.post("/count-words", (req, res) => {
  const str = req.body.str;
  res.send(countWords(str));
});

const { MongoClient, ServerApiVersion } = require("mongodb");
var uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-hzckllx-shard-00-00.wvig2d6.mongodb.net:27017,ac-hzckllx-shard-00-01.wvig2d6.mongodb.net:27017,ac-hzckllx-shard-00-02.wvig2d6.mongodb.net:27017/?ssl=true&replicaSet=atlas-sxh7jl-shard-0&authSource=admin&retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const usersCollection = client.db("testforTask").collection("users");

    app.post("/file-upload", async (req, res) => {
      res.send("successful");
    });

    // handling sign up api. creating hashed passsword and storing in db.
    app.post("/signup", async (req, res) => {
      const newUser = req.body;
      hashPassword(newUser.password)
        .then(async (hashedPassword) => {
          newUser.password = hashedPassword;
          const result = await usersCollection.insertOne(newUser);
          res.send(result);
          console.log(newUser);
        })
        .catch((err) => console.log(err));
    });

    app.post("/login", async (req, res) => {
      const user = req.body;
      const dbUser = await usersCollection.findOne({ email: user.email });
      // using bcrypt.compare to compare the user given password and stroed password in db.
      // if no match found send error. 
      if (!dbUser || !(await bcrypt.compare(user.password, dbUser.password))) {
        return res.status(403).send({ error: true, message: "forbidden access" });
      }
      res.send("Success");
    });

    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
