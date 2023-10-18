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

Promise.all([
  order(2000, () => console.log(`${stocks.Fruits[0]} was selected`)),
  order(0, () => console.log("production has started")),
  order(2000, () => console.log("the fruit was chopped")),
  order(1000, () =>
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
  ),
])
  .then(() => {
    console.log("Starting the machine");
    return order(1000, () => "start the machine");
  })
  .then(() => {
    console.log(`Ice cream placed on ${stocks.holder[0]}`);
    return order(2000, () => "Ice cream placed on the holder");
  })
  .then(() => {
    console.log(`${stocks.toppings[0]} was selected`);
    return order(3000, () => "Toppings were selected");
  })
  .then(() => {
    console.log("Ice cream was served");
    return order(1000, () => "Ice cream was served");
  })
  .catch(() => {
    console.log("Customer left");
  })
  .finally(() => {
    console.log("Day ended, shop is closed");
  });
