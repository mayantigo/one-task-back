// @flow
import { decode, sign, verify } from 'jsonwebtoken';
import type User from '../model/user';

export const generate = (user: User): string => sign(user, 'secreto');
export const validate = (token: string): boolean => {
  try {
    verify(token);
    return true;
  } catch (error) {
    return false;
  }
};
export const user = (token: string): User => decode(token);
