import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { footerLinks } from "../utils/data";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <footer className='text-white mp-20'>
      

      <div className='bg-[#1d4ed8] '>
        <div className='container px-5 py-10 mx-auto '>
          <div className='w-full flex flex-wrap gap-10 justify-between -mb-10 -px-4'>
            {footerLinks.map(({ id, title, links }) => (
              <div className='w-auto px-4 ' key={id + title}>
                <h2 className='font-medium text-white tracking-widest text-sm mb-3'>
                  {title}
                </h2>

                <div className='mb-10 flex flex-col gap-3 '>
                  {links.map((link, index) => (
                    <Link
                      key={link + index}
                      to='/'
                      className='text-gray-300 text-sm hover:text-white '
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=''>

          <div className='container mx-auto px-5 pt-6 pb-8 flex flex-wrap items-center justify-between '>
            <span className='inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto'>
              <a href='https://www.facebook.com/profile.php?id=100010068604112'className='text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaFacebookF />
              </a>
              <a href='https://twitter.com/SamarthN28706'className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaTwitter />
              </a>

              <a href='https://www.linkedin.com/in/samarth-nag-444b6b226/'className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>

        <div className='bg-[#001a36]'>
          <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p className='text-gray-300 text-sm text-center sm:text-left'>
              &copy; 2023 Samarth Nag
              
            </p>

            <span className='sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm'>
              Designed by Samarth Nag
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
