import React from 'react'
import { Link } from "react-router-dom";
import NavbarSt from "../Navbar/home.module.css";
import { Card, Space } from 'antd';

const { Meta } = Card;

export default function Navbar() {
    return (
        <>
            <section className={NavbarSt.main_section}>
                <div className={NavbarSt.main}>
                    <h1>
                        <Link
                            to="/"
                            style={{ textDecoration: "none" }}
                            className={NavbarSt.Class}
                        >
                            {" "}
                            <img src="https://preview.colorlib.com/theme/security/img/logo.png.webp"></img>{" "}
                        </Link>
                    </h1>
                    <ul className={NavbarSt.ul}>
                        <li  >
                            <Link to="/aboutus" style={{ textDecoration: "none", color: "white" }}> ABOUT US</Link>
                        </li>
                        <li >
                            <Link to="/service" style={{ textDecoration: "none", color: "white" }}>SERVICE</Link>
                        </li>
                        <li >
                            <Link to="/team" style={{ textDecoration: "none", color: "white" }}>TEAM</Link>
                        </li>
                        <li>
                            <Link to="/price" style={{ textDecoration: "none", color: "white" }}>PRICE</Link>
                        </li>
                        <li>
                            <Link to="/blog" style={{ textDecoration: "none", color: "white" }}>BLOG</Link>
                        </li>
                        <li>
                            <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>CONTACT</Link>
                        </li>
                    </ul>
                </div>



                <div className={NavbarSt.nav_div}>
                    <div className={NavbarSt.div_title}>
                        <h6 className={NavbarSt.h5}>OPENNING ON 21ST FEBRUARY, 2018</h6>
                        <h1 className={NavbarSt.h1}>Exhibition on Modern Era</h1>
                        <p className={NavbarSt.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboread minim. sed do eiusmod tempor incididunt..</p>
                        <button className={NavbarSt.button}>GET START</button>
                    </div>

                </div>

            </section>
            <div className={NavbarSt.section_2_desc}>
                <h3>
                    Our Offered Services
                </h3>
                <p>Who are in extremelple exit navba</p>
            </div>
            <div className={NavbarSt.cards}>

                <Card className={NavbarSt.card}
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://preview.colorlib.com/theme/security/img/s1.jpg" />}
                >
                    <Meta title="Europe Street beat" description="Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical." />
                </Card>
                <Card className={NavbarSt.card}
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://preview.colorlib.com/theme/security/img/s2.jpg" />}
                >
                    <Meta title="Europe Street beat" description="Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical." />
                </Card>
                <Card className={NavbarSt.card} hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://preview.colorlib.com/theme/security/img/s3.jpg" />}
                >
                    <Meta title="Europe Street beat" description="Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical." />
                </Card>
            </div>
            <div className={NavbarSt.section_3_desc}>
                <h3>Some Features that Made us Unique</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className={NavbarSt.section_3}>
                    <Space size={16}>
                        <Card  className={NavbarSt.card} size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                            <h3>Expert Technicians</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Card>
                    </Space>
                    <Space size={16}>
                        <Card  className={NavbarSt.card} size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                            <h3>Expert Technicians</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Card>
                    </Space>
                    <Space size={16}>
                        <Card  className={NavbarSt.card} size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                            <h3>Expert Technicians</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Card>
                    </Space>
                    <Space size={16}>
                        <Card  className={NavbarSt.card} size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                            <h3>Expert Technicians</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Card>
                    </Space>
                    

                </div>
                </div>

            <div className={NavbarSt.section_4}>
                <div><h4>2536</h4>
                <p>Lorem, ipsum dolor.</p>
                </div>
                <div><h4>6784</h4>
                <p>Lorem, ipsum dolor.</p>
                </div>
                <div><h4>1059</h4>
                <p>Lorem, ipsum.</p></div>
                <div><h4>2239</h4>
                <p>Lorem ipsum dolor sit.</p></div>
        
            </div>
        </>
    )
}

