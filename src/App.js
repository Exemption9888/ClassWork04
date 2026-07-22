import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import Module3List from './List';

const produce = [
    { name: "Apple", type: "Fruit" },
    { name: "Banana", type: "Fruit" },
    { name: "Carrot", type: "Vegetable" },
    { name: "Broccoli", type: "Vegetable" },
    { name: "Orange", type: "Fruit" },
    { name: "Spinach", type: "Vegetable" }
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Class Work 04</h1>
      </header>
      <HelloWorld/>
      <Counter/>
      <Module3List/>
    </div>
  );
}

export default App;