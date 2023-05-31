import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="/about/index.html">Go to page about</a>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

var fruits = [];
fruits.push('банан', 'яблоко', 'персик');

fruits[5] = 'манго';
console.log(fruits[5]);             // 'манго'
console.log(Object.keys(fruits));   // ['0', '1', '2', '5']
console.log(Array.prototype);

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
