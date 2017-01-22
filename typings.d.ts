declare module "@zaibot/mathlib" {
  export function constrain(value: number, min: number, max: number): number;
  export function map(value: number, inLow: number, inHigh: number, outLow: number, outHigh: number): number;
  export function map_constrain(value: number, inLow: number, inHigh: number, outMin: number, outMax: number): number;
  export function round_dec(value: number, precision: number): number;
}
