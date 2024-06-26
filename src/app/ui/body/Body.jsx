import BodyItem from "./BodyItem/BodyItem";

export default function Body({ side, guilds }) {
    return (
        <div className="p-2 text-white w-full flex items-center flex-col space-y-4">
            <BodyItem
                side={side}
                guilds={guilds}
            ></BodyItem>
        </div>
    );
}
