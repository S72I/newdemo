import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

interface MyJwtPayload extends JwtPayload {
    role: string;
}

export const validateUser = (req: NextRequest) => {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new Error("Unauthorized: No token provided");
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string) as MyJwtPayload;

    if (decoded.role !== "admin") {
        throw new Error("Forbidden: Only admins can perform this action");
    }

    return decoded;
};
