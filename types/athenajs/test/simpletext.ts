import { SimpleText } from 'athenajs';

const myText: SimpleText = new SimpleText('MyText', {
    text: 'yop',
    width: 100,
    height: 200,
    fontFace: 'Arial',
    fontSize: '20px',
    fontStyle: 'italic',
    fontWeight: '300',
    align: 'center',
    color: 'white'
});

myText.setSize(100, 200);
myText.setText('Hi!');
myText.setColor('rgba(0,0,0,.4');
