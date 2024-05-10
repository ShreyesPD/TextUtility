import React from 'react'
import PropTypes from 'prop-types'

export default function NavBar(props) {
    return (
        <nav className={`navbar navbar-expand-lg`} style={{ backgroundColor: props.mode === 'black' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">{props.aboutApp}</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        {/* <label className="form-check-label bg-light" htmlFor="flexSwitchCheckDefault">Light</label> */}
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        {/* <button class="btn mx-3" onClick={() => props.setColor("#a23131")} style={{ height: "30px", width: "30px", borderRadius: '50%', borderColor: 'black', backgroundColor: '#a23131' }} ></button>
                        <button class="btn mx-3" onClick={() => props.setColor("#192a42")} style={{ height: "30px", width: "30px", borderRadius: '50%', borderColor: 'black', backgroundColor: '#192a42' }} ></button>
                        <button class="btn mx-3" onClick={() => props.setColor("#288C28")} style={{ height: "30px", width: "30px", borderRadius: '50%', borderColor: 'black', backgroundColor: '#288C28' }} ></button>
                        <button class="btn mx-3" onClick={() => props.setColor("#FAF9F6")} style={{ height: "30px", width: "30px", borderRadius: '50%', borderColor: 'black', backgroundColor: '#FAF9F6' }} ></button> */}
                        {/* <label className={`form-check-label mx-2`} htmlFor="flexSwitchCheckDefault">{props.lableText}</label> */}
                    </div>
                    <form className="d-flex" role="search" >
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-1" type="submit" style={{ color: props.mode === 'dark' ? 'white' : 'black', borderColor: props.mode === 'dark' ? 'white' : 'black' }}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutApp: PropTypes.string
}

NavBar.defaultProps = {
    title: "Enter title here",
    aboutApp: "About text here"
}
