namespace TypeAliasExamples {
  // Objects and Functions
  type Point = {
    x: number;
    y: number;
  };

  type PartialPointX = { x: number };

  type SetPoint = (x: number, y: number) => void;

  // primitive
  type Name = string;

  // union
  type PartialPoint = { x: number } | { x: string };

  // tuple
  type Data = [number, string];

  // extends type alias (equivalent to intersection)
  type ExtendedPoint1 = PartialPointX & { y: number };

  // CAN intersection overlapping type declations, but this is often not what you want
  type ExtendedPoint3 = PartialPointX & { x: string };
  // const u: ExtendedPoint3 = { x: 1 };

  // extends interfaces
  interface PartialPointXInterface {
    x: number;
  }
  type ExtendedPoint2 = PartialPointX & { y: number };

  // class can implement
  class ClassPoint implements Point {
    x: number;
    y: number;
  }

  // class CANNOT implement union types (uncomment for error)
  // class ClassPoint2 implements PartialPoint {}

  // classes can extend
  // -- N/A class ClassPont2 extends Point {}

  // declaration merging
  // -- N/A

  // recursive defintion
  type RecursivePoint = {
    x: number;
    y: number;
    another: RecursivePoint;
  };
  const rp = { x: 1, y: 2, another: { x: 1, y: 2 } };

  // define mapped types
  type Readonly<T> = { readonly [P in keyof T]: T[P] };

  // can be used with mapped types
  type ReadonlyPoint = Readonly<Point>;
}
