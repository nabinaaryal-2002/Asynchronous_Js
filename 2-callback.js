// a function passing as an argument to another function is called callback 


// normal function 

// function one(){
//   console.log("step 1")
// }
// function two(){
//   console.log("step 2")
// }
// one();
// two();


// callback 

// function one(call_two){
//   call_two()

//   console.log("step 1 complete.so call step2");
  
// }
// function two(){
//   console.log("step 2")
// }
// one(two);



// Ice cream business using callback 


let stocks = {
  Fruits: ["banana","strawberry","apple","grapes"],
  liquid : ["water","ice"],
  holder : ["cone","cup","stick"],
  toppings : ["chocolate","peanuts"],
}; 


// console.log(stocks.Fruits[1]);




let order = (Fruit_name, call_production)=> {

  setTimeout(()=> {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`)

    call_production();
  },2000);



  // console.log("order placed and now call production")
  
};
let production=()=>{
  // console.log("order receives. start production")

  setTimeout(()=>{
    console.log("production has started");

    setTimeout(()=> {
      console.log("The food has been chopped");

      setTimeout(()=> {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        setTimeout(()=>{
          console.log("The machine has been started");

          setTimeout(()=> {
            console.log(`ice cream was placed on ${stocks.holder[0]}`);

            setTimeout(()=> {
              console.log(`${stocks.toppings[0]} was added as toppings`);

              setTimeout(()=>{
                console.log("serve ice cream")
              },2000)
            },3000)

          },2000);
        },1000);
      },1000);
    },2000);
  },0000); 
};

order(0,production);
