const { gql } = require('apollo-server');

module.exports = gql`
type Message {
    text: String
    createdAt: String
    createdBy: String
}

type User {
    username: String
    email: String
    password: String
    token: String
}

input MessageInput {
    text: String
    username: String
}

type Query {
    message(id: ID!): Message
    user(id: ID!): User
}

input RegisterInput { 
    username: String!
    email: String!
    password: String!
}

input LoginInput {
    username: String!
    password: String!
}

type Mutation {
    createMessage(messageInput: MessageInput): Message!
    registerUser(registerInput: RegisterInput) : User 
    loginUser(loginInput: LoginInput): User
}`;
