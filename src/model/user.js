/* @flow */
import execute from '../../db';
import type User from '../types/user';

export const load = (email: string, password: string): User =>
  new Promise((resolve) => {
    execute({
      query: `MATCH (n:User {
                email: {email},
                password: {password} 
              }) 
              RETURN n;
             `,
      params: {
        email,
        password,
      },
    }).then(result => resolve(result));
  });

export const save = (user: User) => {
  execute({
    query: 'QUERY USER',
    params: {
      email: user.email,
      password: user.password,
    },
  }).then(() => true);
};
