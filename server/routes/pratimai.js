import express from 'express'
import * as controller from '../controllers/controller.js'
import requireAuth from '../middleware/requireAuth.js'

const router = express.Router()
router.use(requireAuth)

router.get('/', controller.getWorkouts)
router.get('/:id', controller.getWorkout)
router.post('/', controller.createWorkout)
router.delete('/:id', controller.deleteWorkout)
router.patch('/:id', controller.updateWorkout)

export default router