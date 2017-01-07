function hiddenElements(array, hidden) {
	var i, item;
	if (array && (array instanceof Array)) {
		for (i = 0; i < array.length; i++) {
			item = document.getElementById(array[i]);
			if (item) {
				item.hidden = hidden;
			}
		}
	}
}