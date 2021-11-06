export const setAuth = (data) => {
  localStorage.setItem("authDetails", JSON.stringify(data));
};

export const getAuth = (type) => {
  let data = localStorage.getItem("authDetails");
  if (data == null) {
    return false;
  } else {
    data = JSON.parse(data);
    return type ? data.token : data;
  }
};
