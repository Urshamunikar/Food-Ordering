import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Cart from '../assets/images/cart.png'
import '../App.css'
import {DataContext} from './Context'

class Navbar extends Component {
    static contextType = DataContext;
    render() {
        const {cart} = this.context;
        return (
            <div className="nav">
                 <div className="logo">
                    <h1><Link to="/">Logo</Link></h1>
                </div>
                <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={Cart} alt="" width="25"/>
                        </Link>
                    </div>
            </div>
        )
    }
}
export default Navbar