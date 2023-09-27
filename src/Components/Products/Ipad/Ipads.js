import React, { Component } from 'react';
import Content from '../../Content/Content';
import './Ipads.css'


class Ipads extends Component {
  constructor() {
    super();
    this.state = {
      data: null, 
    };
  }

  componentDidMount() {
    fetch('/api/ipad')
      .then((response) => response.json()) 
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  render() {
    const { data } = this.state; 

    return (
      <div className="main-div">
        {data ? (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <Content
                name={item.name}
                stock={item.bool ?"Out Of Stock":"In Stock"}
                price={item.price}
                size={item.size}
                display={item.display}
                imageLink={item.link}
                productLink={`ipad/id=${index+1}`}
              ></Content>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
      </div>
    );
  }
}

export default Ipads;
