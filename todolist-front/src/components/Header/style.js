import { css } from "@emotion/react";

export const Header = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    width: 100%;
    height: 200px;
    position: relative;
    color: black;

    h1 {
        box-sizing: border-box;
        width: 200px;
        height: 200px;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);   
    }
`