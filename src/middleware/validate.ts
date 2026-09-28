import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

const validate =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Validation error",
          errors: error.issues,
        });
      }

      return res.status(500).json({ message: "Internal server error" });
    }
  };

export default validate;
