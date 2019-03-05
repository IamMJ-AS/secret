// Packages
import React from 'react'

// Layouts
import Page from '../layouts/page'

// UI
import Row from '../ui/row'
import theme from '../ui/theme'

const About = () => {
  return (
    <Page>
      <Row>
        <h2>About</h2>

        <p>
          `secret` is side-project created by{' '}
          <a href="https://twitter.com/bukinoshita">bukinoshita</a> to solve a simple problem.
          Sometimes we want to share something when chatting with a friend or co-worker, but we
          don't want the secret to live forever on the chat platform (whatsapp, slack, etc).
        </p>

        <p>
          Now you can safely share secrets with whoever you want. And when the person sees it it
          will automatically delete the secret forever.
        </p>

        <p>
          When you use `secret`, we receive an encrypted copy of the secret. `secret` does not have
          the ability to access the content of your encrypted secret, and only keeps it untill
          somebody opens it.
        </p>

        <p>
          `secret` uses WebCrypto API with the AES-GCM algorithm to encrypt and decrypt the secret
          in the browser, meaning the secret that's transferred to `secret`'s server is already
          encrypted and its contents can't be viewed by us.
        </p>

        <p>
          Anyone you provide with the unique link (including the encryption key) to your encrypted
          secret will be able to open and access that secret. You should not provide the link to
          anyone you do not want to have access to your encrypted secret.
        </p>

        <p>
          * Make sure you are using a modern browser that{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API#Browser_compatibility">
            supports WebCrypto API
          </a>
          .
        </p>

        <h2>Links</h2>

        <p>
          Check us on <a href="https://www.producthunt.com/posts/secret-3">Product Hunt</a> and{' '}
          <a href="https://github.com/bukinoshita/secret">GitHub</a>.
        </p>

        <h2>Sponsors</h2>

        <p>
          <svg width="150px" viewBox="0 0 256 54">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-751.000000, -449.000000)" fill="#FFFFFF">
                <g transform="translate(751.000000, 378.000000)">
                  <g transform="translate(0.000000, 71.000000)">
                    <path d="M83.4829079,43 L87.30615,43 L87.30615,28.8496097 C87.30615,25.6855473 89.5034156,23.3125005 92.5356421,23.3125005 C95.3701147,23.3125005 97.2158177,25.1142583 97.2158177,27.8608402 L97.2158177,43 L101.03906,43 L101.03906,28.6518558 C101.03906,25.5537114 103.170407,23.3125005 106.202634,23.3125005 C109.212888,23.3125005 110.948728,25.1582036 110.948728,28.2783207 L110.948728,43 L114.77197,43 L114.77197,27.3994145 C114.77197,22.8730474 111.849606,19.9287115 107.323239,19.9287115 C104.115232,19.9287115 101.434568,21.5546881 100.160154,24.2792974 L100.072263,24.2792974 C99.0834935,21.5107428 96.7763646,19.9287115 93.6562475,19.9287115 C90.689939,19.9287115 88.2509742,21.4228521 87.1743141,23.8837896 L87.0864235,23.8837896 L87.0864235,20.1484381 L83.4829079,20.1484381 L83.4829079,43 Z M127.748141,43.2197266 C121.28818,43.2197266 117.157321,38.6713868 117.157321,31.5742191 C117.157321,24.4550786 121.28818,19.9287115 127.748141,19.9287115 C134.186129,19.9287115 138.316989,24.4550786 138.316989,31.5742191 C138.316989,38.6713868 134.186129,43.2197266 127.748141,43.2197266 Z M127.748141,39.8579102 C131.944918,39.8579102 134.427828,36.7817384 134.427828,31.5742191 C134.427828,26.3666997 131.944918,23.2905279 127.748141,23.2905279 C123.529391,23.2905279 121.046481,26.3886723 121.046481,31.5742191 C121.046481,36.7817384 123.551364,39.8579102 127.748141,39.8579102 Z M150.282418,43.2197266 C143.822457,43.2197266 139.691598,38.6713868 139.691598,31.5742191 C139.691598,24.4550786 143.822457,19.9287115 150.282418,19.9287115 C156.720406,19.9287115 160.851265,24.4550786 160.851265,31.5742191 C160.851265,38.6713868 156.720406,43.2197266 150.282418,43.2197266 Z M150.282418,39.8579102 C154.479195,39.8579102 156.962105,36.7817384 156.962105,31.5742191 C156.962105,26.3666997 154.479195,23.2905279 150.282418,23.2905279 C146.063668,23.2905279 143.580758,26.3886723 143.580758,31.5742191 C143.580758,36.7817384 146.085641,39.8579102 150.282418,39.8579102 Z M163.34648,43 L167.169722,43 L167.169722,29.7504886 C167.169722,25.8833012 169.410933,23.3125005 173.102339,23.3125005 C176.661909,23.3125005 178.375777,25.3339848 178.375777,29.025391 L178.375777,43 L182.199019,43 L182.199019,28.3442387 C182.199019,23.1586919 179.298628,19.9287115 174.288863,19.9287115 C170.751265,19.9287115 168.466109,21.2690435 167.037886,23.8837896 L166.949996,23.8837896 L166.949996,20.1484381 L163.34648,20.1484381 L163.34648,43 Z M185.902729,43 L189.725972,43 L189.725972,11.2934579 L185.902729,11.2934579 L185.902729,43 Z M201.076167,40.0556641 C204.7456,40.0556641 207.448237,37.5727541 207.448237,34.320801 L207.448237,32.4970706 L201.537592,32.8706057 C198.153803,33.0683596 196.395991,34.320801 196.395991,36.4960939 C196.395991,38.5834962 198.219721,40.0556641 201.076167,40.0556641 Z M200.219233,43.3295898 C195.583003,43.3295898 192.506831,40.5390626 192.506831,36.4960939 C192.506831,32.5629886 195.517085,30.2338871 201.098139,29.9042972 L207.448237,29.5307621 L207.448237,27.6411137 C207.448237,24.8286138 205.602534,23.2905279 202.284663,23.2905279 C199.669917,23.2905279 197.71435,24.6308599 197.274897,26.7622075 L193.627436,26.7622075 C193.7373,22.8730474 197.494624,19.9287115 202.350581,19.9287115 C207.777827,19.9287115 211.271479,22.8071294 211.271479,27.3115239 L211.271479,43 L207.645991,43 L207.645991,39.0668946 L207.5581,39.0668946 C206.261713,41.59375 203.405268,43.3295898 200.219233,43.3295898 Z M226.137299,43.2197266 C222.797455,43.2197266 220.182709,41.7695313 218.710541,39.1328126 L218.62265,39.1328126 L218.62265,43 L214.97519,43 L214.97519,11.2934579 L218.798432,11.2934579 L218.798432,23.8618169 L218.886322,23.8618169 C220.314545,21.3569342 222.973236,19.9287115 226.203217,19.9287115 C231.960052,19.9287115 235.849213,24.5869146 235.849213,31.5742191 C235.849213,38.5834962 231.960052,43.2197266 226.137299,43.2197266 Z M225.390228,23.3125005 C221.457123,23.3125005 218.776459,26.6743168 218.776459,31.5742191 C218.776459,36.4960939 221.457123,39.8359376 225.390228,39.8359376 C229.345306,39.8359376 231.93808,36.6059572 231.93808,31.5742191 C231.93808,26.5644536 229.345306,23.3125005 225.390228,23.3125005 Z M237.970892,26.5424809 C237.970892,29.6186527 239.948431,31.640137 243.969427,32.6728518 L247.990423,33.7055667 C250.561224,34.386719 251.506048,35.2216799 251.506048,36.8037111 C251.506048,38.8251954 249.572454,40.0996095 246.496283,40.0996095 C243.420111,40.0996095 241.552435,38.8691407 241.1789,36.5400392 L237.355658,36.5400392 C237.70722,40.5390626 241.26679,43.2197266 246.254583,43.2197266 C251.571966,43.2197266 255.351263,40.4511719 255.351263,36.5180666 C255.351263,33.2001956 253.681341,31.5742191 249.067083,30.4096683 L245.529486,29.5527347 C242.936712,28.8935551 241.728216,27.8828129 241.728216,26.344727 C241.728216,24.3891606 243.595892,23.0708013 246.364447,23.0708013 C249.154974,23.0708013 251.000677,24.3891606 251.220404,26.5205082 L254.867864,26.5205082 C254.736028,22.7192388 251.198431,19.9506842 246.496283,19.9506842 C241.486517,19.9506842 237.970892,22.6752935 237.970892,26.5424809 Z" />
                    <circle cx="26.9999993" cy="26.9999993" r="26.9999993" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </p>
      </Row>

      <style jsx>{`
        h2 {
          color: ${theme.colors.white};
          margin-bottom: ${theme.spacing.large};
          font-size: ${theme.typography.h300.fontSize};
          font-weight: ${theme.typography.h300.fontWeight};
          line-height: ${theme.typography.h300.lineHeight};
        }

        p {
          color: ${theme.colors.gray};
          font-size: ${theme.typography.paragraph.fontSize};
          font-weight: ${theme.typography.paragraph.fontWeight};
          line-height: ${theme.typography.paragraph.lineHeight};
          margin-bottom: ${theme.spacing.large};
        }

        a {
          color: ${theme.colors.white};
          position: relative;
        }

        a:after {
          content: '';
          height: 1px;
          background-color: ${theme.colors.white};
          position: absolute;
          pointer-events: none;
          bottom: -4px;
          left: 0;
          right: 0;
          opacity: 0;
          transform: scale(0, 1);
          transition: all 200ms;
        }

        a:hover:after {
          opacity: 1;
          transform: scale(1, 1);
        }

        svg {
          margin-bottom: 30px;
        }
      `}</style>
    </Page>
  )
}

export default About
