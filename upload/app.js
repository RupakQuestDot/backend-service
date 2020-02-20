const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const fs = require('fs');

const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/secret', (req, res) => {
    res.json({ "message" : "THIS IS SUPER SECRET, DO NOT SHARE!" });
})

app.get('/readme', (req, res) => {
    res.json({ "message" : "This is open to the world!" })
})

app.get('/jwt', (req, res) => {
    let privateKey = fs.readFileSync('./private.pem', 'utf8');
    let token = jwt.sign({ "body": "stuff" }, "MySuperSecretPassPhrase", { algorithm: 'HS256'});
    res.send(token);
})

function isAuthorized(req, res, next) {
    if (typeof req.headers.authorization !== "undefined") {

        let token = req.headers.authorization.split(" ")[1];
        
        let privateKey = fs.readFileSync('./private.pem', 'utf8');
        
        jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {
            

            if (err) {  
 
                res.status(500).json({ error: "Not Authorized" });
            }
            return next();
        });
    } else {

        res.status(500).json({ error: "Not Authorized" });
    }
}
app.listen(port, 
    () => console.log(`Simple Express app listening on port ${port}!`));

