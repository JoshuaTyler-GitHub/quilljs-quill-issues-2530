const { alphabetizeStyleSequencesInString } = require("./index.js");
const correctOrderSingle = "<p>Description</p><p><a href=\"https://www.link.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(59, 89, 152);\">https://www.link.com/</a></p>"; // NOSONAR
const correctOrderMultiple = "<p><a href=\"https://www.link.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(59, 89, 152); flex: 1;\">https://www.link.com/</a></p><p>Description</p><p><a href=\"https://www.link.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(59, 89, 152);\">https://www.link.com/</a></p>"; // NOSONAR
const wrongOrderSingle = "<p>Description</p><p><a href=\"https://www.link.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(59, 89, 152); background-color: rgb(255, 255, 255);\">https://www.link.com/</a></p>"; // NOSONAR
const wrongOrderMultiple = "<p><a href=\"https://www.link.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"flex: 1; color: rgb(59, 89, 152); background-color: rgb(255, 255, 255);\">https://www.link.com/</a></p><p>Description</p><p><a href=\"https://www.link.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(59, 89, 152);\">https://www.link.com/</a></p>"; // NOSONAR

// alphabetizeStyleSequencesInString(string) - order styles alphabetically
test("alphabetizeStyleSequencesInString(string) - order styles alphabetically", () => {
  const testCase1 = String(correctOrderSingle);
  const testCase2 = String(wrongOrderSingle);
  const testCase3 = String(correctOrderMultiple);
  const testCase4 = String(wrongOrderMultiple);

  expect(alphabetizeStyleSequencesInString(testCase1)).toEqual(correctOrderSingle);
  expect(alphabetizeStyleSequencesInString(testCase2)).toEqual(correctOrderSingle);
  expect(alphabetizeStyleSequencesInString(testCase3)).toEqual(correctOrderMultiple);
  expect(alphabetizeStyleSequencesInString(testCase4)).toEqual(correctOrderMultiple);
});

