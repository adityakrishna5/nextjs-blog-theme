export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Socrun';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'we are Sepcialized in  providing customized services for  cybersecurity, cloud security, IT administration, and infrastructure support.';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '© 2024 Socrun All rights reserved';

  return {
    name,
    blogTitle,
    footerText,
  };
};

// Socrum specializes in tailored services catering to IT administration, cybersecurity, cloud security, and infrastructure support. Our expertise lies in delivering comprehensive solutions uniquely designed to address the specific needs and challenges of our clients in these critical areas of technology management.