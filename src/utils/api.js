export const request = (url) => {
  console.log("Fetching Data..");
  const result = new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        const { range } = result;
        resolve(range);
      })
      .catch((error) => reject(error));
  });
  return result;
};
