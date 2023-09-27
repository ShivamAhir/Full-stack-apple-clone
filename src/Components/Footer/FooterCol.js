import './FooterCol.css';
function FooterCol(props) {
    const dataArray = props.dataArray;
  
    const listItems = dataArray.slice(1).map((item, index) => (
      <li key={index}>{item}</li>
    ));
  
    return (
      <div>
        <ul>
          <p>{dataArray[0]}</p>
          {listItems}
        </ul>
      </div>
    );
  }
  
  export default FooterCol;
  