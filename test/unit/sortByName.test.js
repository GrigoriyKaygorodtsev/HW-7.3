const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });
  it("No sorting", () => {
    const input = [
      "Старик и море",
      "Капитан сорви голова",
      "Сказка странствий",
    ];
    const expected = [
      "Капитан сорви голова",
      "Сказка странствий",
      "Старик и море",
      ];
      const output = sorting.sortByName(input);
    expect(output).toEqual(expected);

  });
});
 