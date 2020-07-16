import Vue from 'vue';
import { VueEditor } from 'vue2-editor';

new Vue({
    el: '#app',
    data: {
      phone: "",
      bindProps: {
        defaultCountry: "",
        disabledFetchingCountry: false,
        disabled: false,
        disabledFormatting: false,
        placeholder: "Enter a phone number",
        required: false,
        enabledCountryCode: false,
        enabledFlags: true,
        preferredCountries: ["AU", "BR"],
        onlyCountries: [],
        ignoredCountries: [],
        autocomplete: "off",
        name: "telephone",
        maxLen: 25,
        wrapperClasses: "",
        inputClasses: "",
        dropdownOptions: {
          disabledDialCode: false
        },
        inputOptions: {
          showDialCode: false
        }
      }
    },
    components: {
        VueEditor,
    },
    template: `<vue-editor v-model="content"></vue-editor>`
});
