import React from 'react'

function Educard({ item }) {
    return (
        <>
            <div className="img-box flex justify-center relative overflow-hidden">

                <div className="">
                    <h3 className="font-bold text-2xl">{item.title}</h3>
                    <p className="font-bold">{item.description}</p>
                </div>
            </div>
        </>
    )
}

export default Educard 