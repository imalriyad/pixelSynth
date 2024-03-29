
import { useState } from "react";

const Header = () => {
  const [prompt, setPrompt] = useState("");
  const [quantity, setQuantity] = useState(4);

  console.log(prompt, quantity);

  // Handle Generate
  const handleImageGeneration = async () => {
    
  };

  return (
    <>
      <div
        className="hero min-h-[60vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/6tkKxN2/herobg.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 md:text-4xl xl:text-5xl text-xl font-bold text-white">
              An AI Image Generation Transforms Digital Art || Revolutionize
              Creativity
            </h1>
            <p className="md:mb-12 mb-5 max-w-2xl mx-auto md:text-sm xl:text-base text-xs">
              Discover boundless creativity with our AI image generation tool.
              Instantly produce stunning visuals tailored to your needs using
              advanced machine learning algorithms
            </p>
            <div className="relative  mx-auto max-w-2xl">
              {/* Input field for getting prompt */}
              <input
                type="text"
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe what you want generate . . ."
                className="input rounded-full md:input-md input-sm md:placeholder:text-sm placeholder:text-xs pl-4 md:pl-6 text-black w-full "
              />

              <span className="md:absolute top-0 right-0 flex flex-col">
                {/* Select image quantity */}
                <select
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  value={quantity}
                  className="select-xs md:select-md md:rounded-none rounded-full select md:absolute select-bordered md:right-24 md:mt-0 mt-1 md:mb-0 mb-4  focus:outline-none text-black "
                >
                  <option value={6}>6 Images</option>
                  <option value={5}>5 Images</option>
                  <option value={4} selected>
                    4 Images
                  </option>
                  <option value={3}>3 Images</option>
                  <option value={2}>2 Images</option>
                </select>

                {/* Genarte button */}
                <button
                  onClick={handleImageGeneration}
                  className="btn md:btn-md btn-sm md:absolute right-0 btn-primary md:rounded-r-full rounded-full md:rounded-none"
                >
                  Generate
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
