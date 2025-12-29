import { Table, type Column } from "@/shared/ui/table";

type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
};

const users: User[] = [
  {
    id: 1,
    name: "홍길동",
    email: "hong@test.com",
    role: "admin",
  },
  {
    id: 2,
    name: "김철수",
    email: "kim@test.com",
    role: "user",
  },
];

const columns: Column<User>[] = [
  { key: "id", header: "ID" },
  { key: "name", header: "이름" },
  { key: "email", header: "이메일" },
  {
    key: "role",
    header: "권한",
    render: (value) => <strong>{value}</strong>,
  },
];

export default function WorkPage() {
  return <Table<User> data={users} columns={columns} />;
}
