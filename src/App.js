import RxFilterInput from './RxFilterInput';
import { products } from './products.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <RxFilterInput products={products} facility="SF" />
    </div>
  );
}

export default App;
