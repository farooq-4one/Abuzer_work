import { NextResponse } from "next/server";
import { db } from "@/db";
import { multiStepSubmissions } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const orders = await db
      .select()
      .from(multiStepSubmissions)
      .orderBy(desc(multiStepSubmissions.createdAt));

    return NextResponse.json(
      { success: true, data: orders },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
