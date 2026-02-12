<<<<<<< HEAD
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

function setupSwagger(app) {
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'CRM Backend API',
        version: '1.0.0',
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
    apis: ['./routes/*.js'], // reads swagger comments from routes
  };

  const swaggerSpec = swaggerJsdoc(options);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
=======
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
>>>>>>> 34bbefa9d746eb0963146424b3cf50b5c9b58f07
