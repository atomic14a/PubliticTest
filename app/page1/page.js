"use client";

import { useEffect } from 'react';
import siteConfig from '../../siteConfig';

export default function Page1() {
  useEffect(() => {
    // Navigate automatically to the specified link after the configured timeout
    const timeout = setTimeout(() => {
      window.location.href = siteConfig.redirectUrl;
    }, siteConfig.redirectTimeoutSeconds * 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main>
      <a href={siteConfig.redirectUrl}>
        <img 
          src={siteConfig.page1Image} 
          alt="Image 1" 
          className="fullscreen-img" 
        />
      </a>
    </main>
  );
}

