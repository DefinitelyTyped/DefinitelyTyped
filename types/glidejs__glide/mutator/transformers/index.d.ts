import Glide = require('../../index');
import { Components } from '../../components';

type TransformerFunction = (
    Glide: Glide,
    Components: Components,
) => {
    modify(translate: number): number;
};

export default TransformerFunction;
