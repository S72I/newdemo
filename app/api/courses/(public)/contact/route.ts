import { contact } from "@/server/controllers/courses.controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {

        const body = await req.json();
        const result = await contact(req, body);
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json({ err: (error as Error).message, status: 400 });
    }
}