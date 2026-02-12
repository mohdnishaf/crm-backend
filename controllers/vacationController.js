const Vacation = require('../models/Vacation');

// Create
exports.createVacation = async (req, res) => {
  try {
    const vacation = await Vacation.create(req.body);
    res.status(201).json(vacation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all
exports.getVacations = async (req, res) => {
  try {
    const vacations = await Vacation.find();
    res.json(vacations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateVacation = async (req, res) => {
  try {
    const vacation = await Vacation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(vacation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete
exports.deleteVacation = async (req, res) => {
  try {
    await Vacation.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
