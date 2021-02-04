const express = require('express');
var path = require('path');
const app = express();

app.use(express.static('./'))
app.use(express.static('./model/'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000, () => {
    console.log(`running at 3k`);
});