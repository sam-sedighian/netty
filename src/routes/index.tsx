import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex h-screen w-screen items-center justify-center bg-black">
      <h1 class="text-6xl text-white">Hello World</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Netty",
  meta: [
    {
      name: "description",
      content: "Netty is a knockoff of Netflix using Qwik City",
    },
  ],
};
