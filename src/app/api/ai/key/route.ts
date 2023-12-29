import { NextRequest, NextResponse } from "next/server";
import Key from "@/models/keyModel"
import { connect } from "@/dbConfig/dbConfig";
import { validate } from "@/helpers/validate";

connect()

export async function GET() {
    try {
        const keys = await Key.find().sort({ hit: 1 });
        for (const key of keys) {
            try {
                const isValid = await validate(key.apikey);
                if (isValid) {
                    await Key.findOneAndUpdate({ _id: key._id }, { $inc: { hit: 1 } });
                    return NextResponse.json({
                        success: true,
                        apikey: key.apikey
                    });
                }
            } catch (err) {

            }
        }
        return NextResponse.json({
            success: false,
            error: 'No valid API keys present',
        }, { status: 404 });

    } catch (err) {

    }
}

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()

        const { apikey, secret } = reqBody

        const key = await Key.findOne({ apikey: apikey })
        if (secret != process.env.SECRET) {
            return NextResponse.json({ error: "Secret key do not match" }, { status: 400 })
        }
        if (key) {
            return NextResponse.json({ error: "Api key already exists" }, { status: 400 })
        }
        const isValid = await validate(apikey);
        if (!isValid) {
            return NextResponse.json({
                message: "Invalid api key",
                success: false
            }, { status: 400 })
        }
        const newKey = new Key({
            apikey
        })

        const savedKey = await newKey.save()

        return NextResponse.json({
            message: "Api key saved successfully",
            success: true,
            savedKey
        })
    } catch (err) {

    }
}

