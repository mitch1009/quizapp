import { NextRequest, NextResponse } from "next/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createHeritageContext } from "@/server/trpc/context";
import { appRouter } from "@/server/trpc/main";
/**
 * Handles the incoming request and returns the response from the fetchRequestHandler.
 *
 * @param {NextRequest} req - The incoming request object.
 * @return {Promise<NextResponse>} The response from the fetchRequestHandler.
 */
const handler = async (req: NextRequest): Promise<NextResponse> => {
    const response = (await fetchRequestHandler({
        endpoint: "/api/trpc",
        req,
        router: appRouter,
        createContext: async () => await createHeritageContext({ headers: req.headers }),
    })) as any;
    return response;
};

export { handler as GET, handler as POST };
