//function simulateAsyncAPI(text, time) {
//setTimeout(() => console.log(text), time);
//}

//simulateAsyncAPI("A", 1000);
//simulateAsyncAPI("B", 500);
//simulateAsyncAPI("C", 100);

function simulateAsyncAPI(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(text);
      if (text === "B") reject(new Error("Error!!"));
      resolve();
    }, time);
  });
}

//async function run() {
//await simulateAsyncAPI("A", 1000);
//await simulateAsyncAPI("B", 500);
//await simulateAsyncAPI("C", 100);
//}

//run();

//simulateAsyncAPI("A", 1000)
//.then(() => {
//return simulateAsyncAPI("B", 500);
//})
//.then(() => {
//return simulateAsyncAPI("C", 100);
//});
