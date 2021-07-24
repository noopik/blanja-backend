const express = require('express');
const {
  createItemTransaction,
  getAllTransaction,
  updateItemTransaction,
  getItemTransaction,
} = require('../controllers/transactionController');
const { verifyAccess, superAccess } = require('../middleware/auth');
const router = express.Router();

router
  .get('/', verifyAccess, superAccess, getAllTransaction)
  .post('/', verifyAccess, superAccess, createItemTransaction)
  .get('/:id', verifyAccess, superAccess, getItemTransaction)
  .post('/:id', updateItemTransaction, verifyAccess, superAccess)
  .delete('/:id');

module.exports = router;