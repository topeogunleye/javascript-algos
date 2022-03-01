function birthdayCakeCandles(candles) {
  // Write your code here
  const t0 = performance.now();

  const maxValue = candles.reduce((a, b) => { return Math.max(a, b) }); 
  let maxValueCount = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === maxValue) {
      maxValueCount += 1;
    }
  }

  const t1 = performance.now(); 
  console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

  return maxValueCount;


}
// 1 Million random numbers in an array
// new Array(1000000).fill(0).map((_, i) => i);

console.log(birthdayCakeCandles(new Array(10000000).fill(0).map(() => Math.floor(Math.random() * 10000000))));
