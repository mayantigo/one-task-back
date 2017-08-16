import { load } from '../model/user';
import { generate } from '../services/token';

const mutation = {
  Mutation: {
    login(root, args) {
      load(
        args.email,
        args.password,
      ).then((result) => {
        console.log(result);
        return generate(result);
      }).catch(error => console.log(error));
    },
  },
};

export default mutation;
