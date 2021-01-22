import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ArrowLeftCircle } from 'react-feather';

import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

import { Button } from '../../components/Button';
import { OuterPadding } from '../../lib/constants';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Button onClick={() => router.back()} style={{ display: 'inline-flex', alignItems: 'center' }}>
        <ArrowLeftCircle style={{ marginRight: 10 }} />
        Back to Blog
      </Button>

      <h1>{post.title}</h1>
      <h4 style={{ marginBottom: `calc(${OuterPadding} * 3)` }}>{new Date(post.date).toLocaleString()}</h4>
      {router.isFallback ? 'Loading…' : <div dangerouslySetInnerHTML={{ __html: post.content }} />}
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug.split('/'),
        },
      };
    }),
    fallback: false,
  };
}