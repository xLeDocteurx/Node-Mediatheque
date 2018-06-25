// let save = require("./json/save.json");
let fs = require("fs");

exports.Adherant = class {

  constructor (nom, prenom, age, mail, ville) {

    let id = save.adherants[save.adherants.length - 1].id + 1;

    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.mail = mail;
    this.ville = ville;
    
  }

  static something() {

  }
}