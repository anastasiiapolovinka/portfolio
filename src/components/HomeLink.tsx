import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

const HomeLink = () => {
   return (
      <Link href="/" className="fixed flex flex-col items-center border-2 text-slate-700 border-slate-500 p-1 ml-2 mt-2 rounded-2xl hover:bg-slate-200 text-xs">
         <AiOutlineHome /> Home
      </Link>
   )
}

export default HomeLink;