import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <Link href='/'>Go Home</Link>
      <Link href={`/blog/srf`}>View post</Link>
    </div>
  );
}
