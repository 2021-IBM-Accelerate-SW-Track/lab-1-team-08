import React, { useEffect } from 'react';
import Header from "./component/header"
import ListHolder from "./component/list-holder"
import InfoColumn from "./component/info-column"
import './App.css';
import { Checkbox, Container, List,ListItem,ListItemIcon,ListItemText,Fab,IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import ListItems from './component/tasks';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import Button from './component/buttons'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import { palette } from '@material-ui/system';
import DarkModeToggle from "react-dark-mode-toggle";



function App() {
  //  get time and date
  let time = new Date();
  let curTime = `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`;
  const initState = [];
  // react hook to make the item list storage and access
  const {useState} = React;
  const [test, setTest] = useState(initState);
  let [curTest, setCurTest] = useState();
  const [btime, setTime] = useState(initState);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  
  
const addItem = index => e =>{
    console.log(curTest," line 29")
    console.log(index," line 29")
    e.preventDefault()
    console.log("before change add item", test)
    setTest(test=>[...test,curTest])
    test[index]=curTest
    console.log(test[index]," single item")
    console.log("after change add item", test)
    setTime(btime =>[...btime, curTime])
    btime[index]=curTime
  
  }
 
function handleChange(e){
  console.log(curTest," line 33")
 setCurTest(curTest = e.target.value)

      
}
function addLine(){
  setTest(test =>[...test, ""])
  
}

function deleteItem (index) {
  console.log(test.indexOf(test[index]));
  const newTest = test.filter((items, number) => number != index);
  // console.log(newTest, "new test test line 57");
  // console.log(test, " before new test line 57");
  setTest(newTest);
  // console.log(test, "after new test line 57");
 
 };

function resetAll(){
  setTest(initState);
  setTime(initState);
  
  console.log("worked"," line 48")
}
let theme = createMuiTheme({
   palette:{
     type: 'light'
   }
});

  console.log(theme.palette.type)
  theme.palette.type.replace('light', 'dark');


  return (
    <div className="App">

      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={70}/>
      <ThemeProvider theme={theme}>
    <Container>
      <Fab color="primary" aria-label="Edit">
        <EditIcon />
      </Fab> 
      
      <Fab color="primary"  onClick={resetAll}>
        <RotateLeftIcon />
      </Fab>
      
      {/* Item List */}
       <List>
        
        {test.map((item,index)=>(
          <ListItem>   
            <ListItemIcon><Checkbox/></ListItemIcon>   
      <form onSubmit={addItem(index)}>
      <TextField onChange={handleChange} placeholder="Enter Item" variant="outlined" />
      </form>
      <ListItemText primary={item}/>
          <ListItemText primary={btime[index]}/>
          {/* <Fab color="secondary"  value={index}>
          <CloseIcon/>
          </Fab> */}
          <Fab onClick={()=>deleteItem(index)} ><CloseIcon /></Fab>
          </ListItem>
          ))}
        
         </List>
         <Fab onClick={addLine} data-testid="new-item-button" color="primary" aria-label="add">
        <AddIcon  />
      </Fab>
        </Container>
        </ThemeProvider>
       
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
