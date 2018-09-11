async function getStockValues(ticker: string, handler: CustomFunctions.StreamingHandler<number>) {
    const dollars = await (await fetch(`myService.com/prices/${ticker}`)).json();
      handler.setResult(dollars)
}

async function getStockValuesOneTime(ticker: string, handler: CustomFunctions.CancelableHandler) {
      var shouldStop = false;
    handler.onCanceled = () => shouldStop = true;
    await pause(1000);

    if (shouldStop) {
        return null;
    }

      const dollars = await (await fetch(`myService.com/prices/${ticker}`)).json();
      return dollars;
}

async function getStockValuesNowWithNoCancelling(ticker: string) {
      const dollars = await (await fetch(`myService.com/prices/${ticker}`)).json();
      return dollars;
}

function add10(n: number) {
    return n + 10;
}


declare function pause(ms: number): Promise<void>

