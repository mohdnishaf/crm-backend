/**
 * @swagger
 * tags:
 *   name: Vacations
 *   description: Vacation management
 */
const express = require('express');
const router = express.Router();

const controller = require('../controllers/vacationController');

router.post('/', controller.createVacation);
/**
 * @swagger
 * /api/vacations:
 *   post:
 *     summary: Create a vacation
 *     tags: [Vacations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               employeeName:
 *                 type: string
 *               fromDate:
 *                 type: string
 *               toDate:
 *                 type: string
 *               reason:
 *                 type: string
 *     responses:
 *       201:
 *         description: Vacation created
 */

router.get('/', controller.getVacations);
/**
 * @swagger
 * /api/vacations:
 *   get:
 *     summary: Get all vacations
 *     tags: [Vacations]
 *     responses:
 *       200:
 *         description: List of vacations
 */

router.put('/:id', controller.updateVacation);
/**
 * @swagger
 * /api/vacations/{id}:
 *   put:
 *     summary: Update a vacation
 *     tags: [Vacations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Updated
 */

router.delete('/:id', controller.deleteVacation);
/**
 * @swagger
 * /api/vacations/{id}:
 *   delete:
 *     summary: Delete a vacation
 *     tags: [Vacations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted
 */
module.exports = router;