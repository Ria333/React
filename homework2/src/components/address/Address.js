import {Geo} from "../geo/Geo";

export function Address({street, suite, city, zipcode, geo}) {
        return (
            <div className={'divAddress'}>
                <div>
                    <p>address: {street} street, suite - {suite}, city - {city}, zipcode - {zipcode}</p>
                    <Geo {...geo}/>
                </div>
            </div>
        )
    }
