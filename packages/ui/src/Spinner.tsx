export const Spinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm">
      {/* Animated Spinner */}
      <div className="relative flex items-center justify-center">
        {/* Outer Glow */}
        <div className="absolute h-24 w-24 animate-pulse rounded-full bg-blue-500/20 blur-xl" />

        {/* Spinner */}
        <div className="h-20 w-20 animate-spin rounded-full border-[5px] border-transparent border-t-blue-500 border-r-cyan-400 border-b-purple-500 border-l-pink-500" />

        {/* Inner Circle */}
        <div className="absolute h-12 w-12 rounded-full bg-black" />
      </div>

      {/* Loading Text */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold text-white">Loading...</h2>

        <p className="mt-2 text-sm text-slate-400">
          Please wait while we prepare everything for you.
        </p>
      </div>

      {/* Animated Dots */}
      <div className="mt-6 flex gap-2">
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-purple-500" />
      </div>
    </div>
  );
};
