import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { SAMPLE_PRODUCTS } from '../../constants/sampleProducts';

function SideBar(props) {

    let i = 1;

    const handleColorClick  = (id) => {
        console.log(id);
    }

    return (
        <div css={s.SideBar}>
            <div>
                <button>버튼</button>
            </div>
            <div>
                {SAMPLE_PRODUCTS.map(tt => {
                    return (
                    <div key={tt.id}>
                        <p onClick={ ()=> handleColorClick(tt.id)}>{tt.color}</p>
                    </div>
                    ) 
                })}
            </div>
        </div>
    );
}

export default SideBar;