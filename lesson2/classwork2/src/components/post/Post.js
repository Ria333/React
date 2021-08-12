import {useEffect, useState} from 'react';
import {getComments} from 'src/services/comment.service';
import Comments from "../../components/comments/Comments";
export default function Post ({item}) {
    let [comments, setComments] = useState([]);
    useEffect(() => {
            getComments (item.id)
                .then(value => setComments([...value]));
        }, [item.id]
    )
    ;
    return (<div>
        <p>{item.id} {item.title} {item.body}</p>
        <Comments items={comments}/>
    </div>)}
