import React, { useState } from 'react';
import './App.css';
import { Table } from './components/Table';
import { debounce } from 'lodash';

function App() {
  const [filter, setFilter] = useState("");
  const debounceFilter = debounce((value) => setFilter(value), 500);

  return (
    <div className="App">
      <div className="input-group flex-nowrap">
        <input 
          type="text" className="form-control" placeholder="Pesquisar" 
          aria-label="pesquisar" aria-describedby="addon-wrapping" 
          onChange={(e) => debounceFilter(e.target.value)}
        />
      </div>
      <br />
      <Table filter={filter} />
    </div>
  );
}

export default App;
