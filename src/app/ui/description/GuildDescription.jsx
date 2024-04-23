import Image from "next/image";
import Link from "next/link";
import discord from "../../../../public/discord-outline.svg";
import wcl from "../../../../public/WCL.png";
export default function GuildDescription({ guild }) {
    return (
        <div className="flex w-full h-fit sm:space-x-10 flex-col-reverse sm:flex-row justify-between align-middle">
            <div className="flex flex-col justify-center items-center">
                {/* <h3 className="text-xl pb-2">{guild.guildName}</h3> */}
                <div>
                    {guild.guildDescription.split("\n").map((text, index) => (
                        <p
                            className="p-1"
                            key={index}
                        >
                            {text}
                        </p>
                    ))}
                </div>
            </div>
            <div className="flex flex-col space-y-3 items-center">
                <Link
                    href={guild.guildLinkWlogs}
                    className="h-[40px] w-[180px] bg-green-400 py-3 px-6  rounded-3xl text-center flex items-center hover:bg-green-200  space-x-3"
                >
                    <Image
                        alt="Warcraftlogs"
                        src={wcl}
                        width={25}
                        height={25}
                    ></Image>
                    <p>Warcraftlogs</p>
                </Link>
                <Link
                    href={guild.guildLinkDiscord}
                    className="h-[40px] bg-blue-400 py-3 px-6 w-[180px] rounded-3xl text-center items-center flex-row flex hover:bg-blue-200  space-x-3"
                >
                    <Image
                        alt="Discord"
                        src={discord}
                        width={25}
                        height={25}
                    ></Image>
                    <p>Discord</p>
                </Link>
            </div>
        </div>
    );
}
