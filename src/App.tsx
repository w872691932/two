/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ShaderBackground from '@/components/ui/shader-background';

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-sans">
      <ShaderBackground />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <h1 className="text-6xl font-bold mb-4 tracking-tighter">Shader Background</h1>
        <p className="text-xl opacity-80 max-w-2xl">
          A WebGL shader background component integrated into a React application with Tailwind CSS and TypeScript.
        </p>
      </main>
    </div>
  );
}
