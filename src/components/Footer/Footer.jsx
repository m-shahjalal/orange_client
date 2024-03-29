// import {} from '@heroicons/react';

const Footer = () => {
	return (
		<footer class='text-gray-600 body-font'>
			<div class='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
				<a
					href='/'
					class='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
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
				<p class='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
					© 2022 Orange Hub —
					<a
						href='https://twitter.com/shahjalal'
						class='text-gray-600 ml-1'
						rel='noopener noreferrer'
						target='_blank'>
						@shahjalal
					</a>
				</p>
				<span class='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
					<a href='/' class='text-gray-500'>
						<svg
							fill='currentColor'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							class='w-5 h-5'
							viewBox='0 0 24 24'>
							<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
						</svg>
					</a>
					<a href='/' class='ml-3 text-gray-500'>
						<svg
							fill='currentColor'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							class='w-5 h-5'
							viewBox='0 0 24 24'>
							<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
						</svg>
					</a>
					<a href='/' class='ml-3 text-gray-500'>
						<svg
							fill='none'
							stroke='currentColor'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							class='w-5 h-5'
							viewBox='0 0 24 24'>
							<rect
								width='20'
								height='20'
								x='2'
								y='2'
								rx='5'
								ry='5'></rect>
							<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
						</svg>
					</a>
					<a href='/' class='ml-3 text-gray-500'>
						<svg
							fill='currentColor'
							stroke='currentColor'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='0'
							class='w-5 h-5'
							viewBox='0 0 24 24'>
							<path
								stroke='none'
								d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'></path>
							<circle cx='4' cy='4' r='2' stroke='none'></circle>
						</svg>
					</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
