const path = require('path');
const fs = require('fs');
const request = require('request');

let dataPath = path.join(__dirname, '../popular-articles.json');


request('https://reddit.com/r/popular.json', (err, res , body) => {

if(err) console.log(err);

JSON.parse(body).data.children.forEach(item =>{
    fs.appendFileSync(dataPath,item.data.title + '\n');
    fs.appendFileSync(dataPath,item.data.author + '\n');
    fs.appendFileSync(dataPath,item.data.url+ '\n');
});

});