"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import React, { ReactNode } from "react";
import { projects } from "../../public/projects";

// freelance
import img_bio from "@/public/images/freelance/bio-nu.png";
import img_categorize_group from "@/public/images/freelance/categorize-group.png";
import img_chemistry_nu from "@/public/images/freelance/chemistry-nu.png";
import img_colab_booking_bio_nu from "@/public/images/freelance/colab-booking-bio-nu.png";
import img_cv_xmmeenn from "@/public/images/freelance/cv-xmmeenn.png";
import img_physics_nu from "@/public/images/freelance/physics-nu.png";
import img_program_tonkatsu from "@/public/images/freelance/program-tonkatsu.png";
import img_queue_calling from "@/public/images/freelance/queue-calling.png";
import img_tools_system from "@/public/images/freelance/tool-system.png";

// project
import ditp from "@/public/images/projects/ditp.jpg";

type CardProps = {
  children: ReactNode;
};
function Card({ children }: CardProps) {
  return (
    <div className="grid grid-cols-[70px_1fr_70px] items-center justify-center">
      <div className="dark:border-gray-900 border-b border-dashed h-full w-full"></div>
      {children}
      <div className="dark:border-gray-900 border-b border-dashed h-full w-full"></div>
    </div>
  );
}

export default function Project() {
  const imageSlides = [img_cv_xmmeenn, img_physics_nu, ditp];
  const tabs = [
    {
      title: "Project",
      images: [],
    },
    {
      title: "Freelance",
      images: [
        img_bio,
        img_chemistry_nu,
        img_physics_nu,
        img_colab_booking_bio_nu,
        img_tools_system,
      ],
    },
    {
      title: "Learning",
      images: [
        img_cv_xmmeenn,
        img_categorize_group,
        img_queue_calling,
        img_program_tonkatsu,
      ],
    },
  ];
  const [tab, setTab] = React.useState("Freelance");

  return (
    <div>
      <div className="mx-[-100%] mt-12 h-[1px] bg-gray-200 dark:bg-gray-800" />

      <Card>
        <div className="flex w-full dark:border-gray-900 border-l border-dashed">
          <div className="w-full h-[170px] pl-12 pb-8 flex items-end ">
            <div>
              <div className="text-4xl font-semibold"> Work Experience 💻</div>
              <div className="text-lg text-black/60">
                I have worked on more than 20 projects.
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-[70px_1fr_70px] items-center justify-center">
        <div className="dark:border-gray-900 h-full w-full"></div>
        <div className="border-l border-t border-dashed border-gray-200 pl-12 py-8 grid grid-cols-2 gap-4">
          <div className="text-lg space-y-6">
            <div>
              Work experience 5 years. I am responsible for developing and
              maintaining various systems as assigned, including planning,
              designing, and developing software according to requirements.
            </div>
            <div>
              Additionally, I mentor and support team members to ensure smooth
              and efficient collaboration.
            </div>
          </div>

          <div className="mt-[-8rem]">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="w-full rounded-lg h-[350px] "
            >
              {imageSlides.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    aria-hidden
                    src={img}
                    alt="CV XMMEENN"
                    className="rounded-lg object-cover object-top border"
                    fill
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* tab */}
      <div className="flex justify-center items-center w-full space-x-4 mt-12">
        <div className="flex items-center space-x-4">
          {tabs.map((t, index) => (
            <div
              key={index}
              className={`p-3 w-36 text-center text-lg  rounded-lg ${
                tab === t.title
                  ? "bg-black text-white hover:bg-black/85  transition-all ease-in-out duration-300"
                  : "text-black border border-black text-black cursor-pointer transition-all ease-in-out duration-300"
              }`}
              onClick={() => setTab(t.title)}
            >
              {t.title}
            </div>
          ))}
        </div>
      </div>

      {/* tab content */}
      <div className="mt-12">
        {tabs.map((item, index) => (
          <div key={index}>
            {tab === item.title && (
              <div className="grid grid-cols-3 gap-4 relative w-full">
                {item.images.map((img, indexImg) => (
                  <div
                    key={indexImg}
                    className="overflow-hiddenn w-full h-[300px] relative shadow rounded "
                  >
                    <Image
                      aria-hidden
                      src={img}
                      alt={item.title}
                      className="object-cover object-top"
                      fill
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
