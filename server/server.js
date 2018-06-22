const path = require('path');
const fs = require('fs')

let chirpsArray = [
    {
        "firstname": "Ash"
        ,"lastname": "Ketchem",
         "id": 0,
         "age": 13,
         "location": "Kanto"
         
    },
    {
        "firstname": "gary"
        ,"lastname": "oak",
         "id": 1,
         "age": 13,
         "location": "Kanto"
         
    },
    {
        "firstname": "Brock"
        ,"lastname": "Bolder",
         "id": 2,
         "age": 30,
         "location": "Kanto"
         
    },
    {
        "firstname": "Misty"
        ,"lastname": "Water",
         "id": 3,
         "age": 19,
         "location": "Kanto"
         
    },
    {
        "firstname": "Sam"
        ,"lastname": "Oak",
         "id": 4,
         "age": 44,
         "location": "Kanto"
         
    }
]


let chirpsPath = path.join(__dirname, '../chirps.json');

fs.writeFileSync(chirpsPath, JSON.stringify(chirpsArray), err => {
    console.log(err);
});

fs.readFile(chirpsPath,{
    encoding:"UTF-8"
}, (err, data) => {
    console.log(data);
})