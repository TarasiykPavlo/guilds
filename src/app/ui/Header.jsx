"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
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
            <div className={"flex gap-3 px-2 "}>
                <Link href={"/retail"}>
                    <Image
                        src={"/war-within.jpg"}
                        alt="retail"
                        className={clsx(
                            "rounded-3xl",
                            pathname.includes("retail") === true
                                ? "opacity-100"
                                : "opacity-50"
                        )}
                        width={250}
                        height={250}
                    />
                </Link>
                <Link href={"/season"}>
                    <Image
                        src={"/season.jpg"}
                        alt="season"
                        width={250}
                        height={80}
                        className={clsx(
                            "rounded-3xl",
                            pathname.includes("season") === true
                                ? "opacity-100"
                                : "opacity-50"
                        )}
                    />
                </Link>
                <Link href={"/cataclysm"}>
                    <Image
                        src={"/wow-classic-cataclysm.webp"}
                        alt="cataclysm"
                        width={250}
                        height={80}
                        className={clsx(
                            "rounded-3xl",
                            pathname.includes("cataclysm") === true
                                ? "opacity-100"
                                : "opacity-50"
                        )}
                    />
                </Link>
                <Link href={"/era"}>
                    <Image
                        src={"/classic.webp"}
                        alt="era"
                        width={213}
                        height={80}
                        className={clsx(
                            "rounded-3xl",
                            pathname.includes("era") === true
                                ? "opacity-100"
                                : "opacity-50"
                        )}
                    />
                </Link>
            </div>
        </div>
    );
}
