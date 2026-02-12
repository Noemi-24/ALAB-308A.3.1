// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  try {
    const returnedDB = await central(id);   

    Promise.all([dbs[returnedDB](id), vault(id)])
      .then(([result1, result2]) => {

        const userData = {
          id: id,
          name: result2.name,
          username: result1.username,
          email: result2.email,
          address: {
            street: result2.address.street,
            suite: result2.address.suite,
            city: result2.address.city,
            zipcode: result2.address.zipcode,
            geo:{
              lat: result2.address.geo.lat,
              lng: result2.address.geo.lng
            }
          },
          phone: result2.phone,
          website: result1.website,
          company: {
            name: result1.company.name,
            catchPhrase: result1.company.catchPhrase,
            bs: result1.company.bs    
          }
      };

      console.log(userData);

    });
  } catch (error) {
    console.error("An error occurred:", error.message); 
  }
  
}

// ==== Valid Numbers ====
getUserData(1);
getUserData(2);
getUserData(3);
getUserData(4);
getUserData(5);
getUserData(6);
getUserData(7);
getUserData(8);
getUserData(9);
getUserData(10);

// ==== Invalid Numbers ====
getUserData(0);
getUserData(11);

// ==== Invalid data types ====
getUserData('1');
getUserData(true);
