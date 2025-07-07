export const fakeLoginApi = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username && password) {
        const fakeToken = `jwt- ${Math.random().toString(36).substring(2)}`;
        resolve({ token: fakeToken, username });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};
