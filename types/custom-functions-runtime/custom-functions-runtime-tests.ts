/* Note that this is a sample function for the purpose of running the below CustomFunctionsMappings test. */
function addTen(n: number) {
    return n + 10;
}

/* Assume that the function id for addTen in the function's JSON metadata is specified as ADDTEN. */
CustomFunctionMappings.ADDTEN = addTen;

async function getStockValues(ticker: string): Promise<number> {
    const response = await fetch(`myService.com/prices/${ticker}`);
    return (await response.json())["price"];
}

async function getStockValuesCancellable(
    ticker: string,
    handler: CustomFunctions.CancelableHandler
): Promise<number> {
    let shouldStop = false;
    handler.onCanceled = () => (shouldStop = true);
    await pause(1000);

    if (shouldStop) {
        return null;
    }

    const response = await fetch(`myService.com/prices/${ticker}`);
    return (await response.json())["price"];
}

function stockPriceStream(
    ticker: string,
    handler: CustomFunctions.StreamingHandler<number>
) {
    const updateFrequency = 10 /* milliseconds*/;
    let isPending = false;

    const timer = setInterval(async () => {
        // If there is already a pending request, skip this iteration:
        if (isPending) {
            return;
        }

        const url = `myService.com/prices/${ticker}`;
        isPending = true;
        try {
            const response = await fetch(url);
            const data = await response.json();
            handler.setResult(data.price);
        } catch (error) {
            handler.setResult(error);
        }
        isPending = false;
    }, updateFrequency);

    handler.onCanceled = () => {
        clearInterval(timer);
    };
}

declare function pause(ms: number): Promise<undefined>;
