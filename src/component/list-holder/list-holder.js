import './list-holder.css';
import Item from '../item'
import React from 'react';
import useState from 'react';

export default function ListHolder(props){
    const {useState} = React;
    const [items, setItems] = useState([props.children]);
   return <div className="styles-listholder-border">
       <div className="styles-listholder">
           
          
         <Item children={props.children}/>
           
       </div>
       </div>
    
}