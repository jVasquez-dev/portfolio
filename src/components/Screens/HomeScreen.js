import React from 'react'

export const HomeScreen = () => {
    return (
        <div className="container--main">
            <section className="flex-main">
            
                <div className="text-container">
                    <h3 className="main-text type-machine">Hello, my name is <span className="highlight-text">Jorge Vasquez</span></h3>
                    <p className="simple-text"><span className="highlight-text">&lt;</span> I like to write simple, clean and efficient code.<br/>
                    I'm interested in working in any kind of projects,<br/>
                        from small businesses to big tech companies. <span className="highlight-text"> /&gt;</span>
                    </p>
                </div>
                <div className="image-container">
                    <img alt='avatar' className="avatar" src="https://i.ibb.co/Tb6SDrv/b686d5c3-9f74-4fa9-b22e-d2111b1b225d.jpg"/>
                </div>
            </section>
        </div>
    )
}
