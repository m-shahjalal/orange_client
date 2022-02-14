import classes from './Table.module.css';

const Row = ({ item }) => {
	return (
		<tr className={classes.tableRow}>
			<td className={classes.tableCell}>
				<div className='ml-3'>
					<p className={classes.tableText}>{item.id}</p>
				</div>
			</td>
			<td className={classes.tableCell}>
				<p className={classes.tableText}>{item.name}</p>
			</td>
			<td className={classes.tableCell}>
				<p className={classes.tableText}>{item.email}</p>
			</td>
		</tr>
	);
};

export default Row;
