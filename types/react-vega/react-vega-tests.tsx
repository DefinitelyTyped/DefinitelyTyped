import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Vega from 'react-vega';

const spec = {
  $schema: 'https://vega.github.io/schema/vega/v5.json',
};
let Chart = Vega.createClassFromSpec(spec);
Chart = Vega.createClassFromSpec('chart', spec);

const data = {
  table: [{ key: 'A', value: 1 }, { key: 'B', value: 2 }],
};
ReactDOM.render(
  <Chart className="chart" data={data} width={256} height={128} />,
  document.body,
);

ReactDOM.render(<Vega spec={spec} />, document.body);
