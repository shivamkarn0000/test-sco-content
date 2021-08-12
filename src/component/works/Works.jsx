import "./works.css"
import "./works-mobile.css"
import { useState } from "react"

export default function Works() {
    const [slideOpen, setSlideOpen] = useState(0);
    const worksdata = [
        {
            id: "1",
            icon: "allimg/mobile.png",
            title: "Web Design",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
                "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
                worksactive:true,
        },
        {
            id: "2",
            icon: "allimg/writing.png",
            title: "Branding",
            desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
        {
            id: "3",
            icon: "allimg/writing.png",
            title: "Content",
            desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
            "https://cdn.dribbble.com/users/2597268/screenshots/15468893/media/44313553d73ba41580f1df69749bba28.jpg?compress=1&resize=1200x900",
           
        },
        
        // {
        //     id: "4",
        //     icon: "allimg/globe.png",
        //     title: "Mobile Application",
        //     desc:
        //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        //     img:
        //         "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
               
        // },
    ]

    const handleClick = (way)=> {
        way === "workarrow-left" ? setSlideOpen(slideOpen > 0 ? slideOpen-1 : 3)
        : setSlideOpen(slideOpen < worksdata.length - 1 ? slideOpen + 1 : 0);
    }
  

    return (
        <div className="works" id="works">
            <div
                className="slider-works"
                style={{transform: `translateX(-${slideOpen *86}vw)`}}>

                {worksdata.map((d) => (

                    <div className= { d.worksactive?"worksactive containerlist-works" : "containerlist-works"}
                    key={d.title}>
                        <div className="item-works">
                            <div className="left-works">
                                <div className="container-works">
                                    <div className="img-works">
                                        <img src={d.icon} alt="img" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right-works">
                                <div className="right-img">
                                    <img src="https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>))}
            </div>

            <img src="/allimg/arrow.png"
                className="workarrow-left"
                onClick={() => handleClick("workarrow-left")} alt="img"/>
            <img src="/allimg/arrow.png" 
            className="workarrow-right"
            onClick={() => handleClick("workarrow-right")} alt="img"/>

        </div>
    )
}
