import Link from "next/link";

export default function GuildDescription() {
    return (
        <div className="flex w-full h-fit space-x-10">
            <div className="flex flex-col">
                <h3>guildName</h3>
                <p>guildDescription</p>
            </div>
            <div className="flex flex-col space-y-3">
                <Link
                    href={"/"}
                    className="h-fit bg-green-400 py-3 px-6 w-auto rounded-3xl text-center items-center hover:bg-green-200"
                >
                    guildLinkWlogs
                </Link>
                <Link href={"/"}>guildLinkDiscord</Link>
            </div>
        </div>
    );
}
