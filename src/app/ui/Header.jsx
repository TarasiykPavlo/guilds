import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex-col flex items-center">
            <Link
                href="/"
                className="flex-row flex w-full xl:w-[30rem] justify-center h-12 items-center  text-xl text-nowrap  text-center hover:bg-slate-600 rounded-lg"
            >
                <Image
                    src="/WoWicon.svg"
                    alt="WoW"
                    width={24}
                    height={24}
                ></Image>

                <h1>Українські гільдії World of Warcraft</h1>
            </Link>

            <div className="h-fit  w-full p-1 rounded-lg  flex  justify-center ">
                <div className="flex w-full justify-center 2xl:w-[80rem] space-x-10 bg-slate-400 rounded-lg p-5">
                    <Link
                        href="/Horde"
                        className="hover:bg-slate-500 rounded-full"
                    >
                        <Image
                            src="/horde.svg"
                            alt="Horde"
                            width={100}
                            height={100}
                        />
                    </Link>
                    <Link
                        href="/Alliance"
                        className="hover:bg-slate-500 rounded-full"
                    >
                        <Image
                            src="/alliance.svg"
                            alt="Alliance"
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
