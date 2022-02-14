import React from 'react';

const Header = () => {
	return (
		<header class='text-gray-600 body-font fixed top-0 right-0 left-0'>
			<div class='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<a
					href='/'
					class='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='#444'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z'
						/>
					</svg>
					<span class='ml-3 text-xl'>Orange Hub</span>
				</a>
				<nav class='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
					<a href='/' class='mr-5 hover:text-gray-900'>
						Home
					</a>
					<a href='/' class='mr-5 hover:text-gray-900'>
						About
					</a>
					<a href='/' class='mr-5 hover:text-gray-900'>
						Contact
					</a>
				</nav>
				<button class='border-indigo-100 border inline-flex items-center bg-gray-100 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
					Join
					<svg
						fill='none'
						stroke='currentColor'
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						class='w-4 h-4 ml-1'
						viewBox='0 0 24 24'>
						<path d='M5 12h14M12 5l7 7-7 7'></path>
					</svg>
				</button>
			</div>
		</header>
	);
};

export default Header;
