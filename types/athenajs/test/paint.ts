import { Paint } from 'athenajs';

const paint: Paint = new Paint('brush', {
    width: 300,
    height: 200,
    color: 'red'
});

paint.color = 'red';
paint.circle(0, 0, 150);
paint.circle(0, 0, 100, 'green');
paint.circle(0, 0, 50, 'green', 2, 'blue');
