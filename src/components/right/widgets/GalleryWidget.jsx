import React, { useState } from "react";

const GalleryWidget = () => {
  const [images, setImages] = useState([
    "/gallery_img.jpg",
    "/gallery_img1.jpg",
    "/gallery_img2.jpg",
    "/kakashi.jpg",
    "/gallery_img3.jpg",
    // Add more image paths here
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleAddImage = () => {
    setIsModalOpen(true);
  };

  const handleModalSubmit = () => {
    if (newImageUrl) {
      setImages([...images, newImageUrl]);
      setNewImageUrl("");
      setIsModalOpen(false);
    }
  };

  const handleModalClose = () => {
    setNewImageUrl("");
    setIsModalOpen(false);
  };

  return (
    <div className="max-h-[316px] min-h-[316px] bg-[#363C43] flex flex-col rounded-[18.89px] shadow-widget-shadow px-[53px] max-lg:px-[16px] py-[17px] relative">
      <div className="flex justify-between items-center">
        <div className="bg-[#171717] px-[38px] py-[16px] rounded-[20px] max-xl:px-[20px] max-xl:py-[14px]">
          <p className="text-[20px] text-white max-xl:text-[12px] ">Gallery</p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleAddImage}
            className="text-white px-7 py-3 font-jakarta-sans font-extrabold text-[12px] rounded-[104px] shadow-add-button bg-[#FFFFFF08] max-xl:text-[8px] max-xl:font-bold max-xl:px-4"
          >
            + ADD IMAGE
          </button>
          <div className="w-[45px] h-[45px] rounded-full bg-navigate-btn flex justify-center items-center cursor-pointer shadow-navigate-btn hover:bg-navigate-btn-dark transition-all duration-200 ease-in-out" onClick={handlePrev}>
            <img src="/prevBtn.svg" alt="Previous Button" />
          </div>
          <div className="w-[45px] h-[45px] rounded-full bg-navigate-btn flex justify-center items-center cursor-pointer shadow-navigate-btn hover:bg-navigate-btn-dark transition-all duration-200 ease-in-out" onClick={handleNext}>
            <img src="/nextBtn.svg" alt="Next Button" />
          </div>
        </div>
      </div>

      <div className="overflow-hidden flex-1 mt-[35px] xl:mt-[20px] flex items-center ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / 3}%)`,
            width: `${(images.length * 100) / 3}%`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} style={{ flex: "0 0 33.3333%" }} className="">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="object-cover saturate-0 scale-90 hover:scale-100 hover:saturate-100 hover:shadow-2xl hover:-rotate-2 transition-all duration-300 ease-in-out rounded-[24px] cursor-pointer w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-3 top-[8%] max-lg:hidden">
        <img src="/QuestionMark.svg" alt="Question Mark" />
      </div>

      <div className="absolute left-3 top-[50%] max-lg:left-1.5 max-lg:top-[40%]">
        <img src="/Boxes.svg" alt="Boxes" className="max-lg:w-2/3" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h2 className="text-xl mb-2">Add Image</h2>
            <input
              type="text"
              placeholder="Enter image URL"
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleModalClose}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleModalSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryWidget;
