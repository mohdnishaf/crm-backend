const Employee = require("../models/employee");

// CREATE (Insert)
exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ (Get all)
exports.getEmployees = async (req, res) => {
  const employees = await Employee.find().sort({ createdAt: -1 });
  res.json(employees);
};

// READ (Get single)
exports.getEmployeeById = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
};

// UPDATE
exports.updateEmployee = async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(employee);
};

// DELETE
exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee deleted" });
};
