import React, {forceUpdate,useCallback,useContext,useEffect } from 'react';
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
  let [curName, setCurName] = useState([]);
  const [btime, setTime] = useState(curTime);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
 
  console.log(newData);

const addItem = item => e =>{
  e.preventDefault()
  
  newData[item].name=curName;
  newData[item].time=curTime;
  
    // console.loName," line 29")
    // console.log(index," line 29")
    // e.preventDefault()
    // console.log("before change add item", test)
    // setTest(test=>[...tesName])
    // test[indexName
    // console.log(test[index]," single item")
    // console.log("after change add item", test)
    // setTime(btime =>[...btime, curTime])
    // btime[index]=curTime
 
  }


function handleChange(e){
 setCurName(curName = e.target.value)
 
}

function addLine(){
  // let emptyItem = {"":{"id":"","name":"","time":""}};
  setNewData(newData=>[...newData, {"name":"","time":""} ]);
}

function deleteItem (index) {
  console.log(index, 'line 70');
  const delItemList = Object.keys(newData).filter((item) => item != index);
  // console.log(newTest, "new test test line 57");
  // console.log(test, " before new test line 57");
   setNewData(delItemList);
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
console.log(Object.keys(newData),'line 82');
  return (
    <div className="App">

      <ThemeProvider theme={theme}>
      <Fab color="primary" aria-label="Edit">
        <EditIcon />
      </Fab> 
      <Fab color="primary"  onClick={resetAll}>
        <RotateLeftIcon />
      </Fab>
      <Fab onClick={addLine} data-testid="new-item-button" color="primary" aria-label="add">
        <AddIcon  />
      </Fab> 
    <Container id="container">
      
      
      {/* Item List */}
      <Box>
       <List>
        
        {Object.keys(newData).map((item)=>(
          <ListItem>   
            <ListItemIcon><Checkbox/></ListItemIcon>   
      <form onSubmit={addItem(item)}>
      <TextField onChange={handleChange} placeholder={item} variant="outlined" data-testid="new-item-input"/>
      </form>
      <ListItemText  primary={newData[item].name}/>
          <ListItemText  primary={newData[item].time}/>
          {/* <Fab color="secondary"  value={index}>
          <CloseIcon/>
          </Fab> */}
          <Fab onClick={()=>deleteItem(item)} ><CloseIcon /></Fab>
          </ListItem>
          ))}
         </List>
         </Box>
         <Box id="box">
         </Box>
         
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
