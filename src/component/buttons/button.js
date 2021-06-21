import './button.css';
export default function Button(props){
    console.log(props.children)
    return <div><div id="button-icon" className="button-icon"></div>
    <label htmlFor="button-icon" id="button-press"></label></div>
}