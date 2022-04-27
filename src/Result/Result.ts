export type Success<T> = {
  resultType: "Success",
  value: T
}

export type FailJust = {
  resultType: "Fail",
  value: {
    failType: "FailJust",
  }
}

export type FailWithReason<R> = {
  resultType: "Fail",
  value: {
    failType: "FailWithReason",
    value: R
  }
}

export type FailWithReasonAndEvidence<R, E> = {
  resultType: "Fail",
  value: {
    failType: "FailWithReasonAndEvidence",
    value: {
      reason: R,
      evidence: E
    }
  }
}

export type Fail<R, E> =
  FailJust
  | FailWithReason<R>
  | FailWithReasonAndEvidence<R, E>


export type Result<T,R,E> = Success<T>|Fail<R,E>

