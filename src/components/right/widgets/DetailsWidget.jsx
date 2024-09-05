import React, { useState } from "react";

const DetailsWidget = () => {
  const [currentTab, setCurrentTab] = useState("About Me");
  return (
    <div className="max-h-[316px] bg-[#363C43] flex flex-col rounded-[18.89px] shadow-widget-shadow px-[53px] max-lg:px-[16px] py-[17px] relative">
      <div className="bg-[#171717] min-h-[62px] shadow-rect-shadow text-[18px] max-lg:text-[10px] max-xl:text-[12px] text-[#A3ADB2] flex items-center justify-center gap-[6px] rounded-[23px] py-[6px] px-[11px] relative">
        <div
          className="flex-1 details-tab min-h-[49px] flex items-center justify-center cursor-pointer rounded-2xl relative"
          onClick={() => setCurrentTab("About Me")}
        >
          <p
            className={`absolute z-10 ${
              currentTab == "About Me" ? "text-white" : ""
            } transition-all duration-500 ease-in-out`}
          >
            About Me
          </p>
        </div>
        <div
          className="flex-1 details-tab min-h-[49px] flex items-center justify-center cursor-pointer rounded-2xl relative"
          onClick={() => setCurrentTab("Experiences")}
        >
          <p
            className={`absolute z-10 ${
              currentTab == "Experiences" ? "text-white" : ""
            } transition-all duration-500 ease-in-out`}
          >
            Experiences
          </p>
        </div>
        <div
          className="flex-1 details-tab min-h-[49px] flex items-center justify-center cursor-pointer rounded-2xl relative"
          onClick={() => setCurrentTab("Recommended")}
        >
          <p
            className={`absolute z-10 ${
              currentTab == "Recommended" ? "text-white" : ""
            } transition-all duration-500 ease-in-out`}
          >
            Recommended
          </p>
        </div>
        <div
          className={`absolute w-[32%] min-h-[49px] text-white ${
            currentTab == "About Me"
              ? "left-[1.3%]"
              : currentTab == "Experiences"
              ? "left-[34%]"
              : "left-[66.4%]"
          } rounded-2xl bg-[#28292F] flex items-center justify-center transition-all duration-500 -z-1 ease-in-out shadow-moving-tab`}
        ></div>
      </div>

      <div className="info-comp mt-[35px] flex-1 mb-[10px] max-lg:text-[14px] max-lg:px-[16px] max-lg:-mr-2 overflow-auto details-scrollbar -mr-8 pe-8">
        {currentTab === "About Me" && (
          <p className="max-w-[100%] text-[#969696]">
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now.<br/><br />I was born
            and raised in Albany, NY, and have been living in Santa Carla for
            the past 10 years with my wife Tiffany and our 4-year-old twin
            daughters, Emma and Ella. Both of them are just starting school, so
            my calendar is usually blocked between 9-10 AM to help get them
            ready and off to class. Outside of work, I enjoy hiking, exploring
            the beautiful landscapes of California, and I'm a passionate cook,
            always experimenting with new recipes in the kitchen. I'm thrilled
            to connect with you and help you navigate the solutions Salesforce
            offers to make your business thrive.
          </p>
        )}
        {currentTab === "Experiences" && (
          <p className="max-w-[100%] text-[#969696]">
            Over the past 3 years at Salesforce, I've had the pleasure of
            helping numerous clients across various industries streamline their
            operations and enhance their customer relationships through our
            innovative CRM solutions. Before joining Salesforce, I worked as a
            sales consultant at TechSolutions, where I honed my skills in
            customer service, relationship management, and strategic planning.
            My journey in sales has been incredibly rewarding, allowing me to
            combine my passion for technology with a commitment to helping
            businesses grow.
          </p>
        )}
        {currentTab === "Recommended" && (
          <p className="max-w-[100%] text-[#969696]">
            If you're looking to maximize your CRM potential, I recommend
            starting with our comprehensive Salesforce Essentials package.<br/><br/> It's
            designed to give small businesses a robust toolset to manage
            customer relationships effectively. For those looking to scale, our
            Sales Cloud and Service Cloud solutions provide unparalleled
            flexibility and power. Additionally, I'd suggest taking advantage of
            our personalized training sessions to ensure your team gets the most
            out of our tools. Let's work together to find the best solutions
            tailored to your unique business needs!
          </p>
        )}
      </div>

        <div className="absolute left-3 top-[8%] max-lg:hidden">
          <img src='/QuestionMark.svg' alt="Question Mark" />
        </div>

        <div className="absolute left-3 top-[50%] max-lg:left-1.5">
          <img src='/Boxes.svg' alt="Boxes" className="max-lg:w-2/3" />
        </div>
    </div>
  );
};

export default DetailsWidget;
