import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const profile = 'Perfil';
const account = 'Cuenta';
const logIn = 'Iniciar Sesión';

const Header = () => (
	<header className='header'>
		<Link to='/'>
			<img className='header__img' src={logo} alt='Platzi Video' />
		</Link>

		<div className='header__menu'>
			<div className='header__menu--profile'>
				<img src={userIcon} alt='user icon' />
				<p>{profile}</p>
			</div>
			<ul>
				<li>
					<Link to='Login'>{account}</Link>
				</li>
				<li>
					<Link to='Register'>{logIn}</Link>
				</li>
			</ul>
		</div>
	</header>
);

export default Header;
