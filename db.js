// @flow
import { v1 } from 'neo4j-driver';
import type { Query } from './src/types/query';

const execute = (query: Query) =>
  new Promise((resolve, error) => {
    const session = v1.driver(
      'bolt://hobby-fabolppnojekgbkefniehopl.dbs.graphenedb.com:24786',
      v1.auth.basic(
        'onetask',
        'b.3OryNvc8178m.lnIxHL1IHdGTyr1l',
      ),
    ).session();
    session
      .run(query.query, query.params)
      .then((result) => {
        session.close();
        resolve(result);
      })
      .catch(err =>
        error(err),
      );
  });

export default execute;
