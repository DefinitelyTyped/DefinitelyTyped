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
        onValChange(val: any) {
        },
        onVoidTab() {
        },
        onSearch(search: string, loading: (b: boolean) => void) {
            loading(true);
        },
        optionFilterBy(option: any, label: string, search: string) {
            return true;
        },
        optionsFilter(options: any[], search: string) {
            return true;
        }
    },
    template: `
    <vue-select :filterable="false"
                :value="value"
                :options="options"
                disable="false"
                clearable="true"
                maxHeight="200"
                searchable="true"
                multiple="false"
                placeholder="Placeholder"
                transition="SomeTransition"
                clearSearchOnSelect="false"
                :closeOnSelect="false"
                label="name"
                autocomplete="off"
                :index="null"
                :getOptionLabel="getOptionLabel"
                :onChange="onValChange"
                :onInput="onValChange"
                :onTab="onVoidTab"
                :taggable="true"
                :tabindex="null"
                pushTags="false"
                :filterBy="optionFilterBy"
                :filter="optionsFilter"
                :createOption="optionToOption"
                resetOnOptionsChange="false"
                noDrop="true"
                :inputId="null"
                dir="someDir"
                selectOnTab="false"
                @search="onSearch"
                @input="optionConsumer">
    </vue-select>
`
});
