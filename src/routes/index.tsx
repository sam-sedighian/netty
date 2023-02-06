import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Profile from '../components/profile';

export default component$(() => {
  return (
    <div class="flex h-screen w-screen items-center justify-center bg-black">
      <h1 class="my-10 text-6xl">Who's watching?</h1>
      <div class="flex justify-center space-x-9">
        <Profile />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Netty',
  meta: [
    {
      name: 'description',
      content: 'Netty is a knockoff of Netflix using Qwik City',
    },
  ],
};
