import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="relative bg-green-300 h-screen flex items-center justify-center">
        <div className="text-center">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">
            Mint Your Social Media Into NFTs
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Monetize Your Content With Ease
          </p>

          {/* Get Started Button */}
          <a
            href="/create"
            className="px-8 py-3 bg-black text-white rounded-lg text-lg font-semibold hover:bg-gray-800"
          >
            Get Started
          </a>
        </div>
      </section>

      <div className="bg-gray-50 py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center space-y-12 md:space-y-0 md:space-x-12">
          {/* Step 1: Connect Your Social Media */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              {/* Optimized Image */}
              <Image
                src="/icons/how-it-works/connect.svg"
                alt="Connect Social Media"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Connect Your Social Media</h3>
            <p className="text-gray-600">Easily connect your Instagram or Twitter account.</p>
          </div>

          {/* Step 2: Mint Your Content */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              {/* Optimized Image */}
              <Image
                src="/icons/how-it-works/mint.svg"
                alt="Mint Your Content"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mint Your Content</h3>
            <p className="text-gray-600">Choose your posts and mint them as unique NFTs.</p>
          </div>

          {/* Step 3: Sell Your NFTs */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              {/* Optimized Image */}
              <Image
                src="/icons/how-it-works/sell.svg"
                alt="Sell Your NFTs"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sell Your NFTs</h3>
            <p className="text-gray-600">List your NFTs in our marketplace and reach buyers worldwide.</p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="px-8 py-3 bg-black text-white rounded-lg text-lg font-medium hover:bg-gray-800"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="bg-emerald-900 py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Why Choose MoMint?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Mint NFTs */}
          <div className=" p-8 rounded-lg text-center border border-white">
            <div className="flex justify-center mb-4">
              <Image
                src="/icons/why-choose/mint.svg"
                alt="Mint NFTs"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Mint NFTs</h3>
            <p className="text-gray-400">
              Turn your social media posts into valuable NFTs in just a few clicks.
            </p>
          </div>

          {/* Sell Globally */}
          <div className=" p-8 rounded-lg text-center border border-white">
            <div className="flex justify-center mb-4">
              <Image
                src="/icons/why-choose/global.svg"
                alt="Sell Globally"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Sell Globally</h3>
            <p className="text-gray-400">
              Reach a global audience and monetize your content like never before.
            </p>
          </div>

          {/* Secure & Fast */}
          <div className=" p-8 rounded-lg text-center border border-white">
            <div className="flex justify-center mb-4">
              <Image
                src="/icons/why-choose/secure.svg"
                alt="Secure & Fast"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure & Fast</h3>
            <p className="text-gray-400">
              Enjoy fast transactions and top-notch security with blockchain technology.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-50 py-4">
        {/* Outer flex div with centered items */}
        <div className="flex items-center bg-green-300 p-10 rounded-lg w-full max-w-5xl gap-20">
          {/* Left side: Image */}

          <Image
            src="/illustrations/girl-with-phone.png" // Replace with the path of your image
            alt="Girl with Phone"
            width={256}
            height={256}
            priority={true}
          />

          {/* Right side: Text and Button */}
          <div className="flex flex-col justify-start">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
              Ready To Start Minting?
            </h2>
            <a
              href="/mint"
              className="px-8 py-3 bg-black text-white max-w-max rounded-lg text-lg font-semibold whitespace-nowrap hover:bg-gray-800"
            >
              Start Minting
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
