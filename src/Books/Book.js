import React from 'react'
import './Book.css'
class Book extends React.Component{
    render(){
        return(
            <div className='booksContainer'>
                <img src={this.props.imageSrc} alt={this.props.title} className='images'/>
                <div className="info">
                <h3>{this.props.title}</h3>
                <p className="author">{this.props.author}</p>
                <p className='stars'>{this.props.rating}</p>
                <div className='prices'>
                    <p className='new'>{this.props.newPrice}</p>
                    <p className='old'>{this.props.Oldprice}</p>
                </div>
                </div>
            </div>
        )
    }
}
export default Book