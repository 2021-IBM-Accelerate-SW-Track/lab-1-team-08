import React, { useContext,useEffect } from 'react';
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
import data from './component/item-storage/data.json'
import Box from '@material-ui/core/Box';



function App() {
  //  get time and date
  let time = new Date();
  let curTime = `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`;
  const initState = [];
  // react hook to make the item list storage and access
  const {useState} = React;
  const [newData, setNewData] = useState(data);
  let [curTest, setCurTest] = useState({});
  const [btime, setTime] = useState(initState);
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  
  
const addItem = index => e =>{
    setNewData(newData.time=curTime)
    // console.log(curTest," line 29")
    // console.log(index," line 29")
    // e.preventDefault()
    // console.log("before change add item", test)
    // setTest(test=>[...test,curTest])
    // test[index]=curTest
    // console.log(test[index]," single item")
    // console.log("after change add item", test)
    // setTime(btime =>[...btime, curTime])
    // btime[index]=curTime
  
  }
 
function handleChange(e){
  console.log(curTest," line 33")
 setCurTest(curTest = e.target.value)

      
}
function addLine(){
  // let emptyItem = {"":{"id":"","name":"","time":""}};
  setNewData(newData=>({...newData, "":{"id":"","name":"","time":""}}));
  console.log(newData)
}

function deleteItem (index) {
  console.log(index);
  // const newTest = test.filter((items, number) => number != index);
  // console.log(newTest, "new test test line 57");
  // console.log(test, " before new test line 57");
  // setTest(newTest);
  // console.log(test, "after new test line 57");
 
 };

function resetAll(){
  // setTest(initState);
  setTime(initState);
  
  console.log("worked"," line 48")
}
let theme = createMuiTheme({
   palette:{
     type: 'light'
   }
});

  console.log(theme.palette.type)
  


  return (
    <div className="App">

      <ThemeProvider theme={theme}>
        
    <Container id="container">
      
      <Fab color="primary" aria-label="Edit">
        <EditIcon />
      </Fab> 
      
      <Fab color="primary"  onClick={resetAll}>
        <RotateLeftIcon />
      </Fab>
      
      {/* Item List */}
      <Box>
       <List>
        
        {Object.keys(newData).map((item,index)=>(
          <ListItem>   
            <ListItemIcon><Checkbox/></ListItemIcon>   
      <form onSubmit={addItem(index)}>
      <TextField  onChange={handleChange} placeholder="Enter Item" variant="outlined" data-testid="new-item-input"/>
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
         </Box>
         <Box id="box">
      
         </Box>
         
         <IconButton onClick={addLine} data-testid="new-item-button" color="primary" aria-label="add">
        <AddIcon  />
      </IconButton>
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
