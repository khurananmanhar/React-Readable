import React from 'react';
import './Letter.css'
class Letter extends React.Component {
    render() {
        return (
            <div className="LetterContainer">
                <div className='containerWords'>
                    <h2>Subscribe To Our News Letter</h2>
                    <p>Enter your email address to receive regular updates, as well as news on upcoming events and specific offers.</p>
                </div>
                <div className='Containerform'>
                    <input type="text" placeholder="  Your Email Address"/>
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}
export default Letter