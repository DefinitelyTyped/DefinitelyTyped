/* Note that this is a sample function for the purpose of running the below CustomFunctions.associate() test */
function add10(n: number) {
    return n + 10;
}

CustomFunctions.associate('ADD10', add10);

CustomFunctions.associate({
    ADD10: add10,
    RANDOM: (n: number) => n * Math.random()
});

function callerAddress(invocation: CustomFunctions.Invocation) {
    return invocation.address;
}

async function getStockValues(ticker: string): Promise<number> {
    const response = await fetch(`myService.com/prices/${ticker}`);
    return (await response.json())["price"];
}

async function getStockValuesCancellable(ticker: string,
    invocation: CustomFunctions.CancelableInvocation): Promise<number> {
    const address = invocation.address;
    let shouldStop = false;
    invocation.onCanceled = () => (shouldStop = true);
    await pause(1000);

    if (shouldStop) {
        return null;
    }

    const response = await fetch(`myService.com/prices/${ticker}`);
    return (await response.json())["price"];
}

function stockPriceStream(ticker: string,
    invocation: CustomFunctions.StreamingInvocation<number>) {
    const address = invocation.address;
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
            invocation.setResult(data.price);
        } catch (error) {
            invocation.setResult(error);
        }
        isPending = false;
    }, updateFrequency);

    invocation.onCanceled = () => {
        clearInterval(timer);
    };
}

declare function pause(ms: number): Promise<undefined>;

function throwErrors(parameter: any) {
    const customError = new CustomFunctions.Error(CustomFunctions.ErrorCode.invalidValue, "The parameter can only contain lowercase characters.");
    switch (parameter) {
        case (parameter === 0):
          throw CustomFunctions.ErrorCode.invalidValue;
        case (parameter === 1):
          throw CustomFunctions.ErrorCode.notAvailable;
        case (parameter === 2):
          throw CustomFunctions.ErrorCode.nullReference;
        case (parameter === 3):
          throw CustomFunctions.ErrorCode.invalidReference;
        case (parameter === 4):
          throw CustomFunctions.ErrorCode.invalidNumber;
        case (parameter === 5):
          throw CustomFunctions.ErrorCode.invalidName;
        case (parameter === 6):
          throw CustomFunctions.ErrorCode.divisionByZero;
        case (parameter === "A"):
          return customError;
    }
}
