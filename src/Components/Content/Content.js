import './Content.css';

function Content(props) {
  const stockClassName = props.stock === 'In Stock' ? 'in-stock' : 'out-of-stock';
  return (
    <div id="one">
      <div id="two">
        <div id="record">
          <div>
            <p className={stockClassName}>{props.stock}</p>
            <h1 id="name">{props.name}</h1>
            <p id="size">{props.size}</p>
            <p id="display">{props.display}</p> 
          </div>
          <div>
            <a href={props.productLink}><button className="Show-details">Details</button></a> 
          </div>
        </div>
      </div>
      <div id="three">
        <img className="product" src={props.imageLink} alt="product-image" />
        <p id="price">Price : {props.price}</p>
      </div>
    </div>
  );
}

export default Content;
