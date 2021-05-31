// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const a = Array(100000)
  .fill(null)
  .map(() => Math.round(Math.random() * 100000));

const bubbleSort = a => {
  for (let n = 0; n < a.length; n++) {
    for (let i = 0; i < a.length - 1 - n; i++) {
      if (a[i] > a[i + 1]) {
        const buff = a[i];
        a[i] = a[i + 1];
        a[i + 1] = buff;
      }
    }
  }
  return a;
};
const sorted = bubbleSort(a);

const t0 = performance.now();
bubbleSort(a);
const t1 = performance.now();
console.log('The time of bubble sort is ' + (t1 - t0) + ' milliseconds');

const quickSort = a => {
  if (a.length < 2) return a;

  // if we need random pivot
  const min = 1;
  const max = a.length - 1;
  const random = Math.floor(min + Math.random() * (max + 1 - min));
  const pivot = a[random];
  const less = [];
  const more = [];

  for (let j = 1; j < a.length; j++) {
    if (pivot > a[j]) {
      less.push(a[j]);
    } else {
      more.push(a[j]);
    }
  }
  return quickSort(less).concat(pivot, quickSort(more));
};
const quickSorted = quickSort(a);

const t3 = performance.now();
quickSort(a);
const t4 = performance.now();
console.log('The time of quick sort is ' + (t4 - t3) + ' milliseconds');
