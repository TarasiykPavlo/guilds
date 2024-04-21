import Image from "next/image";
import Link from "next/link";
import discord from "../../../../public/discord-outline.svg";
import wcl from "../../../../public/WCL.png";
export default function GuildDescription() {
    return (
        <div className="flex w-full h-fit sm:space-x-10 flex-col-reverse sm:flex-row justify-center align-middle">
            <div className="flex flex-col justify-center items-center">
                <h3>guildName</h3>
                <p>
                    guildDescription Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi sint reprehenderit sequi est aut
                    aspernatur, nesciunt, quod ratione corrupti eveniet, minima similique eos necessitatibus dignissimos labore quasi
                    excepturi delectus in.
                </p>
            </div>
            <div className="flex flex-col space-y-3 items-center">
                <Link
                    href={"/"}
                    className="h-[40px] w-[180px] bg-green-400 py-3 px-6  rounded-3xl text-center flex items-center hover:bg-green-200  space-x-3"
                >
                    <Image
                        alt="Warcraftlogs"
                        src={wcl}
                        width={25}
                        height={25}
                    ></Image>
                    <p>guildLinkWlogs</p>
                </Link>
                <Link
                    href={"/"}
                    className="h-[40px] bg-blue-400 py-3 px-6 w-[180px] rounded-3xl text-center items-center flex-row flex hover:bg-blue-200  space-x-3"
                >
                    <Image
                        alt="Discord"
                        src={discord}
                        width={25}
                        height={25}
                    ></Image>
                    <p>guildLinkDiscord</p>
                </Link>
            </div>
        </div>
    );
}
