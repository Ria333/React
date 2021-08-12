import {useEffect, useState} from 'react';
import {getUser} from "../../service/user.service";
export default function User({item}) {
    let [user, setUser] = useState({});
    useEffect(() => {
        getUser(item.id)
                .then(value => setUser({...value}));
        }, [item.id]);
    return (
        <div className={'divUser'}>
            {user.id}
            {user.name}
            {user.email}
            {/*{user.address.street,suite,city,zipcode}*/}
            {/*{user.address.geo.lat.lng}*/}
            {user.phone}
            {/*{user.website}*/}
            {/*{user.company.name.catchPhrase.bs}*/}
        </div>
    );
}