import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { Button } from '../button';
import { Marginer } from '../marginer';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const CardContainer = styled.div`
    min-height:7em;
    box-shadow: 0 1.3px 10px -3px rgba(0,0,0,0.4);
    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-transparent
        pr-2 
        pl-2 
        md:pl-6 
        md:pr-6 
    `};
`;

const ItemContainer = styled.div`

    ${tw`
        flex relative
    `};

`;

const Icon = styled.span`
    ${tw`
        text-yellow-400
        fill-current
        text-xs
        md:text-base
        mr-1 
        md:mr-3
    `};
`;

const Name = styled.span`
    ${tw`
        text-black
        font-semibold
        text-xs
        md:text-sm
        cursor-pointer
    `};
`;

const LineDivider = styled.span`
    
    width:2px;
    height: 45%;

    ${tw`
        bg-green-500
        mr-2
        ml-2 
        md:mr-5 
        md:ml-5 
    `};
`;

const DateCalendar = styled(Calendar)`
    position: absolute;
    max-width:none;
    top:3.5em;
    left:-2em;
`;


export function JoinCard() {

    const [startDate, setStartDate] = useState<Date>(new Date());
    const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);

    const [endDate, setEndDate] = useState<Date>(new Date());
    const [isEndCalendarOpen, setEndCalendarOpen] = useState(false);

    const toggleStartCalendar = () => {
        setStartCalendarOpen(!isStartCalendarOpen);
        if(isEndCalendarOpen) setEndCalendarOpen(false);
    };

    const toggleEndCalendar = () => {
        setEndCalendarOpen(!isEndCalendarOpen);
        if(isStartCalendarOpen) setStartCalendarOpen(false);
    };

    return (
        <CardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name onClick={toggleStartCalendar}>
                    Start Date
                </Name>
                {isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate as any} />}
            </ItemContainer>
            <LineDivider />
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name onClick={toggleEndCalendar}>
                    End Date
                </Name>
                {isEndCalendarOpen && <DateCalendar value={endDate} onChange={setEndDate as any} /> }
            </ItemContainer>
            <Marginer direction="horizontal" margin="2em" />
            <Button theme="filled" text="Fight" />
        </CardContainer>


    );
}
