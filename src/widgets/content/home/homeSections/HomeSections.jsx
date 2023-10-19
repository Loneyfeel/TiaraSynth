import './homeSections.sass'
import {home1, vector, triangles_up, triangles_down, home2, logo, lines_black_up, lines_black_down, lines_white_down, home3} from './imports.js'
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../share/utils/routes.js";

function HomeSections(){
    return(
        <>
            <div className="section section__welcome flex">
                <div className="welcome__content">
                    <div className="title flex">
                        <div className="title__image">
                            <img src={triangles_up} alt="" className="title__img"/>
                        </div>
                        <div className="title__text">
                            <div className="title__text_small">Fashion of the</div>
                            <div className="title__text_big">Future</div>
                        </div>
                        <div className="title__image">
                            <img src={triangles_down} alt="" className="title__img"/>
                        </div>
                    </div>
                </div>
                <div className="welcome__image">
                    <img src={home1} alt="" className="welcome__img"/>
                </div>
                <div className="welcome__image-description">
                    <img src={vector} alt="" className="vector"/>
                    <div className="description">
                        find in new exclusive collection <br/> by Yugal Odhrani
                    </div>
                </div>
            </div>
            <div className="section section__description flex">
                <div className="tiara__image">
                    <img src={home2} alt="" className="tiara__img"/>
                    <img src={lines_black_up} alt="" className="lines_up"/>
                    <img src={lines_black_down} alt="" className="lines_down"/>
                </div>
                <div className="tiara__content">
                    <div className="annotation">
                        Find yourself with sci-fi marketplace
                    </div>
                    <div className="tiara">
                        <div className="tiara__logo flex">
                            <img src={logo} alt="" className="logo__img"/>
                        </div>
                        <div className="tiara__text">
                            <div className="tiara__title">TiaraSynth</div>
                            <div className="tiara__description">A place where style and synthetics merged together. We collect the most interesting collections from all over the Solar System and present them to you.</div>
                        </div>
                    </div>
                    <img src={lines_white_down} alt="" className="lines_white_down"/>
                </div>
            </div>
            <div className="section section__exclusive flex">
                <div className="exclusive__content">
                    <div className="exclusive__title">Exclusive <br/> collections</div>
                    <div className="exclusive__authors flex">
                        <p className="author__text">
                            Yugal Odhrani
                        </p>
                        <p className="author__text">
                            Maria Ustinova
                        </p>
                        <p className="author__text">
                            ArtiMecAi
                        </p>
                    </div>
                    <div className="exclusive__text">
                        Choose your own unique accessories,<br/>available only this season
                    </div>
                    <Link to={ROUTES.COLLECTIONS} className="exclusive__button flex">
                        <p>View</p>
                    </Link>
                </div>
                <div className="exclusive__image">
                    <img src={home3} alt="" className="exclusive__img"/>
                </div>
            </div>
        </>
    )
}
export default HomeSections