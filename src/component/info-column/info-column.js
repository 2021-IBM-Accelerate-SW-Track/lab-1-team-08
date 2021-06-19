import './info-column.css';
import Item from '../item';
export default function InfoColumn(props){
    return <div className="styles-infocolumn-border">
        <div className="styles-infocolumn">
            <Item children={props.children}/>
        </div>
        </div>
}