import React, { Component } from 'react'
import person from "../assets/images/person.jpeg";
 
export default class About extends Component {
  render() {
    return (
      <div>
       
       <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto	">
  <img class="w-full" src={person} />
  <div class="px-6 s">
    <div class="font-bold text-xl mb-2">Aamir Saleem Lone</div>
    <p class="text-white-700 text-base">
I'm a full-stack developer with over 1 year years of experience. I love being a full-stack developer because it allows me to work on both the front-end and back-end of projects, which keeps things interesting and challenging.

My technical skills include proficiency in JavaScript, React, Node.js, MongoDB, SQL, and AWS. I was responsible for designing the user interface, implementing the payment gateway, and developing the back-end logic for order processing. It was a challenging project, but I enjoyed working with the technologies involved and learned a lot from the experience.

As a problem solver, I enjoy tackling complex challenges and finding creative solutions. I'm also eager to learn new technologies and apply them to solve real-world problems. My goal is to continue developing my skills as a full-stack developer and build innovative web applications that make a positive impact in the world.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
        
      </div>
    )
  }
}
