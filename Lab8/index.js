var express = require("express");
var validator = require('validator');
app = express();
app.use(express.json());
bodyparser = require("body-parser");
mongoose = require("mongoose");
var cors = require('cors')
app.use(cors())
mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});


const schema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password cannot contain "password"');
      }
    },
  },
});

const User = mongoose.model("User", schema);

app.post("/login", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const _id = req.body.email;
  console.log(req.body);
  User
    .findOne({ email: _id })
    .then((user) => {
      console.log(user);
      if (user.password != req.body.password) {
        return res.status(405).send();
      }
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(404).send();
    });
});

app.post("/register", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req);
  const user = new User(req.body);
  user
    .save(req.body)
    .then(() => {
      res.status(201);
      res.send(user);
    })
    .catch((e) => {
      res.status(400);
      res.send(e);
    //   console.log(e)
    });
});

app.listen(3000, "localhost", function () {
  console.log("Hello World!");
});
