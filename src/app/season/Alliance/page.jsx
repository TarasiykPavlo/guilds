import Body from "../../ui/body/Body";
import guildData from "@/app/guildData";
export default function page() {
    return (
        <>
            <Body
                side="Гільдії Альянсу"
                guilds={guildData.season.alliance}
            ></Body>
        </>
    );
}
