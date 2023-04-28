import { mpInstance } from "../mercadopago-sdk-js-tests";

const fieldInstance = mpInstance.fields.create("cardNumber", {});
fieldInstance.mount("containerId");
fieldInstance.update({});
fieldInstance.on('validityChange', (args) => {})
mpInstance.fields.createCardToken({}, undefined)
fieldInstance.unmount()