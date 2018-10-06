const graphql = require('graphql');

const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema } = graphql;
const _ = require('lodash');


const tempUsers = [
    { id: 21, firstName: "mike", age: 21 },
    { id: 23, firstName: "mike3", age: 23 },
    { id: 22, firstName: "mike2", age: 22 },
    { id: 24, firstName: "mike4", age: 24 },
    { id: 25, firstName: "mike5", age: 25 }
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }

});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return _.find(tempUsers, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})