"use client";

import { Table, type Column } from "@/shared/ui/table";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Work = {
  id: number | string;
  works?: string;
  name?: string;
  date?: string;
  report?: string;
  complate?: string;
};

const columns: Column<Work>[] = [
  // { key: "id", header: "ID" },
  { key: "works", header: "업무" },
  { key: "name", header: "이름" },
  { key: "date", header: "날짜" },
  { key: "report", header: "보고자" },
  { key: "complate", header: "상태" },
];

export default function WorkPage() {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const res = await axios.get('/api/works');
        if (res.data.ok) {
          setWorks(res.data.items);
        }
      } catch (error) {
        console.error('Error fetching works:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchWorks();
  }, []);

  if(loading) return <div>Loading...</div>;
  return(
    <>
      <div className="m-10">
        
        <Table<Work> data={works} columns={columns} onRowClick={(row) => {
          router.push(`/workForm?id=${row.id}`)
        }}/>
        <div className="flex justify-end p-4">
          <Link href="/workForm" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            새 업무 추가
          </Link>
        </div>
      </div>
    </>
  )
}
