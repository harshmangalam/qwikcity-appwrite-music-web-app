import { component$ } from "@builder.io/qwik";
import {
  ArrowRightIcon,
  HomeFilledIcon,
  HomeOutlineIcon,
  LibraryOutlineIcon,
  PlusIcon,
  SearchFilledIcon,
  SearchOutlineIcon,
} from "~/icons";
import { NavLinkItem } from "./nav-link-item";

export const Sidebar = component$(() => {
  return (
    <aside class="col-span-3 row-span-5 h-full flex flex-col gap-2">
      <ul class="py-2 px-3 bg-base rounded-lg">
        <NavLinkItem
          href="/"
          icon={HomeOutlineIcon}
          activeIcon={HomeFilledIcon}
          name="Home"
        />
        <NavLinkItem
          activeIcon={SearchFilledIcon}
          href="/search/"
          icon={SearchOutlineIcon}
          name="Search"
        />
      </ul>

      <div class="flex-1 bg-base rounded-lg">
        <div>
          <header class="py-2 px-4 flex items-center gap-2 text-[#a7a7a7]">
            <button class="flex items-center gap-3 font-bold hover:text-white py-1 px-2">
              <span>
                <LibraryOutlineIcon />
              </span>
              <span>Your Library</span>
            </button>
            <div class="flex-1 flex justify-end">
              <button class="p-2 hover:text-white ">
                <PlusIcon />
              </button>
            </div>
            <button class="p-2 hover:text-white">
              <ArrowRightIcon />
            </button>
          </header>

          <div class="my-2 mx-4 ">
            <div class="scroll-smooth flex items-center overflow-x-scroll">
              <button
                role="checkbox"
                class="scroll-me-2 mr-2 rounded-full px-3 py-1 bg-tinted-base"
              >
                <span class="text-sm font-normal text-white">Playlists</span>
              </button>
              <button
                role="checkbox"
                class="scroll-me-2 mr-2 rounded-full px-3 py-1 bg-tinted-base"
              >
                <span class="text-sm font-normal text-white">Artists</span>
              </button>

              <button
                role="checkbox"
                class="scroll-me-2 mr-2 rounded-full px-3 py-1 bg-tinted-base"
              >
                <span class="text-sm font-normal text-white">Albums</span>
              </button>
              <button
                role="checkbox"
                class="scroll-me-2 mr-2 rounded-full px-3 py-1 bg-tinted-base"
              >
                <span class="text-sm font-normal text-white whitespace-nowrap">
                  Podcasts & Shows
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
});
