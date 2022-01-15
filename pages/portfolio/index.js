import Link from 'next/link';
import Image from 'next/image';
import { Shimmer, ToBase64, Meta } from '../../components';

const PortfolioPage = () => {
  return (
    <>
      <Meta title='Portfolio - Monir Hossain' />
      <header className='pt-10'>
        <div className='container'>
          <div className='row'>
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
          <div className='row'>
            <div className='col-lg-4'>
              <div className='mb-5 mb-lg-0'>
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
              <div className='mb-5 mb-lg-0'>
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
              <div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
