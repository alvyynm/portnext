export default function BlogLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      {children}
    </section>
  );
}
