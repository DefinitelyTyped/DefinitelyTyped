import { optionCompute, Option, Fields, visibleFnc } from 'tengitsui';
const fn: optionCompute = (fields: Fields, options: Option[]) => options.slice(0, fields.index);
const res = fn({ index: 1 }, [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
]);
res; // $ExpectType Option[]

const visible: visibleFnc = (params: { fields: Fields }) => !!params.fields.visible;
visible({ fields: { visible: false } }); // $ExpectType boolean
