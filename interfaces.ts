namespace InterfaceExamples {
  // Objects and Functions
  interface PartialPointX {
    x: number;
  }

  interface Point {
    x: number;
    y: number;
  }

  interface SetPoint {
    (x: number, y: number): void;
  }

  // primitives
  // -- N/A

  // union
  // -- N/A

  // tuple
  // -- N/A
  // Can be enforced using a complicated interface (avoid this)
  interface Data extends Array<string | number> {
    0: number;
    1: string;
  }

  // extends interfaces (equivalent to intersection)
  interface ExtendedPoint1 extends PartialPointX {
    y: number;
  }
  // CANNOT override type declarations of another interface
  // interface ExtendedPoint3 extends PartialPointX { x: string; }

  // extends type alias
  type PartialPointXTypeAlias = { x: number };
  interface ExtendedPoint2 extends PartialPointXTypeAlias {
    y: number;
  }

  // class can implement
  class ClassPoint implements Point {
    x: number;
    y: number;
  }

  // classes can extend
  // -- N/Aclass ClassPoint2 extends Point {}

  // declaration merging (avoid this)
  interface MergedPoint {
    x: number;
  }
  interface MergedPoint {
    y: number;
  }
  const m: MergedPoint = { x: 2, y: 2 };

  // recursive definition
  interface RecursivePoint {
    x: number;
    y: number;
    another: RecursivePoint;
  }
  const rp = { x: 1, y: 2, another: { x: 1, y: 2 } };

  // define mapped types
  // -- N/A
  // interface ReadOnly<T> {
  //   readonly [P in keyof T]: T[P];
  // }

  // can be used with mapped types
  type Readonly<T> = { readonly [P in keyof T]: T[P] };
  interface ReadonlyPoint extends Readonly<Point> {}
}
