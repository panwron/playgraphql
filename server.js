const express = require('express');

const app = express();
const PORT = 4000;


app.get('/', (req, res) => {
    res.send('yo playgraphql')
})

app.listen(PORT, () => {
    console.log(`runs on ${PORT}`)
});