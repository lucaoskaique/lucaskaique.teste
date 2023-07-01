import { NextSeo } from 'next-seo';

export default function PageLayout({ children, frontmatter }) {
  return (
    <>
      <NextSeo
        title={frontmatter.title}
        description={frontmatter.description}
        openGraph={{
          title: frontmatter.title,
          description: frontmatter.description,
          images: [
            {
              url: frontmatter.image,
              alt: frontmatter.title,
            },
          ],
        }}
      />
      {children}
    </>
  );
}
