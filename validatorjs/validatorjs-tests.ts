// ValidatorJS Test
// ================================================================================
/// <reference path="validatorjs.d.ts"/>

// Imports
// --------------------------------------------------------------------------------
import * as Validator from "validatorjs"

var rules: any = {
    foo: "required"
}

var data: any = {
    foo: "bar"
}

var validator: ValidatorJS.Validator<any> = new Validator(data, rules)

var passes: boolean = validator.passes() as boolean
validator.passes(() => {})

var fails: boolean = validator.fails() as boolean
validator.fails(() => {})

var check: boolean = validator.check()

var errors: ValidatorJS.Errors = validator.errors
var all: ValidatorJS.ValidationErrors = errors.all()
var error: Array<string> = errors.get("foo")
var first: string | boolean = errors.first("foo")
var has: boolean = errors.has("foo")

Validator.setMessages("en", {})
var messages: ValidatorJS.ErrorMessages = Validator.getMessages("en")
Validator.useLang("en")
var lang: string = Validator.getDefaultLang()
Validator.setAttributeFormatter((attributes: any) => ({}))
Validator.stopOnError(true)
Validator.register("custom", () => {}, "error.custom")
Validator.registerAsync("custom", () => {}, "error.custom")
