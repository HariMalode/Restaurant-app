import express from "express";

class ErrorHandler extends Error {
    //Error ek bydef JS ki class hai
    constructor(message, statusCode) {
        super(message); 
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Something went wrong";
    err.statusCode = err.statusCode || 500;

    return res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}

export default ErrorHandler;
//to use this in app.js and controller