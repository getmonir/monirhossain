import Link from 'next/link';
import Image from 'next/image';
import { Shimmer, ToBase64, Meta } from '../../components';

const PortfolioPage = () => {
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
      <section className='py-10 py-lg-11'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-4'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary d-block'
                  href='https://sporsha.org/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/sporsha.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='Sporsha'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>Sporsha</h4>
                    <span>Charity organization website</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary'
                  href='https://fixiz.co.uk/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/fixiz.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='Fixiz'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>Fixiz</h4>
                    <span>House cleaning service webstie</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary'
                  href='https://belleviewdental.com.au/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/belleviewdental.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='Belleview Dental'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>Belleview Dental</h4>
                    <span>Dental clinic website</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary'
                  href='https://controlpost.org/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/control-post.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='control post'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>Control Post</h4>
                    <span>Digital marketing agency</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary'
                  href='http://no1-it.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/no1-it.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='No1 Intertrading'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>No1 Intertrading</h4>
                    <span>Intertrading limited company</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary'
                  href='http://www.earthbounduk.co.uk/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/earthbounduk.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='No1 Intertrading'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>Earth Bound</h4>
                    <span>The company manufactures pet bedding</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary'
                  href='https://www.felt-moon.co.uk/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/feltmoon.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='No1 Intertrading'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>Felt Moon</h4>
                    <span>Discover world of needle felt art Shop</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
