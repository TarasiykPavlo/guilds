"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState, useEffect } from "react";

export default function Header() {
    const [widgetContent, setWidgetContent] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://classic.warcraftlogs.com/embed/guild-progress-tile/1020?difficulty=4&guild=712060");
                const data = await response.text();
                setWidgetContent(data);
            } catch (error) {
                console.error("Error fetching widget content:", error);
            }
        };

        fetchData();
    }, []);
    console.log(widgetContent);

    return (
        <div className="flex-col flex items-center">
            <Link
                href="/"
                className="flex-row flex w-full xl:w-[30rem] justify-center h-12 items-center  text-xl text-nowrap  text-center hover:bg-slate-600 rounded-lg"
            >
                <Image
                    src="/WoWicon.svg"
                    alt="WoW"
                    width={24}
                    height={24}
                ></Image>

                <h1>Українські гільдії World of Warcraft</h1>
            </Link>

            <div className="h-fit  w-full p-1 rounded-lg  flex  justify-center ">
                <div className="flex w-full justify-center 2xl:w-[80rem] space-x-10 bg-slate-400 rounded-lg p-5">
                    <Link
                        href="/Horde"
                        className="hover:bg-slate-500 rounded-full"
                    >
                        <Image
                            src="/horde.svg"
                            alt="Horde"
                            width={100}
                            height={100}
                        />
                    </Link>
                    <Link
                        href="/Alliance"
                        className="hover:bg-slate-500 rounded-full"
                    >
                        <Image
                            src="/alliance.svg"
                            alt="Alliance"
                            width={100}
                            height={100}
                        />
                    </Link>
                    <div className="h-[650px] w-[450px]">
                        <Link
                            width={650}
                            height={450}
                            href="https://classic.warcraftlogs.com/embed/guild-progress-tile/1020?difficulty=4&guild=712060"
                        >
                            {" "}
                            <h2>test</h2>
                        </Link>
                        <div dangerouslySetInnerHTML={{ __html: widgetContent }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
