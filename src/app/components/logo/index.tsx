import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import DoubutsuLogo from "../../../assets/favicon-32x32.png"

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
    `}
`;

const LogoText =styled.div`
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-3
    `}
`;

const Image = styled.div`
    width:auto;
    ${tw`
        h-6
        md:h-9
        ml-5
    `}

    img {
        width: auto;
        height: 100%
    }
`;

export function Logo(){
    return <LogoContainer>
        <Image>
            <img src={DoubutsuLogo} alt="" />
        </Image>
        <LogoText>
            Zyuohger
        </LogoText>
    </LogoContainer>
}