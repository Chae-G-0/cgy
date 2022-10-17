import React from "react";

const Fsection = () => {
    return (
        <div className="inner">
            <h2>Profile</h2>
            <div className="container">
                <div className="lbox">
                    <div className="fimg">
                        <img src={process.env.PUBLIC_URL + "/img/profile.jpg"} alt="" />
                    </div>
                    <p>채가영</p>
                    <span>1996.10.24</span>
                </div>
                <div className="rbox">
                    <dl>
                        <dt>EDUCATION</dt>
                        <dd>
                            부산 그린컴퓨터아카데미 <br />
                            react 활용 프론트엔드 개발자 양성과정 수료
                            <span>2022.05 - 2022.11</span>
                        </dd>
                        <dd>
                            동아대학교 신문방송학과 졸업
                            <span>2015.03 - 2022.02</span>
                        </dd>
                        <dd>
                            김해경원고등학교 졸업
                            <span>2012.03 - 2015.02</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>LICENSE</dt>
                        <dd>
                            컴퓨터활용 2급 필기
                            <span>2022.03</span>
                        </dd>
                        <dd>
                            OPIC IM3
                            <span>2021.11</span>
                        </dd>
                        <dd>
                            운전면허 2종 보통
                            <span>2015.01</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>CONTACT</dt>
                        <dd>
                            <a href="tel:010">010-0000-0000</a>
                        </dd>
                        <dd>
                            <a href="mailto:rkdud4020@gmail.com">rkdud4020@gmail.com</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>Git Hub</dt>
                        <dd>
                            <a href="https://github.com/Chae-G-0" target={"_blank"} rel="noopener noreferrer">
                                https://github.com/Chae-G-0
                            </a>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Fsection;
