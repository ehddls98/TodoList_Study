import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";


function MainContainer(props) {

    const [content, setContent] = useState("");
    const [content2, setContent2] = useState('');
    const [content3, setContent3] = useState('');

    const [contents, setContents] = useState({
        content4 : "",
        content5 : "",
        content6 : ""
    });
    
    const handleInputChange4 = async (e) => {
        setContents(ct=>{
            return{
                ...ct,
                [e.target.name] : e.target.value
            }
        })
    }


    useEffect(() => {
        // console.log(content);
        // console.log(content2);
        // console.log(content3);
        console.log(contents);
        
    }, [content, content2, content3,contents]);

    const handleInputChange = async (e) => {
        setContent(e.target.value)
    }

    const handleInputChange2 = (e) => {
        setContent2(e.target.value)
    }

    const handleInputChange3 = (e) => {
        setContent3(e.target.value)
    }

    const handleAddClick = (e) => {
        console.log(content);
        console.log(content2);
        console.log(content3);
    }


    return (
        <div css={s.MainContainer}>
            <div css={s.loginContainer}>
                <h2>로그인</h2>
                <label htmlFor=""></label>
                <input type="text" css={s.input} onChange={handleInputChange} value={content} autoFocus />
                <input type="text" css={s.input} onChange={handleInputChange2} value={content2} />
                <input type="text" css={s.input} onChange={handleInputChange3} value={content3} />

                <input type="text" css={s.input} name='content4' onChange={handleInputChange4} value={contents.content4} autoFocus />
                <input type="text" css={s.input} name='content5' onChange={handleInputChange4} value={contents.content5} />
                <input type="text" css={s.input} name='content6' onChange={handleInputChange4} value={contents.content6} />
                <div css={s.checkboxContainer}>
                    <input type="checkbox" id='check1' />
                    <label htmlFor="check1"></label>
                    <input type="checkbox" id='check2' />
                    <label htmlFor="check2"></label>
                    <input type="checkbox" id='check3' />
                    <label htmlFor="check3"></label>
                    <input type="checkbox" id='check4' />
                    <label htmlFor="check4"></label>
                </div>
                <button onClick={handleAddClick}>버튼</button>
            </div>
        </div>
    );
}


export default MainContainer;
