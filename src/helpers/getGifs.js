export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=t06xIqMEWOZLd3u1pVg0xsWE9N8zFDfo`;

  const resp = await fetch(url); // await debe ser usado SIEMPRE DENTRO de una función declarada como async.
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
