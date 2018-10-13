const Add = require('./StringCalculator');

test("An empty string will return 0", () => {
  expect(Add("")).toBe(0);
});
