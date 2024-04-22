import ChooseSide from "@/app/ui/chooseSide/ChooseSide";

export default function Layout({ children }) {
    return (
        <section>
            <ChooseSide></ChooseSide>
            {children}
        </section>
    );
}
