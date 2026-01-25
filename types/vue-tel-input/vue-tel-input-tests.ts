import { createApp } from "vue";
import VueTelInput from "vue-tel-input";

const app = createApp({
    data() {
        return {
            phone: "",
            bindProps: {
                defaultCountry: "",
                disabled: false,
                inputOptions: {
                    autocomplete: "off",
                    maxlength: 25,
                    name: "telephone",
                    placeholder: "Enter a phone number",
                    required: false,
                    showDialCode: false,
                },
                dropdownOptions: {
                    showFlags: false,
                },
                preferredCountries: ["AU", "BR"],
                onlyCountries: [],
                ignoredCountries: [],
                styleClasses: "",
            },
        };
    },
    template: `
    <vue-tel-input v-model="phone" v-bind="bindProps">
    </vue-tel-input>
`,
});

app.use(VueTelInput);
app.mount("#app");
