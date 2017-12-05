/* @flow */
import execute from '../../db';

export default class User {
  id: string;
  email: string;
  password: string;
  constructor({ id, email, password }: { id: string, email: string, password: string }) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  static async load(
    email: string,
    password: string,
  ): Promise<User> {
    try {
      return await execute(`MATCH (n:User {
              email: ${email},
              password: ${password} 
            }) 
            RETURN n;
    `);
    } catch (e) {
      throw new Error();
    }
  }
}
