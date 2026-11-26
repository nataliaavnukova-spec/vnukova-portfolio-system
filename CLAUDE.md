@AGENTS.md

# vnukova-portfolio-system

Портфоліо Natalia Vnukova (ДЗ3): перший екран, зібраний з токенів і компонентів дизайн-системи; усе показується в Storybook.

## Робота з Git

- Уся робота йде лише в гілці `main`. Нових гілок не створювати, поки Наталя прямо не попросить.
- Перед кожним `git push` питати підтвердження: «так» у чаті + діалог дозволу. Пуш у `main` публікує сайт на Vercel.

## Стек

Next.js (App Router) + TypeScript + Tailwind v4. Деталі — після кроку 5.

## Токени

Єдине джерело — блок `@theme` у `app/globals.css` (стандартні кольори, розміри тексту й радіуси Tailwind скинуті). Таблиця й рішення: `docs/tokens-draft.md`. Шрифти — `app/fonts.ts`.

- Кольори: `canvas`, `surface`, `line`, `accent`, `ink`, `ink-muted`, `danger`.
- Текст: `caption`, `body`, `label`, `lead`, `heading`, `display`; шрифти `font-sans`, `font-display`.
- Радіуси: `control`, `card`. Пропорції: `avatar`, `cover`.
- Відступи компонентів: лише 8, 12, 16, 24, 32 px (класи 2, 3, 4, 6, 8). Рівень сторінки: `nav-gap`, `stack`, `section`, `page-lg/md/sm`.
- Заборонено: hex, `text-white`/`text-sm`/`rounded-lg`, значення в `[...]`.

## Компоненти

Лежать у `components/<Назва>/` (компонент, історія `.stories.tsx`, документація `.mdx`).

- `Button` — `variant` primary/secondary, `href` (стає посиланням), `disabled` + `disabledReason`.
- `Navigation` — `items` (id, label, href), `activeId`, `language` UA/EN + `onLanguageChange`; до 1024 px меню в панелі за кнопкою. Логотип: `assets/logo-n.svg`.
- `ProjectCard` — `title`, `description`, `href`, `image` (імпорт з `assets`), `imageAlt`, `linkLabel`; вся картка клікабельна. Заповнювач обкладинки: `assets/cover-placeholder.svg`.

## Правила

Заповнюється на кроці 5.

## Документи

- План сайту: `docs/site-plan.md`
- План ДЗ3: `docs/hw3-plan.md`
- Скіли: `.claude/skills/storybook/SKILL.md`, `.claude/skills/vercel/SKILL.md`
