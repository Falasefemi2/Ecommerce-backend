import express from 'express'

const app = express()

app.get("/ping", (request, response) => {
    response.send("pong")
})

const PORT = 1337

app.listen(PORT, () => {
    console.log("Server up and running at port", PORT);
    
})