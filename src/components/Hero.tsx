import bannerImg from "../assets/banner-stack.png";
export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
      {/* Left: Text content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Build Your Perfect{" "}
          <span className="text-gradient-brand">Tech Stack</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
          Explore modern frontend, backend, and database technologies — compare
          them, pick your favorites, and put together the stack that fits your
          next project best.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <button className="px-6 py-3 rounded-full text-white font-medium bg-gradient-brand hover:opacity-90 transition-opacity">
            Explore Technologies
          </button>
          <button className="px-6 py-3 rounded-full font-medium border-2 border-gray-300 text-gray-700 hover:border-gray-400 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Right: Banner image */}
      <div className="flex-1">
        <img
          src={bannerImg}
          alt="Dev Stack illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
}
