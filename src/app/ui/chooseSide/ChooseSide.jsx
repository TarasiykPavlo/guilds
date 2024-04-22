"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ChooseSide(params) {
    const pathname = usePathname();
    let path = "";
    if (pathname.length >= 2) {
        if (pathname.includes("era")) {
            path = "/era";
        }
        if (pathname.includes("cataclysm")) {
            path = "/cataclysm";
        }
        if (pathname.includes("retail")) {
            path = "/retail";
        }
        if (pathname.includes("season")) {
            path = "/season";
        }
    }

    return (
        <div className="  w-full  rounded-lg  flex  justify-center ">
            <div className="flex w-full justify-center  2xl:w-[80rem] space-x-10  rounded-lg p-5">
                <Link
                    href={`${path}/Horde`}
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
                    href={`${path}/Alliance`}
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
    );
}
