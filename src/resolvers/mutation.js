import { load } from '../model/user';
import { generate } from '../services/token';

const mutation = {
  Mutation: {
    async login(root, args) {
      try {
        const result = await load(
          args.email,
          args.password,
        );
        return generate(result);
      } catch (e) {
        return null;
      }
    },
  },
};

export default mutation;
