import Link from 'next/link';
import siteConfig from '../../siteConfig';

export default function Page3() {
  return (
    <main>
      <Link href="/page1">
        <img 
          src={siteConfig.page3Image} 
          alt="Image 3" 
          className="fullscreen-img" 
        />
      </Link>
    </main>
  );
}

