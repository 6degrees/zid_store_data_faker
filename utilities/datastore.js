const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://mohannadotaibi:ZBecr7GalLWueh7k@cluster0.s4mukwx.mongodb.net/?retryWrites=true&w=majority';

// Create a MongoDB client
const client = new MongoClient(uri);

// Connect to the MongoDB server
const connectToMongoDB = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // Get the database instance
    const db = client.db();

    // Get the collection
    const collection = db.collection('mycollection');

    // Ensure uniqueness based on the id field
    await collection.createIndex({ id: 1 }, { unique: true });

    // Insert a document, ignoring duplicates based on the id field
    const insertDocument = async (document) => {
      try {
        const result = await collection.insertOne(document);
        return result.ops[0];
      } catch (err) {
        if (err.code === 11000) {
          // Ignore duplicate entry error
          return null;
        }
        throw err;
      }
    };

    // Find documents
    const findDocuments = async (query) => {
      return collection.find(query).toArray();
    };

    // Export the methods
    module.exports = {
      insertDocument,
      findDocuments,
    };
  } catch (err) {
    console.error('Failed to connect to MongoDB:');
  }
};

// Call the connectToMongoDB function
connectToMongoDB();
