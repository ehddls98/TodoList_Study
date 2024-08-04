import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { SAMPLE_PRODUCTS } from '../../constants/sampleProducts';


function MainLayout({ children }) {
    return (
        <div css={s.MainLayout}>
            {children}
        </div>
    );
}

export default MainLayout;