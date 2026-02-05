import { NextResponse } from "next/server";

// GET request of route localhost:3000/api/user
export async function GET() {
  return NextResponse.json({ author: "Pratik", id: 1 });
}