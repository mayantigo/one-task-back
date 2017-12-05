// @flow
import { v1 } from 'neo4j-driver';

export default async function execute(query: string): v1.Result {
  try {
    const session = v1.driver(
      'bolt://hobby-fabolppnojekgbkefniehopl.dbs.graphenedb.com:24786',
      v1.auth.basic(
        'onetask',
        'b.3OryNvc8178m.lnIxHL1IHdGTyr1l',
      ),
    ).session();
    const result: v1.Result = await session.run(
      query,
      null,
    );
    session.close();
    return result;
  } catch (e) {
    return null;
  }
}
