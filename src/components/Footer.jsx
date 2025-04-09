const Footer = function () {
  return (
    <>
      <div className="row justify-content-center pt-5 text-secondary bg-dark">
        <div className="col col-6">
          <div className="row">
            <div className="col mb-2">
              <i className="bi bi-facebook footer-icon me-2"></i>
              <i className="bi bi-instagram footer-icon me-2"></i>
              <i className="bi bi-twitter-x footer-icon me-2"></i>
              <i className="bi bi-youtube footer-icon"></i>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <a className="text-secondary text-decoration-none" href="#">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a className="text-secondary text-decoration-none" href="#">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a className="text-secondary text-decoration-none" href="#">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a className="text-secondary text-decoration-none" href="#">
                      Contact us
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <a className="text-secondary text-decoration-none" href="#">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a className="text-secondary text-decoration-none" href="#">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a className="text-secondary text-decoration-none" href="#">
                      Legal Notices
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <a className="text-secondary text-decoration-none" href="#">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a className="text-secondary text-decoration-none" href="#">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a className="text-secondary text-decoration-none" href="#">
                      Cookie Preferences
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <a className="text-secondary text-decoration-none" href="#">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a className="text-secondary text-decoration-none" href="#">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a className="text-secondary text-decoration-none" href="#">
                      Corporate Information
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col mb-2">
              <button
                type="button"
                className="btn btn-sm footer-button rounded-0 mt-3 text-secondary border border-secondary"
              >
                Service Code
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col mb-2 mt-2 copyright">
              © 1997-2023 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
