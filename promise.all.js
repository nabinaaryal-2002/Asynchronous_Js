let stocks = {
  Fruits: ["banana", "strawberry", "apple", "grapes"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;
// let is_shop_open = false;

function order(time, work) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject("our shop is closed");
    }
  });
}

const steps = [
  () => order(2000, () => `${stocks.Fruits[0]} was selected`),
  () => order(0, () => "production has started"),
  () => order(2000, () => "the fruit was chopped"),
  () => order(1000, () => `${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`),
  () => order(1000, () => "start the machine"),
  () => order(2000, () => `ice cream placed on ${stocks.holder[0]}`),
  () => order(3000, () => `${stocks.toppings[0]} was selected`),
  () => order(1000, () => "Ice cream was served"),
];

Promise.all(steps.map(step => step()))
  .then(() => console.log("All steps completed successfully"))
  .catch(error => console.log(error))
  .finally(() => console.log("Day ended, shop is closed"));
