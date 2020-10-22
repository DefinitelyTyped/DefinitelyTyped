import Vue from 'vue';
import VueTelInput from 'vue-tel-input';

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
        'vue-tel-input': VueTelInput
    },
    template: `
    <vue-tel-input v-model="phone" v-bind="bindProps">
    </vue-tel-input>
`
});
