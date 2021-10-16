// importing what is needed
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');


// construct a schema

var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

// the root provides a resolver functon for each api endpoint
var root = {
  hello: () => {
    return 'Hello World!';
  },
};

var app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000);
console.log('Runnign a GraphQL API server at http://localhost:4000/graphql');
