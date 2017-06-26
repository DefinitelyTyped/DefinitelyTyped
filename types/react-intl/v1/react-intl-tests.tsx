/**
 * Created by Bruno Grieder
 */

import * as React from 'react'

import * as reactMixin from 'react-mixin'
import {IntlMixin, IntlComponent, FormattedNumber, FormattedMessage, FormattedDate} from 'react-intl'


///////////////////////////////////////////////////////////////////////////
//
// This class does not use the mixin and react-mixin is not required
// The MESSAGES are maintained in the file
// To use it call <I18nDirect locales={['en-US']}/>
//
////////////////////////////////////////////////////////////////////////////


const MESSAGES: {[key: string] : { [lang: string]: string }} = {

    Sorry: {
        'en-US': 'Sorry {name}',
        'fr-FR': 'Désolé {name}'
    }
}


namespace I18nDirect {

    export interface Props extends IntlComponent.Props {}
}

class I18nDirect extends React.Component<I18nDirect.Props> {

    private _currentLocale: string
    private _messages: {[key: string]: string}

    constructor( props: I18nDirect.Props ) {
        super( props )
    }


    render() {

        return (

            <ul>
                <li>FormattedNumber:&nbsp;
                    <FormattedNumber value={99.95} style="currency" currency="USD"/>
                </li>
                <li>FormattedMessage:&nbsp;
                    <FormattedMessage message={this._messages['Sorry']} name='Dave'/>
                </li>
                <li>FormattedDate:&nbsp;
                    <FormattedDate value={new Date()}/>
                </li>
            </ul>

        )
    }

    componentWillReceiveProps( nextProps: I18nDirect.Props ) {
        this.compileMessages(nextProps)
    }

    componentWillMount() {
        this.compileMessages(this.props)
    }


    private compileMessages = (props: I18nDirect.Props): void => {

        let locale: string = ( props.locales && props.locales[ 0 ] ) || 'en-US'

        if (this._currentLocale !== locale) {

            this._messages = Object.keys( MESSAGES ).reduce(
                ( dic , key ) => {
                    dic[ key ] = MESSAGES[ key ][ locale ]
                    return dic
                },
                {} as { [key: string]: string; }
            )
        }
    }

}

///////////////////////////////////////////////////////////////////////////
//
// This class uses the mixin and react-mixin is
// The MESSAGES are passed from messages property of the props
// To use it call <I18nMixin {...props}/>
//
////////////////////////////////////////////////////////////////////////////


namespace I18nMixin {

    export interface Props extends IntlComponent.Props {}
}

@reactMixin.decorate( IntlMixin )
class I18nMixin extends React.Component<I18nMixin.Props> implements IntlComponent {

    private _currentLocale: string

    constructor( props: I18nMixin.Props ) {
        super( props )
    }

    //Expose the method provided by the Mixin
    getIntlMessage: (key: string) => string =  this['getIntlMessage']


    render() {

        return (

            <ul>
                <li>FormattedNumber:
                    <FormattedNumber value={99.95} style="currency" currency="USD"/>
                </li>
                <li>FormattedMessage:
                    <FormattedMessage message={this.getIntlMessage('Sorry')} name='Dave'/> {/* this uses the mixin */}
                </li>
            </ul>

        )
    }
}

export { I18nDirect, I18nMixin }
