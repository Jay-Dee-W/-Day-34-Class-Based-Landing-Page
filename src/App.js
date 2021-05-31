import { BrowserRouter , Switch, Route,} from "react-router-dom";
import HomePage from './HomePage'

import './App.css';
import Timer from './Timer'
import { useState } from "react";

function App() {

  let [formData, setFormData] = useState({})

  let addFormdata = (data) => {
    console.log('data:', data)
    setFormData(data)
   
  }

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <HomePage  addFormdata={addFormdata}/>
      </Route>
      <Route path="/timer">
        <Timer  formData={formData} />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
