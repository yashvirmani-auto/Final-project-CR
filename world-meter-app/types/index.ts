import {MouseEventHandler} from "react";

export interface SubmitButtonProps {
    containerStyles?:String;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}