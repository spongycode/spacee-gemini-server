"use client"
import Image from 'next/image';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

import GithubIconSvg from '/public/img/github.svg';
import AndroidIconSvg from '/public/img/android.svg';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <ResponsiveImage src="/img/logo.svg" alt="Logo" width={250} height={250} />

      <AnimatedGradientText>Spacee Gemini</AnimatedGradientText>
      <ButtonRow>
        <IconButton>
          <Link href="https://github.com/spongycode/spacee-gemini/releases/download/1.1.0/spacee_gemini.apk" target="_blank">
            <Button>Get the app <AndroidIcon /> </Button>
          </Link>
        </IconButton>
        <IconButton>
          <Link href="https://github.com/spongycode/spacee-gemini" target="_blank">
            <Button>Explore code <GitHubIcon /></Button>
          </Link>
        </IconButton>
      </ButtonRow>
    </main>
  );
}

const gradient = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const AnimatedGradientText = styled.h1`
  animation: ${gradient} 5s ease-in-out infinite;
  background: linear-gradient(to right, #2592cc, #e7e1dd, #2193b0, #6dd5ed);
  background-size: 300%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Poppins', sans-serif;
  margin-top: 20px;
  font-size: 2.5em;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Center items horizontally */
  }
`;

const IconButton = styled.div`
  display: flex;
  align-items: center;
`;

const ResponsiveImage = styled(Image)`
  @media (max-width: 768px) {
    width: 150px; /* Adjust the desired width for the logo on mobile */
    height: 150px; /* Adjust the desired height for the logo on mobile */
  }
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #2592cc;
  color: #fff;
  border: none;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  border-radius: 8px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const IconStyle = styled.span`
  margin-left: 15px;
`;

const GitHubIcon = () => (
  <IconStyle>
    <Image src={GithubIconSvg} alt="GitHub Icon" width={20} height={20} />
  </IconStyle>
);

const AndroidIcon = () => (
  <IconStyle>
    <Image src={AndroidIconSvg} alt="Android Icon" width={20} height={20} />
  </IconStyle>
);
