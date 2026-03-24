import Link from 'next/link';
import siteConfig from '../../siteConfig';

export default function Page2() {
  return (
    <main>
      <Link href="/page3">
        <img 
          src={siteConfig.page2Image} 
          alt="Image 2" 
          className="fullscreen-img" 
        />
      </Link>
    </main>
  );
}

