import ErrorHandler from "../error/error.js";

import {Reservation} from "../models/reservationSchema.js";
// export const Reservation = mongoose.model("Reservation",reservationSchema);
//aisa hai models me,isliye{}

//routes me use kiye
export const sendReservation = async (req, res,next) => {
    const {firstName, lastName, email, phone, time, date} = req.body;
    
    if(!firstName ||!lastName ||!email ||!phone ||!time ||!date){
        return next(new ErrorHandler("Please provide all the required fields", 400));
    }
    //if all field present
    try{
        await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            time,
            date
        });
        res.status(200).json({
            success: true,
            message: "Reservation sent successfully"
        })
    }catch(error){
        if(error.name === "ValidationError"){
            const ValidationErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(ValidationErrors.join(" , "), 400));
        }
        else{
            return next(new ErrorHandler("Something went wrong", 500));
        }
    }
}