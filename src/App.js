import './App.css';
// ADDED IMPORT
// outlet is a component that renders the next match in a set of matches, in this case Main
import { Outlet } from 'react-router'

function App() {
  return (
    <div className="App">
     <Outlet />
    </div>
  );
}

export default App;
