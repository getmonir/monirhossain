import Link from 'next/link';
import { RiArrowRightSLine } from 'react-icons/ri';
import Meta from '../../components/Meta';
const BlogPage = () => {
  return (
    <>
      <Meta title='Blog - Monir Hossain' />
      <header className='py-10 py-lg-11'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 text-center mx-auto'>
              <h2 className='display-5 mb-3'>My Blog</h2>
              <p className='mb-0 lead'>
                A freelance WordPress developer blog about freelancing,
                Tutorials Web Design and Web Development.
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className='pb-10 pb-lg-11'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div>
                
                <h3 className='mb-0'>
                  <Link href='/blog/i-will-build-responsive-wordpress-website-design-website-redesign'>
                    <a className='link-primary text-decoration-none text-black'>
                      I will build responsive wordpress website design or website
                      redesign
                    </a>
                  </Link>
                </h3>
                <h6 className='fs-14 py-3 mb-0 color-gray-dark-v4 text-black-50'>
                  Last Update 28 Jan 22
                </h6>
            
                <p>
                  {`Are you looking for a professional WordPress developer to create a brand new WordPress Website design or redesign your old website? If yes, You are in the right place!....`}
                </p>
                <Link href='/blog/i-will-build-responsive-wordpress-website-design-website-redesign'>
                  <a className='link-primary text-black text-decoration-none'>
                    Read More
                    <span className='top-3 position-relative'>
                      <RiArrowRightSLine />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
