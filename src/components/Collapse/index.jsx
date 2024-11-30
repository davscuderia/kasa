import React, { useState } from "react"
import './style.scss'

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapse">
            <div className={`collapse-header ${isOpen ? 'open' : ''}`}
            onClick={toggleCollapse}
            >
                <h2>{title}</h2>
                <span className="collapse-icon">
                {isOpen ? '∟' : '∟'}
                </span>
            </div>
            {isOpen && ( <div className="collapse-content">
                {typeof content === 'string' ?(
                    <p>{content}</p> ) : (<ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
            )}
        </div>
    )
}

export default Collapse