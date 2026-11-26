import Image, { type StaticImageData } from "next/image";

export type ProjectCardProps = {
  /** Назва проєкту. */
  title: string;
  /** Короткий опис: одне-два речення. */
  description: string;
  /** Адреса сторінки проєкту. Вся картка клікабельна. */
  href: string;
  /** Текст посилання. */
  linkLabel?: string;
  /** Обкладинка. Імпортується з `assets`. */
  image: StaticImageData;
  /** Опис обкладинки для скрінрідера. Порожній, якщо картинка декоративна. */
  imageAlt?: string;
};

/**
 * Картка проєкту: обкладинка, назва, опис і посилання. Вся картка є посиланням.
 */
export function ProjectCard({
  title,
  description,
  href,
  linkLabel = "Дивитись проєкт",
  image,
  imageAlt = "",
}: ProjectCardProps) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-card border border-line bg-surface transition-colors hover:border-ink has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-ink">
      <div className="relative aspect-cover w-full">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <h3 className="font-display text-lead text-ink">{title}</h3>
        <p className="text-body text-ink-muted">{description}</p>
        <a
          href={href}
          className="mt-2 inline-flex min-h-control items-center self-start text-label text-ink underline underline-offset-4 outline-none after:absolute after:inset-0"
        >
          {linkLabel}
        </a>
      </div>
    </article>
  );
}
