import { NextFunction, Request, Response } from "express";

interface BusinessLogic {
    (req: Request, res: Response, next: NextFunction): any;
}

export { BusinessLogic };