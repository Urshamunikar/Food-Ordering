import React, { Component } from 'react';
import Banner from "../Banner"
import Navbar from '../Navbar'
import './Home.css';
import Search from "./Search";
import RecipeBox from "../RecipeBox/RecipeBox";
import categories from "../utils/categories";
import foods from "../utils/foods";
import Cat from '../Cat'
import { Route, Switch } from 'react-router-dom';

class Home extends Component {
    state = {
        filteredFoodItems: []
    };

    componentDidMount() {
        this.setState({
            filteredFoodItems: [...foods]
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.query != this.props.match.params.query) {
            if (this.props.match.params.query) {
                const searchTxt = this.props.match.params.query
                const searchFoodsItems = this.state.filteredFoodItems.filter(food => {

                    return food.title.toLowerCase() == searchTxt.toLowerCase()
                })
                this.setState({
                    filteredFoodItems: searchFoodsItems
                })
            } else {
                this.setState({
                    filteredFoodItems: [...foods]
                })
            }
        }
    }

    selectCategoryHandler = (cat) => {
        const itemsSelected = foods.filter(food => food.category === cat);
        console.log(cat);
        console.log(itemsSelected);
        this.setState({
            filteredFoodItems: itemsSelected
        })
    };

    render() {

        return (
            <section className={'home'}>
                <Navbar/>
                <Banner />

                <div className="categories-content">

                    <div className="recipe-bar-title">Categories</div>
                    <div className="categories">
                        {categories.map(type => (

                            <div className='recipe-side-bar-item'
                                onClick={
                                    () =>
                                        this.selectCategoryHandler(type.name)}>
                                {type.name}</div>
                        ))}
                    </div>
                </div>
                <div className="recipe-list">
                    <div className="recipe-items">
                        {this.state.filteredFoodItems.length == 0 ? (<h1>No such item</h1>) :
                            (
                                this.state.filteredFoodItems.map(item => (
                                    <RecipeBox item={item} />
                                ))
                            )
                        }
                    </div>
                </div>

            </section>
        );
    }
}

export default Home;