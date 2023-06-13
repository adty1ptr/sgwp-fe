import type { Fetch } from "$lib/types"

export async function fetchJSON(url: string, fetchFn: Fetch = fetch) {
	const response = await fetchFn(url)
	if (!response.ok) throw new Error(`Error fetching JSON from ${response.url}`)
	return await response.json()
}

export async function fetchPost(url: string, fetchFn: Fetch = fetch) {
	const response = await fetchFn(url, { method: 'POST' })
	if (!response.ok) throw new Error(`Error fetching JSON from ${response.url}`)
	return await response.json()
}