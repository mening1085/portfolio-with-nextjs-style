import React from "react";
import { ReactNode } from "react";
import Image from "next/image";

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
function Heroes() {
  return (
    <div className="py-10">
      <Card>
        <div className="flex w-full dark:border-gray-900 border-x border-dashed">
          <div className="w-1/3 h-[70px]"></div>
          <div className="dark:border-gray-900 border-x border-dashed w-1/3 h-[70px]"></div>
          <div className="w-1/3 h-[70px]"></div>
        </div>
      </Card>

      <Card>
        <div className="w-full dark:border-gray-900 border border-dashed border-gray-200 py-6">
          <h1 className="text-[max(48px,min(5vw,76px))] text-center font-semibold">
            Full Stack Developer
          </h1>
        </div>
      </Card>

      <Card>
        <div className="w-full py-4 flex justify-center items-center dark:border-gray-900 border-x border-b border-dashed border-gray-200">
          <div className="w-3/4">
            <div className="flex items-center justify-center gap-4 text-lg">
              <div>
                I'm a{" "}
                <span className="font-semibold">Full Stack developer</span>{" "}
                responsible for the entire development process, from{" "}
                <span className="font-semibold">system structure design</span>{" "}
                and{" "}
                <span className="font-semibold">
                  database architecture to frontend and backend development.
                </span>{" "}
                I plan and manage work using{" "}
                <span className="font-semibold">Jira Software</span> while
                following{" "}
                <span className="font-semibold">
                  Agile Scrum methodologies.
                </span>{" "}
                Additionally, I mentor and{" "}
                <span className="font-semibold">support team members</span> to
                ensure smooth and efficient collaboration.
              </div>
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-full h-[200px] w-[200px] relative">
                  <Image
                    className="object-cover"
                    src="/images/me2.jpg"
                    alt="Profile"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="w-full flex justify-center items-center dark:border-gray-900 border-x border-b border-dashed border-gray-200">
          <div className="w-1/3 text-lg">
            <div className="flex justify-center">
              <div className="w-full dark:border-gray-900 border-x p-9 border-dashed">
                <div className="flex justify-center gap-4">
                  <button className="bg-black dark:bg-white px-3 py-2 text-white dark:text-black rounded-md hover:bg-black/75 hover:dark:bg-gray-200">
                    Download CV
                  </button>
                  <button className="dark:border-white border border-black/50 px-3 py-2 text-black dark:text-white rounded-md hover:bg-gray-100 hover:dark:bg-black/25">
                    See Projects
                  </button>
                </div>

                <div className="text-center mt-4 ">
                  <span className="text-sm font-light text-black/60">
                    Work experience in over 20 projects.
                  </span>{" "}
                  🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-[70px_1fr_70px] items-center justify-center">
        <div className="dark:border-gray-900 border-dashed h-full w-full"></div>
        <div className="flex w-full dark:border-gray-900 border-x border-dashed">
          <div className="w-1/3 h-[70px]"></div>
          <div className="dark:border-gray-900 border-x border-dashed w-1/3 h-[70px]"></div>
          <div className="w-1/3 h-[70px]"></div>
        </div>
        <div className="dark:border-gray-900 border-dashed h-full w-full"></div>
      </div>
    </div>
  );
}

export default Heroes;
