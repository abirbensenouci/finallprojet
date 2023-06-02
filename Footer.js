
import React from "react";
import './App.css';
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

const fot=()=>{
    return( 
        <><footer class="footer-distributed">

            <div class="footer-left">

                <img className="img1 ml-10 mr-20" src='photo/logo.png' alt='LawExpertise' />

                <p class="footer-links">
                    <a href="/Home" class="link-1">Home</a>
                    <a href="/blog">Blog</a>
                    <a href="/">Nos avocats</a>
                    <a href="/Apropos">A propos</a>
                    <a href="/Contact">Contact</a>
                </p>

                <p class="footer-company-name"> © 2023 LawExpertise - Politique de confidentialité</p>
            </div>

            <div class="footer-center">

                <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span>Faculté des sciences</span>Universitaire Abou Bakr Belkaid, Tlemcen</p>
                </div>

                <div>
                    <i class="fa fa-phone"></i>
                    <p>+213 547.46.27.14</p>
                </div>

                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="mailto:lawexpertise0@gmail.com">lawexpertise0@gmail.com</a></p>
                </div>

            </div>

            <div class="footer-right">

                <p class="footer-company-about">
                    <span>About the company</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>

                <div class="footer-icons">

                    <a href="https://www.facebook.com/profile.php?id=100092616608416"><FaFacebook/><i class="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/ExpertiseL5663"><FaTwitter/><i class="fa fa-twitter"></i></a>
                    <a href="/"><FaInstagram/><i class="fa fa-instagram"></i></a>

                </div>

            </div>

        </footer></> 
      

    )
}
 
export default fot;