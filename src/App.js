  import React from 'react';
  import imagessrc from './imagessrc.jpeg';
  import './App.css';

  function App() {
    
    return ( 
      <div className="App">

      <div style={{border:'solid 1px black',maxWidth:100}}>
  
        <h1 className="title red">Your name here</h1>  
  
            <br/>  
  
              <img src={imagessrc} /> <br/> 
  
                <img src="/imgpub.jpeg" />  
  
      </div>  
  
      <video style={{width="320", height="240", controls}}>  
  
          <source src="myVideo.mp4" type="video/mp4"/> 
  
      </video> 
      </div>
      )
      
  
  }

  export default App;
