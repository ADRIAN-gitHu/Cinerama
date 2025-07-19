import { Inngest } from "inngest";
import User from "../models/User.js"

//create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-booking" });

//Ingest Function to save user data to a Database
const syncUserCreation =inngest.createFunction(
    {id: 'sync-user-from-clerk'},
    {event:'clerk/user.created'},
    async({event})=>{
        const{id, first_name, last_name, email_adresses,image_url}=event.data
        const userData={
            _id:id,
            email:email_adresses[0].email_adresses,
            name:first_name + ''+last_name,
            image:image_url
        }
        await User.create(userData)
    }
)

//Ingest function to delete user from DataBase
const syncUserDeletion =inngest.createFunction(
    {id: 'delete-user-from-clerk'},
    {event:'clerk/user.deleted'},
    async({event})=>{
        const{id}=event.data
        await User.findByIdAndDelete(id)
    }
)

//Ingest function to update user in DataBase
const syncUserUpdation =inngest.createFunction(
    {id: 'update-user-from-clerk'},
    {event:'clerk/user.updated'},
    async({event})=>{
        const{id, first_name, last_name, email_adresses, image_url}=event.data
        const userData={
            _id:id,
            email:email_adresses[0].email_adresses,
            name:first_name + ''+last_name,
            image:image_url
        }
        await User.findByIdAndUpdate(id,userData)
    }
)

export const functions = [syncUserCreation,syncUserDeletion, syncUserUpdation];