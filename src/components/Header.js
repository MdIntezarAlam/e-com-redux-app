import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
const Header = () => {

    const [increment, setIncrement] = useState(0)
    const addCard = () => {
        setIncrement(increment + 1)
    }


    return (
        <div className='header'>
            <div className='headr_flex'>
                <div className='heading'>E-commerce</div>
                <div className='right_header'>
                    <div className='cart'>
                        <h4>{increment}</h4>
                        <Link to="/addtocart/:productId">
                            <p className='para' onClick={addCard}>Cart</p>
                        </Link>
                    </div>
                    <div className='header_images'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAMFBMVEXBx9D///+9w83w8fPp6+7a3uPi5enU2N729/j8/P3IztbFytPM0djR1dy6wMvs7vACf7MAAAAFAklEQVRogcWb6ZKsIAyFEQRZtH3/tx1xadk52Fhz/ty6VSNfs4UkBDK0S46CT4s2ZJPRy8TFyB40Q9r+nInJAinxtP93EY38BrQcF0NoQHX4lJhllP3RUswFrIOfheqKZks4xgU8mbCuI+hxhrmHPvPYBS1MI3jvuqnDa+gRH+kATmrwMprNz7iH5vJuK6EVf9rlq+O8tNoLaPZkkgO4LnQ8j+Y/g3c4b0Yr3YVsO54b9Ax67cM9tLagRacuH6ICR/eZZoednPAUeupM3tgThu5PTrNj9BvkJDtCv0NOsUN07xXmsMO1FqD77qpAooRecV9k88SM1rrkrUVa82gFN6L5KpW1kEquXMOfqSwabIPy4Dxi6ArROTTUAE2bJv6BPna/ddAM+njOHEQK8h2pM143Whnk0/RJsEsA3xNz//IbzRFy0dUbkX7fQ/5FM4Rciaqgvflt44sGpqrcZ3DM6RyiR+CjvJv1FTJrVwcuNPCJzvFcIS6dj0ZsNxTEAUvm2iUE7jQw3FYT0JSLRrYFGLRLeLkeaCC0SnlXSS31tuYbDZjQ2pa+BWzuD/uikflB0xTQyTtdaGB6yIKSoRGn8kQjO6twbIRCTJo40cAio5m4KSXEks8HWtb/knwa8mHyAzQodzSyqT84eRgAtN3aG3r5D/SyoxHvpDeaGItGfATygbf1trER9OYxECzgoC3LDGpQbGjAAiAOyi3IRdtsFEHOS8xDuYR4KpsGAgY7cx15CcwwKgKtsq3b+PEBBkGMAP7gjoaNOBQJbBoJ+peQU2iFxp2CgIsCPkDgEJ0TxE3YBXYbDrYnAm1rK2y28YzIQvCUAOKTIgfwKU2Qw+P6447DTVrABLArLfcVbehkqtPRe0k3yy4YNYX4HD+wTXatseZ7g7YhJ9mwr3mwTcvmOkRTPvmDBKfGTYorzpw5Vww1xp4W3JD6MjMXK2Or4HPzlB2a4OMjEj319HsOH5rdJVBXob9G1EHqL4a6hf2lQGf4BaEhQH8taODTXXvgA60z2iSkRQYEuR+9260WbTZOV8JNUw/tabHcoCBVPMrO0L4QGRZdgyq8cEd5JjQKXmRDaJtSwVLKcvLKPKki85RdwmfyKre98LRogZ1p+krZpW0pHluWlOmWGkrpWTi0LCvpgH3TswNLbMIew723neg2vZPSqYXWqdPJbh9t5y4g+sy0VTzb3gVE4uTsNN7JDTa46Pin/WDGfEX7J7hsirptepETx9OFPP8NbV63VRavs/BiMbxOfQ0dX6eGq+G9XseXyEFq8zV04uo8KBh4C50sGPBN3kvodJmEH52/g84Vh/i/70cH5ZY7kdmSGM/w9DLi0l1C+UIgL7fah+3uWVoof/Jt+WM/2JFrJMO+lErdskU/sLzWKqVuYYFfwy1qLK8Ct17gF7BrqcmSBC2S68WcQHl7UnKudaFewkqXhpu9S8rPDqElrHHSkTfCVfh+AC7cjfwlSprCvhDcUq4cF2lTOoF+ooyr+JuKtFOl6ZSI6rgrEYX0zaXpQzLLTA1f8yPPRMLbf1CQb5tKZDqoLSEdmfR+gJJstVnaRIjz7BlC9vGFLZzV8zxxLjjn06xNpoT2+eOLofbkhJLoZZenH56cWD3O3v760MZKPHnykrylaEbbR1VQzcWtXo+qrOT0T0/JrBT6gG7p/IBulxwX8h/PBg+p87FkStOLjyVvfuKJ6AMv7g9loC7X90HZ6AAAAABJRU5ErkJggg==' className='imgss' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header