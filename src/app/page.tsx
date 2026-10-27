const services = [
  { name: "AI Router", detail: "FastAPI · LiteLLM · Open WebUI", status: "up" as const },
  { name: "Local LLMs", detail: "llama.cpp on home GPU", status: "up" as const },
  { name: "Hermes Agent", detail: "Self-hosted agent runtime", status: "up" as const },
  { name: "Pi-hole", detail: "House-wide DNS filtering", status: "up" as const },
  { name: "Plex", detail: "Media server", status: "up" as const },
  { name: "Minecraft", detail: "OurProServer · Fabric", status: "up" as const },
];

export default function Home() {
  const up = services.filter((s) => s.status === "up").length;

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-16 sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,197,94,0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(14,165,233,0.1),_transparent_45%)]"
      />
      <div className="relative mx-auto max-w-3xl">
        <p className="font-mono text-xs tracking-[0.2em] text-emerald-400/80 uppercase">
          maxwellnixon.com · live demo
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-zinc-50 sm:text-5xl">
          Homelab Pulse
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-400">
          Public status board for the services Maxwell runs at home — AI stack,
          DNS, media, and game servers.
        </p>

        <div className="mt-8 flex flex-wrap gap-6 font-mono text-sm text-zinc-300">
          <div>
            <span className="text-zinc-500">services</span>{" "}
            <span className="text-zinc-100">{services.length}</span>
          </div>
          <div>
            <span className="text-zinc-500">up</span>{" "}
            <span className="text-emerald-400">{up}</span>
          </div>
          <div>
            <span className="text-zinc-500">checked</span>{" "}
            <span className="text-zinc-100">demo snapshot</span>
          </div>
        </div>

        <ul className="mt-10 divide-y divide-zinc-800/80 border-y border-zinc-800/80">
          {services.map((service) => (
            <li
              key={service.name}
              className="flex items-center justify-between gap-4 py-4"
            >
              <div>
                <p className="font-display text-lg text-zinc-100">
                  {service.name}
                </p>
                <p className="mt-0.5 font-mono text-xs text-zinc-500">
                  {service.detail}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-emerald-400 uppercase">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                {service.status}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-zinc-600">
          <a
            className="text-zinc-400 underline-offset-2 hover:text-zinc-200 hover:underline"
            href="https://gitlab.com/Maxwell333/homelab-pulse"
          >
            Source on GitLab
          </a>
          <span aria-hidden>·</span>
          <a
            className="text-zinc-400 underline-offset-2 hover:text-zinc-200 hover:underline"
            href="https://vercel.com/maxwells-projects-adf7ba8b/homelab-pulse"
          >
            Deployed on Vercel
          </a>
          <span aria-hidden>·</span>
          <a
            className="text-zinc-400 underline-offset-2 hover:text-zinc-200 hover:underline"
            href="https://www.maxwellnixon.com"
          >
            maxwellnixon.com
          </a>
        </p>
      </div>
    </main>
  );
}
