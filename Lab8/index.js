var express = require("express");
app = express();
app.use(express.json());
bodyparser = require("body-parser");
mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb", 
    {useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
});