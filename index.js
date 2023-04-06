const http = require('http');
const app = require('./app');
// const { sequelize, phones } = require('./models');

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Server is listening http://localhost:${PORT}`);
});

// sequelize
//   .sync({ force: true })
//   .then(() => console.log('Sync OK'))
//   .catch(e => console.log('e :>> ', e));
