"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// fileName: userRoutes.ts
const express_1 = require("express");
// Create a new router instance
const messageRouter = (0, express_1.Router)();
// Define a route for the root path
messageRouter.get('/', (req, res) => {
    res.send('this is messagery route');
});
messageRouter.get('/:id', (req, res) => {
    const messageId = req.params.id; // Access path parameter
    res.send(`Message ID: ${messageId}`); // Respond with user ID
});
// Export the router module so that it can be used in other files
exports.default = messageRouter;
//# sourceMappingURL=messageRoutes.js.map