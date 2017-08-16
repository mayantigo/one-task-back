import { merge } from 'lodash';
import query from './query';
import mutation from './mutation';

const resolvers = merge(query, mutation);

export default resolvers;
