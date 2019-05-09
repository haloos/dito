import React from 'react'; 
import Cardlist from './Cardlist'; 
import { robots } from './robots';  

const App = () => {
  return ( 
    <div> 
      <h1>RoboFriends</h1>
      <Cardlist robots={robots}/> 
    </div>
  );
  
}  

export default App; 