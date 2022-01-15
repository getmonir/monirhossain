import Meta from '../../components/Meta';
import {
  RiMailSendLine,
  RiMessengerFill,
  RiSkypeLine,
  RiWhatsappLine,
} from 'react-icons/ri';
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
              <div className='border p-4 rounded-3 mb-4'>
                <span className='fs-1'>
                  <RiMailSendLine />
                </span>
                <h4>Email</h4>
                <p className='mb-0 lead'>
                  <a
                    className='text-decoration-none text-link link-primary'
                    href='mailto:getmonirhossain@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    getmonirhossain@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='border p-4 rounded-3 mb-4'>
                <span className='fs-1'>
                  <RiWhatsappLine />
                </span>
                <h4>Whatsapp</h4>
                <p className='mb-0 lead'>
                  <a
                    className='text-decoration-none text-link link-primary'
                    href='https://wa.me/+8801521569094'
                    target='_blank'
                    rel='noreferrer'
                  >
                    +88 01521 56 90 94
                  </a>
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='border p-4 rounded-3 mb-4'>
                <span className='fs-1'>
                  <RiSkypeLine />
                </span>
                <h4>Skype</h4>
                <p className='mb-0 lead'>
                  <a
                    className='text-decoration-none text-link link-primary'
                    href='https://join.skype.com/invite/vldEXJepMI0M'
                    target='_blank'
                    rel='noreferrer'
                  >
                    getmonirhossain
                  </a>
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='border p-4 rounded-3'>
                <span className='fs-1'>
                  <RiMessengerFill />
                </span>
                <h4>Messanger</h4>
                <p className='mb-0 lead'>
                  <a
                    className='text-decoration-none text-link link-primary'
                    href='http://m.me/getmonir'
                    target='_blank'
                    rel='noreferrer'
                  >
                    getmonir
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
