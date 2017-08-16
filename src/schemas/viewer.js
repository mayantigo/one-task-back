const viewer = `
  type Viewer {
    users (name: [String]): [User]!
    user (email: String, password: String): UserOutput!
  }
`;
export default viewer;
