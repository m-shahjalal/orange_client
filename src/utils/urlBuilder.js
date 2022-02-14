export const urlBuilder = (page, size, search) => {
	const query = {};
	if (page) query.page = page;
	if (size) query.size = size;
	if (search) query.search = search;

	let string = '';
	Object.keys(query).forEach((item) => {
		string = string + item + '=' + query[item] + '&';
	});

	console.log(string);

	return `https://ancient-spire-12999.herokuapp.com/students?${string}`;
};

export default urlBuilder;
