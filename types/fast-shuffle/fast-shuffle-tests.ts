import defaultShuffle, { shuffle } from 'fast-shuffle';

{
    const d1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const d2: string[] = shuffle(d1);
    const d3: string[] = defaultShuffle(0.42, d1);
}

{
    const d1 = [
        { name: 'Alice', money: 10 },
        { name: 'Betty', money: 20 },
        { name: 'Cindy', money: 15 },
    ];
    const d2: Array<{ name: string; money: number }> = shuffle(d1);
    const d3: Array<{ name: string; money: number }> = defaultShuffle(0.42, d1);
}
