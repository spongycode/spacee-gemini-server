import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Link href="https://github.com/spongycode/spacee-gemini"
        className="hover:cursor-pointer flex justify-center items-center"
        style={{ width: '200px', height: '200px' }}>
        <Image
          src="/logo_text.svg"
          alt="Logo"
          width={200}
          height={200}
        />
      </Link>
    </main>
  );
}
