import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const main_title_text = '¿Qué quieres ver hoy?';
const main_input_placeholder = 'Buscar...';

const Search = ({ isHome }) => {
	const inputStyle = classNames('input', {
		isHome,
	});

	return (
		<section className='main'>
			<h2 className='main__title'>{main_title_text}</h2>
			<input
				type='text'
				className={inputStyle}
				placeholder={main_input_placeholder}
			/>
		</section>
	);
};

export default Search;
