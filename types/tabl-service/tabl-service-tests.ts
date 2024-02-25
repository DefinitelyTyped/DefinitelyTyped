import { Order, OrderMode, OrderStatus } from "tabl-service";

const cart: Order = {
    customerEmail: "test@tabl.page",
    customerName: "Johnny Tester",
    drinksComplete: true,
    fee: 0.75,
    foodComplete: true,
    isReopenedOrder: false,
    menuItems: {
        drinks: [],
        food: [],
    },
    numMenuItems: 0,
    orderCreationTime: Date.now(),
    orderEndTime: 0,
    orderId: null,
    orderMode: OrderMode.DINEIN,
    paymentIntent: "",
    restaurantId: 49,
    restaurantName: "Test Restaurant",
    status: OrderStatus.COMPLETE,
    subtotal: 0,
    tableId: "14",
    tax: 0,
    timezone: "America/New_York",
    tip: 0,
    total: 0,
};
