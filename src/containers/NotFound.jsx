import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
	<>
		<section className='not-found'>
			<h2 className='not-found__title'>404</h2>
			<h3>Página no encontrada</h3>
		</section>
	</>
);

export default NotFound;
