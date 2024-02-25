export interface Restaurant {
    id?: number;
    email?: string;
    restaurantName: string;
    restaurantLogoURL: string;
    restaurantMenuCategories: MenuCategory[];
    restaurantMenuItems: MenuItem[];
    restaurantTaxRate: number;
    stripeAccountID: string;
    businessOwnerPhoneNumber: string;
    businessOwnerFullName: string;
    restaurantPreferences: RestaurantPreferences;
    restaurantData: RestaurantData;
}

export interface MenuCategory {
    name: string;
    isHidden: boolean;
}

export interface MenuItem {
    menuItemAddons: OptionalModifier[];
    menuItemCategory: string;
    menuItemChooseOnes: RequiredModifier[];
    menuItemDescription: string;
    menuItemImageURL: string;
    menuItemName: string;
    menuItemPrice: number;
    soldOut: boolean;
    isPopular: boolean;
    isFood: boolean;
    menuItemId: number;
}

export interface RequiredModifier {
    id: number;
    optionTitle: string;
    options: Modifier[];
}

export interface OptionalModifier {
    id: number;
    addOnName: string;
    addOnPrice?: number;
    soldOut: boolean;
}

export interface Modifier {
    id: number;
    name: string;
    price?: number;
    soldOut?: boolean;
}

export interface RestaurantPreferences {
    deliveryFee?: number;
    deliveryRadius?: number;
    restaurantIsActive: boolean;
    restaurantPhoneNumber?: string;
    restaurantMode: RestaurantMode;
    restaurantBankDay: Weekday;
    clientOrderSuccessMessage?: string;
    restaurantColorTheme: string;
    restaurantRecentColorChoices: string[];
    restaurantPreferredLanguage: string;
    restaurantUsesEmailOrdering: boolean;
    restaurantOrderingLocation: string;
    restaurantHours: RestaurantHours;
    restaurantAllowedOrderModes: OrderMode[];
    restaurantLocation: RestaurantLocation;
    restaurantShouldShowCallServerOption: boolean;
    restaurantMenuShouldShowPopularMenuItems: boolean;
    restaurantShouldShowLateOrderHighlighting: boolean;
    restaurantMenuShouldShowFoodWhenInFrontOfHouseMode: boolean;
}

export type Weekday = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export type RestaurantHours = {
    [key in Weekday]: {
        isOpen: boolean;
        openTime?: string;
        closeTime?: string;
    };
};

export enum RestaurantMode {
    STANDARD = "Standard",
    FRONT = "Front",
    EMAIL = "Email",
}

export enum OrderMode {
    DINEIN = "DineIn",
    PICKUP = "Pickup",
    DELIVERY = "Delivery",
}

export interface RestaurantLocation {
    lat?: number;
    lgn?: number;
    address?: string;
}

export interface RestaurantData {
    signUpDate: number;
    salesPerson: string;
    salesPersonCommission: number;
}

export interface Order {
    id?: number;
    orderId: number | null;
    restaurantId: number;
    restaurantName: string;
    orderMode: OrderMode;
    status: OrderStatus;
    tableId: number | string;
    subtotal: number;
    tax: number;
    tip: number;
    fee: number;
    deliveryFee?: number;
    total: number;
    numMenuItems: number;
    timezone: string;
    foodComplete: boolean;
    drinksComplete: boolean;
    paymentIntent: string;
    customerName: string;
    customerEmail: string;
    customerPhoneNumber?: string;
    customerAddress?: string;
    menuItems: CartMenuItems;
    orderCreationTime: number;
    orderEndTime: number;
    isReopenedOrder: boolean;
}

export interface CartMenuItems {
    food: CartItem[];
    drinks: CartItem[];
}

export interface CartItem {
    cartId: number;
    menuItemId: number;
    name: string;
    notes: string;
    price: number;
    quantity: number;
    addons: Modifier[];
    modifiers: Modifier[];
}

export enum OrderStatus {
    PENDING = "Pending",
    PREPARING = "Preparing",
    READY = "Ready",
    COMPLETE = "Complete",
}

export interface ServerCall {
    id: number;
    restaurantId: number;
    orderingLocationId: string;
}

export interface InjectedFunctions {
    /**
     * Asynchronously instantiates a Stripe object with the provided Stripe account identifier.
     * This is typically used to set up Stripe in the context of the current user's session or specific transaction requirements.
     *
     * @param stripeAccount - The unique identifier for the Stripe account to be used for transactions.
     * @returns A Promise that resolves once the Stripe object has been successfully instantiated.
     */
    initStripe: (stripeAccount: string) => Promise<void>;

    /**
     * Sets the loading state of the application or a specific component, optionally displaying a loading message.
     * This can be used to provide visual feedback to the user during operations that require waiting, such as data fetching or processing.
     *
     * @param shouldLoad - A boolean indicating whether the loading state should be activated (`true`) or deactivated (`false`).
     * @param message - An optional string that provides a contextual message to display during the loading state.
     */
    setLoading: (shouldLoad: boolean, message?: string) => void;

    /**
     * Displays a toast notification with a specified message and interface using the `ToastType` enumeration.
     * This function is utilized to provide user feedback in various scenarios, such as operation success, warnings, errors, or informational messages.
     * The `type` parameter dictates the visual styling and possibly the iconography of the toast, aligning it with the nature of the message.
     *
     * @param params - An object containing the optional `message` to be displayed and the `type` of the toast.
     * @param params.message - An optional string representing the message to be shown in the toast. If not provided, the toast may display a default message based on the `type`.
     * @param params.type - A `ToastType` value that specifies the toast's category, influencing its visual representation and the context in which it should be used.
     */
    showToast: ({ message, type }: { message?: string; type: ToastType }) => void;

    /**
     * Displays a custom alert dialog with a specified title, text content, and a button.
     * This function is designed to provide a standardized method for showing alert messages to the user, with the flexibility to indicate the nature of the alert through a interface parameter.
     * The `type` parameter allows for basic customization of the alert's appearance or behavior, typically by changing colors or icons to reflect an error or success state.
     *
     * @param title - The title of the alert dialog, intended to summarize the nature of the alert or to grab the user's attention.
     * @param text - The detailed text content of the alert, providing more information about the alert or instructions for the user.
     * @param buttonText - The text label for the alert dialog's button, which the user can click to acknowledge and dismiss the alert.
     * @param type - A string that specifies the alert's type, with accepted values being 'error' or 'success'. This affects the visual styling of the alert to match the context of the message.
     */
    showCustomAlert: (title: string, text: string, buttonText: string, type: "error" | "success") => void;
}

export enum ToastType {
    INFO = "info",
    ERROR = "error",
    SUCCESS = "success",
}
