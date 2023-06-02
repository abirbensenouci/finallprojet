import React from 'react';
import '../App';
import Slider from "../slider.js";
import Footer from "../Footer";
import Text1 from "../text1";
import Text2 from "../text2";
import Nav from './navbarsign'




function home() {
    return (
        <main> 
            <Nav />
            <Slider />
            <Text1 />
            <div className='cards pt-12'>
                <h1 className='mt-10 text-[50px] text-white ml-20'>Nos spécialités:</h1> 
                <table className="borderless m-10 ml-40"> 
                    <tbody>
                        <tr>
                            <td><div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img className='im' src="/photo/1.png" alt="" />
                                        <h1 className="text-[25px] ml-12 mb-2" style={{ color: 'black' }}>Droit de la famille</h1>
                                    </div>
                                    <div className="flip-card-back">
                                        <a href="/Service2" className="text-[25px] voir text-center">voir plus</a> 
                                    </div>
                                </div>
                            </div></td>
                            <td>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img className='im' src="/photo/3.png" alt="" />
                                            <h1 className="text-[25px] ml-12 mb-2" style={{ color: 'black' }}>Droit immobilier</h1>
                                        </div>
                                        <div className="flip-card-back">
                                            <a href="/Service2" className=" text-[25px] voir text-center">voir plus</a>

                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td> 
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img className='im' src="/photo/6.png" alt="" />
                                            <p className="text-[25px] text-center " style={{ color: 'black' }}>Droit commercial</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <a href="/Service2" className="text-[25px] voir text-center">voir plus</a> 
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img className='im ml-5' src="/photo/5.png" alt="" style={{ width: '200px', height: '180px' }} />
                                            <h1 className="text-[25px] text-center" style={{ color: 'black' }}>Droit de la propriété intellectuelle</h1>
                                        </div>
                                        <div className="flip-card-back">
                                            <a href="/Service2" className="text-[25px] voir text-center">voir plus</a> 
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td><div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img className='im' src="/photo/2.png" alt="" />
                                        <h1 className="text-[25px] text-center" style={{ color: 'black' }}>Droit des personnes</h1>
                                    </div>
                                    <div className="flip-card-back">
                                        <a href="/Service2" className=" text-[25px] voir text-center">voir plus</a>
                                    </div>
                                </div>
                            </div></td>
                            <td>
                                <div className="flip-card ">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img className='im' src="/photo/4.png" alt="" />
                                            <h1 className="text-[25px]  text-center" style={{ color: 'black' }}>Droit pénal</h1>
                                        </div>
                                        <div className="flip-card-back d-flex justify-content-center align-items-center">
                                            <a href="/Service2" className="text-[25px] voir text-center">voir plus</a>
                                        </div>
                                    </div>
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table> 
            </div>
            <Text2 />
            <Footer />
        </main>
    );
}


export default home;


