import graphqlHTTP from 'express-graphql';
import { PortfolioSchema } from './portfolioSchema.js';

let express = require('express');

let path = require('path'); 
let port = process.env.PORT || 8080;
let app = express();
let schema = PortfolioSchema;

app.use(express.static(path.join(__dirname, 'static')));

app.use('/graphql', graphqlHTTP(function() {
    return {
        schema: schema
    };
}));

app.use('/schema', function(req, res, _next) {
    var printSchema = require('graphql/utilities/schemaPrinter').printSchema;
    res.set('Content-Type', 'text/plain');
    res.send(printSchema(schema));
});

app.listen(port);
console.log(`Started on http://localhost:${port}/`);