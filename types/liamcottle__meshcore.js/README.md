# TypeScript Definitions for @liamcottle/meshcore.js

Type definitions for [@liamcottle/meshcore.js](https://github.com/meshcore-dev/meshcore.js) v1.10.0

## About

This package provides TypeScript type definitions for the `@liamcottle/meshcore.js` library, which is used to connect to MeshCore devices over serial (USB) or TCP (WiFi).

## Usage

```typescript
import { NodeJSSerialConnection, Constants } from '@liamcottle/meshcore.js';

const connection = new NodeJSSerialConnection('/dev/ttyUSB0');

connection.on('connected', async () => {
    const selfInfo = await connection.getSelfInfo();
    console.log('Connected:', selfInfo.name);

    const channels = await connection.getChannels();
    await connection.sendChannelTextMessage(0, 'Hello mesh network!');
});

connection.on(Constants.ResponseCodes.ChannelMsgRecv, (message) => {
    console.log('Received:', message.text);
});

await connection.connect();
```

## Note on Module Type

The @liamcottle/meshcore.js package uses ESM (`"type": "module"`) but doesn't declare an `exports` field, which may cause module resolution warnings in some tools. The types work correctly with both CommonJS and ESM projects.

## License

MIT
