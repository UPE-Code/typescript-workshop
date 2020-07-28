// Classes in Typescript are as they are in Javascript, but now you can use them as types

enum Period {
  CUBISM = 'Cubism',
  SURREALISM = 'Surrealism',
  EXPRESSIONISM = 'Expressionism',
  POPART = 'Pop ART',
  MODERNART = 'Modedn Art'
}

enum Medium {
  OIL = 'Oil',
  WATERCOLOR = 'Water Color',
  PASTEL = 'Pastel',
  SCULPTURE = 'Sculpture',
  MIXEDMEDIA = 'Mixed Media'
}

// class Art {
//   name: string;
//   painter: string;
//   painted: Date;
//   period: Period;
//   medium: Medium;

//   constructor(
//     name: string,
//     painter: string,
//     painted: Date,
//     period: Period,
//     medium: Medium
//   ) {
//     this.name = name;
//     this.painter = painter;
//     this.painted = painted;
//     this.period = period;
//     this.medium = medium;
//   }

//   toString(): string {
//     return `
//       Name: ${this.name}
//       Painter: ${this.painter}
//       Created: ${this.painted.getFullYear()}
//       Medium: ${this.medium}
//       Period: ${this.period}
//     `;
//   }
// }

class Art {
  constructor(
    private name: string,
    private painter: string,
    private painted: Date,
    private period: Period,
    private medium: Medium
  ) {}

  toString(): string {
    return `
      Name: ${this.name}
      Painter: ${this.painter}
      Created: ${this.painted.getFullYear()}
      Medium: ${this.medium}
      Period: ${this.period}
    `;
  }
}

let StarryNight: Art;
let GirlMandolin: Art;

StarryNight = new Art(
  'Starry Night',
  'Vincent van Gogh',
  new Date('June 01, 1889'),
  Period.MODERNART,
  Medium.OIL
);

console.log(StarryNight.toString());

GirlMandolin = new Art(
  'Girl with a Mandolin',
  'Pablo Picasso',
  new Date('January 01, 1910'),
  Period.CUBISM,
  Medium.OIL
);

console.log(GirlMandolin.toString());

const ArtArray: Art[] = [];
ArtArray.push(StarryNight);
ArtArray.push(GirlMandolin);
console.log(ArtArray);
