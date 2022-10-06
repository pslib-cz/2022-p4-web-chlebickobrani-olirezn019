import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from "./components/Navigation";
import TableGroup from './components/TableGroup';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { arraySum } from "./helpers/ArrayManipulation";

function App() {
  let t = [];
  for (let i = 0; i < 4; i++) {
    t.push([]);
    for (let j = 0; j < 4; j++) {
      t[i].push(0);
    }
  }

  let [tables, setTables] = useState(t);
  let [count, setCount] = useState(0);

  function refreshCount() {
    let sum = 0;
    for (let i = 0; i < 4; i++) {
      sum += arraySum(tables[i]);
    }
    setCount(sum);
  }

  useEffect(() => {
    refreshCount();
  }, [tables])

  return (
    <div className="App">
      <Navigation total={count} />
      <Container>
        <h1 className='fw-bold'>U poníka</h1>
        <p>Celkem: {count}</p>
        <TableGroup tables={tables} setTables={setTables} />
      </Container>
    </div>
  );
}

export default App;
