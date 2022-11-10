import React, { useState } from 'react'

const Home = () => {

    // let name = 'zinnia'
    const [name, setName] = useState('zinnia')
    // console.log("name " + name + " & set name " + setName)
    const [price, setPrice] = useState(200)

    const handleClick = (e) => {
        // name = 'cherry'
        setName('cherry')
        setPrice(300)
        console.log("clicked " + name)
        console.log("name " + name + " & set name " + setName)
        // alert("clicked name ," + name)

    }
    const handleClickAgain = (name) => {
        console.log(("hi my name is " + name))
        alert("this is  " + name)
    }

    return (
        <div className='home'>
            <p>{name}</p>
            <p>price of handfree is now: {price}</p>
            <button
                type="button"
                className="btn btn-outline-success"
                onClick={handleClick}
            >
                Click Me
            </button>
            <button
                type="button"
                className="btn btn-outline-primary"
                // onClick={handleClickAgain('lily')}
                // onClick={() => { console.log('check it') }}
                onClick={() => handleClickAgain('lily')}
            >
                Click Me Again
            </button>
        </div >
    )
}

export default Home
