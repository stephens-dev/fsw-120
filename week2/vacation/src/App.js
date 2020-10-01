import React from 'react';

import './App.css';
import Vacation from './Vacation';
import vacationData from './vacationData';

function App() {
  const vacCards = vacationData.map(vacation => {
    return <Vacation key={vacation.id} place={vacation.place} price={vacation.price} timeToGo={vacation.timeToGo}/>
  })
  return (
    <div className="App">
      {vacCards}
    </div>
  );
}

export default App;
