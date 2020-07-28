// Interfaces allow us to force a certain structure on a class or object
// Becase Typescript use structural subtyping, we can create bindings that force a certain structure on class or object. This is called an Interface

export interface HasToString {
  toString(): string;
}
