const Apriori = require('./apriori')

let sales = [
	['bread', 'cheese', 'lettuce', 'meat'],
	['bread', 'meat', 'cake'],
	['lettuce', 'meat', 'onion'],
	['bread', 'cake', 'onion'],
	['bread', 'meat', 'cheese', 'lettuce'],
	['cheese', 'meat', 'onion']
]

console.dir(Apriori.associate(sales), { depth: null })