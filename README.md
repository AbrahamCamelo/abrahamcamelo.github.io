# Portfolio Website

Static personal portfolio built with plain HTML, CSS, and minimal JavaScript. It is ready to host on GitHub Pages with no build step.

## Files

- `index.html`: main content and page structure
- `styles.css`: visual design and responsive layout
- `script.js`: mobile navigation behavior
- `assets/me.jpeg`: profile image used in the hero section
- `assets/resume.pdf`: linked resume file

## How to Edit the Content

Most content is intentionally kept in `index.html` so it is easy to update directly.

Edit these areas in `index.html`:

- Hero: name, role, location, email, headline, and buttons
- About: short intro paragraph
- Selected Projects: project titles, summaries, methods, and tools
- Skills: skill card titles and descriptions
- Experience: role, organization, dates, location, and focus
- Publications: publication titles
- Contact: email, LinkedIn, GitHub, resume, and location

Useful tip:

- Search by section IDs such as `#about`, `#projects`, or `#contact` to find the right block quickly.

## How to Replace the Profile Image

1. Prepare a square or portrait image for best results.
2. Replace `assets/me.jpeg` with your new file.
3. Keep the same filename if you do not want to update the HTML.
4. If you use a different filename, update the `src` in the hero image inside `index.html`.

## How to Replace the Resume

1. Replace `assets/resume.pdf` with your new PDF.
2. Keep the same filename if you do not want to update any links.
3. If you rename the file, update every `href="assets/resume.pdf"` reference in `index.html`.

## How to Deploy with GitHub Pages

1. Create a GitHub repository and upload this folder.
2. Push the files to the repository's default branch, usually `main`.
3. In GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the branch and choose the root folder (`/`), then save.
6. GitHub Pages will publish the site and give you a public URL.

## Local Preview

You can preview the site by opening `index.html` in a browser. No package install or build command is required.
