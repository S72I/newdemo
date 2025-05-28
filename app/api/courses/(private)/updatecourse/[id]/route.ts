import { updateCourse } from "@/server/controllers/courses.controller";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const courseData = await request.json();
        const id = params.id;

        const result = await updateCourse(request, id, courseData);

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json({ err: (error as Error).message, status: 400 });
    }
}
