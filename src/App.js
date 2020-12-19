import React, { createContext, useState } from 'react'; 
import './App.css';
import VolantireNetwork from './Components/Volantire-Network/VolantireNetwork';
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState([]);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <VolantireNetwork></VolantireNetwork>
    </UserContext.Provider>
  );
}

export default App;
