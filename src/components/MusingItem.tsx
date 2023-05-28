import { type Musing } from "@prisma/client";
import Link from "next/link";
import { type FC } from "react";

type MusingItemProps = {
  musing: Omit<Musing, "createdAt" | "updatedAt" | "body">;
};

const MusingItem: FC<MusingItemProps> = ({ musing }) => (
  <li className="scroll-mt-16">
    <div>
      <header className="relative mb-10 xl:mb-0">
        <div className="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8">
          <time
            dateTime={musing.writtenAt.toISOString()}
            className="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50"
          >
            {musing.writtenAt.toLocaleDateString()}
          </time>
          <div className="h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
            <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
              <div className="flex">
                <time
                  dateTime={musing.writtenAt.toLocaleDateString()}
                  className="text-2xs/4 font-medium text-gray-500 dark:text-white/50 xl:hidden"
                >
                  {musing.writtenAt.toLocaleDateString()}
                </time>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
          <div className="typography mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
            <h2 className="text-lg font-bold">{musing.title}</h2>
            <p className="text-sky-300">{musing.author}</p>
            <Link href={`musings/${musing.id}`} className="text-xs">
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default MusingItem;
