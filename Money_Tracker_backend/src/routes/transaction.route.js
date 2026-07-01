import { Router } from 'express';
import { createTransaction, findTransactions, spentTotal, deleteTransction } from '../controller/transactions.controller.js'
const router = Router()

router.route('/create').post(createTransaction)
router.route('/spendings/:type').get(findTransactions)
router.route('/total/:type').get(spentTotal)
router.route('/delete_transaction/:id').delete(deleteTransction)

export default router