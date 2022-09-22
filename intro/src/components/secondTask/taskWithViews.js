import React, { useState } from 'react';
import {New} from "./wrappers/new";
import {Popular} from "./wrappers/popular";
import {Article} from "./elements/article";
import {Video} from "./elements/video";



function processItem(props) {
    let innerComponent = props.type == 'video' ? <Video {...props}/> : <Article {...props} /> ;
    if (props.views > 1000) {
        return <Popular>{innerComponent}</Popular>;
    }
    if (props.views <= 100) {
        return <New>{innerComponent}</New>;
    }
    return <>{innerComponent}</>;
}



function List(props) {
    return props.list.map(item => {
        return processItem(item);
    });
};



export default function TaskWithViews() {
    const [list, setList] = useState([
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            views: 50
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            views: 12
        },
        {
            type: 'article',
            title: 'Невероятные события в неизвестном поселке...',
            views: 175
        },
        {
            type: 'article',
            title: 'Секретные данные были раскрыты!',
            views: 1532
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            views: 4253
        },
        {
            type: 'article',
            title: 'Кот Бегемот обладает невероятной...',
            views: 12,
        },
    ]);

    return (
        <List list={list} />
    );
}


export {TaskWithViews};