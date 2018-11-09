// vue augmentation
import Vue, { ComponentOptions } from 'vue'

import { ValidationRule } from './lib/validators'
import { Validation } from './vuelidate'

declare module 'vue/types/vue' {
    type ValidationProperties<V extends Vue> = {
        [P in keyof V]?: Validation
    }

    interface ValidationGroups<V extends Vue> {
        [groupName: string]: ValidationProperties<V>
    }

    interface Vue {
        $v: ValidationProperties<this> & ValidationGroups<this> & Validation

        delayTouch(v: Validation): void

        validations(): any // unknown
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
    interface RuleDecl {
        [rule: string]: ValidationDecl | GroupDecl | AsyncDecl | NestedDecl
    }

    interface ComponentOptions<V extends Vue> {
        validations?: RuleDecl
    }
}
