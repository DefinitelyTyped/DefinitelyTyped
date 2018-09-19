/* Note that this is a sample function for the purpose of running the below CustomFunctionsMappings test */
function ADD10(n: number) {
    return n + 10;
}

CustomFunctionMappings = {
    addTen: ADD10
};

async function getStockValues(ticker: string, handler: CustomFunctions.StreamingHandler<number>) {
    const dollars = await (await fetch(`myService.com/prices/${ticker}`)).json();
        handler.setResult(dollars);
}

async function getStockValuesOneTime(ticker: string, handler: CustomFunctions.CancelableHandler) {
    let shouldStop = false;
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

declare function pause(ms: number): Promise<void>;
