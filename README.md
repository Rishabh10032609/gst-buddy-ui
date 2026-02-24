# Welcome to GST Buddy UI



**Use your preferred IDE**

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev

# Step 5: To share the URL without hosting on cloud using localhost.run
ssh -R 80:localhost:8080 localhost.run   

# without ssh key
ssh -R 80:localhost:8080 nokey@localhost.run   

Also add the url in allowedhost in vite.config.ts
eg: export default defineConfig({
  server: {
    allowedHosts: ['2b69a7405d96fe.lhr.life']
  }
})
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
