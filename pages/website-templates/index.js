import Meta from '../../components/Meta';
import Image from 'next/image';
import Link from 'next/link';
import { Shimmer, ToBase64 } from '../../components';
const WebsiteTemplate = () => {
  return (
    <>
      <Meta title='Free website template by Monir Hossain' />
      <header className='py-10 py-lg-11'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 text-center mx-auto'>
              <h2 className='display-5 mb-0'>Free Website Template</h2>
              {/* <p className='mb-0 lead'>
                A freelance WordPress developer blog about freelancing,
                Tutorials Web Design and Web Development.
              </p> */}
            </div>
          </div>
        </div>
      </header>
      <section className='pb-10 pb-lg-11'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='mb-4 mb-lg-0'>
                <Link href='/website-templates'>
                  <a className='text-black link-primary text-decoration-none'>
                    <div className='mb-3'>
                      <Image
                        src='/portfolio/comming-soon.jpg'
                        width='1280'
                        height='769'
                        placeholder='blur'
                        blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                          Shimmer(1280, 769)
                        )}`}
                        alt='Felt Moon'
                        layout='responsive'
                      />
                    </div>
                    <div>
                      <h4 className='mb-0 text-inherit'>Comming Soon</h4>
                      <span>Comming soon free template</span>
                    </div>
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

export default WebsiteTemplate;
