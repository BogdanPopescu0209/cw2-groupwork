const express = require('express')

const app = express();

app.use(function (request, response){
    response.status(404).send("Page Not Found!")
})

app.listen(3000)