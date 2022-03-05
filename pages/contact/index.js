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
      <header className='py-10 py-lg-11'>
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
      <section className='pb-10 pb-lg-11'>
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
                    href='mailto:monir@monirhossain.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    monir@monirhossain.com
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
                    href='https://wa.me/+8801710021512'
                    target='_blank'
                    rel='noreferrer'
                  >
                    +880 1710021512
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
                    Monir Hossain
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
