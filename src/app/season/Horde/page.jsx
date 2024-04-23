import Body from "../../ui/body/Body";
import guildData from "@/app/guildData";
export default function page() {
    return (
        <>
            <Body
                side="Гільдії Орди"
                guilds={guildData.season.horde}
            ></Body>
        </>
    );
}
