import pool from "../db.config.js";

export const getAllProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.messsage });
  }
};

export const getSingleProducts = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await pool.query(`SELECT * FROM products WHERE id=$1`, [id]);
      if (result.rowCount === 0) {
        res.status(404).json({ success: false, message: "Product not found" });
      } else {
        res.status(200).json({ success: true, data: result.rows });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
};

export const createProducts = async (req, res) => {
    try {
        const productthumbnail = req.body.productthumbnail;
        const producttitle = req.body.producttitle;
        const productdescription = req.body.productdescription;
        const productcost = req.body.productcost;
        const onoffer = req.body.onoffer;

        const insert = await pool.query(
          "INSERT INTO products (productthumbnail, producttitle, productdescription, productcost, onoffer) VALUES ($1, $2, $3, $4, $5)",
          [productthumbnail, producttitle, productdescription, productcost, onoffer],
        );
        if (insert.rowCount === 1) {
          res
            .status(201)
            .json({ success: true, message: "Product created successfully" });
        }
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
};

export const updateProduct = async (req, res) => {
    const { productthumbnail, producttitle, productdescription, productcost, onoffer } = req.body;
    const id = req.params.id;
    try {
      let updateOperation;
      if (productthumbnail) {
        updateOperation = await pool.query(
          "UPDATE products SET productthumbnail = $1 WHERE id=$2",
          [first_name, id]
        );
      }
      if (producttitle) {
        updateOperation = await pool.query(
          "UPDATE products SET producttitle = $1 WHERE id=$2",
          [last_name, id]
        );
      }
      if (productdescription) {
        updateOperation = await pool.query(
          "UPDATE products SET productdescription = $1 WHERE id=$2",
          [email, id]
        );
      }
      if (productcost) {
        updateOperation = await pool.query(
          "UPDATE products SET productcost = $1 WHERE id=$2",
          [occupation, id]
        );
      }
      if (onoffer) {
        updateOperation = await pool.query(
          "UPDATE products SET onoffer = $1 WHERE id=$2",
          [avatar, id]
        );
      }
  
      if (updateOperation.rowCount === 1) {
        res
          .status(200)
          .json({ success: true, message: "Product updated successfully" });
      } else {
        res.status(400).json({ success: false, message: "Invalid product" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  
};

export const deleteProduct = async (req, res) => {
   const id = req.params.id;
  try {
    const deleteOperation = await pool.query("DELETE FROM products where id=$1", [
      id,
    ]);
    if (deleteOperation.rowCount === 1) {
      res
        .status(200)
        .json({ success: true, message: "product deleted successfully" });
    } else {
      res.status(400).json({ success: false, message: "Invalid product" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
