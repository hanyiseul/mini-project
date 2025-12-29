import { Button } from "@/shared/ui/button"

export default function nav() {
  return (
    <nav className="p-4 border-r">
      <ul>
        <li><Button>대시보드</Button></li>
        <li><Button>나의 업무</Button></li>
      </ul>
    </nav>
  )
}
