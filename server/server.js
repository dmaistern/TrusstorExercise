const express = require('express');
const cors = require('cors');
const tvShowsRouter = require('./routes/tv_shows');
const health = require('./routes/health');

const app = express()
app.use(cors());

app.use('/', tvShowsRouter);
app.use('/health', health);

const port = 5000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})