import "./portfolio.css"
import "./portfolio-mobile.css"
import React, { useEffect, useState } from 'react'
import PortfolioList from "../portfolioList/PortfolioList";
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data"

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured"
        },

        {
            id: "web",
            title: "Web App"
        },

        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "desing",
            title: "Desing"
        }
        , {
            id: "content",
            title: "Content"
        }
    ];
    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;

            case "web":
                setData(webPortfolio);
                break;

            case "mobile":
                setData(mobilePortfolio);
                break;

            case "design":
                setData(designPortfolio);
                break;

            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }

    }, [selected])
    return (
        <div className="portfolio" id="portfolio">

            <h1 className="portfolio-h1">Portfolio</h1>
            <ul className="portfolio-ul">
                {list.map((item) => (
                    <PortfolioList
                        key={item.title}
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}

                {/* <li className="portfolio-li portfolio-active"></li>
            <li className="portfolio-li"></li>
            <li className="portfolio-li"></li>
            <li className="portfolio-li"></li>
            <li className="portfolio-li"></li> */}
            </ul>
            <div className="container-portfolio">
                {data.map((d) => (
                    <div className="item-portfolio" key={d.title}>
                        <h3 className="portfolio-h3">{d.title}</h3>
                        <img className="img-portfolio"
                            src={d.img}
                            alt="img" />
                    </div>
                ))}
            </div>

        </div>
    )
}


