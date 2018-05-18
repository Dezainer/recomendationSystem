const Utils = require('./utils')

exports.associate = function(transactions) {
	let items = Utils.getUniqueItems(transactions), 
		associations = {}

	items.map(a => {
		associations[a] = {}
		items.map(b => {
			if(a != b) associations[a][b] = 0
			associations = associateItems(associations, transactions, a, b)
		})
	})

	return associations
}

function associateItems(associations, transactions, a, b) {
	transactions.map(transaction => {
		if(transaction.includes(a) && transaction.includes(b) && a != b) {
			associations[a][b] = associations[a][b] * transactions.length
			associations[a][b] += 1
			associations[a][b] = associations[a][b] / transactions.length
		}
	})

	return associations
}