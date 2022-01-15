import Image from 'next/image';
import { Shimmer, ToBase64, Meta } from '../../components';
const AboutPage = () => {
  return (
    <>
      <Meta title='About Monir Hossain' />

      <header className='pt-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mx-auto text-center'>
              <h2 className='display-5 mb-0'>About Monir</h2>
            </div>
          </div>
        </div>
      </header>

      <section className='py-10 py-lg-11'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mx-auto'>
              <div className='pt-2 pb-5'>
                <Image
                  src='/about-img.jpg'
                  width='800'
                  height='420'
                  placeholder='blur'
                  blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                    Shimmer(800, 420)
                  )}`}
                  alt='Felt Moon'
                  layout='responsive'
                  className='border rounded-3'
                />
              </div>
              <p>
                I&apos;m Monir, a freelance WordPress developer from Bangladesh.
                I&apos;ve been a WordPress developer for 5 years. I live and
                breathe WordPress.
              </p>
              <p>
                My custom-built websites are fast loading, accessible, and easy
                to manage. My design partners will help you improve conversion
                rates and user engagement.
              </p>
              {/* <p>
                In August 30, 2016 I started my freelancing carear with a
                freelance project from <a href=''>freelancer.com</a>. I also
                work in <a href=''>upwork.com</a> and <a href=''>fiverr.com</a>
              </p> */}
              <p>
                {`I truly live by the motto "work smarter, not harder." I feel
                that is the best way to deliver a client what they need in the
                shortest amount of time possible.`}
              </p>

              <p>
                I pay maximum attention to a project so that the job would be
                done as fast as possible with no loss in quality.
              </p>
              <p>If you are interested, feel free to contact me.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
