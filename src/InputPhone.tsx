import React from "react";

export interface InputPhoneProps{
    yourName:string;

}

export function InputPhone({yourName}:InputPhoneProps){
    return <div>Hello, {yourName}</div>
}