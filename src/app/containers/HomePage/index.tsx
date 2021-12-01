import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { JoinCard } from "../../components/joinCard";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import AboutUs from "./aboutUs";
import JoinSteps from "./joinSteps";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
    ${tw `
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function HomePage(){
    return <PageContainer>
        <Navbar />
        <TopSection />
        <Marginer direction="vertical" margin="4em"/>
        <JoinCard />
        <Marginer direction="vertical" margin="8em"/>
        <JoinSteps />
        <Marginer direction="vertical" margin="1em" />
        <AboutUs />
    </PageContainer>
}