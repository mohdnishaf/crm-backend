const express = require("express");
const router = express.Router();
const controller = require("../controllers/calendar.controller");
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
 *             properties:
 *               title:
 *                 type: string
 *                 example: Team Meeting
 *               description:
 *                 type: string
 *                 example: Discuss project updates
 *               date:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-02-12T10:00:00Z
 *               startTime:
 *                 type: string
 *                 example: 10:00 AM
 *               endTime:
 *                 type: string
 *                 example: 11:00 AM
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
 *     responses:
 *       200:
 *         description: Event updated
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
 *     responses:
 *       200:
 *         description: Event deleted
 */
router.delete("/:id", controller.deleteEvent);

module.exports = router;
