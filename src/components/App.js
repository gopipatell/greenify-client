import React from 'react';
// import PlantContainer from './PlantContainer';
import { Link } from 'react-router-dom';
import feature from '../images/plant_feature.png';

function App() {
  return (
    <div>
        <img src={ feature } className="featureImage" />
    </div>
  );
}

export default App;
