import React from 'react'

export const Footer = () => {
    return (
        <footer style={{borderTop: '1px solid black'}}>
            <div className="container">
                <div style={{display: 'flex', justifyContent: 'space-between'}} className="footer__inner">
                    <div className="footer__logo">
                        logo
                    </div>
                    <ul>
                        <li>instangram</li>
                        <li>wathapp</li>
                        <li>twitter</li>
                        <li>snap caht</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
