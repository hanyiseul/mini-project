import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export default function WorkPage() {
  return(
    <>
        <form className="p-4">
            <div className="mb-4">
                <Label htmlFor="title">제목</Label>
                <Input id="title" type="text" />
            </div>  
            <div className="mb-4">  
                <Label htmlFor="name">담당자</Label>
                <Input id="name" type="text" />
            </div>
            <div className="mb-4">  
                <Label htmlFor="date">날짜</Label>
                <Input id="date" type="date" />
            </div>
            <div className="mb-4">  
                <Label htmlFor="reporter">보고자</Label>
                <Input id="reporter" type="text" />
            </div>
            <div className="mb-4">  
                <Label htmlFor="complete">상태</Label>
                <Input id="complete" type="text" />
            </div>

            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    추가
                </button>
            </div>
        </form>
    </>
  )
}
