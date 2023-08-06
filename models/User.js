import mongoose from "mongoose";
const {Schema} = mongoose;

const UserSchema = new Schema ({
    name : { 
        type : String,
        required : true,
    },
    email : { 
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    avatar: {
        data : {type: Buffer,},
        contentType: {type: String},
    },
    admin : {
        type : Boolean,
        required : false,
    },
    role : {
        type : String,
        required : false,
    },
    priority : {
        type : String,
        required : false,
    },
    conf_seq_num : {
        type : Number,
        required : false,
    },
});

const User = mongoose.model("users", UserSchema);

export default User;