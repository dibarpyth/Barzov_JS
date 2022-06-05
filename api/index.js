const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3003;

app.get('/', (req, res) => {
	res.send('TZ API');
});

app.listen(port, () => {
	console.log(`API running on port ${port}`);
});
