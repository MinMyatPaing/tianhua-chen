# Running This Portfolio Under Your Own GitHub Account

This guide will help you set up and deploy this portfolio website under your own GitHub account using GitHub Pages.

## 1. Fork the Repository
1. Go to the GitHub page of this repository.
2. Click the **Fork** button at the top right to create a copy under your own account.

## 2. Clone Your Fork
1. On your forked repository page, click the **Code** button and copy the URL.
2. Open your terminal and run:
   ```zsh
   git clone https://github.com/MinMyatPaing/tianhua-chen.git
   ```

## 3. Update the `homepage` Field
1. Open the `package.json` file.
2. Change the `homepage` field to match your GitHub username and repository name. For example:
   ```json
   "homepage": "https://<your-github-username>.github.io/<your-repo-name>"
   ```

## 4. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) installed.

In current directory, run:
```zsh
npm install
```

## 5. Deploy to GitHub Pages
1. Commit any changes (such as the `homepage` update):
   ```zsh
   git add .
   git commit -m "[Commit Message]"
   git push
   ```
2. Deploy the site:
   ```zsh
   npm run deploy
   ```
   This will build the project and publish it to the `gh-pages` branch of your repository.

## 6. Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** > **Pages**.
3. Under **Source**, select the `gh-pages` branch and save.
4. Your site will be available at the URL you set in the `homepage` field.

---

## 7. Adding New Publications and Research Content

### Adding Images
1. Place new images (e.g., publication covers, research figures) in the `src/assets/` folder.
2. Use descriptive filenames (e.g., `my-new-publication.png`).

### Adding Publications or Research Entries
1. Open the `src/constants/index.js` file.
2. Locate the arrays or objects for publications and research (e.g., `publications`, `researchProjects`).
3. Add a new entry following the existing format. For example:
   ```js
   // ...existing code...
   {
     title: "New Publication Title",
     authors: "Author Names",
     year: 2025,
     image: require("../assets/my-new-publication.png"),
     link: "https://link-to-publication.com"
   }
   // ...existing code...
   ```
4. Save the file. The new content will appear automatically on the website.

### Final Step: Make Changes Live
After adding new images and updating the publications or research entries, you must:

1. **Commit your changes:**
   ```zsh
   git add .
   git commit -m "Add new publication/research content"
   git push
   ```
2. **Redeploy the site:**
   ```zsh
   npm run deploy
   ```

Only after these steps will your new content appear on the hosted website.

---
If you have any issues, please refer to the `README.md` or contact Min (u2289897).
