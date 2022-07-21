// src/App.js
import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Bottom from './components/Bottom';


function App() {
  return (
    <>
    <div className="App">
         <div className="topsection">
              <Menu />
              <Header/> 
          </div>
          <div className="bottomsection">         
            <Bottom/>  
          </div>
    </div>
    </>
  );
}
export default App;