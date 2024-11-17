import { db } from "./server/db";

await db.user.create({
    data:{
        emailAddress:"test@gmail.com",
        firstName:"gayan",
        lastName:"gamage",
        
    }
})
console.log("done")
