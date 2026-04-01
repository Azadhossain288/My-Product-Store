
import bannerImg from '../assets/banner.png';
const Banner = () => {
  return (
    <section className="bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-700 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Supercharge Your <br />
            <span className="text-yellow-300">Digital Workflow</span>
          </h1>
          <p className="text-purple-200 text-lg mb-8 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-full transition shadow-lg">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-violet-700 font-bold px-6 py-3 rounded-full transition">
              View Products
            </button>
          </div>
        </div>



        {/* Image / Icon */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 text-8xl shadow-2xl">
            <img src={bannerImg} />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Banner
