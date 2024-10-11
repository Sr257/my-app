
import './App.css';
import ButtonComponent from './Button';

function App() {
  const yellowButton=()=>{
    alert("yellow button clicked");
  }
  const redButton=()=>{
    alert("red button clicked");
  }
  const greenButton=()=>{
    alert("green button clicked");
  }
  let isUserAuthenticated=true;
  return (
    <div>
      <h1>First React code</h1>
    <p>OM! SAIRAM</p>
    {isUserAuthenticated ?<h1>login</h1>:<h1>please signup to login</h1>}
    <ButtonComponent 
    buttonText="Try this one"
    backgroundColor="yellow"
    click={yellowButton}
    />
     <ButtonComponent 
    buttonText="Try this one"
    backgroundColor="green"
    click={greenButton}
    />
     <ButtonComponent 
    buttonText="Try this one"
    backgroundColor="red"
    click={redButton}
    />
    </div>
    
  );
}

export default App;
