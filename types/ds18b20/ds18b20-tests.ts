// Tests taken from documentation samples.

import * as ds18b20 from 'ds18b20';

ds18b20.sensors((err, ids) => {
  if (err) {
    console.log('Can not get sensor IDs', err);
    return;
  }

  console.log('Sensor IDs', ids);
  ids.forEach((id) => {
    ds18b20.temperature(id, (err, result) => {
      if (err) {
        console.log('Can not get temperature from sensor', err);
      } else {
        console.log(`Sensor ${id} :`, result);
      }
    });
  });
});

ds18b20.sensors((err, ids) => {
  if (err) {
    console.log('Can not get sensor IDs', err);
    return;
  }

  console.log('Sensor IDs', ids);
  ids.forEach((id) => {
    console.log(`Sensor ${id} (decimal) :`, ds18b20.temperatureSync(id));
    console.log(`Sensor ${id} (hex) :`, ds18b20.temperatureSync(id, {parser: 'hex'}));
  });
});
