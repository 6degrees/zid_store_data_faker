const fs = require('fs');
const { faker, fakerAR } = require('@faker-js/faker');
//const { fakerAr } = require('@faker-js/faker/locale/ar');

// Function to generate a fake product

console.log(faker.commerce.product());
console.log(faker.image.avatar());
console.log(faker.image.urlLoremFlickr({ category: 'perfume' }) );
console.log(faker.image.urlLoremFlickr({ category: 'perfume' }));
console.log(faker.image.urlPicsumPhotos());
process.exit(0);

function generateProduct(locale) {
  const myfaker = locale === 'en' ? faker : fakerAR;
  const name = myfaker.commerce.productName();
  const price = myfaker.commerce.price({ min: 100, max: 200 });
  const description = myfaker.lorem.sentence();

  return {
    name,
    price,
    description,
  };
}
