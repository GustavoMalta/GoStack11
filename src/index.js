const express = require('express');

const app = express();

app.listen(3334, () => {
	console.log('✌ Running');
});

app.get('/', (req, res) => {
	return res.json({ asd: { data: { nome: 'asd' } } });
});
// export default app;
