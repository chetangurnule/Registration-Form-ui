export const registerUser = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/users/create-user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data: data }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    console.log("Error registering", err.message);
  }
};

export const updateUser = async (id, data) => {
  console.log(id, data);
  try {
    const res = await fetch(
      `http://localhost:3000/users/update-user?id=${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ data: data }),
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonResponse = await res.json();
    return jsonResponse;
  } catch (err) {
    console.log("Error updating user", err.message);
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/users/delete-user/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonResponse = await res.json();
    return jsonResponse;
  } catch (err) {
    console.log("Error updating user", err.message);
  }
};

export const getUser = async () => {
  try {
    const data = await fetch("http://localhost:3000/users/get-user");
    if (!data.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonData = await data.json();
    return jsonData;
  } catch (err) {
    console.log("Error fetching user", err.message);
  }
};
