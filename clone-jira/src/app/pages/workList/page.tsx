import { Table, type Column } from "@/shared/ui/table";
import Link from "next/link";

type User = {
  id: number;
  works: string;
  name: string;
  date: string;
  report: string;
  complate: string; 
};

const users: User[] = [
  {
    id: 1,
    works: "업무",
    name: "홍길동",
    date: "2025년 12월 29일 오후 16:55",
    report: "김철수",
    complate: "해결",
  },
];

const columns: Column<User>[] = [
  { key: "id", header: "ID" },
  { key: "works", header: "업무" },
  { key: "name", header: "이름" },
  { key: "date", header: "날짜" },
  { key: "report", header: "보고자" },
  { key: "complate", header: "상태" },
];

export default function WorkPage() {
  return(
    <>
      <Table<User> data={users} columns={columns} />
      <div className="flex justify-end p-4">
        <Link href="/pages/workForm" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          새 업무 추가
        </Link>
      </div>
    </>
  )
}
