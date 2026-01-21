export = AspSms;
/**
 * Este objeto permite o envio de mensagem SMS texto e WapPush de dentro sistema, por meio de
 * comunicação via HTTP e XML com o gateway da empresa www.aspsms.com .
 *
 * O desenvolvedor que desejar usar este recurso, deve primeiramente ir ao site
 * www.aspsms.com, se cadastrar, e em seguida comprar créditos.
 *
 * Eles possuem atuação em 200 países, com diversas parcerias com as operadoras
 * de celular locais. No Brasil até Fev/2006 eles possuíam parcerias com TIM e OI.
 *
 * Este driver foi criado com base na documentação existente em:
 * https://www.aspsms.com/xml/doc/xmlsvr18.pdf.
 *
 * Uma vez adquiridos os créditos, haverá um link para se conseguir uma USERKEY
 * que junto com a password do usuário registrado no site, servem para autenticar
 * o envio das mensagens SMS consumindo os créditos adquiridos.
 * @example
 * var AppSms = require('@nginstack/engine/lib/sms/AppSms');
 * var aspSms = new AspSms('my-user-key', 'my-password');
 * // envia mensagem via SMS para dois telefones celulares
 * aspSms.sms('My System', ['551188881234', '558599991234'], 'Mensagem de teste')
 * // envia mensagem via SMS para dois telefones celulares
 * aspSms.wapPush('My System', '551188881234', 'Mensagem de teste')
 * @param {string} userKey Identificação da conta do serviço App SMS.
 * @param {string} password Senha da conta do serviço App SMS.
 */
declare function AspSms(userKey: string, password: string): void;
declare class AspSms {
    /**
     * Este objeto permite o envio de mensagem SMS texto e WapPush de dentro sistema, por meio de
     * comunicação via HTTP e XML com o gateway da empresa www.aspsms.com .
     *
     * O desenvolvedor que desejar usar este recurso, deve primeiramente ir ao site
     * www.aspsms.com, se cadastrar, e em seguida comprar créditos.
     *
     * Eles possuem atuação em 200 países, com diversas parcerias com as operadoras
     * de celular locais. No Brasil até Fev/2006 eles possuíam parcerias com TIM e OI.
     *
     * Este driver foi criado com base na documentação existente em:
     * https://www.aspsms.com/xml/doc/xmlsvr18.pdf.
     *
     * Uma vez adquiridos os créditos, haverá um link para se conseguir uma USERKEY
     * que junto com a password do usuário registrado no site, servem para autenticar
     * o envio das mensagens SMS consumindo os créditos adquiridos.
     * @example
     * var AppSms = require('@nginstack/engine/lib/sms/AppSms');
     * var aspSms = new AspSms('my-user-key', 'my-password');
     * // envia mensagem via SMS para dois telefones celulares
     * aspSms.sms('My System', ['551188881234', '558599991234'], 'Mensagem de teste')
     * // envia mensagem via SMS para dois telefones celulares
     * aspSms.wapPush('My System', '551188881234', 'Mensagem de teste')
     * @param {string} userKey Identificação da conta do serviço App SMS.
     * @param {string} password Senha da conta do serviço App SMS.
     */
    constructor(userKey: string, password: string);
    userKey: string;
    password: string;
    postHttp(content: any): string;
    send(
        originator: any,
        recipientsPhoneNumbers: any,
        title: any,
        text: any,
        wapPushDescription: any,
        wapPushUrl: any
    ): string;
    sms(originator: any, recipientsPhoneNumbers: any, title: any, text: any): string;
    wapPush(
        originator: any,
        recipientsPhoneNumbers: any,
        wapPushDescription: any,
        wapPushUrl: any
    ): string;
}
