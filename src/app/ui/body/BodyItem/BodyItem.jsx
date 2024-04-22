import { Collapse } from "antd";
import GuildDescription from "@/app/ui/description/GuildDescription";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const allianceGuilds = [
    {
        name: "test",
    },
];

const items = [
    {
        key: "1",
        label: "This is panel header 1",
        children: <GuildDescription></GuildDescription>,
    },
    {
        key: "2",
        label: "This is panel header 2",
        children: <p>{text}</p>,
    },
    {
        key: "3",
        label: "This is panel header 3",
        children: <p>{text}</p>,
    },
];
export default function BodyItem({ side }) {
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
