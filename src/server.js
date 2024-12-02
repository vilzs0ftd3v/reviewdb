const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/**middleware */
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const port = 3001;

app.listen(port, ()=>{
    console.log("port is listening on ", port);
});