const { addSubmission, deleteSubmissionByIndex } = require("../src/practice2");

describe("addSubmission function", () => {
  test("add a failing submission", () => {
    let assessments = [];
    addSubmission(assessments, "Mitch", 1, "date");
    expect(assessments).toEqual([
      {
        name: "Mitch",
        score: 1,
        passed: false,
        date: "date",
      },
    ]);
  });
  test("add a passing submission", () => {
    let assessments = [];
    addSubmission(assessments, "James", 100, "date");
    expect(assessments).toEqual([
      {
        name: "James",
        score: 100,
        passed: true,
        date: "date",
      },
    ]);
  });
});

describe("deleteSubmissionByIndex function", () => {
  test("properly deletes a submission", () => {
    let assessments = [
      {
        name: "James",
        score: 100,
        passed: true,
        date: "date",
      },
    ];
    deleteSubmissionByIndex(assessments, 0);
    expect(assessments).toEqual([]);
  });
  test("properly deletes a submission", () => {
    let assessments = [
      {
        name: "James",
        score: 100,
        passed: true,
        date: "date",
      },
      {
        name: "Max",
        score: 100,
        passed: true,
        date: "date",
      },
    ];
    deleteSubmissionByIndex(assessments, 0);
    expect(assessments).toEqual([
      {
        name: "James",
        score: 100,
        passed: true,
        date: "date",
      },
    ]);
  });
});
