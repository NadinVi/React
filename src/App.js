import './App.css';
import { Button } from './components/button/Button';
import { Input } from './components/input/Input';

function App() {
  const handleButton1 = () => {alert("Welcome to my app!")};

  const handleClickMe = async (event) => {
    console.log("Button from parent click!");
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts');;
    const data = await responce.json();
    console.log(data);
  };

  const handleChangeInput = (event) =>{
    console.log(event.target.value);
  };
  
  const handleClickInput = (event) => {
    event.target.value = "";
  }

  return (
    <div className="App">
      <Button onClick={handleButton1}>Button 1</Button>
      <Button onClick={handleClickMe}>Click me</Button>
      <div>
        <Input defaultValue ="Enter your name" onChange={handleChangeInput} onClick={handleClickInput}/>
      </div>
    </div>
  );
}

export default App;
