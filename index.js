const alfy = require("alfy");
const docs = require("./docs.json");
const query = alfy.input;

const ret = docs.filter(item => {
	return item.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
}).map(item => {
	return {
		title: item.name,
		subtitle: item.url,
		arg: `https://docs.meteor.com/${item.url}`
	}
});

alfy.output(ret);