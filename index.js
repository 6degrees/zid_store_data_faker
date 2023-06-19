const axios = require('axios');

const { insertDocument, findDocuments } = require('./utilities/datastore');


const stores = [
    {
        id: 37213,
        name: 'Riyadh'
    },
    {
        id: 172911,
        name: 'Faris Perfumes'
    }
]

const Headers = {  
    'Content-Type': 'application/json',
    'Store-Id': stores[1].id,
};

async function getProducts() {
  const response = await axios.get('https://api.zid.sa/v1/products/', { headers: Headers });
  return {products: response.data.results};
}

async function getCategories() {
    const response = await axios.get('https://api.zid.sa/v1/products/categories/', { headers: Headers });
    return {categories: response.data.results};
}

async function main() { 
    const products = await getProducts();
   // console.log(products.products[0]);
    
    const categories = await getCategories();
    console.log(categories.categories[0]);
    //insertDocument(products);
    
}

main();