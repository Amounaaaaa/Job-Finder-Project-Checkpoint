import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {loadUser} from "../actions/authActions";
import '../css/profile.css'
import {Container, Row} from "react-bootstrap";

const Profile = () => {
    const auth=useSelector(state=>state.auth)
    const dispatch=useDispatch()
    const Hello=()=>{
        console.log("hello ..................")
    }// useEffect(()=>{
    //     dispatch(loadUser())
    // },[]);

    return (
        <Container>
            <Row>
                <div>
                    <div>
                        <div className="container1">
                            <div className="all flex-row">
                                <div className="menu flex-column">
                                    {/*<div className="flex-row label-wrapper">*/}
                                    {/*    <img src="https://i.ibb.co/crgCrWT/instagram.png"/>*/}
                                    {/*    <h3 className="insta-writing">Instagram</h3>*/}
                                    {/*</div>*/}
                                    <div className="profil-img"></div>
                                    <div className="profil-info">
                                        <h2 className="name">{auth.user.firstname}</h2>
                                        <h3 className="city">Date birth : {((auth.user.datebirth))}
                                        </h3>
                                        <div className="numbers">
                                            <div className="post">
                                                <p>Post</p>
                                                <div className="post-num">116</div>
                                            </div>
                                            <div className="post">
                                                <p>Followers</p>
                                                <div className="post-num">48m</div>
                                            </div>
                                            <div className="post">
                                                <p>Following</p>
                                                <div className="post-num">48m</div>
                                            </div>
                                        </div>
                                        <div className="menu-elements">
                                            <div className="icons">
                                                <img src="https://i.ibb.co/5csvQKW/home-2.png"/>
                                                <div className="feed-writing"> Feed</div>
                                            </div>
                                            <div className="icons">
                                                <img src="https://i.ibb.co/y8wD2HZ/explore-tool.png"/>
                                                <div className="exp-writing"> Explore</div>
                                            </div>

                                            <div className="icons">
                                                <img src="https://i.ibb.co/tsDcKD1/hashtag.png"/>
                                                <div className="trend-writing"> Trending Tags</div>
                                            </div>

                                            <div className="icons">
                                                <img src="https://i.ibb.co/G2r0G8N/tick-inside-a-circle.png"/>
                                                <div className="top-writing"> Top Post</div>
                                            </div>

                                            <div className="icons">
                                                <img src="https://i.ibb.co/XDnYxL9/user-symbol-of-thin-outline.png"/>
                                                <div className="people-writing"> People</div>
                                            </div>

                                            <div className="icons">
                                                <img src="https://i.ibb.co/dWcct0k/notification.png"/>
                                                <div className="notif-writing"> Notification</div>
                                            </div>

                                            <div className="icons">
                                                <img src="https://i.ibb.co/rQcCQcL/direction.png"/>
                                                <div className="direct-writing"> Direct</div>
                                            </div>

                                            <div className="icons">
                                                <img src="https://i.ibb.co/VNSj2GR/pie-chart.png"/>
                                                <div className="stat-writing"> Stats</div>
                                            </div>

                                            <div className="icons">
                                                <img src="https://i.ibb.co/smVnQkg/settings.png"/>
                                                <div className="set-writing"> Settings</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-page">
                                <div className="top-bar">
                                    <div className="form has-search">
                                        <input className="text" type="search" placeholder="Search" name="search"/>
                                        <span className="searchIcon">
         <img src="https://i.ibb.co/sqFgRq8/search.png"/>
       </span>
                                        <span className="micro">
         <img src="https://i.ibb.co/HNx8Xty/microphone.png"/>
       </span>
                                    </div>
                                    <div className="cover-post">
                                        <button className="button post-new">Create New Post</button>
                                        <span className="plus">
       <img src="https://i.ibb.co/0YG23j8/plus-symbol.png"/>
       </span>
                                    </div>
                                    <div className="mail-heart">
                                        <div className="icon1">
                                            <img src="https://i.ibb.co/6ZwMVGp/email.png"/>
                                        </div>
                                        <div className="icon1">
                                            <img src="https://i.ibb.co/K91ZTyF/heart.png"/>
                                        </div>
                                        <div className="person-radius">
                                            <img
                                                src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr-new"/>
                                    <div className="right-of-page">
                                        <div className="right-middle">
                                            <div className="featured">
                                                <div className="featured-header">
                                                    <h2 className="featured-stories"> Academic training</h2>
                                                    <button className="button popular-stor"> Popular Stories</button>
                                                </div>
                                                <div className="featured-body">
                                                    <div className="galery-wrapper">
                                                        <div className="img-galery">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1562447279-69402cb4587d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
                                                        </div>
                                                        <div className="img-galery">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
                                                        </div>
                                                        <div className="img-galery">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
                                                        </div>
                                                        <div className="img-galery">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1561363702-e07252da3399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="featured">
                                                <div className="featured-header">
                                                    <h2 className="featured-stories"> Latest Feed</h2>
                                                    <div className="icon-two">
                                                        <div className="icon3">
                                                            <img src="https://i.ibb.co/Jd2NwHV/menu-lines.png"/>
                                                        </div>
                                                        <div className="icon3">
                                                            <img src="https://i.ibb.co/tZdq3jg/four-boxes.png"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="featured-body">
                                                    <div className="galery-wrapper">
                                                        <div className="img-galery">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1426543881949-cbd9a76740a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
                                                        </div>
                                                        <div className="img-galery">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1532347922424-c652d9b7208e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
                                                        </div>

                                                        <div className="img-galery">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="last-body">
                                                    <div className="galery-wrapper">
                                                        <div className="img-galery">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
                                                        </div>
                                                        <div className="img-galery">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1527212986666-4d2d47a80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
                                                        </div>
                                                        <div className="img-galery">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1505158498176-0150297fbd7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="loader"></div>

                                            </div>


                                        </div>
                                        <div className="last-right">
                                            <img
                                                src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
                                            <h2 className="name2">BENJAMIN HARDMAN</h2>
                                            <div className="follows">
                                                <div className="post">
                                                    <p>Photos</p>
                                                    <div className="post-num">882</div>
                                                </div>
                                                <div className="post">
                                                    <p>Followers</p>
                                                    <div className="post-num">527k</div>
                                                </div>

                                            </div>
                                            <div className="read-me">
                                                Benjamin is a freelance photographer in Iceland. He is interested in UI
                                                development and design.

                                                Five years ago Benjamin embarked on his first photographic mission in an
                                                Arctict winter climate
                                                Benjamin is a freelance photographer in Iceland. He is interested in UI
                                                development and design.

                                                Five years ago Benjamin embarked on his first photographic mission in an
                                                Arctict winter climate...<span className="read"> Read more</span>
                                            </div>

                                            <div className="feature">
                                                <div className="post2">
                                                    <p>Locations</p>
                                                    <div className="post-num">Based in Iceland</div>
                                                </div>
                                                <div className="post2">
                                                    <p>Profession</p>
                                                    <div className="post-num">Photographer</div>
                                                </div>
                                                <div className="post2">
                                                    <p>Profession</p>
                                                    <div className="post-num">Developer</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                        </div>

                    </div>
                    <div>
                        <div className="main-container">
                            {/*/!*HEADER *!/*/}
                            {/*<header className="block">*/}
                            {/*</header>*/}
                            {/*/!*LEFT-CONTAINER*!/*/}
                            {/*/!*MIDDLE-CONTAINER *!/*/}
                            {/*<div className="middle-container container">*/}
                            {/*    <div className="profile block">*/}
                            {/*        <a className="add-button" href="#28"/><span className="icon entypo-plus scnd-font-color"/>*/}
                            {/*        <div className="profile-picture big-profile-picture clear">*/}
                            {/*            <img width="150px" alt="Anne Hathaway picture" src={"/assets/img/logo/logooo.png"}/>*/}
                            {/*            /!*<i className="bi bi-camera"></i>*!/*/}
                            {/*            /!*<i className="bi bi-camera-fill"></i>*!/*/}

                            {/*        </div>*/}
                            {/*        <div >*/}
                            {/*            <i  onClick={Hello} className="fas fa-camera"></i>*/}

                            {/*        </div>*/}
                            {/*        {auth.user && <h1 className="user-name">{auth.user.firstname} {auth.user.lastname}</h1>}*/}
                            {/*        <div className="profile-description">*/}
                            {/*            <p className="scnd-font-color"/>{auth.user.email}*/}
                            {/*        </div>*/}
                            {/*        <ul className="profile-options horizontal-list">*/}
                            {/*            <li><a className="comments" href="#40"/><p/><span*/}
                            {/*                className="icon fontawesome-comment-alt scnd-font-color"></span>+216 {auth.user.phone}*/}
                            {/*            </li>*/}
                            {/*            <li><a className="views" href="#41"/><p/><span*/}
                            {/*                className="icon fontawesome-eye-open scnd-font-color"></span>*/}
                            {/*                /!*841*!/*/}
                            {/*            </li>*/}
                            {/*            <li><a className="likes" href="#42"/><p/><span*/}
                            {/*                className="icon fontawesome-heart-empty scnd-font-color"></span>*/}
                            {/*                /!*49*!/*/}
                            {/*            </li>*/}
                            {/*        </ul>*/}
                            {/*    </div>*/}
                            {/*    /!*<div className="weather block clear">*!/*/}
                            {/*    /!*    <h2 className="titular"><span*!/*/}
                            {/*    /!*        className="icon entypo-location"></span><strong>CLUJ-NAPOCA</strong>/RO</h2>*!/*/}

                            {/*    /!*</div>*!/*/}

                            {/*</div>*/}
                        </div>
                        {/*end main-container */}
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default Profile
