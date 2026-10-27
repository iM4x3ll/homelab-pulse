# Homelab Pulse

Public status board for the services running in [Maxwell Nixon](https://www.maxwellnixon.com)’s homelab — AI stack, DNS, media, and game servers.

**Live demo:** [homelab-pulse.vercel.app](https://homelab-pulse.vercel.app)

## What it shows

| Service      | Role                          |
| ------------ | ----------------------------- |
| AI Router    | FastAPI · LiteLLM · Open WebUI |
| Local LLMs   | llama.cpp on home GPU         |
| Hermes Agent | Self-hosted agent runtime     |
| Pi-hole      | House-wide DNS filtering      |
| Plex         | Media server                  |
| Minecraft    | OurProServer · Fabric         |

Demo snapshot UI — green pulse indicators, compact ops aesthetic.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS 4
- Deployed on [Vercel](https://vercel.com) from [GitHub](https://github.com/iM4x3ll/homelab-pulse)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Links

- Portfolio: [maxwellnixon.com](https://www.maxwellnixon.com)
- Source: [github.com/iM4x3ll/homelab-pulse](https://github.com/iM4x3ll/homelab-pulse) · [GitLab](https://gitlab.com/Maxwell333/homelab-pulse)
- Live: [homelab-pulse.vercel.app](https://homelab-pulse.vercel.app)
