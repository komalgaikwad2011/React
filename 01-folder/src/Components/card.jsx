import React from 'react'

const card = (props) => {
    return (


        <div className='card'>

            <div className='top'>
                <img src={props.brandLogo} alt="Logo"></img>
                <button>Save</button>
            </div>

            <div className="center">
                <h3>{props.name}</h3>
                <h2>{props.post}</h2>
                <div className='abc'>
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag2}</h4>
                </div>
            </div>

            <div className="bottom">
                <h3>{props.pay}</h3>
                <h3>{props.location}</h3>
                <p>{props.tag2}</p>
                <div>
                    <button>Apply Now</button>
                </div>
            </div>

        </div >

    )
}

export default card