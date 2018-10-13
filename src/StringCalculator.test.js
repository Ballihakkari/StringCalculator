const Add = require('./StringCalculator');

test("An empty string will return 0", () => {
  expect(Add("")).toBe(0);
});
test("If one number is inserted, return that number", () => {
  expect(Add("5")).toBe(5);
});
