import React from 'react';
import cart from "./shopping-cart.png"
import search from "./search.png"
import "./Header.css"
 
class Header extends React.Component{
    render(){
        return(
            <div className='headerContainer'>
            <div>
                <img src={cart} alt='cart' className='icons'/>
            </div>
            <div>
                <h1>Readable</h1>
            </div>
            <div>
                <img src={search} alt="search" className='icons'/>
            </div>
        </div>
        )
    }
}
export default Header