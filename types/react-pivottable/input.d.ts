/**
 * ```javascript
 *  const data = [
 *   {
 *       attr1: 'value1_attr1',
 *       attr2: 'value1_attr2'
 *    attr2: 'value1_attr2'
 *   },
 *   {
 *       attr1: 'value2_attr1',
 *       attr2: 'value2_attr2',
 *   },
 *   ]
 *   const data = [
 *   ['attr1', 'attr2'],
 *   ['value1_attr1', 'value1_attr2'],
 *   ['value2_attr1', 'value2_attr2'],
 *   ];
 *   const data = function(callback) {
 *   callback({
 *       "attr1": "value1_attr1",
 *       "attr2": "value1_attr2",
 *       //...
 *   });
 *   callback({
 *       "attr1": "value2_attr1",
 *       "attr2": "value2_attr2",
 *       //...
 *   };
 *   //...
 *  };
 *  ```
 * ];
 */
export type TableInput =
    | string[][]
    | Array<{ [K: string]: string }>
    | ((cb: (param: { [K: string]: string }) => void) => void);
