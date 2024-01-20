import Link from "next/link";
import Header from "./components/header";
export default function Home() {
  return (
    <main>
      <Header />
      <p>
        <Link href="/about">go to link</Link>
      </p>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}
