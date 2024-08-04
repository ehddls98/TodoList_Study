import { css } from "@emotion/react";

export const MainContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: rgb(100, 100, 500);  
    h1 {
        margin: 0;
    }
`   
export const loginContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 600px;
`   

export const checkboxContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    input {
        display: none;
    }
    label {
        display: flex;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    label::before {
    content:"🤍";
    width: 30px;
    height: 30px;
    text-align: center;
    background-color: white;
   }
   input:checked + label::before {
    content:"♥️";
    width: 30px;
    height: 30px;
    text-align: center;
    background-color: white;
   } 
`

export const input = css`
    margin: 10px 0px;
    outline: none;
`
