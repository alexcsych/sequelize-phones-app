const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () =>
  console.log(`Server is listening http://localhost:${PORT}`)
);

//Sync
// sequelize
//   .sync({ force: true })
//   .then(() => console.log('Sync OK'))
//   .catch(e => console.log('e :>> ', e));

//Post
//додавання нового телефону

// (async () => {
//   const phone = {
//     model: 'Galaxy S21 PLUS',
//     brand: 'Samsung',
//     year_of_manufacture: 2010,
//     ram_size: 6,
//     processor: 'Quantum Galaxy',
//     screen_size: 6.55,
//     nfc: false,
//     created_at: new Date(),
//     updated_at: new Date(),
//   };
//   const createdPhone = await phones.create(phone);
//   console.log('createdPhone :>> ', createdPhone.get());
// })();

//Get all
//отримання списку телефонів

// (async () => {
//   const foundPhones = await phones.findAll({ raw: true });
//   console.log('foundPhones :>> ', foundPhones);
// })();

//Get all with paginate
//* 3-я сторінка при перегляді по 4 телефони на сторінці, упорядкованих за роком виробництва

// (async () => {
//   const foundPhones = await phones.findAll({
//     raw: true,
//     limit: 4,
//     offset: 8,
//     order: [['year_of_manufacture', 'DESC']],
//   });
//   console.log('foundPhones :>> ', foundPhones);
// })();

//Get all with year_of_manufacture = 2021
//*отримання списку телефонів певного року видання

// (async () => {
//   const foundPhones = await phones.findAll({
//     raw: true,
//     where: { year_of_manufacture: 2021 },
//   });
//   console.log('foundPhones :>> ', foundPhones);
// })();

//Get all year_of_manufacture < 2020
//*отримання списку телефонів старше 2020 року випуску

// (async () => {
//   const foundPhones = await phones.findAll({
//     raw: true,
//     where: { year_of_manufacture: { [Op.lt]: 2020 } },
//   });
//   console.log('foundPhones :>> ', foundPhones);
// })();

//Update
//оновлення: додати нфс всім телефонам 2021 року випуску

// (async () => {
//   const body = { nfc: true };
//   const [, [updatePhone]] = await phones.update(body, {
//     raw: true,
//     where: { year_of_manufacture: 2021 },
//     returning: true,
//   });
//   console.log('updatePhone :>> ', updatePhone);
// })();

//Delete
//видалення телефонів 2010 року випуску

// (async () => {
//   const delatedPhone = await phones.destroy({
//     where: { year_of_manufacture: 2010 },
//   });
//   console.log('delatedPhone :>> ', delatedPhone);
// })();
