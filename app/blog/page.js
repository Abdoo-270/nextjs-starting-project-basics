import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>here is the blogs read them ...</h1>
      <p>
        <Link href="/blog/blog-1">blog-1</Link>
      </p>
      <p>
        <Link href="/blog/blog-2">blog-2</Link>
      </p>
    </main>
  );
}
