import React from 'react'

export const AboutScreen = () => {
    return (
        <div className="container">
            <div>
                <h1 className="main-text">Get to know me</h1>
                <p className="simple-text">
                    I've recently started in web development, I mainly have work with React and Redux.
                    <br />
                    I enjoy writing code and solving every day problems with it.
                    <br />
                    I'm curious, responsible and Im in constant search for improving my skills and developing new ones.
                    <br />
                </p><br />
                <p className="simple-text">
                    Besides coding other activities that I enjoy:
                </p>
                <ul>
                    <li className="simple-text">Reading</li>
                    <li className="simple-text">Watching documentaries</li>
                    <li className="simple-text">Walking</li>
                </ul>
            </div>
            <div>
                <h1 className="main-text">Skills</h1>
                <div className="flex-main-img">
                    <img alt='html5 logo' className="skill-image" src="https://img.icons8.com/ios-glyphs/120/000000/html-5.png" />
                    <img alt='css3 logo' className="skill-image" src="https://img.icons8.com/ios-glyphs/120/000000/css3.png" />
                    <img alt='react logo' className="skill-image" src="https://img.icons8.com/ios-glyphs/120/000000/react.png" />
                    <img alt='redux logo' className="skill-image" src="https://img.icons8.com/material-outlined/120/000000/redux.png" />
                    <img alt='bootstrap logo' className="skill-image" src="https://img.icons8.com/windows/120/000000/bootstrap.png" />
                    <img alt='sass logo' className="skill-image" src="https://img.icons8.com/ios-filled/120/000000/sass.png" />
                </div>
            </div>

        </div>
    )
}
