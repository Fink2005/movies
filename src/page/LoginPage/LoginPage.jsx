import React from 'react';
import FormLogin from './FormLogin';
import Lottie from 'lottie-react';
import bgAnimate from './bg-animate.json';

export default function LoginPage() {
  return (
    <div className="container flex items-center space-x-10">
      <div className="w-1/2 rounded border-2 border-blue-950 p-10">
        <FormLogin />
      </div>
      <div className="w-1/2">
        {/* animate */}
        <Lottie animationData={bgAnimate} loop={true} />
      </div>
    </div>
  );
}
