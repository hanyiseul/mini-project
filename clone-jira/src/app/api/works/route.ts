import { NextResponse } from "next/server";
import { adminDb } from "@/firebase/firebaseAdmin";

export async function GET() {
  try {
    // works 컬렉션 전체 가져오기
    const qs = await adminDb.collection("works").get();

    const items = qs.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ ok: true, items });
  } catch (error: any) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }
}
