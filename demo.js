const { MongoClient } = require('mongodb');

  async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
   async function main(){
        /**
         * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
         * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
         */

      const uri = "mongodb+srv://stud3nt:stud3nt@cluster0.28kgv.mongodb.net/?retryWrites=true&w=majority"
   
        const client = new MongoClient(uri);
    
        try {
            // Connect to the MongoDB cluster
            await client.connect();
    
            // Make the appropriate DB calls
            await  listDatabases(client);
    
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }
    
    main().catch(console.error);