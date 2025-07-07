const saveAuthToLocal = (authState) => {
    localStorage.setItem("auth", JSON.stringify(authState));
  };
  
  const loadAuthFromLocal = () => {
    try {
      const serialized = localStorage.getItem("auth");
      if (serialized === null) return undefined;
      return JSON.parse(serialized);
    } catch (error) {
      console.error("failed to load auth from localStorage", error);
      return undefined;
    }
  };
  
  const clearAuthFromLocal = () => {
    localStorage.removeItem("auth");
  };
  
  export { saveAuthToLocal, loadAuthFromLocal, clearAuthFromLocal };
  