import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { SCREENS } from '../../components/responsive';

import ZyuohLionImg from "../../../assets/images/zyuohlion.png";
import ZyuohLionSymbolImg from "../../../assets/images/bg_yellow.png";

// flex
// flex-row
const AboutUsContainer = styled.div`
    ${tw`
        w-full
        grid
        grid-cols-1
        md:grid-cols-2
        md:px-0
        items-center
        2xl: justify-center
        py-4
        px-7 
         
        
    `};
`;

const HeroContainer = styled.div`

    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `};
`;

const ZyuohgerContainer = styled.div`
    width:auto;
    height: 28em;
    margin-left: -60px;
    margin-top:-8em;
    z-index: -1;

    img{
        width: auto;
        height:100%
    }

    @media (min-width:${SCREENS.sm}){
        height:30em;
        margin-left: 0px;
        margin-top:-10em;
    }

    @media (min-width:${SCREENS.md}){
        height:32em;
        margin-left: 50px;
    }

    @media (min-width:${SCREENS.lg}){
        height:40em;
    }

    @media (min-width:${SCREENS.xxl}){
        height:35em;
        margin-left:0;
    }

`;

const ZyuohSymbol = styled.div`

    width:auto;
    height: 15em;
    margin-left: -550px;
    z-index: -1;
    

    img {
        width: 100%
        height: auto;
    }

    @media (min-width: ${SCREENS.sm}){
       
        height 15em;  
        margin-left: -375px;
        
    }

    @media (min-width: ${SCREENS.md}){
      
        height 15em;  
        margin-left: 260px;
        
    }

    @media (min-width: ${SCREENS.lg}){
        
        margin-left: -250px;  
        
    }

    @media (min-width: ${SCREENS.xl}){
      
    }

    @media (min-width: ${SCREENS.xxl}){
       
        
    }
`;

const InfoContainer = styled.div`
    ${tw`
        mx-2
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16 
    `};
`;

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl 
        md:text-5xl 
        font-bold
        md:text-white
        md:leading-normal
        lg:text-black
    `}
`;

const InfoText = styled.p`
    ${tw`
        md:max-w-2xl
        text-black
        text-sm
        md:text-base
        mt-3
        font-semibold
    `}
`;

export default function AboutUs() {
    return (
        <AboutUsContainer>
            <HeroContainer>
            <ZyuohSymbol> 
            <img src={ZyuohLionSymbolImg} alt='' />
            </ZyuohSymbol>
            <ZyuohgerContainer>
                <img src={ZyuohLionImg} alt='' />
            </ZyuohgerContainer>
            </HeroContainer>
            <InfoContainer>
                <Title>Use your power to save Earth</Title>
                <InfoText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam condimentum eu odio vitae fermentum. Cras porttitor erat semper lectus placerat pharetra. 
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
        
    )
}
