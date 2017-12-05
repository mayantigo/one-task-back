export default `
  type Viewer {
    users (name: [String]): [User]!
    user (email: String, password: String): UserOutput!
  }
`;
