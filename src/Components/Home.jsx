import React from "react";
import "./Menu.css";



function Home({active}) {
    console.log("Home active: ", active);
    if (active) {
        return null;
    }

    const images = [
        "/Images/Book icon.png",
        "/Images/INDO_mejores_libros_prepa.jpg",
        "/Images/Tipos-de-libros.jpg",
    ];

    const showImages = () => {
        return images.map((image, index) => (
            <img key={index} src={image} alt={`book-${index}}`}/>
        ));
    };
    return (
        <div>
            <section id="home">
                <div className="container">
                    <h2>Welcome to Your Education Project</h2>
                    <p>Empowering the world through education.</p>
                </div>
            </section>

            <section id="about">
                <div className="container">
                    <h2>About Us</h2>
                    <p>EducaCommunities is an online platform aimed at connecting individuals who wish to contribute to
                        the improvement of education in underserved communities. The platform will facilitate both the donation
                        of gently used books and the contribution of funds, which will be used to acquire supplies, equipment,
                        and enhance educational facilities in these communities.</p>

                {showImages()}

                </div>
            </section>

            <section id="contact">
                <div className="container">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or want to get involved, please contact us. We'd love to hear from you.</p>
                    <a href="#register">Contact</a>
                </div>
            </section>

            
        </div>
    );
}

export default Home;
