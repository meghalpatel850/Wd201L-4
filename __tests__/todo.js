const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
const today = new Date();
const yesterday = new Date(new Date().setDate(today.getDate() - 2))
  .toISOString()
  .split("T")[0];
const tomarrow = new Date(new Date().setDate(today.getDate() + 2))
  .toISOString()
  .split("T")[0];
describe("Todo List Test ", () => {
  beforeAll(() => {
    add({
      title: "Test - overDue",
      completed: false,
      dueDate: yesterday,
    });
  });

  test("Should add a new todo", () => {
    expect(all.length).toEqual(1);

    add({
      title: "Test - dueLater",
      completed: true,
      dueDate: tomarrow,
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
    add({
      title: "Test - Due Today",
      completed: "false",
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(dueToday().length).toEqual(1);
  });

  test("Test Todo Due Later", () => {
    expect(dueLater().length).toEqual(1);
  });
});
