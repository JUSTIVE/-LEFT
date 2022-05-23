export type Some<A> =
  A extends null
    ? never
    : A extends undefined
      ? never
      : {
        _: 'Some',
        value:A
      }

export type None = undefined | null

export type Option<A> = Some<A>

function of<A>(value: A): Option<A> {
  return isNone(value) ? None : { _: 'Some', value }
}

function isNone(value: any): value is None {
  return value === undefined || value === null
}

function isSome<A>(value:any):value is Some<A>{
  return !isNone(value)
}

const None = undefined

function map<A,B>(option: Option<A>, f: (a:A) => B): Option<B> {
  if (isSome(option)) {
    return of(f(option.value))
  }
  return option
}

function flatMap<A,B>(option: Option<A>, f: (a:A) => Option<B>): Option<B> {
  if (isSome(option)) {
    return f(option.value)
  }
  return option
}

export const Option = {
  None,
  of,
  isNone,
  isSome,
  map,
  flatMap
}

// type UmaErrorType = "ValidationError"
//
// async function updateData(uma_id: string, endpoint: "uma" | "card") {
//   try {
//     if (!uma_id) throw new ValidationError("우마 아이디를 입력해주세요.");
//   } catch (e) {
//     if (e instanceof ValidationError) {
//       setUmaError(e.message);
//     }
//   }
//
//   try {
//     await instance.post(`/refresh/${uma_id}/${endpoint}`);
//     alert({
//       type: "success",
//       title: `${uma_id}의 정보를 업데이트 했습니다!`,
//     });
//   } catch (e) {
//     console.log(e);
//     if (e instanceof Error)
//       alert({
//         type: "error",
//         title: `${uma_id}의 정보를 업데이트 하는중 오류가 발생했습니다!`,
//         message: e.message,
//       });
//     throw e;
//   }
// }
//
// const updateUma = () => chain(uma_id, updateData, "uma");
