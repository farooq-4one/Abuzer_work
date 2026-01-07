import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { multiStepSubmissions } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      email,
      country,
      address,
      city,
      state,
      zip,
      bank,
      companyName,
      payrollOption,
      depositDate,
      depositAmount,
      endingBalance,
      accountNumber,
      howMany,
      paymentOption,
    } = body ?? {};

    if (
      !name ||
      !phone ||
      !email ||
      !country ||
      !address ||
      !city ||
      !state ||
      !zip ||
      !bank ||
      !companyName ||
      !payrollOption ||
      !depositDate ||
      !depositAmount ||
      !endingBalance ||
      !howMany ||
      !paymentOption
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    const [inserted] = await db
      .insert(multiStepSubmissions)
      .values({
        name,
        phone,
        email,
        country,
        address,
        city,
        state,
        zip,
        bank,
        companyName,
        payrollOption,
        depositDate,
        depositAmount,
        endingBalance,
        accountNumber: accountNumber || null,
        howMany,
        paymentOption,
      })
      .returning();

    return NextResponse.json(
      { success: true, data: inserted },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error in /api/submit-form:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

