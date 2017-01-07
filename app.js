var express = require('express');
var app = express();
app.use(express.static('public'));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
var EditXlsx = require('atomantic-edit-xlsx');
var xlsx = new EditXlsx('data/data.xlsx');
var sheet = xlsx.sheet(0);
sheet.update('A1', 'Title');
xlsx.save('data/data1.xlsx');
console.log(sheet);
app.get('/get-hello', function (req, res) {
  res.send('Hello Vinh');
});
console.log("==========end============");
app.listen(3000);