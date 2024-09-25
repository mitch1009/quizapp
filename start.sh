#!/bin/sh

# Run Prisma migrations with --accept-data-loss flag
npx prisma db push
npx prisma migrate deploy 
# Start the application
node server.js
