import pl = require('tau-prolog');

const session = pl.create();
session.consult(``);

const fetchNextAnswer = () =>
  new Promise<pl.Answer>(resolve => {
    session.answer((result: any) => {
      resolve(result);
    });
  });

async function* makeQuery(query: string) {
  const parsed = session.query(query);

    if (parsed !== true) {
      throw new Error();
    }

  while (true) {
    const answer = await fetchNextAnswer();

      if (!answer) {
        break;
      }

      if (answer.id === `throw`) {
        throw new Error();
      }

    yield answer;
  }
}
