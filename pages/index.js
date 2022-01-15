import {
  TestimonialSlider,
  Hero,
  BlogSection,
  PortfolioSection,
  FreebiesSection,
  GetStarted,
  ServiceSection,
  WhyMe,
  MyServices,
  MyPortfolio,
  MyFreeWebsite,
} from '../components';

const index = () => {
  return (
    <>
      <Hero />
      <WhyMe />
      <MyServices />
      <MyPortfolio />
      <TestimonialSlider />
      <MyFreeWebsite />
      <GetStarted />
      <BlogSection />
    </>
  );
};

export default index;
