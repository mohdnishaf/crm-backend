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
 *       properties:
 *         name:
 *           type: string
 *         mail:
 *           type: string
 *         gender:
 *           type: string
 *         dob:
 *           type: string
 *         designation:
 *           type: string
 *         level:
 *           type: string
 *         status:
 *           type: string
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
 *         description: Employee created
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
 *     responses:
 *       200:
 *         description: Employee updated
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
 *         description: Employee deleted
 */
router.delete("/:id", controller.deleteEmployee);

module.exports = router;
