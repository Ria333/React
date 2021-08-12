import {useEffect, useState} from 'react';
import {getPosts} from 'src/services/post.service';
import Posts from "../posts/Posts";

export default function User({item}) {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
            getPosts(item.id)
                .then(value => setPosts([...value]))
        }, [item.id]
    )
    ;
    return (<div>
            <p>{item.id} {item.name} {item.username} {item.email} {item.phone}</p>
            <Posts items={posts}/>
        </div>
    );
}