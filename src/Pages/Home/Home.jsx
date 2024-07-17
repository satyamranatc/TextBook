import React from "react";
import "./Home.css";

export default function Home() {
 return (
   <div className="container">
     <main>
       <section className="hero">
         <h2>Unlock the Wonders of Science</h2>
         <p>
           Explore our interactive courses and master complex scientific
           concepts with ease.
         </p>
         <button className="ctaButton">Browse Courses</button>
       </section>

       <section id="courses" className="courses">
         <h3>Featured Courses</h3>
         <div className="courseGrid">
           <div className="courseCard">
             <img src="https://source.unsplash.com/random/400x300?physics" alt="Physics" />
             <h4>Introduction to Physics</h4>
             <p>Discover the fundamental laws governing our universe.</p>
           </div>
           <div className="courseCard">
             <img src="https://source.unsplash.com/random/400x300?chemistry" alt="Chemistry" />
             <h4>Chemistry Essentials</h4>
             <p>
               Explore the building blocks of matter and chemical reactions.
             </p>
           </div>
           <div className="courseCard">
             <img src="https://source.unsplash.com/random/400x300?biology" alt="Biology" />
             <h4>Biology: Life Unveiled</h4>
             <p>Delve into the fascinating world of living organisms.</p>
           </div>
         </div>
       </section>

       <section id="about" className="about">
         <h3>Why Choose Text Book?</h3>
         <ul>
           <li>Expert instructors with years of teaching experience</li>
           <li>Interactive lessons and hands-on experiments</li>
           <li>Self-paced learning with 24/7 access to course materials</li>
           <li>Regular assessments to track your progress</li>
         </ul>
       </section>

       <section id="contact" className="contact">
         <h3>Get in Touch</h3>
         <form className="contactForm">
           <input type="text" placeholder="Name" required />
           <input type="email" placeholder="Email" required />
           <textarea placeholder="Message" required></textarea>
           <button type="submit">Send</button>
         </form>
       </section>
     </main>

     <footer className="footer">
       <p>&copy; 2024 Text Book. All rights reserved.</p>
     </footer>
   </div>
 );
}