import shuffle from 'fast-shuffle';

{
    const d1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const d2 = shuffle(d1);
    const d3 = shuffle(d1, () => 0.42);
}

{
  const d1 = [
    { name: 'Alice', money: 10 },
    { name: 'Betty', money: 20 },
    { name: 'Cindy', money: 15 }
  ];
  const d2 = shuffle(d1);
  const d3 = shuffle(d1, () => 0.42);
}
