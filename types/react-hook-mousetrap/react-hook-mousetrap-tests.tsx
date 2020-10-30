import useMousetrap from 'react-hook-mousetrap';

export const _ = () => {
    useMousetrap('down', () => console.log('down arrow pressed'));
    useMousetrap(['left', 'right'], () => console.log('left or right arrow pressed'));

    return null;
};
