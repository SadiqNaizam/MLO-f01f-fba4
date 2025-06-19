import React from 'react';
import LoginCard from '../components/Login/LoginCard';
import Header from '../components/layout/Header';

/**
 * IndexPage serves as the main login page for the InsideBox application.
 * It arranges the Header and LoginCard components according to the specified layout.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Header positioned at the top-left of the page */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10">
        <Header />
      </div>

      {/* Main content area dedicated to centering the LoginCard */}
      {/* This implements the core layout: full-height, flex-centered content. */}
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <LoginCard />
      </main>
    </div>
  );
};

export default IndexPage;
