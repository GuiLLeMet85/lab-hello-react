// src/App.js
import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Bottom from './components/Bottom';


function App() {
  return (
    <>
    <body>
    <div className="App">
         <div className="topsection">
              <Menu />
              <Header/> 
           </div>
          <div className="bottomsection">         
            <Bottom/>  
          </div>
         
    </div>
    </body>
    </>
  );
}
export default App;