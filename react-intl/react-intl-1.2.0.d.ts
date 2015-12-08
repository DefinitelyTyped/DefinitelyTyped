// Type definitions for react-intl 1.2.0
// Project: http://formatjs.io/react/
// Definitions by: Bruno Grieder <https://github.com/bgrieder>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare module "react-intl" {

    import * as React from 'react'

    module ReactIntl {


        interface IIntlMixin extends React.Mixin<any,any> {
            getIntlMessage(key: string): string
        }

        var IntlMixin: IIntlMixin

        module IntlComponent {
            interface Props {
                locales?: string[]
                messages?: {[key: string]: any}
                formats?: string[]
            }
        }
        interface IntlComponent {
            getIntlMessage(key: string): string;
        }


        module FormattedDate {
            export interface Props extends IntlComponent.Props {
                value: Date
                day?: string
                month?: string
                year?: string
            }
        }
        class FormattedDate extends React.Component<FormattedDate.Props,any> {}


        module FormattedTime {
            export interface Props extends IntlComponent.Props  {
                value: Date
                day?: string
                month?: string
                year?: string
                format?: string
            }
        }
        class FormattedTime extends React.Component<FormattedTime.Props,any> {}


        module FormattedRelative {
            export interface Props extends IntlComponent.Props  {
                value: number
                units?: string //"second", "minute", "hour", "day", "month" or "year"
                style?: string //"best fit" (default) or "numeric"
                format?: string
            }
        }
        class FormattedRelative extends React.Component<FormattedRelative.Props,any> {}


        module FormattedMessage {
            export interface Props extends IntlComponent.Props  {
                message: string;
                [prop: string]: any
            }
        }
        class FormattedMessage extends React.Component<FormattedMessage.Props,any> {}


        module FormattedHTMLMessage {
            export interface Props extends IntlComponent.Props  {
                message: string;
                [prop: string]: any
            }
        }
        class FormattedHTMLMessage extends React.Component<FormattedHTMLMessage.Props,any> {}


        module FormattedNumber {
            export interface Props extends IntlComponent.Props  {
                value: number
                style?: string
                currency?: string
                format?: string
            }
        }
        class FormattedNumber extends React.Component<FormattedNumber.Props,any> {}

    }

    export  = ReactIntl

}
