import ChooseSide from "@/app/ui/chooseSide/ChooseSide";

export default function Layout({ children }) {
    return (
        <>
            <div>
                <ChooseSide></ChooseSide>
                {children}
            </div>
        </>
    );
}
