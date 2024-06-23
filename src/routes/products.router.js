import { Router } from "express";
const router = Router();

router.get("/", (req, res) =>{
    res.send("get all products")
})

router.post("/", (req, res) =>{
    res.send("creating a products")
})

router.patch("/", (req, res) =>{
    res.send("updating products")
})

router.delete("/", (req, res) =>{
    res.send("deleting products")
})

export default router