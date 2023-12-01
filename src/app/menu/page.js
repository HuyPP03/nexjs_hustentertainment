import MenuItem from "@/components/Menu/MenuItem";
import Link from "next/link";
import { MicrophoneIcon, MusicalNoteIcon } from "@heroicons/react/24/outline";
export default function Menu() {
  return (
    <section>
      <div className="relative isolate overflow-hidden bg-slate-600 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Everything is better with a Song
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Concerts will bring you a feeling of comfort and relaxation
                after working days.
              </p>
              <div className="flex max-w-md gap-x-4 items-center">
                <label htmlFor="search" className="sr-only">
                  Email address
                </label>
                <input
                  id="search"
                  name="search"
                  type="text"
                  autoComplete="search"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 w-auto "
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
      <div className="flex items-center justify-center py-6">
        <Link
          href="/menu"
          className="items-center bg-primary rounded-full text-white px-10 py-1 font-semibold"
        >
          See more
        </Link>
      </div>
    </section>
  );
}
