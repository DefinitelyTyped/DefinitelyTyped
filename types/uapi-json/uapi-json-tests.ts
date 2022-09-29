import { createUtilsService, createHotelService, createAirService, createTerminalService, errors } from 'uapi-json';

const settings = {
    auth: { username: 'USERNAME', password: 'PASSWORD', region: 'REGION', targetBranch: 'TARGETBRANCH' },
};
const airService = createAirService(settings);

airService
    .shop({
        legs: [
            {
                from: 'LWO',
                to: 'JKT',
                departureDate: '2018-07-18',
            },
            {
                from: 'JKT',
                to: 'IEV',
                departureDate: '2018-07-21',
            },
        ],
        passengers: {
            ADT: 1,
            /*
CNN:1,
INF: 1,
INS: 1, //infant with a seat
*/
        },
        cabins: ['Economy'], // ['Business'],
        requestId: '4e2fd1f8-2221-4b6c-bb6e-cf05c367cf60',
        maxJourneyTime: 300,
        maxSolutions: 200,
        pricing: {
            currency: 'USD',
            eTicketability: true,
        },
        allowDirectAccess: false,
    })
    .catch((err: unknown) => {
        if (err instanceof errors.Common.ValidationError) {
            ('Validation error occurred');
        }
        if (err instanceof errors.Request.RequestValidationError) {
            ('Validation error occurred in request');
        }
        if (err instanceof errors.Request.RequestValidationError.ParamsMissing) {
            ('Params are missing for request');
        }
    });

const utilService = createUtilsService(settings);

utilService
    .currencyConvert({
        currencies: [
            { from: 'EUR', to: 'USD' },
            { from: 'UAH', to: 'USD' },
        ],
    })
    .catch((err: unknown) => {
        if (err instanceof errors.Common.ValidationError) {
            ('Validation error occurred');
        }
        if (err instanceof errors.Request.RequestValidationError) {
            ('Validation error occurred in request');
        }
        if (err instanceof errors.Request.RequestValidationError.ParamsMissing) {
            ('Params are missing for request');
        }
    });

const hotelService = createHotelService(settings);

hotelService
    .search({
        location: 'RUAACL',
        // location: 'IEV', use for IATA codes search
        startDate: '2022-02-22',
        endDate: '2022-02-22',
        currency: 'USD',
        MaxWait: 30000,
        MaxProperties: 9999,
        rooms: [
            {
                adults: 1,
                children: [1, 2, 3],
            },
            {
                adults: 2,
                children: [],
            },
        ],
        rating: [3, 5],
    })
    .catch((err: unknown) => {
        if (err instanceof errors.Common.ValidationError) {
            ('Validation error occurred');
        }
        if (err instanceof errors.Request.RequestValidationError) {
            ('Validation error occurred in request');
        }
        if (err instanceof errors.Request.RequestValidationError.ParamsMissing) {
            ('Params are missing for request');
        }
    });

const terminalService = createTerminalService(settings);

terminalService
    .executeCommand('command', (screens: string[]) => true)
    .catch((err: unknown) => {
        if (err instanceof errors.Common.ValidationError) {
            ('Validation error occurred');
        }
        if (err instanceof errors.Request.RequestValidationError) {
            ('Validation error occurred in request');
        }
        if (err instanceof errors.Request.RequestValidationError.ParamsMissing) {
            ('Params are missing for request');
        }
    });
