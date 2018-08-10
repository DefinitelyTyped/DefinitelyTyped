import Vue from 'vue';
import VueSelect from 'vue-select';

const options = [
    {
        name: 'SomeName'
    },
    {
        name: 'SomeName2'
    }
];

new Vue({
    el: '#app',
    data: {
        options,
        value: null,
    },
    components: {
        'vue-select': VueSelect
    },
    methods: {
        getOptionLabel(option: any) {
            if (option && option.name) {
                return option.name;
            }
            return '';
        },
        optionConsumer(option: any) {
        },
        optionToOption(option: any) {
            return option;
        },
        onSearch(search: string, loading: (b: boolean) => void) {
            loading(true);
        }
    },
    template: `
    <vue-select :filterable="false"
                :value="value"
                :options="options"
                disable="false"
                maxHeight="200"
                searchable="true"
                multiple="false"
                placeholder="Placeholder"
                transition="SomeTransition"
                clearSearchOnSelect="false"
                :closeOnSelect="false"
                label="name"
                :getOptionLabel="getOptionLabel"
                :onChange="optionConsumer"
                :taggable="true"
                :tabindex="null"
                pushTags="false"
                :createOption="optionToOption"
                resetOnOptionsChange="false"
                noDrop="true"
                :inputId="null"
                dir="someDir"
                @search="onSearch"
                @input="optionConsumer">
    </vue-select>
`
});
