import { load } from '../model/user';
import { validate } from '../services/token';

const query = {
  Query: {
    viewer(root, params) {
      return {
        valid: validate(params.token),
      };
    },
  },
  Viewer: {
    users(root, args) {
      return [{
        email: args.name,
      }];
    },
    user(obj, args) {
      if (obj.valid) {
        return { user: { email: args.email, id: 1 } };
      }
      return { error: 'No permissions' };
    },
  },
};
export default query;
