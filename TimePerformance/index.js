const startTime = performance.now();
// const startTime = Date.now()

const num1 = 22;
const num2 = 33;

// const sum = num1 + num2;
console.log(num1 + num2);

const endTime = performance.now();
// const endTime = Date.now()

const renderTime = endTime - startTime;

// Log the render time to the console
console.log(`Render time: ${renderTime}ms`);

