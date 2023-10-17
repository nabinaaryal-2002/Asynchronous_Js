let stocks = {
  Fruits: ["banana","strawberry","apple","grapes"],
  liquid : ["water","ice"],
  holder : ["cone","cup","stick"],
  toppings : ["chocolate","peanuts"],
}; 

let is_shop_open = true;

// let order = ()=>{
//   return new Promise((resolve, reject)=>{
//     if(true){
//       resolve()
//     }else{
//       reject()
//     }
//   })
// }
// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()

async function order(){
  try{
    await abc;
  }
  catch(error){
    console.log("abc doesnt exit", error)
  }

  finally{
    console.log("run code anyways")
  }
}

order().then(()=>{
  console.log("abcdddd");
})