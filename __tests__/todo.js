let todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
const today = new Date();

describe("Todo List Test ", () => {
  beforeAll(() => {
    add({
      title: "Test-1",
      completed: false,
      dueDate: new Date(today.getDate() - 2).toLocaleDateString("en-CA"),
    });
  });
  test("Should add a new todo", () => {
    expect(all.length).toEqual(1);

    add({
      title: "test-1",
      completed: true,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(2);
  });

  test("Test Todo Mark As Completed", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("Test Todo Overdue", () => {
    expect(overdue().length).toEqual(1);
  });

  test("Test Todo Due Date", () => {
    expect(dueToday().length).toEqual(1);
  });

  test("Test Todo Due Later", () => {
    expect(dueLater().length).toEqual(0);
  });
});
