const express = require("express");
const router = express.Router();
const controller = require("../controllers/employee.controller");

/**
 * @swagger
 * tags:
 *   name: Employee
 *   description: Employee Management APIs
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - name
 *         - mail
 *         - gender
 *         - birthday
 *         - position
 *         - level
 *       properties:
 *         name:
 *           type: string
 *           example: Musaddik
 *         mail:
 *           type: string
 *           example: musaddik@mail.com
 *         gender:
 *           type: string
 *           enum: [male, female, other]
 *           example: male
 *         birthday:
 *           type: string
 *           format: date
 *           example: 1998-05-20
 *         position:
 *           type: string
 *           example: Software Developer
 *         level:
 *           type: string
 *           enum: [junior, mid, senior]
 *           example: junior
 *         fullAge:
 *           type: number
 *           example: 27
 *           readOnly: true
 */

/**
 * @swagger
 * /api/employees:
 *   post:
 *     summary: Create employee
 *     tags: [Employee]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       201:
 *         description: Employee created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 */
router.post("/", controller.createEmployee);

/**
 * @swagger
 * /api/employees:
 *   get:
 *     summary: Get all employees
 *     tags: [Employee]
 *     responses:
 *       200:
 *         description: Employee list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */
router.get("/", controller.getEmployees);

/**
 * @swagger
 * /api/employees/{id}:
 *   put:
 *     summary: Update employee
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: Employee updated successfully
 */
router.put("/:id", controller.updateEmployee);

/**
 * @swagger
 * /api/employees/{id}:
 *   delete:
 *     summary: Delete employee
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 */
router.delete("/:id", controller.deleteEmployee);

module.exports = router;