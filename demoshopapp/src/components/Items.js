import './Items.css'


function Item(props) {
    const itemName = props.item;
    return (
        <div>
            <p className="nirma">{itemName}</p>
        {props.children}


        </div>
        
    )
       
}

export default Item;