import React, { useState } from 'react';
import './RecipeBox.css'
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';


const RecipeBox = (props) => {
    const [num, setnum] = useState(1);
    const incrementnum = () => {
        setnum(num + 1)
    }
    const decrementnum = () => {
        if(num>1){
            setnum(num - 1)
        }
        else{
            setnum(1)
        }
        
    }
    const insert = () => {
      
        
    }
    return (

        <Card className="recipe-box" style={{ }}>
            <Card.Img variant="top" className="recipe-img" src={props.item.image} />
            <Card.Body className="recipe-content">
                <div className="recipe-content-top">
                    <Card.Title className="recipe-title">{props.item.title}</Card.Title>
                    <Card.Text className="price">
                        Rs.{props.item.price}
                    </Card.Text>

                </div>
                <Card.Text className="description">
                    {props.item.description}
                </Card.Text>
              
            </Card.Body>
            <Card.Footer>
            <div className="button-down">
               
               <div className="quantity-button">
                 
                   <button className="quantity__plus"onClick={incrementnum} >+</button>
                   <h5>{num}</h5>
                   <button className="quantity__minus" onClick={decrementnum} >-</button>
                   
               </div>
               <Button className="add-to-cart" onClick={insert}>Order Me</Button>
               </div>
            </Card.Footer>
        </Card>

    );
}

export default RecipeBox;







