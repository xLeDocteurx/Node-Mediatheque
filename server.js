let bodyparser = require("body-parser");
// let p5 = require("p5");
let express = require("express");
let socket = require("socket.io");
let moment = require("moment");
let fs = require("fs");
let http = require("http");
let request = require("request");
// let https = require("https");

const webport = 8080;
let { commit, listbooks } = require("./utils/utils.js");
let { File } = require("./utils/classes.js");
let save = require("./json/save.json");

let app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));

let server = app.listen(process.env.PORT || webport);
let io = socket(server);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/books", (req, res) => {
  res.render("books");
});

app.get("books/:searched", (req, res) => {
  let bookAPIKey = `AIzaSyBoN4VMET_fXCZJ5L5DSU-VR9hlIPNfc2o`;
  var searched = req.params.searched;
  let url = `https://www.googleapis.com/books/v1/volumes?q=${searched}`;

  let result;
  request.get(url, (error, response, body) => {
    console.log("Le serveur a reçu une requete de recherche qui a étée envoyé à l'API");
    console.log(body);
  });
});

app.get("/reserver", (req, res) => {
  res.render("reserver");
});

app.get("/join", (req, res) => {
  res.render("join");
});

io.on("connection", socket => {
  // console.log(`//////////////////////////////////////////////////////////////////////////////////////////`);
  // console.log(`Un utilisateur non enregistré s'est connecté au serveur : ${socket.id}`);
  // console.log(`//////////////////////////////////////////////////////////////////////////////////////////`);
  // socket.on('disconnect', function () {
  // console.log(`//////////////////////////////////////////////////////////////////////////////////////////`);
  //     console.log(socket.id + ' // Got disconnect!');
  // console.log(`//////////////////////////////////////////////////////////////////////////////////////////`);
  // });
});
