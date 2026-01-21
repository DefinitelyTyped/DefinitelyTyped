export = Repository;
/**
 * Classe que permite ler e escrever propriedades no repositório de dados do Engine.
 *
 * O repositório de dados é uma objeto cujas propriedades são compartilhadas entre todas as
 * sessões e ambientes JavaScripts do Engine, permitindo transferir informações entre sessões. Por
 * ser um ambiente global à todas as sessões, os nomes das propriedades devem buscar utilizar
 * alguma nomenclatura única para evitar colisões de uso.
 *
 * Via de regra os dados informados no repositório são cópias dos valores informados. A única
 * exceção são dados do tipo **DataSet**. Ao gravar um DataSet é realizado um clone do cursor do
 * DataSet em vez de ser realizada uma cópia. Portanto, todas as sessões que estejam lendo uma
 * propriedade do repositório do tipo **DataSet** estão manipulando a mesma tabela. Dessa forma,
 * as alterações realizadas em um DataSet originado do repositório em uma sessão serão refletidas
 * em todas as demais sessões, mesmo que a propriedade do repositório não seja explicitamente
 * atualizada.
 *
 * Os valores armazenados no repositório também podem ser lidos e alterados como se fossem
 * propriedades desta instância. Esse modo é mantido apenas para fins de compatibilidade, sendo
 * recomendado o uso dos métodos desta classe no seu lugar.
 *
 * Todas as instâncias desta classe manipulam o mesmo repositório compartilhado de dados. Para dar
 * mais legibilidade ao código, é recomendada que seja utilizada a instância publicada no módulo
 * `@nginstack/engine/context/repository.js`. Em códigos da Virtual File System, também pode
 * ser utilizada a variável global `repository`.
 * @constructor
 * @example
 * const repository = require('@nginstack/context/repository.js');
 * repository.set('mySharedProperty', 'test');
 *
 * // In other JavaScript session
 * repository.get('mySharedProperty'); // => 'test'
 */
declare function Repository(): void;
declare class Repository {
    /**
     * Determina se existe uma propriedade com o nome informado.
     * @param {string} name Nome da propriedade a ser verificada.
     * @return {boolean} True se existir a propriedade com o nome informado.
     */
    has(name: string): boolean;
    /**
     * Obtém o valor de uma propriedade com o nome informado ou *undefined* caso não exista uma.
     * @param {string} name Nome da propriedade a ser obtida.
     * @return {*} Valor da propriedade caso exista uma ou *undefined* no caso contrário.
     */
    get(name: string): any;
    /**
     * Informa o valor de uma propriedade com o nome informado.
     * @param {string} name Nome da propriedade a ser atualizada.
     * @param {*} Valor da propriedade a ser atualizada.
     */
    set(name: string, value: any): void;
    /**
     * Excluí a propriedade informada.
     * @param {string} name Nome da propriedade a ser excluída.
     */
    delete(name: string): void;
    /**
     * Obtém um array com os nomes de todas propriedades armazenadas no repositório. A ordem das
     * propriedades retornadas é indeterminada.
     * @return {string[]} Array com os nomes das propriedades adicionadas anteriormente
     * pelo método `set`.
     */
    getPropertyNames(): string[];
}
