import { Schema,model,models } from "mongoose";

const UserSchema = new Schema({
     email:{
        type:String,
        unique:[true,'email already exists'],
        required:[true,'email is required'],
     },  
     username:{
        type:String,
        required:[true,'email is required'],
        match: [/^[a-zA-Z\s]+$/, 'Name must only contain letters and spaces'],
     },
     image:{
        type:String,
     }  

},{timestamps:true})


const User = models.User || model("User",UserSchema);

export default User;