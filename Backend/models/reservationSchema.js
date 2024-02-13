import express from "express";
import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:[3,"First Name must be atleast 3 characters long"],
        maxlength:[30,"First Name must be less than 30 characters long"]
    },
    lastName:{
        type:String,
        required:true,
        minlength:[3,"Last Name must be atleast 3 characters long"],
        maxlength:[30,"Last Name must be less than 30 characters long"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    phone:{
        type:String,
        required:true,
        unique:true,
        minlength:[10,"Phone number must be atleast 10 digits long"],
        maxlength:[10,"Phone number must be less than 10 digits long"]
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
    }
)

export const Reservation = mongoose.model("Reservation",reservationSchema);
// to access: import {Reservation} from "../models/reservationSchema.js";

// export default mongoose.model("Reservation",reservationSchema);
//  to accesss: import Reservation from "../models/reservationSchema.js";

// //Reservation name ka model hai, reservationSchema ka object hai, now use this in controller