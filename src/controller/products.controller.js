import { json } from "express";
import { pool } from "../connections/connects.js";

export const getProducts = async(req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM AllItems;");
        if(rows.length <= 0) return res.status(404).json({
            title: "Database empty",
            error: "404",
            message: "No products in the database"
        })
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            title: "Server Error",
            error: "500",
            message: "Oh no, something goes wrong"
        })
    }
};

export const getProduc = async(req, res) => {
    try {
        console.log(req.params.id)
        const [rows] = await pool.query("CALL SearchById(?);", [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            title: "ID Request not found",
            error: "404",
            message: `The ID ${req.params.id}, does not exist in the database`
        });
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            title: "Server Error",
            error: "500",
            message: "Oh no, something goes wrong"
        });
    }
}

export const createProduct = async(req, res) => {
    try {
        const { productBrand, productName, productPrice, productPhoto, dateEntry, productDescription, idProductStatus, idProductDistributor, idReview, productQuantity, productAuthor, productFormat, productThemes, idProductGender, idClasification, idProduct } = req.body
        if (productBrand && productName && productPrice && productPhoto && dateEntry && productDescription && 
            idProductStatus && idProductDistributor && idReview && productQuantity && productAuthor && productFormat && 
            productThemes && idProductGender && idClasification &&  idProduct) {
                const [rows] = await pool.query("CALL Add_Product(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[productBrand, productName, productPrice, productPhoto, dateEntry, productDescription, idProductStatus, idProductDistributor, idReview, productQuantity, productAuthor, productFormat, productThemes, idProductGender, idClasification, idProduct])
                res.send({
                    id: rows.insertId,
                    productBrand, 
                    productName, 
                    productPrice, 
                    productPhoto, 
                    dateEntry, 
                    productDescription, 
                    idProductStatus, 
                    idProductDistributor, 
                    idReview, 
                    productQuantity, 
                    productAuthor, 
                    productFormat, 
                    productThemes, 
                    idProductGender, 
                    idClasification, 
                    idProduct
                });
                console.log('Post Success')
            } else {
                return res.status(500).json({
                    title: "Server Error",
                    error: "500",
                    message: "Oh no, something goes wrong"
                })
            }
    } catch (error) {
        return res.status(500).json({
            title: "Server Error",
            error: "500",
            message: "Oh no, something goes wrong"
        })
    }
}
