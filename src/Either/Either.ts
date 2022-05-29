export type Either<A,B> = A|B

export type Left<A> = {
  _: 'Left',
  value:A
}

export type Right<A> = {
  _: 'Right',
  value:A
}

function left()

export const Either = {
  of
}