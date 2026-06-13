import { Transaction } from "../models/transaction.model.js";

const createTransaction = async (req, res) => {
  try {
    const { type, price } = req.body;
    if (!type || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const addingTransaction = await Transaction.create({
      type: type,
      price: price,
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
    const { type } = req.params;

    let findTransactions;

    if (type === "all") {
      findTransactions = await Transaction.find({});
    } else {
      findTransactions = await Transaction.find({ type: type });
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
    const { type } = req.params;
    let total = 0;

    if (type === "all") {
      const allTransactions = await Transaction.find({});

      if (allTransactions) {
        for (let i = 0; i < allTransactions.length; i++) {
          if(allTransactions[i].type != income){
            total += allTransactions[i].price;
          }
        }
      }
    }   else {
        const allTransactions = await Transaction.find({type: type});

        if(allTransactions){
            for(let i = 0;i < allTransactions.length;i++){
                if(allTransactions[i].type != income){
                total += allTransactions[i].price}
            }
        }
    }
    if (total != 0){
        return res.status(200).json({ total: total });
    }

    res.status(400).json({ message: "Oops! Something went wrong" });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};

const incomeMoney = async(req, res) => {
    try {
        const { ammount } = req.body

        if(!ammount){
            return res.status(400).json({ message:"Ammount of money is required" })
        }

        const addingMoney = await Transaction.create({type: "income", price: ammount })
        if(addingMoney){
            return res.status(200).json({ massage: "Nice job partner!" })
        }

        res.status(400).json({ message: "Oops! Something went wrong" })
    }   catch (error) {
        res.status(500).json({ message: `Server Error: ${error}` })
    }
}

const deleteTransction = async(req, res) => {
    try{
        const {id} = req.params

        const deleting = await Transaction.findByIdAndDelete({ _id: id })
    
        if(deleting) {
            return res.status(200).json({ message: "Transaction deleted successfully" })
        }

        res.status(400).json({ message: "Opps! Seems like id doesnt match with any other ids" })
    }   catch (error) {
        res.status(500).json({ message: `Server Error: ${error}` })
    }
}

export { createTransaction, findTransactions, spentTotal, deleteTransction };
