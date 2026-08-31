# Editing news and team content

Announcements and staff members live in two data files. You do not need to
touch any HTML, and you do not need to write Hebrew dates.

| To change | Edit |
|---|---|
| Latest Announcements | `news.json` |
| Our Team, board, rabbinic advisor | `team.json` |

## Adding an announcement

1. Put the picture in the `images/` folder.
2. Open `news.json` on GitHub and press the pencil icon.
3. Copy an existing block and change it:

```json
{
  "date": "2026-09-14",
  "image": "images/my_picture.jpg",
  "alt": "Short description of the picture",
  "title": { "en": "English title", "he": "כותרת בעברית" },
  "desc":  { "en": "English text.",  "he": "טקסט בעברית." }
}
```

4. Press **Commit changes**. The site updates itself in about a minute.

Notes:
- Write the date as `YYYY-MM-DD`. The site prints "14 September 2026" and
  "14 בספטמבר 2026" for you.
- Order does not matter. The newest date always appears first.
- Every block needs a comma after it, except the last one.

## Changing the team

Edit `team.json` the same way. Members appear in the order listed.

```json
{
  "image": "images/their_photo.png",
  "name": { "en": "Their Name", "he": "השם שלהם" },
  "role": { "en": "Their role", "he": "התפקיד שלהם" }
}
```

If someone has no photograph yet, use `images/avatar_placeholder.jpg`. If a
photograph is missing or misspelled, the placeholder appears automatically
rather than a broken image.

Board and rabbinic advisor names are the `members` and `membersHe` lists in the
same file.

## If something breaks

The most common mistake is a missing or extra comma. Paste the file into
<https://jsonlint.com> to find it. If the news file cannot be read, the page
shows a short notice instead of the announcements, and nothing else is
affected.
