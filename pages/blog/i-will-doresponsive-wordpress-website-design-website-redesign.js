import Link from 'next/link';
import Image from 'next/image';
import { Shimmer, ToBase64, Meta } from '../../components';

const CustomWordPress = () => {
  return (
    <>
      <Meta title='Why Custom WordPress Themes are Better for Your Business - by Monir Hossain' />
      <section className='py-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mx-auto'>
              <h2 className='h1 mb-3 text-center'>
                I will do responsive wordpress website design or website
                redesign do responsive wordpress website design or website
                redesign
              </h2>
              <p className='mb-0 py-4 text-center'>Last Update 27 Dec 2021</p>
              <div className='mb-5'>
                <Image
                  src='/blog/responsive-wordpress-website-design-or-website-redesign.jpg'
                  width='1280'
                  height='769'
                  placeholder='blur'
                  blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                    Shimmer(1280, 769)
                  )}`}
                  alt='Felt Moon'
                  layout='responsive'
                  className='mb-50'
                />
              </div>
              <div>
                <p>{`Are you looking for a professional WordPress developer to create a brand new WordPress Website design or redesign your old website? If yes, You are in the right place!`}</p>
                <h4>{`Service I’m Providing`}</h4>
                <p className='mb-0'>{`✅ Develop a complete WordPress Website according to your choice/layout`}</p>
                <p className='mb-0'>{`✅ Fully Responsive WordPress website`}</p>
                <p className='mb-0'>{`✅ Fix, Revamp & redesign any WordPress website`}</p>
                <p className='mb-0'>{`✅ Full functional eCommerce or online store`}</p>
                <p className='mb-0'>{`✅ Setup Payment Gateway (Visa, Master, PayPal, Klarna, Square)`}</p>
                <p className='mb-0'>{`✅ Custom WordPress theme design`}</p>
                <p className='mb-0'>{`✅ Fast Loading Speed Optimization`}</p>
                <p className='mb-0'>{`✅ Higher Level Security configuration`}</p>
                <p className='mb-0'>{`✅ Social Media Integration`}</p>
                <p className='mb-0'>{`✅ Mailchimp Integration`}</p>
                <p className='mb-0'>{`✅ Facebook Pixel Integration`}</p>
                <p className='mb-0'>{`✅ Google Maps Integration`}</p>
                <p className='mb-0'>{`✅ Premium theme customize`}</p>
                <p>{`✅ Booking, Appointment, Calendar, Event Integration`}</p>
                <h4>{`Why do you hire?`}</h4>
                <p className='mb-0'>
                  ✅ 5 years experience in Custom WP theme design
                </p>
                <p className='mb-0'>
                  {`✅ Premium features at the lowest cost `}
                </p>
                <p className='mb-0'>{`✅ 100% Customer Satisfaction Guarantee`}</p>
                <p className='mb-0'>{`✅ On-Time Delivery`}</p>
                <p className='mb-0'>{`✅ Video support`}</p>
                <p className='mb-0'>{`✅ Lifetime support free support`}</p>
                <p className='mb-0'>{`✅ Trusted freelance WordPress developer`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomWordPress;
