import Link from 'next/link';
import siteConfig from '../../siteConfig';

export default function Page1() {
  return (
    <main>
      <Link href="/page2">
        <img 
          src={siteConfig.page1Image} 
          alt="Image 1" 
          className="fullscreen-img" 
        />
      </Link>
    </main>
  );
}

