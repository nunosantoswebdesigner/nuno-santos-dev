import { GlowCard, GlowCardGrid } from "@/registry/components/glow-card-grid"

export default function Team01() {
  return (
    <div className="container px-4 py-8">
      <GlowCardGrid className="lg:grid-cols-4">
        {CARDS.map((card) => (
          <GlowCard
            key={card.name}
            name={card.name}
            handle={card.handle}
            avatar={card.avatar}
          />
        ))}
      </GlowCardGrid>
    </div>
  )
}

// Demo avatars only. Replace them with your own URLs.
const CARDS = [
  {
    name: "shadcn",
    handle: "@shadcn",
    avatar: "https://assets.nunosantos.me/avatars/x/shadcn.webp",
  },
  {
    name: "Evil Rabbit",
    handle: "@evilrabbit_",
    avatar: "https://assets.nunosantos.me/avatars/x/evilrabbit_.webp",
  },
  {
    name: "OrcDev",
    handle: "@orcdev",
    avatar: "https://assets.nunosantos.me/avatars/x/orcdev.webp",
  },
  {
    name: "David Haz",
    handle: "@davidhaz",
    avatar: "https://assets.nunosantos.me/avatars/x/davidhaz.webp",
  },
  {
    name: "Shu",
    handle: "@shuding",
    avatar: "https://assets.nunosantos.me/avatars/x/shuding.webp",
  },
  {
    name: "Emil Kowalski",
    handle: "@emilkowalski",
    avatar: "https://assets.nunosantos.me/avatars/x/emilkowalski.webp",
  },
  {
    name: "Aaron",
    handle: "@aaronmahlke",
    avatar: "https://assets.nunosantos.me/avatars/x/aaronmahlke.webp",
  },
  {
    name: "Nuno Santos",
    handle: "@nunosantosdev",
    avatar: "https://assets.nunosantos.me/avatars/x/nunosantosdev.webp",
  },
]
