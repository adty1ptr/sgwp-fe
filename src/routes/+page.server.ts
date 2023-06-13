import { error } from '@sveltejs/kit';
import { fetchJSON } from '$lib/site/plugins.js';
import { API_URL } from '$env/static/private';

export async function load({ fetch }) {
    try {
        const resp = await fetchJSON(`${API_URL}/migrant-worker`, fetch);
        const migrants = await resp.data;
        return { migrants }
    } catch (err) {
        throw error(404, (err as Error).message);
    }
}