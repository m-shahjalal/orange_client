import { useEffect, useState } from 'react';
import urlBuilder from '../utils/urlBuilder';

const useFetch = () => {
	const [student, setStudent] = useState();
	const [loading, setLoading] = useState(false);
	const [init, setInit] = useState(false);
	const [error, setError] = useState();
	const [select, setSelect] = useState(1);
	const [size, setSize] = useState(10);
	const [search, setSearch] = useState('');

	const handleClick = (pageNum) => {
		setSelect(pageNum);
		setLoading(true);
		fetch(urlBuilder(select, size, search))
			.then((data) => data.json())
			.then((data) => setStudent(data))
			.catch((e) => setError(e))
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		setLoading(true);
		fetch(urlBuilder(select, size, search))
			.then((data) => data.json())
			.then((data) => setStudent(data))
			.then(() => setInit(false))
			.catch((e) => setError(e))
			.finally(() => setLoading(false));
	}, [select, search, size]);

	return {
		student,
		loading,
		init,
		error,
		select,
		size,
		handleClick,
		setSize,
		setSearch,
	};
};

export default useFetch;
