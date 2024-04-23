import { Collapse } from "antd";
import GuildDescription from "@/app/ui/description/GuildDescription";

export default function BodyItem({ side, guilds }) {
    const items = guilds?.map((guild, index) => ({
        key: index,
        label: (
            <p className="space-x-4">
                <span className="text-xl ">
                    {"<"}
                    {guild.guildName}
                    {`>`}
                </span>
                <span className="text-pink-800">{guild.guildServer}</span>
            </p>
        ),
        children: <GuildDescription guild={guild} />,
    }));
    return (
        <div className="2xl:w-[80rem] w-full bg-slate-400 h-fit  flex flex-col rounded-lg">
            <div className="w-3/5 h-fit flex flex-row justify-center">
                <h2 className="text-fuchsia-950 p-5 text-xl">{side}</h2>
            </div>
            <Collapse
                items={items}
                // defaultActiveKey={["1"]}
            />
        </div>
    );
}
