export async function getPosts() {
    const answer = await fetch(`${process.env.API_URL}/api/posts?populate=image`);
    return await answer.json()
}

export async function getPost(url) {
    const answer = await fetch(`${process.env.API_URL}/api/posts?filters[url]=${url}&populate=image`)
    return await answer.json()


}