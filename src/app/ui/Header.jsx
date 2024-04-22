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
            <div className="flex gap-3 px-2">
                <Link href={"/retail"}>
                    <Image
                        src={"/war-within.jpg"}
                        alt="retail"
                        className="rounded-3xl"
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
                        className="rounded-3xl"
                    />
                </Link>
                <Link href={"/cataclysm"}>
                    <Image
                        src={"/wow-classic-cataclysm.webp"}
                        alt="cataclysm"
                        width={250}
                        height={80}
                        className="rounded-3xl"
                    />
                </Link>
                <Link href={"/era"}>
                    <Image
                        src={"/classic.webp"}
                        alt="era"
                        width={213}
                        height={80}
                        className="rounded-3xl"
                    />
                </Link>
            </div>
        </div>
    );
}
