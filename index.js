const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const protocol = 'http';
const port = 3000
app.use(express.json());
app.use(express.urlencoded({extended : false}))

const route = require('./route');
app.use('/api/v1/',route)

let server 
if (protocol == "https") {
    const https = require('https');
    server = https.createServer({
        key : fs.readFileSync(privkey,'utf8'),
        cert : fs.readFileSync(fullchain,'utf8')
    },app)
} else {
    const http = require('http');
    server = http.createServer(app)
}

// app.get("/sort-by-name",async (req,res)=>{
//     const sortData = await fetchData();
//     res.json(sortData)
// })

// app.get("/sort-by-id",async (req,res)=>{
//     const Data = await getAscendingData();
//     res.json(Data)
// })

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
