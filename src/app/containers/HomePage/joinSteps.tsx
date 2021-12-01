import { faCalendarPlus, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import ZyuohCubeFinalImg from "../../../assets/images/zyuohcubefinal2.jpg";
import EagleSwordImg from "../../../assets/images/eaglesword.jpg";
import ZyuohCubeImg from "../../../assets/images/zyuohcube.jpg";

const Container = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-3 
        pb-3 
        lg:pt-6 
        lg:pb-6 
    `}
`;

const Title = styled.h2`
    ${tw`
        text-xl
        lg:text-3xl 
        text-black
        font-bold
    `}
`;

const StepsContainer = styled.div`
    ${tw`
        flex
        justify-evenly
        flex-wrap
        mt-7 
        lg:mt-14        
    `}
`;

const StepSingleContainer = styled.div`
    ${tw`
        flex
        flex-col
        md:w-96
        items-center
        transition-colors
        hover:text-purple-500
        m-3
    `};
`;

const Step = styled.div`
box-shadow: 0 1.3px 10px -3px rgba(0,0,0,0.4);

    ${tw`
        flex
        rounded-lg
        items-center
        justify-center
        p-6
    `};
`;

const StepTitle = styled.h4`
    ${tw`
        text-black
        text-lg
        font-bold
        mt-4
    `};
`;

const StepDescription = styled.p`
    ${tw`
        w-10/12
        text-base
        text-center
        text-pink-600
        font-semibold
    `};
`;

const StepIcon = styled.span`
    ${tw`
        text-3xl
    `};
`;


export default function JoinSteps() {
    return (
      <Container>
          <Title> Become a Zyuohger </Title>
          <StepsContainer>
            <StepSingleContainer>
                <Step>
                    <StepIcon>
                    <img src={ZyuohCubeImg} alt='' height='100' />
                    </StepIcon>
                </Step>
                    <StepTitle>
                        Location
                    </StepTitle>
                    <StepDescription>
                        Find your nearest Zyuohgers chapter
                    </StepDescription>
            </StepSingleContainer>
            <StepSingleContainer>
                <Step>
                    <StepIcon>
                    <img src={EagleSwordImg} alt='' height='100' />
                    </StepIcon>
                </Step>
                    <StepTitle>
                        Date
                    </StepTitle>
                    <StepDescription>
                        Set your availability to save the world
                    </StepDescription>
            </StepSingleContainer>
            <StepSingleContainer>
                <Step>
                    <StepIcon>
                        <img src={ZyuohCubeFinalImg} alt='' height='100' />
                    </StepIcon>
                </Step>
                    <StepTitle>
                        Zyuoh Change
                    </StepTitle>
                    <StepDescription>
                        Learn how to awaken your instincts and become a Zyuohger
                    </StepDescription>
            </StepSingleContainer>
          </StepsContainer>
      </Container>
    )
}
