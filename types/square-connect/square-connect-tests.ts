import { CreateOrderRequest } from 'square-connect';

const createOrderRequest: CreateOrderRequest = {
    idempotency_key: 'optional',
    order: {
        location_id: 'required',
    },
};
