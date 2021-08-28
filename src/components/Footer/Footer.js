import React from 'react';
import './Footer.css'
class Footer extends React.Component {
    render() {
        return (
            <div className="footerContainer">
                <div className="section one">
                    <h2>Readable</h2>
                    <p>1203 Town Center
                        Drive FL 33458 USA</p>
                    <p>+0000 123 456 789</p>
                    <p>info@example.com</p>
                </div>
                <div className="section">
                    <h3>Help</h3>
                    <p>Search</p>
                    <p>Help</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Shipping Information</p>
                </div>
                <div className="section">
                    <h3>Support</h3>
                    <p>Search Terms</p>
                    <p>Advanced Search</p>
                    <p>Helps and Faqs</p>
                    <p>Store Locations</p>
                    <p>Orders and Returns</p>
                </div>
                <div className="section">
                <h3>Information</h3>
                    <p>Contact</p>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Refund and Returns</p>
                    <p>Deliveries</p>
                </div>
            </div>
        )
    }
}
export default Footer