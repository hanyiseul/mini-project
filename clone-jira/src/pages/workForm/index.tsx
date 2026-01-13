"use client";

import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function WorkPage() {

  // 타입 명시
  type Work = {
    works?: string;
    name?: string;
    date?: string;
    report?: string;
    complate?: string;
  };

  // input값 비어있을 때 대비
  const [form, setForm] = useState<Work>({
    works: "",
    name: "",
    date: "",
    report: "",
    complate: "",
  });

  const FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_projectId; // .env 파일에 설정된 Firebase 프로젝트 ID
  const FIREBASE_API_KEY = process.env.NEXT_PUBLIC_apiKey; // .env 파일에 설정된 Firebase api키

  // db 주소
  const FIRESTORE_BASE_URL = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/works`;

  function workCreate(post: Work) {
    return {
      fields: {
        works: { stringValue: post.works ?? "" },
        name: { stringValue: post.name ?? "" },
        date: { stringValue: post.date ?? "" },
        report: { stringValue: post.report ?? "" },
        complate: { stringValue: post.complate ?? "" },
      },
    };
  }

  // 등록값 보내기
  async function createPost(post: Work) {
    const res = await axios.post(
      `${FIRESTORE_BASE_URL}?key=${FIREBASE_API_KEY}`,
      workCreate(post)
    );
    return res.data;
  }

  
  async function updatePost(post: Work) {
    const res = await axios.patch(
      `${FIRESTORE_BASE_URL}/${id}?key=${FIREBASE_API_KEY}`,
      workCreate(post)
    );
    return res.data;
  }

  // 상세페이지
  const router = useRouter();
  const {id} = router.query;
  useEffect(() => {
    if (!id || typeof id !== "string") return; // id 없으면(신규 작성) 아무것도 안 함

    const fetchWork = async () => {
      try {
        const res = await axios.get(
          `${FIRESTORE_BASE_URL}/${id}?key=${FIREBASE_API_KEY}`
        );

        const data = res.data.fields;

        console.log(router.query);

        setForm({
          works: data.works?.stringValue ?? "",
          name: data.name?.stringValue ?? "",
          date: data.date?.stringValue ?? "",
          report: data.report?.stringValue ?? "",
          complate: data.complate?.stringValue ?? "",
        });
      } catch (error) {
        console.error("문서 조회 중 오류:", error);
      }
    };

    fetchWork();
  }, [id]);

  // input value 값 변경된 값 인식
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // 추가 버튼 누르면 값 보내기
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (id && typeof id === "string") {
      await updatePost(form);
      console.log("수정 완료:", form);
    } else {
      await createPost(form);
      console.log("등록 완료:", form);
    }
    router.push("/workList");
  };


  // 삭제
  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault(); // form submit 막기
    if(!id || typeof id !== "string") return;

    try{
      await axios.delete(
        `${FIRESTORE_BASE_URL}/${id}?key=${FIREBASE_API_KEY}`
      );
      router.push("/workList");
      
    }catch (error) {
      console.error("삭제 중 오류:", error);
    }
  }

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <Label htmlFor="works">제목</Label>
        <Input id="works" type="text" onChange={handleChange} value={form.works ?? ""}/>
      </div>
      <div className="mb-4">
        <Label htmlFor="name">담당자</Label>
        <Input id="name" type="text" onChange={handleChange} value={form.name ?? ""}/>
      </div>
      <div className="mb-4">
        <Label htmlFor="date">날짜</Label>
        <Input id="date" type="date" onChange={handleChange} value={form.date ?? ""}/>
      </div>
      <div className="mb-4">
        <Label htmlFor="report">보고자</Label>
        <Input id="report" type="text" onChange={handleChange} value={form.report ?? ""}/>
      </div>
      <div className="mb-4">
        <Label htmlFor="complate">상태</Label>
        <Input id="complate" type="text" onChange={handleChange} value={form.complate ?? ""}/>
      </div>

      <div className="flex items-center justify-end gap-1">
        {id && (
          <button
            className="bg-white border border-gray-400 hover:bg-white-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" onClick={handleDelete}
          >
            삭제
          </button>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit" onClick={handleSubmit}
        >
          {id ? "수정" : "추가"}
        </button>
      </div>
    </form>
  );
}
