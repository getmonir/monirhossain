import Meta from '../../components/Meta';
import { RiMailSendLine, RiSkypeLine, RiWhatsappLine } from 'react-icons/ri';
const index = () => {
  return (
    <>
      <Meta title='Contact Me - Monir Hossain' />
      <header className='pt-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 text-center mx-auto'>
              <h2 className='display-5 mb-3'>Contact Me</h2>
              <p className='mb-0 lead'>
                I &apos;d love to find out more about your upcoming WordPress
                project. Get in touch today.
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className='py-10 py-lg-11'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='border p-4 rounded-3'>
                <span className='fs-1'>
                  <RiMailSendLine />
                </span>
                <h4>Email</h4>
                <p className='mb-0'>getmonirhossain@gmail.com</p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='border p-4 rounded-3'>
                <span className='fs-1'>
                  <RiWhatsappLine />
                </span>
                <h4>Whatsapp</h4>
                <p className='mb-0'>+88 01521 56 90 94</p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='border p-4 rounded-3'>
                <span className='fs-1'>
                  <RiSkypeLine />
                </span>
                <h4>Skype</h4>
                <p className='mb-0'>live:cc586986d6ed5bfc</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
