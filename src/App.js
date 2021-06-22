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
  var months = ["Janaury", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let time = new Date();
  let curTime = `${weekdays[time.getDay()]} ${months[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()} ${time.toLocaleTimeString()}`;
  const initState = [];
  // react hook to make the item list storage and access
  const {useState} = React;
<<<<<<< HEAD
  const [newData, setNewData] = useState(data);
  const [cNewData, setcNewData] = useState(data);
  let [curName, setCurName] = useState([]);
  const [btime, setTime] = useState(curTime);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const dup = {
    noDuplicate: <span>No duplicates</span>,
    hasDuplicate: <span>Please remove duplicate before continuing</span>
=======
  var [test, setTest] = useState([""]);
  let [curTest, setCurTest] = useState("");
  const [btime, setTime] = useState([curTime]);
  const dup = {
    noDuplicate: <span>No duplicates</span>,
    hasDuplicate: <span>Please remove duplicate before continuing</span>
  }
  const [duplicate, setDuplicate] = useState("noDuplicate");
  
  function addItem(e){
    e.preventDefault();
    console.log(curTest)
    setTest(test => [...test, curTest])
    // setTest(test => [...test, e.target.value])
    setTime(btime => [...btime, curTime])
    
    console.log(e.target.value," line 29", test)

    if((new Set(test)).size !== test.length) {
      setDuplicate("hasDuplicate");
    }
>>>>>>> dd9c63801f5dccc3d480a25de77fa04444f3a618
  }
  const [duplicate, setDuplicate] = useState("noDuplicate");
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
<<<<<<< HEAD
  setCurName(curName = e.target.value)

=======
  console.log("before", curTest, test, e.target.value)
    setCurTest(curTest=e.target.value)
    if(test.includes(e.target.value)) {
      setDuplicate("hasDuplicate");
    }
    else {
      setDuplicate("noDuplicate")
    }
    // setTest(test => ([...test.slice(0, test.length - 1), e.target.value]));
    // setTime([...btime.slice(btime.length - 1), curTime])
    console.log(curTest, " line 33", test)
    // console.log(e.target.value)
    // console.log(test[test.length - 1])
    // console.log(test)
>>>>>>> dd9c63801f5dccc3d480a25de77fa04444f3a618
}

function addLine(){
<<<<<<< HEAD
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
=======
  setTest(test => [...test, ""])
  setTime(btime => [...btime, curTime])
  console.log("addLine", test)
}

const deleteItem = (e) => {
   const name = e.target.getAttribute("name")
   setTest(test.filter(item => item.name !== name));
   console.log(e.target.parentElement, "deleted");
   console.log(test);
>>>>>>> dd9c63801f5dccc3d480a25de77fa04444f3a618
 };

function resetAll(){
  // setTest(initState);
  setTime(initState);
  console.log("worked"," line 48")
}
function completedItem(item){
  setcNewData(setcNewData=>[...setcNewData,newData[item]]);
  // cNewData[item].time=newData[item].time;
  console.log(newData[item].name, 'line 81');
  // const updatedItemList = Object.keys(newData).filter((ucitem) => ucitem != item);
  // setNewData(updatedItemList);
}

let theme = createMuiTheme({
   palette:{
     type: 'light'
   }
});
console.log(Object.keys(newData),'line 82');
  return (
    <div className="App">
<<<<<<< HEAD

      <ThemeProvider theme={theme}>
      <Fab color="primary" aria-label="Edit">
=======
    <Container>
      {/* add icon */}
      <div>
        {dup[duplicate]}
      </div>
    <button data-testid="new-item-button" onClick={addLine} id="addbtn">
    <Fab color="primary" aria-label="add">
        <AddIcon/>
      </Fab>
      </button>
      {/* edit icon */}
      <Fab color="secondary" aria-label="Edit">
>>>>>>> dd9c63801f5dccc3d480a25de77fa04444f3a618
        <EditIcon />
      </Fab> 
      <Fab color="primary"  onClick={resetAll}>
        <RotateLeftIcon />
      </Fab>
      <Fab onClick={addLine} data-testid="new-item-button" color="primary" aria-label="add">
        <AddIcon  />
      </Fab> 
    <Container >
    <div>
        {dup[duplicate]}
      </div>
      
      {/* Item List */}
      <Box>
       <List>
        
        {Object.keys(newData).map((item)=>(
          <ListItem>   
<<<<<<< HEAD
            <ListItemIcon><Checkbox onChange={()=>completedItem(item)}/></ListItemIcon>   
      <form onSubmit={addItem(item)}>
      <TextField onChange={handleChange} placeholder={item} variant="outlined" data-testid="new-item-input"/>
=======
            <ListItemIcon><Checkbox/></ListItemIcon>   
      <form onSubmit={addItem}>
      <TextField onChange={handleChange} placeholder="Enter Item" variant="outlined" data-testid="new-item-input" />
>>>>>>> dd9c63801f5dccc3d480a25de77fa04444f3a618
      </form>
      <ListItemText primary={newData[item].name}/>
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
           <List>
         {Object.keys(cNewData).map((item)=>(
          <ListItem>   
      
          <ListItemText  primary={cNewData[item].time}/>
          {/* <Fab color="secondary"  value={index}>
          <CloseIcon/>
          </Fab> */}
          
          </ListItem>
          ))}
         </List>
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
