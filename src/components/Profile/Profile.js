import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux'
import { 
	getUserProfile,
} from '../../actions/profileActions'
import Twit from '../Twits/Twit'

const styles = {
	paper: {
		padding: 10
	},
	location: {

	},
	name: {
		color: '#888',
		marginBottom: 10
	},
	detailsBlock: {
		display: 'flex'
	},
	detail: {
		marginRight: 5,
		fontWeight: 'bold'
	},
	detailTitle: {
		marginLeft: 3,
		textTransform: 'uppercase',
		fontSize: 10,
		fontWeight: 'normal'
	},
	btnBlock: {
		width: '100%',
		textAlign: 'right'
	},
	btnFollow: {
		backgroundColor: '#9400D3',
		color: 'white',
		'&:hover': {
			color: '#9400D3',
			borderColor: '#9400D3',
			backgroundColor: 'white'
		}
	}
}

class Profile extends Component {
	constructor (props) {
		super(props)
	}

	componentDidMount() {
		this.props.getUserProfile(this.props.match.params.userId)
	}


	render () {
		const { 
			classes,
			loadingProfile,
			twits
		} = this.props
		let followBtns;
		let items;
		let profile;
		//
		let profiles =twits&&twits.find((item,index) => {
			if(index==0){
				profile=item.user
				return ;
			}
		});
		items = twits && twits.map(element => <Twit key={element.tweet_id} twit={element}/>)
		let profileInfo
		if ( profile) {
			profileInfo = (
				<Paper className={classes.paper}>
					<h1>{profile.name}</h1>
					<div className={classes.location}>{profile.location}</div>
					<div className={classes.detailsBlock}>
						<div className={classes.detail}	>
							{items.length}
							<span className={classes.detailTitle}>Tweets</span>
						</div>
						<div className={classes.detail}>
							{profile.followers_count}
							<span className={classes.detailTitle}>followers</span>
						</div>
						{ followBtns }
					</div>
				</Paper>
			)
		}

		return (
			<div>
				{ loadingProfile ? <div>Loading</div> : profileInfo }
				{  items }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		twits: state.profile.twits,
    }
	
}

export default connect(mapStateToProps, 
	{ 		
		getUserProfile
	})(withStyles(styles)(Profile))