import { mpInstance } from ".";

const fieldInstance = mpInstance.fields.create("cardNumber", {});
fieldInstance.mount("containerId");
fieldInstance.update(
    {
        style: {
            'fieldStyleProp': ''
        }
    }
);
fieldInstance.on('validityChange', (args) => {})
mpInstance.fields.createCardToken({}, undefined)
fieldInstance.unmount()