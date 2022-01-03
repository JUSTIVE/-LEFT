import {Option} from "../../src/Option/Option";

test("option: some", () => {
  expect(Option.of(0)).toBe(0);
});

test("option: none",()=>{
  expect(Option.of(null)).toBe(Option.None)
  expect(Option.of(undefined)).toBe(Option.None)
  expect(Option.of([])).not.toBe(Option.None)
  expect(Option.of({})).not.toBe(Option.None)
})

test("option: isSome",()=>{
  expect(Option.isSome(Option.of(0))).toBeTruthy();
  expect(Option.isSome(Option.of(undefined))).not.toBeTruthy();
})
