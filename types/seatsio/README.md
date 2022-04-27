## Introduction
This package contains TypeScript definitions for the seats.io chart renderer, event manager and chart manager.

## Usage
Add the following to your package.json:

```json
{
    "dependencies": {
      "@types/seatsio": "1.2.0"
    }
}
```

Load the seats.io JS code in your web app:

```html
<script src="https://cdn.seatsio.net/chart.js"></script>
```

In your TypeScript, you can now instantiate the chart renderer as follows:

```typescript
let chart = new window.seatsio.SeatingChart({
    divId: 'chart',
    workspaceKey: 'myWorkspaceKey'
})

chart.render()
```

The event manager and chart manager work in a similar way.
