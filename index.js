// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  const returnedDB = await central(id);    
    console.log(returnedDB);

    Promise.all([dbs[returnedDB], vault(id)])
      .then(([result1, result2]) => {
      console.log(result1, result2);
    });
    // const dbData = await (id);
    // console.log(dbData);
}


getUserData(5);