import React, { useEffect, useState } from 'react';
import './Header.css';
import group1 from '../../assets/Group_1.png';
import group2 from '../../assets/Group_2.png';
import group3 from '../../assets/Group_3.png';

const images = [group1, group2, group3];

const Header = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='header'>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`slider ${index === currentImage ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            ))}

            {/* <div className="header-contents">
                <h2>Home services <br />at your doorstep.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ad non, omnis in vel ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolorum?</p>
                <button>View Services</button>
            </div> */}
        </div>
    );
};

export default Header;
