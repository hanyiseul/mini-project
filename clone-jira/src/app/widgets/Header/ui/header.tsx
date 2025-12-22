import { Button } from "@/app/shared/ui/button"

export default function Header() {

  return (
    <header>
      <div className="flex justify-between items-center p-4 border-b">
          <div>
            <h1>Clone JIRA</h1>
          </div> 
          <div className="">
            <ul className="flex items-center gap-4">
              <li><Button>notice</Button></li>
              <li><Button>setting</Button></li>
              <li><Button>profile</Button></li>
            </ul>
        </div>
      </div>
    </header>
  )
}
