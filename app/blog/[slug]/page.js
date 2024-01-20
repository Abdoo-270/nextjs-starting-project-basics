export default function BlogPostPage({ params }) {
  return (
    <main>
      <p>{params.slug}</p>
    </main>
  );
}
