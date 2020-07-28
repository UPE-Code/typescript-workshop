import { HasToString } from '../interfaces/HasToString';

export enum Period {
  CUBISM = 'Cubism',
  SURREALISM = 'Surrealism',
  EXPRESSIONISM = 'Expressionism',
  POPART = 'Pop ART',
  MODERNART = 'Modedn Art'
}

export enum Medium {
  OIL = 'Oil',
  WATERCOLOR = 'Water Color',
  PASTEL = 'Pastel',
  SCULPTURE = 'Sculpture',
  MIXEDMEDIA = 'Mixed Media'
}

export class Painting implements HasToString {
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
