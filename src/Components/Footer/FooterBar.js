import React from 'react';
import FooterCol from './FooterCol';
import CopyRight from './CopyRight';
import './FooterBar.css';
const one = ['Shop and Learn', 'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Airpods', 'AirTag'];
const two = ['Account','Manage Your Apple Id','Apple Store Account','iCloud.com'];
const three = ['Apple Store','Find a Store','Genius Bar','Today at Apple','Apple Camp','Apple Trade In','Ways to Buy','Order Status','Shopping Help']; 

function FooterBar() {
  return (
    <div className='footerBar'>
        <div className="container-buttom">
            <FooterCol dataArray={one} />
            <FooterCol dataArray={two} />
            <FooterCol dataArray={three} />
        </div>
        <div>
            <CopyRight></CopyRight>
        </div>
    </div>
  );
}

export default FooterBar;
