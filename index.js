const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const PORT = 4000;


app.get('/', (req, res) => {
    res.send('yo playgraphql')
});

app.use('/graphql', expressGraphQL({
    graphiql: true,
    schema: schema
}));

app.listen(PORT, () => {
    console.log(`runs on ${PORT}`)
});