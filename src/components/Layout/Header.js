import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import SearchForm from '../Search/SearchForm'

const styles = {
	root: {
		flexGrow: 1
	},
	logo: {
		color: '#fff',
		fontSize: 30,
		textTransform: 'uppercase'
	},
	space: {
		justifyContent: 'space-between'
	}
}
//改成Hooks
class Header extends Component {

	render () {
        const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static" style={{ backgroundColor: '#4B0082'}}>
					<Toolbar className={classes.space}>
						<Link to="/" className={classes.logo}>Twit</Link>
						<SearchForm />
						<button  />         
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}



export default (withStyles(styles)(Header))