import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      {/* <div>
            <BsTwitter onClick={()=> window.open(`https://twitter.com`)} />
        </div> */}
      <div>
        <FaGithub onClick={() => window.open(`https://github.com/Howiec1`)} />
      </div>
      <div>
        <BsInstagram
          onClick={() => window.open(`https://www.instagram.com/howiec.jpg/`)}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
