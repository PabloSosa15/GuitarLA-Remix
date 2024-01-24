import Guitar from "./guitar"

function ListGuitars({ guitars }) {
    return (
        <>
            <h2 className='heading'> Our Collection</h2>
            {guitars?.length && (
                <div className="guitar-grid">
                    {guitars.map(guitar => (
                        <Guitar
                            key={guitar.id}
                            guitar={guitar?.attributes}
                        />
                    ))}
                </div>
        )}
        </>
    )
}

export default ListGuitars