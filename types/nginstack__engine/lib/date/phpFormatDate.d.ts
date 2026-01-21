export = phpFormatDate;
/**
 * Formata data de acordo com a API do PHP usando um padrão de formatação.
 * @param {!Date} date Data a ser formatada.
 * @param {string} format Formato. Abaixo tabela com definições para composição
 * do formato para datas.
 * Dia<br>
 * d - Dia do mês com 2 dígitos e zero na frente: (01 à 31).<br>
 * D - Uma representação textual do dia em três letras: ("Seg" ou "Dom").<br>
 * j - Dia do mês sem  zeros na frente: (1 à 31).<br>
 * l - Uma representação textual completa do dia da semana:<br>
 *     ("Domingo" ou "Sábado").<br>
 * N - Representação numérica de acordo com ISO-8601 do dia da semana:<br>
 *     (1 para "Segunda" à 7 para "Sábado").<br>
 * S - Sufixo ordinal Inglês para o dia do mês em dois caracteres: nd, rd <br>
 *     ou th.<br>
 *     Funciona bem com "j".<br>
 * w - Representação numérica do dia do 0 semana: 0 (Domingo) até 6<br>
 *     (Sábado).<br>
 * z - O dia do ano a partir de 0: (0 à 365).<br>
 * W - Número da semana do ano de acordo com ISO-8601, semana a partir de<br>
 *     segunda-feira: (1 à 53).<br>
 * F - Uma representação textual de um mês ("Janeiro" à "Dezembro").<br>
 * m - Representação numérica de um mês, com zeros à esquerda: (01 à 12).<br>
 * M - Uma representação textual curta de um mês em três letras <br>
 *     ("Jan" à "Dez").<br>
 * n - Representação numérica de um mês, sem zeros (1 à 12).<br>
 * t - Número de dias no mês dado (28 à 31).<br>
 * L - 1 se for um ano bissexto, 0 caso contrário.<br>
 * o - Número do ano de acordo com ISO-8601. O "o" tem o mesmo valor que <br>
 *     "Y" exceto quando o dia do próximo ano pertencer a semana ISO <br>
 *     "W" do ano anterior, neste caso "o" retornará o ano anterior.<br>
 * Y - Uma representação numérica de um ano em 4 dígitos: (1999 ou 2003).<br>
 * y - Uma representação em dois dígitos de um ano: (99 ou 03).<br>
 * a - Representação "Ante meridiem" e "Post meridiem" em caixa baixa:<br>
 *     ("am" ou "pm").<br>
 * a - Representação "Ante meridiem" e "Post meridiem" em caixa alta:<br>
 *     ("AM" ou "PM").<br>
 * B - Representação de tempo na internet (000 à 999).<br>
 * g - Formato de 12 horas sem zeros: (1 à 12).<br>
 * G - Formato de 24 horas sem zeros: (0 à 23).<br>
 * h - Formato de 12 horas com zeros: (01 à 12).<br>
 * H - Formato de 24 horas com zeros: (00 à 23).<br>
 * i - Minutos com zeros: (00 à 59).<br>
 * s - Segundos com zeros à esquerda: (00 à 59).<br>
 * O - Diferença para "Greenwich time" (GMT) em horas: 0200.<br>
 * P - Diferença para "Greenwich time" (GMT) com dois pontos entre horas e<br>
 *     minutos: (+02:00).<br>
 * T - Configuração de fuso horário: ("EST", "MDT" ...). Hoje o sistema incorretamente está
 * retornando a hora da data. Esse comportamento deverá ser revisto em breve, portanto não
 * utilize este formato.<br>
 * Z - Deslocamento de fuso horário em segundos. O deslocamento de fusos<br>
 *     horários a oeste da UTC é sempre negativa, e para aqueles leste<br>
 *     da UTC é sempre positivo: (-43200 até 43200).<br>
 * c - Data de acordo com ISO 8601: ("2004-02-12T15: 19:21 +00:00").<br>
 * r - Data formatada conforme RFC 2822:<br>
 *     ("dom jan 01 23:59:59 GMT-0300 (Hora oficial do Brasil) 2012").<br>
 * U - Segundos desde a era Unix iniciada em:<br>
 *     "qui jan 01 03:00:00 GMT-0300 (Hora oficial do Brasil) 1970".<br>
 * @return {string} Data formatada.
 * @author Adaptado de http://jacwright.com/projects/javascript/date_format.
 */
declare function phpFormatDate(date: Date, format: string): string;
