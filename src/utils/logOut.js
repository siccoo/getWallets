export const removeState = () => {
    localStorage.removeItem("authDetails");
    window.location.reload();
};