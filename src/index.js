//function simulateAsyncAPI(text, time) {
//setTimeout(() => console.log(text), time);
//}

//simulateAsyncAPI("A", 1000);
//simulateAsyncAPI("B", 500);
//simulateAsyncAPI("C", 100);

function simulateAsyncAPI(text, time, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(text);
      resolve();
    }, time);
  });
}

simulateAsyncAPI("A", 1000)
  .then(() => {
    return simulateAsyncAPI("B", 500);
  })
  .then(() => {
    return simulateAsyncAPI("C", 100);
  });
