import Link from 'next/link';
import Meta from '../../components/Meta';
const WebFonts = () => {
  return (
    <>
      <Meta title='The Importance of Carefully Choosing Web Fonts for Any Web Project' />
      <header className='py-50 py-100--lg'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 mx-auto text-center'>
              <h2 className='h1'>
                The Importance of Carefully Choosing Web Fonts for Any Web
                Project
              </h2>
              <p className='mb-0'>Last Update 27 Dec 2021</p>
            </div>
          </div>
        </div>
      </header>
      <section className='mb-50'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mx-auto'>
              <p>{`I do a lot of projects where I’m taking a design and building it in WordPress. One thing that I frequently run into is the use of non-web-friendly fonts throughout design files or just confusion over what exactly is needed to use a design file’s fonts legally on the web. Sometimes it’s a mix up over licensing and sometimes I think it just flies under the radar as something designers need to consider when designing for the web.`}</p>
              <h4>{`Desktop vs. Web Font Licensing`}</h4>
              <p>{`Most premium fonts, meaning a font that isn’t from somewhere like Google Fonts or similar, are available to purchase in either desktop form or a separate license for web use. These two license types are not the same thing.`}</p>
              <p>{`Desktop font licensing typically is associated with users. You may purchase a desktop font for up to 3 users, for example. This is granting the amount of users purchased the ability to install that font on their own computer and use it in any computer applications and it can be used to create any static content (like print design items like brochures and similar.) If you own a desktop font license for a project, you can fire up Photoshop or Illustrator or your graphics program of choice and go to town.`}</p>
              <p>{`But wait, isn’t a web design commonly made in these applications? So a desktop font should be good?`}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebFonts;
