import React from 'react';
import Header from "./component/header"
import ListHolder from "./component/list-holder"
import InfoColumn from "./component/info-column"
import './App.css';
import { Checkbox, Container, List,ListItem,ListItemIcon,ListItemText,Fab } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import ListItems from './component/tasks';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

function App() {
  //  get time and date
  let time = new Date();
  let curTime = `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`;
  // react hook to make the item list storage and access
  const {useState} = React;
  const [test, setTest] = useState([""]);
  let [curTest, setCurTest] = useState("");
  const [btime, setTime] = useState([]);
  
  function addItem(e){
    e.preventDefault();
    setTest(test =>[...test, curTest])
    setTime(btime =>[...btime, curTime])
    
    console.log(e.target.value," line 29", test)
  }
 
function handleChange(e){
      setCurTest(curTest=e.target.value)
      console.log(curTest," line 33")
}
function addLine(){
  setTest(test =>[...test, ""])
}

const deleteItem = (e) => {
  const name = e.target.getAttribute("name")
   setTest(test.filter(item => item.name !== name));
   console.log(e.target.parentElement, "deleted");
 };
function resetAll(){
  setTest([]);
  setTime([]);
  
  console.log("worked"," line 48")
}
 const closeBtn = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};
  return (
    <div className="App">
    <Container>
      {/* add icon */}
    <button data-testid="new-item-button" onClick={addLine} id="addbtn">
    <Fab color="primary" aria-label="add">
        <AddIcon  />
      </Fab>
      </button>
      {/* edit icon */}
      <Fab color="secondary" aria-label="Edit">
        <EditIcon />
      </Fab> 
      
      <Fab color="secondary" aria-label="Edit">
        <RotateLeftIcon onClick={resetAll}/>
      </Fab>
      
      {/* Item List */}
       <List>
        
        {test.map((item,index)=>(
          <ListItem>   
            <ListItemIcon><Checkbox/></ListItemIcon>   
      <form onSubmit={addItem}>
      <TextField onChange={handleChange} placeholder="Enter Item" variant="outlined" data-testid="new-item-input" />
      </form>
          <ListItemText primary={btime[index]}/>
          <CloseIcon onClick={deleteItem} />
          </ListItem>
          ))}
        
         </List>
        </Container>
      {/* add values as children
    <InfoColumn children="groceries"/>
    <div className="middle-container">
    <Header/>
    <ListHolder children="Test"/>
    </div>
    <InfoColumn children="Test2"/> */}
    </div>
  );
}

export default App;
