let bodyparser = require("body-parser");
// let p5 = require("p5");
let express = require("express");
let socket = require("socket.io");
let moment = require("moment");
let fs = require("fs");
let http = require("http");
let request = require("request");
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./mediatek', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
      console.error(err.message);
  }
  console.log('Connected to blog database.');
});

const webport = 8080;
let { commit, listbooks } = require("./utils/utils.js");
let { File } = require("./utils/classes.js");
let save = require("./json/save.json");

let users = require("./json/users.json");
let app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));

let server = app.listen(process.env.PORT || webport);
let io = socket(server);

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/books", (req, res) => {
  let bookAPIKey = `AIzaSyBoN4VMET_fXCZJ5L5DSU-VR9hlIPNfc2o`;
  var searched = req.body.searched;
  let url = `https://www.googleapis.com/books/v1/volumes?q=${searched}`;

  request.get(url, (error, response, body) => {
    // console.log(body);
    body = JSON.parse(body);
    res.render("books", { body, searched });
  });
});

app.get("/book", (req, res) => {
  res.render("book");
});

app.get("/emprunts", (req, res) => {
  res.render("emprunts");
});

app.get("/reserver", (req, res) => {
  res.render("reserver");
});

io.on("connection", socket => {


  socket.on("register", user => {
    users.push(user);
    commit("users", users);
  });
});
