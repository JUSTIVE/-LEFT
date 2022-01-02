export type Some<A> =
  A extends null
    ? never
    : A extends undefined
      ? never
      : A

export type None = undefined | null

export type Option<A> = Some<A>

export function of<A>(value: A): Option<A> {
  return isNone(value) ? None : value
}

export function isNone(value: any): value is None {
  return value === undefined || value === null
}

export const None = undefined