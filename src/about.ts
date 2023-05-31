import './style.scss'
//import typescriptLogo from './typescript.svg'
//import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="test">
    <a href="/" class="test-link">Go to home page</a>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
