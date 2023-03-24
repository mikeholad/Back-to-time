class Person {
    constructor(age, money) {
      this.age = age;
      this.money = money;
    }
    calculateExpensesUntil(year) {
      let totalExpenses = 0;
      for (let y = 1800; y <= year; y++) {
        if (y % 2 === 0) {
          totalExpenses += 12000;
        } else {
          totalExpenses += 12000 + 50 * (this.age + y - 1801);
        }
      }
      return totalExpenses;
    }
  }

  function calculate() {
    let money = parseFloat(document.getElementById("money").value);
    let year = parseInt(document.getElementById("year").value);

    let ivan = new Person(18, money);

    let totalExpenses = ivan.calculateExpensesUntil(year);

    let result = document.getElementById("result");
    if (ivan.money >= totalExpenses) {
      let remainingMoney = (ivan.money - totalExpenses).toFixed(2);
      result.textContent = `Yes! He will live a carefree life and will have ${remainingMoney} dollars left.`;
    } else {
      let neededMoney = (totalExpenses - ivan.money).toFixed(2);
      result.textContent = `He will need ${neededMoney} dollars to survive.`;
    }
    // check if money is enough
if (ivan.money >= totalExpenses) {
    let remainingMoney = (ivan.money - totalExpenses).toFixed(2);
    console.log(`Yes! He will live a carefree life and will have ${remainingMoney} dollars left.`);
  } else {
    let neededMoney = (totalExpenses - ivan.money).toFixed(2);
    console.log(`He will need ${neededMoney} dollars to survive.`);
  }
  
  }