const express = require("express");
const router = express.Router();
const controller = require("../controllers/calendar.controller");

/**
 * @swagger
 * tags:
 *   name: Calendar
 *   description: Calendar Event API
 */

/**
 * @swagger
 * /api/calendar:
 *   post:
 *     summary: Create calendar event
 *     tags: [Calendar]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - date
 *               - duration
 *             properties:
 *               title:
 *                 type: string
 *                 example: Team Meeting
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2026-03-15
 *               duration:
 *                 type: string
 *                 example: 2 hours
 *     responses:
 *       201:
 *         description: Event created successfully
 */
router.post("/", controller.createEvent);

/**
 * @swagger
 * /api/calendar:
 *   get:
 *     summary: Get all calendar events
 *     tags: [Calendar]
 *     responses:
 *       200:
 *         description: List of all calendar events
 */
router.get("/", controller.getEvents);

/**
 * @swagger
 * /api/calendar/{id}:
 *   put:
 *     summary: Update calendar event
 *     tags: [Calendar]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               duration:
 *                 type: string
 *     responses:
 *       200:
 *         description: Event updated successfully
 */
router.put("/:id", controller.updateEvent);

/**
 * @swagger
 * /api/calendar/{id}:
 *   delete:
 *     summary: Delete calendar event
 *     tags: [Calendar]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event deleted successfully
 */
router.delete("/:id", controller.deleteEvent);

module.exports = router;