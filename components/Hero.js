const Hero = () => {
  return (
    <div className='hero py-10 py-lg-11'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-8 mx-auto text-center'>
              <h2 className='display-5 mb-3'>{`Hi, I'm Monir`} <br />
              Welcome to my portfolio.</h2>
              <p className='lead'>
                {`I enjoy sharing the projects just as much as I enjoy creating them. Sit back & take a moment to browse through some of my completed work.`}
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
