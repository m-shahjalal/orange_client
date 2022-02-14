import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import elemBuilder from '../../utils/elemBuilder';
import classes from './Pagination.module.css';

export default function Pagination({ totalPages, handleClick, select }) {
	const items = [];
	for (let i = 0; i < totalPages; i++) {
		items.push(i + 1);
	}

	const paginateItem = elemBuilder(items, select);

	return (
		<div className='px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
			<div className='flex-1 flex justify-between sm:hidden'>
				<a href='/' className={classes.smallBtn}>
					Previous
				</a>
				<a href='/' className={classes.smallBtn}>
					Next
				</a>
			</div>
			<div className={classes.main}>
				<div>
					<p className='text-sm text-gray-700'>
						Showing <span className='font-medium'>{select}</span>{' '}
						page of{' '}
						<span className='font-medium'>{totalPages}</span>{' '}
						results
					</p>
				</div>
				<div>
					<nav
						className='paginationContainer'
						aria-label='Pagination'>
						<button
							onClick={() => handleClick(select - 1)}
							className={classes.indicator}>
							<span className='sr-only'>Previous</span>
							<ChevronLeftIcon
								className='h-5 w-5'
								aria-hidden='true'
							/>
						</button>
						<button
							onClick={() => handleClick(1)}
							aria-current='page'
							className={
								parseInt(select) === 1
									? classes.paginationItemActive
									: classes.paginationItem
							}>
							1
						</button>

						{paginateItem[0] > 2 && (
							<span className={classes.spanning}>...</span>
						)}

						{paginateItem.map((item) => (
							<button
								onClick={() => handleClick(item)}
								key={item}
								aria-current='page'
								className={
									select === item
										? classes.paginationItemActive
										: classes.paginationItem
								}>
								{item}
							</button>
						))}

						{paginateItem[paginateItem.length - 1] <
							items[items.length - 1] && (
							<span className={classes.spanning}>...</span>
						)}

						<button
							onClick={() => handleClick(items[items.length - 1])}
							className={
								parseInt(select) === items[items.length - 1]
									? classes.paginationItemActive
									: classes.paginationItem
							}>
							{items[items.length - 1]}
						</button>
						<button
							onClick={() => handleClick(select + 1)}
							style={{ borderRadius: '0 6px 6px 0', top: '5px' }}
							className={classes.indicator}>
							<span className='sr-only'>Next</span>
							<ChevronRightIcon
								className='h-5 w-5'
								aria-hidden='true'
							/>
						</button>
					</nav>
				</div>
			</div>
		</div>
	);
}
