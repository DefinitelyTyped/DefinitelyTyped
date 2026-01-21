export = HumanSms;
/**
 * Este objeto permite o envio de mensagem SMS texto de dentro sistema, por meio de comunicação
 * via HTTP com o gateway da empresa www.human.com.br .
 *
 * O desenvolvedor que desejar usar este recurso, deve primeiramente ir ao site
 * www.human.com.br, se cadastrar, e em seguida conseguir uma (account) e senha (code) do usuário
 * registrado no site, que servem para autenticar o envio das mensagens SMS consumindo valor
 * da conta.
 *
 * Este driver foi criado com base na documentação existente em
 * http://www.human.com.br/sms/sms_solutions_human_gateway.php
 *
 * **Importante:** para esta API funcionar é necessário que o tráfego de saída pela porta HTTPS
 * tcp esteja aberta nos firewalls.
 * Para celulares no Brasil é necessário prefixar 55 (código do país) antes do código da
 * localidade e número do celular. Mensagens de SMS possuem limite de 160 caracteres.
 * @example
 * var HumanSms = require('@nginstack/engine/lib/sms/HumanSms');
 * var humanSms = new HumanSms('my-account-id', 'my-account-code')
 * humanSms.sms('Company', ['551188881234', '558599991234'], 'Mensagem de teste');
 * @param {string} account Identificação da conta no serviço HumanSms.
 * @param {string} code Código secreto da conta no serviço HumanSms.
 */
declare function HumanSms(account: string, code: string): void;
declare class HumanSms {
    /**
     * Este objeto permite o envio de mensagem SMS texto de dentro sistema, por meio de comunicação
     * via HTTP com o gateway da empresa www.human.com.br .
     *
     * O desenvolvedor que desejar usar este recurso, deve primeiramente ir ao site
     * www.human.com.br, se cadastrar, e em seguida conseguir uma (account) e senha (code) do usuário
     * registrado no site, que servem para autenticar o envio das mensagens SMS consumindo valor
     * da conta.
     *
     * Este driver foi criado com base na documentação existente em
     * http://www.human.com.br/sms/sms_solutions_human_gateway.php
     *
     * **Importante:** para esta API funcionar é necessário que o tráfego de saída pela porta HTTPS
     * tcp esteja aberta nos firewalls.
     * Para celulares no Brasil é necessário prefixar 55 (código do país) antes do código da
     * localidade e número do celular. Mensagens de SMS possuem limite de 160 caracteres.
     * @example
     * var HumanSms = require('@nginstack/engine/lib/sms/HumanSms');
     * var humanSms = new HumanSms('my-account-id', 'my-account-code')
     * humanSms.sms('Company', ['551188881234', '558599991234'], 'Mensagem de teste');
     * @param {string} account Identificação da conta no serviço HumanSms.
     * @param {string} code Código secreto da conta no serviço HumanSms.
     */
    constructor(account: string, code: string);
    account: string;
    code: string;
    sms(originator: any, recipientsPhoneNumbers: any, title: any, text: any): string;
}
