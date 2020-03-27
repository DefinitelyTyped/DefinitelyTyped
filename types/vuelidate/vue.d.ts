// vue augmentation
import Vue, { ComponentOptions } from 'vue'

import { ValidationRule } from './lib/validators'
import { Validation } from './vuelidate'

declare module 'vue/types/vue' {
    type ValidationProperties<V> = {
        [P in Exclude<keyof V, '$v'>]?: Validation & ValidationProperties<V[P]> & ValidationEvaluation
    }

    interface ValidationGroups {
        [groupName: string]: Validation & ValidationProperties<any>
    }

    interface ValidationEvaluation {
        [ruleName: string]: boolean
    }

    interface Vue {
        $v: ValidationProperties<this> & ValidationGroups & Validation

        delayTouch(v: Validation): void
    }
}

declare module 'vue/types/options' {
    interface ValidGroupDecl {
        [group: string]: string[]
    }

    interface ValidPropertyDecl {
        [prop: string]: RuleDecl
    }

    type ValidationDecl = ValidationRule | ((...args: any[]) => ValidationRule)
    type GroupDecl = string[]
    type AsyncDecl = (...args: any[]) => boolean | Promise<boolean>
    type NestedDecl = RuleDecl
    type DynamicDecl = () => RuleDecl
    interface RuleDecl {
        [rule: string]: ValidationDecl | GroupDecl | AsyncDecl | NestedDecl
    }

    interface ComponentOptions<V extends Vue> {
        validations?: RuleDecl | DynamicDecl
    }
}
