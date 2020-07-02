import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = {
	paper: {
		padding: 10,
		display: 'flex',
		marginTop: 10,
	},
	content: {
		minWidth: 60,
		margin: '4px 10px 4px 4px'
	},
	time: {
		marginBottom: 5
	},
	favorite_counts: {
		marginLeft: 10,
		color: '#bbb',
		fontSize: 14
	},
	source: {
		marginLeft: 10,
		color: '#bcb',
		fontSize: 14
	},
	user:{

	}
	
}
//Hooks
class Twit extends Component {
	render () {
		const { classes, twit } = this.props
		return (
			<Paper className={classes.paper}>
				<div 
					className={classes.content}
					style={{
					//	backgroundColor: `#${twit.user.id_str.slice(twit.user.id.length - 3)}`,
						backgroundImage:  `url(${twit.user.profile_image_url})`,
					}}					
				/>		
				<div>
					<h3 className={classes.source}>				
					<div dangerouslySetInnerHTML={{__html:twit.source}} />
						<div>
						<span className={classes.favorite_counts}>favorites:{twit.favorite_counts}</span>
						<span className={classes.time}>created_at:{
						(new Date(twit.create_time)).toLocaleString()}</span>
						</div>
					</h3>
					
				</div>
			</Paper>
		)
	}
}


export default withStyles(styles)(Twit)