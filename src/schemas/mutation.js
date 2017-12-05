export default `
  type Mutation {
    createUser(users: [UserInput]): [User]
    login(email: String, password: String): String
  }
`;
