const express = require('express')

const app = express();

app.get('/lessons', function(request, response){
    response.send([
        { 'topic': 'math', 'location': 'London', 'price': 100 },
        { 'topic': 'math', 'location': 'Liverpool', 'price': 80 },
        { 'topic': 'math', 'location': 'Oxford', 'price': 90 },
        { 'topic': 'math', 'location': 'Bristol', 'price': 120 },
       ])
})

app.use(function (request, response){
    response.status(404).send("Page Not Found!")
})

app.listen(3000)