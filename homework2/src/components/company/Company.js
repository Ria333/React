export function Company({name, catchPhrase,bs}) {
    return (
        <div className={'divCompany'}>
            <div>
                <p>company: {name} {catchPhrase} {bs}</p>
            </div>
        </div>
    )
}