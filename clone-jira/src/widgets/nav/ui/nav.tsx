import Link from "next/link";
import { routes } from "@/shared/config/routes";

export default function nav() {
  return (
    <nav className="p-4 border-r">
      <ul>
        <li>
          <Link href={'/dashbord'}>
            Dashboard
          </Link>
        </li>
        <li>
            <Link href={'/workList'}>
              나의업무
            </Link>
        </li>
      </ul>
    </nav>
  )
}
