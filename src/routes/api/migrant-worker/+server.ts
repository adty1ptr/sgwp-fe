import { API_URL } from "$env/static/private";
import { error } from "@sveltejs/kit";

export async function GET() {
    try {
        const resp = await fetch(`${API_URL}/migrant-worker`);
        if (!resp.ok) throw new Error(`Error fetching JSON from ${resp.url}`);
        return resp;
    } catch (err) {
        throw error(404, "failed to load migrant worker")
    }
}