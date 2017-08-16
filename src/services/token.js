// @flow
import { sign, verify, decode } from 'jsonwebtoken';
import type User from '../types/user';

export const generate = (user: User) => sign(user, 'secreto');
export const validate = (token: string) => {
  try {
    verify(token);
    return true;
  } catch (error) {
    return false;
  }
};
export const user = (token: string): User => decode(token);
