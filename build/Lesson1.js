"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// We can import code using modules
const Painting_1 = require("./classes/Painting");
const Album_1 = require("./classes/Album");
let StarryNight;
let TLOP;
StarryNight = new Painting_1.Painting('Starry Night', 'Vincent van Gogh', new Date('June 01, 1889'), Painting_1.Period.MODERNART, Painting_1.Medium.OIL);
console.log(StarryNight.toString());
TLOP = new Album_1.Album('The Life of Pablo', 'Kanye West', new Date('February 14, 2016'), Album_1.Genre.HIPHOP);
console.log(TLOP.toString());
const arr = [];
arr.push(StarryNight);
arr.push(TLOP);
console.log(arr);
