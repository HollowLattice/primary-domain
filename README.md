# Hollow Lattice — Site Setup Guide

## Your files
```
index.html     ← Main landing page (hero + services + contact)
privacy.html   ← Privacy policy (required for App Store & Google Play)
CNAME          ← Tells GitHub Pages to use your custom domain
```

## Step-by-step: GitHub Pages + hollowlattice.net

### 1. Create a GitHub account (if you don't have one)
Go to https://github.com and sign up.

### 2. Create a new repository
- Click the **+** button → **New repository**
- Name it anything (e.g., `hollowlattice-site` or `hollowlattice.github.io`)
- Set it to **Public**
- Click **Create repository**

### 3. Upload your files
- On the repo page, click **"uploading an existing file"** (or drag and drop)
- Upload `index.html`, `privacy.html`, and `CNAME`
- Click **Commit changes**

### 4. Enable GitHub Pages
- Go to **Settings** → **Pages** (left sidebar)
- Under "Source", select **Deploy from a branch**
- Branch: **main**, Folder: **/ (root)**
- Click **Save**

### 5. Configure your Porkbun DNS
Log into Porkbun → **Domain Management** → click **DNS** next to hollowlattice.net.

**Delete any existing A or CNAME records for the root domain**, then add these:

| Type  | Host | Answer                 |
|-------|------|------------------------|
| A     |      | 185.199.108.153        |
| A     |      | 185.199.109.153        |
| A     |      | 185.199.110.153        |
| A     |      | 185.199.111.153        |
| CNAME | www  | YOUR-USERNAME.github.io |

(Replace YOUR-USERNAME with your actual GitHub username)

The "Host" field for the A records should be blank (or `@` depending on how Porkbun displays it — it means the root domain).

### 6. Set custom domain in GitHub
- Back in repo **Settings** → **Pages**
- Under "Custom domain", type `hollowlattice.net`
- Click **Save**
- Check **"Enforce HTTPS"** once the DNS check passes (may take a few minutes to an hour)

### 7. Wait for DNS propagation
It usually takes 5–30 minutes, but can take up to 24 hours. You can check progress at https://dnschecker.org

---

## Done! Your site will be live at:
- **https://hollowlattice.net**
- **https://www.hollowlattice.net**
- **https://hollowlattice.net/privacy.html** ← this is the URL you'll give Apple & Google

---

## Editing your site later
1. Edit the HTML files locally
2. Push changes to GitHub (or edit directly on github.com)
3. Changes go live automatically in ~1 minute

## Things to customize
- **Company name**: search and replace "Hollow Lattice" if you want a different name
- **Email**: replace `hello@hollowlattice.net` with your actual contact email
- **Services**: update the 3 service cards in index.html to match your actual offerings
- **Privacy policy**: update once you know exactly what data your apps collect
