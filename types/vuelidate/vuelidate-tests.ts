import { Validation } from 'vuelidate'
import { required, integer, decimal,  minLength, sameAs, helpers, CustomRule } from 'vuelidate/lib/validators'

import Vue, { ComponentOptions } from 'vue'

// excerpt from vue-class-component/src/declarations.ts
type VueClass<V> = { new(...args: any[]): V & Vue } & typeof Vue
// excerpt from vue-class-component/src/index.ts
function Component(options: ComponentOptions<Vue> | VueClass<Vue>): any {
    return null; // mocked
}

const mustBeCool: CustomRule = (value: string) => value.indexOf('cool') >= 0

const mustBeCool2: CustomRule = (value: string) => !helpers.req(value) || value.indexOf('cool') >= 0

const contains = (param: string): CustomRule =>
    (value: string) => !helpers.req(value) || value.indexOf(param) >= 0

const mustBeCool3 = helpers.withParams(
    { type: 'mustBeCool3' },
    (value: any) => !helpers.req(value) || value.indexOf('cool') >= 0
)

const mustBeCool3Result: boolean = mustBeCool3(50)

const mustBeCool4 = helpers.regex('mustBeCool4', /^.*cool.*$/)

const mustBeSame = (reference: string) => helpers.withParams(
    { type: 'mustBeSame' },
    (value: any, parentVm?: Vue) =>
        value === helpers.ref(reference, self, parentVm)
)

const mustHaveLength = (minLen: number) => helpers.withParams(
    { type: 'mustHaveLength' },
    (value: any) =>
        helpers.len(value) > minLen
)

@Component({
    validations: {
        password: {
            required,
            minLength: minLength(6),
            mustHaveLength: mustHaveLength(6)
        },
        repeatPassword: {
            sameAsPassword: sameAs('password'),
            mustBeSame: mustBeSame('password'),
            sameAsPassword2: sameAs(vm => vm.password)
        },
        form: {
            nestedA: {
                required
            },
            nestedB: {
                required
            },
            nestedOfLength: {
                mustHaveLength: mustHaveLength(6)
            }
        },
        age: {
            required,
            integer
        },
        coolFactor: {
            required,
            decimal
        },
        flatA: { required },
        flatB: { required },
        forGroup: {
            nested: { required }
        },
        validationGroup: ['age', 'coolFactor', 'flatA', 'flatB', 'forGroup.nested'],
        people: {
            required,
            minLength: minLength(3),
            $each: {
                name: {
                    required,
                    minLength: minLength(2)
                }
            }
        },
        username: {
            required,
            isUnique(value: string) {
                // standalone validator ideally should not assume a field is required
                if (value === '') return true

                // simulate async call, fail for all logins with even length
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(typeof value === 'string' && value.length % 2 !== 0)
                    }, 350 + Math.random() * 300)
                })
            }
        },
        myField: {
            required,
            mustBeCool,
            mustBeCool2,
            containsA: contains('a'),
            mustBeCool3
        }
    }
})
export class ValidComponent extends Vue {
    password = ''
    repeatPassword = ''

    form = {
        nestedA: 'A',
        nestedB: 'B',
        nestedOfLength: ''
    }

    age = 50
    coolFactor = 0.25

    flatA = ''
    flatB = ''
    forGroup = {
        nested: ''
    }

    people: string[] = ['Pierre', 'Paul', 'Jacques']

    username = ''

    myField = ''

    touchMap = new WeakMap()
    delayTouch(v: Validation) {
        v.$reset()
        if (this.touchMap.has(v)) {
            clearTimeout(this.touchMap.get(v))
        }
        this.touchMap.set(v, setTimeout(v.$touch, 1000))
    }

    accessValidatorParams() {
        console.log(this.$v.$params.form)

        if (this.$v.form) {
            console.log(this.$v.form.$params)
            console.log(this.$v.form.$params.nestedA)
            console.log(this.$v.form.nestedA)
            console.log(this.$v.form.$params.nestedOfLength)
            console.log(this.$v.form.nestedOfLength)
        }
        console.log(this.$v.validationGroup.$params)
    }

    accessGroups() {
        console.log(this.$v.validationGroup)
    }

    accessDollarV() {
        console.log(this.$v.$invalid)
    }

    hasDescription = false

    get isRepoValid() {
        return !this.$v.$invalid
    }

    get isPasswordLengthOk() {
        if (this.$v.password) {
            return !this.$v.password.minLength
        } else return false
    }
}

@Component({
    validations() {
        const self = this as Valid2Component // assert
        return self.myToggle
            ? { myField1: required, myField2: contains('maybe') }
            : { myField1: contains('maybe'), myField2: required }
    }
})
export class Valid2Component extends Vue {
    myToggle = false
    myField1 = ''
    myField2 = ''
}
