import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from "../../assets/assets"

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className='explore-menu' id='explore-menu'>

            <h1>Explore Our Services.</h1>

            <p className='explore-menu-text'>Experience quality home services with Home Helps. Our experts provide trusted assistance in cleaning, repairs, and maintenance, tailored to suit your needs, ensuring comfort and efficiency in every task.</p>


            <div className='explore-menu-list'>

                {
                    menu_list.map((item, index) => {
                        return (
                            <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>

                                <img className={category===item.menu_name ? "active" : ""} src={item.menu_image} alt="" />

                                <p>{item.menu_name}</p>


                            </div>
                        )
                    })
                }

            </div>


            <hr />

        </div>
    )
}

export default ExploreMenu