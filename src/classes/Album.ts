import { HasToString } from '../interfaces/HasToString';

export enum Genre {
  HIPHOP = 'Hip-Hop',
  POP = 'POP',
  RHYTHMANDBLUES = 'Rhythm & Blues',
  ROCK = 'ROCK',
  JAZZ = 'JAZZ'
}

export class Album implements HasToString {
  constructor(
    private album: string,
    private artist: string,
    private released: Date,
    private genre: Genre
  ) {}

  toString(): string {
    return `
      Name: ${this.album}
      Painter: ${this.artist}
      Created: ${this.released.getFullYear()}
      Medium: ${this.genre}
    `;
  }
}
