import BodyItem from "./BodyItem/BodyItem";

export default function Body({ side }) {
    return (
        <div className=" ">
            <div className="p-2 text-white w-full flex items-center flex-col space-y-4">
                <BodyItem side={side}></BodyItem>
            </div>
        </div>
    );
}
