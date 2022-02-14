import Row from './Row';
import classes from './Table.module.css';

const Table = ({ student }) => {
	return (
		<table className='min-w-full shadow-md mx-auto rounded-lg overflow-hidden'>
			<thead>
				<tr>
					<th className={classes.tableData}>ID</th>
					<th className={classes.tableData}>Name</th>
					<th className={classes.tableData}>Email</th>
				</tr>
			</thead>
			<tbody>
				{student &&
					student.content.map((item) => (
						<Row item={item} key={item.id} />
					))}
			</tbody>
		</table>
	);
};

export default Table;
