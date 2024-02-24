import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Banner from '../components/banner';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      {/* <Img/> */}
      {/* <Banner/> */}
      <div className="flex flex-col items-center max-w-5xl w-full mx-auto">
        <main className="w-full">
          <h1 className="text-3xl lg:text-3xl text-center mb-12">
            {globalData.blogTitle}
          </h1>
          <br></br>
          <h1 className="text-3xl lg:text-5xl text-center mb-12">
            {
              'Stay tuned for our grand unveiling! Exciting things are coming your way soon...'
            }
          </h1>
          <ul className="w-full">
            <li className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
              <div className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                {/* <h2 className="text-2xl md:text-3xl">{post.data.title}</h2> */}

                <p className="mt-3 text-lg opacity-60">
                  {
                    "Welcome to Socrun, your trusted partner in safeguarding what matters most. Nestled in the heart of Toronto's dynamic startup ecosystem, we are a forward-thinking security services provider dedicated to delivering innovative solutions tailored to meet the unique needs of our clients."
                  }
                  <br />
                  <br />
                  {
                    "As an early-stage startup, we understand the importance of security in today's rapidly evolving world. That's why we're committed to redefining the landscape of security services, one breakthrough at a time. From comprehensive security assessments to cutting-edge surveillance systems, we offer a wide range of customizable solutions designed to protect your assets, your people, and your peace of mind."
                  }
                  <br />
                  <br />
                  {
                    "At Socrun, we believe that security is more than just a service – it's a promise. That's why we go above and beyond to exceed our clients' expectations, delivering unparalleled expertise, reliability, and peace of mind with every interaction. With a team of experienced professionals and a passion for innovation, we're proud to set the standard for excellence in the security industry."
                  }
                  <br />
                  <br />
                  {
                    'Join us on our mission to redefine security services in Toronto and beyond. Together, we can build a safer, more secure future for all.'
                  }
                  <br />
                  <br />
                  {'Welcome to Socrun. Welcome to peace of mind.'}
                  <br />
                  <br />
                </p>
              </div>
            </li>
          </ul>
        </main>
      </div>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
