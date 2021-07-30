// Do not edit directly!
export default `
schema {
  mutation: Mutation
}
scalar DateTime
scalar Date
scalar Time
scalar Upload
type BusinessUser {
  id: ID!
  name: String!
  email: String!
  phoneNumber: String!
  prefix: String!
}
type Workspace {
  id: ID!
  title: String!
  category: String!
  address: String!
  city: String!
  openingHours: [Int]
  creator: BusinessUser!
  created: DateTime!
  lastChanged: DateTime!
}
type Mutation {
  createWorkspace(name: String!, category: String!, address: String!, city: String!, openingHours: [Int], creator: BusinessUser!): Workspace @isAuthenticated
  updateWorkspace(id: ID!, name: String!, category: String!, address: String!, city: String!, openingHours: [Int]): Workspace @isAuthenticated
  deleteWokrspace(id: ID!): ID @isAuthenticated
}
`