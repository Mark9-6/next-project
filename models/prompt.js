import mongoose from "mongoose";
import { Schema, model , models } from "mongoose";

const PromptSchema = new Schema({
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    prompt:{
        type:String,
        required:[true , "Prompt required"]
    },
    tag:{
        type:String,
        required:[true , "Tag required"]
    }
})
const Prompt = models.Prompt || model("Prompt" , PromptSchema)

export default Prompt;
