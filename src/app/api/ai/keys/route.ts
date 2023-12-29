import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

connect()

export async function GET() {
    return NextResponse.json({
        message: "under dev",
        success: true,
    })
}

export async function POST(request: NextRequest) {
    return NextResponse.json({
        message: "under dev",
        success: true,
    })
}

