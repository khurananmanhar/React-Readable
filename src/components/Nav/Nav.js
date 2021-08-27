import React from 'react';
import './Nav.css'
class Navbar extends React.Component {
    render() {
        return (
            <ul className="list">
                <li className='current'>Home</li>
                <li>Catergories</li>
                <li>Brands</li>
                <li>Best Sellers</li>
            </ul>
        )
    }
}
export default Navbar