import { PropsWithChildren } from "react";

type SquareProps = {color: string, textColor: string};

export const Square = ({color, textColor, children}: PropsWithChildren<SquareProps>) => {
    return (<div style={{width: "100px", height: "100px", backgroundColor: color}}>
        {children}
        <SubText textColor={textColor} ></SubText>
        
    </div>)
}

export const SubText = (props: {textColor: string}) => {
    return <p style={{color: props.textColor}}>Sono dentro il rettangolo</p>
}