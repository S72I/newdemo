import { getUserCourseById } from "@/server/controllers/courses.controller";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const result = await getUserCourseById(req, params.id);        
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json({ err: error, status: 400 });
    }
}
   