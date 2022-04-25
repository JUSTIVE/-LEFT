export type Some<A> =
  A extends null
    ? never
    : A extends undefined
      ? never
      : A

export type None = undefined | null

export type Option<A> = Some<A>

function of<A>(value: A): Option<A> {
  return isNone(value) ? None : value
}

function isNone(value: any): value is None {
  return value === undefined || value === null
}

function isSome<A>(value:any):value is Some<A>{
  return !isNone(value)
}

const None = undefined

export const Option = {
  None,
  of,
  isNone,
  isSome
}
