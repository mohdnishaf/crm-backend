const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CRM Employee API",
      version: "1.0.0",
      description: "Employee CRUD APIs for CRM Project"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./routes/*.js"] // VERY IMPORTANT
};

module.exports = swaggerJSDoc(options);
