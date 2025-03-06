//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  // Show loading row initially
  output.innerHTML = `<tr><td colspan="2">Loading...</td></tr>`;

  // Function to create a promise that resolves after a random delay
  function createPromise(index) {
    return new Promise((resolve) => {
      const delay = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
      setTimeout(() => resolve({ index, time: delay.toFixed(3) }), delay * 1000);
    });
  }

  // Create and wait for all promises
  const promises = [createPromise(1), createPromise(2), createPromise(3)];
  const startTime = performance.now();

  Promise.all(promises).then((results) => {
    const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);

    // Remove loading row
    output.innerHTML = "";

    // Populate the table with resolved promise data
    results.forEach(({ index, time }) => {
      const row = `<tr><td>Promise ${index}</td><td>${time}</td></tr>`;
      output.innerHTML += row;
    });

    // Add total time row
    output.innerHTML += `<tr><td>Total</td><td>${totalTime}</td></tr>`;
  });
});