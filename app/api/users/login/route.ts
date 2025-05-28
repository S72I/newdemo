import { login } from "@/server/controllers/users.controller";
import DBConnection from "@/server/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await DBConnection();
        const body = await request.json();

        if (!body.email || !body.password) {
            return NextResponse.json({ error: "Both email and password are required" }, { status: 400 });
        }

        const result = await login(body);

        if (result) {
            return NextResponse.json(result, { status: 200 });
        } else {
            return NextResponse.json({ error: result }, { status: 400 });
        }

    } catch (error) {
        return NextResponse.json({ error: error || "An unexpected error occurred" }, { status: 500 });
    }
}