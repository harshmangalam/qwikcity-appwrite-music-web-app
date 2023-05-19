import { Slot, component$ } from "@builder.io/qwik";
import { Footer } from "~/components/footer";
import { Sidebar } from "~/components/sidebar";

export default component$(() => {
  return (
    <div class="p-2 h-screen bg-black text-white">
      <div class="grid grid-cols-12 gap-2 grid-rows-6 h-full w-full">
        <Sidebar />
        <div class="col-span-7 md:col-span-7 lg:col-span-8 xl:col-span-9 row-span-5 bg-base relative rounded-lg overflow-y-auto">
          <Slot />
        </div>
        <Footer />
      </div>
    </div>
  );
});
