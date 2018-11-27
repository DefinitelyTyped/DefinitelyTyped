import { ValidationParams } from './lib/validators'
import Vue, { PluginFunction } from 'vue'

/**
 * Covers beforeCreate(), beforeDestroy() and data().
 *
 * No public members.
 */
export const validationMixin: any

// const Validation
export interface Validation extends Vue {
    // const validationGetters
    readonly $invalid: boolean
    readonly $dirty: boolean
    readonly $error: boolean
    readonly $pending: boolean
    readonly $params: { [attr: string]: any }

    // const validationMethods
    $touch(): never
    $reset(): never
    $flattenParams(): ValidationParams[]
}

// vue plugin
export const Vuelidate: PluginFunction<any>
