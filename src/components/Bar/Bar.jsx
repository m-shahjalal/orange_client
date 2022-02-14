const Bar = ({ setSearch, setSize, size }) => {
	const handleSelect = (e) => {
		setSize(e.target.value);
	};

	const handleSearch = (e) => {
		setTimeout(() => {
			setSearch(e.target.value);
		}, 700);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className='flex flex-col md:flex-row justify-between w-full items-center'>
			<form onSubmit={handleSubmit}>
				<select
					onChange={handleSelect}
					defaultValue={size}
					name='size'
					id='size'
					className='select-value'>
					<option>Show items per page</option>
					<option value='10'>10 items per page</option>
					<option value='20'>20 items per page</option>
					<option value='30'>30 items per page</option>
				</select>
			</form>
			<div className='text-gray-600'>
				<form onSubmit={handleSubmit}>
					<input
						onChange={handleSearch}
						className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
						type='text'
						name='search'
						placeholder='Search and enter'
					/>
				</form>
			</div>
		</div>
	);
};

export default Bar;
