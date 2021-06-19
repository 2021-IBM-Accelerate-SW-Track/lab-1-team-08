import './item.css';
export default function Item(props){
    return <div className="styles-item-border">
        
        <div className="styles-item">
        {/* <input className="itemCheckBox" type="checkbox" id="itemCheckBox"/> */}
            {props.children}
            
        </div>
        
        </div>
        
}
