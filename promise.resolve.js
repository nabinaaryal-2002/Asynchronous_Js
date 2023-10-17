let stocks = {
  Fruits: ["banana", "strawberry", "apple", "grapes"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;
// let is_shop_open = false;

const order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject("our shop is closed");
    }
  });
};

Promise.resolve()
  .then(() => order(2000, () => `${stocks.Fruits[0]} was selected`))
  .then((message) => {
    console.log(message);
    return order(1000, () => "production has started");
  })
  .then(() => order(2000, () => "the fruit was chopped"))
  .then(() => order(1000, () => `${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
  .then(() => order(1000, () => "start the machine"))
  .then(() => order(2000, () => `ice cream placed on ${stocks.holder[0]}`))
  .then(() => order(3000, () => `${stocks.toppings[0]} was selected`))
  .then(() => order(1000, () => "Icecream was served"))
  .catch(() => {
    console.log("Customer left");
  })
  .finally(() => {
    console.log("Day ended, shop is closed");
  });
