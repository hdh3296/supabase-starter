# Supabase Starter
바로가기: https://vercel.com/new/hdh3296s-projects/templates/next.js/supabase

# Supabase Starter
바로가기: https://vercel.com/new/hdh3296s-projects/templates/next.js/supabase

A Next.js App Router template configured with cookie-based auth using Supabase, TypeScript and Tailwind CSS.

## Deploy

## View Demo

### Framework

Next.js

### Use Case

Starter Authentication

### CSS

Tailwind

### Database

Supabase

### Auth

Supabase Auth

## Supabase Starter OG

### Features

* Works across the entire Next.js stack  
   * App Router  
   * Pages Router  
   * Middleware  
   * Client  
   * Server  
   * It just works!
* supabase-ssr. A package to configure Supabase Auth to use cookies
* Styling with Tailwind CSS
* Components with shadcn/ui
* Optional deployment with Supabase Vercel Integration and Vercel deploy  
   * Environment variables automatically assigned to Vercel project

### Demo

You can view a fully working demo at demo-nextjs-with-supabase.vercel.app.

### Deploy to Vercel

Vercel deployment will guide you through creating a Supabase account and project.

After installation of the Supabase integration, all relevant environment variables will be assigned to the project so the deployment is fully functioning.

The above will also clone the Starter kit to your GitHub, you can clone that locally and develop locally.

If you wish to just develop locally and not deploy to Vercel, follow the steps below.

### Clone and run locally

1. You'll first need a Supabase project which can be made via the Supabase dashboard
2. Create a Next.js app using the Supabase Starter template npx command  

터미널:
```
npx create-next-app -e with-supabase
```

3. Use `cd` to change into the app's directory  
터미널:
```
cd name-of-new-app
```

4. Rename `.env.example` to `.env.local` and update the following:  

터미널:
```
NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
```
Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in your Supabase project's API settings.

5. You can now run the Next.js local development server:  
터미널:
```
npm run dev
```

The starter kit should now be running on localhost:3000.


6. This template comes with the default shadcn/ui style initialized. If you instead want other ui.shadcn styles, delete `components.json` and re-install shadcn/ui.

> Check out the docs for Local Development to also run Supabase locally.

### Feedback and issues

Please file feedback and issues over on the Supabase GitHub org.

### More Supabase examples

* Next.js Subscription Payments Starter
* Cookie-based Auth and the Next.js 13 App Router (free course)
* Supabase Auth and the Next.js App Router
