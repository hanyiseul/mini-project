import Link from "next/link";
import { routes } from "@/shared/config/routes";

export default function nav() {
  return (
    <nav className="p-4 border-r">
      <ul>
        <li>
          <Link href={routes.works}>
            Dashboard
          </Link>
        </li>
        <li>
            <Link href={routes.works}>
              나의업무
            </Link>
        </li>
      </ul>
    </nav>
  )
}
