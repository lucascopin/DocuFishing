import Link from "next/link";
import {HiArrowLeft} from "react-icons/hi";

export default function Lacs() {
    return (
        <div className={"flex items-center justify-center h-screen"}>
            <Link key={"back"}
                  href="/"
                  className="fixed top-2 left-2 rounded-full p-2 hover:bg-gray-800">
                <HiArrowLeft className={"w-5 h-5"}/>
            </Link>
            <div className={"flex-col items-center justify-center border rounded-2xl border-gray-700 pt-6 pb-6 pr-10 pl-10 "}>
                <h1 className={"text-center"}>DocuFishing</h1>
                <div className="flex items-center justify-center w-full">
                    <form className={"focus:ring-2 focus:outline-none focus:ring-blue-500"}>
                        <input
                            type="text"
                            placeholder="Rechercher un lac"
                            className="p-2 bg-white text-gray-800 rounded-l-full"
                        />
                        <button type={"submit"} className={"bg-blue-600 p-2 h-full rounded-r-full"}>Chercher</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
