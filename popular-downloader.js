const path = require('path');
const fs = require('fs');
const request = require('request-promise');
const download = require('download-file'); //this hasn't been updated in 4 years on npm//

// CREATE ARRAY//

let downloadArray = [];

//create the dataPath//

let dataPath = path.join(__dirname, 'popular-articles.json');
let downloadPath = path.join(__dirname, '/downloads/');

//make the request from the https//

request('https://reddit.com/r/popular.json', (err, res, body) => {

    let redditData = [];

    if (err) console.log(err)

    let id = 1;
    redditData = JSON.parse(body).data.children.forEach(item => {
        downloadArray.push({
            "id": id,
            "title": item.data.title,
            "author": item.data.author,
            "url": item.data.url,
            "type": item.data.post_hint // most use post_hint to find link//
        });

        let options = { // followed the rules on the npm download-file ReadMe//
            directory: downloadPath,
            filename: id + path.extname(item.data.url)
        }
        //test for downloadPath
        if (item.data.post_hint == 'image') {
            download(item.data.url, options, function (err) {
                if (err) console.log(err);
            });
        }

        id++;
    });

    //write redditArray to file
    fs.writeFileSync(dataPath, JSON.stringify(downloadArray), err => {
        if (err) console.log(err);
    });
});
