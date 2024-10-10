const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip =
  bill <= 300 && bill >= 50
    ? `The bill was ${bill}, the tip was ${0.15 * bill}`
    : `The bill was ${bill} the tip was ${0.2 * bill}`;
console.log(tip);
