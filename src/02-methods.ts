class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else if (type === 'years') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(1993, 7, 9);
myDate.add(3, 'days');
console.log({ printFormat: myDate.printFormat() });
myDate.add(1, 'months');
console.log({ printFormat: myDate.printFormat() });
console.log({ day: myDate.day });
console.log({ month: myDate.month });
console.log({ year: myDate.year });
