import { Shimmer, ToBase64, Meta } from '../../components';
import { useState } from 'react';

import AllPortfolios from '../../components/PortfolioItems';
import Categories from '../../components/PortfolioCategories';
import portfolioData from '../../data/portfolio';
const allCategories = [
  'all',
  ...new Set(portfolioData.map((item) => item.category)),
];

const PortfolioPage = () => {
  const [menuItems, setMenuItems] = useState(portfolioData);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(portfolioData);
      return;
    }
    const newItems = portfolioData.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <Meta title='Portfolio - Monir Hossain' />
      <header className='pt-10'>
        <div className='container'>
          <div className='row g-3'>
            <div className='col-lg-8 text-center mx-auto'>
              <h2 className='display-5 mb-4'>My Portfolio</h2>
              <p className='mb-0 lead'>
                I enjoy sharing the projects just as much as I enjoy creating
                them. Sit back &amp; take a moment to browse through some of my
                completed work.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className='py-5 py-lg-8'>
        <div className='mb-2 mb-lg-8'>
          <Categories categories={categories} filterItems={filterItems} />
        </div>
        <AllPortfolios portfolioData={menuItems} />
      </div>
    </>
  );
};

export default PortfolioPage;
