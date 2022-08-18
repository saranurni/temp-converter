import tryConvert from "./tryConvert";

test("convert from 100 Celsius toFahrenheit", () => {
  const temp2Convert = 100;
  const conversion = "toFahrenheit";
  const expected = "212";
  const result = tryConvert(temp2Convert, conversion);
  expect(result).toBe(expected);
});

test("convert from 50 Fahrenheit toCelsius", () => {
  const temp2Convert = 50;
  const conversion = "toCelsius";
  const expected = "10";
  const result = tryConvert(temp2Convert, conversion);
  expect(result).toBe(expected);
});

test("convert to Celsius with non-numerical input", () => {
  const temp2Convert = "abc";
  const conversion = "toCelsius";

  const result = tryConvert(temp2Convert, conversion);
  expect(result).toBe("");
});

test("convert to Fahrenheit with non-numerical input", () => {
  const temp2Convert = "abc";
  const conversion = "toFahrenheit";
  const result = tryConvert(temp2Convert, conversion);
  expect(result).toBe("");
});
