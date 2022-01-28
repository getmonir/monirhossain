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
          <div className='row g-lg-5'>
            <div className='col-lg-6'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary d-block'
                  href='https://nuriabeauty.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/nuriabeauty.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='twelve beauty'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>Nuria Beauty</h4>
                    <span>Online beauty shop website</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary d-block'
                  href='https://joecoffeecompany.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/joecoffeecompany.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='twelve beauty'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>Joe Coffe</h4>
                    <span>Coffee company eCommerce website</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary d-block'
                  href='https://www.flwr.co.nz/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/flwr.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='twelve beauty'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>Flwr</h4>
                    <span>Flower shop with WooCommerce</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary d-block'
                  href='https://www.twelvebeauty.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/twelvebeauty.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='twelve beauty'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>Twelve Beauty</h4>
                    <span>Online shop with WooCommerce</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
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
            <div className='col-lg-6'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary d-block'
                  href='https://fixandgony.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/fixandgony.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='fixandgony'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>Fix and Go</h4>
                    <span>Phone repairs website</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
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
            <div className='col-lg-6'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary'
                  href='https://www.nordicappeal.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/nordicappeal.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='nordicappeal'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>Nordic Appeal</h4>
                    <span>Apple accessories online shop</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary'
                  href='https://www.fhittingroom.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/fhittingroom.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='fhittingroom'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>Fhitting Room</h4>
                    <span>WordPress modern gym webstie</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary'
                  href='https://midtowndentalgroup.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/midtowndentalgroup.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='mid town dental'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>Mid Town Dental</h4>
                    <span>Dental clinic website</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary'
                  href='https://cbeaux.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/cbeaux.jpg'
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
                    <h4 className='mb-0 text-inherit'>Cbeaux</h4>
                    <span>Cbeaux online store</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
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
            <div className='col-lg-6'>
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
            <div className='col-lg-6'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary'
                  href='https://britishknights.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/britishknights.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='britishknights'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>British Knights</h4>
                    <span>Fashion eCommerce website</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary'
                  href='https://ilovekickboxing.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/ilovekickboxing.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='ilovekickboxing'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>I Love Kick Boxing</h4>
                    <span>Boxing training WordPess webiste</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
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
            <div className='col-lg-6'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary'
                  href='http://tusdental.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/tusdental.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='tusdental'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>{`TU'S Dental`}</h4>
                    <span>Dental clininc websit desgin</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
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
            <div className='col-lg-6'>
              <div className='mb-5'>
                <a
                  className='text-decoration-none text-black link-primary'
                  href='http://www.nycsmilespa.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/nycsmilespa.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='nycsmilespa'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>Smile Spa</h4>
                    <span>WordPress reponsive spa website</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
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
