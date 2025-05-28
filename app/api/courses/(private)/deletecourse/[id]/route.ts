import { deleteCourse } from "@/server/controllers/courses.controller";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const result = await deleteCourse(request, id);
        return NextResponse.json(result, { status: result.status });
    } catch (error) {
        return NextResponse.json({ err: error, status: 400 });
    }
}
