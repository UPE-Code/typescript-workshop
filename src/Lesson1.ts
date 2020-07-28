// We can import code using modules
import { Period, Medium, Painting } from './classes/Painting';
import { Genre, Album } from './classes/Album';
import { HasToString } from './interfaces/HasToString';

let StarryNight: HasToString;
let TLOP: HasToString;

StarryNight = new Painting(
  'Starry Night',
  'Vincent van Gogh',
  new Date('June 01, 1889'),
  Period.MODERNART,
  Medium.OIL
);

console.log(StarryNight.toString());

TLOP = new Album(
  'The Life of Pablo',
  'Kanye West',
  new Date('February 14, 2016'),
  Genre.HIPHOP
);
console.log(TLOP.toString());

const arr: HasToString[] = [];
arr.push(StarryNight);
arr.push(TLOP);

console.log(arr);
