const user = `
  type UserOutput {
    user: User
    error: String
  }
  type User {
    id: Int!
    email: String!
    password: String!
  }

  input UserInput {
    email: String
    password: String
  }
`;
export default user;
