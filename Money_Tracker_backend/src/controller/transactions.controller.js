import { Transaction } from "../models/transaction.model.js";
import jwt from "jsonwebtoken";

const createTransaction = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "No token" });
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const { type, price } = req.body;
    if (!type || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userId = jwt.verify(token, process.env.JWT_SECRET);

    const addingTransaction = await Transaction.create({
      type: type,
      price: price,
      userId: userId._id,
    });
    if (addingTransaction) {
      return res
        .status(201)
        .json({ message: "Transaction created Successfully" });
    }

    res.status(400).json({ message: "Oops! Something went wrong" });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};

const findTransactions = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "No token" });
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const userId = jwt.verify(token, process.env.JWT_SECRET);

    const { type } = req.params;

    let findTransactions;

    if (type === "all") {
      findTransactions = await Transaction.find({ userId: userId._id });
    } else {
      findTransactions = await Transaction.find({
        type: type,
        userId: userId._id,
      });
    }

    if (findTransactions) {
      return res.status(200).json({ message: findTransactions, code: true });
    }

    res.status(400).json({ message: "Nothing found" });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};

const spentTotal = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "No token" });
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const userId = jwt.verify(token, process.env.JWT_SECRET);

    const { type } = req.params;
    let total = 0;

    if (type === "all") {
      const allTransactions = await Transaction.find({ userId: userId._id });

      if (allTransactions) {
        for (let i = 0; i < allTransactions.length; i++) {
          if (allTransactions[i].type != "income") {
            total += allTransactions[i].price;
          }
        }
      }
    } else {
      const allTransactions = await Transaction.find({
        type: type,
        userId: userId._id,
      });

      if (allTransactions) {
        for (let i = 0; i < allTransactions.length; i++) {
          if (allTransactions[i].type != "income") {
            total += allTransactions[i].price;
          }
        }
      }
    }
    if (total != 0) {
      return res.status(200).json({ total: total });
    }

    res.status(400).json({ message: "Oops! Something went wrong" });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};

const deleteTransction = async (req, res) => {
  try {

    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "No token" });
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const userId = jwt.verify(token, process.env.JWT_SECRET);

    const { id } = req.params;

    const deleting = await Transaction.findByIdAndDelete({ _id: id, userId: userId._id });

    if (deleting) {
      return res
        .status(200)
        .json({ message: "Transaction deleted successfully" });
    }

    res
      .status(400)
      .json({ message: "Opps! Seems like id doesnt match with any other ids" });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};

export { createTransaction, findTransactions, spentTotal, deleteTransction };
