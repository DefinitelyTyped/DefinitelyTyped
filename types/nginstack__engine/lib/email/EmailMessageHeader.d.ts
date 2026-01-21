export = EmailMessageHeader;
/**
 * Classe agregada a classe EmailMessage que tem por objetivo armazenar informações de cabeçalho
 * do e-mail.
 * @constructor
 * @see EmailMessage
 */
declare function EmailMessageHeader(): void;
declare class EmailMessageHeader {
    /**
     * Nome e endereço de e-email do remetente do e-mail
     * @type {string}
     */
    from: string;
    /**
     * Array contendo a lista de nomes e endereços de e-mails dos destinatários.
     * @type {Array}
     */
    to: any[];
    /**
     * Array contendo a lista de nomes e endereços de e-mails dos destinatários que receberão uma
     * cópia do e-mail.
     * @type {Array}
     */
    cc: any[];
    /**
     * Assunto do e-mail
     * @type {string}
     */
    subject: string;
    /**
     * Nome da organização
     * @type {string}
     */
    organization: string;
    /**
     * Hash(instância de Object) contendo informações extras de cabeçalho do e-mail.
     * @type {Object}
     */
    customHeaders: any;
    /**
     * Data do e-mail
     * @type {Date}
     */
    date: Date;
    /**
     * Identificador do software que criou a mensagem de e-mail.
     * @type {string}
     */
    xMailer: string;
    /**
     * Nome e endereço do e-mail de resposta.
     * @type {string}
     */
    replyTo: string;
    /**
     * Identificador único da mensagem de e-mail.
     * @type {string}
     */
    messageID: string;
    /**
     * Prioridade da mensagem. Pode ser um dos seguintes valores: "unknown", "low", "normal" e "high"
     * @type {string}
     */
    priority: string;
    /**
     * Código do charset do e-mail.
     * Pode ser um dos seguintes valores:
     * 'ISO_8859_1'<br>
     * 'ISO_8859_2'<br>
     * 'ISO_8859_3'<br>
     * 'ISO_8859_4'<br>
     * 'ISO_8859_5'<br>
     * 'ISO_8859_6'<br>
     * 'ISO_8859_7'<br>
     * 'ISO_8859_8'<br>
     * 'ISO_8859_9'<br>
     * 'ISO_8859_10'<br>
     * 'ISO_8859_13'<br>
     * 'ISO_8859_14'<br>
     * 'ISO_8859_15'<br>
     * 'CP1250'<br>
     * 'CP1251'<br>
     * 'CP1252'<br>
     * 'CP1253'<br>
     * 'CP1254'<br>
     * 'CP1255'<br>
     * 'CP1256'<br>
     * 'CP1257'<br>
     * 'CP1258'<br>
     * 'KOI8_R'<br>
     * 'CP895'<br>
     * 'CP852'<br>
     * 'UCS_2'<br>
     * 'UCS_4'<br>
     * 'UTF_8'<br>
     * 'UTF_7'<br>
     * 'UTF_7mod'<br>
     * 'UCS_2LE'<br>
     * 'UCS_4LE'<br>
     * 'UTF_16'<br>
     * 'UTF_16LE'<br>
     * 'UTF_32'<br>
     * 'UTF_32LE'<br>
     * 'C99'<br>
     * 'JAVA'<br>
     * 'ISO_8859_16'<br>
     * 'KOI8_U'<br>
     * 'KOI8_RU'<br>
     * 'CP862'<br>
     * 'CP866'<br>
     * 'MAC'<br>
     * 'MACCE'<br>
     * 'MACICE'<br>
     * 'MACCRO'<br>
     * 'MACRO'<br>
     * 'MACCYR'<br>
     * 'MACUK'<br>
     * 'MACGR'<br>
     * 'MACTU'<br>
     * 'MACHEB'<br>
     * 'MACAR'<br>
     * 'MACTH'<br>
     * 'ROMAN8'<br>
     * 'NEXTSTEP'<br>
     * 'ARMASCII'<br>
     * 'GEORGIAN_AC'<br>
     * 'GEORGIAN_PS'<br>
     * 'KOI8_T'<br>
     * 'MULELAO'<br>
     * 'CP1133'<br>
     * 'TIS620'<br>
     * 'CP874'<br>
     * 'VISCII'<br>
     * 'TCVN'<br>
     * 'ISO_IR_14'<br>
     * 'JIS_X0201'<br>
     * 'JIS_X0208'<br>
     * 'JIS_X0212'<br>
     * 'GB1988_80'<br>
     * 'GB2312_80'<br>
     * 'ISO_IR_165'<br>
     * 'ISO_IR_149'<br>
     * 'EUC_JP'<br>
     * 'SHIFT_JIS'<br>
     * 'CP932'<br>
     * 'ISO_2022_JP'<br>
     * 'ISO_2022_JP1'<br>
     * 'ISO_2022_JP2'<br>
     * 'GB2312'<br>
     * 'CP936'<br>
     * 'GB18030'<br>
     * 'ISO_2022_CN'<br>
     * 'ISO_2022_CNE'<br>
     * 'HZ'<br>
     * 'EUC_TW'<br>
     * 'BIG5'<br>
     * 'CP950'<br>
     * 'BIG5_HKSCS'<br>
     * 'EUC_KR'<br>
     * 'CP949'<br>
     * 'CP1361'<br>
     * 'ISO_2022_KR'<br>
     * 'CP737'<br>
     * 'CP775'<br>
     * 'CP853'<br>
     * 'CP855'<br>
     * 'CP857'<br>
     * 'CP858'<br>
     * 'CP860'<br>
     * 'CP861'<br>
     * 'CP863'<br>
     * 'CP864'<br>
     * 'CP865'<br>
     * 'CP869'<br>
     * 'CP1125'
     * @type {string}
     */
    charsetCode: string;
}
