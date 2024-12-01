const API_URL = "http://89.111.169.145:5000";

export async function getResources() {
  const response = await fetch(API_URL + "/resources");

  return await response.json();
}

export async function getModels() {
  const response = await fetch(API_URL + "/models");

  return await response.json();
}

export async function transformData(resource, model) {
  const response = await fetch(API_URL + "/transform", {
    method: "POST",
    body: JSON.stringify({
        resource, 
        model
    })
  });

  return await response.json();
}
