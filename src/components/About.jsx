import React, { Component } from 'react'
import person from "../assets/images/person.jpeg";

export default class About extends Component {
    render() {
        return (
            <div>

                <div className="w-4/12 max-w-md	 rounded overflow-hidden shadow-lg m-auto	">
                    <img className="w-full" src={person} />
                </div>
                <div className="rounded overflow-hidden shadow-lg w-9/12 m-auto	">

                    <div className="px-6 ml-5 ">
                        <div className="font-bold  mt-4 text-white-700 text-4xl ">Aamir Saleem Lone</div>
                        <p className='text-white-900 py-4 ' style={{
                            lineHeight: "30px",
                            textShadow: "1px 1px black",
                            fontFamily: "cursive",
                            fontSize: "15px",
                            marginTop:"15px",
                        }}>
                            <ul className="list-none ">
                                <li className='text-left mb-5  font-extrabold  drop-shadow-lg Segoe UI Emoji '> I'm a full-stack developer with over 1 year of experience. I love being a full-stack developer because it allows me to work on both the front-end and back-end of projects, which keeps things interesting and challenging.
                                </li>
                                <li className='text-left mb-5  font-extrabold  drop-shadow-lg Segoe UI Emoji '>  My technical skills include proficiency in JavaScript, React, Node.js, MongoDB, SQL, and AWS. I was responsible for designing the user interface, implementing the payment gateway, and developing the back-end logic for order processing. It was a challenging project, but I enjoyed working with the technologies involved and learned a lot from the experience.

                                </li>
                                <li className='text-left mb-5  font-extrabold drop-shadow-lg Segoe UI Emoji'>
                                    As a problem solver, I enjoy tackling complex challenges and finding creative solutions. I'm also eager to learn new technologies and apply them to solve real-world problems. My goal is to continue developing my skills as a full-stack developer and build innovative web applications that make a positive impact in the world.


                                </li>
                            </ul>



                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Coding</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Web Development</span>
                    </div>
                </div>

            </div>
        )
    }
}
