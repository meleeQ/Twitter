import React, { Component } from 'react'
import Item from './Item'
import { connect } from 'react-redux'
import LoadingItems from './LoadingItems'

// User List 
class ListItem extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { list, loading } = this.props
		const items = list && list.map(element => <Item key={element.user_id} item={element} />)
		return (
			<div>
				{loading ? <LoadingItems /> : items}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		list: state.profile.users,
		loading: state.profile.loading
	}
}

export default connect(mapStateToProps, {})(ListItem)