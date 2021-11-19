/*
 * Telephone Directory
 *
 * Add new telephone details (number + name)
 * Update a detail using the name
 * Delete a detail using the name
 * Read - search detail by name
 */
require("dotenv").config();

const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGODB_URI);




// CRUD OPERATIONS {CREATE , REMOVE , UPDATE , DELETE}


//create operation
const createContact = async(db, userName, userTelephone,) => {
    try {
        if(await db.findOne({phone:userTelephone})){
            console.log("Contact already exists.")
            process.exit(0);
        }
        else{
            await client.connect();
            await db.insertOne(
                {
                    name: userName,
                    phone: userTelephone,
                });

        }
        
        console.log("New Contact added.")
        process.exit(0);
    } catch (error) {
        console.log(error);
    }   
}

//find operation

const findContact = async (db,userName) =>{

    try{ 
        await client.connect();
        searchResult= await db.findOne({name:userName,});
        if (searchResult == null ){
            console.log("USER NOT FOUND ")

        }else{

            console.log(`Userfound --> Name:${searchResult.name} and PhoneNumber:${searchResult.phone}`);
            process.exit(0)
        }

    }
    catch(error){
        console.log(error);
        process.exit(0);
    }
}
//update operation

const updateContact = async(db,oldName,newName,newNumber) =>{

    try{ await client.connect();
         await db.updateOne({name:oldName},{
            $set:{
                name:newName,
                phone:newNumber
            }
        })
        console.log("Contact Updated Successfully!!")
        process.exit(0);
            

    }
    catch(error){
        console.log(error)
        process.exit(0);


    }

}

//delete operation
const deleteContact = async(db , userName) =>{
    try{
        await client.connect();
        if(await db.findOne({name:userName})){

            await db.deleteOne({name:userName})
            console.log("Contact Deleted Successuflly");
            process.exit(0);
        }else{

            console.log("No such user found");
            process.exit(0);
        }

    }
    catch(error){
        console.log(error);
        process.exit(0)
    }

}



const run = async()=>{
    try{    
        await client.connect();
        const database = client.db("Telephone");
        const db = database.collection("TelephoneDirectory");
        console.log("Database Connected!   >_< SENPAI !! ");
        //testing functions
        //createContact(db, "ayush", 9975634846);
        //createContact(db, "meow", 0987654321);
        //deleteContact(db,"meow");
        //findContact(db,"ayush");
        //updateContact(db,"ayush","dusra_billa",0987654321)
        //createContact(db,"human",89548954809)

    }
    catch(error){
        console.log(error)
    }


}
try {
    run();
} catch (error) {
    console.log(error)
}
