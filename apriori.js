exports.associate = function(transactions) {
	return getUniqueItems(transactions).map((a, i, arr) => ({
		name: a,
		related: formatRelated(getRelated(arr, transactions, a, b))
	}))
}

function getUniqueItems(transactions) {
	return [].concat(...transactions)
		.filter((item, i, arr) => arr.indexOf(item) == i)
}

function getRelated(arr, transactions, a, b) {
	arr.map(b => a != b && ({
		name: b,
		value: getAssociationAverage(transactions, a, b)
	}))
}

function getAssociationAverage(transactions, a, b) {
	return transactions.map(transaction => areAssociated(transaction, a, b))
		.reduce((a, b) => a + b) / transactions.length
}

function areAssociated(transaction, a, b) {
	return transaction.includes(a) && transaction.includes(b) && a != b ? 1 : 0
}

function formatRelated(related) {
	return related.filter(item => item && item.value != 0)
		.sort((a, b) => b.value - a.value)
}