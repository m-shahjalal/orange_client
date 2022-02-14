const elemBuilder = (arr, selected) => {
	const newArr = [...arr];
	newArr.shift();
	newArr.pop();
	const itemConstructor = [];

	if (selected >= 4) {
		itemConstructor.length = 0;
		itemConstructor.push(selected - 2);
		itemConstructor.push(selected - 1);
		itemConstructor.push(selected);

		if (selected + 1 < arr.length - 1) {
			itemConstructor.push(selected + 1);
		}
		if (selected + 1 < arr.length) {
			itemConstructor.push(selected + 2);
		}
	} else {
		itemConstructor.length = 0;
		itemConstructor.push(2, 3, 4, 5, 6);
	}
	return itemConstructor;
};

export default elemBuilder;
