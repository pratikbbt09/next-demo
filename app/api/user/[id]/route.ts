import { NextRequest, NextResponse } from "next/server";

// GET request of route localhost:3000/api/user/[id]
export async function GET(request: NextRequest, { params }: { params: Promise<{id: string}> }) {
    const {id} = await params;
  return NextResponse.json({ author: "Pratik", userId: id });
}