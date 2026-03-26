const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CRM API",
      version: "1.0.0",
      description: "CRM Backend API Documentation",
    },
    servers: [
      {
        url: "https://crm-backend-2yi4.onrender.com",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;