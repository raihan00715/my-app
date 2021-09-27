
//imported all necessary files

import './App.css';
import Header from './components/Header/Header';
import Students from './components/Students/Students';

function App() {
  return (
    <div className= "App">
      {/* added header and Students compponent */}
      <Header></Header>
      <Students></Students>
    </div>
  );
}

export default App;
