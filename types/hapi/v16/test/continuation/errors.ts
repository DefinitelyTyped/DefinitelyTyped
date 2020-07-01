
import * as Hapi from 'hapi';
import * as Boom from 'boom';

// Assignment of a typical function to ContinuationValueFunction is possible
const handleError: Hapi.ContinuationValueFunction = (err?: Boom.BoomError | null, value?: any) => {
    if (!err || !err.data.isCustom === true) {
        return;
    }

    // assignment is possible due to default generic Data = any
    const customError: Boom.BoomError<CustomData> = err;

    // Discriminated union type works:
    switch (customError.data.customType) {
        case 'Custom1':
            customError.data.custom1;
            break;
        case 'Custom2':
            customError.data.custom2;
            break;
    }
};

// Accepts a simple Boom error
handleError(Boom.badData());

// Accepts an error with custom data
const errorWithData = Boom.badImplementation('', { custom1: 'test', customType: 'Custom1' as 'Custom1', isCustom: true as true });
handleError(errorWithData);

// Accepts an error with a more explicit type
const errorWithExplicitType: Boom.BoomError<CustomData> = errorWithData;
handleError(errorWithExplicitType);

// Accepts an error with an even more explicit type
const errorWithConcreteCustomData: Boom.BoomError<CustomData1> = errorWithData; // assignment to CustomData2 would not be possible
handleError(errorWithConcreteCustomData);

/**
 * Some complex error data types:
 */
interface CustomDataBase {
    isCustom: true;
}

interface CustomData1 extends CustomDataBase {
    customType: 'Custom1';
    custom1: string;
}

interface CustomData2 extends CustomDataBase {
    customType: 'Custom2';
    custom2: string;
}

type CustomData = CustomData1 | CustomData2;
