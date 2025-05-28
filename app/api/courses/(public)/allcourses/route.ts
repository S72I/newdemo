import { getCourses } from "@/server/controllers/courses.controller";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try {
        const result = await getCourses(req);
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json({ err: (error as Error).message, status: 400 });
    }
}
