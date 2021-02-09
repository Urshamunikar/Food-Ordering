import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'


export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart, reduction, increase} = this.context;
        return (
            <div id="product">
               {
                   products.map(product =>(
                    <div className="card" key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            <img src={product.src} alt=""/>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/product/${product._id}`}>{product.title}</Link>
                            </h3>
                            <span>${product.price}</span>
                            <p>{product.description}</p>
                            <div className="amount">
                                        <button className="count" onClick={() => reduction(product._id)}> - </button>
                                        <span>{product.count}</span>
                                     
                                        <button className="count" onClick={() => increase(product._id)}> + </button>
                                    </div>
                            <button onClick={()=> addCart(product._id)}>Add to cart</button>
                        </div>
                    </div>
                   ))
               }
            </div>
        )
    }
}

export default Products
