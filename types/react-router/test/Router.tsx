import * as React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory as createHistory } from "history";

function RouterWithMissingHistoryShouldFail() {
  return (
      <Router /> // $ExpectError
  );
}

function RouterWithTwoChildrenShouldFail() {
    return (
        <Router history={createHistory()}> // $ExpectError
            <div></div>
            <div></div>
        </Router>
    );
}
