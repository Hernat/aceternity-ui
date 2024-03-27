"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

const blogContent = {
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Manu Arora",
    date: "28th March, 2023",
    title: "Amazing Tailwindcss Grid Layout Examples",
    description:
        "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    image: "/demo/thumbnail.png",
    authorAvatar: "../../public/next.svg",
};

const TitleComponent = ({
    title,
    avatar,
}: {
    title: string;
    avatar: string;
}) => (
    <div className="flex space-x-2 items-center">
        <Image
            src={avatar}
            height="20"
            width="20"
            alt="thumbnail"
            className="rounded-full border-2 border-white"
        />
        <p>{title}</p>
    </div>
);

export function ThreeDCardDemo() {
    return (
        // <FollowerPointerCard
        //     title={
        //         <TitleComponent
        //             title={blogContent.author}
        //             avatar={blogContent.authorAvatar}
        //         />
        //     }
        // >
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    Make things float in air
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                    <CardItem
                        translateZ={20}
                        className="text-sm font-bold text-neutral-600 dark:text-white"
                    >
                        3D Card Demo
                    </CardItem>
                </div>
                <div className="flex justify-between items-center mt-10">
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Try now →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Sign up
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
        // </FollowerPointerCard>
    );
}
