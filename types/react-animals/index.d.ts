// Type definitions for react-animals 0.0
// Project: https://github.com/arvinpoddar/react-animals
// Definitions by: Chigozirim Chukwu <https://github.com/smac89>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 2.8

/// <reference types="react" />

interface AnimalProps {
    name:
        | 'alligator'
        | 'anteater'
        | 'armadillo'
        | 'auroch'
        | 'axolotl'
        | 'badger'
        | 'bat'
        | 'beaver'
        | 'buffalo'
        | 'camel'
        | 'capybara'
        | 'chameleon'
        | 'cheetah'
        | 'chinchilla'
        | 'chipmunk'
        | 'chupacabra'
        | 'cormorant'
        | 'coyote'
        | 'crow'
        | 'dingo'
        | 'dinosaur'
        | 'dolphin'
        | 'duck'
        | 'elephant'
        | 'ferret'
        | 'fox'
        | 'frog'
        | 'giraffe'
        | 'gopher'
        | 'grizzly'
        | 'hedgehog'
        | 'hippo'
        | 'hyena'
        | 'ibex'
        | 'ifrit'
        | 'iguana'
        | 'jackal'
        | 'kangaroo'
        | 'koala'
        | 'kraken'
        | 'lemur'
        | 'leopard'
        | 'liger'
        | 'llama'
        | 'manatee'
        | 'mink'
        | 'monkey'
        | 'moose'
        | 'narwhal'
        | 'orangutan'
        | 'otter'
        | 'panda'
        | 'penguin'
        | 'platypus'
        | 'pumpkin'
        | 'python'
        | 'quagga'
        | 'rabbit'
        | 'raccoon'
        | 'rhino'
        | 'sheep'
        | 'shrew'
        | 'skunk'
        | 'squirrel'
        | 'tiger'
        | 'turtle'
        | 'walrus'
        | 'wolf'
        | 'wolverine'
        | 'wombat'
        | string;
    color: React.CSSProperties['color'] | 'none';
    size: React.CSSProperties['width'];
    rounded: boolean;
    square: boolean;
    circle: boolean;
    dance: boolean;
}

declare const Animal: React.VFC<Partial<AnimalProps>>;
export default Animal;
