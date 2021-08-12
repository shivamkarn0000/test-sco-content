import "./testimonials.css"
import "./testimonials-mobile.css"

export default function Testimonials() {
    const testimonialsdata = [
        {
            id: 1,
            name: "Tom Durden",
            title: "Senior Developer",
            img:
                "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "allimg/twitter.png",
            arrow: "allimg/right-arrow.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
            testimonialsactive: true,

        },
        {
            id: 2,
            name: "Alex Kalinski",
            title: "Co-Founder of DELKA",
            img:
                "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/youtube.png",
            arrow: "allimg/right-arrow.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
            testimonialsactive: true,
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/linkedin.png",
            arrow: "allimg/right-arrow.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
            testimonialsactive: true,

        },
    ];
    return (
        <div className="testimonials" id="testimonials">
            <div className="testimonials-maincontainer">
            <h1 className="testimonials-h1">Testimonials</h1>
            {testimonialsdata.map((t) => (
                <section className="testimonials-section"
                key={t.title}>


                    <div className=
                        {t.testimonialsactive ? "testimonials-container testimonialsactive" :
                            "testimonials-container"}>

                        <div className="testimonials-top">
                            <img className="testimonials-img" src={t.arrow} alt="logo" />
                            <img className="t-logo" src={t.img} alt="logo" />
                            <img className="testimonials-img" src={t.icon} alt="logo" />
                        </div>
                        <div className="testimonials-center">
                            <p>{t.desc}</p>
                        </div>
                        <div className="testimonials-bottom">
                            <h4>{t.name}</h4>
                            <p>{t.title}</p>
                        </div>

                    </div>

                </section>
            ))}
            </div>
        </div>
    )
}
