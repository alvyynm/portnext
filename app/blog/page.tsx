export default function Blog() {
  return (
    <div>
      <h1>Blog page</h1>
    </div>
  );
}

// Create static params for url slugs
export function getStaticParams() {
  return [
    { slug: 'learn-to-code' },
    { slug: 'angular-vs-react' },
    { slug: 'typescript-for-dummies' }
  ];
}
