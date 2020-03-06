import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField, requestRobots } from '../actions';


const mapStateToProps = state =>{
	return {
		searchField: state.searchRobots.searchField,
		robots:state.requestRobots.robots,
		isPending:state.requestRobots.isPending,
		error:state.requestRobots.error
	}
}
const mapDispachToProps = (dispatch) =>{
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onSearchRobots: () => dispatch(requestRobots())
	}
}

class App extends Component{
	
	componentDidMount(){
		this.props.onSearchRobots();
	}


	render(){
		const { searchField, onSearchChange, robots, isPending } = this.props
		const filteredRobot = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending?
			 <h1>Loading</h1>:
		
		<div className='tc'>
			<h1 className='f1'>ROBOT</h1>
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
					<CardList robots = {filteredRobot}/> 
				</ErrorBoundry>
			</Scroll>
		</div>
	}
	
}


export default connect(mapStateToProps, mapDispachToProps)(App);