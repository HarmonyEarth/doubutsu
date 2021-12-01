import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import ZyuohEagleImg from "../../../assets/images/zyuoheagle.png"
import EagleSymbolImg from "../../../assets/images/bg_red.png"
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";

const TopSectionContainer = styled.div`
    
    min-height: 650px;
    margin-top: 6em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `};
`;

const LeftContainer = styled.div`

    ${tw`
        w-1/2
        flex
        flex-col
        
    `};
`;

const RightContainer = styled.div`

    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `};
`;

const Catchphrase = styled.h1`
    z-index:1;
    ${tw`
        font-bold
        text-2xl
        xl:text-6xl 
        sm:text-3xl 
        md:text-5xl 
        lg:font-black 
        md:font-extrabold
        text-black
        ml-4
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `};
`;

const Description = styled.p`
    
    z-index:1;
    ${tw`
        text-sm
        font-semibold
        lg:text-lg
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-60
        text-black
        ml-4
    `};
`;

const EagleSymbol = styled.div`

    width: 20em;
    height: 10em;
    position: absolute;
    right: 12.5em;
    top: -9em;
    z-index: -1;
    

    img {
        width: 100%
        height: auto;
        max-height: max-content;
    }

    @media (min-width: ${SCREENS.sm}){
        width: 40em;
        max-height 10em;
        right: 2.5em;
        top: -8.5em;
        
    }

    @media (min-width: ${SCREENS.md}){
        width: 100em;
        max-height 40em;
        right: -52.5em;
        top: -8.5em;
        
    }

    @media (min-width: ${SCREENS.lg}){
        width: 150em;
        max-height 30em;
        right: -90em;
        top: -8.5em;
        
    }

    @media (min-width: ${SCREENS.xl}){
        width: 200em;
        max-height 100em;
        right: -140em;
        top: -8.5em;
        
    }

    @media (min-width: ${SCREENS.xxl}){
        width: 90em;
        max-height 100em;
        right: -35em;
        top: -8.5em;
        
    }
`;

const TopHeroEagle = styled.div`
   
    width: auto;
    height: 25em;
    right: -2em;
    top: -4.5em;
    position: absolute;

    img {
        width: auto;
        height: 100%
       
    }

    @media (min-width: ${SCREENS.sm}){
        height: 35em;
        right: 1em;
        top: -7em;
        
    }

    @media (min-width: ${SCREENS.lg}){
        height: 40em;
        right: 1em;
        top: -9em;
        
    }

    @media (min-width: ${SCREENS.xl}){
        height: 50em;
        right: 1em;
        top: -9em;
        
    }
`;

const ButtonsContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        ml-3
        
    `};
`;

export function TopSection () {
    return (
        <TopSectionContainer>
            <LeftContainer>
                <Catchphrase>Better not underestimate this planet!</Catchphrase>
                <Description>
                    The Zyuohgers are the 40th Super Sentai team. Sky, land, and sea! 
                    The dream team of animal kings; the strongest animal heroes in Super Sentai history are born! 
                    Together they battle Deathgalian, an evil alien race that is invading Earth. 
                    It is up to the Zyuohgers to use their Zyuoh Cube powers to stop the Earth invasion. 
                </Description>
                <ButtonsContainer>
                <Button theme='filled' text="Join the Fight" />
                <Button text="Awaken your Instincts" />
                </ButtonsContainer>
            </LeftContainer>
            <RightContainer>
                <EagleSymbol>
                    <img src={EagleSymbolImg} alt="" />
                </EagleSymbol>
                <TopHeroEagle>
                    <img src={ZyuohEagleImg} alt="" />
                </TopHeroEagle>
            </RightContainer>
        </TopSectionContainer>
    );
}