import Image from 'next/image';
import { Shimmer, ToBase64, Meta } from '../../components';
const fixiz = () => {
  return (
    <>
      <Meta title='Fixiz - Monir Hossain' />
      <header className='py-50 py-100--lg border-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <h2 className='h1'>Fixiz</h2>
              <p className='mb-0'>House Cleaning Service Website</p>
            </div>
          </div>
        </div>
      </header>
      <section className='py-50 py-100--lg'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 mx-auto'>
              <div className='mb-50'>
                <Image
                  src='/portfolio/minilearners.jpg'
                  width='1080'
                  height='951'
                  placeholder='blur'
                  blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                    Shimmer(648, 648)
                  )}`}
                  alt='Felt Moon'
                  layout='responsive'
                  className='mb-50'
                />
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-4 mb-50 mb-0--lg'>
                  <h4>Project Details</h4>
                  <ul className='project-details'>
                    <li>
                      <span>Client:</span> Adam Filop
                    </li>
                  </ul>
                  <a
                    href='https://fixiz.co.uk/'
                    target='_blank'
                    rel='noreferrer'
                    className='btn'
                  >
                    Visit Website
                  </a>
                </div>
                <div className='col-lg-8'>
                  <h4>Project Description</h4>
                  <p>{`Fixiz Needed a modern, professional website for House Cleaning Service in London.`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default fixiz;
