"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Painting = exports.Medium = exports.Period = void 0;
var Period;
(function (Period) {
    Period["CUBISM"] = "Cubism";
    Period["SURREALISM"] = "Surrealism";
    Period["EXPRESSIONISM"] = "Expressionism";
    Period["POPART"] = "Pop ART";
    Period["MODERNART"] = "Modedn Art";
})(Period = exports.Period || (exports.Period = {}));
var Medium;
(function (Medium) {
    Medium["OIL"] = "Oil";
    Medium["WATERCOLOR"] = "Water Color";
    Medium["PASTEL"] = "Pastel";
    Medium["SCULPTURE"] = "Sculpture";
    Medium["MIXEDMEDIA"] = "Mixed Media";
})(Medium = exports.Medium || (exports.Medium = {}));
class Painting {
    constructor(name, painter, painted, period, medium) {
        this.name = name;
        this.painter = painter;
        this.painted = painted;
        this.period = period;
        this.medium = medium;
    }
    toString() {
        return `
      Name: ${this.name}
      Painter: ${this.painter}
      Created: ${this.painted.getFullYear()}
      Medium: ${this.medium}
      Period: ${this.period}
    `;
    }
}
exports.Painting = Painting;
