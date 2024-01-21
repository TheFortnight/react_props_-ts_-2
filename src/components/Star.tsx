import { ReactElement } from "react";

type StarsFormat = {
    starsNumber: number;
};

const Star = ({starsNumber}: StarsFormat) => {

    let starElem: ReactElement = <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
        <path d="M0 0h18v18H0z" fill="none"/>
    </svg>

    let starsArr: ReactElement[] = [];

    let counter: number = 0;

    while (counter < starsNumber) {
        starsArr.push(starElem);
        counter = counter + 1;
    };    

    return <>
        {starsArr.map((el, index) => <li key={index}>{el}</li>)}
    </>
};

export default Star;