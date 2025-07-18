import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import MenuItem from './MenuItem';
import useMenu from '../Hooks/useMenu';


const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter( item => item.category === 'popular');

    return (
        <section className="mb-12">
            <SectionTitle
              heading="From Our Menu"
              subHeading="Popular Items"
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
              {
                popular.map(item => (
                  <MenuItem
                    key={item._id}
                    item={item}
                  />
                ))
              }
            </div>
        </section>

    );
};

export default PopularMenu;