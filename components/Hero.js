// Import Swiper React components
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='hero py-6'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-8 mx-auto'>
            <div className='pt-5 pb-10 text-center'>
              <h1 className='display-5'>Freelnace WordPress Developer</h1>
              <p className='lead py-3'>
                Freelance specialist in responsive WordPress design, front-end
                design, custom WordPress builds and WooCommerce.
              </p>
              <a
                href='https://www.fiverr.com/getmonir'
                target='_blank'
                rel='noreferrer'
                className='btn btn-primary'
              >
                Hire me on Fiverr
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
