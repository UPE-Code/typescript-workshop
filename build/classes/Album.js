"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = exports.Genre = void 0;
var Genre;
(function (Genre) {
    Genre["HIPHOP"] = "Hip-Hop";
    Genre["POP"] = "POP";
    Genre["RHYTHMANDBLUES"] = "Rhythm & Blues";
    Genre["ROCK"] = "ROCK";
    Genre["JAZZ"] = "JAZZ";
})(Genre = exports.Genre || (exports.Genre = {}));
class Album {
    constructor(album, artist, released, genre) {
        this.album = album;
        this.artist = artist;
        this.released = released;
        this.genre = genre;
    }
    toString() {
        return `
      Name: ${this.album}
      Painter: ${this.artist}
      Created: ${this.released.getFullYear()}
      Medium: ${this.genre}
    `;
    }
}
exports.Album = Album;
