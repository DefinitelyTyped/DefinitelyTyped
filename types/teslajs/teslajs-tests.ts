import * as tjs from 'teslajs';

const options = { authToken: 'token', vehicleID: 'id' };

async function main() {
  tjs.login('username', 'password', (err, result) => {
    const token = result.authToken;
  });
  const vehicleData = await tjs.vehicleDataAsync(options);
  const chargeState = await tjs.chargeStateAsync(options);
}

main();
