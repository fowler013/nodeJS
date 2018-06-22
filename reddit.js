const path = require('path');
const fs = require('fs');
const request = require('request-promise');

// this is the reddit array

let redditArray = []

let dataPath = path.join(__dirname, 'popular-articles.json');


request('https://reddit.com/r/popular.json', (err, res, body) => {

    let redditData = [];

    if (err) console.log(err);

    redditData = JSON.parse(body).data.children.forEach(item => {
        redditArray.push({
            "title": item.data.title,
            "author": item.data.author,
            "url": item.data.url,
        });
    });


    //fs.writeFileSync ALLOWS ME TO WRITE A FILE ON TO MY JSON//
    fs.writeFileSync(dataPath, JSON.stringify(redditArray), err => {
        if (err) console.log(err);
    });
});

