import qhistory from 'qhistory';
import { createBrowserHistory } from 'history';
import * as qs from 'qs';

const history = qhistory(createBrowserHistory(), qs.stringify, qs.parse);

history.listen(location => {
  const query: { foo?: string } = location.query;
  if (query.foo) {
    const foo: string = query.foo;
  }
});

history.push({
  pathname: '/',
  query: {
    foo: 'bar'
  }
});
