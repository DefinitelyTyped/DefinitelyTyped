import * as React from "react";
import * as I18n from "react-redux-i18n";

class ReactReduxI18nTests_Translate1 extends React.Component<React.Props<{}>>{

  render() {
    return (
      <I18n.Translate value="application.title" />
    )
  }
}



class ReactReduxI18nTests_Translate2 extends React.Component<React.Props<{}>>{

  render() {
    return (
      <I18n.Translate value="application.hello" name="Aad" />
    )
  }
}


class ReactReduxI18nTests_Translate3 extends React.Component<React.Props<{}>>{

  render() {
    return (
      <I18n.Localize value="2015-09-03" dateFormat="date.long"/>
    )
  }
}


class ReactReduxI18nTests_Translate4 extends React.Component<React.Props<{}>>{

  render() {
    return (
      <I18n.Localize  value={10/3} options={{style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2}} />
    )
  }
}

function testI18Helper() {
  I18n.I18n.t('application.title'); // => returns 'Toffe app met i18n!'
  I18n.I18n.t('application.name', { name: 'Aad' }); // => returns 'Hallo, Aad!'

  I18n.I18n.l(1385856000000, { dateFormat: 'date.long' }); // => returns '1 december 2013'
  I18n.I18n.l(Math.PI, { maximumFractionDigits: 2 }); // => returns '3,14'
}
