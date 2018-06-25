var fs = require('fs');

exports.commit = function (file, data) {
  // console.log(JSON.stringify(data));
  // fs.writeFile('save.json', "This is working");
  fs.writeFile(`./json/${file}.json`, JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log('JSON successfully modified!');
  });
};

exports.listbooks = function(res, data) {
  
  res.render('books', data);
};