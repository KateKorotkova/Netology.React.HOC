import {DateTimePretty} from './date';


function Videos(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}


function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}



export {Videos};