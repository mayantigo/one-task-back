const mutation = `
  type Mutation {
    createUser(users: [UserInput]): [User]
    login(email: String, password: String): String
  }
`;

export default mutation;
