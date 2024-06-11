import { useEffect, useState } from 'react';
import './App.css';
import { Context } from './context/Context';
import { AppRouter } from './routing/AppRouter';

function App() {

  useEffect
  const [user, setUser] = useState({
    username: '@Oscaratt',
    name: 'Oscar Atencia',
    phone: '3002596420'
  });

  return (
    <div className="App">
        <Context.Provider value={{user, setUser}}>
          <AppRouter />
        </Context.Provider>
    </div>
  );
}

export default App;