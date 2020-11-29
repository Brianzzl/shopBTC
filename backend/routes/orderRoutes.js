import express from 'express'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToDelivered,
  updateOrderToPaid,
} from '../controllers/orderController.js'

router.route('/').post(protect, addOrderItems)
router.route('/myorders').get(protect, getMyOrders)
// router.route('/:id').get(protect, getOrderById)
// router.route('/:id/pay').put(protect, updateOrderToPaid)
// router.route('/:id/deliver').put(protect, updateOrderToDelivered)
router.route('/id/:id').get(protect, getOrderById)
router.route('/id/:id/pay').put(protect, updateOrderToPaid)
router.route('/id/:id/deliver').put(protect, updateOrderToDelivered)

export default router
