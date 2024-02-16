import path from "path";
import app from "./app.js";
import express from "express";

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "Frontend/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
})

app.listen(process.env.PORT ,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    
});