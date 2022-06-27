import { useEffect } from 'react';
import Link from 'next/link';
import fs from 'fs';

export default function Home({ slugs, ...props }) {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }, []);
  return (
    <div>
      {slugs.map((slug) => (
        <div key={slug}>
          <Link href={`/blog/${slug}`}>{slug}</Link>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts');
  const slugs = files.map((file) => file.replace('.md', ''));
  return {
    props: {
      slugs,
    },
  };
};
