import React from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay';
import { useState, useEffect } from 'react';
import Spinner from './Spinner'

function App() {

  const [latitide, setLatitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        setLatitude(position.coords.latitude)
      },
      (err) => {
        setErrorMessage('Due to some unavoidable circumstances, your location was not discovered')
      }
    )
  }, [])
  
  return (
    <div className="App">
      {errorMessage && !latitide && <h2>Error: {errorMessage}</h2>}
      {latitide && !errorMessage && <SeasonDisplay latitude = {latitide}/>}
      {!latitide && !errorMessage && <h2> <Spinner message = 'Please accept location request'/> </h2>}
        
    </div>
  );
}

export default App;
