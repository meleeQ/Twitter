import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'

const styles = {
	paper: {
		padding: 10,
		display: 'flex',
		marginTop: 10,
	},
	avatar: {
		minWidth: 60,
		margin: '4px 10px 4px 4px'
	},
	login: {
		marginBottom: 5
	},
	time: {
		marginLeft: 10,
		color: '#bbb',
		fontSize: 14
	},
	followers: {
		marginLeft: 10,
		color: '#bcb',
		fontSize: 14
	}
	
}
/* 
 */
class Item extends Component {
	render () {
		const { classes, item } = this.props
		
		return (
			<Paper className={classes.paper}>
				<div 
					className={classes.avatar}
					style={{
						backgroundColor: `#${item.user_id.slice(item.user_id.length - 3)}`,
						backgroundImage:  `url(${item.profile_image})`,
					}}
					
				/>
			
				<div>
					<h3 className={classes.login}>
				<Link to={`/profile/${item.user_id}`}>{item.user_name}{item.protected}</Link>
						<div>
						<span className={classes.followers}>followers:{item.followers}</span>
						<span className={classes.time}>created_at:{
						(new Date(item.create_time)).toLocaleString()}</span>
						</div>
						
					</h3>
					{item.text}
				</div>
			</Paper>
		)
	}
}


export default withStyles(styles)(Item)