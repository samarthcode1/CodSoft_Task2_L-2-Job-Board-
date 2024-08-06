// eslint-disable-next-line no-unused-vars
import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 ">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
        <div className="w-full md:2/3 2xl:w-2/4">
          <h1 className="text-3xl text-blue-600 font-bold mb-5">About Us</h1>
          <h5 className="text-2xl text-blue-400 font-bold mb-1">Our Mission</h5>
          
        <p>At Job Ahead, our mission is to connect job seekers with their dream jobs and employers with their ideal candidates. We believe in the power of the right match to transform lives and businesses.</p>
        
        <h5 className="text-2xl text-blue-400 font-bold mb-1">Who We Are</h5>
        <p>Job Ahead is a dynamic and innovative job board platform dedicated to bridging the gap between talent and opportunity. Our team comprises seasoned professionals from the recruitment and technology sectors who are passionate about making the job search process more efficient, transparent, and effective.</p>
        <h5 className="text-2xl text-blue-400 font-bold mb-1">What We Do</h5>
        <p>We offer a comprehensive and user-friendly platform that caters to both job seekers and employers. Our services include:</p>
        <ul>
            <li>Job Listings:Access thousands of job opportunities across various industries and locations.</li>
            <li>Resume Building:Create a standout resume with our intuitive tools and templates.</li>
            <li>Job Alerts:Get notified about new job postings that match your skills and preferences.</li>
            <li>Employer Services: Post job listings, search our extensive resume database, and find the perfect candidate quickly.</li>
        </ul>
        <h5 className="text-2xl text-blue-400 font-bold mb-1">Why Choose Job Ahead?</h5>
        <p><strong>Wide Range of Opportunities:</strong> From entry-level positions to executive roles, we have listings to suit every career stage.</p>
        <p><strong>Advanced Matching Algorithms:</strong> Our state-of-the-art algorithms ensure that job seekers find positions that truly match their skills and career goals, and employers receive applications from the most suitable candidates.</p>
        <p><strong>User-Friendly Interface:</strong> Navigate our platform with ease, whether you're posting a job or applying for one.</p>
        <p><strong>Supportive Community:</strong> Join a community of motivated job seekers and forward-thinking employers, supported by our dedicated customer service team.</p>
        <h5 className="text-2xl text-blue-400 font-bold mb-1">Join Us Today</h5>
        <p>Whether You are  looking to take the next step in your career or find the perfect hire, Job Ahead is here to help. Start exploring opportunities and discover the future you deserve.</p>
        </div>
        <img src={JobImg} alt="About" className="w-auto h-[300px]" />
      </div>

      <div className="leading-8 px-5 text-justify"></div>
    </div>
  );
};

export default About;
