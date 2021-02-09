import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {withRouter,Link} from 'react-router-dom';
import categories from "../utils/categories";
import foods from "../utils/foods";


class Search extends Component {

	state={
		searchTerm:''
	}
	changeSearchTerm =(e)=>{
		if(e.key==='Enter'){
			this.Search()
		}else{
		this.setState({
			searchTerm:e.target.value
		})
		}
	}
	Search=()=>{
		this.props.history.replace('/search/'+this.state.searchTerm)
	}
    render() {
        return (
            // <div className='search'>
                <div class="search-box">
                <input type="text" className="input" onKeyUp={(e)=>this.changeSearchTerm(e)} placeholder="Search Everything"/>
				{/*<Link to={"/search/"+this.state.searchTerm}><i style={{color:'white'}} className="fas fa-search"></i>	</Link>*/}
            </div>
        )
    }
}

export default withRouter(Search);

