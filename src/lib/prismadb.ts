import { PrismaClient } from '@prisma/client';

// Global variable to hold prisma
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Use the existing PrismaClient instance if available, otherwise create a new instance
// eslint-disable-next-line
const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
