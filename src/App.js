import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import PD from "./PortfolioData";
import "./reset.css";
import "./main.scss";
import Fsection from "./Component/Fsection";
import Intro from "./Component/Intro";

const App = () => {
    const [num, setNum] = useState(1);
    const [con, setCon] = useState("cover");
    const [on, setOn] = useState(false);
    const ac = PD.map((it) => it.anchor);

    const Cover = () => {
        return (
            <div className={`cover ${on ? "on" : ""}`}>
                <ul>
                    {PD.map((it, idx) => {
                        return (
                            <li className={it.id}>
                                <a href={`#${it.anchor}`} onClick={() => setOn(!on)}>
                                    {it.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };

    return (
        <div className="FP">
            <Cover />
            <header className="header">
                <h1>
                    2022 Chae Portfolio {num - 1}
                    {con}
                </h1>
                <button onClick={() => setOn(!on)} className={`cover_open ${on ? "on" : ""}`}>
                    <span>커버 나오는 버튼</span>
                </button>
            </header>
            <nav className="gnb">
                <ul>
                    {["cover", ...ac, "Profile"].map((it, idx) => {
                        return (
                            <li className={num === idx + 1 ? "on" : ""}>
                                <a href={`#${it}`}>{it}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <ReactFullpage
                //fullpage options
                licenseKey={"YOUR_KEY_HERE"}
                scrollingSpeed={1000} /* Options here */
                anchors={["cover", ...ac, "Profile"]}
                afterLoad={(origin, destination) => {
                    setNum(destination.index + 1);
                    setCon(destination.anchor);
                }}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <Intro />
                            </div>
                            {PD.map((it) => {
                                return (
                                    <div className="section">
                                        <div className="inner">
                                            <div className="box">
                                                <div className="left">
                                                    <a href={it.link} target="_blank" rel="noopener noreferrer">
                                                        <img src={process.env.PUBLIC_URL + it.src} alt="" />
                                                    </a>
                                                </div>
                                                <div className="right">
                                                    <div className="tit">
                                                        <h2>
                                                            <a href={it.link} target="_blank" rel="noopener noreferrer">
                                                                {it.title}
                                                            </a>
                                                        </h2>
                                                        <span>{it.en}</span>
                                                    </div>
                                                    <span>TYPE</span>
                                                    <p className="des">{it.type}</p>
                                                    <span>DATE</span>
                                                    <p className="des">{it.date}</p>
                                                    <span>FONT</span>
                                                    <p className="des">{it.font}</p>
                                                    <span>TOOLS</span>
                                                    <p className="des">{it.tools}</p>
                                                    <span>CONTRIBUTION</span>
                                                    <p className="des">{it.contribution}</p>
                                                    <div className="anchor">
                                                        <a href={it.link} target={"_blank"} rel="noopener noreferrer">
                                                            WEB
                                                        </a>
                                                        <a href={it.code} target={"_blank"} rel="noopener noreferrer">
                                                            CODE
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="section Fsection">
                                <Fsection />
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div>
    );
};

export default App;
