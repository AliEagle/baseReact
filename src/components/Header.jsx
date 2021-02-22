import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';

import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const profile = 'Perfil';
const account = 'Cuenta';
const logIn = 'Iniciar Sesión';

const Header = (props) => {
	const { user } = props;
	const hasUser = Object.keys(user).length > 0;
	return (
		<header className='header'>
			<Link to='/'>
				<img className='header__img' src={logo} alt='Platzi Video' />
			</Link>

			<div className='header__menu'>
				<div className='header__menu--profile'>
					{hasUser ? (
						<img src={gravatar(user.email)} alt={user.email} />
					) : (
						<img src={userIcon} alt='user icon' />
					)}
					<p>{profile}</p>
				</div>
				<ul>
					<li>
						<Link to='Register'>{account}</Link>
					</li>
					<li>
						<Link to='Login'>{logIn}</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps, null)(Header);
