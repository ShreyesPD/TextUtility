import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import TextForm from './components/TextForm'
import AboutUs from './components/AboutUs';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('white')
  const [lableText, setLableText] = useState('Enable Dark Mode')

  const toggleMode = () => {
    if (mode === 'black') {
      setMode('white')
      setLableText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
    }
    else {
      setMode('black')
      setLableText('Disable Dark Mode')
      document.body.style.backgroundColor = 'black';
    }
  }

  return (
    <Router>
      {/* <> */}
      <NavBar title="MyApp" aboutApp="AboutMyApp" mode={mode} lableText={lableText} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/aboutUS">
            <AboutUs />
          </Route>
          <Route path="/">
            <div className="containFFFer">
              <TextForm heading="Enter the text to analyze below" mode={mode} />
            </div>
          </Route> */}
      </Routes>
      {/* </> */}
    </Router>
  );
}


export default App;
