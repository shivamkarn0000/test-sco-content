import React from './portfolioList.css'
import './portfolioList-mobile.css'

export default function PortfolioList({id, title, active, setSelected }) {
    return (
        <li className={active ? "portfolioList active" : "portfolioList"} onClick={() => setSelected(id)}
        key={title}>
            {title}
        </li>
    )
}
