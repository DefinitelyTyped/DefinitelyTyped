import ColorThief from 'colorthief';

const elem = window.document.createElement('img');
elem.src = 'https://picsum.photos/200/300';
elem.onload = () => {
  const colorThief = new ColorThief();
  colorThief.getColor(elem);
};
