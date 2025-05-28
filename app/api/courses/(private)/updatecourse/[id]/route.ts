import { updateCourse } from "@/server/controllers/courses.controller";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const courseData = await request.json();

        const result = await updateCourse(request, id, courseData);

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json({ err: (error as Error).message, status: 400 });
    }
}
