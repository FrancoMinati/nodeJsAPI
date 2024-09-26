"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userService_1 = require("../../../service/user/userService");
// Create a new router instance
const userRouter = (0, express_1.Router)();
// Controller example using both
userRouter.post('/save', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body; // Access request body
    console.log(data);
    console.log(req.body);
    try {
        const newUser = yield (0, userService_1.createUserService)(data);
        res.status(201).json({
            user: newUser,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user', error });
    }
}));
exports.default = userRouter;
//# sourceMappingURL=userRoutes.js.map