const { alphabetizeStyleSequencesInString } = require("./index.js");
const correctOrderSingleSequence = "<p>Description</p><p><a href=\"https://www.link.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(59, 89, 152);\">https://www.link.com/</a></p>"; // NOSONAR
const correctOrderMultipleSequences = "<p><a href=\"https://www.link.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(59, 89, 152); flex: 1;\">https://www.link.com/</a></p><p>Description</p><p><a href=\"https://www.link.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(59, 89, 152);\">https://www.link.com/</a></p>"; // NOSONAR
const emptyString = "";
const noSequences = "<p>Description</p><p><a href=\"https://www.link.com/\" rel=\"noopener noreferrer\" target=\"_blank\">https://www.link.com/</a></p>"; // NOSONAR
const notString = 1;
const nullValue = null;
const undefinedValue = undefined; // NOSONAR
const wrongOrderSingleSequence = "<p>Description</p><p><a href=\"https://www.link.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(59, 89, 152); background-color: rgb(255, 255, 255);\">https://www.link.com/</a></p>"; // NOSONAR
const wrongOrderMultipleSequences = "<p><a href=\"https://www.link.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"flex: 1; color: rgb(59, 89, 152); background-color: rgb(255, 255, 255);\">https://www.link.com/</a></p><p>Description</p><p><a href=\"https://www.link.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(59, 89, 152);\">https://www.link.com/</a></p>"; // NOSONAR

// alphabetizeStyleSequencesInString(string) - order styles alphabetically
test("alphabetizeStyleSequencesInString(string) - order styles alphabetically", () => {
  const testCase1 = String(correctOrderSingleSequence);
  const testCase2 = String(wrongOrderSingleSequence);
  const testCase3 = String(correctOrderMultipleSequences);
  const testCase4 = String(wrongOrderMultipleSequences);
  const testCase5 = String(noSequences);
  const testCase6 = emptyString;
  const testCase7 = notString;
  const testCase8 = nullValue;
  const testCase9 = undefinedValue;

  expect(alphabetizeStyleSequencesInString(testCase1)).toEqual(correctOrderSingleSequence);
  expect(alphabetizeStyleSequencesInString(testCase2)).toEqual(correctOrderSingleSequence);
  expect(alphabetizeStyleSequencesInString(testCase3)).toEqual(correctOrderMultipleSequences);
  expect(alphabetizeStyleSequencesInString(testCase4)).toEqual(correctOrderMultipleSequences);
  expect(alphabetizeStyleSequencesInString(testCase5)).toEqual(noSequences);
  expect(alphabetizeStyleSequencesInString(testCase6)).toEqual(emptyString);
  expect(alphabetizeStyleSequencesInString(testCase7)).toEqual(notString);
  expect(alphabetizeStyleSequencesInString(testCase8)).toEqual(nullValue);
  expect(alphabetizeStyleSequencesInString(testCase9)).toEqual(undefinedValue);
});

