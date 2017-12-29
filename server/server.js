const path = require('path');
var publicPath = path.join(__dirname,'../public');
var express = require('express');

var app = express();
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};