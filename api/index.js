const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3003;

const tz = require('./tz.js');

app.get('/', (req, res) => {
	res.send('TZ API');
});

app.get('/tz', (req, res) => {
	const tzParams = req.query;
	console.log(tzParams);
	const tzData = tz.getTz(tzParams.id, tzParams.data);

	res.status(tzData.status).send(tzData.msg);
});

app.listen(port, () => {
	console.log(`API running on port ${port}`);
});
